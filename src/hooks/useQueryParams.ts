import { type Dispatch, useMemo, useReducer } from "react";

const CONSTANTS = {
  DEFAULT_PAGE: 1,
  DEFAULT_SIZE: 10,
  LOGICAL_GROUP_REGEX: /^(and|or|not|nor)\((.*)\)$/s,
  EXPRESSION_REGEX: /^(?<key>[^\[\]]+)\[(?<operator>eq|gt|gte|in|lt|lte|ne|nin)\]:\[(?<type>string|number|boolean|date)\](?<value>[^();]+)$/
} as const;

export type Type = "string" | "number" | "boolean" | "date";
export type Operator = "eq" | "gt" | "gte" | "in" | "lt" | "lte" | "ne" | "nin";
export type LogicalOperator = "and" | "not" | "nor" | "or";
export type Direction = "asc" | "desc";

export type Sort = {
  key: string;
  direction: Direction;
};

export type Expression = {
  key: string;
  operator: Operator;
  type: Type;
  value: string | string[];
}

export type LogicalGroup = {
  operator: LogicalOperator;
  entries: (Expression | LogicalGroup)[];
};

export type Filter = Expression | LogicalGroup;

export type State = {
  page: number;
  size: number;
  sort: Sort[];
  filter: Filter[];
};

const initialize = (init?: Partial<State>): State => ({
  page: init?.page || CONSTANTS.DEFAULT_PAGE,
  size: init?.size || CONSTANTS.DEFAULT_SIZE,
  sort: init?.sort || [],
  filter: init?.filter || [],
});

const reduce = (state: State, action: Partial<State>): State => ({ ...state, ...action });

const isLogicalGroup = (filter: Filter): filter is LogicalGroup => (filter as LogicalGroup).operator !== undefined && Array.isArray((filter as LogicalGroup).entries);

const serialize = (filters: Filter[]): string => {
  const entries: string[] = [];
  for (const filter of filters) {
    if (isLogicalGroup(filter)) {
      entries.push(`${ filter.operator }(${ serialize(filter.entries) })`);
    } else {
      entries.push(`${ filter.key }[${ filter.operator }]:[${ filter.type }]${ Array.isArray(filter.value) ? filter.value.join(",") : filter.value }`);
    }
  }
  return entries.join(";");
};

const split = (input: string): string[] => {
  const entries: string[] = [];

  let depth = 0;
  let current = '';
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '(') {
      current += char;
      depth++;
    } else if (char === ')') {
      current += char;
      depth--;
    } else if (char === ';' && depth === 0) {
      entries.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.length > 0) {
    entries.push(current.trim());
  }

  return entries;
};

const deserialize = (str: string): Filter[] => {
  const input = str.trim();

  if (CONSTANTS.LOGICAL_GROUP_REGEX.test(input)) {
    const [, operator, rawEntries] = input.match(CONSTANTS.LOGICAL_GROUP_REGEX) as [never, LogicalOperator, string];
    const entries = split(rawEntries).flatMap(deserialize);
    if (operator === "not" && entries.length !== 1) {
      throw new Error(`'not' operator expects exactly one sub-expression`);
    }
    return [{ operator: operator, entries: entries }];
  } else if (CONSTANTS.EXPRESSION_REGEX.test(input)) {
    const match = input.match(CONSTANTS.EXPRESSION_REGEX) as RegExpMatchArray;
    const { key, operator, type, value } = match.groups as Record<keyof Expression, string>;
    return [{ key, operator: operator as Operator, type: type as Type, value }];
  } else if (input.includes(";")) {
    return split(input).flatMap(deserialize);
  }

  return [];
};

const useQueryParams = (): { state: State, query: string, dispatch: Dispatch<State> } => {
  const [state, dispatch] = useReducer(reduce, initialize());

  const query = useMemo((): string => {
    const params = [];
    if (state.page !== CONSTANTS.DEFAULT_PAGE) {
      params.push(`page=${ state.page }`);
    }
    if (state.size !== CONSTANTS.DEFAULT_SIZE) {
      params.push(`size=${ state.size }`);
    }
    if (state.sort.length > 0) {
      params.push(`sort=${ state.sort.map((sort) => `${ sort.key }:${ sort.direction }`).join(";") }`);
    }
    if (state.filter.length > 0) {
      params.push(`filter=${ serialize(state.filter) }`);
    }
    return !params.length ? "" : `?${ params.join("&") }`;
  }, [state]);

  return { state, query, dispatch };
};

export default useQueryParams;
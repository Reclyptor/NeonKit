import type { CSSProperties, ReactNode } from "react";
import { theme } from "~/styles/theme.css.ts";
import { container, input } from "~/components/Input/style.css.ts";
import clsx from "clsx";

export type InputProps = {
  before?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  after?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
};

const Input = ({ before, prefix, children, suffix, after, className, style, ...intrinsic }: InputProps) => {
  return (
    <div className={ clsx(theme, container, className) } style={ style }>
      { before } { prefix }
      <input { ...intrinsic } className={ clsx(theme, input) } />
      { suffix } { after }
    </div>
  );
};

export default Input;
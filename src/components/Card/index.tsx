import type {HTMLAttributes, ReactNode} from "react";
import { theme } from "~/styles/theme.css";
import { card as style, underlay, header, footer } from "~/components/Card/style.css";
import clsx from "clsx";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  [key: string]: any;
};

const Card = (props: CardProps) => {
  return (
    <div { ...props } className={ clsx(theme, style, props.className) }>
      <div className={ underlay } />
      { props.header && <div className={ clsx(theme, header) }>{ props.header }</div> }
      { props.children }
      { props.footer && <div className={ clsx(theme, footer) }>{ props.footer }</div> }
    </div>
  );
};

export default Card;
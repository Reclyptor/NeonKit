import type { HTMLAttributes, ReactNode } from "react";
import { theme } from "~/styles/theme.css";
import { card as style, underlay, header, footer } from "~/components/Card/style.css";
import clsx from "clsx";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  [key: string]: any;
};

const Card = ({ header: headerNode, children, footer: footerNode, className, ...intrinsic }: CardProps) => {
  return (
    <div { ...intrinsic } className={ clsx(theme, style, className) }>
      <div className={ underlay } />
      { header && <div className={ clsx(theme, header) }>{ headerNode }</div> }
      { children }
      { footer && <div className={ clsx(theme, footer) }>{ footerNode }</div> }
    </div>
  );
};

export default Card;
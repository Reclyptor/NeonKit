import type { ButtonHTMLAttributes } from "react";
import { theme } from "~/styles/theme.css";
import { button, variants } from "~/components/Button/style.css";
import clsx from "clsx";
import { cva } from "class-variance-authority";

export const style = cva(button, variants);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "small" | "large";
  variant?: "primary" | "secondary";
  [key: string]: any;
};

const Button = ({ size, variant, className, ...intrinsic }: ButtonProps) => {
  return (
    <button { ...intrinsic } className={ clsx(theme, style({ size, variant }), className) } />
  );
};

export default Button;
import { type ButtonHTMLAttributes, type MouseEvent, useState, useRef, useEffect } from "react";
import { theme } from "~/styles/theme.css";
import { button, variants, bar, barVariants, content } from "~/components/Button/style.css";
import { cva } from "class-variance-authority";
import clsx from "clsx";

export const style = cva(button, variants);
export const progressStyle = cva(bar, barVariants);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "small" | "large";
  variant?: "primary" | "secondary";
  confirmation?: boolean;
  [key: string]: any;
};

const Button = ({ size, variant, className, confirmation, ...intrinsic }: ButtonProps) => {
  const [isConfirming, setIsConfirming] = useState<boolean>(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  const onClick = (ev: MouseEvent<HTMLButtonElement>): void => {
    if (!confirmation) {
      intrinsic.onClick?.(ev);
      return;
    }

    if (!isConfirming) {
      setIsConfirming(true);
      timeout.current = setTimeout(() => {
        setIsConfirming(false);
      }, 1500);
    } else {
      intrinsic.onClick?.(ev);
      setIsConfirming(false);
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return (
    <button { ...intrinsic } onClick={ onClick } className={ clsx(theme, style({ size, variant }), className) }>
      { isConfirming && <div className={ clsx(theme, progressStyle({ size, variant })) } /> }
      <div className={ clsx(theme, content) } >{ intrinsic.children }</div>
    </button>
  );
};

export default Button;
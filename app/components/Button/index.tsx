import { ReactNode, FC } from "react";
import cn from "classnames";
import css from "./index.module.scss";

interface Props {
  children: ReactNode;
  size?: "s" | "m" | "l";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = (props: Props) => {
  const {
    children,
    size = "m",
    type = "button",
    disabled = false,
    className,
    onClick,
    ...rest
  } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        css.btn,
        css[`btn-size_${size}`],
        {
          [css["btn-disabled"]]: disabled,
        },
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

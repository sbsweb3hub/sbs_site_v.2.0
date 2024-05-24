import {
  FocusEventHandler,
  FormEvent,
  forwardRef,
  MouseEventHandler,
} from "react";
import classNames from "classnames";
import css from "./index.module.scss";
import Image from "next/image";
import iconCopy from "@/public/copy-icon.svg";

interface InputProps {
  id?: string;
  size?: "s" | "m" | "l";
  icon?: boolean;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: boolean;
  name?: string;
  value?: string;
  label?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: FormEvent<HTMLInputElement>) => void;
  onIconClick?: MouseEventHandler<HTMLElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      type = "text",
      size = "m",
      icon = false,
      disabled = true,
      error = false,
      name,
      value,
      label,
      className,
      onIconClick,
      onClick,
      onChange,
      onInput,
      onKeyDown,
      onKeyUp,
      onBlur,
      onFocus,
      ...props
    }: InputProps,
    ref
  ) => {
    return (
      <>
        <label className={css["label"]} htmlFor={label}>
          {label}
        </label>
        {/* <div className="mt-7"> */}
          <input
            className={classNames(
              css["input"],
              css[`input-size_${size}`],
              {
                [css["input-disable"]]: disabled,
              },
              className
            )}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            ref={ref}
            onChange={(e) => onChange?.(e)}
            onClick={onClick}
            onInput={onInput}
            onBlur={onBlur}
            onFocus={onFocus}
            {...props}
          />
          {/* {icon && (
            <button className={css["button-icon"]}>
              <Image
                src={iconCopy}
                width={20}
                height={20}
                alt="icon copy"
              />
            </button>
          )} */}
        {/* </div> */}
      </>
    );
  }
);

Input.displayName = "Input";

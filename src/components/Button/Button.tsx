import React, { HTMLProps } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  btnRole?: "link" | "submit" | "cancel";
  fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = ({ btnRole, fullWidth,className, ...props }) => {
  return (
    <button
      className={classNames(
        className,
        styles.btn,
        btnRole && !props.disabled && styles[btnRole],
        {
          [styles.fullWidth]: fullWidth,
          [styles.disabled]: props.disabled
        }
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;

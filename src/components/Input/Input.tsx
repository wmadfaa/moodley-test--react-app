import React, { HTMLProps, useState } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";

export type inputState = "valid" | "invalid";
interface IInputProps extends HTMLProps<HTMLInputElement> {
  state?: inputState;
}

const Input: React.FC<IInputProps> = ({
  label,
  state,
  className,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    props.onFocus instanceof Function && props.onFocus(event);
    setFocused(true);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur instanceof Function && props.onBlur(event);
    if (!event.target.value) {
      setFocused(false);
    }
  };

  return (
    <div
      className={classNames(className, styles.group, state && styles[state], {
        [styles.focus]: focused
      })}
    >
      <input
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <span className={styles.bar} />
      <label className={styles.label} htmlFor={props.id}>
        {label}
      </label>
    </div>
  );
};

export default Input;

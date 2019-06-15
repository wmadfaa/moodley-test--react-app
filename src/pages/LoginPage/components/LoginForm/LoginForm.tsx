import React, { useState, HTMLProps } from "react";
import Input, { inputState } from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { validator } from "../../../../utils/form";
import styles from "./LoginForm.module.scss";

export interface LoginFormValue {
  mail: string;
  password: string;
}

export interface LoginFormState {
  mail?: inputState;
  password?: inputState;
}

const initialLoginFormState = {
  mail: undefined,
  password: undefined
};

interface ILoginFormProps
  extends Pick<
    HTMLProps<HTMLFormElement>,
    Exclude<keyof HTMLProps<HTMLFormElement>, "onSubmit">
  > {
  formValue: LoginFormValue;
  onSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    formState: LoginFormState
  ) => void;
}

const LoginForm: React.FC<ILoginFormProps> = ({
  formValue,
  onSubmit,
  ...props
}) => {
  const [formState, setFormState] = useState<LoginFormState>(
    initialLoginFormState
  );

  const handleFormInputBlur = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    if (formValue.hasOwnProperty(target.id)) {
      const inputState = validator[target.id](target.value)
        ? "valid"
        : "invalid";
      setFormState(prev => ({ ...prev, [target.id]: inputState }));
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onSubmit instanceof Function && onSubmit(event, formState);
  };

  return (
    <form
      className={styles.form}
      onBlur={handleFormInputBlur}
      onSubmit={handleFormSubmit}
      {...props}
    >
      <Input
        label="email"
        id="mail"
        type="mail"
        value={formValue.mail}
        state={formState.mail}
      />
      <Input
        label="password"
        id="password"
        type="password"
        value={formValue.password}
        state={formState.password}
      />
      <Button btnRole="submit" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;

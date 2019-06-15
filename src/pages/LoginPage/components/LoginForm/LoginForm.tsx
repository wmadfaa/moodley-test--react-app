import React, { useState, HTMLProps } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Input, { inputState } from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { validator } from "../../../../utils/form";
import styles from "./LoginForm.module.scss";
import * as uiActions from "../../../../store/ui/actions";
import { modalContentType } from "../../../../store/ui/types";

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
  setModalContent: typeof uiActions.setModalContent;
  setModalState: typeof uiActions.setModalState;
}

const ErrorDescription: React.FC = () => {
  return (
    <div>
      Please make sure that your inputs match these types <br />
      mail: example@mail.com,
      <br />
      password: your password
      <br />
    </div>
  );
};

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
    event.preventDefault();
    const mailState = validator.mail(formValue.mail) ? "valid" : "invalid";
    const passwordState = validator.password(formValue.password)
      ? "valid"
      : "invalid";
    if (mailState !== "invalid" && passwordState !== "invalid") {
      onSubmit instanceof Function && onSubmit(event, formState);
    } else {
      setFormState({ password: passwordState, mail: mailState });
      props.setModalContent({
        title: "invalid inputs",
        description: <ErrorDescription />
      });
      props.setModalState(true);
    }
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setModalContent: (modalContent?: modalContentType) =>
    dispatch(uiActions.setModalContent(modalContent)),
  setModalState: (modalState: boolean) =>
    dispatch(uiActions.setModalState(modalState))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);

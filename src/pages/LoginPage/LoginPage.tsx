import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { setUserState } from "../../store/user/actions";
import Heading from "../../components/Heading/Heading";
import LoginForm, {
  LoginFormValue,
  LoginFormState
} from "./components/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";
import { routes } from "../../routes";

const initialLoginFormValue = {
  mail: "",
  password: ""
};

interface ILoginPageProps extends RouteComponentProps {
  setUserState: typeof setUserState;
}

const LoginPage: React.FC<ILoginPageProps> = props => {
  const [form, setForm] = useState<LoginFormValue>(initialLoginFormValue);

  const handleFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    if (form.hasOwnProperty(target.id)) {
      setForm(prev => ({ ...prev, [target.id]: target.value }));
    }
  };

  const handleFormSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    formState: LoginFormState
  ) => {
    props.setUserState(true);
    props.history.push(routes.ROOT);
  };

  return (
    <div className={styles.wrapper}>
      <Heading centered>Login Form</Heading>
      <Heading type="subtitle" centered>
        email: example@mail.at
        <br />
        password: random
      </Heading>
      <LoginForm
        formValue={form}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUserState: (authenticated: boolean) =>
    dispatch(setUserState(authenticated)),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);

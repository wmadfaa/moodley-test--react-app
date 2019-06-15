import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { setUserState } from "../../store/user/actions";
import * as counterActions from "../../store/counter/actions";
import { ApplicationState } from "../../store";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import styles from "./HomePage.module.scss";
import Button from "../../components/Button/Button";

interface reduxProps {
  counterValue: number;
  logout: () => void;
  increment: typeof counterActions.increment;
  decrement: typeof counterActions.decrement;
  resetCounter: typeof counterActions.reset;
  setCounterValue: typeof counterActions.setDefaultValue;
}

interface IHomePageProps extends RouteComponentProps, reduxProps {}

const HomePage: React.FC<IHomePageProps> = ({
  counterValue,
  logout,
  increment,
  decrement,
  resetCounter,
  setCounterValue
}) => {
  const handleCounterChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setCounterValue(parseInt(target.value, 10) || 0);
  };

  return (
    <div className={styles.wrapper}>
      <Card>
        <div className={styles.counterValue}>{counterValue}</div>
        <div className={styles.counterControllers}>
          <Button btnRole="link" onClick={decrement}>
            -
          </Button>
          <Input
            type="number"
            className={styles.input}
            value={counterValue}
            onChange={handleCounterChange}
          />
          <Button btnRole="link" onClick={increment}>
            +
          </Button>
        </div>
        <div className={styles.btnBox}>
          <Button btnRole="submit" onClick={resetCounter}>
            reset
          </Button>
          <Button btnRole="cancel" onClick={logout}>
            logout
          </Button>
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ counter }: ApplicationState) => ({
  counterValue: counter.value
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => {
    dispatch(counterActions.reset());
    dispatch(setUserState(false));
  },
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement()),
  resetCounter: () => dispatch(counterActions.reset()),
  setCounterValue: (value: number) =>
    dispatch(counterActions.setDefaultValue(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

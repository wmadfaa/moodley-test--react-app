import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { routes } from "../../routes";

interface IAuthRouteProps
  extends RouteComponentProps,
    Pick<RouteProps, Exclude<keyof RouteProps, "location">> {
  authenticated: boolean;
}

const AuthRoute: React.FC<IAuthRouteProps> = props => {
  const { location } = props;
  if (!props.authenticated)
    return <Redirect from={location.pathname} to={routes.LOGIN} />;
  return (
    <Route
      component={props.component}
      render={props.render}
      children={props.children}
      path={props.path}
      exact={props.exact}
      sensitive={props.sensitive}
      strict={props.strict}
    />
  );
};

const mapStateToProps = ({ user }: ApplicationState) => ({
  authenticated: user.authenticated
});

export default connect(mapStateToProps)(withRouter(AuthRoute));

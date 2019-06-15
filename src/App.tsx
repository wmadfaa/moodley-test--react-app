import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Modal from "./components/Modal/Modal";
import { routes } from "./routes";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));

const App: React.FC = () => {
  return (
    <Router>
      <Modal>
        <React.Suspense fallback="...loading">
          <AuthRoute path={routes.ROOT} exact component={HomePage} />
          <Route path={routes.LOGIN} component={LoginPage} />
        </React.Suspense>
      </Modal>
    </Router>
  );
};

export default App;

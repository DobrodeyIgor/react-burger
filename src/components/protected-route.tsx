import { Route, Redirect, RouteProps, useLocation } from "react-router-dom";
import { useSelector } from "../services/hooks/hooks";

export const ProtectedRoute = ({ component, path }: RouteProps) => {
  const authorization = useSelector((state) => state.getLogin.login);
  const location = useLocation();

  if (!authorization) {
    return (
      <Route path={path} component={component}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }
  return <Route path={path} component={component} />;
};

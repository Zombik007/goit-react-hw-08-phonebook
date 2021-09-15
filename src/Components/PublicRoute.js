import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirecy = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirecy ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

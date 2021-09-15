import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "./Components/Container/Container";
import { Switch } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import { authOperations, authSelectors } from "./redux/auth";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterViews = lazy(() =>
  import(
    "./views/registerViews/RegisterPageViews" /* webpackChunkName: "RegisterViews" */
  )
);
const HomeViews = lazy(() =>
  import("./views/HomeViews/HomePageViews" /* webpackChunkName: "HomeView" */)
);
const LoginViews = lazy(() =>
  import(
    "./views/loginViews/LoginPageViews" /* webpackChunkName: "LoginViews" */
  )
);
const ContactsViews = lazy(() =>
  import(
    "./views/contactsViews/ContactsPageViews" /* webpackChunkName: "ContactsViews" */
  )
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrent && (
      <Container>
        <AppBar />

        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeViews />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterViews />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginViews />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsViews />
            </PrivateRoute>
          </Suspense>
        </Switch>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    )
  );
}

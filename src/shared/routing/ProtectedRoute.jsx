import React, { useEffect, useState } from "react";
import useAuthentication from "../../authentication/authenticationService";
import Loader from "react-loader";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ exact = false, path, children }) => {
  const { isAuthenticated } = useAuthentication();
  const [isUserAuthenticated, setAuthenticated] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    isAuthenticated()
      .then(result => {
        setAuthenticated(result);
      })
      .finally(() => setLoaded(true));
  });

  return (
    <Loader loaded={isLoaded}>
      {isUserAuthenticated ? (
        <Route exact={exact} path={path}>
          {children}
        </Route>
      ) : (
        <Redirect to={"/login"} />
      )}
    </Loader>
  );
};

export default ProtectedRoute;

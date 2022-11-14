import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/Context";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;

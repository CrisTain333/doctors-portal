import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/Context";
import { Dna } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <div className="flex  justify-center items-center">
        <Dna
  visible={true}
  height="200"
  width="200"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
        </div>
      </>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (user?.email) {
    return children;
  }

  return (
    <Navigate state={{ from: location }} to="/users/login" replace></Navigate>
  );
};

export default PrivateRoute;

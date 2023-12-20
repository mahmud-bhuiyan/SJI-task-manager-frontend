import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const PublicRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" replace></Navigate>;
  }

  return children;
};

export default PublicRoute;

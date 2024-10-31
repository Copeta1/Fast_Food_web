/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser || (!authUser.admin && !authUser.editor)) {
      navigate("/");
    }
  }, [authUser, navigate]);

  return authUser && (authUser.admin || authUser.editor) ? children : null;
};

export default ProtectedRoute;

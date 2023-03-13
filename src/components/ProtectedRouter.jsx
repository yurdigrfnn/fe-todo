import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Todo from "../features/todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import {
  authState,
  validateLogin,
} from "../features/auth/authSlice";

// protected route component
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(authState);

  useEffect(() => {
    dispatch(validateLogin());
  }, [auth.isLogined, navigate]);

  if (auth.isLogined === false) {
    navigate("/login");
  }
  return (
    <>
      {auth.isLogined ? (
        <div>
          <Todo />
        </div>
      ) : null}
    </>
  );
};

export default ProtectedRoute;

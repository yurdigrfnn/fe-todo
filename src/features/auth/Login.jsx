import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authState, loginAuth, getTodo } from "./authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector(authState);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAuth({ email: email, password: password }));
  };

  React.useEffect(() => {
    if (auth.isLogined) {
      navigate("/");
    }
  }, [auth.isLogined]);

  return (
    <div>
      <div className="w-11/12 mx-auto h-screen flex flex-col justify-center content-center">
        <div className="sm:w-8/12 transition-all lg:w-3/12 md:w-5/12 px-4 py-4 border w-full m-0 m-auto h-max border-gray-300 shadow-xl rounded-md">
          <h1 className="text-center mb-3 text-lg font-medium">Login</h1>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-medium">
                Email
              </label>
              <input
                className="py-1 px-3 focus:outline-none border-gray-300 focus:border-blue-300 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-medium">
                Password
              </label>
              <input
                className="py-1 px-3 focus:outline-none border-gray-300 focus:border-blue-300 border rounded-md"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name=""
                id=""
              />
            </div>
            </div>
            
            <div>
              <button className="bg-red-600 px-4 py-2 text-sm font-medium rounded-md text-white" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

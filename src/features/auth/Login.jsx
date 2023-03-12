import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authState, loginAuth,getTodo } from "./authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector(authState);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAuth({email:email,password: password}))
  };
  React.useEffect(()=>{
    dispatch(getTodo())
  },[auth.isError])
  console.log(auth.data)
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
            <div>
                <h1>{auth.message}</h1>
            </div>
          <div>
            <label htmlFor="">email</label>
            <input value={email} onChange={e => setEmail(e.target.value)}   type="email" />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}  name="" id="" />
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

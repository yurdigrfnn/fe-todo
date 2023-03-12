import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { authState, loginAuth,getTodo,validateLogin } from "../auth/authSlice";
import {useNavigate} from "react-router-dom"

export default function Todo() {
    const dispatch = useDispatch();
    const auth = useSelector(authState);
    const navigate = useNavigate()
    React.useEffect(()=> {
        dispatch(getTodo())
    },[])

  const handleLogout = () => {
    const validateUser = async () => {
        const response = await fetch('https://api-todo-auth-production.up.railway.app/api/logout', {
          method: 'GET',
          credentials: 'include' // send cookies with the request
        });
  
        const data = await response.json();
        if (data.isError === false) {
            dispatch(validateLogin())
        }
      }
  
      validateUser();
  }
  return (
    <div>
        <h1>Todo List</h1>
        {auth.data && auth.data.map((item)=> (
        <h1>{item.name}</h1>
        ))}
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

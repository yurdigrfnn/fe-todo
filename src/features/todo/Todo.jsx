import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  validateLogin,
} from "../auth/authSlice";
import {getAllTodo,getAllTodoSelector,setPage} from './getTodoSlice'
import Checkbox from "@mui/material/Checkbox";
import { HiOutlineTrash,HiOutlinePencil } from "react-icons/hi";
import CreateTodo from "./CreateTodo";
import Pagination from "../../components/Pagination";

export default function Todo() {
  const [checkedIndex, setCheckedIndex] = useState(-1);
  const dispatch = useDispatch();
  const todo = useSelector(getAllTodoSelector);


  React.useEffect(() => {
    dispatch(getAllTodo({
      page : todo.page,
      limit : todo.limit
    }));
  }, [todo.page]);
  console.log("tete",todo);

  const handleLogout = () => {
    const validateUser = async () => {
      const response = await fetch(
        "https://api-todo-auth-production.up.railway.app/api/logout",
        {
          method: "GET",
          credentials: "include", // send cookies with the request
        }
      );

      const data = await response.json();
      if (data.isError === false) {
        dispatch(validateLogin());
      }
    };

    validateUser();
  };

  const handleCheckboxChange = (event, index) => {
    if (checkedIndex === index) {
      setCheckedIndex(-1);
    } else {
      setCheckedIndex(index);
    }
  };
  const handleOnPageChange = (page) => {
    dispatch(setPage(page));
  };


  return (
    <div className="sm:w-11/12 w-full mx-auto flex flex-col justify-center content-center mt-3">
      <h1 className="text-2xl font-medium text-center">Todo List</h1>
      <div className="sm:w-8/12 h-screen transition-all lg:w-5/12 md:w-5/12 px-4 py-4 w-full m-auto">
        <div className="flex justify-between mb-3">
          <CreateTodo page={todo.page} limit={todo.limit} />
          <button
            className="border border-gray-300  px-4 py-2 text-sm font-medium rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <div className="flex flex-col h-[360px] gap-2 bg-slate-100 rounded-md p-2 overflow-hidden">
          {todo.todos &&
            todo.todos.map((item, index) => (
              <div className="flex justify-between px-2 rounded-md bg-white" key={item.id}>
                <div className="flex">
                  <Checkbox
                    checked={checkedIndex === index}
                    onChange={(event) => handleCheckboxChange(event, index)}
                    defaultChecked={false}
                  />
                  <h1 className="my-auto">{item.name}</h1>
                </div>

                <div className="my-auto gap-2 flex">
                  <button className="text-xl"><HiOutlineTrash /></button>
                  <button className="text-xl"><HiOutlinePencil /></button>
                </div>
              </div>
            ))}
        </div>
        <div>
          <Pagination currentPage={todo.page} totalPages={todo.totalPages} onPageChange={(page) => handleOnPageChange(page)}/>
        </div>
      </div>
    </div>
  );
}

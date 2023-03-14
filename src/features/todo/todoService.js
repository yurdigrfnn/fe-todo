import { http } from "../../app/http";

export const getTodos = ({ page, limit }) => {
  let path = `/api/todo?page=${page}&limit=${limit}`;
  return http.fetchGet(path);
};

export const postTodo = (name) => {
  return http.fetchPost("/api/todo", { name });
};

export const deleteTodoByid = (id) => {
  return http.fetchDeleteWithParam(`/api/todo/${id}`);
};

export const putTodoNameByid = ({id, name }) => {
  return http.fetchPutWithParam(`/api/todo/${id}`, { name });
};

export const putTodoCompleteByid = ({id,complete}) => {
    return http.fetchPutWithParamBool(`/api/todo/${id}`, complete);
  };
  
import { http } from "../../app/http";

export const loginFetch = ({email,password}) => {
    return http.fetchPost("/api/signin",{email :email,password:password})
}

export const getfetch = () => {
    return http.fetchGet(`/api/todo`)
}

export const validateFetch = () => {
    return http.fetchGet('/api/validate')
}

export const signUp = ({email,password}) => {
    return http.fetchPost("/api/register",{email :email,password:password})
}



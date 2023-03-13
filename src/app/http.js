const getBaseUrl = (path = "") => {
    let url = `https://api-todo-auth-production.up.railway.app${path}`;
    return url;
}

const getHeadersDefault = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
}



const fetchGet = (path, headers = {}) => {
    return fetch(getBaseUrl(path), {
        method: 'GET',
        headers: {
            
            ...getHeadersDefault(),
            ...headers,
        },
        credentials: 'include'
    });
}

const fetchPost = (path,body ,headers = {}) => {
    return fetch(getBaseUrl(path), {
        method: 'POST',
        headers: {
            ...getHeadersDefault(),
            ...headers,
        },
        body : JSON.stringify(body),
        credentials: 'include'
    });
}

const fetchDeleteWithParam = (path,headers = {}) => {
    return fetch(getBaseUrl(path),{
        method: 'DELETE',
        headers : {
            ...getHeadersDefault(),
            ...headers,
        },
        credentials: 'include'
    })
}

const fetchPutWithParam = (path,body,headers = {}) => {
    return fetch(getBaseUrl(path),{
        method: 'PUT',
        headers : {
            ...getHeadersDefault(),
            ...headers,
        },
        body : JSON.stringify(body),
        credentials: 'include'
    })
} 



export const http = {
    fetchGet,
    fetchPost,
    fetchDeleteWithParam,
    fetchPutWithParam
}
const getBaseUrl = (path = "") => {
    let url = `https://api-todo-auth-production.up.railway.app${path}`;
    return url;
}

const getHeadersDefault = () => {
    return {
        'Content-Type': 'application/json',
    };
}



const fetchGet = (path, headers = {}) => {
    return fetch(getBaseUrl(path), {
        method: 'GET',
        headers: {
            
            ...getHeadersDefault(),
            ...headers,
        },
    });
}

const fetchPost = (path,body ,headers = {}) => {
    return fetch(getBaseUrl(path), {
        method: 'POST',
        headers: {
            ...getHeadersDefault(),
            ...headers,
        },
        body : JSON.stringify(body)
    });
}


export const http = {
    fetchGet,
    fetchPost
}
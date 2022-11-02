const getBaseUrl = (path = "") => {
    let url;
    switch (process.env.NODE_ENV) {
        case 'production':
            url = 'https://breakingbadapi.com/api';
            break;
        case 'test':
            url = 'https://breakingbadapi.com/api';
            break;
        case 'development':
        default:
            url = 'https://breakingbadapi.com/api';
    }

    if (path) {
        url += path;
    }
    return url;
}

const getHeadersDefault = () => {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // cors
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


export const http = {
    fetchGet
}
import { http } from "../../app/http";


export const fetchGetCharacters = (limit,off) => {
    return http.fetchGet(`/characters?limit=${limit}&offset=${off}`)
}



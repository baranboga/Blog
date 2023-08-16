
import axios from "axios";
import { apiUrl } from "./apiConfig";


let options={
    method: '',
    url: apiUrl,
    headers: {
        Authorization: '',
        contentType: ''
    },
    data: {}
}

const url="http://localhost:3000/api"


export const userauth = (data) => {
    options.headers.Authorization = ``;
    options.method = 'POST';
    options.headers.contentType = 'application/json';
    options.url = `${url}/users/auth`;
    options.data = data;
    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

export const checkToken = (token)=>{
    const promise= axios.get(`${apiUrl}/Auth/ValidateToken?token=${token}`);
    const dataPromise= promise.then((response)=>response.data);
    return dataPromise;
}
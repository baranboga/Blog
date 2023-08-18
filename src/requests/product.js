

import axios from "axios";
import { apiUrl } from "./apiConfig";

const key="x-auth-token"

let options = {
    method: "",
    url: apiUrl,
    headers: {
      Authorization: "",
      contentType: "",
    },
    data: {},
  };

const url="http://localhost:3000/api"




export const getProducts =()=>{
    options.headers.Authorization = ``;
    options.method = 'GET';
    options.url = `${url}/Products`;

    const promise = axios.request(options);
    const dataPromise = promise.then((response)=>response.data);
    return dataPromise;
}

export const getbyid =(id)=>{
  options.headers.Authorization = ``;
  options.method = "GET";
  options.headers.contentType = "application/json";
  options.url = `${url}/products/${id}`;
  const promise = axios.request(options);
  const dataPromise = promise.then((response) => response.data);
  console.log(dataPromise)
  return dataPromise;
}

export const postproducts = (data, token) => {
    options.headers.Authorization = ``;
    options.method = "POST";
    options.headers.contentType = "application/json";
    options.headers[key] = token; // "auth-token-key" başlığını ekliyoruz
    options.url = `${url}/products`;
    options.data = data;
    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
  };

export const updateproducts = (data,_id,token) => {
    options.headers.Authorization = ``;
    options.method = 'PUT';
    options.headers.contentType = 'application/json';
    options.headers[key] = token; 
    options.url = `${url}/products/${_id}`;
    options.data = data;
    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

export const deleteproducts = (_id,token) => {
    options.headers.Authorization = ``;
    options.method = 'DELETE';
    options.headers.contentType = 'application/json';
    options.headers[key] = token; 
    options.url = `${url}/products/${_id}`;
    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}
  

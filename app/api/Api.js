import axios from "axios";

const Api = axios.create({
    baseURL: 'http://172.20.10.3:8000/api/',
});

Api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default Api;

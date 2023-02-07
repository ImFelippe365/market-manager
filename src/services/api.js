import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.112.3.43:3000/'
})

export default api;
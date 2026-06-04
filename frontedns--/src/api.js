import axios from "axios";
import { ACCESS_TOKEN } from "./constants"

const API_URL = "/choreo-apis/backend-1338620691:8000"
 
const  api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : API_URL,


});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, 
(error) => {
    return Promise.reject(error)
}
)


export default api;
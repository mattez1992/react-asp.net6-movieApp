import axios from "axios";
import { getToken } from "../auth/handle.JWT";


export default function configureAxiosInterceptor() {
    axios.interceptors.request.use(
        function (config) {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `bearer ${token}`;
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    )
}

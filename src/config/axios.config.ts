import axios from "axios"

export const AXIOS = axios.create({
    baseURL: "http://localhost:5173",
    timeout: 20000
})
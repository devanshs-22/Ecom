import axios from "axios";

const BASE_URL = "http://localhost:2200/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDEyZjRkNDk3NWZhZmQ0OWJiZjM3ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc0NDk2NDA0OSwiZXhwIjoxNzQ1MjIzMjQ5fQ.Qy_AhaDKd8rD_qZTfFEsF0L7pbgKT-qG7WfUADDJWSU"

export const publicRequest = axios.create({
    baseURL:BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})
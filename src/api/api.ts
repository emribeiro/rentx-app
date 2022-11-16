import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export async function listCars(){
    const response = await api.get('/cars');

    return response.data;
}
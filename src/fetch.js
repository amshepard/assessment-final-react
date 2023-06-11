import axios from "axios";

const BASE_URL = "https://resource-ghibli-api.onrender.com";


export async function getFilms(type) {
    try {
        const response = await axios.get(`${BASE_URL}/${type}`);
        return response;
    } catch (err) {
        console.log(err);
    }
}


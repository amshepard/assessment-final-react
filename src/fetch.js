const BASE = "https://resource-ghibli-api.onrender.com"

export function getPeople() {
    return fetch(`${BASE}/people`).then((res) => res.json())
}

export function getLocation() {
    return fetch(`${BASE}/locations`).then((res) => res.json())
}

export function getMovies() {
    return fetch(`${BASE}/films`).then((res) => res.json())
}
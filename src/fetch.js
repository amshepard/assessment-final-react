const BASE = "https://resource-ghibli-api.onrender.com"

export function gettingPeople() {
    return fetch(`${BASE}/people`).then((res) => res.json())
}


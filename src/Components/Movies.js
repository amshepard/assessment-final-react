// import React from 'react'

import { useState, useEffect } from "react"
// import { getMovies } from "../fetch.js"
import { getMovies } from "../fetch.js"

export default function Movies() {
    const [moviesArr, setMoviesArr] = useState([])
    const [id, setId] = useState("")
    const [singleArr, setSingleArr] = useState([])

    async function settingMovies() {
        const newArr = await getMovies()
        setMoviesArr(newArr)
    }

    function singleMovie() {
        const newArr2 = moviesArr.filter((x) => x.title === id)
        setSingleArr(newArr2)
        console.log(newArr2)
    }

    useEffect(() => {
        settingMovies()
    }, [])

    useEffect(() => {
        singleMovie()
    }, [id])

    return (
        <div className="movies">
            <section>
                <h2>Select a Movie</h2>
                <select onChange={(e) => setId(e.target.value)}>
                    <option value=""></option>
                    {
                        moviesArr.map((movie) => {
                            console.log(movie)
                            return (
                                <option value={movie.title}>{movie.title}</option>
                            )
                        })
                    }
                </select>
                <aside style={id === "" ? { display: "none" } : { display: "block" }}>
                    {
                        singleArr.map((x) => {
                            return (
                                <div>
                                    <h2><span>Title: </span>{x.title}</h2>
                                    <p><span>Release Date: </span>{x.release_date}</p>
                                    <p><span>Description: </span>{x.description}</p>
                                </div>
                            )
                        })
                    }
                </aside>
            </section>
        </div>
    )
}
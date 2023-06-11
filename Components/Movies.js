import { useState, useEffect } from "react";
import { getFilms } from "../src/fetch";
import { Movie } from "./Movies"

export default function Movies() {

    const [allFilms, setAllFilms] = useState([]);
    const [movieSelection, setMovieSelection] = useState({});
    const [movieClick, setMovieClick] = useState(false);

    async function handleLoad() {
        const answer = await getFilms('films');
        setAllFilms([...answer.data]);
    
    };
   
    // useEffect(() => {
    //     handleLoad();
    //     }, []);
    //     function handleClick(film) {
    //         setMovieSelection(film);
    //         setMovieClick(true);
    //         }
    //         return (
    //             <div>
    //                 <h1>Movies</h1>
    //                 {movieClick ? <Movie film={movieSelection} /> : <div>}
    //             </div>
    //             )
                

    useEffect(() => {
        handleLoad()
    }, []);

    function handleMovieSelect(event) {
        setMovieClick(true);
        const selected = allFilms.filter(movie => movie.title === event.target.value)
        setMovieSelection(selected[0])
        console.log(selected);

    }

    return (
        <div className="movies">
            <h1>Select a Movie</h1>


            <select
                name="movie-drop"
                id="movie-choices"
                onChange={handleMovieSelect}>
                <option></option>
                {
                    allFilms.map((movie) => {
                        return (
                            <option
                                value={movie.title}
                                key={movie.id}
                            >{movie.title}</option>
                        )
                    })
                }
            </select>

            <aside style={movieClick ? { display: "block" } : { display: "none" }}>
                <Movie movieSelection={movieSelection} />
            </aside>

        </div>
    )
}
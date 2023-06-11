import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import People from "./components/People";
import Locations from "./components/Locations";
import Error from "./components/Error";

export default function Container (){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<Movie />} />
                <Route path="/people" element={<People />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </div>
    )
}
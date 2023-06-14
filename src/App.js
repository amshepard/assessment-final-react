import Home from "./Components/Home";
import Nav from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import Error from "./Components/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
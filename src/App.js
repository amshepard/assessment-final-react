import NavBar from "./components/NavBar";
import Container from "./Container";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Container />
      </main>
    </div>
  );
}

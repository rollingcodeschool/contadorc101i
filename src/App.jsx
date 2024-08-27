import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";

function App() {
  return (
    <main className="container my-4">
      <h1 className="text-center">Primer proyecto react</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        ullam repellat vel reiciendis? Porro, architecto <br /> voluptatem fuga
        <br></br> quae ad, saepe perferendis eius ut sint animi, obcaecati
        libero fugit natus molestiae.
      </p>
      {/* invocar los componentes */}
      <Informacion></Informacion>
      {/* <Informacion/> */}
    </main>
  );
}

export default App;

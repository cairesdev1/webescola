import { Fragment } from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import CardsCurso from "./Components/CardsCurso";
import Footer from "./Components/Footer";
import Beneficios from "./Components/Beneficios";

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <CardsCurso />
      <Beneficios />
      <Footer />
    </Fragment>
  );
}

export default App;

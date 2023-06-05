import { Link } from "react-router-dom";
import "./style.css";

function Banner() {
  return (
    <section id="banner-container">
      <h3 className="branco-150">Destaque do mês</h3>
      <h1 className="branco-100">Tecnologia da Informação</h1>
      <p className="branco-150 max-590">
        Aprenda a criar aplicações de web e móveis baseadas na web,
        desenvolvendo aplicativos ricos em recursos e funcionalidades.
      </p>
      <br />
      <Link to="/cursos">
        <p className="branco-200 link-unic">Ver mais cursos</p>
        <hr />
      </Link>
    </section>
  );
}

export default Banner;

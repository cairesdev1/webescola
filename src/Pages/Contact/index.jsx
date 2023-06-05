import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="pages-navs">
      <Header />
      <section className="linear-1">
        <h1>Contatos</h1>
        <div>
          <Link
            className="branco-100"
            rel="noopener noreferrer"
            target="_blank"
            to="https://www.instagram.com/cairesdev/"
          >
            <BsInstagram size={32} className="react-icons" />
          </Link>
          <Link
            className="branco-100"
            rel="noopener noreferrer"
            target="_blank"
            to="https://github.com/cairesdev1/"
          >
            <BsGithub size={32} className="react-icons" />
          </Link>
          <Link
            className="branco-100"
            rel="noopener noreferrer"
            target="_blank"
            to="https://www.linkedin.com/in/cairesdev/"
          >
            <BsLinkedin size={32} className="react-icons" />
          </Link>
        </div>
      </section>
      <main>
        <p>
          Esta página de contatos é um local para que você possa nos contatar.
          Aqui, você pode nos fornecer informações sobre o que precisa e podemos
          lhe enviar as informações necessárias para que você possa entrar em
          contato conosco. Se você tiver alguma dúvida sobre nossos produtos ou
          serviços, quiser fazer uma reserva ou uma sugestão, entre em contato
          conosco e nós lhe responderemos o mais rápido possível. Estamos
          ansiosos para ajudar e ficaríamos felizes em receber o seu feedback e
          sugestões.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

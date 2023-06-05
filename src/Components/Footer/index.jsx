import "./style.css";
import logoMarca from "../../lib/icons/logoMarcaBranca.svg";
import { Link } from "react-router-dom";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { memo } from "react";

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <img src={logoMarca} alt="cairesdev, webescola" />
      </Link>
      <ul className="lista-footer">
        <p className="color-footer">Nossas redes sociais</p>
        <li>
          <Link to="https://www.instagram.com/cairesdev/" target="_blank">
            <BsInstagram size={30} className="react-icons color-footer" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/cairesdev1" target="_blank">
            <BsGithub size={30} className="react-icons color-footer" />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/cairesdev/" target="_blank">
            <BsLinkedin size={30} className="react-icons color-footer" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default memo(Footer);

import React, { memo } from "react";
import { HeaderModes } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineWhatsapp, MdKeyboardArrowDown } from "react-icons/md";
import logoMarca from "../../lib/icons/logoMarca.svg";
import { Button } from "../../Elements/buttom";

function Header() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <HeaderModes $mode="chamada">
        <Link to="/contato">
          <span className="branco-100">Fale conosco</span>
        </Link>
        <Link to="https://wa.me/5598988170421" target="_blank">
          <span className="branco-100">
            <MdOutlineWhatsapp size={14} className="react-icons" />
            Inscreva-se pelo WhatsApp
          </span>
        </Link>
        <br />
        <br />
        <Link to="/login">
          <span className="branco-100">Área do aluno</span>
        </Link>
      </HeaderModes>
      <HeaderModes $mode="landin">
        <Link to="/">
          <img src={logoMarca} alt="cairesdev, webescola" />
        </Link>
        <li className="navega-container">
          <Link to="./" className="link-navega ">
            <h4 className="preto-200">
              A WebEscola
              <MdKeyboardArrowDown size={24} className="react-icons" />
            </h4>
          </Link>
          <ul className="nav-hover">
            <li className="item-nav">
              <Link to="/sobre" className="link-utils">
                <p>Sobre nós</p>
              </Link>
            </li>
            <li className="item-nav">
              <Link to="/plataforma" className="link-utils">
                <p>Plataforma</p>
              </Link>
            </li>
            <li className="item-nav">
              <Link to="/parceiros" className="link-utils">
                <p>Seja parceiro</p>
              </Link>
            </li>
            <li className="item-nav">
              <Link to="/jobs" className="link-utils">
                <p>Trabalhe conosco</p>
              </Link>
            </li>
            <li className="item-nav">
              <Link to="/contato" className="link-utils">
                <p>Contatos</p>
              </Link>
            </li>
          </ul>
        </li>
        <li className="navega-container">
          <Link to="./" className="link-navega ">
            <h4 className="preto-200">
              Cursos <MdKeyboardArrowDown size={24} className="react-icons" />
            </h4>
          </Link>
          <ul className="nav-hover">
            <li className="item-nav">
              <Link to="/cursos" className="link-utils">
                <p>Técnicos</p>
              </Link>
            </li>
            <li className="item-nav">
              <Link to="/cursos" className="link-utils">
                <p>Graduações</p>
              </Link>
            </li>
            <li className="item-nav">
              <Link to="/cursos" className="link-utils">
                <p>MBAs</p>
              </Link>
            </li>
            <li className="item-nav">
              <Link to="/cursos" className="link-utils">
                <p>Pós graduação</p>
              </Link>
            </li>
            <li className="item-nav">
              <Link to="/cursos" className="link-utils">
                <p>Mestrado</p>
              </Link>
            </li>
          </ul>
        </li>
        <Button
          $mode="primario"
          onClick={() => {
            navigate("/cadastro");
          }}
        >
          Matricule-se
        </Button>
      </HeaderModes>
    </React.Fragment>
  );
}
// eslint-disable-next-line
export default memo(Header);

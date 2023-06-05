import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { GlobalStyle } from "../GlobalStyles";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <div id="error-page">
        <h1>Desculpe, ocorreu um erro inesperado...</h1>
        <p className="cor-erro">{error.statusText || error.message}</p>
        <br />
        <Link to="/" className="preto-200">
          Voltar para Home
        </Link>
        <br />
      </div>
      <Footer />
    </React.Fragment>
  );
}

import React, { useState } from "react";
import firebase from "../../../Configs/firebase";
import { Form, useNavigate, Link } from "react-router-dom";
import { HeaderModes } from "../../../Components/Header/style";
import logoMarca from "../../../lib/icons/logoMarca.svg";
import { Button } from "../../../Elements/buttom";

function Register() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [nome, setNome] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  async function novoUsuario() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, passwd)
      .then(async (value) => {
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .set({
            email: email,
            passwd: passwd,
            nome: nome,
          })
          .then(() => {
            setEmail(""), setPasswd(""), setNome("");
            setUser({
              email: email,
              passwd: passwd,
              nome: nome,
              user: user,
            });
            console.log("Cadastrado com sucesso!");
            navigate("/cursos");
          });
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Senha muito fraca..");
        } else if (error.code === "auth/email-already-in-use") {
          alert("Esse email já existe!");
        }
      });
  }

  return (
    <React.Fragment>
      <HeaderModes $mode="landin">
        <img src={logoMarca} alt="logoMarca" />
        <Link to="/">Home</Link>
      </HeaderModes>
      <Form className="form">
        <h1 className="branco-100">Vamos iniciar sua jornada!</h1>
        <div>
          <label>
            Seu melhor email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemplo.com"
            />
          </label>
          <label>
            Crie uma senha forte.
            <input
              type="password"
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
              minLength={6}
            />
          </label>
          <label>
            Seu nome completo:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: João da Silva"
              maxLength={256}
            />
          </label>
          <span>
            <Button $mode="primario" onClick={novoUsuario}>
              Cadastrar
            </Button>
            <h3>ou</h3>
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              Fazer Login
            </Button>
          </span>
        </div>
      </Form>
      <footer className="demo-footer">
        <h1>Utilize a conta demo!</h1>
        <p>ou crie um cadastro</p>
      </footer>
      <Form></Form>
    </React.Fragment>
  );
}

export default Register;

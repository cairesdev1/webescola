import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import firebase from "../../../Configs/firebase";
import { HeaderModes } from "../../../Components/Header/style";
import { Button } from "../../../Elements/buttom";
import logoMarca from "../../../lib/icons/logoMarca.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  async function login() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, passwd)
      .then(async (value) => {
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .get()
          .then(() => {
            setUser({ email: value.user.email });
            navigate("/areadoaluno");
          });
      })
      .catch((error) => {
        alert("ERRO AO LOGAR: " + error, user);
        setUser(error);
      });
  }

  async function logout() {
    await firebase.auth().signOut();
    setUser({});
  }

  return (
    <React.Fragment>
      <HeaderModes $mode="landin">
        <Link to="/">
          <img src={logoMarca} alt="logoMarca" />
        </Link>
        <button onClick={logout}>Sair</button>
      </HeaderModes>
      <Form className="form">
        <h1 className="branco-100">Bem vindo de volta!</h1>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
          <span>
            <Button $mode="primario" onClick={login}>
              Entrar
            </Button>
            <h3>ou</h3>
            <Button
              onClick={() => {
                navigate("/cadastro");
              }}
            >
              Quero me cadastrar
            </Button>
          </span>
        </div>
        <div className="demo">
          <h2>Login demo</h2>
          <h3>demo.webescola@gmail.com ---- 123456</h3>
        </div>
      </Form>
      <footer className="demo-footer">
        <h1>Utilize a conta demo!</h1>
        <p>ou crie um cadastro</p>
      </footer>
    </React.Fragment>
  );
}

export default Login;

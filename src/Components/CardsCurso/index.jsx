import React, { useState, useMemo } from "react";
import firebase from "../../Configs/firebase";
import { Button } from "../../Elements/buttom";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

function CardsCurso() {
  const [cursosLista, setCursosLista] = useState([]);
  const navigate = useNavigate();
  let { cursoId } = useParams();
  let cursosSlice = cursosLista.slice(0, 4);

  useMemo(() => {
    async function loadCursos() {
      await firebase
        .firestore()
        .collection("cursos")
        .onSnapshot((doc) => {
          let cursosDisponiveis = [];
          doc.forEach((curso) => {
            cursosDisponiveis.push({
              id: curso.id,
              nome: curso.data().nome,
              duracao: curso.data().duracao,
              nivel: curso.data().nivel,
            });
          });
          setCursosLista(cursosDisponiveis);
        });
    }
    loadCursos();
  }, []);

  return (
    <React.Fragment>
      <div id="cards-container">
        <h1>Explore nossos cursos e encontre a sua formação.</h1>
        <div className="flex-center">
          <ul className="cards">
            {cursosSlice.map((cursos) => {
              return (
                <li key={cursos.id}>
                  <div className="card">
                    <h2>{cursos.nome}</h2>
                    <br />
                    <div className="card-desc">
                      <p>Nível:</p>
                      <h3>{cursos.nivel}</h3>
                    </div>
                    <div className="card-desc">
                      <p>Duração:</p>
                      <h3>{cursos.duracao}</h3>
                    </div>
                    <br />
                    <Button
                      onClick={() => {
                        {
                          cursoId = cursos.id;
                        }
                        navigate("cursos/" + cursoId);
                      }}
                    >
                      Ver mais
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CardsCurso;

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import firebase from "../../Configs/firebase";
import { useMemo, useState } from "react";
import { Button } from "../../Elements/buttom";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

function CursosPage() {
  const [cursosLista, setCursosLista] = useState([]);

  const navigate = useNavigate();
  let { cursoId } = useParams();

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
    <div className="pages-navs">
      <Header />
      <section className="linear-1">
        <h1 className="branco-100">Nossos cursos disponíveis</h1>
      </section>
      <main className="main-min">
        <div className="flex-center">
          <ul className="grade-cursos">
            {cursosLista.map((cursos) => {
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
                        navigate("../../cursos/" + cursoId);
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
      </main>
      <Footer />
    </div>
  );
}

export default CursosPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../Configs/firebase";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function CursoView() {
  const [curso, setCurso] = useState([]);
  const { cursoId } = useParams();

  useEffect(() => {
    async function dataCurso() {
      await firebase
        .firestore()
        .collection("cursos")
        .doc(cursoId)
        .get()
        .then((doc) => {
          let cursoDados = [];
          cursoDados.push({
            id: doc.id,
            nome: doc.data().nome,
            nivel: doc.data().nivel,
            duracao: doc.data().duracao,
            slogan: doc.data().slogan,
            sobre: doc.data().sobre,
          });
          setCurso(cursoDados);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    dataCurso();
  }, [cursoId]);

  return (
    <div className="pages-navs">
      <Header />
      {curso.map((curso) => {
        return (
          <div key={curso.id}>
            <section className="linear-1">
              <h1 color="branco-100">{curso.nome}</h1>
              <p className="preto-200">{curso.slogan}</p>
            </section>
            <main>
              <div className="flex">
                <div>
                  <h2>Sobre este curso</h2>
                  <br />
                  <p>{curso.sobre}</p>
                </div>
                <div>
                  <p>Duração</p>
                  <h3>{curso.duracao}</h3>
                  <br />
                  <p>Nível</p>
                  <h3>{curso.nivel}</h3>
                </div>
              </div>
            </main>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default CursoView;

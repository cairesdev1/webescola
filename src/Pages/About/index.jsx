import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function About() {
  return (
    <div className="pages-navs">
      <Header />
      <section className="linear-1">
        <h1 className="branco-100">Sobre nós</h1>
      </section>
      <main>
        <div className="flex">
          <p>
            A Webescola Cairesdev é um projeto desenvolvido para fins
            educacionais e para o meu portfólio. Está construída inteiramente em
            JavaScript e React, com protótipos desenvolvidos no Figma. O
            Firebase é usado como backend para armazenar os dados da aplicação.
            A aplicação é dividida em diferentes seções, incluindo aulas,
            cursos, projetos e até mesmo uma área de suporte on-line para ajudar
            os alunos. Cada seção contém materiais de aprendizagem interativos,
            que são atualizados regularmente para manter os alunos interessados.
          </p>
          <div>
            <p>Desenvolvido por:</p>
            <h3>João Caires</h3>
            <span>@cairesdev em todas as mídias.</span>
            <hr />
          </div>
        </div>
        <br />
        <br />
        <h2>Vídeo explicando o projeto da webescola.</h2>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/iW2vZA2wnPc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
        ></iframe>
      </main>
      <Footer />
    </div>
  );
}

export default About;

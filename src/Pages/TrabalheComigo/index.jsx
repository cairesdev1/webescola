import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function TrabalheComigo() {
  return (
    <div className="pages-navs">
      <Header />
      <section className="linear-1">
        <h1 className="branco-100">Trabalhe comigo!</h1>
      </section>
      <main>
        <div className="flex">
          <p>
            Meu nome é João Caires, tenho 21 anos e estou me formando em Analise
            e Desenvolvimento de Sistemas pela universidade UNESA, este projeto
            faz parte de meu portifólio como um exemplo de minhas habilidades de
            desenvolvimento web e gerenciamento de dados. Estou aberto para
            oportunidades que possam surgir e quero muito poder contribuir num
            projeto que trará inovações ao mercado e ao mundo!
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
        <h2>Veja meu vídeo apresentação!</h2>
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iW2vZA2wnPc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </main>
      <Footer />
    </div>
  );
}

export default TrabalheComigo;

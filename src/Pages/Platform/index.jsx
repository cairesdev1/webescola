import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Platform() {
  return (
    <div className="pages-navs">
      <Header />
      <section className="linear-2">
        <h1 className="branco-100">Plataforma</h1>
      </section>
      <main>
        <div className="flex">
          <p>
            A nossa plataforma montada em ReactJs e Firebase foi criada para
            fornecer uma experiência única e intuitiva para usuários. Tudo
            desenvolvido com as últimas tecnologias, permitindo que os usuários
            naveguem e interajam com a plataforma de maneira fluida. Os usuários
            podem acessar facilmente os conteúdos de uma forma segura e
            confiável, além de contar com a escalabilidade e estabilidade
            necessária para o seu negócio. Com a plataforma, os usuários terão
            acesso a serviços de última geração para que possam desfrutar de uma
            experiência de navegação mais dinâmica e interativa.
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
        <h2>Vídeo falando sobre as tecnologias utilizadas.</h2>
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

export default Platform;

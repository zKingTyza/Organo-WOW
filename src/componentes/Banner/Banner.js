import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <img
        src="/imagens/aliança1.png"
        alt="logo da aliança"
        className="logo-aliança"
      />
      <img
        src="/imagens/wow-banner.jpg"
        alt="O banner principal da pagina do Organo"
      />
      <img
        src="/imagens/horda1.png"
        alt="logo da horda"
        className="logo-horda"
      />
    </header>
  );
}

export default Banner;

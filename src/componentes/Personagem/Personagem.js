import "./Personagem.css";

const Personagem = (props) => {
  return (
    <div className="Personagem">
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.imagem} alt={props.nick} />
      </div>
      <div className="rodape">
        <h4>{props.nick}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Personagem;

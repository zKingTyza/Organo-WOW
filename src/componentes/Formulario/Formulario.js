import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nick, setNick] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [classe, setClasse] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoPersonagemCadastrado({
      nick,
      cargo,
      imagem,
      classe,
    });

    setNick("");
    setCargo("");
    setImagem("");
    setClasse("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do personagem.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nick"
          placeholder="Digite seu nick"
          valor={nick}
          aoAlterado={(valor) => setNick(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Classe"
          itens={props.classeswow}
          valor={classe}
          aoAlterado={(valor) => setClasse(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};

export default Formulario;

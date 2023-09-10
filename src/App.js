import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import ClassesWOW from "./componentes/ClassesWOW/ClassesWOW";
import Rodape from "./componentes/Rodape/rodape";

function App() {
  const classeswow = [
    {
      nomeClasse: "Warrior",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nomeClasse: "Hunter",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nomeClasse: "Mage",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nomeClasse: "Rogue",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nomeClasse: "Warlock",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nomeClasse: "Priest",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nomeClasse: "Monge",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [personagens, setPersonagem] = useState([]);

  const aoNovoPersonagemAdicionado = (personagem) => {
    console.log(personagem);
    setPersonagem([...personagens, personagem]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        classeswow={classeswow.map((classe) => classe.nomeClasse)}
        aoPersonagemCadastrado={(personagem) =>
          aoNovoPersonagemAdicionado(personagem)
        }
      />

      {classeswow.map((classe) => (
        <ClassesWOW
          key={classe.nomeClasse}
          classe={classe.nomeClasse}
          corPrimaria={classe.corPrimaria}
          corSecundaria={classe.corSecundaria}
          personagens={personagens.filter(
            (personagem) => personagem.classe === classe.nomeClasse
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;

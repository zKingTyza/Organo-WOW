import Personagem from "../Personagem/Personagem";
import "./ClassesWOW.css";

const ClassesWOW = (props) => {
  return props.personagens.length > 0 ? (
    <section
      className="classes"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.classe}</h3>
      <div className="classesPersonagem">
        {props.personagens.map((personagens) => (
          <Personagem
            corDeFundo={props.corPrimaria}
            key={personagens.nick}
            nick={personagens.nick}
            cargo={personagens.cargo}
            imagem={personagens.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default ClassesWOW;

import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>;
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <strong>Example:</strong>
            <em>{definition.example}</em>
            <br />
            <strong>Synonyms:</strong>
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>
        );
      })}
     
    </div>
  );
}

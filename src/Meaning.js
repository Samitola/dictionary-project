import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <section key={index}>
            <div className="Definition">{definition.definition}</div>
            <div className="example">
              {definition.example}
            </div>
          </section>
        );
      })}
      <section>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}

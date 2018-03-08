import React, { Component } from 'react';
import './Verb.css';
import verbs from '../verbs.json';

class Verb extends Component {
  render() {
    return (
      <div className="choose-verbs container">
        <div>
          {verbs.map((verb, index) => {
            return <fieldset key={index}>
              <input type="checkbox" name="{verb.infinitive}" id="{verb.infinitive}"/>
              <label htmlFor="{verb.infinitive}">
                {verb.tense.present}
                <span className="translation">{verb.russian}</span>
              </label>
            </fieldset>
          })}
        </div>
      </div>
    );
  }
}

export default Verb;

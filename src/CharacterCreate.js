import React, { useState } from "react";
import handleHttpErrors from "./Errors";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { URLCRTECHR, makeOptions } from "./settings.js";
import { propTypes } from "react-bootstrap/esm/Image";
import "./App.css";
import App, {username} from "./App.js";

export function CharacterCreate() {
  const initialValue = {
    levl: 0,
    maxHP: 0,
    currentHP: 0,
    ac: 0,
    speed: 0,
    name: "",
    biography: "",
    race: "",
    classs: "",
    abilityScoreDTO: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      wisdom: 10,
      intelligence: 10,
      charisma: 10,
    },
    skillsDTO: {
      Animal_Handling: 3,
      Arcana: 3,
      Athletics: 3,
      Deception: 3,
      History: 3,
      Insight: 3,
      Intimidation: 3,
      Investigation: 3,
      Medicine: 3,
      Nature: 3,
      Perception: 3,
      Performance: 3,
      Persuasion: 3,
      Religion: 3,
      Sleight_of_Hand: 3,
      Stealth: 3,
      Survival: 3,
    },
  };

  const createOne = (e) => {
    e.preventDefault();
    const options = makeOptions("POST", true, {
      levl: character.levl,
      maxHP: character.maxHP,
      currentHP: character.currentHP,
      ac: character.ac,
      speed: character.speed,
      name: character.name,
      biography: character.biography,
      race: character.race,
      classs: character.classs,
      abilityScoreDTO: character.abilityScoreDTO,
      skillsDTO: character.skillsDTO
    });
    return fetch(URLCRTECHR + "/" + username, options).then(handleHttpErrors).then(resetValues);
  };

const resetValues = () => {

}

  const [character, setCharacter] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setCharacter({ ...character, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(character));
    // props.transferPerson(character.name) // Trojansk callback hest
  }

  return (
    <div>
      <form>
        <input
          type="number"
          name="levl"
          onChange={handleChange}
          placeholder="Character level"
        />
        <br />
        <input
          type="number"
          name="maxHP"
          onChange={handleChange}
          placeholder="Maximum Hitpoints"
        />
        <br />
        <input
          type="number"
          name="currentHP"
          onChange={handleChange}
          placeholder="Current Hitpoints"
        />
        <br />
        <input
          type="number"
          name="ac"
          onChange={handleChange}
          placeholder="Armour Class"
        />
        <br />
        <input
          type="number"
          name="speed"
          onChange={handleChange}
          placeholder="Current speed"
        />
        <br />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Character name"
        />
        <br />
        <input
          type="text"
          name="biography"
          onChange={handleChange}
          placeholder="Enter your entire background story in this little textbox right now"
        />
        <br />
        <input
          type="text"
          name="race"
          onChange={handleChange}
          placeholder="Your race"
        />
        <br />
        <input
          type="text"
          name="classs"
          onChange={handleChange}
          placeholder="Your characters class"
        />
        <br />
        <button onClick={handleSubmit}>Alert me with the stats</button>
        <button onClick={createOne}>
          Create character with given parameters
        </button>
      </form>
      <p>{JSON.stringify(character)}</p>
    </div>
  );
}

import React from "react";
import handleHttpErrors from "./Errors"
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import {URLCRTECHR, makeOptions} from "./settings.js";
import "./App.css";

    

export function CharacterCreate() {
var [name, setName] = useState(null);
var [race, setRace] = useState(null);
var [classs, setClasss] = useState(null);
var [levl, setLevl] = useState(null);
var [ac, setAc] = useState(null);
var [speed, setSpeed] = useState(null);
var [maxHP, setMaxHP] = useState(null);


    const createOne = (name, race, classs, levl, ac, speed, maxHP) => {
            const options = makeOptions("POST", false,{
                name: name,
                race: race,
                classs: classs,
                levl: levl,
                ac: ac,
                speed: speed,
                maxhp: maxHP
            });
            return fetch(URLCRTECHR + "/1", options)
              .then(handleHttpErrors)
    };


  return (
    <div>
      <h2>Fill the forms below to create a character:</h2>
      <input id="name" placeholder="Name"></input>
      <br/>   
      <input id="race" placeholder="Race"></input>
      <br/>   
      <input id="class" placeholder="Class"></input>
      <br/>   
      <input id="level" placeholder="Level"></input>
      <br/>
      <input id="bio" placeholder="biography"></input>   
      <br/>
      <input id="ac" placeholder="Armour Class"></input>
      <br/>   
      <input id="speed" placeholder="Speed"></input>
      <br/>   
      <input id="maxhp" placeholder="Maximum Hitpoints"></input>
      <br/>
    <button onClick={createOne}>Add this Character</button>
    </div>
  );
}

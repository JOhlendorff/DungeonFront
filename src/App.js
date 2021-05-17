import loginWithUser from "./Login";
import logoutUser from "./Logout";
import React, { useState, useEffect } from "react"
import './App.css';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Equipment from './Equipment';
import RedSun from './RedSun';

const URL = "http://localhost:8080/jpareststarter";

function App() {
  // const init = { user_name: "", password: "" };
  // const [loginCredentials, setLoginCredentials] = useState(init);

  // const performLogin = (evt) => {
  //   console.log(loginCredentials)
  //   evt.preventDefault();
  //   loginWithUser(loginCredentials.user_name, loginCredentials.password);
  //   // return fetch(URL + "/api/players")
  // }

  // const onChange = (evt) => {
  //   setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
  // }
  return (

<div>
<Nav />
<RedSun />
    <div className="App">
      <header className="App-header">
       <h2>Welcome to the DungeonKey interface</h2>
       <h3>Click above to navigate</h3>
      {/* <div>
      <form onChange={onChange} >
        <input placeholder="User Name" id="user_name"></input>
        <br></br>
        <input placeholder="Password" type="password" id="password"></input>
        <br></br>
        <button onClick={performLogin}>Login</button>
        </form>
      </div> */}

      </header>
    </div>


    </div>
  );


}


export default App;

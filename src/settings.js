import './App.css';

export let MAINURL = 'http://localhost:8080/jpareststarter';
export let URLQUIPMENT = 'https://www.dnd5eapi.co/api/equipment/';


export let URLEP2 = 'https://api.chucknorris.io/jokes/random';

export let URLCRTECHR = 'http://localhost:8080/jpareststarter/api/characters/createcharacter';

export const makeOptions= (method,addToken,body) =>{
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    // if (addToken && loggedIn()) {
    //   opts.headers["x-access-token"] = getToken();
    // }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

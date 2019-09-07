// const element = document.createElement('h1');
//
// element.innerText = 'Hello React .. ';
//
// const container = document.getElementById('root');
//
// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: 'Juan',
  lastNAme: 'Ortiz',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'

};

function getName(object){
  return  `${object.firstName} ${object.lastNAme}`
}

function getGreeting(object){
  if(object){
    return <h1>Hello by {getName(user)} (Not Strenger)</h1>;
  }else {
    return <h1>Hello strenger</h1>;
  }

}


const name = 'Juan';
// const element = <div>{getGreeting(user)}</div>
//const element = <img src={user.avatar}></img>

const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
);

const container = document.getElementById('root');

//reactDOM.render(__QUE__, __DONDE__);
ReactDOM.render(element, container);

import React from 'react';
import './App.css';
import membership from "./Garden Club Membership August 2020";
import * as Papa from "papaparse";

//let members = ["Judy", "Pam", "Justina", "Toby"];

let members = Papa.parse(membership, {header: true}).data;

console.log(members);

function App() {
  let membs = [];
  //Note this is a for IN loop - it's giving you indices, not the members themselves
  for (let membdex in members) {
    members[membdex].key = membdex;
    let newmemb = React.createElement(Member, members[membdex]);
    membs.push(newmemb);
  }
  return membs;
}

class Member extends React.Component {
  render() {
    let aspects = [];
    for (let aspect in this.props) {
      let newaspect = React.createElement("p", {key: aspect, className: "entryline " + aspect}, this.props[aspect]);
      aspects.push(newaspect);
    }
    return (
      React.createElement("div", {className: "entry"}, aspects)
    );
  }
}

export default App;

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
    return (
      <div className="entry">
        <h2>{this.props["First Name"] + " " + this.props["Last Name"]}</h2>
        <h4>{this.props["Street Address"]}</h4>
        <h4>{this.props["City"] + ", " + this.props["State"]}</h4>
        <h4>{this.props["Zip"]}</h4>
      </div>
    );
  }
}

export default App;

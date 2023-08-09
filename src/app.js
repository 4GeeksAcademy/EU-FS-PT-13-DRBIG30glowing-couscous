/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  let randomNumber = Math.random() * 10;
  console.log("Hello!" + randomNumber);
};
let generateExcuse = () => {
  let pronoun = ["A ", "The "];
  let subject = [
    "Jogger ",
    "Racoon ",
    "dog ",
    "driver ",
    "comedian ",
    "pincone "
  ];
  let actions = [
    " took my ",
    " threw my ",
    " yelled at my ",
    " stole my ",
    " bit my "
  ];
  let possesion = [" homework ", " toe ", " car ", " shoe "];
  let where = [" on the street ", " in my house ", " in my drive way "];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionsIndex = Math.floor(Math.random() * actions.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    "" +
    subject[subjectIndex] +
    "" +
    actions[actionsIndex] +
    "" +
    possesion[possesionIndex] +
    "" +
    where[whereIndex] +
    ""
  );
};

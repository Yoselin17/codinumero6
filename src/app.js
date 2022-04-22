/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  console.log("trabajo");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying";

  //math.floor(math.random() * 2)
  let numAleatorioWho = Math.floor(Math.random() * who.length);
  console.log(numAleatorioWho);
  let aleatorioWho = who[numAleatorioWho];
  console.log(aleatorioWho);

  let numeroAleatorioAction = Math.floor(Math.random() * action.length);
  console.log(numeroAleatorioAction);
  let aleatorioAction = action[numeroAleatorioAction];
  console.log(aleatorioAction);

  let numerosAleatoriosWhat = Math.floor(Math.random() * what.length);
  console.log(numerosAleatoriosWhat);
  let aleatorioWhat = what[numerosAleatoriosWhat];
  console.log(aleatorioWhat);

  let numero1AleatorioWhen = Math.floor(Math.random() * when.length);
  console.log(numero1AleatorioWhen);
  let aleatorioWhen = when[numero1AleatorioWhen];
  console.log(aleatorioWhen);

  let frases = aleatorioWho + aleatorioAction + aleatorioWhat + aleatorioWhen;
  console.log(frases);
};

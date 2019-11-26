"use strict";

const characters = document.querySelectorAll(".js-character");

const handleClick = function(ev) {
  const id = ev.target.id;
  const isEven = parseInt(id) % 2 === 0;
  console.log("El elemento pulsado es", ev.target.id, isEven);
};

for (let i = 0; i < characters.length; i += 1) {
  characters[i].addEventListener("click", handleClick);
}

for (const character of characters) {
  // const character = characters[i];
  character.addEventListener("click", handleClick);
}

"use strict";

const section = document.querySelector(".section");
const result = document.querySelector(".result");
let selectedNote = null;
let notes = document.querySelectorAll(".section__note");

for (let i = 0; i < notes.length; i++) {
  notes[i].addEventListener("click", function () {
    // Réinitialiser la couleur de fond de toutes les notes
    for (let j = 0; j < notes.length; j++) {
      notes[j].style.backgroundColor = ""; // Réinitialise à la couleur par défaut
    }

    // Mettre à jour la note sélectionnée et changer sa couleur de fond
    selectedNote = notes[i].getAttribute("data-note");
    notes[i].style.backgroundColor = "#FC7614";
  });
}

document.getElementById("submitBtn").addEventListener("click", function () {
  if (selectedNote) {
    section.classList.add("hidden");
    result.classList.remove("hidden");
    document.getElementById(
      "result"
    ).textContent = `You selected ${selectedNote} out of 5`;
  } else {
    document.getElementById("result").textContent =
      "Veuillez sélectionner une note";
  }
});

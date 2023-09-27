// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;
  document.getElementById("container").innerHTML = "";
  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  for (let i = 0; i < babyData.length; i++) {
    displayName(babyData[i].name, babyData[i].gender, babyData[i].rank);
  }
}

// Display Names by Gender
function searchGender() {
  let gender = prompt("gender:");
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].gender.toLowerCase() === gender.toLowerCase()) {
      displayName(babyData[i].name, babyData[i].gender, babyData[i].rank);
    }
  }
}

// Display Names within a Range of Ranks
function searchRank() {
  let rank = +prompt("rank:");
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].rank == rank) {
      displayName(babyData[i].name, babyData[i].gender, babyData[i].rank);
    }
  }
}

// Display Names with Starting Letter
function searchStartingLetter() {
  let letter = prompt("starting letter:");
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].name.charAt(0).toLowerCase() === letter) {
      displayName(babyData[i].name, babyData[i].gender, babyData[i].rank);
    }
  }
}
// Display Names with a Specific Length
function searchLength() {
  let length = +prompt("length:");
  for (let i = 0; i < babyData.length; i++) {
    if (babyData[i].name.length === length) {
      displayName(babyData[i].name, babyData[i].gender, babyData[i].rank);
    }
  }
}

function displayName(name, gender, rank) {
  document.getElementById("container").innerHTML += `<div>${name} (Rank: ${rank}, Gender: ${gender}) </div> `;
}

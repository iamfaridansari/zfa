let positions = [
  { top: 50, left: 50 },
  { top: 50, left: 200 },
  { top: 25, left: 25 },
  { top: 150, left: 150 },
  { top: 35, left: 150 },
  { top: 150, left: 250 },
];

let farid = document.getElementById("farid");
let zoya = document.getElementById("zoya");
let question = document.getElementById("question");
let conclude = document.getElementById("conclude");

let lastIndex = -1; // no previous position yet

let changeFaridPosition = () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * positions.length);
  } while (randomIndex === lastIndex); // prevent same position

  lastIndex = randomIndex;

  farid.style.top = positions[randomIndex].top + "px";
  farid.style.left = positions[randomIndex].left + "px";
};

let showAnswer = () => {
  question.style.display = "none";
  conclude.style.display = "block";
};

farid.addEventListener("click", changeFaridPosition);
zoya.addEventListener("click", showAnswer);

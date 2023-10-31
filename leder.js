const scoreBox = document.getElementById("scoreBox");
const minBox = document.getElementById("minBox");
const maxBox = document.getElementById("maxBox");
const enterButton = document.getElementById("enterButton");
const numberButtons = document.querySelectorAll(".number-button");

let currentScore = "";

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentScore += button.textContent;
    scoreBox.value = currentScore;
  });
});

enterButton.addEventListener("click", () => {
  const score = parseInt(currentScore, 10);
  if (!isNaN(score)) {
    if (score < parseInt(minBox.textContent, 10)) {
      minBox.textContent = score;
    }
    if (score > parseInt(maxBox.textContent, 10)) {
      maxBox.textContent = score;
    }
    scoreBox.value = "";
    currentScore = "";
  }
});
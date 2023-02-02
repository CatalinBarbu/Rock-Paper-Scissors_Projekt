let outPutPlayer1 = document.getElementsByClassName("outPutPlayer1")[0];
let outPutPlayer2 = document.getElementsByClassName("outPutPlayer2")[0];
const choice = document.querySelectorAll("#choice input");
console.log(choice);
const rock = document.getElementsByClassName("rock")[0];
const paper = document.getElementsByClassName("paper")[0];
const scissors = document.getElementsByClassName("scissors")[0];
outPutText = document.querySelector(".titleMain p");
console.log(outPutText);

let counter = [0, 0];

choice.forEach((element, index) => {
  index++;
  element.addEventListener("click", () => {
    let computerCoiche = Math.ceil(Math.random() * 3);
    console.log(index + " Geht" + " " + computerCoiche);
    if (index === computerCoiche) {
      renderOutPut("egal");
    } else if (
      (index === 1 && computerCoiche === 2) ||
      (index === 2 && computerCoiche === 3) ||
      (index === 3 && computerCoiche === 1)
    ) {
      counter[0]++;
      renderOutPut("you lose");
    } else if (
      (index === 1 && computerCoiche === 3) ||
      (index === 2 && computerCoiche === 1) ||
      (index === 3 && computerCoiche === 2)
    ) {
      counter[1]++;
      renderOutPut("you win");
    }
  });
});

function renderOutPut(text) {
  outPutPlayer1.innerHTML = counter[1];
  outPutPlayer2.innerHTML = counter[0];
  outPutText.innerHTML = text;
}

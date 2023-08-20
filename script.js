let result = "";
let Win = 0,
  Tie = 0,
  Lose = 0;
let finalResult = "";
const score = () => {
  if (finalResult == "You Won") Win++;
  else if (finalResult == "You Lost") Lose++;
  else Tie++;
};
const reset = () => {
  Win = 0;
  Lose = 0;
  Tie = 0;
  updateScore();
};
const pickComputerMove = () => {
  const variable = Math.random();
  if (0 < variable && variable < 1 / 3) result = "rock";
  else if (1 / 3 < variable && variable < 2 / 3) result = "paper";
  else if (2 / 3 < variable && variable < 1) result = "scissor";
  return result;
};
const updateScore = () => {
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${Win} Lost: ${Lose} Tie:${Tie}`;
};
const play = (Choice) => {
  pickComputerMove();
  console.log(result);
  if (Choice == result) finalResult = "Tie";
  else if (
    (Choice === "rock" && result === "scissor") ||
    (Choice === "paper" && result === "rock") ||
    (Choice === "scissor" && result === "paper")
  )
    finalResult = "You Won";
  else finalResult = "You Lost";
  score();
  updateScore();
  document.querySelector(
    ".finalResult"
  ).innerHTML = `You chose ${Choice} and the computer choice was ${result}.`;
  document.querySelector(".a").textContent = `${finalResult}`;
};

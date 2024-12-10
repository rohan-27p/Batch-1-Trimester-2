const correctAns = ["D", "B", "C", "B", "D"];
let questions = document.querySelectorAll(".question");
const result = document.querySelector(".result");

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  correctAns.forEach((answer, index) => {
    const userAnswer = form[`q${index + 1}`].value; // Access input value directly
    
    if (userAnswer === answer) {
      score += 1;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });

  result.classList.remove("hide");
  result.querySelector(".score").innerText = `You Scored ${score}/5`;
});
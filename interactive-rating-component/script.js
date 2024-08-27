const rate = document.getElementById("rate");
const ratingBtn = document.getElementsByClassName("rating");
const submit = document.getElementById("submit");
const thanks = document.getElementById("thanks");
const selection = document.getElementById("selection");
let score;

for (let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener("click", function () {
    for (let j = 0; j < ratingBtn.length; j++) {
      ratingBtn[j].classList.remove("active");
    }
    this.classList.toggle("active");
    score = this.textContent;
  });
}

submit.addEventListener("click", function () {
  selection.textContent = `You selected ${score} out of 5`;
  rate.style.display = "none";
  thanks.style.display = "flex";
});

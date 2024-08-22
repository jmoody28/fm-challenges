const drop = document.getElementsByClassName("drop-down");

for (let i = 0; i < drop.length; i++) {
  drop[i].addEventListener("click", function () {
    this.classList.toggle("visible");

    const info = this.nextElementSibling;

    if (info.style.display === "block") {
      info.style.display = "none";
    } else {
      info.style.display = "block";
    }
  });
}

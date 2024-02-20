const counter = document.querySelector(".countDown-container");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");
const nums = document.querySelectorAll(".nums span");

runAnimation();

function runAnimation() {
  nums.forEach((num, idx) => {
    const LAST = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== LAST) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

function resetDom() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  nums.forEach((num) => {
    num.classList.value = "";
  });
  nums[0].classList.add("in");
}

replay.addEventListener("click", () => {
  resetDom();
  runAnimation();
});



const ball = document.getElementById("top");
const field = document.querySelector(".moydon");

ball.style.left = "50%";
ball.style.top = "50%";

field.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  ball.style.left = x + "px";
  ball.style.top = y + "px";
});

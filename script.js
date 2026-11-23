const btn = document.getElementById("tipBtn");
const text = document.getElementById("tipText");

const tips = [
  "Start slower than you think you need to.",
  "Drink water before and after your run.",
  "Rest days are when your legs get stronger."
];

let index = 0;

btn.addEventListener("click", () => {
  text.textContent = tips[index];
  index = (index + 1) % tips.length;
});
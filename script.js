//Make sure all the elements are loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded");
});

//Select Elements
const counterValue = document.getElementById("counter-value");
const increaseButton = document.getElementById("increase-btn");
const decreaseButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");

//Global Value
let count = 0;

//add events to the buttons
increaseButton.addEventListener("click", () => {
  count++;
  //update the counter value
  updateCounter();
});
decreaseButton.addEventListener("click", () => {
  count--;
  //update the counter value
  updateCounter();
});
resetButton.addEventListener("click", () => {
  count = 0;
  //update the counter value
  updateCounter();
});

//update counter
function updateCounter() {
  counterValue.textContent = count;
}

const counterValue = document.getElementById('counterValue');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');

let count = 0;

function updateDisplay() {
  counterValue.textContent = count;
}

function increment() {
  count += 1;
  updateDisplay();
}

function decrement() {
  count -= 1;
  updateDisplay();
}

function resetCounter() {
  count = 0;
  updateDisplay();
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
resetButton.addEventListener('click', resetCounter);

updateDisplay();

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function handleClick(action) {
  if (action === "Start") {
    startButton.disabled = true;
    timerId = setTimeout(function changeColor() {
      document.body.style.backgroundColor = getRandomHexColor();
      timerId = setTimeout(changeColor, 1000);
    }, 1000);
  } else if (action === "Stop") {
    startButton.disabled = false;
    clearTimeout(timerId);
  }
}
/* */
startButton.addEventListener("click", () => handleClick("Start"));
stopButton.addEventListener("click", () => handleClick("Stop")); 

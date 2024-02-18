let timerId;
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const handleClick = (action) => {
    if (action === "Start") {
    startButton.disabled = true;
    timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
    }
    else if (action === "Stop") {
        startButton.disabled = false;
        clearInterval(timerId);
    }
};
/* */
startButton.addEventListener("click", () => handleClick("Start"));
stopButton.addEventListener("click", () => handleClick("Stop")); 

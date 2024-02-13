import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const startButton = document.querySelector('[data-start]');
const dateTimePicker = document.querySelector('#datetime-picker');

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
onClose(selectedDates, dateStr, instance) {
    const selectedDate = new Date(selectedDates[0]);
    const today = new Date();
    
    if (selectedDate < today) {
        startButton.disabled = true;
        window.alert("Please choose a date in the future!");
        instance.clear();
    }
    else {
        startButton.disabled = false;
    }
  },
};

let timeRemaining;

const handleClick = (action) => {
const selectedDate = new Date(dateTimePicker.value);
const today = new Date();
    if (action === "Start") {
        startButton.disabled = true;
        timeDifference = selectedDate - today;

    timerId = setInterval(() => {
    const now = new Date();
        const timeRemaining = selectedDate - new Date();
        const { days, hours, minutes, seconds } = convertMs(timeRemaining);
        console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`);
        
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        window.alert("Countdown finished!");
            }
        
        }, 1000);
    }
};
startButton.addEventListener("click", () => handleClick("Start"));

flatpickr(dateTimePicker, options);
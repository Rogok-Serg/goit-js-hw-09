import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.getElementById('datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]')
}
let timerId = 0;
let selectedDate;

refs.btnStart.disabled = true

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   const currentDate = options.defaultDate.getTime();
    selectedDate = selectedDates[0].getTime();


    if (currentDate >= selectedDate) {
      Notify.failure('Please choose a date in the future');
      refs.btnStart.disabled = true;
      
    }
    refs.btnStart.disabled = false;
    return;
  },
};
console.log(options.defaultDate)
  refs.btnStart.addEventListener('click', onClickBtn)
flatpickr(refs.input, options);

function onClickBtn() {
  timerId = setInterval(interfaceRender, 1000)
  refs.btnStart.disabled = true;
  
}
function interfaceRender() {
  const currentDate = new Date().getTime()
  let remainingTime = selectedDate - currentDate;
  
  if (remainingTime <= '0') {
   return Notify.success('The time is up', clearInterval(timerId))
  }
  renderTimers(convertMs(remainingTime));
}

function renderTimers({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours)
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

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

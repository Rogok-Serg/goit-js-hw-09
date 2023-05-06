const refs = {
bodyColor:  document.querySelector('body'), 
btnStartEl: document.querySelector('button[data-start]'),
btnStopEl: document.querySelector('button[data-stop]')
}
let timerId = null;
onChangeBodyColorStop()

refs.btnStartEl.addEventListener('click', onChangeBodyColorStart)
refs.btnStopEl.addEventListener('click', onChangeBodyColorStop)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onChangeBodyColorStart() {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor()
    refs.bodyColor.style.backgroundColor = randomColor;
    refs.btnStartEl.setAttribute('disabled', 'disabled');
    refs.btnStopEl.removeAttribute('disabled', 'disabled');
  }, 1000)

}

function onChangeBodyColorStop() {
  clearInterval(timerId)
  refs.btnStopEl.setAttribute('disabled', 'disabled');
  refs.btnStartEl.removeAttribute('disabled', 'disabled');
}
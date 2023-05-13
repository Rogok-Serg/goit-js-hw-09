import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs =  {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('[name="delay"]')
}

refs.formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = {
    delay: Number(e.target.delay.value),
    step: Number(e.target.step.value),
    amount: Number(e.target.amount.value),
  }
  for (let i = 0; i < inputValue.amount; i++) {
    createPromise(i, inputValue.delay)
    inputValue.delay +=inputValue.step
  }

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve()
      } else {
        reject()
      }
    }, delay)
  })
    .then(() =>{
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(() => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  })
  
}




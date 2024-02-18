import Notiflix from 'notiflix';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay }); // Fulfill
      } else {
        reject({ position, delay }); // Reject 
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const delay = parseInt(formData.get('delay'));
      const step = parseInt(formData.get('step'));
      const amount = parseInt(formData.get('amount'));

      for (let i = 0; i < amount; i++) {
        const currentDelay = delay + (i * step);
        createPromise(i + 1, currentDelay)
          .then(({ position, delay }) => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
             Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });
      }
    });
var counter = document.querySelector('.counter');
counter.innerText = moment("2021-12-01T08:00:00").countdown().toString();

setInterval(() => {
  counter.innerText = moment("2021-12-01T08:00:00").countdown().toString();
}, 1000)

var counter = document.querySelector('.counter');
var gameover = document.querySelector('.gameover');
var datetime = "2021-12-01T08:00:00";


function areWeThereYet() {
  return moment().diff(datetime, 'seconds') > 0
}


if (areWeThereYet()) {
  counter.classList.add('hidden');
  gameover.classList.remove('hidden');
}
else {
  counter.innerText = moment(datetime).countdown().toString();
}

setInterval(() => {
  counter.innerText = moment(datetime).countdown().toString();

  if (areWeThereYet()) {
    gameover.classList.remove('hidden');
    counter.classList.add('hidden');
  }
}, 1000)

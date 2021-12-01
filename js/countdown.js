var counter = document.querySelector('.counter');
var gameover = document.querySelector('.gameover');
var message = document.querySelector('.message');
var pacman = document.querySelector('.pacman');
var header = document.querySelector('#header');
var illustrativeImage = document.querySelector('#illustrative-image');
var datetime = "2021-12-01T08:00:00";
var timer = null;
var gameTimeout = 15000;

var params = new URLSearchParams(window.location.search)
var mock = params.get("mock") === 'true';
var easter = params.get("easter") === 'true';


function areWeThereYet() {
  if (mock) {
    return true;
  }

  return moment().diff(datetime, 'seconds') > 0
}

function gameOver() {
  counter.classList.add('hidden');
  message.classList.remove('hidden');
  document.querySelector('body.main').style.paddingTop = 0

  if (!timer) { gameover.classList.remove('hidden'); }

  if (!timer && easter) {
    timer = setTimeout(() => {
      gameover.classList.add('hidden');
      pacman.classList.remove('hidden')
    }, gameTimeout)
  }
}

if (areWeThereYet()) {
  gameOver()
}
else {
  header.classList.remove('hidden');
  illustrativeImage.classList.remove('hidden');
  counter.innerText = moment(datetime).countdown().toString();
}

setInterval(() => {
  counter.innerText = moment(datetime).countdown().toString();

  if (areWeThereYet()) {
    gameOver();
  }
}, 1000)

let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let startGame = document.getElementsByClassName('btn_reset');
let missed = 0;
let phrases = [ 'f', 'b', 'e', 'g', 'c']

startGame.addEventListener('click', () => {
  startGame.style.display = 'none';
});

// create variables
let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let startGame = document.querySelector('.btn__reset');
let missed = 0;

// create an array named phrases
let phrases = [ 'f', 'b', 'e', 'g', 'c']

//event listener to the start Game button
startGame.addEventListener('click', () => {
  startGame.style.display = 'none';
});

// create a getRandomPhraseAsArray function
function getRandomPhraseAsArray() {
//random number based on length of array
  let randomNum = phrases.length;
  getRandomPhraseAsArray(phrases);
}

//create a checkLetter function
function checkLetter(button){
 let checkletter = document.getElementsByTagName('li');
 let match;
 for (i=0; i<checkLetter.length; i +=1) {
    
 }
}
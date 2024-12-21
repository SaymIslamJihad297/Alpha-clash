function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundShow = document.getElementById('play-ground');
    playGroundShow.classList.remove('hidden');

    // reset code and life
    setElementInnerTextById('current-score', 0);
    setElementInnerTextById('current-life', 10);
    continueGame();
}




function handleKeyboardButtonPress(event) {
    const keyPressed = event.key;
    // console.log('key pressed',keyPressed);


    // stop the game if pressed esc
    if(keyPressed === 'Escape'){
        gameOver();
    }
    // get the key that need to be pressed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log('current alphabet',currentAlphabetElement.innerText.toLowerCase());
    const currentKeyNeedToPressed = currentAlphabetElement.innerText.toLowerCase();
    console.log(keyPressed, currentKeyNeedToPressed);

    if (keyPressed === currentKeyNeedToPressed) {
        console.log('increased a score');
        const currentScore = getElementInnerTextById('current-score');
        const newScore = currentScore + 1;

        setElementInnerTextById('current-score', newScore);


        removeBackgroundColorById(currentKeyNeedToPressed);
        continueGame();
    } else {
        console.log('you have losed on of your life');
        const life = getElementInnerTextById('current-life');
        const newLife = life - 1;
        setElementInnerTextById('current-life', newLife);

        if (newLife === 0) {
            gameOver();
        }

    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log('Your Alphabet', alphabet);

    // set randomly generated alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function gameOver() {
    console.log('game over');
    const playGroundShow = document.getElementById('play-ground');
    playGroundShow.classList.add('hidden');

    const scoreBoard = document.getElementById('score-board');
    scoreBoard.classList.remove('hidden');
    const score_now = getElementInnerTextById('current-score');
    setElementInnerTextById('final-score-shown', score_now);

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
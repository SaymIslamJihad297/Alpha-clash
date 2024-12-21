function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundShow = document.getElementById('play-ground');
    playGroundShow.classList.remove('hidden');
    continueGame();
}

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your Alphabet', alphabet);

    // set randomly generated alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    setBackgroundColorById(alphabet);
}
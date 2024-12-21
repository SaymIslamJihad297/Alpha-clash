function getARandomAlphabet(){
    const alphaBetsList = 'abcdefghijklmnopqrstuvwxyz';
    const alphaBetsplit = alphaBetsList.split('');
    // console.log(alphaBetsplit);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    // console.log(alphaBetsplit[index]);
    return alphaBetsplit[index];
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
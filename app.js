// Global Variables //

const progress = document.getElementsByTagName('progress')[0];
const button = document.getElementsByTagName('button')[0];
const resetBtn = document.getElementsByTagName('button')[1];

// Add Funtion to the 'Click me' button
button.addEventListener('click', (event) => {
    progress.setAttribute('value', '70')

});
// Add Funtion to the 'Reset' button
resetBtn.addEventListener('click', (event) => {
    progress.setAttribute('value', '0')


});

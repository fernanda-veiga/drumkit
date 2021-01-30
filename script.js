const audioFiles = document.querySelectorAll("audio");
const buttonsNodeList = document.querySelectorAll(".button");
let buttons = Array.from(buttonsNodeList);
let keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

//Plays sound when the button is clicked
buttons.forEach(item => {
    item.addEventListener("click", function(){
        playSound(buttons, item);
    })
})

//Plays sound when key is pressed
window.addEventListener("keydown", function(e){
    playSound(keys, e.key);
});

//FUNCTIONS
function playSound(array, item) {
    let i = array.indexOf(item);

    if (i < 0) {return;}//Checks if the element exists in the array
    
    audioFiles[i].currentTime = 0;
    audioFiles[i].play();

    addClass(i);
    return;
}

function addClass(i) {
    buttons[i].classList.add("clicked");
    return;
}
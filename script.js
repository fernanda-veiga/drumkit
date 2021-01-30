const audioFiles = document.querySelectorAll("audio");
const buttons = Array.from(document.querySelectorAll(".button"));
let keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

//Buttons' event listeners
buttons.forEach(item => {
    //Plays sound when the button is clicked
    item.addEventListener("click", function(){
        playSound(buttons, item);
    })
    //Removes the transition after it is done
    item.addEventListener("transitionend", function(){
        removeClass(item);
    })
})

//Keys' event listeners
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

function removeClass(item) {
    item.classList.remove("clicked");
    return;
}
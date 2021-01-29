const audioFiles = document.querySelectorAll("audio");
const buttons = document.querySelectorAll(".button");
let keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

//Play sound when the button is clicked
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        audioFiles[i].play();
        return;
    });
}

//Play sound when key is pressed
window.addEventListener("keydown", function(e){
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i]) {
            audioFiles[i].play();
        }
    }
    return;
})
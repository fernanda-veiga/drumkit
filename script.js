const audioFiles = document.querySelectorAll("audio");
const buttons = document.querySelectorAll(".button");

//Play sound when the button is clicked
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        audioFiles[i].play();
    });
}
const audioFiles = document.querySelectorAll("audio");
const buttonsNodeList = document.querySelectorAll(".button");
let buttons = Array.from(buttonsNodeList);
let keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

//Adds an event listener when the transition ends
/*for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("transitionend", function(){
        if(e.propertyName !== "transform") {
            return;
        }
        this.classList.remove("clicked");
        return;
    });
}*/

//Play sound when the button is clicked
buttons.forEach(item => {
    item.addEventListener("click", function(){
        playSound(buttons, item);
    })
})

//Play sound when key is pressed
window.addEventListener("keydown", function(e){
    playSound(keys, e.key);
});

//FUNCTION
function playSound(array, item) {
    let i = array.indexOf(item);
    audioFiles[i].currentTime = 0;
    audioFiles[i].play();
    return;
}
    /*
        /*
    })
})*/
    
/*for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){playSound(i)}/*function(){
        audioFiles[i].currentTime = 0;
        audioFiles[i].play();
        buttons[i].classList.add("clicked");
        buttons[i].classList.remove("clicked");
        return;
    });
}*/



//FUNCTIONS
/*function playSound(i) {
    audioFiles[i].currentTime = 0;
    audioFiles[i].play();
}*/
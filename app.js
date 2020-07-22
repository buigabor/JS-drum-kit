// const keys = document.body.querySelectorAll('.keys div');

// const audioClap = new Audio('./sounds/clap.wav');
// const audioHihat = new Audio('./sounds/hihat.wav');
// const audioKick = new Audio('./sounds/kick.wav');
// const audioOpenHat = new Audio('./sounds/openhat.wav');
// const audioBoom = new Audio('./sounds/boom.wav');
// const audioRide = new Audio('./sounds/ride.wav');
// const audioSnare = new Audio('./sounds/snare.wav');
// const audioTom = new Audio('./sounds/tom.wav');
// const audioTink = new Audio('./sounds/tink.wav');

// window.addEventListener("keydown", playKey2)

// for (let i = 0; i < keys.length; i++) {
//     keys[i].addEventListener("click", playKey, addPlayingClass)
// }

// function playKey2(event) {

//     let pressedKeyDiv = document.querySelector(`.${event.key}`)
//     pressedKeyDiv.classList.add("playing")
//     setTimeout(() => {
//         pressedKeyDiv.classList.remove("playing")
//     }, 100)

//     let pressKey = event.key

//     switch (pressKey) {
//         case "A":
//             audioClap.play();
//             break;
//         case "S":
//             audioHihat.play();
//             break;
//         case "D":
//             audioKick.play();
//             break;
//         case "F":
//             audioOpenHat.play();
//             break;
//         case "G":
//             audioBoom.play();
//             break;
//         case "H":
//             audioRide.play();
//             break;
//         case "J":
//             audioSnare.play();
//             break;
//         case "K":
//             audioTom.play();
//             break;
//         case "L":
//             audioTink.play();
//             break;
//     }
// }

// function addPlayingClass() {
//     this.classList.add("playing")
//     setTimeout(() => {
//         this.classList.remove("playing")
//     }, 100)
// }

// function playKey(event) {
//     let dataKey = event.currentTarget.textContent


//     if (dataKey.includes("A")) {
//         audioClap.play();
//     } else if (dataKey.includes("S")) {
//         audioHihat.play();
//     } else if (dataKey.includes("D")) {
//         audioKick.play();
//     } else if (dataKey.includes("F")) {
//         audioOpenHat.play();
//     } else if (dataKey.includes("G")) {
//         audioBoom.play();
//     } else if (dataKey.includes("H")) {
//         audioRide.play();
//     } else if (dataKey.includes("J")) {
//         audioSnare.play();
//     } else if (dataKey.includes("K")) {
//         audioTom.play();
//     } else if (dataKey.includes("L")) {
//         audioTink.play();
//     }

// }

// Second, shorter and better solution

const keys = document.body.querySelectorAll('.keys div');

window.addEventListener("keydown", playKeyboard)

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", playKeyClick, addPlayingClass)
}

function playKeyClick(event) {
    let dataKey = event.currentTarget.querySelector("kbd").textContent
    const audio = document.querySelector(`audio.${dataKey}`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    addPlayingClass(this);
}

function playKeyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    addClass(e);
}

function addClass(event) {
    let keyToUpperCase = event.key.toUpperCase();
    let pressedKeyDiv = document.querySelector(`.${keyToUpperCase}`)
    pressedKeyDiv.classList.add("playing")
    setTimeout(() => {
        pressedKeyDiv.classList.remove("playing")
    }, 100)
}

function addPlayingClass(clickedKey) {
    clickedKey.classList.add("playing")
    setTimeout(() => {
        clickedKey.classList.remove("playing")
    }, 100)
}
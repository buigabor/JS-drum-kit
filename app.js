const keys = document.body.querySelectorAll('.keys div');

const audioBoom = new Audio('./sounds/boom.wav');
const audioClap = new Audio('./sounds/clap.wav');
const audioHihat = new Audio('./sounds/hihat.wav');
const audioKick = new Audio('./sounds/kick.wav');
const audioOpenHat = new Audio('./sounds/openhat.wav');
const audioRide = new Audio('./sounds/ride.wav');
const audioSnare = new Audio('./sounds/snare.wav');
const audioTink = new Audio('./sounds/tink.wav');
const audioTom = new Audio('./sounds/tom.wav');

window.addEventListener("keydown", playKey2)

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", playKey)
    keys[i].addEventListener("click", addPlayingClass)
}

function playKey2(event) {

    let pressedKeyDiv = document.querySelector(`.${event.key}`)
    pressedKeyDiv.classList.add("playing")
    setTimeout(() => {
        pressedKeyDiv.classList.remove("playing")
    }, 100)

    let pressKey = event.key

    switch (pressKey) {
        case "a":
            audioClap.play();
            break;
        case "s":
            audioHihat.play();
            break;
        case "d":
            audioKick.play();
            break;
        case "f":
            audioOpenHat.play();
            break;
        case "g":
            audioBoom.play();
            break;
        case "h":
            audioRide.play();
            break;
        case "j":
            audioSnare.play();
            break;
        case "k":
            audioTom.play();
            break;
        case "l":
            audioTink.play();
            break;
    }
}

function addPlayingClass() {
    this.classList.add("playing")
    setTimeout(() => {
        this.classList.remove("playing")
    }, 100)
}

function playKey(event) {
    let dataKey = event.currentTarget.textContent

    if (dataKey.includes("A")) {
        audioClap.play();
    } else if (dataKey.includes("S")) {
        audioHihat.play();
    } else if (dataKey.includes("D")) {
        audioKick.play();
    } else if (dataKey.includes("F")) {
        audioOpenHat.play();
    } else if (dataKey.includes("G")) {
        audioBoom.play();
    } else if (dataKey.includes("H")) {
        audioRide.play();
    } else if (dataKey.includes("J")) {
        audioSnare.play();
    } else if (dataKey.includes("K")) {
        audioTom.play();
    } else if (dataKey.includes("L")) {
        audioTink.play();
    }

}
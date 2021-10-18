const workBtn = document.getElementById('work')
const shortBtn = document.getElementById('short')
const longBtn = document.getElementById('long') 
const showTime = document.getElementById("timeDisplay")
const pauseBtn = document.getElementById('pause')
const continueBtn = document.getElementById('continue')
const showText = document.getElementById('show-text')
const muuu = new Audio('sound/cow-moo.wav')

let intervalId;
let minutes = 0,
    seconds = 0

// Work Hour start 25 Minutes 
workBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    minutes = 24,
    seconds = 60
    intervalId = setInterval(startTime, 1000);
    showText.textContent = "It's time to start. Let's go!!! 🧠🧠"
});

// Short Break Start 5 Minutes 
shortBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    minutes = 1,
    seconds = 0
    intervalId = setInterval(startTime, 1000);
    showText.textContent = "It's a break time, Yay!!! ☕☕"
});

// Long Break Start 15 Minutes 
longBtn.addEventListener("click", () => {
    clearInterval(intervalId)
    minutes = 14,
    seconds = 59
    intervalId = setInterval(startTime, 1000);
    showText.textContent = "You really need to take a break!!! 😴😴"
});

pauseBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});

continueBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1000);
});

const startTime = () => {
    if(seconds === 0) {
        if(minutes === 0) {
            clearInterval(intervalId)
            muuu.play()
            return;
        }
    }
    if(seconds > 0) {
        seconds --
    } else  {
        seconds = 60
        minutes --
    } 
    
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    showTime.textContent = minuteText + ":" + secondText; 
};







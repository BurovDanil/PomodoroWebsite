//first we need to initialise some variables that we will use
//for the functionality part of the website

// const bells = new Audio('./sounds/bell.wav');
const startButton = document.querySelector('.btn-start');
const restartButton = document.querySelector('.btn-restart');
const breakButton = document.querySelector('.btn-break');
const stopButton = document.querySelector('.btn-stop');
const message = document.querySelector('.message');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const firstMinButton = document.querySelector('.btn-30');
const secondMinButton = document.querySelector('.btn-25');
const thirdMinButton = document.querySelector('.btn-20');

const sessionMin = document.querySelector('.minutes');
// const sessionSec = document.querySelector('.seconds');

let interval;
let isTimerRunning = false; //when the application is running
let isTimerStopped = false;
let totalSeconds;

//we can add an a`rgument to the initialiseTimer in order to prevent when restarting 24:30 when restart to get 24
//as well as initialise a html variable and it is going to be a field, get the data from the field and feed it to the method
//to have customized pomodoro timer

const initialiseTimer = () => {
    const sessionAmount = Number.parseInt(sessionMin.textContent);
    totalSeconds = sessionAmount * 60;
    // totalSeconds = (sessionAmount + 1)  * 60; //Temporary solution for resTimer() method!
}

const appTimer = () => {
    if (!isTimerRunning) {
        isTimerRunning = true;
        interval = setInterval(updateSeconds, 1000);
    } else {
        changeMessage("Session already started!");
    }
};

const updateDisplay = () => {
    const minutesLeft = Math.floor(totalSeconds / 60);
    const secondsLeft = totalSeconds % 60;
    minutesDisplay.textContent = minutesLeft;
    secondsDisplay.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
};
const updateSeconds = () => {
    if(totalSeconds <= 0){
        clearInterval(interval);
        isTimerRunning = false;
        changeMessage("Session complete");
        return;
    }
    updateDisplay();
    totalSeconds--;
}


const stopTimer = () => {
    if (isTimerRunning) {
        clearInterval(interval);
        isTimerRunning = false;
        changeMessage("Timer paused!");
    }
};

const resTimer = () => {
    clearInterval(interval);
    initialiseTimer();
    updateDisplay();
    isTimerRunning = false;
    sessionMin.textContent = 0;
}
const breakTimer = () => {
    clearInterval(interval);
    isTimerRunning = false;
    sessionMin.textContent = 5;
    changeMessage("Break time!");
    initialiseTimer();
    updateDisplay();
}
const changeMessage = (text) => {
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 1000);
}
const setTimer = (textContent) => {
    sessionMin.textContent = textContent;
    initialiseTimer();
    updateDisplay();
}
    //what I want to do is get the value from the html and set it to the totalSeconds
    //instead of having a fixed value

firstMinButton.addEventListener('click', () => setTimer(firstMinButton.textContent));
secondMinButton.addEventListener('click', () => setTimer(secondMinButton.textContent));
thirdMinButton.addEventListener('click', () => setTimer(thirdMinButton.textContent));

startButton.addEventListener('click', appTimer);
restartButton.addEventListener('click', resTimer);
stopButton.addEventListener('click', stopTimer);
breakButton.addEventListener('click', breakTimer);

initialiseTimer();
updateDisplay();
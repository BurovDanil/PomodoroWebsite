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

const session = document.querySelector('.minutes');
let interval;
let isTimerRunning = false; //when the application is running -> flag variable
let isTimerStopped = false;
let totalSeconds;


const initialiseTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent);
    totalSeconds = sessionAmount * 60;
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
}
const breakTimer = () => {

}
const changeMessage = (text) => {
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 1000);
}
startButton.addEventListener('click', appTimer);
restartButton.addEventListener('click', resTimer);
stopButton.addEventListener('click', stopTimer);
breakButton.addEventListener('click', breakTimer);

initialiseTimer();
updateDisplay();
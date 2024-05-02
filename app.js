//first we need to initialise some variables that we will use
//for the functionality part of the website

// const bells = new Audio('./sounds/bell.wav');
const startButton = document.querySelector('.btn-start');
const restartButton = document.querySelector('.btn-restart');
const breakButton = document.querySelector('.btn-break');
const stopButton = document.querySelector('.btn-stop');

const session = document.querySelector('.minutes');
let interval;
let state = true; //when the application is running -> flag variable
let flag = true;




const appTimer = () => {
    flag = true;
    const sessionAmount = Number.parseInt(session.textContent)
    if(state){
        state = false; //flag
        let totalSeconds = sessionAmount * 60;

        const updateSeconds = () => {
            if(flag){
            //first get the variables 'minutes' / 'seconds'
            const minutes = document.querySelector('.minutes');
            const seconds = document.querySelector('.seconds');

            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60; //ensuring that seconds left is a 
                                                //positive integer between 0 and 59

            if(secondsLeft < 10){
                seconds.textContent= '0' + secondsLeft;
            } else{
                seconds.textContent = secondsLeft;
            }
            minutes.textContent = `${minutesLeft}`

            if(minutesLeft === 0 && secondsLeft === 0){
                // bells.play()
                clearInterval(interval);
            }
        }else{
            // alert("Exiting!")
            return;
        }
    }
        interval = setInterval(updateSeconds, 1000);
    }else{
        alert('Session has already started.')
    }
}
const resTimer = () =>{

}
const stopTimer = () => {
    flag = false;
}
const breakTimer = () => {

}
startButton.addEventListener('click', appTimer);
restartButton.addEventListener('click', resTimer);
stopButton.addEventListener('click', stopTimer);
breakButton.addEventListener('click', breakTimer);
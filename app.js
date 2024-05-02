//first we need to initialise some variables that we will use
//for the functionality part of the website

// const bells = new Audio('./sounds/bell.wav');
const startButton = document.querySelector('.btn-start');
const restartButton = document.querySelector('.btn-restart');
const session = document.querySelector('.minutes');
let interval;
let state = true; //when the application is running

const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)

    if(state){
        state = false;
        let totalSeconds = sessionAmount * 60;

        const updateSeconds = () => {
            //first get the variables 'minutes' / 'seconds'
            const minutes = document.querySelector('.minutes');
            const seconds = document.querySelector('.seconds');

            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60; //ensuring that seconds left is a 
                                                //positive integer between 0 and 59

            if(secondsLeft < 10){
                seconds.textContent='0' + secondsLeft;
            } else{
                seconds.textContent = seconds;
            }
            minutes.textContent = `${minutesLeft}`

            if(minutesLeft === 0 && secondsLeft === 0){
                // bells.play()
                clearInterval(interval);
            }

        }
        interval = setInterval(updateSeconds, 1000);
    } else{
        alert('Session has already started.')
    }
    startBtn.addEventListener('click', appTimer);
}
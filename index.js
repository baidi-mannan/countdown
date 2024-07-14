

const functionCall = () => {
    let Hours = document.querySelector(".hours")
    let Mins = document.querySelector(".mins")
    let Secs = document.querySelector(".secs")
    let startButton = document.querySelector(".start");
    let pauseButton = document.querySelector(".pause");
    let countdown = null;
    let resetButton = document.querySelector(".reset")



    function startCountDown() {

        if (Hours.value == 0 && Mins.value == 0 && Secs.value == 0) {
            stopCountDown()
            return;
        }

        let seconds = parseInt(Hours.value) * 3600 + parseInt(Mins.value) * 60 + parseInt(Secs.value)
        console.log(seconds)
        seconds = seconds - 1;
        Hours.value = Math.max(Math.floor(seconds / 3600), 0);
        seconds = seconds % 3600;
        Mins.value = Math.max(Math.floor(seconds / 60), 0);
        seconds = seconds % 60;
        if (seconds < 10)
            Secs.value = '0' + Math.max(seconds, 0);
        else
            Secs.value = Math.max(seconds, 0);
    }
    startButton.addEventListener("click", () => {
        if (Hours.value == 0 && Mins.value == 0 && Secs.value == 0) {
            return;
        }
        Hours.disabled = true;
        Mins.disabled = true;
        Secs.disabled = true;
        startButton.style.display="none";
        pauseButton.style.display="inline";
        if (!countdown) {
            console.log("Countdown is null")
            countdown = setInterval(() => {
                console.log("Interval is running")
                startCountDown()
            }, 1000)

        }
    })
    const stopCountDown = () => {
        console.log("Timeout is cleared")
        Hours.disabled = false;
        Mins.disabled = false;
        Secs.disabled = false;
        startButton.style.display="inline";
        pauseButton.style.display="none";
        clearInterval(countdown);
        countdown = null;

    }
    pauseButton.addEventListener("click", () => {
        stopCountDown();
    })
    resetButton.addEventListener("click",()=>{
        stopCountDown();
        Hours.value=0;
        Mins.value=0;
        Secs.value=0;
    })

}

functionCall()

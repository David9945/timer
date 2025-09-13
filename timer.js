const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const restart = document.querySelector("#restart");

const lightMode = document.querySelector("#light");
const darkMode = document.querySelector("#dark");

const body = document.body;
const container = document.querySelector("#container")

let inter = null;

let secondsDisplay = 150;

let minutes = Math.floor(secondsDisplay / 60).toString().padStart(2, 0);
let seconds = (secondsDisplay % 60).toString().padStart(2, 0);

let total = `${minutes}:${seconds}`;

timer.innerHTML = total;

function decrease() {
    if (secondsDisplay > 0) {
        secondsDisplay -= 1;
        minutes = Math.floor(secondsDisplay / 60).toString().padStart(2, 0);
        seconds = (secondsDisplay % 60).toString().padStart(2, 0);
        total = `${minutes}:${seconds}`;
        timer.innerHTML = total;
    };
};

start.addEventListener("click", () => {
    if (!inter) {
        inter = setInterval(decrease, 1000);
    }
    start.style.display = 'none';
    pause.style.display = 'inline';
    restart.style.display = 'inline';  
})

pause.addEventListener("click", () => {
    clearInterval(inter);
    inter = null;
    start.innerHTML = 'Unpause';
    start.style.display = 'inline';
    start.style.width = '200px'
    pause.style.display = 'none';
    restart.style.margin = '0 0 0 20px'
    start.style.padding = '0 0 0 0';
})

restart.addEventListener("click", () => {
    secondsDisplay = 150;
    minutes = Math.floor(secondsDisplay / 60).toString().padStart(2, 0);
    seconds = (secondsDisplay % 60).toString().padStart(2, 0);
    total = `${minutes}:${seconds}`;
    timer.innerHTML = total; 
})


lightMode.addEventListener("click", () => {
    body.style.backgroundColor = '#ffffff';
    timer.style.color = '#301934';
    container.style.backgroundColor = '#ffffff';
    lightMode.style.display = 'none';
    darkMode.style.display = 'inline';
})

darkMode.addEventListener("click", () => {
    body.style.backgroundColor = '#301934';
    timer.style.color = '#ffffff';
    container.style.backgroundColor = '#301934';
    darkMode.style.display = 'none';
    lightMode.style.display = 'inline';
})
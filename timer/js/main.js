
let square = document.querySelector(".square");
let messageTimer = document.getElementById("message-timer-one");

var message = setTimeout(() => {
    messageTimer.innerHTML = "Il vient de se passer deux secondes";
}, 2000);

console.log(message);

var timer = setTimeout(() => {
    square.classList.add("round");
}, 3000);

console.log(timer);

let stopBtn = document.getElementById("stop");

stopBtn.addEventListener("click", ()=> {
    clearTimeout(timer);
})

let interval = setInterval(() => {
    console.log("ok");
},2000);

clearInterval(interval);

/////////////////////// TIMER
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let time = 0;

setInterval(() =>{
    time++;
 
    let seconds = time % 60;
    let minutes = (time - seconds) / 60; // parseInt(time / 60);

    minutesEl.textContent = minutes > 9 ? minutes : "0" + minutes;
    secondsEl.textContent = seconds > 9 ? seconds : "0" + seconds;
}, 1000)

// let seconds = 0;
// let minutes = 0;

// setInterval(() =>{
//     seconds++;
//     if(seconds >= 60){
//         seconds = 0;
//         minutes++;
//     }

//     minutesEl.textContent = minutes > 9 ? minutes : "0" + minutes;
//     secondsEl.textContent = seconds > 9 ? seconds : "0" + seconds;
// }, 1000)


// ///////////////CORRECTION
// let timer = new document.getElementById("timer");
// let seconds = 0;
// let minutes = 0;

// let timeHandler = () => {

//     seconds++;

//     if(seconds >= 60){
//         seconds = 0;
//         minutes++;
//     }

//     if(seconds > 9){
//         timer.innerHTML = minutes + ":" + seconds;
//     }else{
//         timer.innerHTML = minutes + ":0" + seconds;
//     }


// }

// setInterval(timerHandler, 1000);


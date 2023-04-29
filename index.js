let countDate = new Date("April 1, 2023 22:45:30").getTime();
let dd = document.querySelector('.days');
let hh = document.querySelector('.hours ');
let mm = document.querySelector('.minutes');
let ss = document.querySelector('.seconds');
const title = document.querySelector('.heading');

const time = () => {
    const now = new Date().getTime();

    const distance = countDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    dd.innerHTML = days;
    hh.innerHTML = hours;
    mm.innerHTML = minutes;
    ss.innerHTML = seconds;

    if(distance < 0){
        clearInterval(time);
        title.innerHTML = "WAIT IS OVER"
        dd.innerHTML = "00";
    hh.innerHTML = "00";
    mm.innerHTML = "00";
    ss.innerHTML = "00";
    }

    
}

setInterval(time, 1000);

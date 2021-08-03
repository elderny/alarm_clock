// You have to crate an alarm clock in javascript (Use your creativity)
// Allow user to set alarm for a certain time
// MADE BY ELDERNY :-) ON 3 august 2021


const clkBtn = document.getElementById('clkBtn');
clkBtn.addEventListener('click', clickAlarmFather);

var audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');
const format = /([0-9]){2}?([0-9]){0}?([0-9]){0} ([0-9]){0}?([0-9]){0}?([0-9]){0}/;


const pTxt = document.getElementById('pTxt');
const headNote = document.getElementById('headNote');

function ringBell() {
    audio.play();
}
function clickAlarmFather(e) {
    e.preventDefault();
    const alarmin = document.getElementById('alarm');
    // console.log(alarmin.value);
    if (format.test(alarmin.value)) {
        let alarmDate = new Date(alarmin.value);
        let now = new Date();
        let timeToRing = alarmDate - now;
        if (alarmin.value != "") {
            function clickedAlarm() {
                alarmDate = new Date(alarmin.value);
                now = new Date();
                timeToRing = alarmDate - now;
                if (timeToRing >= 0) {
                    setTimeout(() => {
                        console.log("Ringing");
                        ringBell();
                    }, timeToRing);
                }
            }
        }
        let bio = setInterval(() => {
            pTxt.innerText = `${Math.trunc(timeToRing / 1000)} secs`;
            clickedAlarm();
            if (timeToRing < 0 || timeToRing > 43200000) {
                alarmin.value = "";
                pTxt.innerText = `Over`;
                window.clearInterval(bio);
            }
        }, 1000);

        // clickedAlarm();
    } else {
        headNote.innerText = "Note: ";
        pTxt.innerText = "PLEASE CHECK YOUR ALARM INPUT FORMAT -by elderny";
    }
}

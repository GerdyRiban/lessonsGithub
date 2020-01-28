function ageVerification(birthDate) {
    let output = document.getElementById('output');
    let result = true;
    // do stuff????
    output.innerText = result;
}
const birthday = new Date('December 17, 1995 00:00:00');
ageVerification(birthday);

function setTime() {
    let output = document.getElementById('output');
    let time  = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let sec = time.getSeconds();
    if (hours > 12) {
        hours = '0' + (hours - 12);
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    } 
    if (sec < 10) {
        sec = '0' + sec;
    }    
    output.innerText = `${hours}:${minutes}:${sec}`;
    // let time  = new Date().toLocaleTimeString();
    // output.innerText = time;
    requestAnimationFrame(setTime);
}
setTime();
// setInterval(setTime, 1000);
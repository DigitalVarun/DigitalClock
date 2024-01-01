function getClockTime(){
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();

    (h<12)? (document.getElementsByClassName('ampm')[0].textContent="AM"): (document.getElementsByClassName('ampm')[0].textContent="PM");
    document.getElementById('hr').textContent = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
}

getClockTime();
setInterval(getClockTime, 1000);
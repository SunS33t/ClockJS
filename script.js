var tick = 0
var stop = false

//#region constants
const Speed = {
    X2: 500, 
    X4: 250, 
    X8: 125,
    X16: 60,
    X100: 10,
    NORMAL: 1000,
}

const second_step = 360 / 60
const minutes_step = 360 / (60*60)
const hours_step = 360 / (60*60*12)

const sec_arrow = document.getElementById('second_arrow')
const min_arrow = document.getElementById('minute_arrow')
const hour_arrow = document.getElementById('hour_arrow')
const stopBtn = document.getElementById('stop-btn')
const speedBtn = document.getElementById('speed-btn')
//#endregion

//#region button functions
speedBtn.onclick = function() {
    tick_time_ms = Speed[document.getElementById('speed-select').value]
    //const animationTime = tick_time_ms/1000 + 's ease-in-out';
    //sec_arrow.style.transition = min_arrow.style.transition = hour_arrow.style.transition = animationTime;
}

stopBtn.onclick = function(){
    stopBtn.innerText = !stop? 'Start' : 'Stop'
    stop = !stop
}
//#endregion 

//#region clock functions
function updateDigitalClock() {
    document.getElementById('digital-hours').innerHTML = 
    Math.floor(tick/(60*60)) % 24
    document.getElementById('digital-minutes').innerHTML = 
    Math.floor(tick/(60)) % 60
    document.getElementById('digital-seconds').innerHTML = 
    tick % 60
}

var tick_time_ms = 1000
var timer = function() {
    if(!stop){
        tick++
        sec_arrow.style.transform = 'rotate(' + tick * second_step +'deg)'
        min_arrow.style.transform = 'rotate(' + tick * minutes_step +'deg)'
        hour_arrow.style.transform = 'rotate(' + tick * hours_step +'deg)'       
        updateDigitalClock()
    }
    setTimeout(timer, tick_time_ms)
}
//#endregion

setTimeout(timer, tick_time_ms) 
updateDigitalClock() //for instant digital clock render
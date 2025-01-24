let startbutton = document.getElementById('start');
let stopbutton = document.getElementById('stop');
let resetbutton = document.getElementById('reset');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
startbutton.addEventListener ('click' function (){
    timer=true;
    stopwatch();
});
stopbutton.addEventListener ('click' function (){
    timer=false;
});
resetbutton.addEventListener ('click', function () {
    timer=false;
    hour=0;
    minute=0;
    second=0;
    count=0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

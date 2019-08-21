var dial = document.getElementsByClassName('dial');
var second = document.getElementsByClassName('sec');
var minute = document.getElementsByClassName('min');
var hhour = document.getElementsByClassName('hour');
function draw() {
    var str = '';
    for (var i=1;i<=12;i++){
        str += '<li class="num" style="transform:rotate('+i*30+'deg)"><span style="transform:rotate('+i*(-30)+'deg)">'+ i +'</span></li>'
    }
    dial[0].innerHTML = str;

}
draw();

function time() {
    var date = new Date();
    var sec = date.getSeconds();
    var msec = date.getMilliseconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    var fsec = sec + msec / 1000;
    var fhour = hour * 30 + min / 2;
    var fmin = min * 6 + sec / 10;
    console.log(fhour);
    second[0].style.transform = 'rotate('+ fsec * 6 +'deg)';
    minute[0].style.transform = 'rotate('+ fmin +'deg)';
    hhour[0].style.transform = 'rotate('+ fhour +'deg)';

    setTimeout(time,1000/60);
}
    time();


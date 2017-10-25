/**
 * Created by lpp on 2017/10/25.
 */
var timer = -1;
function clickButtom(event) {
    event.className == 'green_button' ? startTime() : endTime();
}
function startTime() {
    timer = setInterval(updataTime, 1000);
    document.getElementById('clickId').innerText = '取消';
    document.getElementById('clickId').setAttribute('class', 'red_button');
}
function endTime() {
    window.clearInterval(timer);
    document.getElementById('clickId').innerText = '启动';
    document.getElementById('clickId').setAttribute('class', 'green_button');
}
function updataTime() {
    if (document.getElementById('secondId').value > 0) {
        document.getElementById('secondId').value =
            document.getElementById('secondId').value - 1;
    } else if (document.getElementById('minuteId').value > 0
        && document.getElementById('secondId').value == 0) {
        document.getElementById('minuteId').value =
            document.getElementById('minuteId').value - 1;
        document.getElementById('secondId').value = 59;
    } else if (document.getElementById('minuteId').value == 0
        && document.getElementById('secondId').value == 0) {
        window.clearInterval(timer);
    }
}
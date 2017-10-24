/**
 * Created by lpp on 2017/10/11.
 */
/**
 * touch
 * touchstart--当手指触摸屏幕时触发，即使已有一个手指放在了屏幕上也会触发；
 * touchmove--当手指在屏幕上滑动时连续的触发。在这个事件发生期间，调用preventDefault()可阻止滚动；
 * touchend--当手指从屏幕上移开时触发
 * touchcancel--当系统停止跟踪触摸时触发。
 * */

var offx = 0, offy = 0; // 托拽
var target = document.getElementsByClassName('input_text');
touch.on(target, 'touchstart', function (ev) {
    ev.startRotate(); // 启动单指旋转方法
    //ev.preventDefault(); // 阻止默认事件
});


 touch.on(target, 'drag', function(ev) {
 var currOffx = offx + ev.x;
 var currOffy = offy + ev.y;

 var maxW = $(window).width() - $(".input_text").width();    //除去匹配元素宽度后的可视区域的宽度
 var maxH = $("#bgPicture").height() - $(".input_text").height();   //除去匹配元素高度后的可视区域的高度
 currOffx = currOffx < 0 ? 0 : currOffx;      //保证匹配元素不会被拖至可视区域以外
 currOffx = currOffx > maxW ? maxW : currOffx;
 currOffy = currOffy < 0 ? 0 : currOffy;
 currOffy = currOffy > maxH ? maxH : currOffy;
     target.style.webkitTransform = formatTransform(currOffx, currOffy);
 });

 touch.on(target, 'dragend', function(ev) {
 offx += ev.x;
 offy += ev.y;
 });

function formatTransform(offx, offy) {
    var translate = 'translate3d(' + (offx + 'px,') + (offy + 'px,') + '0)';
    return translate;
}


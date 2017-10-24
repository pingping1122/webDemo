
/**
 * Created by lpp on 2017/10/12.
 */
(function(){
    var doc = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    function changeFontSize(){
        var clietWidth = doc.offsetWidth,
            scale = clietWidth/768;   //以768为标准

        doc.style.fontSize = scale * 16 + 'px';
    }

    if (!doc.addEventListener) return;

    window.addEventListener(resizeEvt,changeFontSize);  //窗口大小变化或者手机横屏
    document.addEventListener('DOMContentLoaded',changeFontSize); //加载页面触发
})();
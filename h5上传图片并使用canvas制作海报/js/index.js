/**
 * Created by lpp on 2017/10/12.
 */
/**
 *返回上一步
 * */
backToLastPage = function () {
    window.location.href = "index.html?random="+ Date.parse(new Date());
};
/**
 * 保存图片
 * */
saveImg = function () {
    var inputMsg = $('.input_text').val(),
        infoMsg = $('.info_msg').html(),
        imgBox = document.getElementById("bgPicture"),
        canvas1 = document.getElementById("myCanvas"),
        ctx = canvas1.getContext('2d');
    var imgUrl = new Image,
        point = new Image;
    imgUrl.src = imgBox.src;
    point.src = 'image/point.png';
    imgUrl.onload = function () {
        var w = 750, h;
        canvas1.width = w;
        var scale = this.width / this.height;
        w = w > this.width ? this.width : w;
        h = w / scale;
        canvas1.height = h;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, 750, 1334);
        ctx.beginPath();
        ctx.drawImage(this, 0, 0, 750, h);
        ctx.font = "normal 3rem PingFangSC-Medium";
        if (inputMsg != '' && inputMsg != null) {
            var text = '我在:' + inputMsg;
            ctx.beginPath();
            ctx.fillText(text, 70, h / 3);
            ctx.beginPath();
            ctx.drawImage(point, 0, 0, 50, 50, 20, h / 3 - 40, 50, 50);
        }
        ctx.beginPath();
        ctx.fillText(infoMsg, 70, h / 3 + 50);
        $("#bgPicture1").attr("src", canvas1.toDataURL('image/jpeg'));
        $(".page2").hide().siblings(".page3").show();
    };
};
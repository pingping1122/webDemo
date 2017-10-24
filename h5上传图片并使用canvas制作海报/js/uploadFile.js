/**
 * Created by lpp on 2017/10/11.
 */

uploadFile = function (obj) {
    var file = obj.files[0]; // get uploaded file info
    var type = file.type.split('/')[0];
    if (type != 'image') {
        // check file type --picture or not
        alert('Please upload picture!');
        return;
    }
    var fileSize = Math.floor(file.size / 1024 / 1024);
    if (fileSize > 3) {
        alert('picture size must less than 3M！');
        return;
    }
    // FileReader--允许web应用程序异步读取存储在用户计算机上的文件,使用file或blob对象指定要读取的文件或数据；
    // FileReader--readAsDataUrl--result属性就是生成的data uri
    // FileReader--change picture to base64 format(data uri)
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // 以下代码解决ios将图片旋转90度问题；

    // exif--获取照片的拍摄方向属性---再根据orientation来旋转图片
    // 旋转角度orientation --(零度-1)(顺时针90度-6)(逆时针90度-8)(180度-3)
    var orientation = null;
    EXIF.getData(file, function () {
        EXIF.getAllTags(this);
        orientation = EXIF.getTag(this, 'Orientation');
    });
    fileReader.onloadstart = function () {
        $('.ajaxLoading').show();
    };
    fileReader.onloadend = function (e) {
        var dataUrl = fileReader.result;
        var img = new Image();
        img.src = dataUrl;
        img.onload = function () {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var w = 0, h = 0; // 普通情况下设置canvas宽高；
            if (this.width < 750) {
                w = this.width;
                h = this.height;
                canvas.width = w;
                canvas.height = h;
            } else {
                w = 750; // 防止上传至服务器的图片过大
                canvas.width = w;
                var scale = this.width / this.height;
                w = w > this.width ? this.width : w;
                h = w / scale;
                canvas.height = h;
            }
            // userAgent---判别客户端浏览器来自移动端还是pc端
            if (navigator.userAgent.match(/iphone/i)) {
                if (orientation != '') {
                    switch (orientation) {
                        case 1:
                        // 未旋转
                        case 3:
                            //旋转180度
                            ctx.rotate(180 * Math.PI / 180); // 1度=π/180弧度
                            // canvas.drawImage(file,x,y,width,height);
                            ctx.drawImage(this, -w, -h, w, h);
                            break;
                        case 6:
                            // 顺时针旋转90度---由于将图片纠正了回来，需要重新设置canvas的高已达到高度自适应
                            canvas.width = 750;
                            var scale = this.height / this.width;
                            canvas.height = canvas.width / scale;
                            h = 750 > this.height ? this.height : 750;
                            w = h / scale;
                            ctx.rotate(90 * Math.PI / 180);
                            ctx.drawImage(this, 0, -h, w, h);
                            break;
                        case 8:
                            // 逆时针旋转90度
                            ctx.rotate(270 * Math.PI / 180);
                            ctx.drawImage(this, -h, 0, h, w);
                            break;
                        case 2:
                            ctx.translate(w, 0);
                            ctx.scale(-1, 1);
                            ctx.drawImage(this, 0, 0, w, h);
                            break;
                        case 4:
                            ctx.translate(w, 0);
                            ctx.scale(-1, 1);
                            ctx.rotate(180 * Math.PI / 180);
                            ctx.drawImage(this, -w, -h, w, h);
                            break;
                        case 5:
                            ctx.translate(w, 0);
                            ctx.scale(-1, 1);
                            ctx.rotate(90 * Math.PI / 180);
                            ctx.drawImage(this, 0, -w, h, w);
                            break;
                        case 7:
                            ctx.translate(w, 0);
                            ctx.scale(-1, 1);
                            ctx.rotate(270 * Math.PI / 180);
                            ctx.drawImage(this, -h, 0, h, w);
                            break;
                        default:
                            ctx.drawImage(this, 0, 0, w, h);
                    }
                }
            } else {
                ctx.drawImage(this, 0, 0, w, h);
            }
            $("#bgPicture").attr("src", canvas.toDataURL('image/jpeg'));
            $(".ajaxLoading").hide();
            $(".page1").hide().siblings(".page2").show();

        };
    };


};
/**
 * Created by lpp on 2017/11/23.
 */
// 简单方式
//new QRCode(document.getElementById('qrcode'), 'your content');
var qrcode = new QRCode('qrcode');
qrcode.clear();
qrcode.makeCode('cdfidk'); // 更换二维码内容

/*
 // 设置参数方式
 var qrcode = new QRCode('qrcode', {
 text: 'your content',
 width: 256,
 height: 256,
 colorDark : '#000000',
 colorLight : '#ffffff',
 correctLevel : QRCode.CorrectLevel.H
 });


 qrcode.makeCode('new content');*/

/**
 * Created by lpp on 2017/10/16.
 */


$(function () {

    console.log(moment());
    $('#dataRangePicker').daterangepicker({
        timePicker: true, // 是否显示小时和分钟
        timePickerIncrement: 10, // 时间的增量，单位为分钟
        timePicker24Hour: true, // 是否使用24小时制来显示时间
        timePickerSeconds: true,
        /*minDate: '2017/01/01 00:00:00', // 最小时间*/
        maxDate: moment(), // 最大时间
        dataLimit: {
            days: 3 // 起止时间的最大间隔
        },
        opens: 'right',
        autoApply: true,
        locale: {
            format: 'YYYY/MM/DD HH:mm:ss',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        }
    });
    /**
     * 'YYYY/MM/DD HH:mm:ss'格式的日期转为时间戳----
     * */
    var dateArray = [], stampArray = [];
    dateArray = $('#dataRangePicker').val().split('-');
    console.log(dateArray);
    // 两种方式字符串转化为时间戳---得到的是时间戳单位ms--->转为s
    // getTime---以number形式表示的时间戳
    stampArray[0] = (new Date(dateArray[0].substring(0, 19)).getTime()) / 1000;
    stampArray[1] = (Date.parse(new Date(dateArray[1].substring(1, 20)))) / 1000;
    console.log(stampArray);


    /**
     * 时间戳转为'YYYY/MM/DD HH:mm:ss'格式的日期
     * */
    var timestamp = '1506792620';
    var ts = new Date(timestamp * 1000);
    var data = ts.getFullYear() + '/' + (ts.getMonth() + 1 ) + '/'
        + ts.getDate() + ' ' + ts.getHours() +
        ':' + ts.getMinutes();
    ts.getSeconds() < 10 ?
        data = data + ':' + '0' + ts.getSeconds()
        : data = data + ':' + ts.getSeconds();

    console.log(data);
});
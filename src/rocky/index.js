var rocky = require('rocky');

var init = false,
    stageWidth,
    stageHeight,
    centerx,
    centery,
    ctx;
// 上下文缓存

var color = "cobaltblue";

var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Polar2Point(length, deg) {
    // 极坐标转换
    deg = Math.PI / 180 * deg;
    return {
        x: length * Math.cos(deg),
        y: length * Math.sin(deg)
    }
}

function Angle2Radian(angle) {
    return Math.PI / 180 * angle;
}

rocky.on('draw', function(event) {
    if (!init) {
        ctx = event.context;
        // 缓存Canvas上下文
        stageWidth = ctx.canvas.clientWidth;
        stageHeight = ctx.canvas.clientHeight;
        centerx = stageWidth / 2;
        centery = stageHeight / 2;
        // 缓存舞台信息
        init = true;
        // 初始化完成
    }

    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();

    ctx.clearRect(0, 0, stageWidth, stageHeight);
    // 重绘舞台

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, stageWidth, stageHeight);

    var length = 70;
    var angle = minute * 6 - 90;
    var p = Polar2Point(length, angle);
    ctx.fillStyle = "black";
    ctx.rockyFillRadial(centerx + p.x, centery + p.y, 0, 70, 0, 2 * Math.PI);
    // 绘制分钟圆

    p = Polar2Point(length - 10, angle);
    ctx.font = "20px bold Leco-numbers";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(fixtime(minute), centerx + p.x, centery + p.y - 10 - (stageHeight - stageWidth) / 2);
    // 绘制分钟文字

    var length = 15;
    var angle = hour * 30 - 90;
    var p = Polar2Point(length, angle);
    ctx.fillStyle = color;
    ctx.rockyFillRadial(p.x + stageWidth / 2, p.y + stageWidth / 2, 0, 30, 0, 2 * Math.PI);

    p = Polar2Point(length, angle);
    ctx.font = "26px bold Leco-numbers-am-pm";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    console.log(rocky.watchInfo.platform)
    ctx.fillText(fixtime(hour), centerx + p.x, centery + p.y - 16 - (stageHeight - stageWidth) / 2);
    // 绘制小时文字

    ctx.font = "18px Gothic";
    ctx.fillStyle = "black";
    var strwidth = ctx.measureText(week[d.getDay()]).width;

    if (minute >= 45 || minute < 15) {
        ctx.fillText(week[d.getDay()], centerx, centery + stageHeight / 2 - 45);
    } else {
        ctx.fillText(week[d.getDay()], centerx, centery - stageHeight / 2 + 20);
    }

});

rocky.on("minutechange", function() {
    rocky.requestDraw();
});

rocky.on('message', function(event) {
    var settings = event.data;
    color = cssColor(settings.color);
    switch (settings.language) {
        case "english":
            week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            break;
        case "chinese":
            week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            break;
        case "japanese":
            week = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
            break;
    }
    rocky.requestDraw();
});

rocky.postMessage({ command: 'settings' });

function fixtime(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

function cssColor(color) {
    if (typeof color === 'number') {
        color = color.toString(16);
    } else if (!color) {
        return 'transparent';
    }

    color = padColorString(color);

    return '#' + color;
}

function padColorString(color) {
    color = color.toLowerCase();

    while (color.length < 6) {
        color = '0' + color;
    }

    return color;
}
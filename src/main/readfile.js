import { ipcMain } from "electron";
const fs = require("fs");

ipcMain.on("asynchronous-message", function(event, arg) {
    // arg是从渲染进程返回来的数据
    console.log(arg,"arg");
    // 这里是传给渲染进程的数据
    let file = process.cwd() + "/public/config/config.json"; // 文件路径
    fs.readFile(file,"utf-8", (err, data) => {
        if(err) {
            event.sender.send("asynchronous-reply", "读取失败");
        } else {
            event.sender.send("asynchronous-reply", data);
        }
    });
});

ipcMain.on('writeFile', function(event, arg) {
    let jsonObj = JSON.stringify(arg);
    let file = process.cwd() + "/publdsic/config/config.json";
    fs.writeFile(file, jsonObj, function (err) {
        if(err){
            event.sender.send("whiteFile-reply", "写入失败");
        }else{
            // 写入成功后读取测试
            fs.readFile(file, 'utf-8', function(err, data) {
                if (err) {
                    throw err;
                }
                console.log(data);
            });
            event.sender.send('whiteFile-reply', "写入成功");
        }
	})
})


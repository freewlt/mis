<template>
    <div class="handleFile">
        <div @click="readFile">读</div>
        <div @click="whiteFile">读写</div>
    </div>
</template>

<script>
var fs = require('fs');
// const path = require('path');

// const ipc = require("electron").ipcRenderer;

export default {
    name: 'handleFile',
    setup(){
        const readFile = async () => {
            // ipc.on("asynchronous-reply", function(event, arg) {
            //     // 这里的arg是从主线程请求的数据
            //     console.log("render+" + arg);
            // });
            // ipc.send("asynchronous-message", "传递回去ping");
            // let myPath = path.join(__filename, '/config/config.json');
            // console.log(myPath," may");
            // let file = process.cwd() + "/public/config/config.json";
            let file = process.cwd() + "/public/config/config.json";
            fs.readFile(file, "utf-8", (err, data) => {
                if (err) {
                    throw err;
                }
                console.log(data,"data");
            });
        };
        const whiteFile = async () => {

            // ipc.on("writeFile-reply", function(event, arg) {
            //     console.log(event,arg);
            //     console.log("writeFile+" + arg);
            // });
            // let data = {
            //     "aa":"10sdf 1",
            //     "mc":"202sdg ",
            //     "c0c":"303sdf ",
            // };

            // ipc.send("writeFile", data);
            let data = {
                "aa":"10sdf 1",
                "mc":"202sdg ",
                "c0c":"303sdf ",
            };
            let jsonObj = JSON.stringify(data);
            let file = process.cwd() + "/public/config/config.json";
            console.log(file);
            fs.writeFile(file, jsonObj, { 'flag': 'a' }, (err) => {
                if (err) {
                    throw err;
                }
                console.log(jsonObj, "jsonObj");

                // 写入成功后读取测试
                fs.readFile(file, "utf-8", (err, data) => {
                    if (err) {
                        throw err;
                    }
                    console.log(data,"data");
                });
            });
        };

        return {

            readFile,
            whiteFile
        };
    },
};

</script>

<style lang="scss" scoped>

</style>

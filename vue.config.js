module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                appId: "com.example.app",
                productName: "wltDemo", // 项目名，也是生成的安装文件名，即wyDemo.exe
                copyright: "wlt Copyright © 2022", // 版权信息
                "files": [
                    "./**/*"
                ], 
                // nodeIntegration: true,
                extraFiles: [ // 把指定的资源复制到程序根目录，即把server文件夹的内容复制到程序根目录，这里server文件夹下的内容相当于我的后台，我在background.js中有相应的处理。
                    "./public"
                ],
                directories: {
                    "output": "./dists" // 输出文件路径
                },
                win: { // win相关配置
                    "icon": "public/favicon.ico", // 图标，当前图标在根目录下，注意这里有两个坑
                    "requestedExecutionLevel": "requireAdministrator", //获取管理员权限
                    "target": [{
                        "target": "nsis", // 利用nsis制作安装程序
                        "arch": [
                            "x64", // 64位
                            "ia32"
                        ]
                    }]
                },
                mac: {
                    "icon": "public/favicon.png"
                },
                nsis: {
                    "oneClick": false, // 是否一键安装
                    "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
                    "allowToChangeInstallationDirectory": true, // 允许修改安装目录
                    "installerIcon": "./public/installerIcon.ico", // 安装图标
                    "uninstallerIcon": "./public/installerIcon.ico", // 卸载图标
                    "installerHeaderIcon": "./public/installerIcon.ico", // 安装时头部图标
                    "createDesktopShortcut": true, // 创建桌面图标
                    "createStartMenuShortcut": true, // 创建开始菜单图标
                    "shortcutName": "wltDemo" // 图标名称(项目名称)
                }
            },
            nodeIntegration: true,
        }
    },
    pages: {
        index: {
            entry: "src/renderer/main.js",
            template: "public/index.html",
        },
    },
    productionSourceMap: true,
};

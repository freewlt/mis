const log4js = require('log4js');

log4js.configure({
    appenders: {
        production: {
            type: 'dateFile',		// 日志输出类型,dateFile表示输出到文件
            filename: 'demo.log',   // 输出到文件的文件路径，注意，是路径而不是文件名！
            alwaysIncludePattern: true,    // 日志文件是否展示预设的模式
            keepFileExt: true,   // 日志文件是否始终保持后缀
            daysToKeep: 30,    // 日志保存时间，默认值为0，表示一直保存
        }
    },
    categories: {
        default: { appenders: [ 'production' ], level: 'info' }
    }
});

// var logger = log4js.getLogger();
// logger.info('this is a info3');
import * as echarts from 'echarts';

export function echart(obj, index, ele) {
    var option = {
        title: obj.title,
        color: obj.color,
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [
            obj.xAxis[index]
        ],
        yAxis: {
            type: 'value',
        },

        legend: [
            obj.lenged[index]
        ],
        series: obj.series[index].data
    };
    var myChart = echarts.init(ele);
    myChart.setOption(option);
}
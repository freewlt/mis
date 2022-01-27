<template>
    <div class="echartBox">
        <div class="lf">
            <div id="payMethod" style="width:100%;height:100%;"></div>
            <div id="memberRate" style="width:100%;height:100%;"></div>
        </div>
        <div class="rt">
            <div class="echartItem">
                <div class="echart" id="oilTank1" style="width:100%;height:100%;"></div>
                <ul class="detail">
                    <li>
                        <span class="title">油品体积</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">油品高度</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">100%ullage</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title"> 温度 </span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">水位高度</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                </ul>
            </div>
            <div class="echartItem">
                <div class="echart" id="oilTank2" style="width:100%;height:100%;"></div>
                <ul class="detail">
                    <li>
                        <span class="title">油品体积</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">油品高度</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">100%ullage</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title"> 温度 </span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">水位高度</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                </ul>
            </div>
            <div class="echartItem">
                <div class="echart" id="oilTank3" style="width:100%;height:100%;"></div>
                <ul class="detail">
                    <li>
                        <span class="title">油品体积</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">油品高度</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">100%ullage</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title"> 温度 </span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">水位高度</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                </ul>
            </div>
            <div class="echartItem">
                <div class="echart" id="oilTank4" style="width:100%;height:100%;"></div>
                <ul class="detail">
                    <li>
                        <span class="title">油品体积</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">油品高度</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">100%ullage</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title"> 温度 </span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                    <li>
                        <span class="title">水位高度</span>
                        <span class="num">{{ detail.oilVolume }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import * as echarts from 'echarts';
import 'echarts-liquidfill';

export default {
    name: 'echartBox',
    setup() {

        const state = reactive({
            payMethodList: [],
            memberRateList: [],
            detail: {
                oilVolume: '1000'
            }
        });

        // 支付方式图表
        const payMethod = (data) => {
            const myChart = echarts.init(document.getElementById('payMethod'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '支付方式',
                    x: '55%',
                    y: '20%',
                    textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                        fontSize: 20,
                        fontWeight: '500',
                        'color': '#333'
                    },
                },
                legend: {
                    top: '35%',
                    left: '55%',
                    orient: 'vertical'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['20%', '38%'],
                        center: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: data
                    }
                ]
            });
            
            window.addEventListener('resize', () => { 
                myChart.resize();  
            });
        };

        const memberRate = (data) => {
            const myChart = echarts.init(document.getElementById('memberRate'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '会员占比',
                    x: '55%',
                    y: '20%',
                    textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#333'
                    },
                },
                legend: {
                    top: '35%',
                    left: '55%',
                    orient: 'vertical'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['20%', '38%'],
                        center: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: data
                    }
                ]
            });
            window.addEventListener('resize', () => { 
                myChart.resize();  
            });
        };

        const echartList = () => {
            const myChart3 = echarts.init(document.getElementById('oilTank1'));
            const myChart4 = echarts.init(document.getElementById('oilTank2'));
            const myChart5 = echarts.init(document.getElementById('oilTank3'));
            const myChart6 = echarts.init(document.getElementById('oilTank4'));
            // 绘制图表
            myChart3.setOption({
                // color:["#E20B21","#607694","#C98D24"],
                series: [{
                    type: 'liquidFill',
                    data: [0.2, 0.3, 0.1, 0.3],
                    center: ['50%', '50%'],
                    color: ['#9FD844'],
                    outline: {
                        show: false
                    },
                    backgroundStyle: {
                        color: '#e0f1c5'
                    },
                    label: {
                        position: ['50%', '50%'],
                        formatter: function() {
                            return '罐1/92#';
                        },
                        fontSize: 14,
                        color: '#4A7407'
                    }
                }]
            });
            myChart4.setOption({
                series: [{
                    type: 'liquidFill',
                    data: [0.2, 0.3, 0.1, 0.3],
                    center: ['50%', '50%'],
                    // color: ['#21CBFF'],
                    outline: {
                        show: false
                    },
                    // backgroundStyle: {
                    //     color: '#bcc9ba'
                    // },
                    label: {
                        position: ['50%', '50%'],
                        formatter: function() {
                            return '罐2/95#';
                        },
                        fontSize: 14,
                        color: '#0D6D8A'
                    }
                }]
            });
            myChart5.setOption({
                // color:["#E20B21","#607694","#C98D24"],
                series: [{
                    type: 'liquidFill',
                    data: [0.2, 0.3, 0.1, 0.3],
                    center: ['50%', '50%'],
                    color: ['#FFE316'],
                    outline: {
                        show: false
                    },
                    backgroundStyle: {
                        color: '#fff7b9'
                    },
                    label: {
                        position: ['50%', '50%'],
                        formatter: function() {
                            return '罐1/92#';
                        },
                        fontSize: 14,
                        color: '#A4920E'
                    }
                }]
            });
            myChart6.setOption({
                series: [{
                    type: 'liquidFill',
                    data: [0.2, 0.3, 0.1, 0.3],
                    center: ['50%', '50%'],
                    color: ['#FF5A59'],
                    outline: {
                        show: false
                    },
                    backgroundStyle: {
                        color: '#ffc89c'
                    },
                    label: {
                        position: ['50%', '50%'],
                        formatter: function() {
                            return '罐1/92#';
                        },
                        fontSize: 14,
                        color: '#D12D2C'
                    }
                }]
            });
            window.addEventListener('resize', () => { 
                myChart3.resize();  
                myChart4.resize();  
                myChart5.resize();  
                myChart6.resize();  
            });
            
        };

        const getData = () => {
            state.payMethodList = [
                { value: 1, name: '1' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ];
            state.memberRateList = [
                { value: 2, name: '3' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ];

            payMethod(state.payMethodList);
            memberRate(state.memberRateList);
            echartList();
        };

        onMounted(() => {
            getData();
        });

        // onUnmounted(() => {
        //     myChart.dispose();
        // });

        return {
            ...toRefs(state),
        };
    }
};
</script>

<style lang="scss" scoped>
.echartBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 12px 12px;
    box-sizing: border-box;
    .lf {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        height: 100%;
        background: #FFFFFF;
        border-radius: 8px;
        #payMethod, #memberRate{
            width: 49%;
        }
    }
    .rt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
        flex-wrap: wrap;
        width: 50%;
        height: 100%;
        padding-left: 12px;
        box-sizing: border-box;
        .echartItem{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 49%!important;
            height: 48%!important;
            background: #fff;
            border-radius: 8px;
            .echart{
                width: 40%!important;
                height: 100%!important;
            }
            .detail {
                width: 60%;
                text-align: left;
                li{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .title, .num {
                        display: inline-block;
                        padding: 3px 0;
                        font-size: 14px;
                        font-weight: 400;
                        color: #666;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="operating">
        <!--搜索-->
        <el-form :inline="true" :model="query" class="query">
            <el-form-item>
                <el-input v-model="query.shiftNo" placeholder="请输入班次号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <!--统计-->
        <ul class="statistics">
            <li class="item">
                <p class="num">{{ statistics.oil }}</p>
                <p class="title">加油量统计</p>
            </li>
            <li class="item">
                <p class="num">{{ statistics.oil }}</p>
                <p class="title">交易笔次</p>
            </li>
            <li class="item">
                <p class="num">{{ statistics.oil }}</p>
                <p class="title">非油总金额</p>
            </li>
            <li class="item">
                <p class="num">{{ statistics.oil }}</p>
                <p class="title">0#</p>
            </li>
            <li class="item">
                <p class="num">{{ statistics.oil }}</p>
                <p class="title">98#</p>
            </li>
            <li class="item">
                <p class="num">{{ statistics.oil }}</p>
                <p class="title">-10#</p>
            </li>
            <li class="item">
                <p class="num">{{ statistics.oil }}</p>
                <p class="title">92#</p>
            </li>
            <li class="item">
                <p class="num">{{ statistics.oil }}</p>
                <p class="title">95#</p>
            </li>
        </ul>
        <!--图表-->
        <div class="echartCon">
            <echart-box></echart-box>
        </div>
        <!--数据-->
        <div class="tableDataBox">
            <el-table :data="tableData" class="tableData">
                <el-table-column v-for="(item, index) in tableHeader" :key="index" 
                    :prop="item.prop" :label="item.label" :align="item.align" />
            </el-table>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import echartBox from './echart';

export default {
    name: 'operating',
    components: { echartBox },
    setup() {

        const state = reactive({
            statistics: {
                oil: '2吨／65笔'
            },
            tableHeader: [
                { prop: 'time', label: '时间', align: 'center' },
                { prop: 'gum', label: '油枪', align: 'center'},
                { prop: 'oil', label: '油品', align: 'center' },
                { prop: 'liter', label: '升数', align: 'center' },
            ],
            tableData: [],
        });

        const query = reactive({
            shiftNo: '',
        });

        const onSubmit = () => {
            console.log('submit!');
        };

        const getData = () => {
            state.tableData = [
                { 'time': 'efef', gum: 'dede', oil: 'dg', liter: '10', price: '10' },
                { 'time': 'efef', gum: 'dede', oil: 'dg', liter: '10', price: '10' },
                { 'time': 'efef', gum: 'dede', oil: 'dg', liter: '10', price: '10' }
            ];
        };

        onMounted(()=>{
            
        });

        return {
            ...toRefs(state),
            query,
            getData,
            onSubmit
        };
    },
};
</script>

<style lang="scss" scope>
.operating {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    .query {
        padding: 0 15px;
        background: #fff;
        .el-form-item {
            margin: 12px 5px;
        }
    }
    .statistics {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        box-sizing: border-box;
        .item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 11%;
            padding: 1.7% 0;
            background: #fff;
            border-radius: 8px;
            .num {
                font-size: 20px;
                font-weight: 500;
                color: #1666E6;
            }
            .title {
                padding-top: 5%;
                font-size: 16px;
                font-weight: 400;
                color: #666;
            }
        }
    }
    .echartCon {
        height: 35.6%;
    }
    .tableDataBox{
        width: 100%;
        height: 40%;
        padding: 0 12px;
        .tableData{
            height: 100%;
            border-radius: 8px;
            background: #fff;
        }
    }
}
</style>

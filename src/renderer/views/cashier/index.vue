<template>
    <div class="cashier">
        <div class="lf">
            <div class="record">
                <el-table :data="tableData" class="tableData">
                    <el-table-column v-for="(item, index) in tableHeader" :key="index" 
                        :prop="item.prop" :label="item.label" :align="item.align" :width="item.width" />
                    <el-table-column label="金额" align="center">
                        <template #default="scope">
                            <span class="price">{{ scope.row.price }}</span>
                            <icon-box name="edit" :size="20"></icon-box>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <ul class="gum">
                <li class="gumItem" v-for="item in gumList" :key="item.id">
                    <div class="oilDetail">
                        <span class="symbol">
                            <i></i>
                            <i></i>
                        </span>
                        <span class="oilName">{{ item.oil }}</span>
                    </div>
                    <div class="gumNo">{{ item.gumNo }}</div>
                    <div class="price">{{ item.price }}</div>
                </li>
            </ul>
        </div>
        <div class="center">
            <el-button class="btn" v-for="item in btnList" :key="item.id" 
            :class="[item.type == 'eleMember' ? 'eleMember' : '',  item.type === 'oilCardMember' ? 'oilCardMember' : '']">
                {{ item.label }}
            </el-button>
        </div>
        <div class="rt">
            <div class="record detail">
                <el-table :data="tableDataDetail" class="tableData">
                    <el-table-column v-for="(item, index) in tableHeaderDetail" :key="index" 
                        :prop="item.prop" :label="item.label" :align="item.align" :width="item.width" />
                    <el-table-column label="操作" align="center">
                        <template #default="scope">
                            <icon-box name="delete" :size="20" @click="deleteBtn(scope.row)"></icon-box>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="mnemoniCode">
                <el-input class="codeInput" v-model="code" placeholder="请扫描助记码" clearable />
                <el-button class="codeBtn">助记码</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
import IconBox from "@/renderer/components/iconBox";

export default {
    name: 'cashier',
    components: { IconBox },
    setup(){
        const state = reactive({
            tableHeader: [
                { prop: "time", label: "时间", align: "center" },
                { prop: "gum", label: "油枪", align: "center"},
                { prop: "oil", label: "油品", align: "center" },
                { prop: "liter", label: "升数", align: "center" },
            ],
            tableData: [],
            gumList: [],
            btnList: [
                {label: "订单1", value: "1", type: "orderFirst" },
                {label: "订单2", value: "2", type: "orderSec" },
                {label: "电子会员", value: "3", type: "eleMember" },
                {label: "油卡会员", value: "4", type: "oilCardMember" },
                {label: "手输油品", value: "3", type: "handleOil" },
                {label: "修改支付", value: "3", type: "modifyPay" },
                {label: "取消订单", value: "3", type: "cancel" },
                {label: "非油退货", value: "3", type: "return" },
                {label: "交易查询", value: "3", type: "orderQuery" },
                {label: "积分兑换", value: "3", type: "integralExchange" },
                {label: "更多", value: "3", type: "more" },
            ],
            tableHeaderDetail: [
                { prop: "name", label: "商品名称", align: "center" },
                { prop: "price", label: "单价", align: "center", width:"80px"},
                { prop: "num", label: "数量", align: "center" },
                { prop: "total", label: "小计", align: "center" },
            ],
            tableDataDetail: [],
            code: ""
        });

        const getData = async () => {
            state.tableData = [
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" },
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" },
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" },
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" },
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" }
            ];
            state.gumList = [
                { oil: "92#", gumNo: "1", price: "200.00" },
                { oil: "92#", gumNo: "2", price: "200.00" },
                { oil: "92#", gumNo: "3", price: "200.00" },
                { oil: "92#", gumNo: "4", price: "200.00" },
                { oil: "92#", gumNo: "5", price: "200.00" },
                { oil: "92#", gumNo: "6", price: "200.00" },
                { oil: "92#", gumNo: "7", price: "200.00" },
                { oil: "92#", gumNo: "8", price: "200.00" },
                { oil: "92#", gumNo: "9", price: "200.00" },
                { oil: "92#", gumNo: "1", price: "200.00" },
                { oil: "92#", gumNo: "2", price: "200.00" },
                { oil: "92#", gumNo: "3", price: "200.00" },
                { oil: "92#", gumNo: "4", price: "200.00" },
                { oil: "92#", gumNo: "5", price: "200.00" },
                { oil: "92#", gumNo: "6", price: "200.00" },
                { oil: "92#", gumNo: "7", price: "200.00" },
                { oil: "92#", gumNo: "8", price: "200.00" },
                { oil: "92#", gumNo: "9", price: "200.00" },
                { oil: "92#", gumNo: "1", price: "200.00" },
                { oil: "92#", gumNo: "2", price: "200.00" },
                { oil: "92#", gumNo: "3", price: "200.00" },
                { oil: "92#", gumNo: "4", price: "200.00" },
                { oil: "92#", gumNo: "5", price: "200.00" },
                { oil: "92#", gumNo: "6", price: "200.00" },
                { oil: "92#", gumNo: "7", price: "200.00" },
                { oil: "92#", gumNo: "8", price: "200.00" },
                { oil: "92#", gumNo: "9", price: "200.00" },
                { oil: "92#", gumNo: "7", price: "200.00" },
                { oil: "92#", gumNo: "8", price: "200.00" },
                { oil: "92#", gumNo: "9", price: "200.00" },
                { oil: "92#", gumNo: "7", price: "200.00" },
                { oil: "92#", gumNo: "8", price: "200.00" },
                { oil: "92#", gumNo: "33", price: "200.00" },
                { oil: "92#", gumNo: "7", price: "200.00" },
                { oil: "92#", gumNo: "8", price: "200.00" },
                { oil: "92#", gumNo: "36", price: "200.00" },
            ];
            state.tableDataDetail = [
                { "name": "efef", total: "dg", num: "10", price: "10" },
                { "name": "efef", total: "dg", num: "10", price: "10" },
                { "name": "efef", total: "dg", num: "10", price: "10" },
                { "name": "efef", total: "dg", num: "10", price: "10" },
                { "name": "efef", total: "dg", num: "10", price: "10" }
            ];
        };

        const deleteBtn = async (item) => {
            console.log(item);
        };

        onMounted(() => {
            getData();
        });

        return {
            ...toRefs(state),
            deleteBtn
        };
    }
};
</script>

<style lang="scss">
.cashier {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0 20px 20px;
    box-sizing: border-box;
    overflow: hidden;
    .lf{
        width: 44.4%;
        .gum {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            padding-top: 12px;
            .gumItem {
                width: 85px;
                height: 59px;
                padding: 2px 12px 2px 8px; 
                margin-bottom: 6px;
                margin-right: 9.3px;
                background: linear-gradient(180deg, #FFFFFF 0%, #E9E9E9 100%);
                border-radius: 8px; 
                box-sizing: border-box;
                .oilDetail {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 13px;
                    .symbol {
                        display: block;
                        width: 14px;
                        height: 8px;
                        background: #7ED321;
                        border-radius: 17px;
                    }
                    .comeIn{
                        background: #FFAA1A;
                    }
                    .comePause{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        background: none;
                        font-weight: 400;
                        color: #3F4C59;
                        i {
                            display: block;
                            width: 4px;
                            height: 9px;
                            background: #FFB02B;
                            margin-right: 2px;
                        }
                    }
                    .oilMachineFront{
                        width: 9px;
                        height: 9px;
                        background: #73B6FF;
                        border-radius: 1px;
                    }
                    .oilMachineBack{
                        width: 9px;
                        height: 9px;
                        background: #1A80F0;
                        border-radius: 1px;
                    }
                }
                .gumNo {
                    padding: 4px 0;
                    text-align: center;
                    font-size: 17px;
                    font-weight: 500;
                    color: #545454;
                }
                .price {
                    font-size: 13px;
                    color: #3F4C59;
                    text-align: center;
                }
                &:nth-child(6),
                &:nth-child(12),
                &:nth-child(18),
                &:nth-child(24),
                &:nth-child(30),
                &:nth-child(36),
                {
                    margin-right: 0;
                }
            }
        }
    }
    .record{
        width: 100%;
        height: 310px;
        border-radius: 8px;
        overflow-y: auto;
        .tableData {
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            table {
                width: 100%!important;
                .price {
                    display: inline-block;
                    vertical-align: middle;
                    color: #f56c6c;
                }
                .el-icon {
                    display: inline-block;
                    vertical-align: middle;
                    padding-left: 5px;
                    color: #f56c6c!important;
                }
            }
        }
        .el-table--small .el-table__cell{
            padding: 17px 0;
        }

    }
    thead{
        font-size: 16px;
        font-weight: 500;
        color: #545454;
    }
    tbody {
        font-size: 14px;
        font-weight: 500;
        color: #545454;
    }
    .center{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: 9%;
        padding: 0 15px;
        margin: 0 auto;
        text-align: center;
        .btn {
            margin: 0 auto;
            width: 100%;
            height: 54px;
            margin-bottom: 11px;
            font-size: 14px;
            font-weight: 500;
            color: #666;
            background: linear-gradient(180deg, #FFFFFF 0%, #E9E9E9 100%);
            border-radius: 8px;
            border: none;
        }
        .eleMember {
            color: #fff;
            background: linear-gradient(180deg, #FF7F8E 0%, #FF2539 100%);
        }
        .oilCardMember {
            color: #fff;
            background: linear-gradient(180deg, #FFBF44 0%, #FF9109 100%);
        }
    }
    .rt {
        width: 45.6%;
        height: 100%;
        .detail {
            height: 400px;
            .el-table--small .el-table__cell{
                padding: 23px 0;
            }
            tbody{
                .el-table_12_column_59{
                    color: #f56c6c;
                }
            }
            .el-icon {
                display: inline-block;
                vertical-align: middle;
                padding-left: 5px;
                color: #f56c6c!important;
            }
        }
        .mnemoniCode{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            .codeInput{
                width: 390px;
                height: 50px;
                background: #fff;
                border-radius: 8px;
                .el-input__inner {
                    height: 100%;
                    border: none;
                    font-size: 14px;
                    font-weight: 400;
                    color: #666;
                }
            }
            .codeBtn{
                width: 140px;
                height: 50px;
                margin-left: 10px;
                font-size: 14px;
                font-weight: 500;
                color: #545454;
                background: linear-gradient(180deg, #FFFFFF 0%, #E9E9E9 100%);
                border-radius: 8px;
            }
        }
    }
}

</style>

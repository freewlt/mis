<template>
    <div class="cashier">
        <div class="lf">
            <div class="record">
                <el-table :data="tableData" class="tableData">
                    <el-table-column v-for="(item, index) in tableHeader" :key="index" 
                        :prop="item.prop" :label="item.label" :align="item.align" />
                    <el-table-column label="金额" align="center">
                        <template #default="scope">
                            <span class="price">{{ scope.row.price }}</span>
                            <icon-box name="edit" :size="20"></icon-box>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <ul class="gum">
                <li class="gumItem" v-for="item in gumList" :key="item.id" @click="gumBtn(item)">
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
            :class="[item.type == 'eleMember' ? 'eleMember' : '',  item.type === 'oilCardMember' ? 'oilCardMember' : '']"
            @click="btnTool">
                {{ item.label }}
            </el-button>
        </div>
        <div class="rt">
            <div class="record detail">
                <div class="tip">{{ tip }}</div>
                <el-table :data="tableDataDetail" class="tableData">
                    <el-table-column v-for="(item, index) in tableHeaderDetail" :key="index" 
                        :prop="item.prop" :label="item.label" :align="item.align" :width="item.width" />
                     <el-table-column label="数量" align="center" class="subtotal">
                        <template #default="scope">
                            <el-button>+</el-button>
                            <el-input type="number" v-model="scope.row.price" oninput=" scope.row.price = inputNum(input)"/>
                            <el-button>-</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="小计" prop = "price" align="center"/>
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
            <div class="orderDetail">
                <ul class="order">
                    <li class="item">
                        <span class="title">应收金额</span>
                        <span class="value">￥102.00</span>
                    </li>
                    <li class="item">
                        <span class="title">订单优惠</span>
                        <span class="value">￥102.00</span>
                    </li>
                    <li class="item">
                        <span class="title">纸质优惠</span>
                        <span class="value">￥102.00</span>
                    </li>
                    <li class="item">
                        <span class="title">红包优惠</span>
                        <span class="value">{{ orderDetailList.price }}</span>
                    </li>
                    <li class="item">
                        <span class="title">积分扣除</span>
                        <span class="value">{{ orderDetailList.price }}</span>
                    </li>
                    <li class="item">
                        <span class="title">油品优惠</span>
                        <span class="value">{{ orderDetailList.price }}</span>
                    </li>
                    <li class="item">
                        <span class="title">非油优惠</span>
                        <span class="value">{{ orderDetailList.price }}</span>
                    </li>
                    <li class="item">
                        <span class="title pricePayTitle">实付金额</span>
                        <span class="value pricePay">￥102.00</span>
                    </li>
                </ul>
                <el-divider direction = "vertical"></el-divider>
                <div class="methods">
                    <el-button class="btn" v-for="item in methodsList" 
                    :key="item.id" :class="[ item.type == 1 ? 'wx' : '',  
                    item.type == 2 ? 'ali' : '',  item.type == 5 ? 'scale' : '', 
                     item.type == 6 ? 'oilCard' : ''] ">
                        <img class="icon" :src="item.icon"/> {{ item.label }} 
                    </el-button>
                </div>

                <!--菜单按钮-->
                <div class="menuList">
                    <el-button class="btn" v-for="item in menuList" :key="item.id">
                        {{ item.label }} 
                    </el-button>
                </div>
            </div>
        </div>

        <!--订单优惠弹窗-->
        <el-dialog title="订单优惠"  v-model="diaVisiOrdDis" with="25%"
        :modal-append-to-body="false">
            <order-discount></order-discount>
        </el-dialog>

         <!--手输油品-->
        <el-dialog title="手输油品"  v-model="diaVisiHandOil" with="25%"
        :modal-append-to-body="false">
            <handle-oil></handle-oil>
        </el-dialog>
    </div>
</template>

<script>
import { toRefs, reactive, onMounted } from 'vue';
import IconBox from '@/renderer/components/iconBox';
import OrderDiscount from './orderDiscount';
import HandleOil from './handleOil';

export default {
    name: 'cashier',
    components: { IconBox, OrderDiscount, HandleOil },
    setup(){
        const state = reactive({
            tableHeader: [
                { prop: 'time', label: '时间', align: 'center' },
                { prop: 'gum', label: '油枪', align: 'center'},
                { prop: 'oil', label: '油品', align: 'center' },
                { prop: 'liter', label: '升数', align: 'center' },
            ],
            tableData: [],
            gumList: [],
            btnList: [
                {label: '订单1', value: '1', type: 'orderFirst' },
                {label: '订单2', value: '2', type: 'orderSec' },
                {label: '电子会员', value: '3', type: 'eleMember' },
                {label: '油卡会员', value: '4', type: 'oilCardMember' },
                {label: '手输油品', value: '5', type: 'handleOil' },
                {label: '修改支付', value: '6', type: 'modifyPay' },
                {label: '取消订单', value: '7', type: 'cancel' },
                {label: '非油退货', value: '8', type: 'return' },
                {label: '交易查询', value: '9', type: 'orderQuery' },
                {label: '积分兑换', value: '10', type: 'integralExchange' },
                {label: '更多', value: '11', type: 'more' },
            ],
            tableHeaderDetail: [
                { prop: 'name', label: '商品名称', align: 'center' },
                { prop: 'price', label: '单价', align: 'center'},
            ],
            tableDataDetail: [],
            code: '',
            orderDetailList: {},
            methodsList: [],
            tip: '活动商品满3件减2元',
            menuList: [
                { label: '业务配置', type:  '1' },
                { label: '订单补录', type:  '2' },
                { label: '投币', type: '3' },
                { label: '签到', type:  '4'  },
            ],
            diaVisiOrdDis: false,
            diaVisiHandOil: false
        });

        const getData = async () => {
            state.tableData = [
                { 'time': 'efef', gum: 'dede', oil: 'dg', liter: '10', price: '10' },
                { 'time': 'efef', gum: 'dede', oil: 'dg', liter: '10', price: '10' },
                { 'time': 'efef', gum: 'dede', oil: 'dg', liter: '10', price: '10' }
            ];
            state.gumList = [
                { oil: '92#', gumNo: '1', price: '200.00' },
                { oil: '92#', gumNo: '2', price: '200.00' },
                { oil: '92#', gumNo: '3', price: '200.00' },
                { oil: '92#', gumNo: '4', price: '200.00' },
                { oil: '92#', gumNo: '5', price: '200.00' },
                { oil: '92#', gumNo: '6', price: '200.00' },
                { oil: '92#', gumNo: '7', price: '200.00' },
                { oil: '92#', gumNo: '8', price: '200.00' },
                { oil: '92#', gumNo: '9', price: '200.00' },
                { oil: '92#', gumNo: '1', price: '200.00' },
                { oil: '92#', gumNo: '2', price: '200.00' },
                { oil: '92#', gumNo: '3', price: '200.00' },
                { oil: '92#', gumNo: '4', price: '200.00' },
                { oil: '92#', gumNo: '5', price: '200.00' },
                { oil: '92#', gumNo: '6', price: '200.00' },
                { oil: '92#', gumNo: '7', price: '200.00' },
                { oil: '92#', gumNo: '8', price: '200.00' },
                { oil: '92#', gumNo: '9', price: '200.00' },
                { oil: '92#', gumNo: '1', price: '200.00' },
                { oil: '92#', gumNo: '2', price: '200.00' },
                { oil: '92#', gumNo: '3', price: '200.00' },
                { oil: '92#', gumNo: '4', price: '200.00' },
                { oil: '92#', gumNo: '5', price: '200.00' },
                { oil: '92#', gumNo: '6', price: '200.00' },
                { oil: '92#', gumNo: '7', price: '200.00' },
                { oil: '92#', gumNo: '8', price: '200.00' },
                { oil: '92#', gumNo: '9', price: '200.00' },
                { oil: '92#', gumNo: '7', price: '200.00' },
                { oil: '92#', gumNo: '8', price: '200.00' },
                { oil: '92#', gumNo: '9', price: '200.00' },
                { oil: '92#', gumNo: '7', price: '200.00' },
                { oil: '92#', gumNo: '8', price: '200.00' },
                { oil: '92#', gumNo: '33', price: '200.00' },
                { oil: '92#', gumNo: '7', price: '200.00' },
                { oil: '92#', gumNo: '8', price: '200.00' },
                { oil: '92#', gumNo: '36', price: '200.00' },
            ];
            state.tableDataDetail = [
                { 'name': 'efef', total: 'dg', num: '10', price: '10' },
                { 'name': 'efef', total: 'dg', num: '10', price: '10' },
                { 'name': 'efef', total: 'dg', num: '10', price: '10' },
                { 'name': 'efef', total: 'dg', num: '10', price: '10' },
                { 'name': 'efef', total: 'dg', num: '10', price: '10' }
            ];
            state.methodsList = [
                { label: '微信', icon: 'wx', type:  '1' },
                { label: '支付宝', icon: 'wx' , type:  '2' },
                { label: '现金', icon: 'wx' , type: '3' },
                { label: '电子卡', icon: 'wx', type:  '4'  },
                { label: '扫码付', icon: 'wx', type: '5'  },
                { label: '加油付', icon: 'wx' , type: '6' }
            ];
        };

        const deleteBtn = async (item) => {
            console.log(item);
        };

        const inputNum = (value) => {
            if(value == undefined){
                return;
            } else {
                return value.replace(/[^\d.]/g, '');
            }
        };

        const gumBtn = () => {
            state.diaVisiOrdDis = true;
            console.log(3);
        };

        const btnTool = (item) => {
            if (item.value == 5) {
                state.diaVisiHandOil = true;
            }
            console.log(item);
        };

        onMounted(() => {
            getData();
        });

        return {
            ...toRefs(state),
            deleteBtn,
            inputNum,
            gumBtn,
            btnTool
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
        width: 43.4%;
        .gum {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            padding-top: 12px;
            .gumItem {
                width: 15.7%;
                height: 59px;
                padding: 2px 12px 2px 8px; 
                margin-bottom: 6px;
                margin-right: 6px;
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
        background: #fff;
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
        .el-table .el-table__cell{
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
        width: 10%;
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
            .tip {
                width: 100%;
                padding: 8px 26px 8px;
                background: rgba(255,150,16, .05);
                font-size: 13px;
                font-weight: 500;
                color: #FF9610;
                box-sizing: border-box;
            }
            .el-table .el-table__cell{
                padding: 18px 0;
            }
            tbody{
                td:nth-child(3) .cell{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .el-input__inner {
                        text-align: center;
                        border: none;
                        background: none;
                    }
                }
                td:nth-child(4) {
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
        .mnemoniCode {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            .codeInput{
                width: 80%;
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
                width: 18%;
                height: 50px;
                margin-left: 2%;
                font-size: 14px;
                font-weight: 500;
                color: #545454;
                background: linear-gradient(180deg, #FFFFFF 0%, #E9E9E9 100%);
                border-radius: 8px;
            }
        }
        .orderDetail {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 237px;
            padding: 0 20px;
            background: #fff;
            border-radius: 8px;
            box-sizing: border-box;
            .order {
                width: 50%;
                padding: 18px 0;
                .item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 3px 0;
                    .title {
                        font-size: 13px;
                        font-weight: 400;
                        color: #545454;
                    }
                    .value {
                        font-size: 14px;
                        font-weight: 500;
                        color: #545454;
                    }
                    .pricePayTitle {
                        font-size: 16px;
                        color: #1666E6;
                    }
                    .pricePay {
                        font-size: 28px;
                        color: #FF2D2D;
                    }
                }
            }
            .el-divider {
                height: 200px;
                background: #E8E8E8;
                opacity: .5;
            }
            .methods {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                width: 48%;
                margin: 0 auto;
                text-align: center;
                color: #fff;
                .icon{
                    
                }
                .btn {
                    width: 110px;
                    height: 60px;
                    margin-bottom: 10px;
                    margin-left: 0;
                    color: #fff;
                    border: none;
                    background: linear-gradient(180deg, #FFBF44 0%, #FF9109 100%);
                    border-radius: 8px;
                }
                .wx{
                    background: linear-gradient(180deg, #46E56D 0%, #15C440 100%);
                }
                .ali{
                    background: linear-gradient(180deg, #4BC7FF 0%, #00A1E9 100%);         
                }
                .scale{
                    background: linear-gradient(180deg, #40ADFC 0%, #1E75F7 100%);
                }
                .oilCard {
                    background: linear-gradient(180deg, #FF7F8E 0%, #FF2539 100%);
                }
            }
            .menuList {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 50%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                box-sizing: border-box;
                padding: 12px 10px;
                background: #565961;
                box-shadow: 0px 3px 8px 0px rgba(15, 52, 93, 0.09);
                border-radius: 8px;
                .btn {
                    width: 108px;
                    height: 54px;
                    margin: 8px 0;
                    background: linear-gradient(180deg, #FFFFFF 0%, #E9E9E9 100%);
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #545454;
                }
            }
        }
    }
    .el-button{
        display: initial;
    }
}

</style>

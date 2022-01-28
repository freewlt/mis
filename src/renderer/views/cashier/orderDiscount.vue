<template>
    <el-form class="orderDiscount" :model="form"  ref="formRef"
    :rules="ruleForm" label-width="100px" >
        <el-form-item label="车辆类型:" prop="type" class="carTypeBox">
            <el-radio class="carType" v-model="form.type" v-for="item in typeList" 
            :key="item.id" :label="item.value" border @click="chooseType(item)">
                <img class="pic" :src="item.picSel" v-if="item.value == curIdx"/>
                <img class="pic" :src="item.pic" v-else/>
                <span class="title">{{ item.label }}</span>
            </el-radio>
        </el-form-item>
        <el-form-item label="车辆类型：" prop="type">
            <el-input v-model="form.type" type="text" class="editInput"></el-input>
        </el-form-item>
        <el-form-item label="优惠券条码：" prop="type">
            <el-input v-model="form.type" type="text" class="scan"></el-input>
        </el-form-item>
        <el-form-item class="btnGroup">
            <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
            <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { reactive, toRefs } from 'vue';
// import type { ElForm } from "element-plus";

// import IconBox from "@/renderer/components/iconBox";
const carPng = require('../../assets/images/cashier/carSel.png');
const carPngSel = require('../../assets/images/cashier/carSel.png');
const mobilePng = require('../../assets/images/cashier/mobile.png');
const mobilePngSel = require('../../assets/images/cashier/mobileSel.png');
const taxiPng = require('../../assets/images/cashier/taxi.png');
const taxiPngSel = require('../../assets/images/cashier/taxiSel.png');
const specialPng = require('../../assets/images/cashier/specialTrain.png');
const specialPngSel = require('../../assets/images/cashier/specialTrainSel.png');

export default {
    name: 'orderDiscount',
    // components: { IconBox },
    setup(){
        // const formRef = ref<InstanceType<typeof ElForm>>();

        const state = reactive({
            typeList: [
                { label: '汽车', value: 1, pic: carPng, picSel: carPngSel },
                { label: '摩托车', value: 2, pic: mobilePng, picSel: mobilePngSel },
                { label: '出租车', value: 3, pic: taxiPng, picSel: taxiPngSel },
                { label: '专车', value: 4, pic: specialPng, picSel: specialPngSel },
            ],
            curIdx: 0,
        });

        const form = reactive({
            name: '',
        });

        const ruleForm = reactive({
            type: [
                {
                    required: true,
                    message: '请选择车辆类型',
                    trigger: 'blur',
                },
            ]
        });

        const chooseType = async (item) => {
            state.curIdx = item.value;
        };

        const submitForm = async (form) => {
            console.log(form);
        };
        const resetForm = async (form) => {
            console.log(form);
        };
        
        return {
            ...toRefs(state),
            form,
            ruleForm,
            chooseType,
            submitForm,
            resetForm
        };
    }
};
</script>

<style lang="scss">
.orderDiscount{
    .carType{
        padding: 21px 13px!important;
        margin-right: 10px;
        .el-radio__label{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .pic {
            width: 35%;
        }
    }
    .el-form-item {
        display: block;
        .el-form-item__content {
            padding-top: 10px;
        }
    }
    .el-input__inner {
        height: 45px;
        line-height: 45px;
        background: none;
        text-indent: 30px;
    }
    .editInput {
        box-sizing: border-box;
        background-size: 1rem;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAAAAACo4kLRAAAAAXNSR0IArs4c6QAAAJ9JREFUGNOV0NEKgjAYBWDf/0kUi4YuSgujSIJFEBldVBBoUHSR0GCirZ0ugthGFP2X381/znHw4ZxfWI29AbdQ9plYDk1U00BBeCZmtDtpssTAvM3vKWnddLz6F6B0z/p30dkDFdnpkWS0AGQ8N3KmIwXMkoeOa9oAm7DWG9UuB46vx2/MY6D0T2Z3tlIF2VqDBIyGB3ulXlSo//b8jk+XyH9uVWc8VAAAAABJRU5ErkJggg==') no-repeat 10px center;
    }
    .scan {
        text-indent: 100px;
        box-sizing: border-box;
        background-size: 10%;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAAAAACo4kLRAAAAAXNSR0IArs4c6QAAAGpJREFUGNON0L0JACEMBlD338PCzsZeBSeIOoXNdYrCHSQgESLcVz6i+VGvECXjTEbvmDQRwbVnpzlA9MBfgifMHDNhrBxrRByL4xrUvR+h7lYfsffKfv7ZEUPhWMJ9TnEjcXfxSv+PLOQDIdZ2eEt+kPQAAAAASUVORK5CYII=') no-repeat 10px center;
    }
}

.el-radio__inner {
    display: none;
}

// .btnGroup {
//     width: 100%;
//     margin: 0 auto;
//     text-align: center;
//     .el-form-item__content{
//         justify-content: center;
//         margin-left: 0!important;
//         .el-button {
//             width: 96px;
//             height: 34px;
//             border-radius: 4px;
//         }
//     }
// }
</style>
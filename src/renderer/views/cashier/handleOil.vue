<template>
    <el-form class="handleOil" :model="form"  ref="formRef"
    :rules="ruleForm" label-width="100px" >
        <el-form-item label="枪号：" prop="type">
            <el-input v-model="form.type" type="text" class="editInput"></el-input>号
        </el-form-item>
        <el-form-item label="金额：" prop="type">
            <el-input v-model="form.type" type="text" class="scan"></el-input>元
        </el-form-item>
        <el-form-item label="升数：" prop="type">
            <el-input v-model="form.type" type="text" class="editInput"></el-input>号
        </el-form-item>
        <el-form-item label="支付:" prop="type" class="carTypeBox">
            <el-radio class="carType" v-model="form.type" v-for="item in typeList" 
            :key="item.id" :label="item.value" border @click="choosePayStatus(item)">
                <span class="title">{{ item.label }}</span>
            </el-radio>
        </el-form-item>
        <el-form-item class="btnGroup">
            <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
            <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    name: 'handleOil',
    setup(){

        const state = reactive({
            typeList: [
                { label: '已支付', value: 1 },
                { label: '未支付', value: 2 },
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

        const choosePayStatus = async (item) => {
            state.curIdx = item.value;
        };

        return {
            ...toRefs(state),
            form,
            ruleForm,
            choosePayStatus,
        };
    }
};
</script>

<style lang="scss" scope>
.handleOil{
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

</style>
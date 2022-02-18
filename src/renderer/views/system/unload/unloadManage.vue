<template>
    <div class="unloadManage">
        <h3 class = "title">
            <span class = "symbol"></span>
            <span class = "text">卸载油前</span>
        </h3>
        <el-divider border-style="dashed"></el-divider>
        
        <el-form ref="unloadBeforeRef" :model="unloadBefore" :rules="rules"
            label-width="130px" class="form">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="油罐" prop="oilTank">
                        <el-select v-model="unloadBefore.oilTank" class="m-2" placeholder="">
                            <el-option v-for="item in oilTankList" :key="item.value"
                             :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="油品" prop="oil">
                        <el-select v-model="unloadBefore.oil" class="m-2" placeholder="">
                            <el-option v-for="item in oilList" :key="item.value"
                             :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="油站供应商" prop="oilSupplier">
                        <el-select v-model="unloadBefore.oilSupplier" class="m-2" placeholder="">
                            <el-option v-for="item in oilSupplierList" :key="item.value"
                             :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="配送单号" prop="distributionOrder" class = "formItem">
                        <el-input v-model="unloadBefore.distributionOrder"></el-input>
                        <icon-box name="search"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="配送车号" prop="distributionCarNum">
                        <el-input v-model="unloadBefore.distributionCarNum"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="送油司机" prop="sendOilDriver">
                        <el-input v-model="unloadBefore.sendOilDriver"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="来单数量(kg)" prop="toSingleNum">
                        <el-input v-model="unloadBefore.toSingleNum"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="来单升数(L)" prop="toSingleLPM">
                        <el-input v-model="unloadBefore.toSingleLPM"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="来单视温(℃)" prop="toSingleTemp">
                        <el-input v-model="unloadBefore.toSingleTemp"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="来单视密(kg/m³)" prop="toSingleDensity">
                        <el-input v-model="unloadBefore.toSingleDensity"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="来单标密(kg/m³)" prop="toSingleSecret">
                        <el-input v-model="unloadBefore.toSingleSecret"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="油样视温(℃)" prop="oilSampleTemp">
                        <el-input v-model="unloadBefore.oilSampleTemp"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="油样视密(kg/m³)" prop="oilSampleDensity">
                        <el-input v-model="unloadBefore.oilSampleDensity"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="数据读取" prop="dataRead">
                        <el-radio-group v-model="unloadBefore.dataRead">
                            <el-radio v-for="item in dataReadList" :key="item.id" :label="item.label" 
                            :value="item.value"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="油品密度(kg/m³)" prop="oilDensity">
                        <el-input v-model="unloadBefore.oilDensity"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="油品重量(kg)" prop="oilWeight">
                        <el-input v-model="unloadBefore.toSingleDensity"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="油品温度(℃)" prop="oilTemp">
                        <el-input v-model="unloadBefore.oilTemp"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="油水总高(mm)" prop="oilWaterHigh">
                        <el-input v-model="unloadBefore.oilWaterHigh"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="水高(mm)" prop="waterHigh">
                        <el-input v-model="unloadBefore.waterHigh"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="卸油前升数(L)" prop="litresBefUnload">
                        <el-input v-model="unloadBefore.toSingleSecret"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item>
                <el-button type="primary" @click="submit(unloadBefore)">开始卸油</el-button>
            </el-form-item>
        </el-form>
        <h3 class = "title">
            <span class = "symbol"></span>
            <span class = "text">卸载油后</span>
        </h3>
       <el-form ref="unloadAfterRef" :model="unloadAfter" :rules="rules"
            label-width="130px" class="form">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="油品密度(kg/m³)" prop="oilDensity">
                        <el-input v-model="unloadAfter.oilDensity"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="油品重量(kg)" prop="oilWeight">
                        <el-input v-model="unloadAfter.toSingleDensity"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="油品温度(℃)" prop="oilTemp">
                        <el-input v-model="unloadAfter.oilTemp"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="油水总高(mm)" prop="oilWaterHigh">
                        <el-input v-model="unloadAfter.oilWaterHigh"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="水高(mm)" prop="waterHigh">
                        <el-input v-model="unloadAfter.waterHigh"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="卸油前升数(L)" prop="litresBefUnload">
                        <el-input v-model="unloadAfter.toSingleSecret"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item>          
                <el-button type="primary" @click="submit(unloadAfter)">结束卸油</el-button>
                <el-button type="primary" @click="submit(unloadAfter)">计算损耗</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
// import IconBox from '@/renderer/components/iconBox';

export default {
    name: 'unloadManage',
    // components: {
    //     IconBox,
    // },
    setup(){
        const state = reactive({
            unloadBefore: {
                oilTank: '',
                oil: '',
                oilSupplier: '',
                distributionOrder: '',
                distributionCarNum: '',
                sendOilDriver: '',
                toSingleNum: '',
                toSingleLPM: '',
                toSingleTemp: '',
                toSingleDensity: '',
                toSingleSecret: '',
                oilSampleTemp: '',
                oilSampleDensity: '',
                oilDensity: '',
                oilWeight: '',
                oilTemp: '',
                oilWaterHigh: '',
                waterHigh: '',
                litresBefUnload: '',
            },
            oilTankList: [
                {
                    value: '1',
                    label: '1',
                },
            ],
            oilList: [
                {
                    value: '2',
                    label: '2',
                },
            ],
            oilSupplierList: [
                {
                    value: '3',
                    label: '3',
                },
            ],
            dataReadList: [
                {
                    value: '3',
                    label: '自动',
                },
                {
                    value: '3',
                    label: '手动',
                },
            ],
            unloadAfter: {
                oilDensity: '',
                oilWeight: '',
                oilTemp: '',
                oilWaterHigh: '',
                waterHigh: '',
                litresBefUnload: '',
            }
        });

        const rules = reactive({
            oilTankList: [
                { required: true, message: '请选择油罐', trigger: 'blur', },
            ],
            oilList: [
                { required: true, message: '请选择油品', trigger: 'blur', },
            ],
            oilSupplierList: [
                { required: true, message: '请选择油站供应商', trigger: 'blur', },
            ],
            distributionOrder: [
                { required: true, message: '请输入配送单号',  trigger: 'blur', },
            ],
            distributionCarNum: [
                { required: true, message: '请输入配送车号',  trigger: 'blur', },
            ],
            sendOilDriver: [
                { required: true, message: '请输入送油司机',  trigger: 'blur', },
            ],
            toSingleNum: [
                { required: true, message: '请输入来单数量',  trigger: 'blur', },
            ],
            toSingleLPM: [
                { required: true, message: '请输入来单升数',  trigger: 'blur', },
            ],
            toSingleTemp: [
                { required: true, message: '请输入来单视温(℃)',  trigger: 'blur', },
            ],
            toSingleDensity: [
                { required: true, message: '请输入来单视密(kg/m³)',  trigger: 'blur', },
            ],
            toSingleSecret: [
                { required: true, message: '请输入来单标密(kg/m³)',  trigger: 'blur', },
            ],
            oilSampleTemp: [
                { required: true, message: '请输入油样视温(℃)',  trigger: 'blur', },
            ],
            oilSampleDensity: [
                { required: true, message: '请输入油样视密(kg/m³)',  trigger: 'blur', },
            ],
            oilDensity: [
                { required: true, message: '请输入油品密度(kg/m³)',  trigger: 'blur', },
            ],
            oilWeight: [
                { required: true, message: '请输入油品重量(kg)',  trigger: 'blur', },
            ],
            oilTemp: [
                { required: true, message: '请输入油品温度(℃)',  trigger: 'blur', },
            ],
            oilWaterHigh: [
                { required: true, message: '请输入油水总高(mm)',  trigger: 'blur', },
            ],
            waterHigh: [
                { required: true, message: '请输入水高(mm)',  trigger: 'blur', },
            ],
            litresBefUnload: [
                { required: true, message: '请输入卸油前升数(L)',  trigger: 'blur', },
            ],
        });

        onMounted(async () => {
            
        });

        const submit = async (formNane) =>{
            alert(34);
            console.log(formNane);
        };

        return {
            ...toRefs(state),
            rules,
            submit
        };
    }
};
</script>

<style lang="scss" scoped>
.unloadManage {
    width: 100%;
    padding: 34px 20px;
    box-sizing: border-box;
    .title {
        .symbol {
            display: inline-block;
            vertical-align: middle;
            width: 4px;
            height: 18px;
            background: #278BF6;
            margin-right: 10px;
        }
        .text{
            display: inline-block;
            vertical-align: middle;
            font-size: 18px;
            font-weight: 500;
            color: #278BF6;
        }
    }
    .form {
        width: 92%;
        margin: 0 auto;
        .el-input, .el-select {
            width: 88%;
        }
        .el-icon {
            padding-left: 3%;
            color: #278BF6;
        }
    }
}
</style>

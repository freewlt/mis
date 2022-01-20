<template>
    <div class="cashier">
        <el-table :data="tableData" class="tableData">
            <el-table-column v-for="(item, index) in tableHeader" :key="index" 
                :prop="item.prop" :label="item.label" :align="item.align" />
            <el-table-column label="金额" align="center">
                <template #default="scope">
                    {{ scope.row.price }}
                    <icon-box name="edit"></icon-box>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { toRefs, reactive } from "vue";
import IconBox from "@/renderer/components/iconBox";

export default {
    name: 'cashier',
    components: { IconBox },
    setup(){
        const state = reactive({
            tableData: [
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" },
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" },
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" },
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" },
                { "time": "efef", gum: "dede", oil: "dg", liter: "10", price: "10" }

            ],
            tableHeader: [
                { prop: "time", label: "时间", align: "center" },
                { prop: "gum", label: "油枪", align: "center" },
                { prop: "oil", label: "油品", align: "center" },
                { prop: "liter", label: "升数", align: "center" },
            ]
        });

        return {
            ...toRefs(state),
        };
    }
};
</script>

<style lang="scss" scoped="">
.cashier {
    width: 100%;
    height: 100%;
    padding: 0 20px 20px;
    overflow: hidden;
    .tableData {
        width: 560px;
        height: 310px;
        padding: 0 20px;
        border-radius: 8px;
        box-sizing: border-box;
    }
}
</style>

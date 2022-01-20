<template>
    <div class="eleStore">
        <el-button class="shiftStatus" @click="saveBtn">本地存储</el-button>
    </div>
</template>

<script>
import Store  from "electron-store";
const store  = new Store();

export default {
    name: 'eleStore',
    setup(){

        const saveBtn = async () => {
            store.set("unicorn", "dsg");
            const a = store.get("unicorn");
            console.log(a, "获取本地存储内容");
        };

        return {
            saveBtn,
        };
    },
};

</script>

<style lang="scss" scoped>

</style>

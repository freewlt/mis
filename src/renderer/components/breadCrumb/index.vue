<template>
    <div class="breadCrumbBox">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item class="breakLink" v-for="item in breadList" :key="item.path">
                <router-link :to="{path:item.path}">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>

export default {
    name: 'breadCrumbBox',
    props: ['breadList'],
};

</script>

<style lang="scss" scoped>
    .breadCrumbBox {
        position: relative;
        width: 100%;
        padding: 7px 12px 17px;

        .el-breadcrumb__item {
            cursor: pointer !important;

            a {
                cursor: pointer !important;
            }
        }
    }
</style>

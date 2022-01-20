<template>
    <!--二级导航-->
    <el-menu router :default-active="$route.path" class="menuLf" @select="menuSelect">
        <template v-for="item in list">
            <el-sub-menu :index="item.name" :key = "item.id" v-if ="item.parentFlag">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>{{ item.name }}</span>
                </template>
                <el-menu-item :index="subItem.frontPath" :key="subItem.name" v-for="subItem in item.childrens">
                    {{ subItem.name }}
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item :index="item.frontPath" :key="item.name" v-else>
                <template #title>
                    <el-icon><setting /></el-icon>
                    <span>{{ item.name }}</span>
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
import { Location, Setting } from '@element-plus/icons-vue';
import { reactive, toRefs, onMounted } from 'vue';

export default {
    name: 'menuLf',
    components: {
        Setting,
        Location
    },
    props: {
        list: Array,
    },
    setup(props, context){
        
        const state = reactive({
            activeIndex: "1",
            // list: [],
        });

        state.list = props.list;
        const menuClick = async (menuName) => {
            // 通过自定义事件回传值
            context.emit('menuClick', { menuName });
        };

        onMounted(async () => {
        });

        return {
            ...toRefs(state),
            menuClick
        };
    },
};
</script>

<style lang="scss" scoped>
.menuLf{
    width: 250px;
    height: calc(100% - 103px);
    background: #fff;
}
</style>

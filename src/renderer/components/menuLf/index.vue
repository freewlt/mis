<template>
    <!--二级导航-->
    <el-menu router :default-active="$route.path" class="menuLf">
        <template v-for="item in list">
            <el-sub-menu :index="item.name" :key = "item.id" v-if ="item.parentFlag">
                <template #title>
                    <icon-box :name="item.icon"/>
                    <span>{{ item.name }}</span>
                </template>
                <el-menu-item :index="subItem.frontPath" :key="subItem.name" v-for="subItem in item.childrens">
                    {{ subItem.name }}
                </el-menu-item>
            </el-sub-menu>
            <el-menu-item :index="item.frontPath" :key="item.name" v-else>
                <template #title>
                    <icon-box :name="item.icon"/>
                    <span>{{ item.name }}</span>
                </template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import IconBox from "../iconBox";

export default {
    name: 'menuLf',
    components: {
        IconBox,
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
    border-radius: 8px 8px 0px 0px;
}
</style>

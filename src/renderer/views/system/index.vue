<template>
    <div class="system">
        <Menu-Lf :list = "list"></Menu-Lf>
        <div class="rightCon">
            <bread-crumb :breadList="breadList"></bread-crumb>
            <router-view class="con"></router-view>
        </div>
    </div>
</template>

<script>
import { toRefs, reactive, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import MenuLf from "../../components/menuLf/index";
import BreadCrumb from "../../components/breadCrumb";

export default {
    name: 'system',
    components: {
        MenuLf,
        BreadCrumb
    },

    setup(){
        const route = useRoute();

        const state = reactive({
            list: [
                {
                    "name": "卸油管理",
                    "icon": "Basketball",
                    "parentFlag": true,
                    "childrens": [
                        {
                            "name": "卸油操作",
                            "frontPath": "/system/unloadManage"
                        },
                        {
                            "name": "卸油记录",
                            "frontPath": "/system/unloadRecord"
                        }
                    ]
                },
                {
                    "name": "管理",
                    "frontPath": "/system/unloadRecord",
                    icon: "WalletFilled"
                },
            ],
            breadList: [],
        });

        const breadNav = async () => {
            state.breadList = route.matched;
        };

        onMounted( () => {
            breadNav();
        });

        watch(()=>route.matched,(newVal)=>{
            state.breadList = newVal;
        });

        return {
            ...toRefs(state),
        };
    }
};
</script>

<style lang="scss" scoped>
.system{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 13px 20px 0 0;
    box-sizing: border-box;
    background: #f5f5f5;
    .rightCon{
        width: 100%;
        height: 100%;
        padding: 0 0 0 20px;
        margin: 0 auto;
        border-radius: 8px;
        .con {
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 8px;
        }
    }
}
</style>

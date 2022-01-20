<template>
    <div class="system">
        <Menu-Lf :list = "list"></Menu-Lf>
        <router-view></router-view>
    </div>
</template>

<script>
import MenuLf from "../../components/menuLf/index";

export default {
    name: 'system',
    components: {
        MenuLf
    },
    setup(){
        return {
            list: [
                {
                    "name": "管理端配置",
                    "icon": "el-icon-s-tools",
                    "parentFlag": true,
                    "childrens": [
                        {
                            "name": "卸油管理",
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
                    "frontPath": "/system/unloadManage",
                    "icon": "el-icon-s-tools",
                },
            ],
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
}
</style>
<template>
    <div class="nav">
        <el-row :gutter="20" class="headBox">
            <el-col :span="5" class="logoBox">
                <img class="logoPic" src="../../assets/images/header/logo.png" title="汽车易生活"/>
            </el-col>
            <!--一级导航-->
            <el-col :span="12" class="center">
                <el-menu router :default-active="$route.path.split('/').slice(0,2).join('/')" class="navMenu"
                mode="horizontal" @select="handleSelect">
                    <el-menu-item v-for="item in navMenuList" :index="item.frontPath" :key="item.id">
                        <router-link :to="{ path:item.frontPath }">
                            <el-icon><setting /></el-icon>
                            <span>{{ item.name }}</span>
                        </router-link>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="7" class="right">
                <el-divider direction = "vertical"></el-divider>
                <ul class="shiftDetail">
                    <li class="name">{{ shiftDetail.name }}</li>
                    <li class="shift">{{ shiftDetail.shift }}</li>
                    <li class="shiftNum">{{ shiftDetail.shiftNum }}</li>
                </ul>
                <el-button class="shiftStatus">{{ shiftDetail.shiftStatus }}</el-button>
                <el-dropdown class="language" :hide-on-click="false" @command="handleClick">
                    <el-button class="shiftStatus">{{ language }}</el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item,index) in dropdownList"
                                :key="index" :command="item.value"
                                :class="{'selected':status==item.value}">
                                {{ item.label }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { Setting } from '@element-plus/icons-vue';
import { reactive, toRefs, onMounted } from 'vue';
import { useI18n } from "vue-i18n";
import i18n from '../../language/i18n.js';

export default {
    name: 'headBox',
    components: {
        Setting,
    },
    setup(){
        const { locale } = useI18n();
        const state = reactive({
            activeIndex: "1",
            navMenuList: [],
            shiftDetail: {
                name: "007010 - 赵炎",
                shift: "中班 - 已上班",
                shiftNum: "班次号：201808081234",
                shiftStatus: "上班"
            },
            language: "中文",
            dropdownList: [
                {
                    label: "中文",
                    value: "1",
                },
                {
                    label: "English",
                    value: "2",
                },
            ],
            status: '2',
            list: [],
        });
        const getData = async () =>{
            state.navMenuList= [
                {
                    name: i18n.global.t('OperatingStatus'),
                    frontPath: "/home",
                },
                {
                    name: i18n.global.t('CashierBusiness'),
                    frontPath: "/home2",
                },
                {
                    name: i18n.global.t('FuelCardBusiness'),
                    frontPath: "/home3",
                },
                {
                    name: i18n.global.t('QueryReport'),
                    frontPath: "/home4",
                },
                {
                    name: i18n.global.t('SysConfig'),
                    frontPath: "/system"
                },
            ];
        };
        const handleClick = async (c) =>
        {
            if(c === "1"){
                state.language = "中文";
                locale.value = "zh";
            } else {
                state.language = "英文";
                locale.value = "en";
            }
            state.status = c;
            getData();
        };
        const handleSelect = async () => {};

        onMounted(async () => {
            getData();
        });
        return {
            ...toRefs(state),
            handleClick,
            handleSelect
        };
    },
};

</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    .headBox {
        display: flex;
        justify-content: flex-start;
        align-items:center;
        margin: 0!important;
        width: 100%;
        height: 103px;
        padding: 0 5px;
        background: linear-gradient(44deg, #1B70F7 0%, #19B2DB 100%);
        .logoBox {
            .logoPic {
                width: 100%;
            }
        }
        .center{
            width: 40%;
            .navMenu{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border: none;
                background: none;
                li{
                    width: 19%;
                    &:hover {
                        background: none;
                    }
                }
                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    line-height: initial;
                    color: #fff;
                    span {
                        padding-top: 5px;
                    }

                }
                .el-icon {
                    color: #fff;
                    font-size: 26px;
                }
            }
            .el-menu--horizontal>.el-menu-item.is-active {
                border: none;
                background: none;
            }
            .is-active .router-link-active, .is-active .el-icon {
                color: #FFBF49;
            }
        }
        .right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            font-size: 14px;
            .el-divider{
                height: 60px;
                opacity: .5;
            }
            .shiftDetail {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                li {
                    padding: 3px 0;
                }
            }
            .shiftStatus {
                width: 62px;
                height: 32px;
                border-radius: 4px;
                background: none;
                color: #fff;
                font-size: 16px;
                font-weight: 500;
            }
            .language {
                color: #fff;
            }
        }
        .selected{
            color: #409eff;
        }
    }
}
</style>

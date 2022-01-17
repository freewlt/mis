<template>
    <el-row :gutter="20" class="headBox">
        <el-col :span="5" class="logoBox">
            <img class="logoPic" src="../../assets/images/header/logo.png" title="汽车易生活"/>
        </el-col>
        <el-col :span="13">
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
        <el-col :span="6" class="right">
            <ul class="shiftDetail">
                <li class="name">{{ shiftDetail.name }}</li>
                <li class="shift">{{ shiftDetail.shift }}</li>
                <li class="shiftNum">{{ shiftDetail.shiftNum }}</li>
            </ul>
            <el-button class="shiftStatus" @click="saveBtn">{{ shiftDetail.shiftStatus }}</el-button>
            <div @click="readFile">读</div>
            <div @click="whiteFile">读写</div>
            <el-dropdown class="language" @command="handleClick">
                <span class="el-dropdown-link">
                    {{ language }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="zh">中文</el-dropdown-item>
                        <el-dropdown-item command="en">英文</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
import { Setting, ArrowDown } from '@element-plus/icons-vue';
import { reactive, toRefs, onMounted } from 'vue';
import { useI18n } from "vue-i18n";
import i18n from '../../language/i18n.js';
import Store  from "electron-store";
const ipc = require("electron").ipcRenderer;
const store  = new Store();

export default {
    name: 'headBox',
    components: {
        Setting,
        ArrowDown
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
                    name: "中文",
                    command: "zh",
                },
                {
                    name: "English",
                    command: "en",
                },
            ],
        });
        const methods = { 
            handleSelect() {},
            getBtn() {},
        };
        const getData = async () =>{
            state.navMenuList= [
                {
                    name: i18n.global.t('OperatingStatus'),
                    frontPath: "/home",
                },
                {
                    name: i18n.global.t('OperatingStatus'),
                    frontPath: "/home2",
                },
                {
                    name: i18n.global.t('OperatingStatus'),
                    frontPath: "/home3",
                },
                {
                    name: i18n.global.t('OperatingStatus'),
                    frontPath: "/home4",
                },
                {
                    name: i18n.global.t('OperatingStatus'),
                    frontPath: "/home",
                },
            ]; 
        };
        const handleClick = async (c) => {
            if(c === "zh"){
                state.language = "中文";
            } else {
                state.language = "英文";
            }
            locale.value = c;
            getData();
        };
        const saveBtn = async () => {
            store.set("unicorn", state.shiftDetail.name);
            const a = store.get("unicorn");
            console.log(a, "获取本地存储内容");
        };
        const readFile = async () => {
            ipc.on("asynchronous-reply", function(event, arg) {
                // 这里的arg是从主线程请求的数据
                console.log("render+" + arg);
            });
            ipc.send("asynchronous-message", "传递回去ping");
        };
        const whiteFile = async () => {

            ipc.on("writeFile-reply", function(event, arg) {
                console.log(event,arg);
                console.log("writeFile+" + arg); 
            });
            // let data = {	
            //     "aa":"101",
            //     "mc":"202",
            //     "c0c":"303",
            // };
            
            // ipc.send("writeFile", data);
        };
        onMounted(async () => {
            getData();
        });
        return {
            ...toRefs(state),
            ...methods,
            handleClick,
            saveBtn,
            readFile,
            whiteFile
        };
    },
};

</script>

<style lang="scss" scoped>
.headBox {
    display: flex;
    justify-content: flex-start;
    align-items:center;
    width: 100%;
    height: 103px;
    padding: 0 10px 0 20px;
    background: linear-gradient(44deg, #1B70F7 0%, #19B2DB 100%);
    .logoBox {
        .logoPic {
            width: 100%;
        }
    }
    .navMenu{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: none;
        li{
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
    .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 14px;
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
            width: 90px;
            height: 35px;
            border-radius: 4px;
            background: none;
            color: #fff;
            font-size: 16px;
            font-weight: 500;
        }
        .language {
            position: absolute;
            right: 20px;
            top : 10px;
            color: #fff;
        }
    }
}
</style>
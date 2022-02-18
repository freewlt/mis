<template>
  <div class = "login">
    <form class = "form">
        <img src = "../assets/images/login/logo.png" class = "logoPic">
        <div class = "con">
            <h1 class="title">{{ title }}</h1>
            <div class = "inputBox">
                <input type = "text" placeholder = "请输入账号" v-model = "form.username">
                <i class="icon iconAct"></i>
                <el-dropdown class="dropdown">
                    <!--<i class="iconPush"></i>-->
                     <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class = "inputBox">
                <input type = "password" placeholder = "请输入密码" v-model = "form.password"><i class="icon"></i>
                <i class="icon iconPwd"></i>
            </div>
            <input type = "button" value = "登录" class="design" @click = "design">
        </div>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { login, getUserList } from '@/renderer/api/login';
import { useRouter } from 'vue-router';
import { ArrowDown } from '@element-plus/icons-vue';

export default {
    name: 'login',
    components: { ArrowDown },
    setup(){
        
        const state = reactive({
            title: '易生活油站管理系统',   
            form: {
                username: '',
                password: '',
            },
        });

        const router = useRouter();
        const design = async () =>{
            let loginForm = {
                'tellerNo': '001001', 
                'tellerName': '张三' 
            };
            getUserList().then(() => {
                alert(1);
            }).catch(()=> {
                alert(2);
            });
            login(loginForm).then(res => {
                console.log(res, 'res');
                router.push('/home');
            }).catch(err => {
                console.log(err, 'err');
            });
        };

        return {
            ...toRefs(state),
            design,
        };
    }
};
</script>

<style lang="scss" scoped>
.login {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    .form {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -252px;
        margin-top: -246px;
        width: 504px;
        height: 492px;
        background: url("../assets/images/login/bg.png") no-repeat;
        border-radius: 8px;
        .logoPic {
            padding: 18px 18px 0;
        }
        .con {
            width: 81.2%;
            margin: 0 auto;
            .title {
                padding-bottom: 40px;
                font-size: 24px;
                font-weight: 500;
                color: #fff;
                text-align: center;
            }
            .inputBox {
                position: relative;
                input {
                    display: block;
                    width: 100%;
                    height: 50px;
                    padding: 0 22px;
                    margin: 21px auto;
                    text-indent: 20px;
                    border: 1px solid #E4E4E4;
                    border-radius: 4px;
                    box-sizing: border-box;
                    outline: none;
                }
                .icon {
                    position: absolute;
                    left: 22px;
                    top: 14px;
                    width: 18px;
                    height: 19px;
                }
                .iconAct {
                    background: url("../assets/images/login/account.png") no-repeat;
                }
                .iconPwd {
                    width: 16px;
                    background: url("../assets/images/login/pwd.png") no-repeat;
                }
                .dropdown{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 70px;
                    height: 50px;
                }
            }
            .design {
                width: 100%;
                height: 50px;
                margin: 21px auto;
                background: #3DBDF7;
                color: #fff;
                font-size: 16px;
                font-weight: 500;
                border-radius: 26px;
            }
        }
    }
}
</style>
<template>
  <div class="login">
    <h1>{{ title }}</h1>
    <form class="form">
        <input type="text" placeholder="请输入账号" v-model="form.username">
        <input type="password" placeholder="请输入密码" v-model="form.password">
        <input type="button" value="登录" class="design" @click="design">
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { login } from '@/renderer/api/login';

export default {
    name: 'login',
    setup(){
        const state = reactive({    
            form: {
                username: '',
                password: '',
            },
        });
        const design = async () =>{
            const _this = this;
            let loginForm = {
                username: state.form.username,
                password: state.form.password,
            };
            login(loginForm).then(() => {
                _this.$router.push('/home');
            }).catch(()=> {
                alert(0);
            });
        };

        return {
            ...toRefs(state),
            design,
        };
    }
};
</script>
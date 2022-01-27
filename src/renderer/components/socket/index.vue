<template>
    <div class = "socket"> 
        <h3>socket通信：</h3>
        <br/>
        <input type="text" v-model="msg"/>
        <el-button @click='sendMessage'>向8000端口发送数据</el-button>
        <br/>
        {{backdata}}
        <br/>
        <el-button @click="disConnet">断开链接</el-button>
        <el-button @click="reqConnet">恢复链接</el-button>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import io from 'socket.io-client';
const socket = io.connect('ws://localhost:3000');

export default {
    name: 'socket',
    setup(){
        const state = reactive({
            msg:'bbb',
            backdata:'',
        });
        
        const sendMessage = async () => {
            socket.emit('chat', state.msg);
            socket.on('backmessage', data => {
                state.backdata = data;    
                console.log(state.backdata,'state.backdata');
                console.log(state, 'stng');
            });
        };

        const disConnet = async () => {
            socket.disconnect();
        };

        const reqConnet = async () => {
            socket.connect();
        };
        
        return {
            ...toRefs(state),
            sendMessage,
            disConnet,
            reqConnet
        };
    },
};

</script>


<style lang="scss" scoped>
.socket {
    width: 80%;
    padding: 20px;
    margin: 0 auto;
    border: 1px solid #ccc;
    input {
        width: 100px;
        padding: 3px 10px;
        margin-right: 10px;
        border: 1px solid #ccc;
    }
}
</style>
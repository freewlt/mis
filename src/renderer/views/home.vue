<template>
    <div class="home">
        <Head></Head>
        <!--<Handle-file></Handle-file>
        <Ele-Store></Ele-Store>
        <Socket></Socket>-->
        <router-view></router-view>
    </div>
</template>

<script>
import Head from '../components/header';
// import HandleFile from "../components/file";
// import EleStore from "../components/eleStore";
// import Socket from "../components/socket";

export default {
    name: 'home',
    components: {
        Head,
        // HandleFile,
        // EleStore,
        // Socket
    },
};
</script>

<style lang="scss" scoped="">
.home {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>

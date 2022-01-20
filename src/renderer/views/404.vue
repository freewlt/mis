<template>
    <div class="error">
        <div class="content">
            <div class="logo"></div>
            <div class="errorTxt">
                <div class="e404"></div>
                <p><b>出错了！</b></p>
                <p class="tip">您访问的页面不存在</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "error",
};
</script>

<style lang="scss" scoped>
    .error {
        position: absolute;
        top: 64px;
        height: calc(100% - 64px);
        width: 98%;
        text-align: center;
        background: #fff;
        .content {
            width: 600px;
            text-align: center;
            padding: 14% 0 0;
            margin: 0 auto;
            height: 360px;
            .logo {
                display: inline-block;
                float: left;
                height: 303px;
                width: 256px;
                background: url("../assets/images/error.jpg");
            }
            .errorTxt {
                margin: 0;
                text-align: left;
                float: left;
                z-index: 5;
                height: 300px;
                position: relative;
                padding: 80px 0 0 24px;
                b {
                    padding-top: 50px;
                    font-size: 38px;
                }
                .tip {
                    padding-top: 50px;
                    font-size: 20px;
                }
            }
            .e404 {
                display: inline-block;
                position: absolute;
                top: -60px;
                left: 145px;
                height: 164px;
                width: 150px;
                background: url("../assets/images/404.jpg");
            }
        }
    }
</style>

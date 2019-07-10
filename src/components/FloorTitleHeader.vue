<template recyclable>
    <div class="header">
        <div class="titlebox">
            <div class="leftline"></div>
            <text class="title"> {{ header.title }} </text>
            <div class="rightline"></div>
        </div>
        <div class="more" v-if="header.more">
            <text class="moretitle">更多</text>
            <image class="moreimage" :src="morePicUrl"></image>
        </div>
    </div>
</template>
<script>
    export default {
        props:['header'],
        data() {
            return {
                morePicUrl: 'http://demo.sc.chinaz.com/Files/pic/icons/6072/arrow1.png'
            }
        }
    }
</script>
<style scoped>
    .header {
        width: 750px;
        height: 100px;
        align-items: center;
    }

    .titlebox {
        height: 100px;
        flex-direction: row;
        align-items: center;
        /* background-color: green; */
    }

    .leftline {
        height: 1px;
        width: 80px;
        background-color: #000;
        margin-right: 10px;
    }

    .title {
        color: #333;
        font-size: 32px;
    }

    .rightline {
        height: 1px;
        width: 80px;
        background-color: #000;
        margin-left: 10px;
    }

    .more {
        /* background-color: red; */
        flex-direction: row;
        align-items: center;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
    }

    .moretitle {
        font-size: 24px;
        color: #333;
    }

    .moreimage {
        width: 24px;
        height: 24px;
        margin-right: 24px;
        margin-left: 12px;
    }

</style>
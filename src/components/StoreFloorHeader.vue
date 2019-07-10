<template recyclable>
    <div class="header">
        <div class="content">
            <text class="title"> {{ header.title }}</text>
            <text class="subtitle"> {{ header.subtitle }}</text>
            <div class="more" v-if="header.more">
                <text class="moretitle"> {{ moretitle }} </text>
                <image class="moreimgae" :src="morePicUrl"></image>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['header'],
        data: function() {
            return {
                moretitle: '更多',
                morePicUrl: 'http://demo.sc.chinaz.com/Files/pic/icons/6072/arrow1.png'
            }
        }
    }
</script>

<style scoped>

    .header {
        width: 750px;
        height: 88px;
    }

    .content {
        position: absolute;
        left: 18px;
        right: 18px;
        bottom: 20px;
        flex-direction: row;
        align-items: center;
        /* justify-content: center; */
    }

    .title {
        color: #CD7600;
        margin-left:0px;
        font-size: 36px;
    }

    .subtitle {
        color: #333;
        margin-left: 18px;
        font-size: 26px;
    }

    .more {
        position: absolute;
        right: 0;
        bottom: 5px;
        height: 34px;
        flex-direction: row;
        align-items: center;
    }

    .moretitle {
        font-size: 24px;
        color: #333;
        margin-left: 10px;
        margin-right: 5px;
    }

    .moreimgae {
        height: 24px;
        width: 24px;
        margin-right: 10px;
    }

</style>
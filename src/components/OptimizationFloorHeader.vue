<template recyclable>
    <div class="header">
        <div class="content">
            <text class="title"> {{ title }}</text>
            <text class="subtitle"> {{ subtitle }}</text>
            <div class="more">
                <text class="moretitle"> {{ moretitle }} </text>
                <image class="moreimgae" :src="morePicUrl"></image>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                title: '每日优选',
                subtitle: '进店必BUY',
                moretitle: '更多',
                morePicUrl: 'http://demo.sc.chinaz.com/Files/pic/icons/6072/arrow1.png'
            }
        }
    }
    
</script>

<style scoped>
    .header {
        width: 750px;
        height: 116px;
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
        color: #FF9E5A;
        margin-left:0px;
        font-size: 36px;
    }

    .subtitle {
        color: #999;
        font-size: 28px;
    }

    .more {
        position: absolute;
        right: 0;
        bottom: 5px;
        border-radius: 17px;
        height: 34px;
        background-color: #FF9E5A;
        flex-direction: row;
        align-items: center;
        /* justify-content: center; */
    }

    .moretitle {
        font-size: 24px;
        color: #FFF;
        margin-left: 10px;
        margin-right: 5px;
    }

    .moreimgae {
        height: 24px;
        width: 24px;
        margin-right: 10px;
    }

</style>
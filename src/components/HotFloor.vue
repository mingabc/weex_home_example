<template recyclable>
    <div class="floor">
        <div class="header">
            <image class="bgImg" :src="headerImgUrl"></image>
        </div>
        <div v-for="(product, p) in merchandiselist" :key="p" style="margin-bottom:10px;">
        <hot-merchandise  :product="product"></hot-merchandise>
        </div>

        <div class="footer">
            <div class="more">
                <text class="moretitle">查看更多</text>
                <image class="moreimage" :src="morePicUrl"></image>
            </div>
        </div>
        
    </div>
</template>

<script>

    import HotMerchandise from './HotMerchandise';

    export default {
        props:['merchandiselist', 'headerImgUrl'],
        components: {
             'hot-merchandise': HotMerchandise
        },
        data: function() {
            return {
                morePicUrl: 'http://demo.sc.chinaz.com/Files/pic/icons/6072/arrow1.png',
               
            }
        }
    }
    
</script>

<style scoped>

    .floor {
        width: 714px;
        /* height: 887px; */
         /* margin 上 右 下 左 */
        margin: 36px 18px 16px 18px;
        background-color: #EB3232;
        border-radius: 10px;
        padding-bottom: 88px;
    }

    .header {
        width: 714px;
        margin: 0 0 0 0;
        height: 80px;
    }

    .bgImg {
        position: absolute;
        top: -20px;
        left: 0;
        right: 0;
        width: 714px;
        height: 80px;
    }

    .footer {
        width: 714px;
        height: 96px;
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        /* background-color: greenyellow; */
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .more {
        
        height: 44px;
        /* background-color: yellow; */
        flex-direction:row;
        border-radius: 20px;
        border-color: #FFF;
        border-width: 1px;
        align-items: center;
    }

    .moretitle {
        font-size: 24px;
        color: #FFF;
        margin: 10px 0px 10px 15px;
    }

    .moreimage {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        margin-left: 10px;
    }

</style>
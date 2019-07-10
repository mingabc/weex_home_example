<template recyclable>
    <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false" >
        <div v-for="(product, p) in merchandiselist" :key="p">
            <div class="product">
                <image class="pic" :src="product.imgUrl"></image>
                    <text class="title"> {{ product.title }} </text>
                     <text class="desc-title"> {{ product.subTitle }} </text>
            </div>
        </div>
    </scroller>
</template>

<script>
    //店长推荐
    export default {
        data: function() {
            return {
                merchandiselist: [
                    {
                        "imgUrl":"http://img18.fn-mart.com/pic/a56913426d4e1a21aef1/B26n221z_2fdhMZdQz/simaoau9WYeaJG/CsmRs1zslgWAXo3aAAI1eJMs-Pc948.jpg",
                        "pressedImgUrl":"",
                        "picHeight":0,
                        "title":"回味童年",
                        "subTitle":"回味儿时情，欢乐过端午。美味童趣包子。",
                        "linkTypeWX":0
                    },
                    {
                        "imgUrl":"http://img18.fn-mart.com/pic/4b2313426d5d23a8633d/kzH222sTFTLMKMUMt2/59eyoaXRpGfaJY/CsmRsFziH7CAAOIaAAY4PL8AlVo107.jpg",
                        "linkUrl":"fnfresh://openurl?url=https://yxsale.feiniu.com/act/12827",
                        "pressedImgUrl":"",
                        "picHeight":0,
                        "title":"麒麟西瓜",
                        "subTitle":"新鲜采摘，汁多味甜~这个夏天有你真好~",
                        "linkTypeWX":0
                    },
                    {
                        "imgUrl":"http://img18.fn-mart.com/pic/d2ee13426d4619265fc0/knq2nn52FTLMhMulQ2/7imRoGERmyf9na/CsmRtFzsluGAbQPIAALJUbFlXQY189.jpg",
                        "linkUrl":"fnfresh://openurl?url=https://yxsale.feiniu.com/act/13039",
                        "pressedImgUrl":"",
                        "picHeight":0,
                        "title":"熟食买1送1",
                        "subTitle":"千山万水“粽”是情，美味粽子软糯细腻。",
                        "linkTypeWX":0
                    },
                    {
                        "imgUrl":"http://img18.fn-mart.com/pic/059313426d5bdc723270/BzHznn5T_2tlKguMC2/1xmyeaXapaVYMR/CsmRsFzsl6SASuQyAAMtD_hQt6Y484.jpg",
                        "linkUrl":"fnfresh://openurl?url=https://yxsale.feiniu.com/act/13140",
                        "pressedImgUrl":"",
                        "picHeight":0,
                        "title":"粽子满35减10",
                        "subTitle":"粽享端午礼，老字号的经典味道。",
                        "linkTypeWX":0
                    },
                    {
                        "imgUrl":"http://img18.fn-mart.com/pic/6c2513426d4718ab36eb/hzqT221nvntlBdVMfT/1ioyoRXyWa_any/CsmRsFznQ5KAIlfNAAM5Kot2ZQ0602.jpg",
                        "linkUrl":"fnfresh://openurl?url=https://yxsale.feiniu.com/act/13036",
                        "pressedImgUrl":"",
                        "picHeight":0,
                        "title":"蛋蛋驾到",
                        "subTitle":"庆六一，贺端午。美味小鲜蛋，好吃又健康。",
                        "linkTypeWX":0
                    },
                    {
                        "imgUrl":"http://img18.fn-mart.com/pic/56e713426d4b19530ff2/Bz82221zFzCMkgugJz/59oGmGUYBYX9Xi/CsmRs1zreMuAPvXNAAcmwMZu14c240.jpg",
                        "linkUrl":"fnfresh://openurl?url=https://yxsale.feiniu.com/act/13095",
                        "pressedImgUrl":"",
                        "picHeight":0,
                        "title":"烘焙7折起",
                        "subTitle":"榴莲芒果完美搭配，甜而不腻。回味欲罢不能",
                        "linkTypeWX":0
                    }
                    ]
            }
        }
    }
</script>

<style scoped>

     .scroller {
        width: 750px;
        height: 456px;
        /* background-color:#FFF; */
        flex-direction: row;
        padding-left: 8px;
        padding-right: 18px;
        margin-bottom: 18px;
    }

    .product {
        width: 660px;
        height: 456px;
        margin-left: 10px;
        /* flex-direction: row; */
        background-color: #FFF;
        border-radius: 10px;
    }
    
    .pic {
        width: 660px;
        height: 320px;
        background-color: purple;
    }

    .title {
        width: 612px;
        font-size: 30px;
        color: #000;
        lines: 1;
        margin: 15px 24px 0 24px;
        text-overflow: ellipsis;
    }

    .desc-title {
         /* margin 上 右 下 左 */
         width: 612px;
        font-size: 24px;
        color: #333;
        margin: 15px 24px 0 24px;
        lines: 1;
        text-overflow: ellipsis;
    }

</style>
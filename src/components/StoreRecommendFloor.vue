<template recyclable>
    <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false" >
        <div v-for="(product, p) in merchandiselist" :key="p">
            <div class="product">
                <image class="pic" :src="product.imgUrl"></image>
                <div class="content">
                    <text class="title"> {{ product.title }} </text>
                    <div class="price-box">
                         <text class="price" style="font-size: 28px">¥</text>
                         <text class="price" >{{ product.price }}</text>
                         <text class="unit">/ {{ product.unit }}</text>
                         <text class="originprice" v-if="product.referencePrice !== undefined"> ¥{{  product.referencePrice }} </text>
                    </div>
                    <div class="desc-box">
                        <text class="desc-title"> {{ product.sellPoint }} </text>
                    </div>

                </div>
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
                         "saleOut":0,
                        "unit":"盒",
                        "imgUrl":"http://img17.fn-mart.com/pic/9080133fbdb219144cf1/kTH222sTvTtMhdUlX2/7YoamGdyZiWGui/CsmRsVriioyAao6MAAaDA_Ej4jc328_org_q100s520.jpg",
                        "subTitle":"礼品粽 送礼佳品 盒装经典甜粽咸粽组合",
                        "referencePrice":"99",
                        "goodsID":"P2417100000039377",
                        "title":"五芳斋情系五芳礼品粽礼盒装1.4千克",
                        
                        "price":"98",
                        "sellPoint":"【店长说】：“十种经典口味，丰富味觉享受，送礼倍独特！”",
                        "soldPercent":0
                    },
                    {
                         "saleOut":0,
                        "unit":"份",
                        "imgUrl":"http://img17.fn-mart.com/pic/66c81342712c2382323a/B2Hzzz5TvnfdBdZdJn/7YSGmapiWYhGdy/CsmRs1ysPRaAQzTQAAFOcBYu5b4548_org_q100s520.jpg",
                        "subTitle":"口感绵密软糯、香甜，吃法多样",
                        "goodsID":"P0919050000195546",
                        "title":"板栗南瓜 900g/个",
                        "isHasOption":0,
                        "price":"29.5",
                        "linkUrl":"fnfresh://productdetail?smseq=P0919050000195546",
                        "newComeIdent":0,
                        "sellPoint":"【店长说】：“粉糯易于入口，肉质橘黄色绵软，吃法多样，美味健康。”",
                        "soldPercent":0
                    },
                    {
                        "saleOut":0,
                        "unit":"只",
                        "imgUrl":"http://img17.fn-mart.com/pic/2b1c133f01811adc463f/hTqTnns2DnLdBgZMQT/5YmRSyk9OaDaWy/CsmRtFvFVDKAL3c1AAMkTC2mGOc400_org_q100s520.jpg",
                        "subTitle":"爆浆流心超诱人，奶盖直接覆盖住整个蛋糕，口感爽滑",
                        "referencePrice":"16.4",
                        "goodsID":"P1018100000147354",
                        "title":"爆浆奶盖蛋糕 100克/只",
                        "isHasOption":0,
                        "linkUrl":"fnfresh://productdetail?smseq=P1018100000147354",
                        "price":"8.2",
                        "newComeIdent":0,
                        "sellPoint":"【店长说】：“天王盖地虎，奶盖配蛋糕，治愈系网红给你全新至柔的味蕾体验！”",
                        "soldPercent":0
                    },
                    {
                        "saleOut":0,
                        "unit":"份",
                        "imgUrl":"http://img17.fn-mart.com/pic/3d0e1340b7ba282649c4/hn8zzz7zvntgBdZlE2/7imRoGPxpyVama/CsmRtFuDugSAJyxnAAhNWBVq5hM778_org_q100s520.png",
                        "subTitle":"新鲜茭白，清香爽口，荤素百搭",
                        "referencePrice":"8.2",
                        "goodsID":"P0418010000069010",
                        "title":"茭白 400g/份（高瓜）",
                        "isHasOption":0,
                        "linkUrl":"fnfresh://productdetail?smseq=P0418010000069010",
                        "price":"7.38",
                        "newComeIdent":0,
                        "sellPoint":"【店长说】：“纯净水乡供养，新鲜直达，细腻爽口，回味甘甜，荤素百搭！”",
                        "soldPercent":0
                    },
                    {
                        "saleOut":0,
                        "unit":"500g",
                        "imgUrl":"http://img18.fn-mart.com/pic/921d1340b74edce84103/B28nnn7z_2CMBguljz/s9maoanyfGdyZR/CsmRslt6HfSAHhSvAAJAUDSTaEs306_org_q100s520.jpg",
                        "subTitle":"脆嫩多汁，甜蜜爽口，来自新疆",
                        "goodsID":"P0118080000129417",
                        "title":"西洲蜜瓜1粒装（称重）",
                        "isHasOption":0,
                        "price":"10.6",
                        "linkUrl":"fnfresh://productdetail?smseq=P0118080000129417",
                        "newComeIdent":0,
                        "sellPoint":"【店长说】：“果香馥郁，脆嫩多汁，甜蜜爽口，这个夏天有你真好~”",
                        "soldPercent":0
                    }]
            }
        }
    }
</script>

<style scoped>

     .scroller {
        width: 750px;
        height: 304px;
        /* background-color:#FFF; */
        flex-direction: row;
        padding-left: 8px;
        padding-right: 18px;
        margin-bottom: 18px;
    }

    .product {
        width: 666px;
        height: 304px;
        margin-left: 10px;
        flex-direction: row;
        background-color: #FFF;
        border-radius: 10px;
    }
    
    .pic {
        width: 240px;
        height: 240px;
        margin-top: 34px;
        margin-left: 20px;
        background-color: purple;
    }

    .content {
         /* margin 上 右 下 左 */
        height: 304px;
        width: 370px;
        margin: 32px 18px 0 18px;
        /* background-color: green; */
    }

    .title {
        font-size: 30px;
        color: #000;
        lines: 1;
        text-overflow: ellipsis;
    }

     .price-box {
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 28px;
        color: #D7063B;
        flex-direction:row;
        align-items: center;
    }

    .price {
        color: #D7063B;
        font-size: 40px;
    }

    .unit {
        color: #999;
        font-size: 28px;
    }

    .originprice {
        margin-left: 20px;
        font-size: 28px;
        color: #999;
        text-decoration: line-through;
    }

    .desc-box {
        width: 370px;
        height: 147px;
        margin-top: 0px;
        background-color: #FFE566;
    }

    .desc-title {
         /* margin 上 右 下 左 */
        font-size: 26px;
        color: #481F06;
        margin: 22px 12px 0 12px;
        lines: 3;
        text-overflow: ellipsis;
    }

</style>
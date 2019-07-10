<template recyclable>
    <div class="product">
        <image class="image" :src="product.imgUrl"></image>
        <div class="content">
            <text class="title text"> {{ product.title }} </text>
            <text class="subtitle text" v-if="product.subtitle !== undefined"> {{ product.subtitle }} </text>
            <div class="sale-pogress">
                <div class="progress">
                    <div class="progress-inner" :style="{ width: product.progress * 200 / 100 }"></div>
                     <text class="progress-remain">{{product.progress}} %</text>
                </div>
                <text class="sale-progress-got" style="margin-left:12px;">{{ product.soldNumber}}</text>
            </div>
            <div class="tag-content" v-if="product.corners.desc !== undefined">
                <text class="tag"> {{ product.corners.desc }}</text>
            </div>
            <div class="bottom">

            <!-- 价格富文本，未来需要用richtext尝试替代 -->
             <div class="price-box">
                <text class="price" style="font-size: 20px">¥</text>
                <text class="price">{{ product.price }}</text>
                <text class="unit">/ {{ product.unit }}</text>

                 <text class="originprice" v-if="product.referencePrice !== undefined"> ¥{{  product.referencePrice }} </text>
             </div>
            </div>

             <image class="addshopcart" :src="addshopcartIconUrl"></image>

        </div>

    </div>
    
</template>
<script>
    export default {
        props:['product'],
        data: function() {
            return {
                addshopcartIconUrl:'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558967321880&di=1ba1567489979fe2f89b66979fe577b4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F57%2F93%2F24%2F58facdf0a69a0.png'
            }
        }
    }
</script>

<style scoped>

    .product {
        width: 694px;
        height: 232px;
        margin-left: 10px;
        margin-right: 10px;
        flex-direction: row;
        background-color: #FFF;
        border-radius: 10px;
    }

    .image {
        width: 200px;
        height: 200px;
        /* margin 上 右 下 左 */
        margin: 16px 0px 16px 16px;
    }

    .content {
        flex: 1;
        /* background-color: greenyellow; */
        height: 232px;
        margin-left: 16px;
    }
    .text {
         margin-right: 16px;
        lines: 1;
        text-overflow: ellipsis;
    }

    .title {
        color: #000;
        font-size: 28px;
        margin-top: 16px;
       
    }

    .subtitle {
        color: #999;
        font-size: 24px;
        margin-top: 8px;
    }

    .sale-pogress {
        position: absolute;
        top: 97px;
        left: 0;
        margin-top: 8px;
        flex-direction:row;
        align-items: center;
        margin-left: 2px;
    }
    .progress {
        flex-direction:row;
        width: 200px;
        height: 24px;
        background-color: #FFDAD1;
        border-radius: 16px;
        border-width: 1px;
        border-color: #FF5756;
    }

    .progress-inner {
        position: absolute;
        height: 24px;
        left: 0;
        border-radius: 16px;
        background-color: #FF5679;
    }

    .progress-remain {
        position: absolute;
        left: 8px;
        line-height: 20px;
        color: #FFFFFF;
        font-size: 20px;
    }

    .sale-progress-got {
        color: #D7063B;
        font-size: 22px;
    }

    .tag-content {
      position: absolute;
      left: 0;
      top: 140px;
       flex-direction:row;
       align-items: center;
       margin-top: 8px;
    }

    .tag {
        height: 30x;
        color: #ff5756;
        font-size: 20px;
        border-color: #ff5756;
        border-width: 1px;
        padding: 0px 2px 0px 2px;
    }

    .bottom {
        /* margin-top: 10px; */
        /* background-color: green; */
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        flex-direction:row;
        align-items: center;
        /* background-color: greenyellow; */
    }

    .price-box {
        margin-top: 12px;
        margin-bottom: 0px;
        font-size: 28px;
        color: #D7063B;
        flex-direction:row;
        align-items: center;
    }

    .price {
        color: #D7063B;
    }

    .unit {
        color: #999;
        font-size: 20px;
    }

    .originprice {
        margin-left: 20px;
        font-size: 24px;
        
        color: #999;
        text-decoration: line-through;
    }

    .addshopcart {
        position: absolute;
        margin-bottom: 10px;
        right: 16px;
        bottom: 16px;
        width: 60px;
        height: 60px;
    }

</style>

<template recyclable>
    <div class="product">
    <!-- <text>哈哈哈哈哈哈哈哈</text> -->
         <image class="productpic" :src="product.imgUrl" ></image>
            <text class="title">{{product.title }}</text>
            <text class="originprice" v-if="product.referencePrice !== undefined"> ¥{{  product.referencePrice }} </text>
            <div class="bottom">

             <div class="price-box">
                <text class="price" style="font-size: 20px">¥</text>
                <text class="price">{{ product.price }}</text>
                <text class="unit">/ {{ product.unit }}</text>
             </div>
            <image class="addshopcart" :src="addshopcartIconUrl"></image>
            </div>
    </div>
</template>
 <!-- 价格富文本，未来需要用richtext尝试替代 -->
<script>
// VerticalMerchandise
    export default {
        props: ['product'],
        data: function() {
            return {
                addshopcartIconUrl:'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558967321880&di=1ba1567489979fe2f89b66979fe577b4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F57%2F93%2F24%2F58facdf0a69a0.png'
            }
        }
    }
    
</script>

<style scoped>

    .product {
        width: 190px;
        height: 362px;
        margin: 12px 12px 10px 10px;
        /* background-color: red; */
    }

    .productpic {
        width: 190px;
        height: 190px;
    }

    .title {
        margin: 12px 0px 0px 0px;
        font-size: 24px;
        color: #333;
        lines: 1;
        text-overflow: ellipsis;
    }

    .originprice {
        margin-top: 12px;
        margin-right: 10px;
        font-size: 24px;
        color: #999;
        text-decoration: line-through;
    }

    .bottom {
        /* margin-top: 10px; */
        /* background-color: green; */
        position: absolute;
        left: 0;
        right: 0;
        bottom: 15px;
        flex-direction:row;
        align-items: center;
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
    }

    .unit {
        color: #999;
        font-size: 20px;
    }

    .addshopcart {
        position: absolute;
        margin-bottom: 3px;
        right: 0px;
        width: 50px;
        height: 50px;
    }

</style>
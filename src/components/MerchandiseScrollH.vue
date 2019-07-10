
<template recyclable>
    <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false" >
        <div v-for="(products, p) in merchandiselist" :key="p">
            <merchandise :product="products" ></merchandise>
        </div>
    </scroller>
</template>


<script>
    import VerticalMerchandise from './VerticalMerchandise';

    export default {
        props: ['merchandiselist'],
        components: {
             merchandise: VerticalMerchandise
        },
        data: function() {
            return {
                addshopcartIconUrl:'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558967321880&di=1ba1567489979fe2f89b66979fe577b4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F57%2F93%2F24%2F58facdf0a69a0.png'
            }
        },
        methods: {
          
        },
        computed: {

        }   
    }
</script>

<style scoped>
    .scroller {
        width: 714px;
        height: 362px;
        background-color:#FFF;
        flex-direction:row;
        margin-left: 18px;
    }
</style>

<template recyclable>
    <div class="grid">
        <div class="floor" v-for="(floor, f) in floors" :key="f">
            <div  v-for="(product, p) in floor" :key="p">
                 <merchandise :product="product" style=" width: 100px; height: 362px;"></merchandise>
            </div>
    </div>
    </div>
    
</template>
<!-- 九宫格商品 -->
<script>
    import VerticalMerchandise from './VerticalMerchandise';
    export default {
        props: ['floors'],
        components: {
             merchandise: VerticalMerchandise
        },
        data: function() {
            return {
                // floors:
                
                // ]
            }
        }
    }
</script>
<style scoped>
    .grid {
        width: 714px;
        height: 734px;
         /* margin 上 右 下 左 */
         margin: 0 18px 18px 18px;
         background-color: #FFF;
         border-radius: 10px;
         /* flex-direction: row; */
       
    }

    .floor {
        width: 714px;
        height: 362px;
        /* background-color: green; */
        flex-direction:row;
        justify-content: space-around;
    }

</style>

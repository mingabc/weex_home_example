<template recyclable>
    <div class="app-cell">
        <div class="app-box" v-for="(app, a) in apps" :key="a">
            <image class="app-icon" resize="cover" :src="app.imgUrl"></image>     
            <text class="app-title"> {{ app.title }} </text>  
        </div>
    </div>
</template>

<script>
    export default {
        props:['apps'],
        data() {
            return {
                 
            }
        }
    }
</script>

<style scoped>
    .app-cell {
        flex-direction: row;
        justify-content: space-around;
        width: 714px;
        height: 180px;
        background-color: #FFF;
    }

    .app-box {
        width: 135px;
        padding: 15px;
        align-items: center;
    }

    .app-title {
        font-size: 20px;
        text-align: center;
        padding-top: 10px;
        color: #999;
    }

    .app-icon {
        width: 120px;
        height: 120px;
        /* background-color:#FFF; */
    }

</style>
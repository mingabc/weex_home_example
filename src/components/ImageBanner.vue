<template recyclable>
     <image class="banner" :src="banner"></image>
</template>
   
<script>
    export default {
        props:['banner']
    }
</script>

<style scoped>
    .banner {
        width: 750px;
        height:300px;
        background-color:#FFF;
    }
</style>
<template recyclable>
    <div class="image-silder1">
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in pictures">
        <image class="image" resize="stretch" :src="img.src"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>
<script>
    export default {
        props:['pictures']
    }
</script>

<style scoped>
     .image {
        width: 750px;
        height: 380px;
    }

    .slider {
        margin: 0px;
        width: 750px;
        height: 380px;
        border-width: 0px;
        border-style: solid;
        border-color: #41B883;
    }

    .image-silder1 {
        width: 750px;
        height: 380px;
        background-color: #318098;
    }

    .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 60px;
        background-color: rgba(0, 0, 0, 0);
        item-color: #FFF;
        item-selected-color: #F44343;
    }

</style>
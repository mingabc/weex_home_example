<template recyclable>
         <scroller class="elevator" scroll-direction="horizontal" show-scrollbar="false">
               <div class="elevator-item" v-for="(item, index) in items"  :key="index" >
                <text class="title" :style="{ color: titleColor }">{{ item.title }}</text>
                <text class="subtitle">{{ item.subtitle }}</text>
              </div>
        </scroller>     
</template>

<script>
    export default {
        methods: {
                titleColor: function() {
                    return red;
                }
        },
        data: function() {
            return {
                selectIndex:0,
                
                items: [
                    {
                        title: '精选',
                        subtitle: '猜你喜欢',
                        selected: true
                    },
                    {
                        title: '乳品',
                        subtitle: '生活好物',
                        selected: false
                    },
                    {
                        title: '水果',
                        subtitle: '实惠多多',
                        selected: false
                    },
                    {
                        title: '零食',
                        subtitle: '冷链配送',
                        selected: false
                    },
                    {
                        title: '水果',
                        subtitle: '超市直达',
                        selected: false
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .header {
        /* position: fixed;
        top: 0px;
        left: 0px;
        right: 0px; */
        width: 750px;
        height: 300px;
        background-color: #FFF;
        /* flex-direction: row; */
    }

    .elevator {
      width: 750px;
       height: 100px;
       /* padding-left: 15px;
       padding-right: 15px; */
       background-color: #39f;
       flex-direction: row;
       /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
  }
  .elevator-item {
    line-height: 90px;
    margin: 0px 15px;
  }
  .elevator-title {
    font-size: 36px;
    font-weight: 36px;
    color: #fff;
    line-height: 90px;
  }
  .item-text {
    font-size: 36px;
    color: #fff;
    line-height: 90px;
  }

    .title {
        font-size: 36px;
        color: #333;
    }

    .subtitle {
        /* margin-top: 10px;
        margin-bottom: 10px; */
        font-size: 24px;
        color: #666;
    }

</style>
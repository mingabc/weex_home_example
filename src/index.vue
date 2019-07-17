<template>
  <div class="wrapper">
    <home class="home"></home>
  </div>
</template>

<script>
import Home from '@/components/Home'

const modal = weex.requireModule('modal') || {};
const stream = weex.requireModule('stream') || {};
export default {
  name: 'App',
  components: {
    'home': Home
  },
  data () {
    return {
      posttitle:'我是啊哈哈哈哈哈哈',
      content:'我是内容区域'
    }
  },
  // computed:{
  //     content: {
  //       get: function() {
  //         return this.result
  //          return '嘻嘻嘻嘻00--------'
  //       }
  //     }
  // },
  methods: {
   
  }
}
</script>

<style scoped>
  .wrapper {
    width: 750px;
  }
  
  .home {
    width: 750px;
    background-color: #EEE;
  }

</style>

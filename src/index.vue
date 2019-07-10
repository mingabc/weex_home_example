<template>
  <div class="wrapper">
    <!-- <text class="button" @click="btnclick">{{ posttitle }}</text> -->
    <home class="home"></home>
  </div>
</template>

<script>
import Home from '@/components/Home'

const modal = weex.requireModule('modal') || {};
const stream = weex.requireModule('stream') || {};
const E68API = 'http://b2b-newapi.beta1.fn/homePage/getStoreHot';
const YXAPI = "http://www-yxapp.beta1.fn/home/homePage/i121";

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
    btnclick: function() {
     /*      
        const e68DataPara = {"head":{"viewSize":"750x1334","apiVersion":"1.1.8","clientId":"","channel":"","deviceId":"FA9E4F61-8A5E-47E6-B270-8573BCB61251","osType":"2","deviceRule":"2","areaCode":"","utoken":""},"body":{"rt_no":"240406","page":2}}
        const yxDataPara = {"body":{"type":0,"storeCode":"1108","screenNum":1},"apiVersion":"i1.21","httpsEnable":1,"scopeType":1,"time":"1558345487","deviceId":"6E101FA6-97AF-42E8-8E9E-924D4C0B4B9E","source":"yx","networkType":"wifi","osType":"2","token":"deffaf978e7a5323aa66820bde8682ba","isSimulator":false,"reRule":"2.000000","businessType":1,"appVersion":"1.2.3","viewSize":"750x1334"}//{"body":{"type":0,"storeCode":"1108","screenNum":1},"apiVersion":"i1.21","httpsEnable":1,"scopeType":1,"time":"1558339576","deviceId":"FA9E4F61-8A5E-47E6-B270-8573BCB61251","source":"yx","networkType":"wifi","osType":"2","token":"6fd87427bf2ce09a6caf377035de02ee","isSimulator":true,"reRule":"2.000000","businessType":1,"appVersion":"1.2.3","viewSize":"750x1334"}
        const datas = encodeURI(JSON.stringify(yxDataPara));

        const bodyParams = {
          data: datas
        }
        const self = this;
        const body = 'data='+datas+'&paramsMD5=Lh4rm29PuaJeRO5SPNgl+etBROIKAN++3smdIE/klYo=';//JSON.stringify(bodyParams);
        this.content = body;
        stream.fetch({
          method: 'POST',
          url: YXAPI,
          type:'json',
          body: body
        }, function(ret) {
          if(!ret.ok){
            modal.toast({
              message: '提交失败' + ret.status,
              duration: 3
            });
          }else{
            modal.toast({
              message: '提交成功!' + ret.data,
              duration: 1
            });
            self.content = JSON.stringify(ret.data)
            
          }
        })*/

          
    }
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

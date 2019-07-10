<template recyclable>
    <div class="deparment">
        <div class="store">
            <div class="storeitem" v-for="(item, i) in store" :key="i">
                    <image class="storeimg" :src="item.iconUrl"></image>
                    <text class="storetxt"> {{ item.name }} </text>
            </div>
        </div>

        <app-list :apps="applist[0]"></app-list>
        <app-list :apps="applist[1]"></app-list>

        <!-- <div class="app" v-for="(item, i) in applist" :key="i">
         <app-list :apps="item"></app-list>
        </div> -->
        
        <div class="bottom">
            <image class="noticeicon" :src="notice.iconUrl"></image>
            <text class="noticetxt"> {{ noticeTxt }} </text>
        </div>
    </div>
</template>

<script>

   import AppList from './AppList'

   export default {
        props:['departmentInfo'],
         components: {
             'app-list': AppList,
        },
        data() {
            return {
                currentIndex: 0,
                noticeTxt: '',
            }
        },
        computed: {
            notice: {
                get: function() {
                    return this.departmentInfo.notice;
                }
            },
            applist: {
                get: function() {
                    return this.departmentInfo.applist;
                }
            },
            store: {
                get: function() {
                    return this.departmentInfo.store;
                }
            }
        },
        
        created: function () {

            if (this.notice.textlist.length > 0) {
                 this.noticeTxt = this.notice.textlist[this.currentIndex].name;
            }
           
            //设置快报定时器
            setInterval( () => {
                if(this.notice.textlist == null || this.notice.textlist.length == 0){
                    this.noticeTxt = ''
                    return
                }
                let length = this.notice.textlist.length ;
                if(this.currentIndex >= length) {
                    this.currentIndex = 0;
                }else {
                    this.currentIndex++;
                }
                this.noticeTxt = this.notice.textlist[this.currentIndex].name;

            }, 2000);
        }
    }

    
</script>

<style scoped>

 .deparment {
     width: 714px;
     height: 510px;
     flex-direction: column;
     background-color: white;
     border-top-left-radius: 20px;
     border-top-right-radius: 20px;
     margin: 18px 18px 18px 18px;
     flex-wrap: wrap;
}
  .store {
      width: 714px;
      height: 70px;
      flex-direction: row;
      justify-content: space-around;
  }

  .storeitem {
      flex-direction: row;
      /* background-color: red; */
      align-items: center;
  }

  .storeimg {
      width: 30px;
      height: 30px;
  }
  .storetxt {
      font-size: 20px;
      color: #333;
  }

   .app {
      width: 714px;
      height: 180px;
  } 

  .bottom {
      width: 714px;
      height: 70px;
      align-items: center;
      flex-direction: row;
  }

  .noticeicon {
      width: 118px;
      height: 30px;
      margin-left: 12px;
  }

  .noticetxt {
      margin-left: 24px;
      width: 524px;
      font-size: 24px;
      color: #333;
      lines: 1;
      text-overflow:ellipsis;
  }


</style>

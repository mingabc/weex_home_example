<template recyclable>
    <div class="floor">
        <slider class="slider" infinite="false">
       <div v-for="(grid, g) in grids" :key="g">
           <grid-merchandise :floors="grid"></grid-merchandise> 
       </div>
        <indicator class="indicator"></indicator>
    </slider>
    </div>
     
</template>

<script>
    //每日优选
    import GridMerchandiseFloor from './GridMerchandiseFloor';
    export default {
        // props:['grids'],
        components: {
             'grid-merchandise': GridMerchandiseFloor
        },
        data: function() {
            return {
                grids: [
                    [[
                        {
                         unit: '份',
                        referencePrice: '12.6',
                        title: '千禧 500g/份（小番茄）',
                        newComeIdent: 0,
                        corners:{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省2.7元",
                            "startColor":"#FF1684"
                        },
                         price: '9.9',
                         imgUrl: 'http://img17.fn-mart.com/pic/0a6913422e80dc207511/hz8zzz7nFTfdBlUgcz/7YoamGVY0ivGQa/CsmRtFy_uPeABSdaAAGrvthCISw754_org_q100s520.jpg',
                    },
                    {
                         unit: '500g',
                         progress: 88,
                         soldNumber:"已抢46件",
                         subtitle: '采用鲜鸡与奥尔良酱料精心研制入味,香味与口感兼具',
                        referencePrice: '3.98',
                        title: '东台8424西瓜1粒装（称重）',
                        newComeIdent: 0,
                        corners:{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省0.7元",
                            "startColor":"#FF1684"
                        },
                         price: '3.28',
                         imgUrl: 'http://img18.fn-mart.com/pic/35d413426c7d259a960d/k2q2nn72FzflKgUMtT/sxeGeaOR0aoRPR/CsmRsFzbwmmAVbtFAAIr_ya4szI297_org_q100s520.jpg',
                    },
                    {
                         unit: '盒',
                         progress: 88,
                         soldNumber:"已抢46件",
                         subtitle: '采用鲜鸡与奥尔良酱料精心研制入味,香味与口感兼具',
                        referencePrice: '',
                        title: '蒙牛新鲜工厂鲜牛乳 950ml/盒',
                        newComeIdent: 0,
                         price: '15.9',
                         imgUrl: 'http://img17.fn-mart.com/pic/47f813422e3d2d30c58b/K2qTnn5TD2tghguMEn/sYSReGOaJRLaoR/CsmRtFy5qBSAXvkhAAFYnO_AVtI727_org_q100s520.jpg',
                    }
                    ],
                    [
                        {
                         unit: '盒',
                         progress: 88,
                         soldNumber:"已抢46件",
                         subtitle: '采用鲜鸡与奥尔良酱料精心研制入味,香味与口感兼具',
                        referencePrice: '39.8',
                        title: '现制 冰鲜精制牛霖 350g/盒',
                        newComeIdent: 0,
                        "price":"29.8",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省10元",
                            "startColor":"#FF1684"
                        },
                         imgUrl: 'http://img17.fn-mart.com/pic/06161341b0b3230c163b/B26zzz5TDnLgklUdET/s9maoavy_GPyfR/CsmRtFxhF8mAE8QLAAPreez3X2U277_org_q100s520.jpg',
                    },
                    {
                        "imgUrl":"http://img17.fn-mart.com/pic/a28d1341b0ebc49e089e/kT6zzz7zv2fghgVdcT/79eGmGKxEGTaZx/CsmRtFxkvBiAA6nTAAHJu-pJAEE133_org_q100s520.jpg",
                        "unit":"盒",
                        "price":"12.8",
                        "title":"鸿轩农业草鸡蛋15枚(637克)/盒",
                        },
                    {
                          "unit":"组",
                        "imgUrl":"http://img18.fn-mart.com/pic/56ca13422e4c285ea650/B26n221z_2fdhMZdQz/1xmaoGPGzGOGcy/CsmRs1yjIyKAZdZWAALN3R-mMAQ081_org_q100s520.jpg",
                        
                        "goodsID":"P0219040000185736",
                        "title":"马兰头大馄饨 28g*10只/组",
                        "price":"13.4",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"第2件5折",
                            "startColor":"#FF1684"
                        }
                    }
                    ]
                    ],
                    [[
                        {
                          "unit":"包",
                        "imgUrl":"http://img18.fn-mart.com/pic/c6d71340b78818aa91a2/BTHnzz5z_ztMBgUd3n/1iSGSa2aCyUYZa/CsmRsVt_Zv2AHIrjAAIjjUcAXUA442_org_q100s520.jpg",
                        "referencePrice":"88",
                        "goodsID":"P2117060000016372",
                        "title":"（冰鲜）三文鱼300g/包",
                        "price":"69",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省19元",
                            "startColor":"#FF1684"
                        }
                    },
                    {
                          "unit":"份",
                        "imgUrl":"http://img17.fn-mart.com/pic/d42f1340b7c82a7d32c9/Kn6z2212FTflkMVMQz/7imGeaXxCaCxoG/CsmRtFuFECOAHeWdAAq1VBHzuH8283_org_q100s520.png",
                       
                        "referencePrice":"10.5",
                        "goodsID":"P0418010000069002",
                        "title":"毛豆 450g/份",
                        "price":"9.45",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"满3件7折",
                            "startColor":"#FF1684"
                        }
                    },
                    {
                         "unit":"份",
                        "imgUrl":"http://img18.fn-mart.com/pic/37e613426c781c372738/hT82227nvnClKMZlQT/sioRmRQiERKxVi/CsmRs1wQ8SiAIbtsAAHeWnKB77Q873_org_q100s520.jpg",
                       
                        "referencePrice":"16.9",
                        "goodsID":"P1419050000196098",
                        "title":"云南红提 500g",
                        "price":"11.9",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省5元",
                            "startColor":"#FF1684"
                        }
                    }
                    ],
                    [
                        {
                        "unit":"组",
                        "imgUrl":"http://img18.fn-mart.com/pic/4e0a133f017224e072c2/knq2nn52FTLMhMulQ2/5YSGeGKRMaVYLy/CsmRs1vEO1uAAJOjAAJXCK7s7r0521_org_q100s520.jpg",
                       
                        "referencePrice":"13.1",
                        "goodsID":"P1817100000027734",
                        "title":"卡士鲜酪乳三联杯原味100g*3杯/组",
                        "price":"11.8",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省1.3元",
                            "startColor":"#FF1684"
                        }
                    },
                    {
                        "unit":"袋",
                        "imgUrl":"http://img18.fn-mart.com/pic/76b9133ffc09255ceb36/BTHTzz1zFztdBgugjz/5YeaeGlGOx0G0i/CsmRslsGY8qAAi54AAHcRd1BJEM152_org_q100s520.jpg",
                        
                        "referencePrice":"20.7",
                        "goodsID":"P2417100000039703",
                        "title":"五芳斋蛋黄鲜肉粽280克(2只)/袋",
                        "price":"16.8",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省3.9元",
                            "startColor":"#FF1684"
                        }
                        },
                    {
                         "unit":"500g",
                        "imgUrl":"http://img18.fn-mart.com/pic/d0c113426c5522f6c104/K2qTnn5TD2tghguMEn/79oaSRKxBRQxpa/CsmRs1zZD2yASx9RAAC7SCvXb20043_org_q100s520.jpg",
                        
                        "referencePrice":"3.5",
                        "goodsID":"P0919050000195559",
                        "title":"土豆（马铃薯）（称重）",
                        "price":"2.45",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"7折",
                            "startColor":"#FF1684"
                        }
                    }
                    ]
                    ],
                    [[
                        {
                          "unit":"瓶",
                        "imgUrl":"http://img18.fn-mart.com/pic/21861341f4221dd8cbd7/hTqTnns2DnLdBgZMQT/59oGmGBGBYu9zG/CsmRtFyDP5yAV4qDAACmZVboqOk162_org_q100s520.jpg",
                        
                        "goodsID":"P0518040000092479",
                        "title":"伊利畅轻草莓猕猴桃风味发酵乳 215克/瓶",
                        "price":"8.6",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"第2件5折",
                            "startColor":"#FF1684"
                        }
                    },
                    {
                         "unit":"份",
                        "imgUrl":"http://img18.fn-mart.com/pic/e91f1341726327a93773/hnqzTT12_ntdklVdE2/7ieySGXiuiWigy/CsmRtFw8R1OAI721AAI0T58NHrk365_org_q100s520.jpg",
                    
                        "referencePrice":"39.9",
                        "goodsID":"P1019010000176293",
                        "title":"（鲜活）小龙虾500克/份 约17-25只",
                        "price":"19.9",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省20元",
                            "startColor":"#FF1684"
                        }
                    },
                    {
                        "unit":"盒",
                        "imgUrl":"http://img17.fn-mart.com/pic/1d1313422e812d12c7e0/KzHz2272DzCdBMVgL2/79oaSRXGeR_aTa/CsmRsFzAPmqABGraAAJVglGVtg0491_org_q100s520.jpg",
                       
                        "goodsID":"P1618030000086293",
                        "title":"迷你梦龙香草松露混合口味冰淇淋255g6支装",
                        "price":"34",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"买1赠1",
                            "startColor":"#FF1684"
                        }
                    }
                    ],
                    [
                        {
                          "unit":"包",
                        "imgUrl":"http://img17.fn-mart.com/pic/282813422e7122fefba0/K2qTnn5TD2tghguMEn/59mGeRBxh9u92a/CsmRtFy-sWaAeRj5AAQw9WZmTsE729_org_q100s520.jpg",
                        
                        "referencePrice":"13.5",
                        "goodsID":"P1817100000026730",
                        "title":"简装果仁蛋糕 410g/包",
                        "price":"6.9",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"省6.6元",
                            "startColor":"#FF1684"
                        }
                    },
                    {
                        "unit":"盒",
                        "imgUrl":"http://img17.fn-mart.com/pic/d2621341efae22948457/K282nn7n_TLMKlVgcn/5xmRoaSRLGFR2a/CsmRs1yPN2iAIYlQAAU3rW5sLUI604_org_q100s520.jpg",
                        
                        "goodsID":"P2818040000100694",
                        "title":"【即食】特色小龙虾十三香味 500g/盒",
                        "price":"66",
                        "corners":{
                            "textColor":"#FF4400",
                            "bgColor":"#FFFDCB",
                            "borderColor":"#FFCF6B",
                            "endColor":"#FF4747",
                            "desc":"买1赠1",
                            "startColor":"#FF1684"
                        }
                        },
                    {
                         "saleOut":0,
                        "unit":"箱",
                        "imgUrl":"http://img01.fn-mart.com/C/main_item/2015/0213/201502C130000367/_607282459_org_q100s520.jpg",
                        "referencePrice":"49.4",
                        "goodsID":"P2017070000018312",
                        "title":"蒙牛特仑苏纯牛奶 250ml*12盒/箱",
                        "price":"49.3",
                        
                    }
                    ]
                    ]
                ]
            }
        }
    }
</script>

<style scoped>

    .floor {
        width: 714px;
        height: 760px;
        margin-left: 18px;
        margin-right: 18px;
        margin-bottom: 18px;
        background-color:#FFF;
        /* flex-direction:row; */
    }
    .scroller {
        width: 714px;
        height: 724px;
        margin-left: 18px;
        margin-right: 18px;
        background-color:#FFF;
        flex-direction:row;
    }

    .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
    height: 60px;
    /* background-color: #; */
    item-color: #EEEEEE;
    item-selected-color: #F25C28;
  }

</style>
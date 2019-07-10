<template>
  <recycle-list class="list" for="(item, index) in dataList"  switch="type" @loadmore="loadmore"> 
    <cell-slot case="imageslider" :key="index">
        <image-slider class="imageslider" :pictures="item.pictures"></image-slider>
     </cell-slot>
     <cell-slot  case="imagebanner" :key="index">
        <imagebanner class="imagebanner" :banner="item.bannerimg"></imagebanner>
     </cell-slot>
        <cell-slot case="department" :key="index">
        <department :departmentInfo="item.departmentInfo"></department>
     </cell-slot> 
    <cell-slot case="merchandiselist-horizontal" :key="index">
      <merchandiselist-horizontal :merchandiselist="item.merchandiselist"></merchandiselist-horizontal>
    </cell-slot>
    <cell-slot case="floor-banner" :key="index">
      <image class="floorbanner" :src="item.picUrl"></image>
    </cell-slot>
    <cell-slot case="titleheader" :key="index">
      <title-header :header="item.header"></title-header>
    </cell-slot>
    <cell-slot case="hot-floor" :key="index">
      <hot-floor :merchandiselist="item.merchandiselist" :headerImgUrl="item.headerImgUrl"></hot-floor>
    </cell-slot>
    <cell-slot case="grid-merchandise-floor" :key="index">
      <grid-merchandise-floor :floors="item.merchandiselist"></grid-merchandise-floor>
    </cell-slot>
    <cell-slot case="grid-scroll-floor" :key="index">
      <grid-scroll-floor></grid-scroll-floor>
    </cell-slot>
    <cell-slot case="optimization-floor-header" :key="index">
      <optimization-floor-header></optimization-floor-header>
    </cell-slot>
    <cell-slot case="store-recommend-floor" :key="index">
      <store-recommend-floor></store-recommend-floor>
    </cell-slot>
    <cell-slot case="store-floor-header" :key="index">
      <store-floor-header :header="item.header"></store-floor-header>
    </cell-slot>
    <cell-slot case="product-magazine-floor" :key="index">
      <product-magazine-floor></product-magazine-floor>
    </cell-slot>
    <cell-slot case="classified-title-header" :key="index">
      <classified-title-header></classified-title-header>
    </cell-slot>
   </recycle-list> 
    
</template>

<script>
import ImageSlider from "./ImageSlider";
import ImageBanner from "./ImageBanner";
import AppList from "./AppList";
import Department from "./Department";
import FloorTitleHeader from './FloorTitleHeader'
//商品水平方向滚动列表
import MerchandiseScrollH from './MerchandiseScrollH';
import HotMerchandise from './HotMerchandise';
import HotFloor from './HotFloor';
import GridMerchandiseFloor from './GridMerchandiseFloor';
import GridMerchandiseScrollFloor from './GridMerchandiseScrollFloor'
import OptimizationFloorHeader from './OptimizationFloorHeader'
import StoreRecommendFloor from './StoreRecommendFloor'
import StoreFloorHeader from './StoreFloorHeader'
import ProductMagazineFloor from './ProductMagazineFloor'
import ClassifiedTitlesHeader from './ClassifiedTitlesHeader'

const data = [
  {
    type: "imageslider",
    pictures: [
      {
        src:
          "http://img17.fn-mart.com/pic/fc9d13426d6d186cb69d/K2qTnn5TD2tghguMtn/1YSGSGjaeaO9fy/CsmRsFzS_QWAO0ovAAIqrYTmXIs884.jpg"
      },
      {
        src:
          "http://img18.fn-mart.com/pic/87a713426d6d186cbe4c/hzq2221nv2tdhlugE2/1iSGSaOicyKyDa/CsmRs1ztWwSAC2odAAKidiumSD0378.jpg"
      },
      {
        src:
          "http://img17.fn-mart.com/pic/d0fe13426d64186cbe6e/hTHnzz1T_2fMKdVlc2/1Yeamak9XGCRJa/CsmRs1zt2KKAdQ4wAAK2v4V43Gw971.jpg"
      },
      {
        src:
          "http://img18.fn-mart.com/pic/d71713426d63186cbc4c/kzqnTT72vnCghMZlJ2/59oGoalGjySGZi/CsmRs1zs3GuAJ4BoAALCF0Cgr3E121.jpg"
      },
      {
        src:
          "http://img17.fn-mart.com/pic/f41613426d67186cebc0/hz8zzz7nFTfdBlUgLz/5xeRmaoaPGdaDa/CsmRtVzszmSAdI10AAKrf5rSufI123.jpg"
      }
    ]
  },
  {
    type: "imagebanner",
    bannerimg:
      "http://img18.fn-mart.com/pic/2b0113426d5d19396d24/B2q2TT5T_zLMBMZdQ2/5xoGoRLyf9Kita/CsmRs1zt7maAbS4JAAKx1wnVYro924.gif"
  },
  {
    type: "department",
    departmentInfo: {
      notice: {
        iconUrl:
          "http://img.beta1.fn/pic/cb3e13426cc125ccd54c/K28TTT1z_zCMBdugXz/5iSyUGZy3Rtyga/Csq5aVziW82AG7wEAAAeNmaYPrA014_org_q100s520.png",
        textlist: [
          {
            targetUrl: "",
            name: "IOS、安卓和小程序，首页测试专用哟！"
          },
          {
            targetUrl: "",
            name: "0元起送喽！不满29元只需3元配送费！"
          },
          {
            targetUrl: "",
            name: "啊啊啊，已经三月份啦！还有需求没完成呀！"
          }
        ]
      },
      store: [
        {
          name: "闸北",
          iconUrl:
            "http://img17.fn-mart.com/pic/9e28134173111b483635/B2q2TT5T_zLMBMZdQ2/sieaoyEYMa_RUx/CsmRtFxKf9uAGvfVAAAG9NJON6Y793_org_q100s520.png"
        },
        {
          name: "1小时送达",
          iconUrl:
            "http://img17.fn-mart.com/pic/9e28134173111b483635/B2q2TT5T_zLMBMZdQ2/sieaoyEYMa_RUx/CsmRtFxKf9uAGvfVAAAG9NJON6Y793_org_q100s520.png"
        },
        {
          name: "安心食材",
          iconUrl:
            "http://img18.fn-mart.com/pic/45bd1341731cdcc21f32/BzHznn5T_2tlKguMc2/1YoaSyWiPykRhY/CsmRtFxKaYGAFpxYAAAJNPHFMuw793_org_q100s520.png"
        },
        {
          name: "新鲜优品",
          iconUrl:
            "http://img18.fn-mart.com/pic/37f213417312dcc3599c/kTH222sTvTtMhdUlc2/7ioaSGXR0aQ9oG/CsmRs1xKaZWADtFZAAAGDtc2cGE104_org_q100s520.png"
        }
      ],
      applist: [
        [
          {
            imgUrl:
              "http://img17.fn-mart.com/pic/41df13422e2425d78de1/kz8zTT1n_zCdkdVMQT/s9maoaQYdGP9fR/CsmRs1x93zuAF8OSAACsjL_iF4I232.png",
            title: "时令水果"
          },
          {
            imgUrl:
              "http://img17.fn-mart.com/pic/d3e013422e2b25dacf8b/knqnTT5nFzCghdZdET/7iSaeaO9fyhYlR/CsmRtFwtwDOAHfL8AACOMN0PQzU246.png",
            title: "蔬菜菌菇"
          },
          {
            imgUrl:
              "http://img18.fn-mart.com/pic/7a2813422e2525f12e5a/h28z22sT_nLdhlugJT/5xmRoaO9mGPiBx/CsmRs1wtwDiADD6uAACdiIY-yGI309.png",
            title: "肉蛋水产"
          },
          {
            imgUrl:
              "http://img18.fn-mart.com/pic/41f413426c9cc457dbd0/hz8zzz7nFTfdBlUgLz/1Yeama3a0GmRBi/CsmRsFzeA22ANZj0AABk4bh6Pxg819.png",
            title: "乳品烘焙"
          },
          {
            imgUrl:
              "http://img17.fn-mart.com/pic/102113426c9cc4592ae0/kTq2nn7nDzLdKMZgfT/7iSaeaOypyoaBx/CsmRsFzeA4KABScBAABtbhZ0soc211.png",
            title: "面点主食"
          }
        ],
        [
          {
            imgUrl:
              "http://img17.fn-mart.com/pic/700413426c95c45a2147/Kz6Tnn72FztdBlulfz/1ioyoRXyWaoaB9/CsmRsFzeA5KAaU2RAADGQ7PsE8s536.png",
            title: "熟食套餐"
          },
          {
            imgUrl:
              "http://img18.fn-mart.com/pic/5cbf13422e29260d2f16/kz8zTT1n_zCdkdVMQT/1xmGSG2yuGuiFR/CsmRs1wtwFGASNZ9AACBUntBfgU952.png",
            title: "酒水饮料"
          },
          {
            imgUrl:
              "http://img17.fn-mart.com/pic/4cff13422e222611c7f5/B2q2TT5T_zLMBMZdQ2/sieaoyEYhYtxpG/CsmRtFwtwFeAHdeuAACHX3Mdorw870.png",
            title: "休闲零食"
          },
          {
            imgUrl:
              "http://img18.fn-mart.com/pic/eeef13422e25271117fe/K2qTnn5TD2tghguMEn/5xmRoa09vGBiQa/CsmRs1wtwF2ABm_hAABpCJmiFgY267.png",
            title: "粮油调味"
          },
          {
            imgUrl:
              "http://img17.fn-mart.com/pic/32d513422e2b27510c3a/h26n22sT_2tMKludJn/sYSReGOa2RgaER/CsmRs1wtwGKAIBsBAABX27_oB9k780.png",
            title: "美护百货"
          }
        ]
      ]
    }
  },
  {
    type: 'titleheader',
    header: {
      title: '新鲜水果',
      more: true
    }
  },
  {
    type: 'floor-banner',
    picUrl: 'http://img.beta1.fn/pic/b87513422f882825d6cb/KzHz2272DzCdBMVgu2/59eaLajGlGDaCG/Csq5Zlylw_2AWr4WAAp-nROhzV4437.png'
  },
  {
    type:'merchandiselist-horizontal',
    merchandiselist:[
                    {
                         unit: '500g',
                        referencePrice: '6',
                        title: '小蓉哥牌0031号香蕉-称重品-促销限购',
                        newComeIdent: 0,
                        price: '5.45',
                         imgUrl: 'http://img.feiniugo.com/pic/613d133f0ea925429897/kzqnTT72vnCghMZlf2/5xeR_ajalGdaJ9/Csq5Z1wjLRmAIj3lAAJsIDuygGA990_org_q100s520.jpg',
                    },
                     {
                         imgUrl: "http://img.feiniugo.com/pic/4eb2133f116d20fe7bbc/K282nn7n_TLMKlVgXn/59mGeRZajafGda/Csq5aFwKCc2AYFL9AAC_5JhinQQ633_org_q100s520.jpg",
                        unit: "盒",
                        referencePrice: "10",
                        title: "小蓉哥牌0023号橙子-餐饮标品-印花限购",
                        newComeIdent: 0,
                        price: "2.22"
                     },
                     {
                         imgUrl: "http://img.feiniugo.com/pic/27d9133f0bca1996f7b7/BnHT2212FTtMkMud0n/1iSROaXRgySGpa/Csq5ZVvjo--AKUR5AAEvGR6ajWg039_org_q100s520.jpg",
                         unit: "盒",
                        isHasOption: 1,
                        title: "小蓉哥牌奥利奥",
                        price: "15.9",
                        newComeIdent: 0,
                        },{
                         "imgUrl": "http://img.feiniugo.com/pic/c204133f10cc2c39675b/hnqzTT12_ntdklVdC2/7YSGUa3alydGO9/Csq5Z1wI9KWAdRyHAAEtq0Fdb6Q125_org_q100s520.jpg",
                        "unit": "个",
                        "title": "0009号苹果-餐饮标品",
                        "price": "9.87",
                        "newComeIdent": 0,
                    },
                     {
                        "imgUrl": "http://img.feiniugo.com/pic/e92f133f0bcc19b89c01/hT82227nvnClKMZlVT/7YSyJGOalahy3i/Csq5ZlvjpUGAcUJyAADIc_LKNhE795_org_q100s520.jpg",
                        "unit": "瓶",
                        "isHasOption": 0,
                        "title": "小蓉哥牌果粒多小蓉哥牌果粒多小蓉哥牌果粒多小蓉哥牌果粒多小蓉哥牌果粒多小",
                        "price": "6.9",
                        "newComeIdent": 1,
                    },{
                        "imgUrl": "http://img.feiniugo.com/pic/9414133f10c92da83c38/kz8zTT1n_zCdkdVMtT/5xmRuaORdGgRjx/Csq5Z1wI9KWAdRyHAAEtq0Fdb6Q125_org_q100s520.jpg",
                        "unit": "个",
                        "isHasOption": 0,
                        "title": "0002号苹果-餐饮标品",
                        "price": "9.87",
                        "newComeIdent": 0
                    },
                     {
                        "imgUrl": "http://img.feiniugo.com/pic/ca2b133f11661a5f2e2b/kTq2nn7nDzLdKMZgWT/1xmGpG3ygGeGCR/Csq5ZVwJ1ZeAdut9AADkEfZF_yA560_org_q100s520.jpg",
                        "unit": "500g",
                        "isHasOption": 0,
                        "title": "小蓉哥牌0012号枣子-餐饮称重品 ",
                        "price": "5",
                        "newComeIdent": 0,
                    }
                ]
  }, 
  {
    type:'hot-floor',
     headerImgUrl: 'http://img18.fn-mart.com/pic/d75a133f076c22ace832/hz8zzz7nFTfdBlUghz/s9maoaQYdGOy_R/CtEF2VvaltuAZQ0TAACvlUnGIls172.png',
      merchandiselist:[{
                         unit: '盒',
                         progress: 88,
                         soldNumber:"已抢46件",
                         subtitle: '采用鲜鸡与奥尔良酱料精心研制入味,香味与口感兼具',
                        referencePrice: '17.3',
                        title: '纽奥良烤鸡 1只',
                        newComeIdent: 0,
                        corners:{
                            textColor:"#ff5756",
                            bgColor:"#FFFFFF",
                            borderColor:"#ff5756",
                            endColor:"#FF4747",
                            desc:"省7.4元",
                            startColor:"#FF1684"
                        },
                         price: '9.9',
                         imgUrl: 'http://img18.fn-mart.com/pic/77f81340f64b1b9867f1/Kn6z2212FTflkMVMQz/sieaoyFyMaBRpG/CsmRtFutoDuAb-2nAAdFfvNP1c8786.jpg',
                    },{
                         unit: '盒',
                         progress: 55,
                         soldNumber:"已抢16件",
                         subtitle: '',
                        referencePrice: '29.9',
                        title: '欢乐熟食全家桶500g+/份',
                        newComeIdent: 0,
                        corners:{
                            textColor:"#ff5756",
                            bgColor:"#FFFFFF",
                            borderColor:"#ff5756",
                            endColor:"#FF4747",
                            desc:"省10元",
                            startColor:"#FF1684"
                        },
                         price: '19.9',
                         imgUrl: 'http://img17.fn-mart.com/pic/1a8513422e1929ebe54f/K28TTT1z_zCMBdugtz/7ioaSGXRmaXG_G/CsmRsFy27xaAAzFpAATfiwmUhE4806.jpg',
                    },{
                         unit: '盒',
                         progress: 89,
                         soldNumber:"已抢33件",
                         subtitle: '麻辣鲜香，屡食不厌，回味无穷',
                        referencePrice: '',
                        title: '【即食】特色小龙虾十三香味 500g/盒',
                        newComeIdent: 0,
                        corners:{
                            textColor:"#ff5756",
                            bgColor:"#FFFFFF",
                            borderColor:"#ff5756",
                            endColor:"#FF4747",
                            desc:"买1赠1",
                            startColor:"#FF1684"
                        },
                         price: '66',
                         imgUrl: 'http://img17.fn-mart.com/pic/d2621341efae22948457/K282nn7n_TLMKlVgcn/5xmRoaSRLGFR2a/CsmRs1yPN2iAIYlQAAU3rW5sLUI604.jpg',
                    },{
                         unit: '盒',
                         progress: 77,
                         soldNumber:"已抢259件",
                         subtitle: '由猪前排骨精切，非肋排，肉质鲜嫩，适合红烧、煲汤',
                        referencePrice: '',
                        title: '(日日鲜)带肉猪小排350g/盒（现制）',
                        newComeIdent: 0,
                        corners:{
                            textColor:"#ff5756",
                            bgColor:"#FFFFFF",
                            borderColor:"#ff5756",
                            endColor:"#FF4747",
                            desc:"买1赠1",
                            startColor:"#FF1684"
                        },
                         price: '19.9',
                         imgUrl: 'http://img17.fn-mart.com/pic/cdda1340f8ed24f5e203/KzHz2272DzCdBMVgJ2/s9maoaQyzGEydR/CsmRs1uSJQWAOYWgAATh7c5WrXQ807.jpg',
                    },{
                         unit: '盒',
                         progress: 7,
                         soldNumber:"已抢8件",
                         subtitle: '蜜枣粽大粽子',
                        referencePrice: '',
                        title: '昌记蜜枣粽120g*8/组',
                        newComeIdent: 0,
                         price: '66',
                         imgUrl: 'http://img18.fn-mart.com/pic/6203134232a32849249a/BTHTzz1zFztdBgugEz/59eyoaXxQGuauY/CsmRtFysXLmAOA_WAAKKQ6aULo8747.jpg',
                    }]
  }, 
  {
    type: 'titleheader',
    header: {
      title: '新鲜水果',
      more: false
    }
  },
  {
    type: 'floor-banner',
    picUrl: 'http://img.beta1.fn/pic/b87513422f882825d6cb/KzHz2272DzCdBMVgu2/59eaLajGlGDaCG/Csq5Zlylw_2AWr4WAAp-nROhzV4437.png'
  }, {
    type: 'classified-title-header'
  },{
    type: 'grid-merchandise-floor',
    merchandiselist: [
                    [
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
                    ]
  },{
    type: 'store-floor-header',
    header: {
      title: '店长甄选',
       subtitle: '闸北店',
       more: false
    }
  }, {
    type: 'store-recommend-floor'
  }, {
    type: 'optimization-floor-header',
    more: false
  },
   {
    type: 'grid-scroll-floor'
  }, {
    type: 'store-floor-header',
    header: {
      title: '吃货周刊',
       subtitle: '',
        more: true
    }
  }, {
    type: 'product-magazine-floor'
  }
  
  
];

export default {
  components: {
    "image-slider": ImageSlider,
    imagebanner: ImageBanner,
    applist: AppList,
    department: Department,
    'merchandiselist-horizontal': MerchandiseScrollH,
    'title-header': FloorTitleHeader,
    'hot-floor': HotFloor,
    'grid-merchandise-floor': GridMerchandiseFloor,
    'grid-scroll-floor': GridMerchandiseScrollFloor,
    'optimization-floor-header': OptimizationFloorHeader,
    'store-recommend-floor': StoreRecommendFloor,
    'store-floor-header': StoreFloorHeader,
    'product-magazine-floor': ProductMagazineFloor,
    'classified-title-header': ClassifiedTitlesHeader
  },
  data() {
    return {
      dataList: data
    };
  },
  methods: {
    loadmore: function() {}
  }
};
</script>

<style scoped>
.list {
  background-color: #eee;
  width: 750px;
}

.floorbanner {
  width: 714px;
  height: 237px;
  margin-left: 18px;
  margin-right: 18px;
}
</style>
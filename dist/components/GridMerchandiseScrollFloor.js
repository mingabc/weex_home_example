// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/VerticalMerchandise.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1c9e45ed"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "product": {
    "width": "190",
    "height": "362",
    "marginTop": "12",
    "marginRight": "12",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "productpic": {
    "width": "190",
    "height": "190"
  },
  "title": {
    "marginTop": "12",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "0",
    "fontSize": "24",
    "color": "#333333",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "originprice": {
    "marginTop": "12",
    "marginRight": "10",
    "fontSize": "24",
    "color": "#999999",
    "textDecoration": "line-through"
  },
  "bottom": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": "15",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "price-box": {
    "marginTop": "12",
    "marginBottom": "12",
    "fontSize": "28",
    "color": "#D7063B",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "price": {
    "color": "#D7063B"
  },
  "unit": {
    "color": "#999999",
    "fontSize": "20"
  },
  "addshopcart": {
    "position": "absolute",
    "marginBottom": "3",
    "right": "0",
    "width": "50",
    "height": "50"
  }
}

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  "grid": {
    "width": "714",
    "height": "734",
    "marginTop": 0,
    "marginRight": "18",
    "marginBottom": "18",
    "marginLeft": "18",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10"
  },
  "floor": {
    "width": "714",
    "height": "362",
    "flexDirection": "row",
    "justifyContent": "space-around"
  }
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _VerticalMerchandise = __webpack_require__(0);

var _VerticalMerchandise2 = _interopRequireDefault(_VerticalMerchandise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['floors'],
    components: {
        merchandise: _VerticalMerchandise2.default
    },
    data: function data() {
        return {
            // floors:

            // ]
        };
    }
}; //
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid"]
  }, _vm._l((_vm.floors), function(floor, f) {
    return _c('div', {
      key: f,
      staticClass: ["floor"]
    }, _vm._l((floor), function(product, p) {
      return _c('div', {
        key: p
      }, [_c('merchandise', {
        staticStyle: {
          width: "100px",
          height: "362px"
        },
        attrs: {
          "product": product
        }
      })], 1)
    }))
  }))
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["grid"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    key: {
      "@binding": "f"
    },
    staticClass: ["floor"],
    attrs: {
      "[[repeat]]": {
        "@expression": "floors",
        "@alias": "floor",
        "@index": "f"
      }
    }
  }, [_c('div', {
    key: {
      "@binding": "p"
    },
    attrs: {
      "[[repeat]]": {
        "@expression": "floor",
        "@alias": "product",
        "@index": "p"
      }
    }
  }, [_c('merchandise', {
    staticStyle: {
      width: "100px",
      height: "362px"
    },
    attrs: {
      "product": {
        "@binding": "product"
      },
      "@inRecycleList": true
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// VerticalMerchandise
exports.default = {
    props: ['product'],
    data: function data() {
        return {
            addshopcartIconUrl: 'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558967321880&di=1ba1567489979fe2f89b66979fe577b4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F57%2F93%2F24%2F58facdf0a69a0.png'
        };
    }
};

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(31)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/GridMerchandiseScrollFloor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e9698cdc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = {
  "floor": {
    "width": "714",
    "height": "760",
    "marginLeft": "18",
    "marginRight": "18",
    "marginBottom": "18",
    "backgroundColor": "#FFFFFF"
  },
  "scroller": {
    "width": "714",
    "height": "724",
    "marginLeft": "18",
    "marginRight": "18",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row"
  },
  "indicator": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": "-10",
    "height": "60",
    "itemColor": "#EEEEEE",
    "itemSelectedColor": "#F25C28"
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["product"]
  }, [_c('image', {
    staticClass: ["productpic"],
    attrs: {
      "src": _vm.product.imgUrl
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.product.title))]), (_vm.product.referencePrice !== undefined) ? _c('text', {
    staticClass: ["originprice"]
  }, [_vm._v(" ¥" + _vm._s(_vm.product.referencePrice) + " ")]) : _vm._e(), _c('div', {
    staticClass: ["bottom"]
  }, [_c('div', {
    staticClass: ["price-box"]
  }, [_c('text', {
    staticClass: ["price"],
    staticStyle: {
      fontSize: "20px"
    }
  }, [_vm._v("¥")]), _c('text', {
    staticClass: ["price"]
  }, [_vm._v(_vm._s(_vm.product.price))]), _c('text', {
    staticClass: ["unit"]
  }, [_vm._v("/ " + _vm._s(_vm.product.unit))])]), _c('image', {
    staticClass: ["addshopcart"],
    attrs: {
      "src": _vm.addshopcartIconUrl
    }
  })])])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["product"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('image', {
    staticClass: ["productpic"],
    attrs: {
      "src": {
        "@binding": "product.imgUrl"
      }
    }
  }), _c('text', {
    staticClass: ["title"],
    attrs: {
      "value": {
        "@binding": "product.title"
      }
    }
  }), _c('text', {
    staticClass: ["originprice"],
    attrs: {
      "[[match]]": "product.referencePrice !== undefined",
      "value": [" ¥", {
        "@binding": "product.referencePrice"
      }, " "]
    }
  }), _c('div', {
    staticClass: ["bottom"]
  }, [_c('div', {
    staticClass: ["price-box"]
  }, [_c('text', {
    staticClass: ["price"],
    staticStyle: {
      fontSize: "20px"
    },
    attrs: {
      "value": "¥"
    }
  }), _c('text', {
    staticClass: ["price"],
    attrs: {
      "value": {
        "@binding": "product.price"
      }
    }
  }), _c('text', {
    staticClass: ["unit"],
    attrs: {
      "value": ["/ ", {
        "@binding": "product.unit"
      }]
    }
  })]), _c('image', {
    staticClass: ["addshopcart"],
    attrs: {
      "src": {
        "@binding": "addshopcartIconUrl"
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GridMerchandiseFloor = __webpack_require__(5);

var _GridMerchandiseFloor2 = _interopRequireDefault(_GridMerchandiseFloor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    // props:['grids'],
    components: {
        'grid-merchandise': _GridMerchandiseFloor2.default
    },
    data: function data() {
        return {
            grids: [[[{
                unit: '份',
                referencePrice: '12.6',
                title: '千禧 500g/份（小番茄）',
                newComeIdent: 0,
                corners: {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省2.7元",
                    "startColor": "#FF1684"
                },
                price: '9.9',
                imgUrl: 'http://img17.fn-mart.com/pic/0a6913422e80dc207511/hz8zzz7nFTfdBlUgcz/7YoamGVY0ivGQa/CsmRtFy_uPeABSdaAAGrvthCISw754_org_q100s520.jpg'
            }, {
                unit: '500g',
                progress: 88,
                soldNumber: "已抢46件",
                subtitle: '采用鲜鸡与奥尔良酱料精心研制入味,香味与口感兼具',
                referencePrice: '3.98',
                title: '东台8424西瓜1粒装（称重）',
                newComeIdent: 0,
                corners: {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省0.7元",
                    "startColor": "#FF1684"
                },
                price: '3.28',
                imgUrl: 'http://img18.fn-mart.com/pic/35d413426c7d259a960d/k2q2nn72FzflKgUMtT/sxeGeaOR0aoRPR/CsmRsFzbwmmAVbtFAAIr_ya4szI297_org_q100s520.jpg'
            }, {
                unit: '盒',
                progress: 88,
                soldNumber: "已抢46件",
                subtitle: '采用鲜鸡与奥尔良酱料精心研制入味,香味与口感兼具',
                referencePrice: '',
                title: '蒙牛新鲜工厂鲜牛乳 950ml/盒',
                newComeIdent: 0,
                price: '15.9',
                imgUrl: 'http://img17.fn-mart.com/pic/47f813422e3d2d30c58b/K2qTnn5TD2tghguMEn/sYSReGOaJRLaoR/CsmRtFy5qBSAXvkhAAFYnO_AVtI727_org_q100s520.jpg'
            }], [{
                unit: '盒',
                progress: 88,
                soldNumber: "已抢46件",
                subtitle: '采用鲜鸡与奥尔良酱料精心研制入味,香味与口感兼具',
                referencePrice: '39.8',
                title: '现制 冰鲜精制牛霖 350g/盒',
                newComeIdent: 0,
                "price": "29.8",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省10元",
                    "startColor": "#FF1684"
                },
                imgUrl: 'http://img17.fn-mart.com/pic/06161341b0b3230c163b/B26zzz5TDnLgklUdET/s9maoavy_GPyfR/CsmRtFxhF8mAE8QLAAPreez3X2U277_org_q100s520.jpg'
            }, {
                "imgUrl": "http://img17.fn-mart.com/pic/a28d1341b0ebc49e089e/kT6zzz7zv2fghgVdcT/79eGmGKxEGTaZx/CsmRtFxkvBiAA6nTAAHJu-pJAEE133_org_q100s520.jpg",
                "unit": "盒",
                "price": "12.8",
                "title": "鸿轩农业草鸡蛋15枚(637克)/盒"
            }, {
                "unit": "组",
                "imgUrl": "http://img18.fn-mart.com/pic/56ca13422e4c285ea650/B26n221z_2fdhMZdQz/1xmaoGPGzGOGcy/CsmRs1yjIyKAZdZWAALN3R-mMAQ081_org_q100s520.jpg",

                "goodsID": "P0219040000185736",
                "title": "马兰头大馄饨 28g*10只/组",
                "price": "13.4",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "第2件5折",
                    "startColor": "#FF1684"
                }
            }]], [[{
                "unit": "包",
                "imgUrl": "http://img18.fn-mart.com/pic/c6d71340b78818aa91a2/BTHnzz5z_ztMBgUd3n/1iSGSa2aCyUYZa/CsmRsVt_Zv2AHIrjAAIjjUcAXUA442_org_q100s520.jpg",
                "referencePrice": "88",
                "goodsID": "P2117060000016372",
                "title": "（冰鲜）三文鱼300g/包",
                "price": "69",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省19元",
                    "startColor": "#FF1684"
                }
            }, {
                "unit": "份",
                "imgUrl": "http://img17.fn-mart.com/pic/d42f1340b7c82a7d32c9/Kn6z2212FTflkMVMQz/7imGeaXxCaCxoG/CsmRtFuFECOAHeWdAAq1VBHzuH8283_org_q100s520.png",

                "referencePrice": "10.5",
                "goodsID": "P0418010000069002",
                "title": "毛豆 450g/份",
                "price": "9.45",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "满3件7折",
                    "startColor": "#FF1684"
                }
            }, {
                "unit": "份",
                "imgUrl": "http://img18.fn-mart.com/pic/37e613426c781c372738/hT82227nvnClKMZlQT/sioRmRQiERKxVi/CsmRs1wQ8SiAIbtsAAHeWnKB77Q873_org_q100s520.jpg",

                "referencePrice": "16.9",
                "goodsID": "P1419050000196098",
                "title": "云南红提 500g",
                "price": "11.9",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省5元",
                    "startColor": "#FF1684"
                }
            }], [{
                "unit": "组",
                "imgUrl": "http://img18.fn-mart.com/pic/4e0a133f017224e072c2/knq2nn52FTLMhMulQ2/5YSGeGKRMaVYLy/CsmRs1vEO1uAAJOjAAJXCK7s7r0521_org_q100s520.jpg",

                "referencePrice": "13.1",
                "goodsID": "P1817100000027734",
                "title": "卡士鲜酪乳三联杯原味100g*3杯/组",
                "price": "11.8",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省1.3元",
                    "startColor": "#FF1684"
                }
            }, {
                "unit": "袋",
                "imgUrl": "http://img18.fn-mart.com/pic/76b9133ffc09255ceb36/BTHTzz1zFztdBgugjz/5YeaeGlGOx0G0i/CsmRslsGY8qAAi54AAHcRd1BJEM152_org_q100s520.jpg",

                "referencePrice": "20.7",
                "goodsID": "P2417100000039703",
                "title": "五芳斋蛋黄鲜肉粽280克(2只)/袋",
                "price": "16.8",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省3.9元",
                    "startColor": "#FF1684"
                }
            }, {
                "unit": "500g",
                "imgUrl": "http://img18.fn-mart.com/pic/d0c113426c5522f6c104/K2qTnn5TD2tghguMEn/79oaSRKxBRQxpa/CsmRs1zZD2yASx9RAAC7SCvXb20043_org_q100s520.jpg",

                "referencePrice": "3.5",
                "goodsID": "P0919050000195559",
                "title": "土豆（马铃薯）（称重）",
                "price": "2.45",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "7折",
                    "startColor": "#FF1684"
                }
            }]], [[{
                "unit": "瓶",
                "imgUrl": "http://img18.fn-mart.com/pic/21861341f4221dd8cbd7/hTqTnns2DnLdBgZMQT/59oGmGBGBYu9zG/CsmRtFyDP5yAV4qDAACmZVboqOk162_org_q100s520.jpg",

                "goodsID": "P0518040000092479",
                "title": "伊利畅轻草莓猕猴桃风味发酵乳 215克/瓶",
                "price": "8.6",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "第2件5折",
                    "startColor": "#FF1684"
                }
            }, {
                "unit": "份",
                "imgUrl": "http://img18.fn-mart.com/pic/e91f1341726327a93773/hnqzTT12_ntdklVdE2/7ieySGXiuiWigy/CsmRtFw8R1OAI721AAI0T58NHrk365_org_q100s520.jpg",

                "referencePrice": "39.9",
                "goodsID": "P1019010000176293",
                "title": "（鲜活）小龙虾500克/份 约17-25只",
                "price": "19.9",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省20元",
                    "startColor": "#FF1684"
                }
            }, {
                "unit": "盒",
                "imgUrl": "http://img17.fn-mart.com/pic/1d1313422e812d12c7e0/KzHz2272DzCdBMVgL2/79oaSRXGeR_aTa/CsmRsFzAPmqABGraAAJVglGVtg0491_org_q100s520.jpg",

                "goodsID": "P1618030000086293",
                "title": "迷你梦龙香草松露混合口味冰淇淋255g6支装",
                "price": "34",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "买1赠1",
                    "startColor": "#FF1684"
                }
            }], [{
                "unit": "包",
                "imgUrl": "http://img17.fn-mart.com/pic/282813422e7122fefba0/K2qTnn5TD2tghguMEn/59mGeRBxh9u92a/CsmRtFy-sWaAeRj5AAQw9WZmTsE729_org_q100s520.jpg",

                "referencePrice": "13.5",
                "goodsID": "P1817100000026730",
                "title": "简装果仁蛋糕 410g/包",
                "price": "6.9",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "省6.6元",
                    "startColor": "#FF1684"
                }
            }, {
                "unit": "盒",
                "imgUrl": "http://img17.fn-mart.com/pic/d2621341efae22948457/K282nn7n_TLMKlVgcn/5xmRoaSRLGFR2a/CsmRs1yPN2iAIYlQAAU3rW5sLUI604_org_q100s520.jpg",

                "goodsID": "P2818040000100694",
                "title": "【即食】特色小龙虾十三香味 500g/盒",
                "price": "66",
                "corners": {
                    "textColor": "#FF4400",
                    "bgColor": "#FFFDCB",
                    "borderColor": "#FFCF6B",
                    "endColor": "#FF4747",
                    "desc": "买1赠1",
                    "startColor": "#FF1684"
                }
            }, {
                "saleOut": 0,
                "unit": "箱",
                "imgUrl": "http://img01.fn-mart.com/C/main_item/2015/0213/201502C130000367/_607282459_org_q100s520.jpg",
                "referencePrice": "49.4",
                "goodsID": "P2017070000018312",
                "title": "蒙牛特仑苏纯牛奶 250ml*12盒/箱",
                "price": "49.3"

            }]]]
        };
    }
}; //
//
//
//
//
//
//
//
//
//
//
//

//每日优选

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["floor"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "infinite": "false"
    }
  }, [_vm._l((_vm.grids), function(grid, g) {
    return _c('div', {
      key: g
    }, [_c('grid-merchandise', {
      attrs: {
        "floors": grid
      }
    })], 1)
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["floor"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "infinite": "false"
    }
  }, [_c('div', {
    key: {
      "@binding": "g"
    },
    attrs: {
      "[[repeat]]": {
        "@expression": "grids",
        "@alias": "grid",
        "@index": "g"
      }
    }
  }, [_c('grid-merchandise', {
    attrs: {
      "floors": {
        "@binding": "grid"
      },
      "@inRecycleList": true
    }
  })], 1), _c('indicator', {
    staticClass: ["indicator"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/GridMerchandiseFloor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3c92f21f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GridMerchandiseScrollFloor = __webpack_require__(28);

var _GridMerchandiseScrollFloor2 = _interopRequireDefault(_GridMerchandiseScrollFloor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_GridMerchandiseScrollFloor2.default.el = '#root';
new Vue(_GridMerchandiseScrollFloor2.default);

/***/ })

/******/ });
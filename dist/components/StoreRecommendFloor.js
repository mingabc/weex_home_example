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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ({

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(53)
)

/* script */
__vue_exports__ = __webpack_require__(54)

/* template */
var __vue_template__ = __webpack_require__(55)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/StoreRecommendFloor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-45be5571"
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

/***/ 53:
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "750",
    "height": "304",
    "flexDirection": "row",
    "paddingLeft": "8",
    "paddingRight": "18",
    "marginBottom": "18"
  },
  "product": {
    "width": "666",
    "height": "304",
    "marginLeft": "10",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10"
  },
  "pic": {
    "width": "240",
    "height": "240",
    "marginTop": "34",
    "marginLeft": "20",
    "backgroundColor": "#800080"
  },
  "content": {
    "height": "304",
    "width": "370",
    "marginTop": "32",
    "marginRight": "18",
    "marginBottom": 0,
    "marginLeft": "18"
  },
  "title": {
    "fontSize": "30",
    "color": "#000000",
    "lines": 1,
    "textOverflow": "ellipsis"
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
    "color": "#D7063B",
    "fontSize": "40"
  },
  "unit": {
    "color": "#999999",
    "fontSize": "28"
  },
  "originprice": {
    "marginLeft": "20",
    "fontSize": "28",
    "color": "#999999",
    "textDecoration": "line-through"
  },
  "desc-box": {
    "width": "370",
    "height": "147",
    "marginTop": "0",
    "backgroundColor": "#FFE566"
  },
  "desc-title": {
    "fontSize": "26",
    "color": "#481F06",
    "marginTop": "22",
    "marginRight": "12",
    "marginBottom": 0,
    "marginLeft": "12",
    "lines": 3,
    "textOverflow": "ellipsis"
  }
}

/***/ }),

/***/ 54:
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
//
//
//
//
//

//店长推荐
exports.default = {
    data: function data() {
        return {
            merchandiselist: [{
                "saleOut": 0,
                "unit": "盒",
                "imgUrl": "http://img17.fn-mart.com/pic/9080133fbdb219144cf1/kTH222sTvTtMhdUlX2/7YoamGdyZiWGui/CsmRsVriioyAao6MAAaDA_Ej4jc328_org_q100s520.jpg",
                "subTitle": "礼品粽 送礼佳品 盒装经典甜粽咸粽组合",
                "referencePrice": "99",
                "goodsID": "P2417100000039377",
                "title": "五芳斋情系五芳礼品粽礼盒装1.4千克",

                "price": "98",
                "sellPoint": "【店长说】：“十种经典口味，丰富味觉享受，送礼倍独特！”",
                "soldPercent": 0
            }, {
                "saleOut": 0,
                "unit": "份",
                "imgUrl": "http://img17.fn-mart.com/pic/66c81342712c2382323a/B2Hzzz5TvnfdBdZdJn/7YSGmapiWYhGdy/CsmRs1ysPRaAQzTQAAFOcBYu5b4548_org_q100s520.jpg",
                "subTitle": "口感绵密软糯、香甜，吃法多样",
                "goodsID": "P0919050000195546",
                "title": "板栗南瓜 900g/个",
                "isHasOption": 0,
                "price": "29.5",
                "linkUrl": "fnfresh://productdetail?smseq=P0919050000195546",
                "newComeIdent": 0,
                "sellPoint": "【店长说】：“粉糯易于入口，肉质橘黄色绵软，吃法多样，美味健康。”",
                "soldPercent": 0
            }, {
                "saleOut": 0,
                "unit": "只",
                "imgUrl": "http://img17.fn-mart.com/pic/2b1c133f01811adc463f/hTqTnns2DnLdBgZMQT/5YmRSyk9OaDaWy/CsmRtFvFVDKAL3c1AAMkTC2mGOc400_org_q100s520.jpg",
                "subTitle": "爆浆流心超诱人，奶盖直接覆盖住整个蛋糕，口感爽滑",
                "referencePrice": "16.4",
                "goodsID": "P1018100000147354",
                "title": "爆浆奶盖蛋糕 100克/只",
                "isHasOption": 0,
                "linkUrl": "fnfresh://productdetail?smseq=P1018100000147354",
                "price": "8.2",
                "newComeIdent": 0,
                "sellPoint": "【店长说】：“天王盖地虎，奶盖配蛋糕，治愈系网红给你全新至柔的味蕾体验！”",
                "soldPercent": 0
            }, {
                "saleOut": 0,
                "unit": "份",
                "imgUrl": "http://img17.fn-mart.com/pic/3d0e1340b7ba282649c4/hn8zzz7zvntgBdZlE2/7imRoGPxpyVama/CsmRtFuDugSAJyxnAAhNWBVq5hM778_org_q100s520.png",
                "subTitle": "新鲜茭白，清香爽口，荤素百搭",
                "referencePrice": "8.2",
                "goodsID": "P0418010000069010",
                "title": "茭白 400g/份（高瓜）",
                "isHasOption": 0,
                "linkUrl": "fnfresh://productdetail?smseq=P0418010000069010",
                "price": "7.38",
                "newComeIdent": 0,
                "sellPoint": "【店长说】：“纯净水乡供养，新鲜直达，细腻爽口，回味甘甜，荤素百搭！”",
                "soldPercent": 0
            }, {
                "saleOut": 0,
                "unit": "500g",
                "imgUrl": "http://img18.fn-mart.com/pic/921d1340b74edce84103/B28nnn7z_2CMBguljz/s9maoanyfGdyZR/CsmRslt6HfSAHhSvAAJAUDSTaEs306_org_q100s520.jpg",
                "subTitle": "脆嫩多汁，甜蜜爽口，来自新疆",
                "goodsID": "P0118080000129417",
                "title": "西洲蜜瓜1粒装（称重）",
                "isHasOption": 0,
                "price": "10.6",
                "linkUrl": "fnfresh://productdetail?smseq=P0118080000129417",
                "newComeIdent": 0,
                "sellPoint": "【店长说】：“果香馥郁，脆嫩多汁，甜蜜爽口，这个夏天有你真好~”",
                "soldPercent": 0
            }]
        };
    }
};

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.merchandiselist), function(product, p) {
    return _c('div', {
      key: p
    }, [_c('div', {
      staticClass: ["product"]
    }, [_c('image', {
      staticClass: ["pic"],
      attrs: {
        "src": product.imgUrl
      }
    }), _c('div', {
      staticClass: ["content"]
    }, [_c('text', {
      staticClass: ["title"]
    }, [_vm._v(" " + _vm._s(product.title) + " ")]), _c('div', {
      staticClass: ["price-box"]
    }, [_c('text', {
      staticClass: ["price"],
      staticStyle: {
        fontSize: "28px"
      }
    }, [_vm._v("¥")]), _c('text', {
      staticClass: ["price"]
    }, [_vm._v(_vm._s(product.price))]), _c('text', {
      staticClass: ["unit"]
    }, [_vm._v("/ " + _vm._s(product.unit))]), (product.referencePrice !== undefined) ? _c('text', {
      staticClass: ["originprice"]
    }, [_vm._v(" ¥" + _vm._s(product.referencePrice) + " ")]) : _vm._e()]), _c('div', {
      staticClass: ["desc-box"]
    }, [_c('text', {
      staticClass: ["desc-title"]
    }, [_vm._v(" " + _vm._s(product.sellPoint) + " ")])])])])])
  }))
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false",
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    key: {
      "@binding": "p"
    },
    attrs: {
      "[[repeat]]": {
        "@expression": "merchandiselist",
        "@alias": "product",
        "@index": "p"
      }
    }
  }, [_c('div', {
    staticClass: ["product"]
  }, [_c('image', {
    staticClass: ["pic"],
    attrs: {
      "src": {
        "@binding": "product.imgUrl"
      }
    }
  }), _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": [" ", {
        "@binding": "product.title"
      }, " "]
    }
  }), _c('div', {
    staticClass: ["price-box"]
  }, [_c('text', {
    staticClass: ["price"],
    staticStyle: {
      fontSize: "28px"
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
  }), _c('text', {
    staticClass: ["originprice"],
    attrs: {
      "[[match]]": "product.referencePrice !== undefined",
      "value": [" ¥", {
        "@binding": "product.referencePrice"
      }, " "]
    }
  })]), _c('div', {
    staticClass: ["desc-box"]
  }, [_c('text', {
    staticClass: ["desc-title"],
    attrs: {
      "value": [" ", {
        "@binding": "product.sellPoint"
      }, " "]
    }
  })])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _StoreRecommendFloor = __webpack_require__(52);

var _StoreRecommendFloor2 = _interopRequireDefault(_StoreRecommendFloor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_StoreRecommendFloor2.default.el = '#root';
new Vue(_StoreRecommendFloor2.default);

/***/ })

/******/ });
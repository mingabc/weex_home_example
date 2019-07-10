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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ({

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(61)
)

/* script */
__vue_exports__ = __webpack_require__(62)

/* template */
var __vue_template__ = __webpack_require__(63)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/ProductMagazineFloor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7ef203d9"
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

/***/ 61:
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "750",
    "height": "456",
    "flexDirection": "row",
    "paddingLeft": "8",
    "paddingRight": "18",
    "marginBottom": "18"
  },
  "product": {
    "width": "660",
    "height": "456",
    "marginLeft": "10",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10"
  },
  "pic": {
    "width": "660",
    "height": "320",
    "backgroundColor": "#800080"
  },
  "title": {
    "width": "612",
    "fontSize": "30",
    "color": "#000000",
    "lines": 1,
    "marginTop": "15",
    "marginRight": "24",
    "marginBottom": 0,
    "marginLeft": "24",
    "textOverflow": "ellipsis"
  },
  "desc-title": {
    "width": "612",
    "fontSize": "24",
    "color": "#333333",
    "marginTop": "15",
    "marginRight": "24",
    "marginBottom": 0,
    "marginLeft": "24",
    "lines": 1,
    "textOverflow": "ellipsis"
  }
}

/***/ }),

/***/ 62:
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

//店长推荐
exports.default = {
    data: function data() {
        return {
            merchandiselist: [{
                "imgUrl": "http://img18.fn-mart.com/pic/a56913426d4e1a21aef1/B26n221z_2fdhMZdQz/simaoau9WYeaJG/CsmRs1zslgWAXo3aAAI1eJMs-Pc948.jpg",
                "pressedImgUrl": "",
                "picHeight": 0,
                "title": "回味童年",
                "subTitle": "回味儿时情，欢乐过端午。美味童趣包子。",
                "linkTypeWX": 0
            }, {
                "imgUrl": "http://img18.fn-mart.com/pic/4b2313426d5d23a8633d/kzH222sTFTLMKMUMt2/59eyoaXRpGfaJY/CsmRsFziH7CAAOIaAAY4PL8AlVo107.jpg",
                "linkUrl": "fnfresh://openurl?url=https://yxsale.feiniu.com/act/12827",
                "pressedImgUrl": "",
                "picHeight": 0,
                "title": "麒麟西瓜",
                "subTitle": "新鲜采摘，汁多味甜~这个夏天有你真好~",
                "linkTypeWX": 0
            }, {
                "imgUrl": "http://img18.fn-mart.com/pic/d2ee13426d4619265fc0/knq2nn52FTLMhMulQ2/7imRoGERmyf9na/CsmRtFzsluGAbQPIAALJUbFlXQY189.jpg",
                "linkUrl": "fnfresh://openurl?url=https://yxsale.feiniu.com/act/13039",
                "pressedImgUrl": "",
                "picHeight": 0,
                "title": "熟食买1送1",
                "subTitle": "千山万水“粽”是情，美味粽子软糯细腻。",
                "linkTypeWX": 0
            }, {
                "imgUrl": "http://img18.fn-mart.com/pic/059313426d5bdc723270/BzHznn5T_2tlKguMC2/1xmyeaXapaVYMR/CsmRsFzsl6SASuQyAAMtD_hQt6Y484.jpg",
                "linkUrl": "fnfresh://openurl?url=https://yxsale.feiniu.com/act/13140",
                "pressedImgUrl": "",
                "picHeight": 0,
                "title": "粽子满35减10",
                "subTitle": "粽享端午礼，老字号的经典味道。",
                "linkTypeWX": 0
            }, {
                "imgUrl": "http://img18.fn-mart.com/pic/6c2513426d4718ab36eb/hzqT221nvntlBdVMfT/1ioyoRXyWa_any/CsmRsFznQ5KAIlfNAAM5Kot2ZQ0602.jpg",
                "linkUrl": "fnfresh://openurl?url=https://yxsale.feiniu.com/act/13036",
                "pressedImgUrl": "",
                "picHeight": 0,
                "title": "蛋蛋驾到",
                "subTitle": "庆六一，贺端午。美味小鲜蛋，好吃又健康。",
                "linkTypeWX": 0
            }, {
                "imgUrl": "http://img18.fn-mart.com/pic/56e713426d4b19530ff2/Bz82221zFzCMkgugJz/59oGmGUYBYX9Xi/CsmRs1zreMuAPvXNAAcmwMZu14c240.jpg",
                "linkUrl": "fnfresh://openurl?url=https://yxsale.feiniu.com/act/13095",
                "pressedImgUrl": "",
                "picHeight": 0,
                "title": "烘焙7折起",
                "subTitle": "榴莲芒果完美搭配，甜而不腻。回味欲罢不能",
                "linkTypeWX": 0
            }]
        };
    }
};

/***/ }),

/***/ 63:
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
    }), _c('text', {
      staticClass: ["title"]
    }, [_vm._v(" " + _vm._s(product.title) + " ")]), _c('text', {
      staticClass: ["desc-title"]
    }, [_vm._v(" " + _vm._s(product.subTitle) + " ")])])])
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
  }), _c('text', {
    staticClass: ["title"],
    attrs: {
      "value": [" ", {
        "@binding": "product.title"
      }, " "]
    }
  }), _c('text', {
    staticClass: ["desc-title"],
    attrs: {
      "value": [" ", {
        "@binding": "product.subTitle"
      }, " "]
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ProductMagazineFloor = __webpack_require__(60);

var _ProductMagazineFloor2 = _interopRequireDefault(_ProductMagazineFloor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ProductMagazineFloor2.default.el = '#root';
new Vue(_ProductMagazineFloor2.default);

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/MerchandiseScrollH.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-59d5dc08"
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

/***/ 41:
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "714",
    "height": "362",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "marginLeft": "18"
  }
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _VerticalMerchandise = __webpack_require__(0);

var _VerticalMerchandise2 = _interopRequireDefault(_VerticalMerchandise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['merchandiselist'],
    components: {
        merchandise: _VerticalMerchandise2.default
    },
    data: function data() {
        return {
            addshopcartIconUrl: 'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558967321880&di=1ba1567489979fe2f89b66979fe577b4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F57%2F93%2F24%2F58facdf0a69a0.png'
        };
    },
    methods: {},
    computed: {}
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

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.merchandiselist), function(products, p) {
    return _c('div', {
      key: p
    }, [_c('merchandise', {
      attrs: {
        "product": products
      }
    })], 1)
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
        "@alias": "products",
        "@index": "p"
      }
    }
  }, [_c('merchandise', {
    attrs: {
      "product": {
        "@binding": "products"
      },
      "@inRecycleList": true
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MerchandiseScrollH = __webpack_require__(40);

var _MerchandiseScrollH2 = _interopRequireDefault(_MerchandiseScrollH);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_MerchandiseScrollH2.default.el = '#root';
new Vue(_MerchandiseScrollH2.default);

/***/ })

/******/ });
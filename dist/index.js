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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/AppList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-12a690df"
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/HotMerchandise.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c7edaf34"
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
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "app-cell": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "width": "714",
    "height": "180",
    "backgroundColor": "#FFFFFF"
  },
  "app-box": {
    "width": "135",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "alignItems": "center"
  },
  "app-title": {
    "fontSize": "20",
    "textAlign": "center",
    "paddingTop": "10",
    "color": "#999999"
  },
  "app-icon": {
    "width": "120",
    "height": "120"
  }
}

/***/ }),
/* 8 */
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

exports.default = {
    props: ['apps'],
    data: function data() {
        return {};
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-cell"]
  }, _vm._l((_vm.apps), function(app, a) {
    return _c('div', {
      key: a,
      staticClass: ["app-box"]
    }, [_c('image', {
      staticClass: ["app-icon"],
      attrs: {
        "resize": "cover",
        "src": app.imgUrl
      }
    }), _c('text', {
      staticClass: ["app-title"]
    }, [_vm._v(" " + _vm._s(app.title) + " ")])])
  }))
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-cell"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    key: {
      "@binding": "a"
    },
    staticClass: ["app-box"],
    attrs: {
      "[[repeat]]": {
        "@expression": "apps",
        "@alias": "app",
        "@index": "a"
      }
    }
  }, [_c('image', {
    staticClass: ["app-icon"],
    attrs: {
      "resize": "cover",
      "src": {
        "@binding": "app.imgUrl"
      }
    }
  }), _c('text', {
    staticClass: ["app-title"],
    attrs: {
      "value": [" ", {
        "@binding": "app.title"
      }, " "]
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "product": {
    "width": "694",
    "height": "232",
    "marginLeft": "10",
    "marginRight": "10",
    "flexDirection": "row",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10"
  },
  "image": {
    "width": "200",
    "height": "200",
    "marginTop": "16",
    "marginRight": "0",
    "marginBottom": "16",
    "marginLeft": "16"
  },
  "content": {
    "flex": 1,
    "height": "232",
    "marginLeft": "16"
  },
  "text": {
    "marginRight": "16",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "title": {
    "color": "#000000",
    "fontSize": "28",
    "marginTop": "16"
  },
  "subtitle": {
    "color": "#999999",
    "fontSize": "24",
    "marginTop": "8"
  },
  "sale-pogress": {
    "position": "absolute",
    "top": "97",
    "left": 0,
    "marginTop": "8",
    "flexDirection": "row",
    "alignItems": "center",
    "marginLeft": "2"
  },
  "progress": {
    "flexDirection": "row",
    "width": "200",
    "height": "24",
    "backgroundColor": "#FFDAD1",
    "borderRadius": "16",
    "borderWidth": "1",
    "borderColor": "#FF5756"
  },
  "progress-inner": {
    "position": "absolute",
    "height": "24",
    "left": 0,
    "borderRadius": "16",
    "backgroundColor": "#FF5679"
  },
  "progress-remain": {
    "position": "absolute",
    "left": "8",
    "lineHeight": "20",
    "color": "#FFFFFF",
    "fontSize": "20"
  },
  "sale-progress-got": {
    "color": "#D7063B",
    "fontSize": "22"
  },
  "tag-content": {
    "position": "absolute",
    "left": 0,
    "top": "140",
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "8"
  },
  "tag": {
    "height": 30,
    "color": "#ff5756",
    "fontSize": "20",
    "borderColor": "#ff5756",
    "borderWidth": "1",
    "paddingTop": "0",
    "paddingRight": "2",
    "paddingBottom": "0",
    "paddingLeft": "2"
  },
  "bottom": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": "10",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "price-box": {
    "marginTop": "12",
    "marginBottom": "0",
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
  "originprice": {
    "marginLeft": "20",
    "fontSize": "24",
    "color": "#999999",
    "textDecoration": "line-through"
  },
  "addshopcart": {
    "position": "absolute",
    "marginBottom": "10",
    "right": "16",
    "bottom": "16",
    "width": "60",
    "height": "60"
  }
}

/***/ }),
/* 14 */
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

exports.default = {
    props: ['product'],
    data: function data() {
        return {
            addshopcartIconUrl: 'http://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558967321880&di=1ba1567489979fe2f89b66979fe577b4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F57%2F93%2F24%2F58facdf0a69a0.png'
        };
    }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["product"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.product.imgUrl
    }
  }), _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["title", "text"]
  }, [_vm._v(" " + _vm._s(_vm.product.title) + " ")]), (_vm.product.subtitle !== undefined) ? _c('text', {
    staticClass: ["subtitle", "text"]
  }, [_vm._v(" " + _vm._s(_vm.product.subtitle) + " ")]) : _vm._e(), _c('div', {
    staticClass: ["sale-pogress"]
  }, [_c('div', {
    staticClass: ["progress"]
  }, [_c('div', {
    staticClass: ["progress-inner"],
    style: {
      width: _vm.product.progress * 200 / 100
    }
  }), _c('text', {
    staticClass: ["progress-remain"]
  }, [_vm._v(_vm._s(_vm.product.progress) + " %")])]), _c('text', {
    staticClass: ["sale-progress-got"],
    staticStyle: {
      marginLeft: "12px"
    }
  }, [_vm._v(_vm._s(_vm.product.soldNumber))])]), (_vm.product.corners.desc !== undefined) ? _c('div', {
    staticClass: ["tag-content"]
  }, [_c('text', {
    staticClass: ["tag"]
  }, [_vm._v(" " + _vm._s(_vm.product.corners.desc))])]) : _vm._e(), _c('div', {
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
  }, [_vm._v("/ " + _vm._s(_vm.product.unit))]), (_vm.product.referencePrice !== undefined) ? _c('text', {
    staticClass: ["originprice"]
  }, [_vm._v(" ¥" + _vm._s(_vm.product.referencePrice) + " ")]) : _vm._e()])]), _c('image', {
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
    staticClass: ["image"],
    attrs: {
      "src": {
        "@binding": "product.imgUrl"
      }
    }
  }), _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["title", "text"],
    attrs: {
      "value": [" ", {
        "@binding": "product.title"
      }, " "]
    }
  }), _c('text', {
    staticClass: ["subtitle", "text"],
    attrs: {
      "[[match]]": "product.subtitle !== undefined",
      "value": [" ", {
        "@binding": "product.subtitle"
      }, " "]
    }
  }), _c('div', {
    staticClass: ["sale-pogress"]
  }, [_c('div', {
    staticClass: ["progress"]
  }, [_c('div', {
    staticClass: ["progress-inner"],
    staticStyle: {
      "width": {
        "@binding": "product.progress * 200 / 100"
      }
    }
  }), _c('text', {
    staticClass: ["progress-remain"],
    attrs: {
      "value": [{
        "@binding": "product.progress"
      }, " %"]
    }
  })]), _c('text', {
    staticClass: ["sale-progress-got"],
    staticStyle: {
      marginLeft: "12px"
    },
    attrs: {
      "value": {
        "@binding": "product.soldNumber"
      }
    }
  })]), _c('div', {
    staticClass: ["tag-content"],
    attrs: {
      "[[match]]": "product.corners.desc !== undefined"
    }
  }, [_c('text', {
    staticClass: ["tag"],
    attrs: {
      "value": [" ", {
        "@binding": "product.corners.desc"
      }]
    }
  })]), _c('div', {
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
  }), _c('text', {
    staticClass: ["originprice"],
    attrs: {
      "[[match]]": "product.referencePrice !== undefined",
      "value": [" ¥", {
        "@binding": "product.referencePrice"
      }, " "]
    }
  })])]), _c('image', {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/ClassifiedTitlesHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5a19c1eb"
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
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "width": "750",
    "height": "300",
    "backgroundColor": "#FFFFFF"
  },
  "elevator": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#3399ff",
    "flexDirection": "row"
  },
  "elevator-item": {
    "lineHeight": "90",
    "marginTop": "0",
    "marginRight": "15",
    "marginBottom": "0",
    "marginLeft": "15"
  },
  "elevator-title": {
    "fontSize": "36",
    "color": "#ffffff",
    "lineHeight": "90"
  },
  "item-text": {
    "fontSize": "36",
    "color": "#ffffff",
    "lineHeight": "90"
  },
  "title": {
    "fontSize": "36",
    "color": "#333333"
  },
  "subtitle": {
    "fontSize": "24",
    "color": "#666666"
  }
}

/***/ }),
/* 18 */
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

exports.default = {
    methods: {
        titleColor: function titleColor() {
            return red;
        }
    },
    data: function data() {
        return {
            selectIndex: 0,

            items: [{
                title: '精选',
                subtitle: '猜你喜欢',
                selected: true
            }, {
                title: '乳品',
                subtitle: '生活好物',
                selected: false
            }, {
                title: '水果',
                subtitle: '实惠多多',
                selected: false
            }, {
                title: '零食',
                subtitle: '冷链配送',
                selected: false
            }, {
                title: '水果',
                subtitle: '超市直达',
                selected: false
            }]
        };
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["elevator"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["elevator-item"]
    }, [_c('text', {
      staticClass: ["title"],
      style: {
        color: _vm.titleColor
      }
    }, [_vm._v(_vm._s(item.title))]), _c('text', {
      staticClass: ["subtitle"]
    }, [_vm._v(_vm._s(item.subtitle))])])
  }))
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["elevator"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false",
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    key: {
      "@binding": "index"
    },
    staticClass: ["elevator-item"],
    attrs: {
      "[[repeat]]": {
        "@expression": "items",
        "@alias": "item",
        "@index": "index"
      }
    }
  }, [_c('text', {
    staticClass: ["title"],
    staticStyle: {
      "color": {
        "@binding": "titleColor"
      }
    },
    attrs: {
      "value": {
        "@binding": "item.title"
      }
    }
  }), _c('text', {
    staticClass: ["subtitle"],
    attrs: {
      "value": {
        "@binding": "item.subtitle"
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/Department.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b4e936fc"
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
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "deparment": {
    "width": "714",
    "height": "510",
    "flexDirection": "column",
    "backgroundColor": "#FFFFFF",
    "borderTopLeftRadius": "20",
    "borderTopRightRadius": "20",
    "marginTop": "18",
    "marginRight": "18",
    "marginBottom": "18",
    "marginLeft": "18",
    "flexWrap": "wrap"
  },
  "store": {
    "width": "714",
    "height": "70",
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "storeitem": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "storeimg": {
    "width": "30",
    "height": "30"
  },
  "storetxt": {
    "fontSize": "20",
    "color": "#333333"
  },
  "app": {
    "width": "714",
    "height": "180"
  },
  "bottom": {
    "width": "714",
    "height": "70",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "noticeicon": {
    "width": "118",
    "height": "30",
    "marginLeft": "12"
  },
  "noticetxt": {
    "marginLeft": "24",
    "width": "524",
    "fontSize": "24",
    "color": "#333333",
    "lines": 1,
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppList = __webpack_require__(4);

var _AppList2 = _interopRequireDefault(_AppList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['departmentInfo'],
    components: {
        'app-list': _AppList2.default
    },
    data: function data() {
        return {
            currentIndex: 0,
            noticeTxt: ''
        };
    },

    computed: {
        notice: {
            get: function get() {
                return this.departmentInfo.notice;
            }
        },
        applist: {
            get: function get() {
                return this.departmentInfo.applist;
            }
        },
        store: {
            get: function get() {
                return this.departmentInfo.store;
            }
        }
    },

    created: function created() {
        var _this = this;

        if (this.notice.textlist.length > 0) {
            this.noticeTxt = this.notice.textlist[this.currentIndex].name;
        }

        //设置快报定时器
        setInterval(function () {
            if (_this.notice.textlist == null || _this.notice.textlist.length == 0) {
                _this.noticeTxt = '';
                return;
            }
            var length = _this.notice.textlist.length;
            if (_this.currentIndex >= length) {
                _this.currentIndex = 0;
            } else {
                _this.currentIndex++;
            }
            _this.noticeTxt = _this.notice.textlist[_this.currentIndex].name;
        }, 2000);
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

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["deparment"]
  }, [_c('div', {
    staticClass: ["store"]
  }, _vm._l((_vm.store), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["storeitem"]
    }, [_c('image', {
      staticClass: ["storeimg"],
      attrs: {
        "src": item.iconUrl
      }
    }), _c('text', {
      staticClass: ["storetxt"]
    }, [_vm._v(" " + _vm._s(item.name) + " ")])])
  })), _c('app-list', {
    attrs: {
      "apps": _vm.applist[0]
    }
  }), _c('app-list', {
    attrs: {
      "apps": _vm.applist[1]
    }
  }), _c('div', {
    staticClass: ["bottom"]
  }, [_c('image', {
    staticClass: ["noticeicon"],
    attrs: {
      "src": _vm.notice.iconUrl
    }
  }), _c('text', {
    staticClass: ["noticetxt"]
  }, [_vm._v(" " + _vm._s(_vm.noticeTxt) + " ")])])], 1)
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["deparment"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["store"]
  }, [_c('div', {
    key: {
      "@binding": "i"
    },
    staticClass: ["storeitem"],
    attrs: {
      "[[repeat]]": {
        "@expression": "store",
        "@alias": "item",
        "@index": "i"
      }
    }
  }, [_c('image', {
    staticClass: ["storeimg"],
    attrs: {
      "src": {
        "@binding": "item.iconUrl"
      }
    }
  }), _c('text', {
    staticClass: ["storetxt"],
    attrs: {
      "value": [" ", {
        "@binding": "item.name"
      }, " "]
    }
  })])]), _c('app-list', {
    attrs: {
      "apps": {
        "@binding": "applist[0]"
      },
      "@inRecycleList": true
    }
  }), _c('app-list', {
    attrs: {
      "apps": {
        "@binding": "applist[1]"
      },
      "@inRecycleList": true
    }
  }), _c('div', {
    staticClass: ["bottom"]
  }, [_c('image', {
    staticClass: ["noticeicon"],
    attrs: {
      "src": {
        "@binding": "notice.iconUrl"
      }
    }
  }), _c('text', {
    staticClass: ["noticetxt"],
    attrs: {
      "value": [" ", {
        "@binding": "noticeTxt"
      }, " "]
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/FloorTitleHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-93bd71ee"
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
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "width": "750",
    "height": "100",
    "alignItems": "center"
  },
  "titlebox": {
    "height": "100",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "leftline": {
    "height": "1",
    "width": "80",
    "backgroundColor": "#000000",
    "marginRight": "10"
  },
  "title": {
    "color": "#333333",
    "fontSize": "32"
  },
  "rightline": {
    "height": "1",
    "width": "80",
    "backgroundColor": "#000000",
    "marginLeft": "10"
  },
  "more": {
    "flexDirection": "row",
    "alignItems": "center",
    "position": "absolute",
    "top": "0",
    "right": "0",
    "bottom": "0"
  },
  "moretitle": {
    "fontSize": "24",
    "color": "#333333"
  },
  "moreimage": {
    "width": "24",
    "height": "24",
    "marginRight": "24",
    "marginLeft": "12"
  }
}

/***/ }),
/* 26 */
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

exports.default = {
    props: ['header'],
    data: function data() {
        return {
            morePicUrl: 'http://demo.sc.chinaz.com/Files/pic/icons/6072/arrow1.png'
        };
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticClass: ["titlebox"]
  }, [_c('div', {
    staticClass: ["leftline"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(" " + _vm._s(_vm.header.title) + " ")]), _c('div', {
    staticClass: ["rightline"]
  })]), (_vm.header.more) ? _c('div', {
    staticClass: ["more"]
  }, [_c('text', {
    staticClass: ["moretitle"]
  }, [_vm._v("更多")]), _c('image', {
    staticClass: ["moreimage"],
    attrs: {
      "src": _vm.morePicUrl
    }
  })]) : _vm._e()])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["titlebox"]
  }, [_c('div', {
    staticClass: ["leftline"]
  }), _c('text', {
    staticClass: ["title"],
    attrs: {
      "value": [" ", {
        "@binding": "header.title"
      }, " "]
    }
  }), _c('div', {
    staticClass: ["rightline"]
  })]), _c('div', {
    staticClass: ["more"],
    attrs: {
      "[[match]]": "header.more"
    }
  }, [_c('text', {
    staticClass: ["moretitle"],
    attrs: {
      "value": "更多"
    }
  }), _c('image', {
    staticClass: ["moreimage"],
    attrs: {
      "src": {
        "@binding": "morePicUrl"
      }
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(33)
)

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(35)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/ImageSlider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3071a3c8"
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
/* 33 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "750",
    "height": "380"
  },
  "slider": {
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "0",
    "width": "750",
    "height": "380",
    "borderWidth": "0",
    "borderStyle": "solid",
    "borderColor": "#41B883"
  },
  "image-silder1": {
    "width": "750",
    "height": "380",
    "backgroundColor": "#318098"
  },
  "indicator": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "height": "60",
    "backgroundColor": "rgba(0,0,0,0)",
    "itemColor": "#FFFFFF",
    "itemSelectedColor": "#F44343"
  }
}

/***/ }),
/* 34 */
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

exports.default = {
    props: ['pictures']
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["image-silder1"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.pictures), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "stretch",
        "src": img.src
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["image-silder1"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_c('div', {
    staticClass: ["frame"],
    attrs: {
      "[[repeat]]": {
        "@expression": "pictures",
        "@alias": "img"
      }
    }
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "resize": "stretch",
      "src": {
        "@binding": "img.src"
      }
    }
  })]), _c('indicator', {
    staticClass: ["indicator"]
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(37)
)

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(39)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/ImageBanner.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-685a16e7"
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
/* 37 */
/***/ (function(module, exports) {

module.exports = {
  "banner": {
    "width": "750",
    "height": "300",
    "backgroundColor": "#FFFFFF"
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//

exports.default = {
    props: ['banner']
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    staticClass: ["banner"],
    attrs: {
      "src": _vm.banner
    }
  })
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image', {
    staticClass: ["banner"],
    attrs: {
      "src": {
        "@binding": "banner"
      },
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(45)
)

/* script */
__vue_exports__ = __webpack_require__(46)

/* template */
var __vue_template__ = __webpack_require__(47)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/HotFloor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cc651f22"
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
/* 45 */
/***/ (function(module, exports) {

module.exports = {
  "floor": {
    "width": "714",
    "marginTop": "36",
    "marginRight": "18",
    "marginBottom": "16",
    "marginLeft": "18",
    "backgroundColor": "#EB3232",
    "borderRadius": "10",
    "paddingBottom": "88"
  },
  "header": {
    "width": "714",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "height": "80"
  },
  "bgImg": {
    "position": "absolute",
    "top": "-20",
    "left": 0,
    "right": 0,
    "width": "714",
    "height": "80"
  },
  "footer": {
    "width": "714",
    "height": "96",
    "position": "absolute",
    "bottom": "0",
    "left": 0,
    "right": 0,
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "more": {
    "height": "44",
    "flexDirection": "row",
    "borderRadius": "20",
    "borderColor": "#FFFFFF",
    "borderWidth": "1",
    "alignItems": "center"
  },
  "moretitle": {
    "fontSize": "24",
    "color": "#FFFFFF",
    "marginTop": "10",
    "marginRight": "0",
    "marginBottom": "10",
    "marginLeft": "15"
  },
  "moreimage": {
    "width": "24",
    "height": "24",
    "marginRight": "10",
    "marginLeft": "10"
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _HotMerchandise = __webpack_require__(6);

var _HotMerchandise2 = _interopRequireDefault(_HotMerchandise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: ['merchandiselist', 'headerImgUrl'],
    components: {
        'hot-merchandise': _HotMerchandise2.default
    },
    data: function data() {
        return {
            morePicUrl: 'http://demo.sc.chinaz.com/Files/pic/icons/6072/arrow1.png'

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
//
//
//
//
//
//
//

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["floor"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["bgImg"],
    attrs: {
      "src": _vm.headerImgUrl
    }
  })]), _vm._l((_vm.merchandiselist), function(product, p) {
    return _c('div', {
      key: p,
      staticStyle: {
        marginBottom: "10px"
      }
    }, [_c('hot-merchandise', {
      attrs: {
        "product": product
      }
    })], 1)
  }), _c('div', {
    staticClass: ["footer"]
  }, [_c('div', {
    staticClass: ["more"]
  }, [_c('text', {
    staticClass: ["moretitle"]
  }, [_vm._v("查看更多")]), _c('image', {
    staticClass: ["moreimage"],
    attrs: {
      "src": _vm.morePicUrl
    }
  })])])], 2)
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["floor"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('image', {
    staticClass: ["bgImg"],
    attrs: {
      "src": {
        "@binding": "headerImgUrl"
      }
    }
  })]), _c('div', {
    key: {
      "@binding": "p"
    },
    staticStyle: {
      marginBottom: "10px"
    },
    attrs: {
      "[[repeat]]": {
        "@expression": "merchandiselist",
        "@alias": "product",
        "@index": "p"
      }
    }
  }, [_c('hot-merchandise', {
    attrs: {
      "product": {
        "@binding": "product"
      },
      "@inRecycleList": true
    }
  })], 1), _c('div', {
    staticClass: ["footer"]
  }, [_c('div', {
    staticClass: ["more"]
  }, [_c('text', {
    staticClass: ["moretitle"],
    attrs: {
      "value": "查看更多"
    }
  }), _c('image', {
    staticClass: ["moreimage"],
    attrs: {
      "src": {
        "@binding": "morePicUrl"
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(49)
)

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(51)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/OptimizationFloorHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-073f160c"
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
/* 49 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "width": "750",
    "height": "116"
  },
  "content": {
    "position": "absolute",
    "left": "18",
    "right": "18",
    "bottom": "20",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "title": {
    "color": "#FF9E5A",
    "marginLeft": "0",
    "fontSize": "36"
  },
  "subtitle": {
    "color": "#999999",
    "fontSize": "28"
  },
  "more": {
    "position": "absolute",
    "right": 0,
    "bottom": "5",
    "borderRadius": "17",
    "height": "34",
    "backgroundColor": "#FF9E5A",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "moretitle": {
    "fontSize": "24",
    "color": "#FFFFFF",
    "marginLeft": "10",
    "marginRight": "5"
  },
  "moreimgae": {
    "height": "24",
    "width": "24",
    "marginRight": "10"
  }
}

/***/ }),
/* 50 */
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

exports.default = {
    data: function data() {
        return {
            title: '每日优选',
            subtitle: '进店必BUY',
            moretitle: '更多',
            morePicUrl: 'http://demo.sc.chinaz.com/Files/pic/icons/6072/arrow1.png'
        };
    }
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(" " + _vm._s(_vm.title))]), _c('text', {
    staticClass: ["subtitle"]
  }, [_vm._v(" " + _vm._s(_vm.subtitle))]), _c('div', {
    staticClass: ["more"]
  }, [_c('text', {
    staticClass: ["moretitle"]
  }, [_vm._v(" " + _vm._s(_vm.moretitle) + " ")]), _c('image', {
    staticClass: ["moreimgae"],
    attrs: {
      "src": _vm.morePicUrl
    }
  })])])])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": [" ", {
        "@binding": "title"
      }]
    }
  }), _c('text', {
    staticClass: ["subtitle"],
    attrs: {
      "value": [" ", {
        "@binding": "subtitle"
      }]
    }
  }), _c('div', {
    staticClass: ["more"]
  }, [_c('text', {
    staticClass: ["moretitle"],
    attrs: {
      "value": [" ", {
        "@binding": "moretitle"
      }, " "]
    }
  }), _c('image', {
    staticClass: ["moreimgae"],
    attrs: {
      "src": {
        "@binding": "morePicUrl"
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(57)
)

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(59)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/StoreFloorHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__["@render"] = __vue_template__["@render"]
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1dfdfe48"
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
/* 57 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "width": "750",
    "height": "88"
  },
  "content": {
    "position": "absolute",
    "left": "18",
    "right": "18",
    "bottom": "20",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "title": {
    "color": "#CD7600",
    "marginLeft": "0",
    "fontSize": "36"
  },
  "subtitle": {
    "color": "#333333",
    "marginLeft": "18",
    "fontSize": "26"
  },
  "more": {
    "position": "absolute",
    "right": 0,
    "bottom": "5",
    "height": "34",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "moretitle": {
    "fontSize": "24",
    "color": "#333333",
    "marginLeft": "10",
    "marginRight": "5"
  },
  "moreimgae": {
    "height": "24",
    "width": "24",
    "marginRight": "10"
  }
}

/***/ }),
/* 58 */
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

exports.default = {
    props: ['header'],
    data: function data() {
        return {
            moretitle: '更多',
            morePicUrl: 'http://demo.sc.chinaz.com/Files/pic/icons/6072/arrow1.png'
        };
    }
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(" " + _vm._s(_vm.header.title))]), _c('text', {
    staticClass: ["subtitle"]
  }, [_vm._v(" " + _vm._s(_vm.header.subtitle))]), (_vm.header.more) ? _c('div', {
    staticClass: ["more"]
  }, [_c('text', {
    staticClass: ["moretitle"]
  }, [_vm._v(" " + _vm._s(_vm.moretitle) + " ")]), _c('image', {
    staticClass: ["moreimgae"],
    attrs: {
      "src": _vm.morePicUrl
    }
  })]) : _vm._e()])])
},"@render":function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"],
    attrs: {
      "@isComponentRoot": true,
      "@templateId": _vm._uid,
      "@componentProps": _vm.$props || {}
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["title"],
    attrs: {
      "value": [" ", {
        "@binding": "header.title"
      }]
    }
  }), _c('text', {
    staticClass: ["subtitle"],
    attrs: {
      "value": [" ", {
        "@binding": "header.subtitle"
      }]
    }
  }), _c('div', {
    staticClass: ["more"],
    attrs: {
      "[[match]]": "header.more"
    }
  }, [_c('text', {
    staticClass: ["moretitle"],
    attrs: {
      "value": [" ", {
        "@binding": "moretitle"
      }, " "]
    }
  }), _c('image', {
    staticClass: ["moreimgae"],
    attrs: {
      "src": {
        "@binding": "morePicUrl"
      }
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(65)
)

/* script */
__vue_exports__ = __webpack_require__(66)

/* template */
var __vue_template__ = __webpack_require__(67)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/components/Home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8dc7cce2"
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
/* 65 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "backgroundColor": "#eeeeee",
    "width": "750"
  },
  "floorbanner": {
    "width": "714",
    "height": "237",
    "marginLeft": "18",
    "marginRight": "18"
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageSlider = __webpack_require__(32);

var _ImageSlider2 = _interopRequireDefault(_ImageSlider);

var _ImageBanner = __webpack_require__(36);

var _ImageBanner2 = _interopRequireDefault(_ImageBanner);

var _AppList = __webpack_require__(4);

var _AppList2 = _interopRequireDefault(_AppList);

var _Department = __webpack_require__(20);

var _Department2 = _interopRequireDefault(_Department);

var _FloorTitleHeader = __webpack_require__(24);

var _FloorTitleHeader2 = _interopRequireDefault(_FloorTitleHeader);

var _MerchandiseScrollH = __webpack_require__(40);

var _MerchandiseScrollH2 = _interopRequireDefault(_MerchandiseScrollH);

var _HotMerchandise = __webpack_require__(6);

var _HotMerchandise2 = _interopRequireDefault(_HotMerchandise);

var _HotFloor = __webpack_require__(44);

var _HotFloor2 = _interopRequireDefault(_HotFloor);

var _GridMerchandiseFloor = __webpack_require__(5);

var _GridMerchandiseFloor2 = _interopRequireDefault(_GridMerchandiseFloor);

var _GridMerchandiseScrollFloor = __webpack_require__(28);

var _GridMerchandiseScrollFloor2 = _interopRequireDefault(_GridMerchandiseScrollFloor);

var _OptimizationFloorHeader = __webpack_require__(48);

var _OptimizationFloorHeader2 = _interopRequireDefault(_OptimizationFloorHeader);

var _StoreRecommendFloor = __webpack_require__(52);

var _StoreRecommendFloor2 = _interopRequireDefault(_StoreRecommendFloor);

var _StoreFloorHeader = __webpack_require__(56);

var _StoreFloorHeader2 = _interopRequireDefault(_StoreFloorHeader);

var _ProductMagazineFloor = __webpack_require__(60);

var _ProductMagazineFloor2 = _interopRequireDefault(_ProductMagazineFloor);

var _ClassifiedTitlesHeader = __webpack_require__(16);

var _ClassifiedTitlesHeader2 = _interopRequireDefault(_ClassifiedTitlesHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//商品水平方向滚动列表
var _data = [{
  type: "imageslider",
  pictures: [{
    src: "http://img17.fn-mart.com/pic/fc9d13426d6d186cb69d/K2qTnn5TD2tghguMtn/1YSGSGjaeaO9fy/CsmRsFzS_QWAO0ovAAIqrYTmXIs884.jpg"
  }, {
    src: "http://img18.fn-mart.com/pic/87a713426d6d186cbe4c/hzq2221nv2tdhlugE2/1iSGSaOicyKyDa/CsmRs1ztWwSAC2odAAKidiumSD0378.jpg"
  }, {
    src: "http://img17.fn-mart.com/pic/d0fe13426d64186cbe6e/hTHnzz1T_2fMKdVlc2/1Yeamak9XGCRJa/CsmRs1zt2KKAdQ4wAAK2v4V43Gw971.jpg"
  }, {
    src: "http://img18.fn-mart.com/pic/d71713426d63186cbc4c/kzqnTT72vnCghMZlJ2/59oGoalGjySGZi/CsmRs1zs3GuAJ4BoAALCF0Cgr3E121.jpg"
  }, {
    src: "http://img17.fn-mart.com/pic/f41613426d67186cebc0/hz8zzz7nFTfdBlUgLz/5xeRmaoaPGdaDa/CsmRtVzszmSAdI10AAKrf5rSufI123.jpg"
  }]
}, {
  type: "imagebanner",
  bannerimg: "http://img18.fn-mart.com/pic/2b0113426d5d19396d24/B2q2TT5T_zLMBMZdQ2/5xoGoRLyf9Kita/CsmRs1zt7maAbS4JAAKx1wnVYro924.gif"
}, {
  type: "department",
  departmentInfo: {
    notice: {
      iconUrl: "http://img.beta1.fn/pic/cb3e13426cc125ccd54c/K28TTT1z_zCMBdugXz/5iSyUGZy3Rtyga/Csq5aVziW82AG7wEAAAeNmaYPrA014_org_q100s520.png",
      textlist: [{
        targetUrl: "",
        name: "IOS、安卓和小程序，首页测试专用哟！"
      }, {
        targetUrl: "",
        name: "0元起送喽！不满29元只需3元配送费！"
      }, {
        targetUrl: "",
        name: "啊啊啊，已经三月份啦！还有需求没完成呀！"
      }]
    },
    store: [{
      name: "闸北",
      iconUrl: "http://img17.fn-mart.com/pic/9e28134173111b483635/B2q2TT5T_zLMBMZdQ2/sieaoyEYMa_RUx/CsmRtFxKf9uAGvfVAAAG9NJON6Y793_org_q100s520.png"
    }, {
      name: "1小时送达",
      iconUrl: "http://img17.fn-mart.com/pic/9e28134173111b483635/B2q2TT5T_zLMBMZdQ2/sieaoyEYMa_RUx/CsmRtFxKf9uAGvfVAAAG9NJON6Y793_org_q100s520.png"
    }, {
      name: "安心食材",
      iconUrl: "http://img18.fn-mart.com/pic/45bd1341731cdcc21f32/BzHznn5T_2tlKguMc2/1YoaSyWiPykRhY/CsmRtFxKaYGAFpxYAAAJNPHFMuw793_org_q100s520.png"
    }, {
      name: "新鲜优品",
      iconUrl: "http://img18.fn-mart.com/pic/37f213417312dcc3599c/kTH222sTvTtMhdUlc2/7ioaSGXR0aQ9oG/CsmRs1xKaZWADtFZAAAGDtc2cGE104_org_q100s520.png"
    }],
    applist: [[{
      imgUrl: "http://img17.fn-mart.com/pic/41df13422e2425d78de1/kz8zTT1n_zCdkdVMQT/s9maoaQYdGP9fR/CsmRs1x93zuAF8OSAACsjL_iF4I232.png",
      title: "时令水果"
    }, {
      imgUrl: "http://img17.fn-mart.com/pic/d3e013422e2b25dacf8b/knqnTT5nFzCghdZdET/7iSaeaO9fyhYlR/CsmRtFwtwDOAHfL8AACOMN0PQzU246.png",
      title: "蔬菜菌菇"
    }, {
      imgUrl: "http://img18.fn-mart.com/pic/7a2813422e2525f12e5a/h28z22sT_nLdhlugJT/5xmRoaO9mGPiBx/CsmRs1wtwDiADD6uAACdiIY-yGI309.png",
      title: "肉蛋水产"
    }, {
      imgUrl: "http://img18.fn-mart.com/pic/41f413426c9cc457dbd0/hz8zzz7nFTfdBlUgLz/1Yeama3a0GmRBi/CsmRsFzeA22ANZj0AABk4bh6Pxg819.png",
      title: "乳品烘焙"
    }, {
      imgUrl: "http://img17.fn-mart.com/pic/102113426c9cc4592ae0/kTq2nn7nDzLdKMZgfT/7iSaeaOypyoaBx/CsmRsFzeA4KABScBAABtbhZ0soc211.png",
      title: "面点主食"
    }], [{
      imgUrl: "http://img17.fn-mart.com/pic/700413426c95c45a2147/Kz6Tnn72FztdBlulfz/1ioyoRXyWaoaB9/CsmRsFzeA5KAaU2RAADGQ7PsE8s536.png",
      title: "熟食套餐"
    }, {
      imgUrl: "http://img18.fn-mart.com/pic/5cbf13422e29260d2f16/kz8zTT1n_zCdkdVMQT/1xmGSG2yuGuiFR/CsmRs1wtwFGASNZ9AACBUntBfgU952.png",
      title: "酒水饮料"
    }, {
      imgUrl: "http://img17.fn-mart.com/pic/4cff13422e222611c7f5/B2q2TT5T_zLMBMZdQ2/sieaoyEYhYtxpG/CsmRtFwtwFeAHdeuAACHX3Mdorw870.png",
      title: "休闲零食"
    }, {
      imgUrl: "http://img18.fn-mart.com/pic/eeef13422e25271117fe/K2qTnn5TD2tghguMEn/5xmRoa09vGBiQa/CsmRs1wtwF2ABm_hAABpCJmiFgY267.png",
      title: "粮油调味"
    }, {
      imgUrl: "http://img17.fn-mart.com/pic/32d513422e2b27510c3a/h26n22sT_2tMKludJn/sYSReGOa2RgaER/CsmRs1wtwGKAIBsBAABX27_oB9k780.png",
      title: "美护百货"
    }]]
  }
}, {
  type: 'titleheader',
  header: {
    title: '新鲜水果',
    more: true
  }
}, {
  type: 'floor-banner',
  picUrl: 'http://img.beta1.fn/pic/b87513422f882825d6cb/KzHz2272DzCdBMVgu2/59eaLajGlGDaCG/Csq5Zlylw_2AWr4WAAp-nROhzV4437.png'
}, {
  type: 'merchandiselist-horizontal',
  merchandiselist: [{
    unit: '500g',
    referencePrice: '6',
    title: '小蓉哥牌0031号香蕉-称重品-促销限购',
    newComeIdent: 0,
    price: '5.45',
    imgUrl: 'http://img.feiniugo.com/pic/613d133f0ea925429897/kzqnTT72vnCghMZlf2/5xeR_ajalGdaJ9/Csq5Z1wjLRmAIj3lAAJsIDuygGA990_org_q100s520.jpg'
  }, {
    imgUrl: "http://img.feiniugo.com/pic/4eb2133f116d20fe7bbc/K282nn7n_TLMKlVgXn/59mGeRZajafGda/Csq5aFwKCc2AYFL9AAC_5JhinQQ633_org_q100s520.jpg",
    unit: "盒",
    referencePrice: "10",
    title: "小蓉哥牌0023号橙子-餐饮标品-印花限购",
    newComeIdent: 0,
    price: "2.22"
  }, {
    imgUrl: "http://img.feiniugo.com/pic/27d9133f0bca1996f7b7/BnHT2212FTtMkMud0n/1iSROaXRgySGpa/Csq5ZVvjo--AKUR5AAEvGR6ajWg039_org_q100s520.jpg",
    unit: "盒",
    isHasOption: 1,
    title: "小蓉哥牌奥利奥",
    price: "15.9",
    newComeIdent: 0
  }, {
    "imgUrl": "http://img.feiniugo.com/pic/c204133f10cc2c39675b/hnqzTT12_ntdklVdC2/7YSGUa3alydGO9/Csq5Z1wI9KWAdRyHAAEtq0Fdb6Q125_org_q100s520.jpg",
    "unit": "个",
    "title": "0009号苹果-餐饮标品",
    "price": "9.87",
    "newComeIdent": 0
  }, {
    "imgUrl": "http://img.feiniugo.com/pic/e92f133f0bcc19b89c01/hT82227nvnClKMZlVT/7YSyJGOalahy3i/Csq5ZlvjpUGAcUJyAADIc_LKNhE795_org_q100s520.jpg",
    "unit": "瓶",
    "isHasOption": 0,
    "title": "小蓉哥牌果粒多小蓉哥牌果粒多小蓉哥牌果粒多小蓉哥牌果粒多小蓉哥牌果粒多小",
    "price": "6.9",
    "newComeIdent": 1
  }, {
    "imgUrl": "http://img.feiniugo.com/pic/9414133f10c92da83c38/kz8zTT1n_zCdkdVMtT/5xmRuaORdGgRjx/Csq5Z1wI9KWAdRyHAAEtq0Fdb6Q125_org_q100s520.jpg",
    "unit": "个",
    "isHasOption": 0,
    "title": "0002号苹果-餐饮标品",
    "price": "9.87",
    "newComeIdent": 0
  }, {
    "imgUrl": "http://img.feiniugo.com/pic/ca2b133f11661a5f2e2b/kTq2nn7nDzLdKMZgWT/1xmGpG3ygGeGCR/Csq5ZVwJ1ZeAdut9AADkEfZF_yA560_org_q100s520.jpg",
    "unit": "500g",
    "isHasOption": 0,
    "title": "小蓉哥牌0012号枣子-餐饮称重品 ",
    "price": "5",
    "newComeIdent": 0
  }]
}, {
  type: 'hot-floor',
  headerImgUrl: 'http://img18.fn-mart.com/pic/d75a133f076c22ace832/hz8zzz7nFTfdBlUghz/s9maoaQYdGOy_R/CtEF2VvaltuAZQ0TAACvlUnGIls172.png',
  merchandiselist: [{
    unit: '盒',
    progress: 88,
    soldNumber: "已抢46件",
    subtitle: '采用鲜鸡与奥尔良酱料精心研制入味,香味与口感兼具',
    referencePrice: '17.3',
    title: '纽奥良烤鸡 1只',
    newComeIdent: 0,
    corners: {
      textColor: "#ff5756",
      bgColor: "#FFFFFF",
      borderColor: "#ff5756",
      endColor: "#FF4747",
      desc: "省7.4元",
      startColor: "#FF1684"
    },
    price: '9.9',
    imgUrl: 'http://img18.fn-mart.com/pic/77f81340f64b1b9867f1/Kn6z2212FTflkMVMQz/sieaoyFyMaBRpG/CsmRtFutoDuAb-2nAAdFfvNP1c8786.jpg'
  }, {
    unit: '盒',
    progress: 55,
    soldNumber: "已抢16件",
    subtitle: '',
    referencePrice: '29.9',
    title: '欢乐熟食全家桶500g+/份',
    newComeIdent: 0,
    corners: {
      textColor: "#ff5756",
      bgColor: "#FFFFFF",
      borderColor: "#ff5756",
      endColor: "#FF4747",
      desc: "省10元",
      startColor: "#FF1684"
    },
    price: '19.9',
    imgUrl: 'http://img17.fn-mart.com/pic/1a8513422e1929ebe54f/K28TTT1z_zCMBdugtz/7ioaSGXRmaXG_G/CsmRsFy27xaAAzFpAATfiwmUhE4806.jpg'
  }, {
    unit: '盒',
    progress: 89,
    soldNumber: "已抢33件",
    subtitle: '麻辣鲜香，屡食不厌，回味无穷',
    referencePrice: '',
    title: '【即食】特色小龙虾十三香味 500g/盒',
    newComeIdent: 0,
    corners: {
      textColor: "#ff5756",
      bgColor: "#FFFFFF",
      borderColor: "#ff5756",
      endColor: "#FF4747",
      desc: "买1赠1",
      startColor: "#FF1684"
    },
    price: '66',
    imgUrl: 'http://img17.fn-mart.com/pic/d2621341efae22948457/K282nn7n_TLMKlVgcn/5xmRoaSRLGFR2a/CsmRs1yPN2iAIYlQAAU3rW5sLUI604.jpg'
  }, {
    unit: '盒',
    progress: 77,
    soldNumber: "已抢259件",
    subtitle: '由猪前排骨精切，非肋排，肉质鲜嫩，适合红烧、煲汤',
    referencePrice: '',
    title: '(日日鲜)带肉猪小排350g/盒（现制）',
    newComeIdent: 0,
    corners: {
      textColor: "#ff5756",
      bgColor: "#FFFFFF",
      borderColor: "#ff5756",
      endColor: "#FF4747",
      desc: "买1赠1",
      startColor: "#FF1684"
    },
    price: '19.9',
    imgUrl: 'http://img17.fn-mart.com/pic/cdda1340f8ed24f5e203/KzHz2272DzCdBMVgJ2/s9maoaQyzGEydR/CsmRs1uSJQWAOYWgAATh7c5WrXQ807.jpg'
  }, {
    unit: '盒',
    progress: 7,
    soldNumber: "已抢8件",
    subtitle: '蜜枣粽大粽子',
    referencePrice: '',
    title: '昌记蜜枣粽120g*8/组',
    newComeIdent: 0,
    price: '66',
    imgUrl: 'http://img18.fn-mart.com/pic/6203134232a32849249a/BTHTzz1zFztdBgugEz/59eyoaXxQGuauY/CsmRtFysXLmAOA_WAAKKQ6aULo8747.jpg'
  }]
}, {
  type: 'titleheader',
  header: {
    title: '新鲜水果',
    more: false
  }
}, {
  type: 'floor-banner',
  picUrl: 'http://img.beta1.fn/pic/b87513422f882825d6cb/KzHz2272DzCdBMVgu2/59eaLajGlGDaCG/Csq5Zlylw_2AWr4WAAp-nROhzV4437.png'
}, {
  type: 'classified-title-header'
}, {
  type: 'grid-merchandise-floor',
  merchandiselist: [[{
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
  }]]
}, {
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
}, {
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
}]; //
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
//

exports.default = {
  components: {
    "image-slider": _ImageSlider2.default,
    imagebanner: _ImageBanner2.default,
    applist: _AppList2.default,
    department: _Department2.default,
    'merchandiselist-horizontal': _MerchandiseScrollH2.default,
    'title-header': _FloorTitleHeader2.default,
    'hot-floor': _HotFloor2.default,
    'grid-merchandise-floor': _GridMerchandiseFloor2.default,
    'grid-scroll-floor': _GridMerchandiseScrollFloor2.default,
    'optimization-floor-header': _OptimizationFloorHeader2.default,
    'store-recommend-floor': _StoreRecommendFloor2.default,
    'store-floor-header': _StoreFloorHeader2.default,
    'product-magazine-floor': _ProductMagazineFloor2.default,
    'classified-title-header': _ClassifiedTitlesHeader2.default
  },
  data: function data() {
    return {
      dataList: _data
    };
  },

  methods: {
    loadmore: function loadmore() {}
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('recycle-list', {
    staticClass: ["list"],
    appendAsTree: true,
    attrs: {
      "listData": _vm.dataList,
      "bindingExpression": "dataList",
      "alias": "item",
      "index": "index",
      "switch": "type",
      "append": "tree"
    },
    on: {
      "loadmore": _vm.loadmore
    }
  }, [_c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "imageslider",
      "append": "tree"
    }
  }, [_c('image-slider', {
    staticClass: ["imageslider"],
    attrs: {
      "pictures": {
        "@binding": "item.pictures"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "imagebanner",
      "append": "tree"
    }
  }, [_c('imagebanner', {
    staticClass: ["imagebanner"],
    attrs: {
      "banner": {
        "@binding": "item.bannerimg"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "department",
      "append": "tree"
    }
  }, [_c('department', {
    attrs: {
      "departmentInfo": {
        "@binding": "item.departmentInfo"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "merchandiselist-horizontal",
      "append": "tree"
    }
  }, [_c('merchandiselist-horizontal', {
    attrs: {
      "merchandiselist": {
        "@binding": "item.merchandiselist"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "floor-banner",
      "append": "tree"
    }
  }, [_c('image', {
    staticClass: ["floorbanner"],
    attrs: {
      "src": {
        "@binding": "item.picUrl"
      }
    }
  })]), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "titleheader",
      "append": "tree"
    }
  }, [_c('title-header', {
    attrs: {
      "header": {
        "@binding": "item.header"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "hot-floor",
      "append": "tree"
    }
  }, [_c('hot-floor', {
    attrs: {
      "merchandiselist": {
        "@binding": "item.merchandiselist"
      },
      "headerImgUrl": {
        "@binding": "item.headerImgUrl"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "grid-merchandise-floor",
      "append": "tree"
    }
  }, [_c('grid-merchandise-floor', {
    attrs: {
      "floors": {
        "@binding": "item.merchandiselist"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "grid-scroll-floor",
      "append": "tree"
    }
  }, [_c('grid-scroll-floor', {
    attrs: {
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "optimization-floor-header",
      "append": "tree"
    }
  }, [_c('optimization-floor-header', {
    attrs: {
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "store-recommend-floor",
      "append": "tree"
    }
  }, [_c('store-recommend-floor', {
    attrs: {
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "store-floor-header",
      "append": "tree"
    }
  }, [_c('store-floor-header', {
    attrs: {
      "header": {
        "@binding": "item.header"
      },
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "product-magazine-floor",
      "append": "tree"
    }
  }, [_c('product-magazine-floor', {
    attrs: {
      "@inRecycleList": true
    }
  })], 1), _c('cell-slot', {
    key: {
      "@binding": "index"
    },
    appendAsTree: true,
    attrs: {
      "case": "classified-title-header",
      "append": "tree"
    }
  }, [_c('classified-title-header', {
    attrs: {
      "@inRecycleList": true
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(86);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(87)
)

/* script */
__vue_exports__ = __webpack_require__(88)

/* template */
var __vue_template__ = __webpack_require__(89)
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
__vue_options__.__file = "/Users/medita/Desktop/Weex/FN_Home_Weex_Demo/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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
/* 87 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "width": "750"
  },
  "home": {
    "width": "750",
    "backgroundColor": "#EEEEEE"
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(64);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal') || {}; //
//
//
//
//
//
//

var stream = weex.requireModule('stream') || {};
var E68API = 'http://b2b-newapi.beta1.fn/homePage/getStoreHot';
var YXAPI = "http://www-yxapp.beta1.fn/home/homePage/i121";

exports.default = {
  name: 'App',
  components: {
    'home': _Home2.default
  },
  data: function data() {
    return {
      posttitle: '我是啊哈哈哈哈哈哈',
      content: '我是内容区域'
    };
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
    btnclick: function btnclick() {
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
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home', {
    staticClass: ["home"]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
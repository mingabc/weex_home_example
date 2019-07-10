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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
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

/***/ 14:
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

/***/ 15:
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

/***/ 6:
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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _HotMerchandise = __webpack_require__(6);

var _HotMerchandise2 = _interopRequireDefault(_HotMerchandise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_HotMerchandise2.default.el = '#root';
new Vue(_HotMerchandise2.default);

/***/ })

/******/ });
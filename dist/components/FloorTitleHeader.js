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
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
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

/***/ 25:
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

/***/ 26:
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

/***/ 27:
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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FloorTitleHeader = __webpack_require__(24);

var _FloorTitleHeader2 = _interopRequireDefault(_FloorTitleHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_FloorTitleHeader2.default.el = '#root';
new Vue(_FloorTitleHeader2.default);

/***/ })

/******/ });
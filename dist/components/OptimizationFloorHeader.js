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
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
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

/***/ 49:
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

/***/ 50:
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

/***/ 51:
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

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _OptimizationFloorHeader = __webpack_require__(48);

var _OptimizationFloorHeader2 = _interopRequireDefault(_OptimizationFloorHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_OptimizationFloorHeader2.default.el = '#root';
new Vue(_OptimizationFloorHeader2.default);

/***/ })

/******/ });
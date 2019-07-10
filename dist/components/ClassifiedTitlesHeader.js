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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
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

/***/ 17:
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

/***/ 18:
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

/***/ 19:
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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ClassifiedTitlesHeader = __webpack_require__(16);

var _ClassifiedTitlesHeader2 = _interopRequireDefault(_ClassifiedTitlesHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ClassifiedTitlesHeader2.default.el = '#root';
new Vue(_ClassifiedTitlesHeader2.default);

/***/ })

/******/ });
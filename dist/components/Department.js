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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
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

/***/ 21:
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

/***/ 22:
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

/***/ 23:
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

/***/ 4:
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

/***/ 7:
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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Department = __webpack_require__(20);

var _Department2 = _interopRequireDefault(_Department);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Department2.default.el = '#root';
new Vue(_Department2.default);

/***/ }),

/***/ 8:
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

/***/ 9:
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

/***/ })

/******/ });
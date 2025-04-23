"use strict";
(self["webpackChunk_smart_construction_widgets_web"] = self["webpackChunk_smart_construction_widgets_web"] || []).push([[273],{

/***/ 273:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ RealTimeData; }
});

;// CONCATENATED MODULE: ./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/widgets/basic/RealTimeData.vue?vue&type=template&id=ff48dd84&scoped=true
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "real-time-data" }, [
    _c("h3", [_vm._v(_vm._s(_vm.title))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "data-list" },
      _vm._l(_vm.data, function (item, index) {
        return _c("div", { key: index, staticClass: "data-item" }, [
          _c("span", { staticClass: "data-label" }, [
            _vm._v(_vm._s(item.label) + ":"),
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "data-value" }, [
            _vm._v(_vm._s(item.value)),
          ]),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/widgets/basic/RealTimeData.vue?vue&type=template&id=ff48dd84&scoped=true

;// CONCATENATED MODULE: ./node_modules/.store/@gcbp+gcp-cli@2.0.0/node_modules/@gcbp/gcp-cli/dist/webpack/loader/swc.js??clonedRuleSet-2.use[0]!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/widgets/basic/RealTimeData.vue?vue&type=script&lang=js
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
/* harmony default export */ var RealTimeDatavue_type_script_lang_js = ({
    name: "RealTimeData",
    props: {
        title: {
            type: String,
            "default": "实时数据"
        },
        data: {
            type: Array,
            "default": function() {
                return [
                    {
                        label: "温度",
                        value: "25\xb0C"
                    },
                    {
                        label: "湿度",
                        value: "60%"
                    },
                    {
                        label: "PM2.5",
                        value: "35 μg/m\xb3"
                    }
                ];
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/widgets/basic/RealTimeData.vue?vue&type=script&lang=js
 /* harmony default export */ var basic_RealTimeDatavue_type_script_lang_js = (RealTimeDatavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(249);
;// CONCATENATED MODULE: ./src/widgets/basic/RealTimeData.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  basic_RealTimeDatavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "ff48dd84",
  null
  
)

/* harmony default export */ var RealTimeData = (component.exports);

/***/ }),

/***/ 249:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
//# sourceMappingURL=273.d6ba6255.js.map
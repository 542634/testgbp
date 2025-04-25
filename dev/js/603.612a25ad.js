"use strict";
(self["webpackChunk_workspace_smart_construction_widgets_web"] = self["webpackChunk_workspace_smart_construction_widgets_web"] || []).push([[603],{

/***/ 603:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SmartModal; }
});

;// CONCATENATED MODULE: ./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/widgets/action/SmartModal.vue?vue&type=template&id=ab9e22b0&scoped=true
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "a-button",
        { attrs: { type: "primary" }, on: { click: _vm.showModal } },
        [_vm._v("打开弹窗")]
      ),
      _vm._v(" "),
      _c(
        "a-modal",
        {
          attrs: {
            visible: _vm.visible,
            title: _vm.title,
            maskStyle: { backgroundColor: _vm.maskColor },
          },
          on: { ok: _vm.handleOk, cancel: _vm.handleCancel },
        },
        [
          _c("div", { style: { backgroundColor: _vm.contentBgColor } }, [
            _c("p", [_vm._v(_vm._s(_vm.content))]),
          ]),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/widgets/action/SmartModal.vue?vue&type=template&id=ab9e22b0&scoped=true

// EXTERNAL MODULE: ./node_modules/.store/@vue+composition-api@1.7.2/node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__(113);
;// CONCATENATED MODULE: ./node_modules/.store/@gcbp+gcp-cli@2.0.0/node_modules/@gcbp/gcp-cli/dist/webpack/loader/swc.js??clonedRuleSet-2.use[0]!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/widgets/action/SmartModal.vue?vue&type=script&lang=js
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

/* harmony default export */ var SmartModalvue_type_script_lang_js = ({
    name: "SmartModal",
    props: {
        title: {
            type: String,
            "default": "默认标题"
        },
        content: {
            type: String,
            "default": "默认内容"
        },
        maskColor: {
            type: String,
            "default": "rgba(0, 0, 0, 0.5)"
        },
        contentBgColor: {
            type: String,
            "default": "#ffffff"
        }
    },
    setup: function() {
        var visible = (0,vue_composition_api/* ref */.iH)(false);
        var showModal = function() {
            visible.value = true;
        };
        var handleOk = function() {
            visible.value = false;
        };
        var handleCancel = function() {
            visible.value = false;
        };
        return {
            visible: visible,
            showModal: showModal,
            handleOk: handleOk,
            handleCancel: handleCancel
        };
    }
});

;// CONCATENATED MODULE: ./src/widgets/action/SmartModal.vue?vue&type=script&lang=js
 /* harmony default export */ var action_SmartModalvue_type_script_lang_js = (SmartModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(249);
;// CONCATENATED MODULE: ./src/widgets/action/SmartModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  action_SmartModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "ab9e22b0",
  null
  
)

/* harmony default export */ var SmartModal = (component.exports);

/***/ })

}]);
//# sourceMappingURL=603.612a25ad.js.map
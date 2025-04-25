"use strict";
(self["webpackChunk_workspace_smart_construction_widgets_web"] = self["webpackChunk_workspace_smart_construction_widgets_web"] || []).push([[95],{

/***/ 2095:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SmartModal; }
});

;// CONCATENATED MODULE: ./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/widgets/action/SmartModal.vue?vue&type=template&id=93224530&scoped=true
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
            bodyStyle: {
              padding: "0",
              height: _vm.height,
              maxHeight: _vm.maxHeight,
              overflow: "auto",
            },
            width: _vm.width,
          },
          on: { ok: _vm.handleOk, cancel: _vm.handleCancel },
        },
        [
          _c(
            "div",
            {
              staticClass: "smart-modal-content",
              style: {
                backgroundColor: _vm.contentBgColor,
                height: _vm.contentHeight,
                maxHeight: _vm.contentMaxHeight,
              },
            },
            [
              _vm.showIcon
                ? _c(
                    "div",
                    { staticClass: "modal-header-icon" },
                    [
                      _c("a-icon", {
                        style: { color: _vm.iconColor, fontSize: "24px" },
                        attrs: { type: _vm.iconType },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-content",
                  style: { height: _vm.contentHeight },
                },
                [
                  _c("p", { staticClass: "content-text" }, [
                    _vm._v(_vm._s(_vm.content)),
                  ]),
                  _vm._v(" "),
                  _vm.footerText
                    ? _c(
                        "div",
                        { staticClass: "content-footer" },
                        [
                          _c("a-icon", { attrs: { type: "clock-circle" } }),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(_vm.footerText))]),
                        ],
                        1
                      )
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer" },
                [
                  _c(
                    "a-button",
                    {
                      style: { marginRight: "8px" },
                      on: { click: _vm.handleCancel },
                    },
                    [_vm._v("取消")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a-button",
                    { attrs: { type: "primary" }, on: { click: _vm.handleOk } },
                    [_vm._v("确认")]
                  ),
                ],
                1
              ),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/widgets/action/SmartModal.vue?vue&type=template&id=93224530&scoped=true

// EXTERNAL MODULE: ./node_modules/.store/core-js@3.41.0/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(5121);
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


/* harmony default export */ var SmartModalvue_type_script_lang_js = ({
    name: "SmartModal",
    props: {
        title: {
            type: String,
            "default": "智慧工地通知"
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
        },
        width: {
            type: [
                String,
                Number
            ],
            "default": 520
        },
        height: {
            type: [
                String,
                Number
            ],
            "default": "auto"
        },
        maxHeight: {
            type: [
                String,
                Number
            ],
            "default": "80vh"
        },
        contentHeight: {
            type: [
                String,
                Number
            ],
            "default": "auto"
        },
        contentMaxHeight: {
            type: [
                String,
                Number
            ],
            "default": "calc(80vh - 120px)"
        },
        showIcon: {
            type: Boolean,
            "default": true
        },
        iconType: {
            type: String,
            "default": "notification"
        },
        iconColor: {
            type: String,
            "default": "#1890ff"
        },
        footerText: {
            type: String,
            "default": ""
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
var componentNormalizer = __webpack_require__(4249);
;// CONCATENATED MODULE: ./src/widgets/action/SmartModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  action_SmartModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "93224530",
  null
  
)

/* harmony default export */ var SmartModal = (component.exports);

/***/ })

}]);
//# sourceMappingURL=95.1a805d09.js.map
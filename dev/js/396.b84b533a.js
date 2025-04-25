"use strict";
(self["webpackChunk_smart_construction_widgets_web"] = self["webpackChunk_smart_construction_widgets_web"] || []).push([[396],{

/***/ 7396:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ RealTimeData; }
});

;// CONCATENATED MODULE: ./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/widgets/basic/RealTimeData.vue?vue&type=template&id=1ad5136b&scoped=true
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "real-time-data" }, [
    _c("div", { staticClass: "map-container", attrs: { id: "map" } }),
    _vm._v(" "),
    _c("div", { staticClass: "left_box" }, [
      _c("div", { staticClass: "info-panel top-panel" }, [
        _c("h3", [_vm._v("环境监测概况")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "data-list" },
          _vm._l(_vm.environmentData, function (item, index) {
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-panel bottom-panel" }, [
        _c("h3", [_vm._v("能源消耗概况")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "data-list" },
          _vm._l(_vm.energyData, function (item, index) {
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
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "right_box" }, [
      _c("div", { staticClass: "info-panel left-panel" }, [
        _c("h3", [_vm._v("施工晴雨表")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "data-list" },
          _vm._l(_vm.weatherData, function (item, index) {
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "info-panel right-panel" }, [
        _c("h3", [_vm._v("项目预警信息")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "data-list" },
          _vm._l(_vm.warningData, function (item, index) {
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
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/widgets/basic/RealTimeData.vue?vue&type=template&id=1ad5136b&scoped=true

// EXTERNAL MODULE: ./node_modules/.store/core-js@3.41.0/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(4784);
// EXTERNAL MODULE: ./node_modules/.store/core-js@3.41.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(9917);
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


/* harmony default export */ var RealTimeDatavue_type_script_lang_js = ({
    name: "RealTimeData",
    props: {
        environmentData: {
            type: Array,
            "default": function() {
                return [
                    {
                        label: "PM2.5",
                        value: "35 μg/m\xb3"
                    },
                    {
                        label: "温度",
                        value: "25\xb0C"
                    },
                    {
                        label: "湿度",
                        value: "60%"
                    }
                ];
            }
        },
        energyData: {
            type: Array,
            "default": function() {
                return [
                    {
                        label: "电力消耗",
                        value: "120 kWh"
                    },
                    {
                        label: "水消耗",
                        value: "15 m\xb3"
                    },
                    {
                        label: "燃气消耗",
                        value: "8 m\xb3"
                    }
                ];
            }
        },
        weatherData: {
            type: Array,
            "default": function() {
                return [
                    {
                        label: "今日天气",
                        value: "晴"
                    },
                    {
                        label: "风速",
                        value: "5 km/h"
                    },
                    {
                        label: "降水概率",
                        value: "10%"
                    }
                ];
            }
        },
        warningData: {
            type: Array,
            "default": function() {
                return [
                    {
                        label: "安全隐患",
                        value: "2条"
                    },
                    {
                        label: "进度延误",
                        value: "1项"
                    },
                    {
                        label: "质量问题",
                        value: "0项"
                    }
                ];
            }
        }
    },
    mounted: function() {
        var _this = this;
        this.loadAMap().then(function() {
            _this.initMap();
        });
    },
    methods: {
        loadAMap: function() {
            return new Promise(function(resolve, reject) {
                if (typeof AMap !== "undefined") {
                    resolve(); // 如果 AMap 已经加载，直接返回
                } else {
                    var script = document.createElement("script");
                    script.src = "https://webapi.amap.com/maps?v=2.0&key=28c128938daff70e889551a0f56160c7";
                    script.onload = function() {
                        return resolve();
                    };
                    script.onerror = function(err) {
                        return reject(err);
                    };
                    document.head.appendChild(script);
                }
            });
        },
        initMap: function() {
            var map = new AMap.Map("map", {
                zoom: 15,
                center: [
                    116.397428,
                    39.90923
                ],
                viewMode: "2D"
            });
            // 添加控件（如缩放、定位等）
            AMap.plugin([
                "AMap.ToolBar",
                "AMap.Scale"
            ], function() {
                map.addControl(new AMap.ToolBar());
                map.addControl(new AMap.Scale());
            });
        }
    }
});

;// CONCATENATED MODULE: ./src/widgets/basic/RealTimeData.vue?vue&type=script&lang=js
 /* harmony default export */ var basic_RealTimeDatavue_type_script_lang_js = (RealTimeDatavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4249);
;// CONCATENATED MODULE: ./src/widgets/basic/RealTimeData.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  basic_RealTimeDatavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1ad5136b",
  null
  
)

/* harmony default export */ var RealTimeData = (component.exports);

/***/ })

}]);
//# sourceMappingURL=396.b84b533a.js.map
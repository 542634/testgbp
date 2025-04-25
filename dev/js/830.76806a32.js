"use strict";
(self["webpackChunk_workspace_smart_construction_widgets_web"] = self["webpackChunk_workspace_smart_construction_widgets_web"] || []).push([[830],{

/***/ 84830:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ action; }
});

;// CONCATENATED MODULE: ./node_modules/.store/@gcbp+gcp-cli@2.0.0/node_modules/@gcbp/gcp-cli/dist/webpack/loader/swc.js??clonedRuleSet-2.use[0]!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/widgets/action/index.vue?vue&type=template&id=252d8d49&scoped=true
var render = function render() {
    var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
    return _c("div", {
        staticClass: "smart-construction-dashboard"
    }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", {
            staticClass: "content"
        }, [
            _c("div", {
                ref: "mapContainer",
                staticClass: "map-container"
            }),
            _vm._v(" "),
            _c("div", {
                staticClass: "info-panel"
            }, [
                _c("a-card", {
                    staticClass: "panel-card",
                    attrs: {
                        title: "项目概况"
                    }
                }, [
                    _c("a-row", {
                        attrs: {
                            gutter: [
                                16,
                                16
                            ]
                        }
                    }, [
                        _c("a-col", {
                            attrs: {
                                span: 12
                            }
                        }, [
                            _c("a-statistic", {
                                attrs: {
                                    title: "在场人数",
                                    value: 156
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "prefix",
                                        fn: function fn() {
                                            return [
                                                _c("team-outlined")
                                            ];
                                        },
                                        proxy: true
                                    }
                                ])
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("a-col", {
                            attrs: {
                                span: 12
                            }
                        }, [
                            _c("a-statistic", {
                                attrs: {
                                    title: "施工区域",
                                    value: 5
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "prefix",
                                        fn: function fn() {
                                            return [
                                                _c("environment-outlined")
                                            ];
                                        },
                                        proxy: true
                                    }
                                ])
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("a-col", {
                            attrs: {
                                span: 12
                            }
                        }, [
                            _c("a-statistic", {
                                attrs: {
                                    title: "能耗指数",
                                    value: 85,
                                    suffix: "kW/h"
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "prefix",
                                        fn: function fn() {
                                            return [
                                                _c("thunderbolt-outlined")
                                            ];
                                        },
                                        proxy: true
                                    }
                                ])
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("a-col", {
                            attrs: {
                                span: 12
                            }
                        }, [
                            _c("a-statistic", {
                                attrs: {
                                    title: "噪音水平",
                                    value: 75,
                                    suffix: "dB"
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "prefix",
                                        fn: function fn() {
                                            return [
                                                _c("sound-outlined")
                                            ];
                                        },
                                        proxy: true
                                    }
                                ])
                            })
                        ], 1)
                    ], 1)
                ], 1),
                _vm._v(" "),
                _c("a-card", {
                    staticClass: "panel-card",
                    attrs: {
                        title: "环境监测"
                    }
                }, [
                    _c("a-row", {
                        attrs: {
                            gutter: [
                                16,
                                16
                            ]
                        }
                    }, [
                        _c("a-col", {
                            attrs: {
                                span: 12
                            }
                        }, [
                            _c("a-statistic", {
                                attrs: {
                                    title: "PM2.5",
                                    value: 35,
                                    suffix: "μg/m\xb3"
                                },
                                scopedSlots: _vm._u([
                                    {
                                        key: "prefix",
                                        fn: function fn() {
                                            return [
                                                _c("alert-outlined")
                                            ];
                                        },
                                        proxy: true
                                    }
                                ])
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("a-col", {
                            attrs: {
                                span: 12
                            }
                        }, [
                            _c("a-statistic", {
                                attrs: {
                                    title: "温度",
                                    value: 26,
                                    suffix: "\xb0C"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("a-col", {
                            attrs: {
                                span: 12
                            }
                        }, [
                            _c("a-statistic", {
                                attrs: {
                                    title: "湿度",
                                    value: 65,
                                    suffix: "%"
                                }
                            })
                        ], 1),
                        _vm._v(" "),
                        _c("a-col", {
                            attrs: {
                                span: 12
                            }
                        }, [
                            _c("a-statistic", {
                                attrs: {
                                    title: "风速",
                                    value: 3.2,
                                    suffix: "m/s"
                                }
                            })
                        ], 1)
                    ], 1)
                ], 1)
            ], 1)
        ])
    ]);
};
var staticRenderFns = [
    function() {
        var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
        return _c("div", {
            staticClass: "header"
        }, [
            _c("h1", [
                _vm._v("智慧工地可视化监控平台")
            ])
        ]);
    }
];
render._withStripped = true;


;// CONCATENATED MODULE: ./src/widgets/action/index.vue?vue&type=template&id=252d8d49&scoped=true

// EXTERNAL MODULE: ./node_modules/.store/core-js@3.41.0/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(22032);
// EXTERNAL MODULE: ./node_modules/.store/core-js@3.41.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(19917);
// EXTERNAL MODULE: ./node_modules/.store/@vue+composition-api@1.7.2/node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__(50113);
// EXTERNAL MODULE: ./node_modules/.store/@amap+amap-jsapi-loader@1.0.1/node_modules/@amap/amap-jsapi-loader/dist/index.js
var dist = __webpack_require__(4510);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/.store/@ant-design+icons-vue@5.1.9/node_modules/@ant-design/icons-vue/lib/icons/index.js
var icons = __webpack_require__(86303);
;// CONCATENATED MODULE: ./node_modules/.store/@gcbp+gcp-cli@2.0.0/node_modules/@gcbp/gcp-cli/dist/webpack/loader/swc.js??clonedRuleSet-2.use[0]!./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/widgets/action/index.vue?vue&type=script&lang=js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}





/* harmony default export */ var actionvue_type_script_lang_js = ((0,vue_composition_api/* defineComponent */.aZ)({
    name: "SmartConstructionDashboard",
    components: {
        TeamOutlined: icons/* TeamOutlined */.pFu,
        EnvironmentOutlined: icons/* EnvironmentOutlined */.n9e,
        ThunderboltOutlined: icons/* ThunderboltOutlined */.nj,
        SoundOutlined: icons/* SoundOutlined */.v61,
        AlertOutlined: icons/* AlertOutlined */.OFb
    },
    setup: function() {
        var initMap = /*#__PURE__*/ _async_to_generator(function(container) {
            var AMap, map, markers;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            dist_default().load({
                                key: "28c128938daff70e889551a0f56160c7",
                                version: "2.0",
                                plugins: [
                                    "AMap.Marker"
                                ]
                            })
                        ];
                    case 1:
                        AMap = _state.sent();
                        map = new AMap.Map(container, {
                            zoom: 15,
                            center: [
                                102.866669,
                                24.974277
                            ]
                        });
                        // 模拟几个标记点
                        markers = [
                            {
                                position: [
                                    102.866669,
                                    24.974277
                                ],
                                title: "工地主入口"
                            },
                            {
                                position: [
                                    102.868669,
                                    24.975277
                                ],
                                title: "施工区A"
                            },
                            {
                                position: [
                                    102.864669,
                                    24.973277
                                ],
                                title: "施工区B"
                            }
                        ];
                        markers.forEach(function(marker) {
                            new AMap.Marker({
                                map: map,
                                position: marker.position,
                                title: marker.title
                            });
                        });
                        return [
                            2
                        ];
                }
            });
        });
        return {
            initMap: initMap
        };
    },
    mounted: function() {
        this.initMap(this.$refs.mapContainer);
    }
}));

;// CONCATENATED MODULE: ./src/widgets/action/index.vue?vue&type=script&lang=js
 /* harmony default export */ var widgets_actionvue_type_script_lang_js = (actionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/.store/vue-loader@15.11.1/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(44249);
;// CONCATENATED MODULE: ./src/widgets/action/index.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  widgets_actionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "252d8d49",
  null
  
)

/* harmony default export */ var action = (component.exports);

/***/ })

}]);
//# sourceMappingURL=830.76806a32.js.map
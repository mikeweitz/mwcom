webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/project/index.js":
/*!*************************************!*\
  !*** ./components/project/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled-elements */ "./components/project/styled-elements.js");






var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/project/index.js";



var Project =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Project, _Component);

  function Project() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Project);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Project).call(this));
    console.log('project props', _this.props);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Project, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          link = _this$props.link,
          subtitle = _this$props.subtitle,
          summary = _this$props.summary,
          stack = _this$props.stack;
      var slug = title.replace(/\s/g, '');
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_7__["Article"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_7__["Strong"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "{link.url",
        target: "_blank",
        title: link.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), subtitle && subtitle, summary.map(function (paragraph, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_7__["P"], {
          key: "".concat(slug, "-p-").concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, paragraph);
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_7__["Em"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, stack.join(' / ')));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Project, "defaultProps", {
  title: 'Project title',
  subtitle: 'Project subtitle',
  link: {
    title: '',
    url: ''
  },
  summary: [],
  stack: ['item 1', 'item 2', 'item 3']
});

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.73d4345855e601943106.hot-update.js.map
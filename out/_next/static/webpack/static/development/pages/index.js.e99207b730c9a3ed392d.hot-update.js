webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/skillGroup/index.js":
/*!****************************************!*\
  !*** ./components/skillGroup/index.js ***!
  \****************************************/
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
/* harmony import */ var _styled_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled-elements */ "./components/skillGroup/styled-elements.js");






var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/skillGroup/index.js";



var SkillGroup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SkillGroup, _Component);

  function SkillGroup() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SkillGroup);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SkillGroup).call(this));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SkillGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          heading = _this$props.heading,
          skills = _this$props.skills;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_7__["SkillGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_7__["SkillHeading"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, heading), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_7__["SkillList"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, skills.map(function (skill, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_7__["Skill"], {
          key: "".concat(heading, "-skill-").concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, skill);
      })));
    }
  }]);

  return SkillGroup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(SkillGroup, "defaultProps", {
  heading: 'Skill Group Title',
  skills: ['item 1', 'item 2', 'item 3']
});

/* harmony default export */ __webpack_exports__["default"] = (SkillGroup);

/***/ })

})
//# sourceMappingURL=index.js.e99207b730c9a3ed392d.hot-update.js.map
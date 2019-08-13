webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/position/index.js":
/*!**************************************!*\
  !*** ./components/position/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled-elements */ "./components/position/styled-elements.js");







var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/position/index.js";



var Position =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Position, _Component);

  function Position() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Position);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Position).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      hover: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMouseEnter", function () {
      _this.setState({
        hover: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMouseLeave", function () {
      _this.setState({
        hover: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Position, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          role = _this$props.role,
          company = _this$props.company,
          dates = _this$props.dates,
          responsibilities = _this$props.responsibilities,
          skills = _this$props.skills;
      var hover = this.state.hover;
      return !role ? null : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Position"], {
        className: "position",
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Role"], {
        $hover: hover,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, role), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Organization"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Dates"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, dates.start, dates.end && " - ".concat(dates.end)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Subhead"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Key attributes and responsibilities"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, responsibilities.length > 0 && responsibilities.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: "role-actions_".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, item);
      })), skills && skills.length > 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Subhead"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Primary skill utilization"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, skills.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: "".concat(company, "-").concat(role, "-skills_").concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, item);
      }))));
    }
  }]);

  return Position;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Position, "defaultProps", {
  role: 'Title',
  company: 'Company Name',
  dates: {
    start: 'Month, Year',
    end: 'Month, Year'
  },
  responsibilities: [],
  skills: []
});

/* harmony default export */ __webpack_exports__["default"] = (Position);

/***/ })

})
//# sourceMappingURL=index.js.3afc79e39fd51169a411.hot-update.js.map
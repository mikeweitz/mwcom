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
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Role"], {
        $hover: hover,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, role), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Organization"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, company), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Dates"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, dates.start, dates.end && " - ".concat(dates.end)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Subhead"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Key attributes and responsibilities"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["List"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, responsibilities.length > 0 && responsibilities.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: "role-actions_".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, item);
      })), skills && skills.length > 0 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Subhead"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Primary skill utilization"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, skills.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: "".concat(company, "-").concat(role, "-skills_").concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
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

/***/ }),

/***/ "./components/position/styled-elements.js":
/*!************************************************!*\
  !*** ./components/position/styled-elements.js ***!
  \************************************************/
/*! exports provided: Position, Role, Organization, Dates, Subhead, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organization", function() { return Organization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dates", function() { return Dates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subhead", function() { return Subhead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");



var _styled;



var fontSize = _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].fontSize;
var _THEME$breakpoints = _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].breakpoints,
    tablet = _THEME$breakpoints.tablet,
    tabletLarge = _THEME$breakpoints.tabletLarge,
    desk = _THEME$breakpoints.desk,
    wide = _THEME$breakpoints.wide,
    print = _THEME$breakpoints.print; // statically styled component

var Position = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('article', (_styled = {
  marginTop: '4em',
  paddingBottom: '4em',
  position: 'relative',
  justifySelf: 'center',
  ':first-of-type': {
    marginTop: '2em'
  }
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, tablet, {
  ':first-of-type': {
    marginTop: '4em'
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, print, {
  display: 'inline-block',
  width: '50%',
  verticalAlign: 'top',
  paddingRight: '4em',
  marginTop: '0',
  marginBottom: '4em',
  ':first-of-type': {
    marginTop: '0'
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, ':after', {
  position: 'absolute',
  content: '""',
  height: '1px',
  width: '100%',
  backgroundColor: '#ccc',
  left: '0',
  bottom: '0'
}), _styled));
var Role = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('header', function (_ref) {
  var $hover = _ref.$hover;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    textTransform: 'uppercase',
    fontSize: '1.25em',
    lineHeight: '1em',
    fontWeight: '700',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    textShadow: '1px 1px 4px #fff',
    transition: 'all 0.25s',
    paddingTop: '0.25em',
    paddingBottom: '0.25em',
    paddingLeft: '0',
    paddingRight: '2em',
    ':after': {
      content: '""',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.1)',
      transition: 'all 0.25s ease',
      position: 'absolute',
      top: '0',
      left: $hover ? '0' : '-101%'
    }
  }, $hover ? {
    paddingLeft: '1em',
    paddingRight: '1em'
  } : {});
});
var Organization = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('h4', {
  fontSize: fontSize.position,
  margin: '0.5em 0 0.75em',
  lineHeight: '20px'
});
var Dates = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('div', {
  fontStyle: 'oblique'
});
var Subhead = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('strong', {
  display: 'block',
  lineHeight: '1.5em',
  margin: '1.5em 0 0.25em',
  fontSize: '0.8em'
});
var List = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('ul', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, print, {
  width: '66.667%'
}));

/***/ })

})
//# sourceMappingURL=index.js.057706e606ccbf6be2f6.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
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
/* harmony import */ var _styled_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled-elements */ "./components/footer/styled-elements.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/grid */ "./styles/grid.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");







var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/footer/index.js";






var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Footer, _Component);

  function Footer() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      hoverPrint: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPrint", function (e) {
      return window.print();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToTop", function (e) {
      react_scroll__WEBPACK_IMPORTED_MODULE_9__["animateScroll"].scrollToTop();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMouseEnter", function () {
      _this.setState({
        hoverPrint: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMouseLeave", function () {
      _this.setState({
        hoverPrint: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      var hoverPrint = this.state.hoverPrint;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
        id: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["ButtonPrint"], {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.onPrint,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["PrintIcon"], {
        $hover: hoverPrint,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_11__["Print"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), "Print this"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["ButtonTop"], {
        onClick: this.handleToTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Back to top")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/footer/styled-elements.js":
/*!**********************************************!*\
  !*** ./components/footer/styled-elements.js ***!
  \**********************************************/
/*! exports provided: Footer, ButtonPrint, PrintIcon, ButtonTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPrint", function() { return ButtonPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintIcon", function() { return PrintIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTop", function() { return ButtonTop; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");


var _styled, _styled2;


var Footer = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('footer', (_styled = {
  position: 'relative',
  background: 'url(/static/images/txture.png) #222'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "background", 'url(/static/images/dark_stripes.png) #222'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "padding", '2rem 0'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "width", '100%'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "minHeight", '80px'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "color", '#ddd'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "borderTop", '1px solid #ccc'), _styled));
var ButtonPrint = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('button', {
  position: 'absolute',
  display: 'block',
  left: '2em',
  top: '50%',
  margin: '-15px 0 0',
  padding: '0',
  textAlign: 'center',
  backgroundColor: '#eee',
  width: '100px',
  height: '30px',
  border: '1px solid #888',
  borderRadius: '8px',
  transition: 'all 0.15s ease-in-out',
  ':before': {
    content: '""',
    width: '17px',
    height: '22px',
    position: 'absolute',
    left: '-50px',
    top: '2px' // background: 'url(/static/images/icon_print.png)'

  },
  ':hover': {
    // @include boxshadow(0 0 5px #ccc);
    width: '124px',
    height: '40px',
    marginTop: '-20px',
    borderRadius: '20px',
    ':before': {
      left: '10px',
      top: '7px'
    }
  }
});
var PrintIcon = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('span', function (_ref) {
  var $hover = _ref.$hover;
  return {
    position: 'absolute',
    display: 'inline-block',
    transform: $hover ? 'translate(0, 0)' : 'translate(-40px, 0)',
    transition: 'translate 0.3s ease-in-out'
  };
});
var ButtonTop = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('button', (_styled2 = {
  position: 'absolute',
  textIndent: '105%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  right: '2em',
  top: '50%',
  margin: '-15px 0 0',
  padding: '0',
  textAlign: 'left',
  backgroundColor: '#eee',
  height: '30px',
  width: '30px',
  border: '1px solid #888',
  borderRadius: '20px',
  transition: 'all 0.15s ease',
  backgroundImage: 'url(/static/images/arrow-top.png)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, "backgroundColor", '#888'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, "cursor", 'pointer'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, ':hover', {
  backgroundColor: '#eee'
}), _styled2));

/***/ })

})
//# sourceMappingURL=index.js.f10526baf6784a3e7f4e.hot-update.js.map
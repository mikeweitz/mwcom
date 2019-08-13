(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

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
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["ButtonPrint"], {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.onPrint,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["PrintIcon"], {
        $hover: hoverPrint,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_11__["Print"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), "Print this"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["ButtonTop"], {
        onClick: this.handleToTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");


var _styled, _styled3;



var _THEME$breakpoints = _styles_theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].breakpoints,
    print = _THEME$breakpoints.print,
    tablet = _THEME$breakpoints.tablet,
    tabletLarge = _THEME$breakpoints.tabletLarge,
    desk = _THEME$breakpoints.desk,
    wide = _THEME$breakpoints.wide;
var Footer = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('footer', (_styled = {
  position: 'relative',
  overflow: 'hidden',
  background: 'url(/static/images/txture.png) #222'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "background", 'url(/static/images/dark_stripes.png) #222'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "padding", '4rem 0'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "marginTop", '3em'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "width", '100%'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "minHeight", '80px'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "color", '#ddd'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "boxShadow", '0 -4px 8px rgba(0,0,0,0.3)'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "borderTop", '1px solid #ccc'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, print, {
  display: 'none'
}), _styled));
var ButtonPrint = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('button', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
  position: 'absolute',
  display: 'block',
  overflow: 'hidden',
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
    paddingLeft: '14px',
    ':before': {
      left: '10px',
      top: '7px'
    }
  }
}, print, {
  display: 'none'
}));
var PrintIcon = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('span', function (_ref) {
  var $hover = _ref.$hover;
  return {
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '16px',
    transform: $hover ? 'translate(0, -50%)' : 'translate(-60px, -50%)',
    transition: 'transform 0.3s ease-in-out'
  };
});
var ButtonTop = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('button', (_styled3 = {
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
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled3, "backgroundColor", '#888'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled3, "cursor", 'pointer'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled3, ':hover', {
  backgroundColor: '#eee'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled3, print, {
  display: 'none'
}), _styled3));

/***/ }),

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-elements */ "./components/header/styled-elements.js");
/* harmony import */ var _styles_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/grid */ "./styles/grid.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ "./data/index.js");
var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/header/index.js";





var Header = function Header() {
  var _copy$header = _data__WEBPACK_IMPORTED_MODULE_3__["copy"].header,
      title = _copy$header.title,
      email = _copy$header.email,
      github = _copy$header.github,
      linkedin = _copy$header.linkedin;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    id: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["Group"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["LinkSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, email.address, email.domain)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: github.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["LinkSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, github.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: linkedin.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["LinkSpan"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, linkedin.text)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/header/styled-elements.js":
/*!**********************************************!*\
  !*** ./components/header/styled-elements.js ***!
  \**********************************************/
/*! exports provided: Heading, Group, Title, StyledLink, LinkSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkSpan", function() { return LinkSpan; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");



var _styled;



var fonts = _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].fonts,
    fontSize = _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].fontSize,
    colors = _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].colors,
    print = _styles_theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].breakpoints.print;
var Heading = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('header', (_styled = {
  background: 'url(/static/images/txture.png) #222'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "background", 'url(/static/images/dark_stripes.png) #222'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "position", 'relative'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "paddingTop", '2.125em'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "paddingBottom", '2.125em'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "width", '100%'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "minHeight", '100px'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "color", '#ddd'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "borderBottom", '1px solid #ccc'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, "boxShadow", '0 4px 8px rgba(0,0,0,0.3)'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, print, {
  borderBottom: 'none',
  paddingTop: '5em'
}), _styled));
var Group = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('hgroup', {
  textShadow: '1px 1px 0 #000',
  transition: 'all, 0.5s',
  ':hover': {
    textShadow: '0 0 4px #555'
  }
});
var Title = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('h1', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fonts.heading, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
  fontSize: fontSize.display
}, print, {
  paddingTop: '2em'
})));
var StyledLink = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["withStyle"])(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["A"], {
  ':hover': {
    textDecoration: 'none'
  },
  ':focus': {
    textDecoration: 'none'
  }
});
var LinkSpan = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('span', {
  padding: '0',
  marginRight: '25px',
  position: 'relative',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none'
  },
  ':focus': {
    textDecoration: 'none'
  },
  ':after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: '0',
    left: '0',
    backgroundColor: 'currentColor',
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: 'all 0.25s ease-in-out'
  },
  ':hover:after': {
    visibility: 'visible',
    transform: 'scaleX(1)'
  }
});

/***/ }),

/***/ "./components/icons/index.js":
/*!***********************************!*\
  !*** ./components/icons/index.js ***!
  \***********************************/
/*! exports provided: Print */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return Print; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/icons/index.js";


var Print = function Print() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};



/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header */ "./components/header/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer */ "./components/footer/index.js");
/* harmony import */ var _styled_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-elements */ "./components/layout/styled-elements.js");
var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/layout/index.js";





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_3__["Main"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/layout/styled-elements.js":
/*!**********************************************!*\
  !*** ./components/layout/styled-elements.js ***!
  \**********************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");



var fonts = _styles_theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].fonts,
    colors = _styles_theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].colors;
var Main = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('main', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fonts.body));

/***/ }),

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
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, ':after', {
  position: 'absolute',
  content: '""',
  height: '1px',
  width: '100%',
  backgroundColor: '#ccc',
  left: '0',
  bottom: '0'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled, print, {
  display: 'inline-block',
  width: '50%',
  verticalAlign: 'top',
  paddingRight: '4em',
  paddingTop: '0',
  marginTop: '0',
  marginBottom: '4em',
  ':first-of-type': {
    marginTop: '0'
  },
  ':after': {
    width: '80%'
  }
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
  width: '75%'
}));

/***/ }),

/***/ "./components/project/index.js":
/*!*************************************!*\
  !*** ./components/project/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled-elements */ "./components/project/styled-elements.js");







var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/project/index.js";
// @flow

 // type ProjectT = {
//   title: string,
//   subtitle?: string,
//   link: {
//     url?: String,
//     title?: String,
//   },
//   summary: Array<string>,
//   stack: Array<string>
// }

var Project =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Project, _Component);

  function Project() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Project);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Project).call(this));
    console.log('project props', _this.props);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Project, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          link = _this$props.link,
          subtitle = _this$props.subtitle,
          summary = _this$props.summary,
          stack = _this$props.stack;
      var slug = title.replace(/\s/g, '');
      return !title ? null : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Article"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, link.url ? {
        href: link.url,
        target: '_blank',
        title: link.title
      } : {}, {
        $hasLink: !!link.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Strong"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Subtitle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, subtitle), summary.map(function (paragraph, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["P"], {
          key: "".concat(slug, "-p-").concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, paragraph);
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_8__["Em"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, stack.join(' / ')));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Project, "defaultProps", {
  title: '',
  subtitle: '',
  link: {
    url: undefined
  },
  summary: [],
  stack: []
});

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./components/project/styled-elements.js":
/*!***********************************************!*\
  !*** ./components/project/styled-elements.js ***!
  \***********************************************/
/*! exports provided: Article, Strong, Subtitle, P, Em */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtitle", function() { return Subtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Em", function() { return Em; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");



var _THEME$breakpoints = _styles_theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].breakpoints,
    print = _THEME$breakpoints.print,
    tablet = _THEME$breakpoints.tablet,
    tabletLarge = _THEME$breakpoints.tabletLarge,
    desk = _THEME$breakpoints.desk,
    wide = _THEME$breakpoints.wide;
var Article = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["withStyle"])(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["A"], function (_ref) {
  var $hasLink = _ref.$hasLink;
  return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    margin: '2em auto',
    fontSize: '0.85em',
    lineHeight: '1.4em',
    border: '1px solid #ddd',
    borderRadius: '1em 1em',
    padding: '3em',
    transition: 'all 0.3s ease-in-out',
    cursor: $hasLink ? 'pointer' : 'default',
    ':hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(0,0,0,0.025)'
    }
  }, print, {
    display: 'inline-block',
    border: 'none',
    padding: '0 96px 24px 0',
    width: '50%',
    verticalAlign: 'top'
  });
});
var Strong = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('strong', {
  textTransform: 'uppercase'
});
var Subtitle = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  minHeight: '1em'
});
var P = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('p', {
  margin: '1em auto'
});
var Em = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('em', {
  fontSize: '0.8em'
});

/***/ }),

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
        className: "skillset",
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

/***/ }),

/***/ "./components/skillGroup/styled-elements.js":
/*!**************************************************!*\
  !*** ./components/skillGroup/styled-elements.js ***!
  \**************************************************/
/*! exports provided: SkillGroup, SkillHeading, SkillList, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillGroup", function() { return SkillGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillHeading", function() { return SkillHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillList", function() { return SkillList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");



var print = _styles_theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].breakpoints.print;
var SkillGroup = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, print, {
  display: 'inline-block',
  width: '50%',
  paddingRight: '3em',
  verticalAlign: 'top'
}));
var SkillHeading = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('header', {
  textTransform: 'uppercase',
  fontWeight: '700'
});
var SkillList = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('ul', {
  margin: '0 0',
  padding: '0 0'
});
var Skill = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('li', {
  listStyleType: 'none',
  listStylePosition: 'inside',
  margin: '0 1em 0 0',
  padding: '0.5em 0.325em',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
});

/***/ }),

/***/ "./components/summary/index.js":
/*!*************************************!*\
  !*** ./components/summary/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-elements */ "./components/summary/styled-elements.js");
var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/components/summary/index.js";



var Summary = function Summary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_elements__WEBPACK_IMPORTED_MODULE_1__["Summary"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Front-end architect with extensive tooling experience, attention to detail, and commitment to delivering the best in-browser experiences. I write Modular JS (ES6), semantic markup, and follow BEM and SMACSS. practices for CSS."));
};

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ }),

/***/ "./components/summary/styled-elements.js":
/*!***********************************************!*\
  !*** ./components/summary/styled-elements.js ***!
  \***********************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");


var _styled;



var _THEME$breakpoints = _styles_theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].breakpoints,
    print = _THEME$breakpoints.print,
    tabletLarge = _THEME$breakpoints.tabletLarge;
var Summary = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('section', (_styled = {
  fontSize: '1.25em',
  marginTop: '64px',
  marginBottom: '18px'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, tabletLarge, {
  width: '66.667%'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, print, {
  marginTop: '12px',
  marginBottom: '24px',
  width: '75%'
}), _styled));

/***/ }),

/***/ "./data/copy.js":
/*!**********************!*\
  !*** ./data/copy.js ***!
  \**********************/
/*! exports provided: copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
var copy = {
  header: {
    title: 'Michael Weitzman',
    email: {
      address: 'weitzly',
      domain: '@gmail.com'
    },
    github: {
      text: 'github',
      url: 'https://github.com/mikeweitz'
    },
    linkedin: {
      text: 'linkedin',
      url: 'https://www.linkedin.com/in/mikeweitzman/'
    }
  }
};


/***/ }),

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/*! exports provided: positions, skills, projects, copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pojects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pojects */ "./data/pojects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return _pojects__WEBPACK_IMPORTED_MODULE_0__["projects"]; });

/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positions */ "./data/positions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positions", function() { return _positions__WEBPACK_IMPORTED_MODULE_1__["positions"]; });

/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills */ "./data/skills.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return _skills__WEBPACK_IMPORTED_MODULE_2__["skills"]; });

/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copy */ "./data/copy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _copy__WEBPACK_IMPORTED_MODULE_3__["copy"]; });







/***/ }),

/***/ "./data/pojects.js":
/*!*************************!*\
  !*** ./data/pojects.js ***!
  \*************************/
/*! exports provided: projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
var projects = [{
  title: 'Facebook Stories',
  link: {
    url: 'https://stories.fb.com',
    title: 'Facebook stories'
  },
  subtitle: 'Marketing site for the Facebook Stories team.',
  summary: ['Lead developer for a WordPress VIP site built to promote the Stories component of Facebook platform.', 'The project launch was scheduled to coincided with the teams F8 Conference presentation, so the timeline was fixed in advance. We developed quickly within a localized Docker instance to get development up to velocity, then ported over to the VIP platform and completed the build there.', 'The admin was built using custom fields to provide fully tailed content control to the Stories team to update content as necessary.'],
  stack: ['WPVIP', 'Docker', 'PHPCS', 'ES6 Modules', 'Greensock Animations', 'SCSS']
}, {
  title: 'Uber Freight',
  link: {
    url: 'https://www.uberfreight.com/',
    title: 'Uber Freight site'
  },
  subtitle: 'Onboarding site for the Uber Freight team',
  summary: ['Work closely with the Uber Freight team to introduce new content and features to the Freight site.  The could be anything from building new React components in FusionJS, content migration, routing changes, or basic pixel adjustments and bug fixes to existing elements.', "The site uses a Contentful JSON API backend, with a FusionJS / Styletron frontend.  Development work would go through a standard approval process on dev / staging environemnts, which would then be deployed using the client's internal system."],
  stack: ['FusionJS', 'Styletron']
}, {
  title: 'Uber Brand',
  link: {
    url: 'https://brand.uber.com',
    title: 'Uber brand guidelines'
  },
  subtitle: 'Uber brand guidelines site',
  summary: ["A centralized guideline site for Uber's various teams to reference logo usage, typography, motion studies, photography usage, and more.", 'As a member of this dev team, I built out React components for the site using a tightly controlled theming system. Colors, Line height, Animation curves, buttons and more all had to be precisely consistent across components.']
}, {
  title: 'Volkswagen USA',
  link: {
    title: 'vw.com',
    url: 'https://vw.com'
  },
  subtitle: 'VW USA Home page',
  summary: ['Needing to sell thru a home page redesign, the client was having a difficult time visualizing the cost/benefit design choices presented. Tasked with building a full-fidelity prototype with no runway, I quickly contructed a stand-alone scaffold of the existing VW site to deliver a new protocype in with the design team.  With little runway, I executed a behaviorly complete design in browser. It was constructed with live copies of existing HTML scaffold, and siting along side all JavaScript and CSS libraries running in production to provide the implementation team with the lowest possible barrier to execution.'],
  stack: ['ES6', 'SCSS', 'Gulp', 'jQuery', 'HTML', 'Gulp Middleware vai Express']
}, {
  title: 'Tacobell.com',
  link: {
    url: 'http://ta.co'
  },
  summary: ["Bringing mobile ordering outside the app store.  My team was tasked with providing an integrated mobile and desktop experiences that leveraged existing APIs and services build for Taco Bell's mobile app. My primary responsibility during construction was a feature rich checkout process for guest and registered users, user conversion, and a side chained interface for reloading prepaid cards during checkout.", 'This site has since been proted to a new platform so much of the original work has been been written again.'],
  stack: ['HTML', 'BackBone', 'SCSS']
}, {
  title: 'Eminem: Revival',
  link: {
    url: 'http://www.deutsch.com/projects/revival'
  },
  subtitle: ' A short turn-around album teaser for Interscope records',
  summary: ['Interscope was referred to our agency to handle rapid development for marketing efforts on the new Eminem album “Revival”. I was tasked with quickly building'],
  stack: ['HTML', 'SCSS', 'Gulp', 'AWS']
}];


/***/ }),

/***/ "./data/positions.js":
/*!***************************!*\
  !*** ./data/positions.js ***!
  \***************************/
/*! exports provided: positions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positions", function() { return positions; });
var positions = [{
  role: "Lead Developer",
  company: "HAUS",
  dates: {
    start: "Aug, 2018",
    end: "Aug, 2019"
  },
  responsibilities: ["Build marketing and on-boarding materials for core business interests for Uber and Facebook.", "Follow opinionated, enterprise quality coding standards on client platforms including Wordpress VIP, and FusionJS.", "Deliver above-quality code on time."],
  skills: ["React", "Styletron", "FusionJS", "NextJS", "Webpack", "GSAP Animation"]
}, {
  role: "Principle Engineer",
  company: "Deutsch, Inc",
  dates: {
    start: "May 2018",
    end: "Aug 2018"
  },
  responsibilities: ["Scope and scaffold projects", "Provide stake holders with implementation plans and estimates for project tasks", "Work closely with account, production, and QA teams to ensure projects are built to spec", "Scaffold front-end projects including documentation of requirements, dependencies, and work-flows.", "Provide guidances to other developers on methodologies and preferred practices, and general requirements."],
  skills: ["JavaScript", "Node", "Gulp", "Git", "AWS (S3, Lambda, CloudFront, Route 53)"]
}, {
  role: "Senior Front End Engineer",
  company: "Deutsch Inc",
  dates: {
    end: "May 2015",
    start: "May 2018"
  },
  responsibilities: ["Define and implement front end deliverables for client projects", "Provide level-of-effort estimates for project timelines", "Work closely with account and production teams to ensure projects are built to spec", "Scaffold front-end projects including READMEs, work-flows, and manage Repos", "Provide guidances to other developers on preferred methodologies"],
  skills: ["JavaScript", "Node", "jQuery", "HTML Templating", "PHP", "Git", "Gulp", "CSS Animations"]
}, {
  role: "Senior Front End Prototyper",
  company: "Yuzu by Barnes &amp; Noble",
  dates: {
    start: "July 2014",
    end: "Feb 2015"
  },
  responsibilities: ["Build high fidelity in-browser prototypes.", "Demonstrate proof-of-concepts as part of the user experience design work-flow.", "Primarily focused on the Yuzu web client feature set."],
  skills: ["Javascript", "HTML", "CSS", "JS and CSS Animation", "Ruby on Rails"]
}, {
  role: "Senior Director, Development",
  company: "bpg",
  dates: {
    start: "Oct 2012",
    end: "Jul 2014"
  },
  responsibilities: ["Primary point of contact for all development and html technology needs for bpg.", "Provide oversite and feedback to internal and out-of-house developers.", "Set architecture and development scope for html-driven projects.", "Work closely with account team in responding to client requests,"]
}, {
  role: "Interactive Developer",
  company: "bpg",
  dates: {
    start: "Nov 2010",
    end: "Oct 2012"
  },
  responsibilities: ["Deliver HTML/JS/CSS/PHP driven sites for high-profile client, both independently and within teams.", "Assist project managers in estimating scope on new projects.", "Write code other developers can read.", "Never miss a deadline."]
}, {
  role: "Web Designer",
  company: "Silva Artist Management",
  dates: {
    start: "Oct 2007",
    end: "Nov 2010"
  },
  responsibilities: ["Ran the official web sites for recording artists Foo Fighters, Beastie Boys, and Jimmy Eat World.", "Manage day-to-day interaction with fans on official message boards.", "Design, build, and ship artist newsletters.", "Report directly to artist's management team."]
}];


/***/ }),

/***/ "./data/skills.js":
/*!************************!*\
  !*** ./data/skills.js ***!
  \************************/
/*! exports provided: skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
var skills = [{
  heading: 'Core',
  skills: ['React', 'Styletron', 'JavaScript / ES6', 'Node', 'Webpack', 'Gulp', 'Git', 'HTML', 'CSS / SCSS', 'Vue']
}, {
  heading: 'Electives',
  skills: ['Dependency Management (Yarn / NPM)', 'Webpack / Babel', 'AWS (S3, CloudFront, Lambda, Route 53)', 'Wordpress VIP', 'FusionJS', 'NextJS', 'Shopify', 'Docker', 'Angular']
}];


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports =  true && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames =  true && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fweitzly%2FProjects%2Fweitzly%2Fweitzly.com%2Fpages%2Findex.js!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fweitzly%2FProjects%2Fweitzly%2Fweitzly.com%2Fpages%2Findex.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-scroll/modules/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(/*! ./components/Link.js */ "./node_modules/react-scroll/modules/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(/*! ./components/Button.js */ "./node_modules/react-scroll/modules/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(/*! ./components/Element.js */ "./node_modules/react-scroll/modules/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(/*! ./mixins/scroller.js */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(/*! ./mixins/scroll-events.js */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(/*! ./mixins/scroll-spy.js */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(/*! ./mixins/animate-scroll.js */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(/*! ./mixins/scroll-link.js */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(/*! ./mixins/scroll-element.js */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(/*! ./mixins/Helpers.js */ "./node_modules/react-scroll/modules/mixins/Helpers.js");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (false) {}
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.name !== nextProps.name) {
            this.registerElems(nextProps.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (false) {}
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/animate-scroll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(/*! ./smooth */ "./node_modules/react-scroll/modules/mixins/smooth.js");

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(/*! ./cancel-events */ "./node_modules/react-scroll/modules/mixins/cancel-events.js");

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (true) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPositionY: 0,
    startPositionY: 0,
    targetPositionY: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    deltaTop: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    data.containerElement.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(y, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = currentPositionY(options);
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toY, options) {
  animateTopScroll(toY, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toY, options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(currentPositionY(options) + toY, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/cancel-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/passive-event-listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (false) {}
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          this.registerElems(nextProps.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (false) {}
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-hash.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.pushHash(to);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-spy.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(/*! ./animate-scroll */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    if (_scrollEvents2.default.registered.begin) {
      _scrollEvents2.default.registered.begin(to, target);
    }

    props.absolute = true;

    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (containerElement === document) {
        window.scrollTo(0, scrollOffset);
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/smooth.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pushHash = function pushHash(hash) {
  hash = hash ? hash.indexOf('#') === 0 ? hash : '#' + hash : '';

  if (history.pushState) {
    var loc = window.location;
    history.pushState(null, null, hash ? loc.pathname + loc.search + hash
    // remove hash
    : loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, '');
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== "static" ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
};

exports.default = {
  pushHash: pushHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_01f9a3fa864a7b7414d8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_01f9a3fa864a7b7414d8 */ "dll-reference dll_01f9a3fa864a7b7414d8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/styletron-react/dist/browser.es5.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/styletron-react/dist/browser.es5.es.js ***!
  \*************************************************************/
/*! exports provided: DebugEngine, Provider, DevConsumer, useStyletron, createStyled, styled, withTransform, withStyle, withStyleDeep, withWrapper, autoComposeShallow, autoComposeDeep, staticComposeShallow, staticComposeDeep, dynamicComposeShallow, dynamicComposeDeep, createShallowMergeReducer, createDeepMergeReducer, composeStatic, composeDynamic, createStyledElementComponent, resolveStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugEngine", function() { return DebugEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevConsumer", function() { return DevConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyletron", function() { return useStyletron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyled", function() { return createStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTransform", function() { return withTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyle", function() { return withStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyleDeep", function() { return withStyleDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withWrapper", function() { return withWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoComposeShallow", function() { return autoComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoComposeDeep", function() { return autoComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticComposeShallow", function() { return staticComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticComposeDeep", function() { return staticComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicComposeShallow", function() { return dynamicComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicComposeDeep", function() { return dynamicComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShallowMergeReducer", function() { return createShallowMergeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeepMergeReducer", function() { return createDeepMergeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeStatic", function() { return composeStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeDynamic", function() { return composeDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyledElementComponent", function() { return createStyledElementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveStyle", function() { return resolveStyle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styletron_standard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-standard */ "./node_modules/styletron-standard/dist/browser.es5.es.js");



/* eslint-env browser */

/* global module */
function addDebugMetadata(instance, stackIndex) {
  var _ref = new Error("stacktrace source"),
      stack = _ref.stack,
      stacktrace = _ref.stacktrace,
      message = _ref.message;

  instance.debug = {
    stackInfo: {
      stack: stack,
      stacktrace: stacktrace,
      message: message
    },
    stackIndex: stackIndex
  };
} // DEVTOOLS SETUP

var setupDevtoolsExtension = function setupDevtoolsExtension() {
  var atomicMap = {};
  var extensionsMap = new Map();
  var stylesMap = new Map();

  var getStyles = function getStyles(className) {
    var styles = {};

    if (typeof className !== "string") {
      return styles;
    }

    if (stylesMap.has(className)) {
      styles.styles = stylesMap.get(className);
      var classList = className.split(" ");

      if (classList.length) {
        var classes = {};
        classList.forEach(function (singleClassName) {
          classes[singleClassName] = atomicMap[singleClassName];
        });
        styles.classes = classes;
      }

      if (extensionsMap.has(className)) {
        var extension = extensionsMap.get(className);
        styles.extends = extension;
      }

      return styles;
    }
  };

  window.__STYLETRON_DEVTOOLS__ = {
    atomicMap: atomicMap,
    extensionsMap: extensionsMap,
    stylesMap: stylesMap,
    getStyles: getStyles
  };
};

var BrowserDebugEngine =
/*#__PURE__*/
function () {
  function BrowserDebugEngine(worker) {
    if (!worker) {
      var workerBlob = new Blob(["importScripts(\"https://unpkg.com/css-to-js-sourcemap-worker@2.0.5/worker.js\")"], {
        type: "application/javascript"
      });
      worker = new Worker(URL.createObjectURL(workerBlob));
      worker.postMessage({
        id: "init_wasm",
        url: "https://unpkg.com/css-to-js-sourcemap-worker@2.0.5/mappings.wasm"
      });
      worker.postMessage({
        id: "set_render_interval",
        interval: 120
      });

      if (true) {
        module.hot.addStatusHandler(function (status) {
          if (status === "dispose") {
            worker.postMessage({
              id: "invalidate"
            });
          }
        });
      }
    }

    this.worker = worker;
    this.counter = 0;

    this.worker.onmessage = function (msg) {
      var _msg$data = msg.data,
          id = _msg$data.id,
          css = _msg$data.css;

      if (id === "render_css" && css) {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      }
    };
  }

  var _proto = BrowserDebugEngine.prototype;

  _proto.debug = function debug(_ref2) {
    var stackIndex = _ref2.stackIndex,
        stackInfo = _ref2.stackInfo;
    var className = "__debug-" + this.counter++;
    this.worker.postMessage({
      id: "add_mapped_class",
      className: className,
      stackInfo: stackInfo,
      stackIndex: stackIndex
    });
    return className;
  };

  return BrowserDebugEngine;
}();

var DebugEngine = BrowserDebugEngine;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint-env browser */

/* eslint-disable no-unused-vars, no-redeclare, no-shadow */
var noopEngine = {
  renderStyle: function renderStyle() {
    return "";
  },
  renderKeyframes: function renderKeyframes() {
    return "";
  },
  renderFontFace: function renderFontFace() {
    return "";
  }
};
var StyletronContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(noopEngine);
var HydrationContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
var DebugEngineContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var DevProvider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DevProvider, _React$Component);

  function DevProvider(props) {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      hydrating: Boolean(props.debugAfterHydration)
    };
    return _this;
  }

  var _proto = DevProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    {
      if (this.state.hydrating === true) {
        this.setState({
          hydrating: false
        });
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(StyletronContext.Provider, {
      value: this.props.value
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DebugEngineContext.Provider, {
      value: this.props.debug
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HydrationContext.Provider, {
      value: this.state.hydrating
    }, this.props.children)));
  };

  return DevProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Provider =  true ? DevProvider : undefined;

if ( true && !window.__STYLETRON_DEVTOOLS__) {
  setupDevtoolsExtension();
} // TODO: more precise types


function DevConsumer(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(StyletronContext.Consumer, null, function (styletronEngine) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DebugEngineContext.Consumer, null, function (debugEngine) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(HydrationContext.Consumer, null, function (hydrating) {
        return props.children(styletronEngine, debugEngine, hydrating);
      });
    });
  });
}
var Consumer =  true ? DevConsumer : undefined;

function checkNoopEngine(engine) {
  // if no engine provided, we default to no-op, handy for tests
  // however, print a warning in other envs
  if (true) {
    engine === noopEngine && // eslint-disable-next-line no-console
    console.warn( true ? "\nStyletron has been switched to a no-op (test) mode.\n\nA Styletron styled component was rendered, but no Styletron engine instance was provided in React context.\n\nDid you forget to provide a Styletron engine instance to React context via using the Styletron provider component?\n\nNote: Providers and Consumers must come from the exact same React.createContext call to work.\nIf your app has multiple instances of the \"styletron-react\" package in your node_module tree,\nyour Provider may be coming from a different React.createContext call, which means the styled components\nwill not recieve the provided engine instance. This scenario can arise, for example, when using \"npm link\".\n" : undefined);
  }
}

function useStyletron() {
  var styletronEngine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StyletronContext);
  var debugEngine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(DebugEngineContext);
  var hydrating = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(HydrationContext);
  checkNoopEngine(styletronEngine);
  return [function css(style) {
    var className = Object(styletron_standard__WEBPACK_IMPORTED_MODULE_1__["driver"])(style, styletronEngine);

    if (false) {}

    var _ref = new Error("stacktrace source"),
        stack = _ref.stack,
        message = _ref.message;

    var debugClassName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
      if (debugEngine && !hydrating) {
        return debugEngine.debug({
          stackInfo: {
            stack: stack,
            message: message
          },
          stackIndex: 1
        });
      }

      return "";
    }, [debugEngine, hydrating]);
    return debugClassName ? debugClassName + " " + className : className;
  }];
}
function createStyled(_ref2) {
  var getInitialStyle$$1 = _ref2.getInitialStyle,
      driver$$1 = _ref2.driver,
      wrapper = _ref2.wrapper;

  function styled(base, styleArg) {
    if (true) {
      if (base.__STYLETRON__) {
        /* eslint-disable no-console */
        console.warn("It appears you are passing a styled component into `styled`.");
        console.warn("For composition with existing styled components, use `withStyle` or `withTransform` instead.");
        /* eslint-enable no-console */
      }
    }

    var baseStyletron = {
      reducers: [],
      base: base,
      driver: driver$$1,
      getInitialStyle: getInitialStyle$$1,
      wrapper: wrapper
    };

    if (true) {
      addDebugMetadata(baseStyletron, 2);
    }

    return createStyledElementComponent(autoComposeShallow(baseStyletron, styleArg));
  }

  return styled;
}
var styled = createStyled({
  getInitialStyle: styletron_standard__WEBPACK_IMPORTED_MODULE_1__["getInitialStyle"],
  driver: styletron_standard__WEBPACK_IMPORTED_MODULE_1__["driver"],
  wrapper: function wrapper(Component$$1) {
    return Component$$1;
  }
});
function withTransform(component, transformer) {
  var styletron = component.__STYLETRON__;

  if (true) {
    addDebugMetadata(styletron, 2);
  }

  return createStyledElementComponent(composeDynamic(styletron, transformer));
}
var withStyle = withStyleDeep;
function withStyleDeep(component, styleArg) {
  var styletron = component.__STYLETRON__;

  if (true) {
    if (!styletron) {
      /* eslint-disable no-console */
      console.warn("The first parameter to `withStyle` must be a styled component (without extra wrappers).");
      /* eslint-enable no-console */
    }
  }

  if (true) {
    addDebugMetadata(styletron, 2);
    return createStyledElementComponent(addExtension(autoComposeDeep(styletron, styleArg), component, styleArg));
  } else {}
}
function withWrapper(component, wrapper) {
  var styletron = component.__STYLETRON__;

  if (true) {
    if (!styletron) {
      /* eslint-disable no-console */
      console.warn("The first parameter to `withWrapper` must be a styled component (without extra wrappers).");
      /* eslint-enable no-console */
    }
  }

  var composed = {
    getInitialStyle: styletron.getInitialStyle,
    base: styletron.base,
    driver: styletron.driver,
    wrapper: wrapper,
    reducers: styletron.reducers
  };

  if (true) {
    addDebugMetadata(composed, 2);
  }

  return createStyledElementComponent(composed);
}
function autoComposeShallow(styletron, styleArg) {
  if (typeof styleArg === "function") {
    return dynamicComposeShallow(styletron, styleArg);
  }

  return staticComposeShallow(styletron, styleArg);
}

function addExtension(composed, component, styleArg) {
  return Object.assign({}, composed, {
    ext: {
      with: styleArg,
      name: component.displayName,
      base: component.__STYLETRON__.base,
      getInitialStyle: component.__STYLETRON__.reducers.length ? component.__STYLETRON__.reducers[0].reducer : component.__STYLETRON__.getInitialStyle
    }
  });
}

function autoComposeDeep(styletron, styleArg) {
  if (typeof styleArg === "function") {
    return dynamicComposeDeep(styletron, styleArg);
  }

  return staticComposeDeep(styletron, styleArg);
}
function staticComposeShallow(styletron, style) {
  return composeStatic(styletron, createShallowMergeReducer(style));
}
function staticComposeDeep(styletron, style) {
  return composeStatic(styletron, createDeepMergeReducer(style));
}
function dynamicComposeShallow(styletron, styleFn) {
  return composeDynamic(styletron, function (style, props) {
    return shallowMerge(style, styleFn(props));
  });
}
function dynamicComposeDeep(styletron, styleFn) {
  return composeDynamic(styletron, function (style, props) {
    return deepMerge(style, styleFn(props));
  });
}
function createShallowMergeReducer(style) {
  return {
    reducer: function reducer(inputStyle) {
      return shallowMerge(inputStyle, style);
    },
    assignmentCommutative: true,
    factory: createShallowMergeReducer,
    style: style
  };
}
function createDeepMergeReducer(style) {
  return {
    reducer: function reducer(inputStyle) {
      return deepMerge(inputStyle, style);
    },
    assignmentCommutative: true,
    factory: createDeepMergeReducer,
    style: style
  };
}
function composeStatic(styletron, reducerContainer) {
  if (styletron.reducers.length === 0) {
    var style = reducerContainer.reducer(styletron.getInitialStyle());
    var result = {
      reducers: styletron.reducers,
      base: styletron.base,
      driver: styletron.driver,
      wrapper: styletron.wrapper,
      getInitialStyle: function getInitialStyle$$1() {
        return style;
      }
    };

    if (true) {
      result.debug = styletron.debug;
    }

    return result;
  } else {
    var last = styletron.reducers[0];

    if (last.assignmentCommutative === true && reducerContainer.assignmentCommutative === true) {
      var composed = reducerContainer.reducer(last.style);
      var _result = {
        getInitialStyle: styletron.getInitialStyle,
        base: styletron.base,
        driver: styletron.driver,
        wrapper: styletron.wrapper,
        reducers: [last.factory(composed)].concat(styletron.reducers.slice(1))
      };

      if (true) {
        _result.debug = styletron.debug;
      }

      return _result;
    }

    return composeDynamic(styletron, reducerContainer.reducer);
  }
}
function composeDynamic(styletron, reducer) {
  var composed = {
    getInitialStyle: styletron.getInitialStyle,
    base: styletron.base,
    driver: styletron.driver,
    wrapper: styletron.wrapper,
    reducers: [{
      assignmentCommutative: false,
      reducer: reducer
    }].concat(styletron.reducers)
  };

  if (true) {
    composed.debug = styletron.debug;
  }

  return composed;
}
function createStyledElementComponent(styletron) {
  var reducers = styletron.reducers,
      base = styletron.base,
      driver$$1 = styletron.driver,
      wrapper = styletron.wrapper,
      getInitialStyle$$1 = styletron.getInitialStyle,
      ext = styletron.ext;

  if (true) {
    var debugStackInfo, debugStackIndex;

    if (styletron.debug) {
      debugStackInfo = styletron.debug.stackInfo;
      debugStackIndex = styletron.debug.stackIndex;
    }
  }

  if (true) {
    var debugClassName;
  }

  var StyledElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, function (styletron, debugEngine, hydrating) {
      checkNoopEngine(styletron);
      var elementProps = omitPrefixedKeys(props);
      var style = resolveStyle(getInitialStyle$$1, reducers, props);

      if (props.$style) {
        if (typeof props.$style === "function") {
          style = deepMerge(style, props.$style(props));
        } else {
          style = deepMerge(style, props.$style);
        }
      }

      var styleClassString = driver$$1(style, styletron);
      var Element = props.$as ? props.$as : base;
      elementProps.className = props.className ? props.className + " " + styleClassString : styleClassString;

      if ( true && debugEngine && !hydrating) {
        if (!debugClassName) {
          debugClassName = debugEngine.debug({
            stackInfo: debugStackInfo,
            stackIndex: debugStackIndex
          });
        }

        var joined = debugClassName + " " + elementProps.className;
        elementProps.className = joined;
      }

      if ( true && window.__STYLETRON_DEVTOOLS__) {
        window.__STYLETRON_DEVTOOLS__.stylesMap.set(elementProps.className, style);

        if (ext) {
          window.__STYLETRON_DEVTOOLS__.extensionsMap.set(elementProps.className, {
            base: ext.base,
            displayName: ext.name,
            initialStyles: ext.getInitialStyle({}, props),
            styleOverrides: typeof ext.with === "function" ? ext.with(props) : ext.with
          });
        }
      }

      if (props.$ref) {
        // eslint-disable-next-line no-console
        console.warn("The prop `$ref` has been deprecated. Use `ref` instead. Refs are now forwarded with React.forwardRef.");
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Element, _extends({}, elementProps, {
        ref: ref || props.$ref
      }));
    });
  });
  var Wrapped = wrapper(StyledElement);
  Wrapped.__STYLETRON__ = {
    base: base,
    reducers: reducers,
    driver: driver$$1,
    wrapper: wrapper,
    getInitialStyle: getInitialStyle$$1
  };

  if (true) {
    var displayName;

    if (typeof base === "string") {
      displayName = base;
    } else if (base.displayName) {
      displayName = base.displayName;
    } else if (base.name) {
      displayName = base.name;
    } else {
      displayName = "Unknown";
    }

    Wrapped.displayName = "Styled(" + displayName + ")";
  }

  return Wrapped;
} // Utility functions

function resolveStyle(getInitialStyle$$1, reducers, props) {
  var result = getInitialStyle$$1();
  var i = reducers.length;

  while (i--) {
    // Cast to allow passing unused props param in case of static reducer
    var reducer = reducers[i].reducer;
    result = reducer(result, props);
  }

  return result;
}

function isObject(x) {
  return _typeof(x) === "object" && x !== null;
}

function omitPrefixedKeys(source) {
  var result = {};

  for (var key in source) {
    if (key[0] !== "$") {
      result[key] = source[key];
    }
  }

  return result;
}

function deepMerge(a, b) {
  var result = assign({}, a);

  for (var key in b) {
    var val = b[key];

    if (isObject(val) && isObject(a[key])) {
      result[key] = deepMerge(a[key], val);
    } else {
      result[key] = val;
    }
  }

  return result;
}

function shallowMerge(a, b) {
  return assign(assign({}, a), b);
}

function assign(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }

  return target;
}


//# sourceMappingURL=browser.es5.es.js.map


/***/ }),

/***/ "./node_modules/styletron-standard/dist/browser.es5.es.js":
/*!****************************************************************!*\
  !*** ./node_modules/styletron-standard/dist/browser.es5.es.js ***!
  \****************************************************************/
/*! exports provided: driver, getInitialStyle, renderDeclarativeRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driver", function() { return driver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialStyle", function() { return getInitialStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDeclarativeRules", function() { return renderDeclarativeRules; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Note: $Shape is needed to make polymorphic withStyle refinements work correctly
// It seems functions satisfy this type without $Shape
// See: https://github.com/facebook/flow/issues/6784
//
//
//
//
//
//
function driver(style, styletron) {
  var tx = renderDeclarativeRules(style, styletron);
  return styletron.renderStyle(tx);
}
function getInitialStyle() {
  return {};
}
function renderDeclarativeRules(style, styletron) {
  for (var key in style) {
    var val = style[key];

    if (key === "animationName" && typeof val !== "string") {
      style.animationName = styletron.renderKeyframes(val);
      continue;
    }

    if (key === "fontFamily" && typeof val !== "string") {
      if (Array.isArray(val)) {
        var result = "";

        for (var _iterator = val, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var _font = _ref;

          if (_typeof(_font) === "object") {
            result += styletron.renderFontFace(_font) + ",";
          } else if (typeof _font === "string") {
            result += _font + ",";
          }
        }

        style.fontFamily = result.slice(0, -1);
        continue;
      } else {
        style.fontFamily = styletron.renderFontFace(val);
        continue;
      }
    }

    if (_typeof(val) === "object" && val !== null) {
      renderDeclarativeRules(val, styletron);
    }
  }

  return style;
}


//# sourceMappingURL=browser.es5.es.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (true) g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/summary */ "./components/summary/index.js");
/* harmony import */ var _components_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/position */ "./components/position/index.js");
/* harmony import */ var _components_skillGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/skillGroup */ "./components/skillGroup/index.js");
/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/project */ "./components/project/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var _styles_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/grid */ "./styles/grid.js");


var _jsxFileName = "/Users/weitzly/Projects/weitzly/weitzly.com/pages/index.js";

// DOCUMENTATION: http://styletron.org









var Home = function Home() {
  // an alternative hook based API
  var _useStyletron = Object(styletron_react__WEBPACK_IMPORTED_MODULE_3__["useStyletron"])(),
      _useStyletron2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useStyletron, 1),
      css = _useStyletron2[0];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_9__["positions"].map(function (position, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_position__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: "position-".concat(i)
    }, position, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    style: {
      paddingTop: '48px'
    },
    $pageBreak: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["GridLinks"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_9__["skills"].map(function (skillset, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_skillGroup__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: "skillset-".concat(i)
    }, skillset, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    style: {
      paddingTop: '48px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_grid__WEBPACK_IMPORTED_MODULE_10__["GridLinks"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_9__["projects"].map(function (project, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_project__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: "project-".concat(i)
    }, project, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/grid.js":
/*!************************!*\
  !*** ./styles/grid.js ***!
  \************************/
/*! exports provided: Container, Grid, GridLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLinks", function() { return GridLinks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");



var _styled, _styled2;



var _THEME$breakpoints = _theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].breakpoints,
    tablet = _THEME$breakpoints.tablet,
    tabletLarge = _THEME$breakpoints.tabletLarge,
    desk = _THEME$breakpoints.desk,
    wide = _THEME$breakpoints.wide,
    max = _THEME$breakpoints.max,
    print = _THEME$breakpoints.print,
    colors = _theme__WEBPACK_IMPORTED_MODULE_3__["THEME"].colors;
var Container = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('div', function (_ref) {
  var $pageBreak = _ref.$pageBreak;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    position: 'relative',
    maxWidth: '90%',
    margin: '0 auto'
  }, desk, {
    width: '90%',
    maxWidth: '1440px'
  }), $pageBreak ? Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, print, {
    pageBreakAfter: 'always'
  }) : {});
});
var Grid = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('div', (_styled = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '20px',
  justifyContent: 'center'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, tablet, {
  gridGap: '32px',
  gridTemplateColumns: 'repeat(2, 1fr)'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, tabletLarge, {
  gridGap: '32px',
  gridTemplateColumns: 'repeat(3, 1fr)'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, desk, {
  maxWidth: '1440px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '24px'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, print, {
  display: 'block'
}), _styled));
var GridLinks = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('div', (_styled2 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '32px'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, tablet, {
  gridTemplateColumns: 'repeat(2, 1fr)'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, tabletLarge, {
  gridTemplateColumns: 'repeat(2, 1fr)'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, desk, {
  maxWidth: '1440px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '24px'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, print, {
  display: 'block'
}), _styled2));

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/*! exports provided: A, THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME", function() { return THEME; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");



var _heading, _body;


var THEME = {
  breakpoints: {
    tablet: '@media screen and (min-width: 768px)',
    tabletLarge: '@media screen and (min-width: 980px)',
    desk: '@media screen and (min-width: 1025px)',
    wide: '@media screen and (min-width: 1220px)',
    max: '@media screen and (min-width: 1440px)',
    print: '@media print'
  },
  colors: {
    primary: ['#276EF1', '#174EB6', '#9CBCF8'],
    positive: ['#07A35A', '#057C44', '#88D3B0'],
    lime: '#c6ff00',
    darkBlue: '#103037',
    gray1: '#dcdcdc',
    gray2: '#404040'
  },
  fonts: {
    heading: (_heading = {
      fontFamily: '"Montserrat", sans-serif'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_heading, "fontFamily", '"Metrophobic", sans-serif'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_heading, "fontFamily", '"Roboto", sans-serif'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_heading, "fontWeight", '400'), _heading),
    body: (_body = {
      fontFamily: '"Open Sans", sans-serif'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_body, "fontFamily", '"Metrophobic", sans-serif'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_body, "fontFamily", '"Roboto", sans-serif'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_body, "fontWeight", '300'), _body)
  },
  fontSize: {
    body: '16px',
    position: '17.5px',
    display: '38.5px'
  },
  sizing: ['2px', '6px', '10px', '16px', '24px']
};
THEME.body = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, THEME.fonts.body, {
  fontSize: THEME.fontSize.body
});
var A = Object(styletron_react__WEBPACK_IMPORTED_MODULE_2__["styled"])('a', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
  color: '#555',
  textDecoration: 'none',
  cursor: 'pointer',
  ':link': {
    color: '#555'
  },
  ':active': {
    color: '#555'
  },
  ':focus': {
    color: '#555'
  },
  ':hover': {
    color: '#555',
    textDecoration: 'underline',
    outline: 'none'
  }
}, ":focus", {
  textDecoration: 'underline',
  outline: 'none'
}));


/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fweitzly%2FProjects%2Fweitzly%2Fweitzly.com%2Fpages%2Findex.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fweitzly%2FProjects%2Fweitzly%2Fweitzly.com%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fweitzly%2FProjects%2Fweitzly%2Fweitzly.com%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_01f9a3fa864a7b7414d8":
/*!*******************************************!*\
  !*** external "dll_01f9a3fa864a7b7414d8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_01f9a3fa864a7b7414d8;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map
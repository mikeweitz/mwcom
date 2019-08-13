webpackHotUpdate("static/development/pages/index.js",{

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
  overflow: 'hidden',
  background: 'url(/static/images/txture.png) #222'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "background", 'url(/static/images/dark_stripes.png) #222'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "padding", '2rem 0'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "width", '100%'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "minHeight", '80px'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "color", '#ddd'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled, "borderTop", '1px solid #ccc'), _styled));
var ButtonPrint = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('button', {
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
    top: '50%',
    left: '20px',
    transform: $hover ? 'translate(0, -50%)' : 'translate(-60px, -50%)',
    transition: 'transform 0.3s ease-in-out'
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
//# sourceMappingURL=index.js.259eed05be02cab5b154.hot-update.js.map
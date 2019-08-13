webpackHotUpdate("static/development/pages/index.js",{

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
    padding: '0 80px 0 36px',
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

/***/ })

})
//# sourceMappingURL=index.js.d35bc235c642457c6bb7.hot-update.js.map
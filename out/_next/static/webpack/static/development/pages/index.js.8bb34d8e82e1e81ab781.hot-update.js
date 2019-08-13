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
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");


var Article = Object(styletron_react__WEBPACK_IMPORTED_MODULE_0__["withStyle"])(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["A"], function (_ref) {
  var $hasLink = _ref.$hasLink;
  return {
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
  };
});
var Strong = Object(styletron_react__WEBPACK_IMPORTED_MODULE_0__["styled"])('strong', {
  textTransform: 'uppercase'
});
var Subtitle = Object(styletron_react__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  minHeight: '1em'
});
var P = Object(styletron_react__WEBPACK_IMPORTED_MODULE_0__["styled"])('p', {
  margin: '1em auto'
});
var Em = Object(styletron_react__WEBPACK_IMPORTED_MODULE_0__["styled"])('em', {
  fontSize: '0.8em'
});

/***/ })

})
//# sourceMappingURL=index.js.8bb34d8e82e1e81ab781.hot-update.js.map
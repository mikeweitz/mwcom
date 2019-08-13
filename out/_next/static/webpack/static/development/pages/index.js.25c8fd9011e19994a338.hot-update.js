webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./styles/theme.js");


var _styled2, _styled3;



var _THEME$breakpoints = _theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].breakpoints,
    tablet = _THEME$breakpoints.tablet,
    tabletLarge = _THEME$breakpoints.tabletLarge,
    desk = _THEME$breakpoints.desk,
    wide = _THEME$breakpoints.wide,
    max = _THEME$breakpoints.max,
    print = _THEME$breakpoints.print,
    colors = _theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].colors;
var Container = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
  position: 'relative',
  maxWidth: '90%',
  margin: '0 auto'
}, desk, {
  width: '90%',
  maxWidth: '1440px'
}));
var Grid = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', (_styled2 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '20px',
  justifyContent: 'center'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, tablet, {
  gridGap: '32px',
  gridTemplateColumns: 'repeat(2, 1fr)'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, tabletLarge, {
  gridGap: '32px',
  gridTemplateColumns: 'repeat(3, 1fr)'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, desk, {
  maxWidth: '1440px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '24px'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled2, print, {
  display: 'block'
}), _styled2));
var GridLinks = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', (_styled3 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '32px'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled3, tablet, {
  gridTemplateColumns: 'repeat(2, 1fr)'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled3, tabletLarge, {
  gridTemplateColumns: 'repeat(2, 1fr)'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled3, desk, {
  maxWidth: '1440px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '24px'
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_styled3, print, {
  display: 'block'
}), _styled3));

/***/ })

})
//# sourceMappingURL=index.js.25c8fd9011e19994a338.hot-update.js.map
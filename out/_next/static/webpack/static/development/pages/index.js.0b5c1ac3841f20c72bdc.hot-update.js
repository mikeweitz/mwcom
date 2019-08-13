webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/position/styled-elements.js":
/*!************************************************!*\
  !*** ./components/position/styled-elements.js ***!
  \************************************************/
/*! exports provided: Position, Role, Organization, Dates, Subhead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organization", function() { return Organization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dates", function() { return Dates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subhead", function() { return Subhead; });
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

/***/ })

})
//# sourceMappingURL=index.js.0b5c1ac3841f20c72bdc.hot-update.js.map
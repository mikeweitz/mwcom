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
/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styletron-react */ "./node_modules/styletron-react/dist/browser.es5.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");



var fontSize = _styles_theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].fontSize;
var _THEME$breakpoints = _styles_theme__WEBPACK_IMPORTED_MODULE_2__["THEME"].breakpoints,
    tablet = _THEME$breakpoints.tablet,
    tabletLarge = _THEME$breakpoints.tabletLarge,
    desk = _THEME$breakpoints.desk,
    wide = _THEME$breakpoints.wide; // statically styled component

var Position = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('article', {
  marginTop: '4em',
  paddingBottom: '4em',
  borderBottom: '1px solid #ccc',
  justifySelf: 'center',
  ':first-of-type': {
    marginTop: '0'
  }[tablet]
});
var Role = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('header', function (_ref) {
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
    paddingRight: '0.5em',
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
var Organization = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('h4', {
  fontSize: fontSize.position,
  margin: '0.5em 0 0.75em',
  lineHeight: '20px'
});
var Dates = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  fontStyle: 'oblique'
});
var Subhead = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('strong', {
  display: 'block',
  lineHeight: '1.5em',
  margin: '1.5em 0 0.25em',
  fontSize: '0.8em'
});

/***/ })

})
//# sourceMappingURL=index.js.31d908bdc8ec0c9bc5d3.hot-update.js.map
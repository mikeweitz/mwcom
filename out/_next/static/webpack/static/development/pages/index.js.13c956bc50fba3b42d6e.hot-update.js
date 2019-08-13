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

 // statically styled component

var Position = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('article', {
  margin: '2em 0 2em',
  paddingBottom: '1.5em',
  borderBottom: '1px solid #ccc'
});
var Role = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('header', function (_ref) {
  var $hover = _ref.$hover;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    textTransform: 'uppercase',
    fontSize: '1.25em',
    fontWeight: '700',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    textShadow: '1px 1px 4px #fff',
    transition: 'all 0.25s',
    ':after': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: '""',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      transition: 'all 0.25s ease',
      position: 'absolute',
      top: '0',
      left: '-101%'
    }, $hover ? {
      top: '0',
      left: '0'
    } : {})
  }, $hover ? {
    padding: '0 0.5em',
    ':after': {
      top: '0',
      left: '0'
    }
  } : {});
});
var Organization = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('h4', {});
var Dates = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  fontStyle: 'oblique'
});
var Subhead = Object(styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('strong', {
  display: 'block',
  margin: '1em 0 0',
  fontSize: '0.8em'
});

/***/ })

})
//# sourceMappingURL=index.js.13c956bc50fba3b42d6e.hot-update.js.map
webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fjames%2Fcode_projects%2Fportfolio%2Fpages%2F_error.jsx!./":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fjames%2Fcode_projects%2Fportfolio%2Fpages%2F_error.jsx ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.jsx */ "./pages/_error.jsx")
      if(true) {
        module.hot.accept(/*! ./pages/_error.jsx */ "./pages/_error.jsx", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.jsx */ "./pages/_error.jsx")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./pages/_error.jsx":
/*!**************************!*\
  !*** ./pages/_error.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (next_error__WEBPACK_IMPORTED_MODULE_0___default.a);

next_error__WEBPACK_IMPORTED_MODULE_0___default.a.getInitialProps = function (_ref) {
  var res = _ref.res,
      err = _ref.err,
      asPath = _ref.asPath;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (statusCode && statusCode === 404) {
    if (asPath.match(/\/$/)) {
      var withoutTrailingSlash = asPath.substr(0, asPath.length - 1);

      if (res) {
        res.writeHead(302, {
          Location: withoutTrailingSlash
        });
        res.end();
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(withoutTrailingSlash);
      }
    }
  }

  return {
    statusCode: statusCode
  };
};

/***/ }),

/***/ 3:
/*!****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fjames%2Fcode_projects%2Fportfolio%2Fpages%2F_error.jsx ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fjames%2Fcode_projects%2Fportfolio%2Fpages%2F_error.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fjames%2Fcode_projects%2Fportfolio%2Fpages%2F_error.jsx!./");


/***/ })

})
//# sourceMappingURL=_error.js.7ec1edbe126af7b991ab.hot-update.js.map
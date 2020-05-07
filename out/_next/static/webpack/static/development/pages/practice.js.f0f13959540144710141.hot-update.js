webpackHotUpdate("static/development/pages/practice.js",{

/***/ "./components/commons/Grid.jsx":
/*!*************************************!*\
  !*** ./components/commons/Grid.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-stack-grid */ "./node_modules/react-stack-grid/lib/index.js");
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_stack_grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Image */ "./components/commons/Image.jsx");





var _jsxFileName = "/Users/james/code_projects/portfolio/components/commons/Grid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var scaleDown = react_stack_grid__WEBPACK_IMPORTED_MODULE_7__["transitions"].scaleDown;

var Grid = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Grid, _Component);

  var _super = _createSuper(Grid);

  function Grid() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Grid);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Grid, [{
    key: "render",
    value: function render() {
      var width = this.props.size.width;
      return __jsx(react_stack_grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: "grid",
        columnWidth: width <= 768 ? '100%' : 300,
        enableSSR: true,
        gutterWidth: 39,
        gutterHeight: 39,
        appearDelay: 100,
        monitorImagesLoaded: true,
        appear: scaleDown.appear,
        appeared: scaleDown.appeared,
        enter: scaleDown.enter,
        entered: scaleDown.entered,
        leaved: scaleDown.leaved,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "grid-item",
        key: "key1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/calendar-app.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key14",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/save-2.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/menu-1.gif",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/save-1.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/insurance-credit-app.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/meditation-app.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/components-1.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key13",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/calendar.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/financial-app-1.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/banking-1.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/flower-plant-app.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/insurance-app-web.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "grid-item",
        key: "key11",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "grid-item",
        key: "key12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
        src: "/experiments/search-1.gif",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (react_sizeme__WEBPACK_IMPORTED_MODULE_6___default()()(Grid));

/***/ })

})
//# sourceMappingURL=practice.js.f0f13959540144710141.hot-update.js.map
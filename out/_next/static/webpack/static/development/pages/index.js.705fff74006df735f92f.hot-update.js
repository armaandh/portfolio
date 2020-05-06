webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/commons/Animated.jsx":
/*!*****************************************!*\
  !*** ./components/commons/Animated.jsx ***!
  \*****************************************/
/*! exports provided: AnimatedLayout, AnimatedButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedLayout", function() { return AnimatedLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedButton", function() { return AnimatedButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");
/* harmony import */ var _public_icons_big_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/icons/big-arrow-right.svg */ "./public/icons/big-arrow-right.svg");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Feedback */ "./components/commons/Feedback.jsx");
/* harmony import */ var _Boxes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Boxes */ "./components/Boxes.jsx");
var _this = undefined,
    _jsxFileName = "/Users/james/code_projects/portfolio/components/commons/Animated.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var AnimatedLayout = function AnimatedLayout(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: className,
    initial: {
      y: 200,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 200,
      damping: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, children));
};
var variants = {
  show: {
    opacity: 0,
    height: "35px",
    width: "35px",
    borderRadius: "500px"
  },
  hide: {
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};
var AnimatedButton = Object(react_sizeme__WEBPACK_IMPORTED_MODULE_2__["withSize"])()(function (_ref2) {
  var children = _ref2.children,
      fullProcess = _ref2.fullProcess,
      onClick = _ref2.onClick,
      size = _ref2.size,
      blue = _ref2.blue;
  var isResponsive = size.width < 1024;
  var dividerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var executeScroll = function executeScroll() {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["scrollToRef"])(dividerRef);
  };

  var executeAnimation = function executeAnimation() {
    onClick();
    setTimeout(function () {
      return executeScroll();
    }, 1200);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, !fullProcess && __jsx(_Feedback__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    blue: blue,
    onClick: executeAnimation,
    initial: {
      height: "initial",
      width: "initial",
      borderRadius: "32px"
    },
    exit: {
      height: 0,
      width: 0,
      margin: "90px auto 90px auto",
      borderRadius: "500px",
      opacity: 0.01
    },
    transition: {
      borderRadius: {
        duration: 0
      },
      type: "spring",
      stiffness: 400,
      damping: 100,
      duration: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
    exit: {
      scale: 0
    },
    transition: {
      duration: 0
    },
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "See the full process"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
    exit: {
      scale: 0
    },
    transition: {
      duration: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, !isResponsive && __jsx(_public_icons_big_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "35",
    height: "33",
    viewBox: "0 0 35 33",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 91
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].span, {
    exit: {
      scale: 0
    },
    transition: {
      duration: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, isResponsive && __jsx(_public_icons_big_arrow_right_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "19",
    height: "17",
    viewBox: "0 0 35 33",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 90
    }
  })))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, fullProcess && __jsx(_Boxes__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    ref: dividerRef,
    blue: blue,
    initial: {
      opacity: 0,
      height: "35px",
      width: "35px",
      borderRadius: "500px"
    },
    animate: {
      opacity: 1,
      height: "4px",
      width: "250px"
    },
    transition: {
      delay: 1,
      type: "spring",
      stiffness: 400,
      damping: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 23
    }
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.705fff74006df735f92f.hot-update.js.map
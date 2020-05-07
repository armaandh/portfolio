webpackHotUpdate("static/development/pages/case-study-persona.js",{

/***/ "./pages/case-study-persona.jsx":
/*!**************************************!*\
  !*** ./pages/case-study-persona.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components_commons_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/commons/Layout */ "./components/commons/Layout.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sizeme */ "./node_modules/react-sizeme/dist/react-sizeme.js");
/* harmony import */ var react_sizeme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sizeme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_icons_problems_blue_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/icons/problems-blue.svg */ "./public/icons/problems-blue.svg");
/* harmony import */ var _public_icons_goals_blue_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/icons/goals-blue.svg */ "./public/icons/goals-blue.svg");
/* harmony import */ var _public_icons_ux_metrics_blue_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/icons/ux-metrics-blue.svg */ "./public/icons/ux-metrics-blue.svg");
/* harmony import */ var _public_icons_big_arrow_right_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/icons/big-arrow-right.svg */ "./public/icons/big-arrow-right.svg");
/* harmony import */ var _public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/icons/quote.svg */ "./public/icons/quote.svg");
/* harmony import */ var _components_Boxes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Boxes */ "./components/Boxes.jsx");
/* harmony import */ var _components_commons_Animated__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/commons/Animated */ "./components/commons/Animated.jsx");
/* harmony import */ var _components_commons_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/commons/Image */ "./components/commons/Image.jsx");
/* harmony import */ var _components_commons_Feedback__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/commons/Feedback */ "./components/commons/Feedback.jsx");
var _this = undefined,
    _jsxFileName = "/Users/james/code_projects/portfolio/pages/case-study-persona.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var CaseStudyPersona = function CaseStudyPersona(_ref) {
  var _router$query;

  var size = _ref.size;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var isResponsive = size.width < 1024;
  var isSmallComputer = size.width < 1120;
  var fullProcess = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.show;

  var showFullProcess = function showFullProcess() {
    router.push({
      pathname: '/case-study-persona',
      query: {
        show: 'fullprocess'
      }
    });
  };

  return __jsx(_components_commons_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Persona's case study - JC Pratt-Delzenne",
    caseStudy: "persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_components_commons_Animated__WEBPACK_IMPORTED_MODULE_12__["AnimatedLayout"], {
    className: "case-study-persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Summary"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["SummaryContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "model",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_public_icons_problems_blue_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "Problems"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "Craving to understand ourselves and others"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, "Most scientific online tests look unprofessional or scammy"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, "Know the difference between us and society"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "Be understood by my family and friends"))), __jsx("div", {
    className: "model",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_public_icons_goals_blue_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Goals"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "Scientifically researched and validated model"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "Attractive UI & game-like interactions"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "Compare user results to more than a million data points"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, "Ability to share to all major platforms"))), __jsx("div", {
    className: "model",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_public_icons_ux_metrics_blue_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "UX Metrics"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 23
    }
  }, "70%"), " of users who start, complete the test"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, "89%"), " of users find the test engaging and beautiful"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, "82%"), " of users find results very insightful"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  }, "39%"), " of users share their results with 3+ friends"))))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "UX process"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "ux-process",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "The user experience process I used was the LEAN UX framework."), !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "../persona/ux-process.png",
    width: "359px",
    mb: "85px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "../persona/ux-process.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 32
    }
  }))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["ProductImageBox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section page-1 persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, !isResponsive && !isSmallComputer && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-1.png",
    width: "378px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 53
    }
  }), (isResponsive || isSmallComputer) && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 54
    }
  })), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container page-2 persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, !isResponsive && !isSmallComputer && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-2.png",
    width: "616px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 55
    }
  }), (isResponsive || isSmallComputer) && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 56
    }
  })), __jsx("div", {
    className: "container page-3 persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, !isResponsive && !isSmallComputer && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    className: "vertical-center",
    src: "../persona/product-image-3.png",
    width: "616px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 55
    }
  }), (isResponsive || isSmallComputer) && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    className: "vertical-center",
    src: "../persona/product-image-3.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 56
    }
  })))), __jsx("div", {
    className: "block page-4 persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, !isResponsive && !isSmallComputer && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-4.png",
    width: "1024px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 51
    }
  }), (isResponsive || isSmallComputer) && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-4.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 52
    }
  }))), __jsx(_components_commons_Animated__WEBPACK_IMPORTED_MODULE_12__["AnimatedButton"], {
    blue: true,
    fullProcess: fullProcess,
    onClick: showFullProcess,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }), fullProcess && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, "Validating the problem"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text solo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "I'm passionate about Personality Science for years now. I\u2019ve learned a lot reading books by Personality Psychology Harvard professor Brian R. Little, Colin DeYoung, Jordan B. Peterson. I saw a big discrepancy between science knowledge and test websites.")), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 43
    }
  }, "Competitive Analysis")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "I made a competitive analysis to better understand the competitive landscape. Most personality test websites use inaccurate and pseudoscientific models or look very unprofessional and scammy."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "850px",
    src: "/persona/competitive-analysis.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/competitive-analysis.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 38
    }
  })))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 43
    }
  }, "Conversational Interview")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "I needed to gather data about how people see personality websites tests, why they would take one, which criteria would make them decide on a test website instead of another. Conversational interviews are great to collect rich stories and perspectives about individual decisions."), __jsx("div", {
    className: "content quotes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "quotes-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "quote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, !isResponsive && __jsx(_public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "icon",
    width: "70",
    height: "58",
    viewBox: "0 0 70 58",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 41
    }
  }), isResponsive && __jsx(_public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "icon",
    width: "26",
    height: "22",
    viewBox: "0 0 70 58",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 40
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 23
    }
  }, "I think if I know myself, I", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 53
    }
  }), " would feel better")), __jsx("div", {
    className: "quote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, !isResponsive && __jsx(_public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: "70",
    height: "58",
    viewBox: "0 0 70 58",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 41
    }
  }), isResponsive && __jsx(_public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: "26",
    height: "22",
    viewBox: "0 0 70 58",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 40
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 23
    }
  }, "Many personality tests", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 48
    }
  }), " feel like astrology"))), __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "715px",
    src: "/persona/conversational-interview.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/conversational-interview.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 38
    }
  })))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    last: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 43
    }
  }, "Thematic Analysis")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }, "I decided to analyze the conversations and categorizing them into themes. It was very useful to refer back to the thematic items and themes during the design process."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "669px",
    src: "/persona/thematic-analysis.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/thematic-analysis.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 38
    }
  }))))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    noPadTop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, "UX Process : Lean UX"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    last: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text solo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, "I used the Lean UX process to build the product. It\u2019s great to state my assumptions then test them with users in a fast iterative cycle."))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    noPadTop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 15
    }
  }, "THINK"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text solo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, "To map my assumptions I used multiple UX exercises. Questions I needed was like: Why users would come? What are they looking for? What are their expectations? How can I measure the success of the whole experience?")), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    mb: "74px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 43
    }
  }, "User journey map")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, "I used the User Journey Mapping exercise to identify the motivations, thoughts, and the path a user will follow when they would want to take a personality test."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "850px",
    src: "/persona/user-journey-map.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/user-journey-map.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 38
    }
  })))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    last: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 43
    }
  }, "Success & signal metrics")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, "I wanted to gather data from the whole user experience. Making decisions based on data increases the likelihood of product success. Google HEART Model was a perfect match for exactly what I wanted to do."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "850px",
    src: "/persona/success-signals-metrics.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/success-signals-metrics.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 38
    }
  }))))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    noPadTop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, "Make"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text solo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, "Based on what I created before, I explored user interface ideas to solve the problem. I went step by step: sketching by hand, wireframe, high fidelity mockup, and finally a prototype.")), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 43
    }
  }, "Crazy 8's")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, "I used the Crazy 8 exercise from the Design Sprint framework to generate ideas. It\u2019s a great exercise for the exploration phase."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "792px",
    src: "/persona/crazy8.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/crazy8.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 38
    }
  })))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 43
    }
  }, "Solution Sketch")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, "I decided on a promising solution that could solve the problem. I made some wireframes of the solution. I kept in mind that the goal was to create a valuable and high-quality MVP(Minimum Viable Product)."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "846px",
    src: "/persona/solution-sketch.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/solution-sketch.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 38
    }
  })))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 43
    }
  }, "Design & Prototype")), __jsx("p", {
    className: "text solo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }, "After presenting the solution to potential users, I created the high-fidelity mockup. I wanted to make the design to create an enthusiastic and fun feeling to increase engagement and trust.")), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["ProductImageBox"], {
    fullStudy: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "section page-1 persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "../persona/product-image-1.png",
    width: "378px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "../persona/product-image-1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 38
    }
  })), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "container page-2 persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-2.png",
    width: "616px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 41
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 40
    }
  })), __jsx("div", {
    className: "container page-3 persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    className: "vertical-center",
    src: "../persona/product-image-3.png",
    width: "616px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 41
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    className: "vertical-center",
    src: "../persona/product-image-3.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 40
    }
  })))), __jsx("div", {
    className: "block page-4 persona",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-4.png",
    width: "1024px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 37
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    productImage: true,
    src: "../persona/product-image-4.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 36
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://persona.prattdelzenne.com",
    scroll: false,
    prefetch: false,
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 15
    }
  }, __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Prototype"], {
    project: "persona",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }, "See Prototype"), __jsx("div", {
    className: "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  })))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    last: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 43
    }
  }, "Design System")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 17
    }
  }, "I applied vivid colors and round shapes to create a feeling of play and game-like interactions to create a sense of familiarity and fun. The design decisions were crafted to increase the completion rate of the test and the chance of users sharing results with friends."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "850px",
    src: "/persona/design-system.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/design-system.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 38
    }
  }))))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    noPadTop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 15
    }
  }, "Check"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "text solo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 17
    }
  }, "My goal in this phase was to get feedback from potential users to uncover issues. I used in-person qualitative usability tests, quantitative usability testing to gather feedback.")), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 43
    }
  }, "Qualitative usability testing")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }
  }, "I\u2019ve done conversational Interviews to gather story-rich data about interpretations of how they perceive the design. I also performed usability tests to know if the solution could be understood by different types of users."), __jsx("div", {
    className: "content quotes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "quotes-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "quote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 21
    }
  }, !isResponsive && __jsx(_public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "icon",
    width: "70",
    height: "58",
    viewBox: "0 0 70 58",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 41
    }
  }), isResponsive && __jsx(_public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "icon",
    width: "26",
    height: "22",
    viewBox: "0 0 70 58",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 40
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 23
    }
  }, "It\u2019s really beautiful and", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 51
    }
  }), " very easy to use")), __jsx("div", {
    className: "quote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 21
    }
  }, !isResponsive && __jsx(_public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: "70",
    height: "58",
    viewBox: "0 0 70 58",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 41
    }
  }), isResponsive && __jsx(_public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: "26",
    height: "22",
    viewBox: "0 0 70 58",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 40
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 23
    }
  }, "Wow! I would share", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 44
    }
  }), " it with my colleagues"))), __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "715px",
    src: "/persona/qualitative-usability-testing.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/qualitative-usability-testing.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 38
    }
  })), __jsx("div", {
    className: "stats below-stats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "stat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 23
    }
  }, "78%"), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 23
    }
  }, "Tasks completion rate")), __jsx("div", {
    className: "stat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 23
    }
  }, "89%"), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }, "Positive experience rate"))))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    last: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 43
    }
  }, "Quantitative usability testing")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 17
    }
  }, "Used a tool to bring 150 people to use the prototype and gather data about usability metrics."), __jsx("div", {
    className: "content quotes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "715px",
    src: "/persona/quantitative-usability-testing.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/quantitative-usability-testing.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 38
    }
  }))))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    noPadTop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 15
    }
  }, "IMPLEMENTING THE SOLUTION"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 43
    }
  }, "Software Architecture")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 17
    }
  }, "After design iterations, with usability tests and user feedback, I started to implement the solution. I used a simple architecture but with simple maintenance and scale in mind. I also wanted the least cost possible."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "850px",
    src: "/persona/software-architecture.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/software-architecture.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 38
    }
  })))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    last: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 43
    }
  }, "Tech Stack")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 17
    }
  }, "I wanted to make stack simple yet scalable. Maintainability is also an issue I wanted to tackle upfront. It's a standard stack today."), __jsx("div", {
    className: "content stacks",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "stack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 21
    }
  }, "Frontend"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/react.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 25
    }
  }, "React")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/redux.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 25
    }
  }, "Redux")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/nextjs.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 25
    }
  }, "Nextjs")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/styled-components.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 25
    }
  }), !isResponsive && __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 43
    }
  }, "Styled Components"), isResponsive && __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 42
    }
  }, "Styled")))), __jsx("div", {
    className: "stack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 21
    }
  }, "Database & Analytics"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/mysql.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 25
    }
  }, "MySQL")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/google-analytics.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 25
    }
  }), !isResponsive && __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 43
    }
  }, "Google Analytics"), isResponsive && __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 42
    }
  }, "Analytics")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/hotjar.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 25
    }
  }, "Hotjar")))), __jsx("div", {
    className: "stack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 21
    }
  }, "Backend"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/nodejs.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 25
    }
  }, "Nodejs")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/express.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 25
    }
  }, "Express")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/typeorm.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 25
    }
  }, "TypeORM")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "logo",
    src: "/persona/dokku.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 25
    }
  }, "Dokku"))))))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    noPadTop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 15
    }
  }, "LAUNCH & RESULTS"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    last: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 38
    }
  }, "Analytics")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 17
    }
  }, "Persona launched on Product Hunt and ended ", __jsx("span", {
    className: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 62
    }
  }, "#4 Product of the Day"), ". During the launch day, it was #1 for more than 13 hours. The product got a lot of traffic, usage, and feedback."), __jsx("div", {
    className: "content results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "stats primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "stat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 23
    }
  }, "12 000"), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 23
    }
  }, "Users"))), __jsx("div", {
    className: "stats medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "stat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 23
    }
  }, "6 000"), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 23
    }
  }, "Test completed")), __jsx("div", {
    className: "stat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 23
    }
  }, "70%"), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 23
    }
  }, "Completion rate")), __jsx("div", {
    className: "stat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 23
    }
  }, "50 000"), __jsx("p", {
    className: "label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 23
    }
  }, "Page views"))), __jsx("div", {
    className: "lessons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "model",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 23
    }
  }, "UX Metrics"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 29
    }
  }, "70%"), " of users who start completes the test"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 29
    }
  }, "89%"), " of users find the test engaging and beautiful"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 29
    }
  }, "82%"), " of users find results very insightful"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 29
    }
  }, "39%"), " of users share their results to 3+ friends"))), __jsx("div", {
    className: "model",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 23
    }
  }, "Lessons"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 23
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 27
    }
  }, "Some people care a lot about how their data will be used, but most don't"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 27
    }
  }, "Don't use free databases for production use, it always bites back"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 27
    }
  }, "When peope like and share, they can start a massive network effect"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 27
    }
  }, "Good design increases trust by a huge margin"))))))), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["Box"], {
    noPadTop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 15
    }
  }, "Product Updates"), __jsx(_components_Boxes__WEBPACK_IMPORTED_MODULE_11__["StudyItemContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tag blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 43
    }
  }, "Iterations")), __jsx("p", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 17
    }
  }, "After the launch, I received requests and observed a lot of user behavior using analytics tools. I prioritized and solved them using models from Lean UX or Design Sprint and other useful frameworks."), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mask",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 19
    }
  }, !isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "600px",
    src: "/persona/iterations.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 39
    }
  }), isResponsive && __jsx(_components_commons_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    src: "/persona/iterations.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 38
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_sizeme__WEBPACK_IMPORTED_MODULE_4__["withSize"])()(CaseStudyPersona));

/***/ })

})
//# sourceMappingURL=case-study-persona.js.c10ed256ef8ef8cb61b7.hot-update.js.map
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("classnames"), require("prop-types"), require("react"));
  else if(typeof define === 'function' && define.amd)
    define(["classnames", "prop-types", "react"], factory);
  else if(typeof exports === 'object')
    exports["EvoKit"] = factory(require("classnames"), require("prop-types"), require("react"));
  else
    root["EvoKit"] = factory(root["classNames"], root["PropTypes"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/  // The module cache
/******/  var installedModules = {};
/******/
/******/  // The require function
/******/  function __webpack_require__(moduleId) {
/******/
/******/    // Check if module is in cache
/******/    if(installedModules[moduleId]) {
/******/      return installedModules[moduleId].exports;
/******/    }
/******/    // Create a new module (and put it into the cache)
/******/    var module = installedModules[moduleId] = {
/******/      i: moduleId,
/******/      l: false,
/******/      exports: {}
/******/    };
/******/
/******/    // Execute the module function
/******/    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/    // Flag the module as loaded
/******/    module.l = true;
/******/
/******/    // Return the exports of the module
/******/    return module.exports;
/******/  }
/******/
/******/
/******/  // expose the modules object (__webpack_modules__)
/******/  __webpack_require__.m = modules;
/******/
/******/  // expose the module cache
/******/  __webpack_require__.c = installedModules;
/******/
/******/  // define getter function for harmony exports
/******/  __webpack_require__.d = function(exports, name, getter) {
/******/    if(!__webpack_require__.o(exports, name)) {
/******/      Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/    }
/******/  };
/******/
/******/  // define __esModule on exports
/******/  __webpack_require__.r = function(exports) {
/******/    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/    }
/******/    Object.defineProperty(exports, '__esModule', { value: true });
/******/  };
/******/
/******/  // create a fake namespace object
/******/  // mode & 1: value is a module id, require it
/******/  // mode & 2: merge all properties of value into the ns
/******/  // mode & 4: return value when already ns object
/******/  // mode & 8|1: behave like require
/******/  __webpack_require__.t = function(value, mode) {
/******/    if(mode & 1) value = __webpack_require__(value);
/******/    if(mode & 8) return value;
/******/    if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/    var ns = Object.create(null);
/******/    __webpack_require__.r(ns);
/******/    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/    if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/    return ns;
/******/  };
/******/
/******/  // getDefaultExport function for compatibility with non-harmony modules
/******/  __webpack_require__.n = function(module) {
/******/    var getter = module && module.__esModule ?
/******/      function getDefault() { return module['default']; } :
/******/      function getModuleExports() { return module; };
/******/    __webpack_require__.d(getter, 'a', getter);
/******/    return getter;
/******/  };
/******/
/******/  // Object.prototype.hasOwnProperty.call
/******/  __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/  // __webpack_public_path__
/******/  __webpack_require__.p = "";
/******/
/******/
/******/  // Load entry module and return exports
/******/  return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/Body/Body.js":
/*!*********************************!*\
  !*** ./src/blocks/Body/Body.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Body = function (_React$Component) {\n    _inherits(Body, _React$Component);\n\n    function Body() {\n        _classCallCheck(this, Body);\n\n        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));\n    }\n\n    _createClass(Body, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return Body;\n}(_react2.default.Component);\n\nBody.blockTag = 'body';\nBody.blockName = 'body';\nBody.blockMods = ['size', 'indent', 'background', 'color'];\nexports.default = (0, _component.createBlock)(Body);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Body/Body.js?");

/***/ }),

/***/ "./src/blocks/Body/BodySection.js":
/*!****************************************!*\
  !*** ./src/blocks/Body/BodySection.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BodySection = function (_React$Component) {\n    _inherits(BodySection, _React$Component);\n\n    function BodySection() {\n        _classCallCheck(this, BodySection);\n\n        return _possibleConstructorReturn(this, (BodySection.__proto__ || Object.getPrototypeOf(BodySection)).apply(this, arguments));\n    }\n\n    _createClass(BodySection, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return BodySection;\n}(_react2.default.Component);\n\nBodySection.blockTag = 'div';\nBodySection.blockName = 'body__section';\nexports.default = (0, _component.createBlock)(BodySection);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Body/BodySection.js?");

/***/ }),

/***/ "./src/blocks/Body/index.js":
/*!**********************************!*\
  !*** ./src/blocks/Body/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Body = __webpack_require__(/*! ./Body */ \"./src/blocks/Body/Body.js\");\n\nvar _Body2 = _interopRequireDefault(_Body);\n\nvar _BodySection = __webpack_require__(/*! ./BodySection */ \"./src/blocks/Body/BodySection.js\");\n\nvar _BodySection2 = _interopRequireDefault(_BodySection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_Body2.default.Section = _BodySection2.default;\n\nexports.default = _Body2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Body/index.js?");

/***/ }),

/***/ "./src/blocks/Box/Box.js":
/*!*******************************!*\
  !*** ./src/blocks/Box/Box.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Box = function (_React$Component) {\n    _inherits(Box, _React$Component);\n\n    function Box() {\n        _classCallCheck(this, Box);\n\n        return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));\n    }\n\n    _createClass(Box, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return Box;\n}(_react2.default.Component);\n\nBox.blockTag = 'div';\nBox.blockName = 'box';\nBox.blockMods = ['background', 'border', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'margin-tb', 'margin-lr', 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'padding-tb', 'padding-lr', 'display', 'position', 'place'];\nBox.mixMods = ['round', 'round-top', 'round-right', 'round-bottom', 'round-left', 'round-top-left', 'round-top-right', 'round-bottom-left', 'round-bottom-right', 'width'];\nexports.default = (0, _component.createBlock)(Box);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Box/Box.js?");

/***/ }),

/***/ "./src/blocks/Box/index.js":
/*!*********************************!*\
  !*** ./src/blocks/Box/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Box = __webpack_require__(/*! ./Box */ \"./src/blocks/Box/Box.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Box2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Box/index.js?");

/***/ }),

/***/ "./src/blocks/Grid/Grid.js":
/*!*********************************!*\
  !*** ./src/blocks/Grid/Grid.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Grid = function (_React$Component) {\n    _inherits(Grid, _React$Component);\n\n    function Grid() {\n        _classCallCheck(this, Grid);\n\n        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));\n    }\n\n    _createClass(Grid, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return Grid;\n}(_react2.default.Component);\n\nGrid.blockTag = 'div';\nGrid.blockName = 'grid';\nGrid.blockMods = ['column', 'indent', 'direction', 'align', 'valign', 'divider', 'wrap'];\nexports.default = (0, _component.createBlock)(Grid);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Grid/Grid.js?");

/***/ }),

/***/ "./src/blocks/Grid/GridItem.js":
/*!*************************************!*\
  !*** ./src/blocks/Grid/GridItem.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar GridItem = function (_React$Component) {\n    _inherits(GridItem, _React$Component);\n\n    function GridItem() {\n        _classCallCheck(this, GridItem);\n\n        return _possibleConstructorReturn(this, (GridItem.__proto__ || Object.getPrototypeOf(GridItem)).apply(this, arguments));\n    }\n\n    _createClass(GridItem, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return GridItem;\n}(_react2.default.Component);\n\nGridItem.blockTag = 'div';\nGridItem.blockName = 'grid__item';\nGridItem.blockMods = ['order'];\nGridItem.mixMods = ['width'];\nexports.default = (0, _component.createBlock)(GridItem);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Grid/GridItem.js?");

/***/ }),

/***/ "./src/blocks/Grid/index.js":
/*!**********************************!*\
  !*** ./src/blocks/Grid/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Grid = __webpack_require__(/*! ./Grid */ \"./src/blocks/Grid/Grid.js\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _GridItem = __webpack_require__(/*! ./GridItem */ \"./src/blocks/Grid/GridItem.js\");\n\nvar _GridItem2 = _interopRequireDefault(_GridItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_Grid2.default.Item = _GridItem2.default;\n\nexports.default = _Grid2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Grid/index.js?");

/***/ }),

/***/ "./src/blocks/Image/Image.js":
/*!***********************************!*\
  !*** ./src/blocks/Image/Image.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Image = function (_React$Component) {\n    _inherits(Image, _React$Component);\n\n    function Image() {\n        _classCallCheck(this, Image);\n\n        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));\n    }\n\n    _createClass(Image, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps());\n        }\n    }]);\n\n    return Image;\n}(_react2.default.Component);\n\nImage.blockTag = 'img';\nImage.blockName = 'image';\nImage.blockMods = ['align', 'valign', 'mirror', 'fit'];\nImage.mixMods = ['round', 'round-top', 'round-right', 'round-bottom', 'round-left', 'round-top-left', 'round-top-right', 'round-bottom-left', 'round-bottom-right'];\nexports.default = (0, _component.createBlock)(Image);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Image/Image.js?");

/***/ }),

/***/ "./src/blocks/Image/index.js":
/*!***********************************!*\
  !*** ./src/blocks/Image/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Image = __webpack_require__(/*! ./Image */ \"./src/blocks/Image/Image.js\");\n\nvar _Image2 = _interopRequireDefault(_Image);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Image2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Image/index.js?");

/***/ }),

/***/ "./src/blocks/Line/Line.js":
/*!*********************************!*\
  !*** ./src/blocks/Line/Line.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Line = function (_React$Component) {\n    _inherits(Line, _React$Component);\n\n    function Line() {\n        _classCallCheck(this, Line);\n\n        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));\n    }\n\n    _createClass(Line, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps());\n        }\n    }]);\n\n    return Line;\n}(_react2.default.Component);\n\nLine.blockTag = 'hr';\nLine.blockName = 'line';\nLine.blockMods = ['indent', 'style', 'color'];\nexports.default = (0, _component.createBlock)(Line);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Line/Line.js?");

/***/ }),

/***/ "./src/blocks/Line/index.js":
/*!**********************************!*\
  !*** ./src/blocks/Line/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Line = __webpack_require__(/*! ./Line */ \"./src/blocks/Line/Line.js\");\n\nvar _Line2 = _interopRequireDefault(_Line);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Line2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Line/index.js?");

/***/ }),

/***/ "./src/blocks/Link/Link.js":
/*!*********************************!*\
  !*** ./src/blocks/Link/Link.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Link = function (_React$Component) {\n    _inherits(Link, _React$Component);\n\n    function Link() {\n        _classCallCheck(this, Link);\n\n        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));\n    }\n\n    _createClass(Link, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return Link;\n}(_react2.default.Component);\n\nLink.blockTag = 'a';\nLink.blockName = 'link';\nLink.blockMods = ['color', 'size', 'weight', 'style', 'valign', 'lheight'];\nexports.default = (0, _component.createBlock)(Link);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Link/Link.js?");

/***/ }),

/***/ "./src/blocks/Link/index.js":
/*!**********************************!*\
  !*** ./src/blocks/Link/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Link = __webpack_require__(/*! ./Link */ \"./src/blocks/Link/Link.js\");\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Link2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Link/index.js?");

/***/ }),

/***/ "./src/blocks/List/List.js":
/*!*********************************!*\
  !*** ./src/blocks/List/List.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar List = function (_React$Component) {\n    _inherits(List, _React$Component);\n\n    function List() {\n        _classCallCheck(this, List);\n\n        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));\n    }\n\n    _createClass(List, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return List;\n}(_react2.default.Component);\n\nList.blockTag = 'ul';\nList.blockName = 'list';\nList.blockMods = ['color', 'divider', 'style', 'indent'];\nexports.default = (0, _component.createBlock)(List);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/List/List.js?");

/***/ }),

/***/ "./src/blocks/List/ListItem.js":
/*!*************************************!*\
  !*** ./src/blocks/List/ListItem.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ListItem = function (_React$Component) {\n    _inherits(ListItem, _React$Component);\n\n    function ListItem() {\n        _classCallCheck(this, ListItem);\n\n        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));\n    }\n\n    _createClass(ListItem, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return ListItem;\n}(_react2.default.Component);\n\nListItem.blockTag = 'li';\nListItem.blockName = 'list__item';\nexports.default = (0, _component.createBlock)(ListItem);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/List/ListItem.js?");

/***/ }),

/***/ "./src/blocks/List/index.js":
/*!**********************************!*\
  !*** ./src/blocks/List/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _List = __webpack_require__(/*! ./List */ \"./src/blocks/List/List.js\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListItem = __webpack_require__(/*! ./ListItem */ \"./src/blocks/List/ListItem.js\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_List2.default.Item = _ListItem2.default;\n\nexports.default = _List2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/List/index.js?");

/***/ }),

/***/ "./src/blocks/Mix/Mix.js":
/*!*******************************!*\
  !*** ./src/blocks/Mix/Mix.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Mix = function (_React$Component) {\n    _inherits(Mix, _React$Component);\n\n    function Mix() {\n        _classCallCheck(this, Mix);\n\n        return _possibleConstructorReturn(this, (Mix.__proto__ || Object.getPrototypeOf(Mix)).apply(this, arguments));\n    }\n\n    _createClass(Mix, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps());\n        }\n    }]);\n\n    return Mix;\n}(_react2.default.Component);\n\nMix.blockTag = 'div';\nMix.blockName = 'mix';\nMix.blockMods = ['width', 'round', 'round-top', 'round-right', 'round-bottom', 'round-left', 'round-top-left', 'round-top-right', 'round-bottom-left', 'round-bottom-right'];\nexports.default = (0, _component.createBlock)(Mix);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Mix/Mix.js?");

/***/ }),

/***/ "./src/blocks/Mix/index.js":
/*!*********************************!*\
  !*** ./src/blocks/Mix/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Mix = __webpack_require__(/*! ./Mix */ \"./src/blocks/Mix/Mix.js\");\n\nvar _Mix2 = _interopRequireDefault(_Mix);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Mix2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Mix/index.js?");

/***/ }),

/***/ "./src/blocks/Picture/Picture.js":
/*!***************************************!*\
  !*** ./src/blocks/Picture/Picture.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Picture = function (_React$Component) {\n    _inherits(Picture, _React$Component);\n\n    function Picture() {\n        _classCallCheck(this, Picture);\n\n        return _possibleConstructorReturn(this, (Picture.__proto__ || Object.getPrototypeOf(Picture)).apply(this, arguments));\n    }\n\n    _createClass(Picture, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return Picture;\n}(_react2.default.Component);\n\nPicture.blockTag = 'picture';\nPicture.blockName = 'picture';\nPicture.blockMods = ['fit'];\nPicture.mixMods = ['round', 'round-top', 'round-right', 'round-bottom', 'round-left', 'round-top-left', 'round-top-right', 'round-bottom-left', 'round-bottom-right'];\nexports.default = (0, _component.createBlock)(Picture);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Picture/Picture.js?");

/***/ }),

/***/ "./src/blocks/Picture/PictureItem.js":
/*!*******************************************!*\
  !*** ./src/blocks/Picture/PictureItem.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PictureItem = function (_React$Component) {\n    _inherits(PictureItem, _React$Component);\n\n    function PictureItem() {\n        _classCallCheck(this, PictureItem);\n\n        return _possibleConstructorReturn(this, (PictureItem.__proto__ || Object.getPrototypeOf(PictureItem)).apply(this, arguments));\n    }\n\n    _createClass(PictureItem, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps());\n        }\n    }]);\n\n    return PictureItem;\n}(_react2.default.Component);\n\nPictureItem.blockTag = 'img';\nPictureItem.blockName = 'picture__item';\nexports.default = (0, _component.createBlock)(PictureItem);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Picture/PictureItem.js?");

/***/ }),

/***/ "./src/blocks/Picture/index.js":
/*!*************************************!*\
  !*** ./src/blocks/Picture/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Picture = __webpack_require__(/*! ./Picture */ \"./src/blocks/Picture/Picture.js\");\n\nvar _Picture2 = _interopRequireDefault(_Picture);\n\nvar _PictureItem = __webpack_require__(/*! ./PictureItem */ \"./src/blocks/Picture/PictureItem.js\");\n\nvar _PictureItem2 = _interopRequireDefault(_PictureItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_Picture2.default.Item = _PictureItem2.default;\n\nexports.default = _Picture2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Picture/index.js?");

/***/ }),

/***/ "./src/blocks/Text/Text.js":
/*!*********************************!*\
  !*** ./src/blocks/Text/Text.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _component = __webpack_require__(/*! ../../component */ \"./src/component.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Text = function (_React$Component) {\n    _inherits(Text, _React$Component);\n\n    function Text() {\n        _classCallCheck(this, Text);\n\n        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));\n    }\n\n    _createClass(Text, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(this.getTagName(), this.getProps(), this.props.children);\n        }\n    }]);\n\n    return Text;\n}(_react2.default.Component);\n\nText.blockTag = 'span';\nText.blockName = 'text';\nText.blockMods = ['color', 'size', 'weight', 'align', 'valign', 'wrap', 'style', 'transform', 'lheight'];\nexports.default = (0, _component.createBlock)(Text);\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Text/Text.js?");

/***/ }),

/***/ "./src/blocks/Text/index.js":
/*!**********************************!*\
  !*** ./src/blocks/Text/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Text = __webpack_require__(/*! ./Text */ \"./src/blocks/Text/Text.js\");\n\nvar _Text2 = _interopRequireDefault(_Text);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Text2.default;\n\n//# sourceURL=webpack://EvoKit/./src/blocks/Text/index.js?");

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.createBlock = createBlock;\n\nvar _classnames = __webpack_require__(/*! classnames */ \"classnames\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar getClassNameFromProps = function getClassNameFromProps(classPrefix, propsPrefix, blockName, allowedMods, css, props) {\n    var blockClassName = '' + classPrefix + blockName;\n    var modsProps = [css ? css[blockClassName] : blockClassName];\n\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = allowedMods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var key = _step.value;\n\n            var propName = '' + propsPrefix + key;\n\n            if (propName in props) {\n                (function () {\n                    var modName = blockClassName + '_' + key;\n                    var modsString = (0, _classnames2.default)(props[propName]);\n\n                    if (modsString) {\n                        modsString.split(' ').forEach(function (value) {\n                            var modClassName = modName + '_' + value;\n                            modsProps.push(css ? css[modClassName] : modClassName);\n                        });\n                    }\n                })();\n            }\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return modsProps;\n};\n\nfunction createBlock(target) {\n    var propsPrefixName = target.blockName.split('__')[0];\n\n    target.blockTag = target.blockTag || 'div';\n    target.propTypes = target.propTypes || {};\n    target.classPrefix = target.classPrefix || 'ek-';\n    target.propsPrefix = target.propsPrefix || propsPrefixName + '-';\n    target.blockMods = target.blockMods || [];\n    target.mixMods = target.mixMods || [];\n    target.displayName = target.displayName || '' + target.classPrefix + target.blockName;\n    target.css = null;\n\n    target.propTypes['domRef'] = _propTypes2.default.func;\n\n    var tagPropName = target.propsPrefix + 'tag';\n\n    target.propTypes[tagPropName] = _propTypes2.default.string;\n\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n        for (var _iterator2 = target.blockMods[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            var key = _step2.value;\n\n            target.propTypes['' + target.propsPrefix + key] = _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.number]);\n        }\n    } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                _iterator2.return();\n            }\n        } finally {\n            if (_didIteratorError2) {\n                throw _iteratorError2;\n            }\n        }\n    }\n\n    target.prototype.getClassName = function getClassName() {\n        var propClassList = this.props.className ? [this.props.className] : [];\n\n        var blockClassList = getClassNameFromProps(target.classPrefix, target.propsPrefix, target.blockName, target.blockMods, target.css, this.props);\n\n        var mixClassList = target.mixMods.length ? getClassNameFromProps(target.classPrefix, 'mix-', 'mix', target.mixMods, target.css, this.props) : [];\n\n        return [].concat(_toConsumableArray(blockClassList), _toConsumableArray(mixClassList), propClassList).join(' ');\n    };\n\n    target.prototype.getCleanProps = function getCleanProps() {\n        var cleanProps = Object.assign({}, this.props);\n\n        var _iteratorNormalCompletion3 = true;\n        var _didIteratorError3 = false;\n        var _iteratorError3 = undefined;\n\n        try {\n            for (var _iterator3 = target.blockMods[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n                var key = _step3.value;\n\n                var propName = '' + target.propsPrefix + key;\n\n                if (propName in cleanProps) {\n                    delete cleanProps[propName];\n                }\n            }\n        } catch (err) {\n            _didIteratorError3 = true;\n            _iteratorError3 = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion3 && _iterator3.return) {\n                    _iterator3.return();\n                }\n            } finally {\n                if (_didIteratorError3) {\n                    throw _iteratorError3;\n                }\n            }\n        }\n\n        var _iteratorNormalCompletion4 = true;\n        var _didIteratorError4 = false;\n        var _iteratorError4 = undefined;\n\n        try {\n            for (var _iterator4 = target.mixMods[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n                var _key = _step4.value;\n\n                var _propName = 'mix-' + _key;\n\n                if (_propName in cleanProps) {\n                    delete cleanProps[_propName];\n                }\n            }\n        } catch (err) {\n            _didIteratorError4 = true;\n            _iteratorError4 = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion4 && _iterator4.return) {\n                    _iterator4.return();\n                }\n            } finally {\n                if (_didIteratorError4) {\n                    throw _iteratorError4;\n                }\n            }\n        }\n\n        if (cleanProps.className) {\n            delete cleanProps.className;\n        }\n\n        if (cleanProps.css) {\n            delete cleanProps.css;\n        }\n\n        if (tagPropName in this.props) {\n            delete cleanProps[tagPropName];\n        }\n\n        if (this.props.domRef) {\n            delete cleanProps.domRef;\n            cleanProps.ref = this.props.domRef;\n        }\n\n        return cleanProps;\n    };\n\n    target.prototype.getTagName = function getTagName() {\n        return this.props[tagPropName] || target.blockTag;\n    };\n\n    target.prototype.getProps = function getProps() {\n        return Object.assign(this.getCleanProps(), {\n            className: this.getClassName()\n        });\n    };\n\n    return target;\n}\n\n//# sourceURL=webpack://EvoKit/./src/component.js?");

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Example = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Example = exports.Example = function (_React$Component) {\n    _inherits(Example, _React$Component);\n\n    function Example(props) {\n        _classCallCheck(this, Example);\n\n        var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));\n\n        _this.state = {\n            listValues: props.values,\n            setValue: null\n        };\n        return _this;\n    }\n\n    _createClass(Example, [{\n        key: 'renderTab',\n        value: function renderTab(_ref) {\n            var value = _ref.value,\n                selected = _ref.selected,\n                onClick = _ref.onClick;\n\n            return _react2.default.createElement(\n                'button',\n                {\n                    disabled: selected,\n                    onClick: onClick,\n                    style: {\n                        borderRadius: '4px 4px 0 0',\n                        marginRight: 5,\n                        background: selected ? '#fff' : '#f8f8f8',\n                        border: '1px solid #eaeefb',\n                        borderBottom: selected ? '1px solid #fff' : '1px solid #eaeefb',\n                        cursor: selected ? 'default' : 'pointer',\n                        padding: '10px 15px',\n                        color: '#333'\n                    }\n                },\n                value\n            );\n        }\n    }, {\n        key: 'renderTabs',\n        value: function renderTabs() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { style: { boxShadow: '0 -1px 0 #eaeefb inset', marginBottom: 20 } },\n                this.renderTab({\n                    value: 'reset',\n                    selected: this.state.setValue === null,\n                    onClick: function onClick() {\n                        return _this2.setState({ setValue: null });\n                    }\n                }),\n                this.state.listValues.map(function (value) {\n                    return _this2.renderTab({\n                        value: value,\n                        selected: _this2.state.setValue === value,\n                        onClick: function onClick() {\n                            return _this2.setState({ setValue: value });\n                        }\n                    });\n                })\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                this.renderTabs(),\n                this.props.children(this.state.setValue)\n            );\n        }\n    }]);\n\n    return Example;\n}(_react2.default.Component);\n\nExample.Box = function (props) {\n    var styles = Object.assign({\n        background: '#41b885',\n        border: '1px #fff solid',\n        padding: '5px 10px',\n        color: '#fff'\n    }, props.style);\n\n    return _react2.default.createElement(\n        'div',\n        { style: styles },\n        props.children\n    );\n};\n\n//# sourceURL=webpack://EvoKit/./src/example.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.CSSModules = exports.Mix = exports.Image = exports.Line = exports.Text = exports.Picture = exports.Link = exports.List = exports.Grid = exports.Box = exports.Body = exports.Example = exports.createBlock = undefined;\n\nvar _component = __webpack_require__(/*! ./component */ \"./src/component.js\");\n\nvar _example = __webpack_require__(/*! ./example */ \"./src/example.js\");\n\nvar _Body = __webpack_require__(/*! ./blocks/Body */ \"./src/blocks/Body/index.js\");\n\nvar _Body2 = _interopRequireDefault(_Body);\n\nvar _Box = __webpack_require__(/*! ./blocks/Box */ \"./src/blocks/Box/index.js\");\n\nvar _Box2 = _interopRequireDefault(_Box);\n\nvar _Grid = __webpack_require__(/*! ./blocks/Grid */ \"./src/blocks/Grid/index.js\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _List = __webpack_require__(/*! ./blocks/List */ \"./src/blocks/List/index.js\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Link = __webpack_require__(/*! ./blocks/Link */ \"./src/blocks/Link/index.js\");\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nvar _Picture = __webpack_require__(/*! ./blocks/Picture */ \"./src/blocks/Picture/index.js\");\n\nvar _Picture2 = _interopRequireDefault(_Picture);\n\nvar _Text = __webpack_require__(/*! ./blocks/Text */ \"./src/blocks/Text/index.js\");\n\nvar _Text2 = _interopRequireDefault(_Text);\n\nvar _Line = __webpack_require__(/*! ./blocks/Line */ \"./src/blocks/Line/index.js\");\n\nvar _Line2 = _interopRequireDefault(_Line);\n\nvar _Image = __webpack_require__(/*! ./blocks/Image */ \"./src/blocks/Image/index.js\");\n\nvar _Image2 = _interopRequireDefault(_Image);\n\nvar _Mix = __webpack_require__(/*! ./blocks/Mix */ \"./src/blocks/Mix/index.js\");\n\nvar _Mix2 = _interopRequireDefault(_Mix);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CSSModules = function CSSModules(block, css) {\n    return block.css = css;\n};\n\nexports.createBlock = _component.createBlock;\nexports.Example = _example.Example;\nexports.Body = _Body2.default;\nexports.Box = _Box2.default;\nexports.Grid = _Grid2.default;\nexports.List = _List2.default;\nexports.Link = _Link2.default;\nexports.Picture = _Picture2.default;\nexports.Text = _Text2.default;\nexports.Line = _Line2.default;\nexports.Image = _Image2.default;\nexports.Mix = _Mix2.default;\nexports.CSSModules = CSSModules;\n\n//# sourceURL=webpack://EvoKit/./src/index.js?");

/***/ }),

/***/ "classnames":
/*!**********************************************************************************************************!*\
  !*** external {"root":"classNames","commonjs":"classnames","commonjs2":"classnames","amd":"classnames"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_classnames__;\n\n//# sourceURL=webpack://EvoKit/external_%7B%22root%22:%22classNames%22,%22commonjs%22:%22classnames%22,%22commonjs2%22:%22classnames%22,%22amd%22:%22classnames%22%7D?");

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://EvoKit/external_%7B%22root%22:%22PropTypes%22,%22commonjs%22:%22prop-types%22,%22commonjs2%22:%22prop-types%22,%22amd%22:%22prop-types%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://EvoKit/external_%7B%22root%22:%22React%22,%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ });
});

"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/images/logo.png */ "./src/asset/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/images/coffee.jpg */ "./src/asset/images/coffee.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0 0 10px 0;\n  padding: 0;\n  border-color: yellow;\n}\n\n* {\n  /* color: #191819; */\n  font-weight: 400;\n  font-size: 18px;\n}\n\nnav {\n  font-size: 20px;\n  font-weight: bold;\n  position: fixed;\n  top: 0;\n  padding: 5px 0;\n  width: 100%;\n}\n\n#head {\n  display: flex;\n  flex-direction: row;\n  width: 85%;\n  margin: auto;\n  justify-content: space-between;\n}\n\n#logo {\n  width: 120px;\n  font-size: 25px;\n  height: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\n.nav-btn {\n  font-size: 30px;\n}\n\n.nav-btn:hover {\n  color: #2acc32;\n}\n\n#nav-list {\n  float: right;\n  padding: 0 40px 0;\n  margin: 0;\n  list-style: none;\n  text-align: right;\n  display: none;\n}\n\nli:hover {\n  color: #4cc552;\n}\n\nli:active {\n  color: #2acc32;\n  font-weight: 500;\n}\n\nli:visited {\n  color: teal;\n}\n\n#nav-list li {\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n#contact {\n  border: 2px solid #2acc32;\n  border-radius: 50px;\n  padding: 7px;\n  width: 130px;\n  font-size: 16px;\n  text-align: center;\n  font-weight: bold;\n  margin-left: 20px;\n}\n\n#contact:hover {\n  color: red;\n}\n\nmain {\n  margin-top: 45px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nmain > * {\n  width: 80%;\n}\n\n.sect-heading {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 48px;\n  text-align: center;\n}\n\n#catch-sec {\n  width: 291px;\n}\n\n#catch-sec p {\n  text-align: center;\n}\n\n#catch-sec br {\n  display: none;\n}\n\n#home-img-cont {\n  height: 343px;\n  background-position-x: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@media (min-width: 768px) {\n  header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  nav {\n    padding: 5px 10px;\n    display: flex;\n    width: 90%;\n  }\n\n  #logo {\n    display: inline;\n    margin: 0;\n  }\n\n  .nav-btn {\n    display: none;\n  }\n\n  #nav-list {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n    font-size: 13px;\n  }\n\n  #nav-list li {\n    padding-right: 10px;\n  }\n\n  #catch-sec {\n    width: 80%;\n    position: absolute;\n    color: white;\n  }\n\n  .sect-heading {\n    font-size: 90px;\n    line-height: 96px;\n  }\n\n  #catch-sec p {\n    font-size: 26px;\n  }\n\n  #catch-sec p br {\n    display: block;\n  }\n\n  #home-img-cont {\n    margin-top: 30px;\n    height: 500px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,qCAAqC;EACrC,kBAAkB;EAClB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,MAAM;EACN,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,yDAA8C;EAC9C,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,SAAS;EACT,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,sBAAsB;EACtB,4BAA4B;EAC5B,yDAAgD;AAClD;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,UAAU;IACV,kBAAkB;IAClB,YAAY;EACd;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,aAAa;EACf;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0 0 10px 0;\n  padding: 0;\n  border-color: yellow;\n}\n\n* {\n  /* color: #191819; */\n  font-weight: 400;\n  font-size: 18px;\n}\n\nnav {\n  font-size: 20px;\n  font-weight: bold;\n  position: fixed;\n  top: 0;\n  padding: 5px 0;\n  width: 100%;\n}\n\n#head {\n  display: flex;\n  flex-direction: row;\n  width: 85%;\n  margin: auto;\n  justify-content: space-between;\n}\n\n#logo {\n  width: 120px;\n  font-size: 25px;\n  height: 50px;\n  background-image: url(./asset/images/logo.png);\n  background-repeat: no-repeat;\n}\n\n.nav-btn {\n  font-size: 30px;\n}\n\n.nav-btn:hover {\n  color: #2acc32;\n}\n\n#nav-list {\n  float: right;\n  padding: 0 40px 0;\n  margin: 0;\n  list-style: none;\n  text-align: right;\n  display: none;\n}\n\nli:hover {\n  color: #4cc552;\n}\n\nli:active {\n  color: #2acc32;\n  font-weight: 500;\n}\n\nli:visited {\n  color: teal;\n}\n\n#nav-list li {\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n#contact {\n  border: 2px solid #2acc32;\n  border-radius: 50px;\n  padding: 7px;\n  width: 130px;\n  font-size: 16px;\n  text-align: center;\n  font-weight: bold;\n  margin-left: 20px;\n}\n\n#contact:hover {\n  color: red;\n}\n\nmain {\n  margin-top: 45px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nmain > * {\n  width: 80%;\n}\n\n.sect-heading {\n  font-size: 30px;\n  font-weight: 800;\n  line-height: 48px;\n  text-align: center;\n}\n\n#catch-sec {\n  width: 291px;\n}\n\n#catch-sec p {\n  text-align: center;\n}\n\n#catch-sec br {\n  display: none;\n}\n\n#home-img-cont {\n  height: 343px;\n  background-position-x: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(./asset/images/coffee.jpg);\n}\n\n@media (min-width: 768px) {\n  header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  nav {\n    padding: 5px 10px;\n    display: flex;\n    width: 90%;\n  }\n\n  #logo {\n    display: inline;\n    margin: 0;\n  }\n\n  .nav-btn {\n    display: none;\n  }\n\n  #nav-list {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n    font-size: 13px;\n  }\n\n  #nav-list li {\n    padding-right: 10px;\n  }\n\n  #catch-sec {\n    width: 80%;\n    position: absolute;\n    color: white;\n  }\n\n  .sect-heading {\n    font-size: 90px;\n    line-height: 96px;\n  }\n\n  #catch-sec p {\n    font-size: 26px;\n  }\n\n  #catch-sec p br {\n    display: block;\n  }\n\n  #home-img-cont {\n    margin-top: 30px;\n    height: 500px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hamburger": () => (/* binding */ hamburger)
/* harmony export */ });
const hamburger = document.getElementById('ham');



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// eslint-disable-next-line import/no-extraneous-dependencies
// import _ from 'lodash';



// const hamburger = document.querySelector('close-btn');

_domElements__WEBPACK_IMPORTED_MODULE_0__.hamburger.addEventListener('click', console.log('yooo'));

function component() {
  console.log('dddd');
}

component();

/***/ }),

/***/ "./src/asset/images/coffee.jpg":
/*!*************************************!*\
  !*** ./src/asset/images/coffee.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83faf6fafca7b3bed581.jpg";

/***/ }),

/***/ "./src/asset/images/logo.png":
/*!***********************************!*\
  !*** ./src/asset/images/logo.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEM7QUFDckI7O0FBRXJCOztBQUVBLG9FQUEwQjs7QUFFMUI7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L2ltYWdlcy9jb2ZmZWUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlci1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4qIHtcXG4gIC8qIGNvbG9yOiAjMTkxODE5OyAqL1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxubmF2IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2hlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogODUlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbG9nbyB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubmF2LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzJhY2MzMjtcXG59XFxuXFxuI25hdi1saXN0IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmc6IDAgNDBweCAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubGk6aG92ZXIge1xcbiAgY29sb3I6ICM0Y2M1NTI7XFxufVxcblxcbmxpOmFjdGl2ZSB7XFxuICBjb2xvcjogIzJhY2MzMjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmxpOnZpc2l0ZWQge1xcbiAgY29sb3I6IHRlYWw7XFxufVxcblxcbiNuYXYtbGlzdCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGFjdCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMmFjYzMyO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNjb250YWN0OmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luLXRvcDogNDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubWFpbiA+ICoge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnNlY3QtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXRjaC1zZWMge1xcbiAgd2lkdGg6IDI5MXB4O1xcbn1cXG5cXG4jY2F0Y2gtc2VjIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY2F0Y2gtc2VjIGJyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNob21lLWltZy1jb250IHtcXG4gIGhlaWdodDogMzQzcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuXFxuICAjbG9nbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLm5hdi1idG4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI25hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICB9XFxuXFxuICAjbmF2LWxpc3QgbGkge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgfVxcblxcbiAgI2NhdGNoLXNlYyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLnNlY3QtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDk2cHg7XFxuICB9XFxuXFxuICAjY2F0Y2gtc2VjIHAge1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICB9XFxuXFxuICAjY2F0Y2gtc2VjIHAgYnIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gICNob21lLWltZy1jb250IHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLE1BQU07RUFDTixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlEQUE4QztFQUM5Qyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIseURBQWdEO0FBQ2xEOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbioge1xcbiAgLyogY29sb3I6ICMxOTE4MTk7ICovXFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5uYXYge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHdpZHRoOiA4NSU7XFxuICBtYXJnaW46IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNsb2dvIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0L2ltYWdlcy9sb2dvLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5uYXYtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMmFjYzMyO1xcbn1cXG5cXG4jbmF2LWxpc3Qge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcGFkZGluZzogMCA0MHB4IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5saTpob3ZlciB7XFxuICBjb2xvcjogIzRjYzU1MjtcXG59XFxuXFxubGk6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMmFjYzMyO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxubGk6dmlzaXRlZCB7XFxuICBjb2xvcjogdGVhbDtcXG59XFxuXFxuI25hdi1saXN0IGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250YWN0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyYWNjMzI7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgd2lkdGg6IDEzMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuI2NvbnRhY3Q6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxubWFpbiB7XFxuICBtYXJnaW4tdG9wOiA0NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWluID4gKiB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uc2VjdC1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsaW5lLWhlaWdodDogNDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NhdGNoLXNlYyB7XFxuICB3aWR0aDogMjkxcHg7XFxufVxcblxcbiNjYXRjaC1zZWMgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjYXRjaC1zZWMgYnIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2hvbWUtaW1nLWNvbnQge1xcbiAgaGVpZ2h0OiAzNDNweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldC9pbWFnZXMvY29mZmVlLmpwZyk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgI2xvZ28ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5uYXYtYnRuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNuYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgfVxcblxcbiAgI25hdi1saXN0IGxpIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIH1cXG5cXG4gICNjYXRjaC1zZWMge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5zZWN0LWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDkwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA5NnB4O1xcbiAgfVxcblxcbiAgI2NhdGNoLXNlYyBwIHtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgfVxcblxcbiAgI2NhdGNoLXNlYyBwIGJyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAjaG9tZS1pbWctY29udCB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbScpO1xuXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG4vLyBpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaGFtYnVyZ2VyIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2xvc2UtYnRuJyk7XG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnNvbGUubG9nKCd5b29vJykpO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnNvbGUubG9nKCdkZGRkJyk7XG59XG5cbmNvbXBvbmVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
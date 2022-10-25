(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([[856],{

/***/ 9014:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(2747);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(1250);
;// CONCATENATED MODULE: ./src/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var src = ({});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ../micromodule/packages/core/lib/polyfill/jsx.js
var jsx = __webpack_require__(4755);
var jsx_default = /*#__PURE__*/__webpack_require__.n(jsx);
;// CONCATENATED MODULE: ./src/logo.svg
var _g;

var _excluded = (/* unused pure expression or super */ null && (["title", "titleId"]));

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgLogo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 841.9 595.3",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/React.createElement("g", {
    fill: "#61DAFB"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 420.9,
    cy: 296.5,
    r: 45.7
  }), /*#__PURE__*/React.createElement("path", {
    d: "M520.5 78.1z"
  }))));
}

var ForwardRef = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(SvgLogo)));
/* harmony default export */ var logo = (__webpack_require__.p + "static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg");

// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 95 modules
var modal = __webpack_require__(3033);
// EXTERNAL MODULE: consume shared module (default) react-dom@=18.2.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(56);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(6072);
// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(7222);
;// CONCATENATED MODULE: ./src/App.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var App = ({});
;// CONCATENATED MODULE: ./src/App.js
/** @jsxRuntime classic */ /** @jsx jsxPolyFill *//* eslint-disable */// import FederationReact  from '@micromodule/module-federation-react';
// var t = parse(code)
// console.log(t, '234')
// import EntryApp from 'app2/HoleApp'
// var HoleApp = Loadable({
//   loader: () => {startApp({name: 'ttt', module: 'app2/HoleApp'})},
//   loading: function loading() {
//     return <div>loading...</div>
//   }
// });
// console.log(startApp({name: 'ttt', module: 'app2/HoleApp'}), '234');
// import RichText from 'app2/RichText';
window.rawWindow?window.rawWindow.wm1=__webpack_require__.m:window.wm1=__webpack_require__.m;var T=/*#__PURE__*/index_js_default().createElement('zmf-app',{},'234');function App_App(){var ref=(0,index_js_.useRef)(null);var _useState=(0,index_js_.useState)(false),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),isModalVisible=_useState2[0],setIsModalVisible=_useState2[1];var _useState3=(0,index_js_.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),isModalVisible2=_useState4[0],setIsModalVisible2=_useState4[1];var clickHandle=function clickHandle(){setIsModalVisible(!isModalVisible);};var clickHandle2=function clickHandle2(){setIsModalVisible2(!isModalVisible2);};function click(){alert('我是消费者绑定的 click event');}var _useState5=(0,index_js_.useState)(false),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),isRichtextShow=_useState6[0],setRichtextShow=_useState6[1];function test(){setRichtextShow(!isRichtextShow);}return jsx_default()("div",{className:"App"},jsx_default()("div",{className:"mainapp"},"main app"),jsx_default()(es_button/* default */.Z,{type:"primary",onClick:clickHandle},"\u70B9\u51FB\u6211\u52A0\u8F7D\u8FDC\u7A0B \u5BCC\u6587\u672C")," - ",jsx_default()(es_button/* default */.Z,{type:"primary",onClick:clickHandle2},"\u70B9\u51FB\u6211\u52A0\u8F7D\u8FDC\u7A0B\u64AD\u653E\u5668"),jsx_default()(modal/* default */.Z,{title:"\u8FDC\u7A0B\u5BCC\u6587\u672C",width:800,visible:isModalVisible,onOk:clickHandle,onCancel:clickHandle},jsx_default()("zmf-app",{name:"ttt",module:"app2/RichText"})),jsx_default()(modal/* default */.Z,{title:"\u8FDC\u7A0B\u64AD\u653E\u5668",width:800,visible:isModalVisible2,onOk:clickHandle2,onCancel:clickHandle2},jsx_default()("zmf-app",{name:"ttt",module:"app2/Player"})),jsx_default()("div",{className:"demo"},jsx_default()("div",{className:"demo__item"},jsx_default()("zmf-app",{name:"xxx",module:"app3/main"})),jsx_default()("div",{className:"demo__item"},jsx_default()("zmf-app",{name:"ttt",module:"app2/HoleApp"}))));}/* harmony default export */ var src_App = (App_App);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals=function reportWebVitals(onPerfEntry){if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/* import() */ 787).then(__webpack_require__.bind(__webpack_require__, 787)).then(function(_ref){var getCLS=_ref.getCLS,getFID=_ref.getFID,getFCP=_ref.getFCP,getLCP=_ref.getLCP,getTTFB=_ref.getTTFB;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/bootstrap.js
var root=client.createRoot(document.getElementById('root'));root.render(/*#__PURE__*/(0,jsx_runtime.jsx)((index_js_default()).StrictMode,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(src_App,{})}));// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
src_reportWebVitals();var __win__=window.__isZMF__?window.rawWindow:window;__win__.__ZMF__=__win__.__ZMF__||{};__win__.__ZMF__['app2']='https://taotao9125.github.io/app2';__win__.__ZMF__['app3']='http://localhost:3003';

/***/ }),

/***/ 4755:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _objectSpread = (__webpack_require__(2122)["default"]);

var React = __webpack_require__(7082);

var eventProps = ['beforeMount', 'onMount', 'onUnmount', 'onError'];

module.exports = function jsx(type, props) {
  var win = window.__isZMF__ ? window.rawWindow : window;
  var appTagName = 'zmf-app';

  var newProps = _objectSpread({}, props);

  if (type === appTagName && win.customElements.get(appTagName)) {
    newProps.ref = function refCallback(el) {
      // el is web component instance
      if (el) {
        var eventsName = Object.keys(newProps).filter(function (propKey) {
          return eventProps.includes(propKey) && typeof newProps[propKey] === 'function';
        });
        eventsName.forEach(function (eventName) {
          var eventNameId = "".concat(newProps.name, "_").concat(newProps.module, ":").concat(eventName);
          el.addEventListener(eventNameId, newProps[eventName], false);
        });
      }
    };
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return React.createElement.apply(null, [type, newProps].concat(children));
};

/***/ })

}]);
//# sourceMappingURL=856.e0b21d52.chunk.js.map
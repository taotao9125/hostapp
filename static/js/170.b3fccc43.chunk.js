(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([[170],{

/***/ 6327:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R_": function() { return /* binding */ generate; }
/* harmony export */ });
/* unused harmony exports blue, cyan, geekblue, gold, green, grey, lime, magenta, orange, presetDarkPalettes, presetPalettes, presetPrimaryColors, purple, red, volcano, yellow */
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3669);
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7763);

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = (0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHsv */ .py)(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__/* .rgbToHex */ .vq)(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = (0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)(opts.backgroundColor || '#141414'), (0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_1__/* .inputToRGB */ .uA)(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;


/***/ }),

/***/ 4291:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ AntdIcon; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
// EXTERNAL MODULE: consume shared module (default) react@>=16.0.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(8887);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1694);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(808);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@ant-design/colors/dist/index.esm.js
var index_esm = __webpack_require__(6327);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(632);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(5561);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/utils.js







function utils_warning(valid, message) {
  (0,warning/* default */.ZP)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return (0,esm_typeof/* default */.Z)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0,esm_typeof/* default */.Z)(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/index_js_default().createElement(node.tag, (0,objectSpread2/* default */.Z)({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/index_js_default().createElement(node.tag, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return (0,index_esm/* generate */.R_)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = (0,index_js_.useContext)(Context/* default */.Z),
      csp = _useContext.csp;

  (0,index_js_.useEffect)(function () {
    (0,dynamicCSS/* updateCSS */.hq)(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/IconBase.js


var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return (0,objectSpread2/* default */.Z)({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), (0,objectSpread2/* default */.Z)({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
/* harmony default export */ var components_IconBase = (IconBase);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js



function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = (0,slicedToArray/* default */.Z)(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return components_IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = components_IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js




var AntdIcon_excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];





 // Initial setting
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/index_js_.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, AntdIcon_excluded);

  var _React$useContext = index_js_.useContext(Context/* default */.Z),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = (0,slicedToArray/* default */.Z)(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/index_js_.createElement("span", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/index_js_.createElement(components_IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ var AntdIcon = (Icon);

/***/ }),

/***/ 808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8887);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var IconContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ __webpack_exports__["Z"] = (IconContext);

/***/ }),

/***/ 7106:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ icons_LoadingOutlined; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: consume shared module (default) react@>=16.0.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(8887);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
// This icon file is generated automatically.
var LoadingOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "0 0 1024 1024",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
      }
    }]
  },
  "name": "loading",
  "theme": "outlined"
};
/* harmony default export */ var asn_LoadingOutlined = (LoadingOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(4291);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var LoadingOutlined_LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LoadingOutlined
  }));
};

LoadingOutlined_LoadingOutlined.displayName = 'LoadingOutlined';
/* harmony default export */ var icons_LoadingOutlined = (/*#__PURE__*/index_js_.forwardRef(LoadingOutlined_LoadingOutlined));

/***/ }),

/***/ 3669:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T6": function() { return /* binding */ convertHexToDecimal; },
/* harmony export */   "VD": function() { return /* binding */ parseIntFromHex; },
/* harmony export */   "WE": function() { return /* binding */ hsvToRgb; },
/* harmony export */   "Yt": function() { return /* binding */ numberInputToObject; },
/* harmony export */   "lC": function() { return /* binding */ rgbToHsl; },
/* harmony export */   "py": function() { return /* binding */ rgbToHsv; },
/* harmony export */   "rW": function() { return /* binding */ rgbToRgb; },
/* harmony export */   "s": function() { return /* binding */ rgbaToHex; },
/* harmony export */   "ve": function() { return /* binding */ hslToRgb; },
/* harmony export */   "vq": function() { return /* binding */ rgbToHex; }
/* harmony export */ });
/* unused harmony exports rgbaToArgbHex, convertDecimalToHex */
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9521);
 // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */

function rgbToRgb(r, g, b) {
  return {
    r: (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(r, 255) * 255,
    g: (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(g, 255) * 255,
    b: (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(b, 255) * 255
  };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */

function rgbToHsl(r, g, b) {
  r = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(r, 255);
  g = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(g, 255);
  b = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var l = (max + min) / 2;

  if (max === min) {
    s = 0;
    h = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;

      default:
        break;
    }

    h /= 6;
  }

  return {
    h: h,
    s: s,
    l: l
  };
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }

  if (t > 1) {
    t -= 1;
  }

  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }

  if (t < 1 / 2) {
    return q;
  }

  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }

  return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */


function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(h, 360);
  s = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(s, 100);
  l = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(l, 100);

  if (s === 0) {
    // achromatic
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */

function rgbToHsv(r, g, b) {
  r = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(r, 255);
  g = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(g, 255);
  b = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;

      default:
        break;
    }

    h /= 6;
  }

  return {
    h: h,
    s: s,
    v: v
  };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */

function hsvToRgb(h, s, v) {
  h = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(h, 360) * 6;
  s = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(s, 100);
  v = (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .bound01 */ .sh)(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */

function rgbToHex(r, g, b, allow3Char) {
  var hex = [(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(r).toString(16)), (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(g).toString(16)), (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(b).toString(16))]; // Return a 3 character hex if possible

  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }

  return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params

function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [(0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(r).toString(16)), (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(g).toString(16)), (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(Math.round(b).toString(16)), (0,_util__WEBPACK_IMPORTED_MODULE_0__/* .pad2 */ .FZ)(convertDecimalToHex(a))]; // Return a 4 character hex if possible

  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }

  return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */

function rgbaToArgbHex(r, g, b, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join('');
}
/** Converts a decimal to a hex value */

function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */

function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */

function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 0xff00) >> 8,
    b: color & 0xff
  };
}

/***/ }),

/***/ 7586:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": function() { return /* binding */ names; }
/* harmony export */ });
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json

/**
 * @hidden
 */
var names = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

/***/ }),

/***/ 7763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uA": function() { return /* binding */ inputToRGB; }
/* harmony export */ });
/* unused harmony exports stringInputToObject, isValidCSSUnit */
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3669);
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7586);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9521);



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */

function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;

  if (typeof color === 'string') {
    color = stringInputToObject(color);
  }

  if (typeof color === 'object') {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .rgbToRgb */ .rW)(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .convertToPercentage */ .JX)(color.s);
      v = (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .convertToPercentage */ .JX)(color.v);
      rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .hsvToRgb */ .WE)(color.h, s, v);
      ok = true;
      format = 'hsv';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .convertToPercentage */ .JX)(color.s);
      l = (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .convertToPercentage */ .JX)(color.l);
      rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .hslToRgb */ .ve)(color.h, s, l);
      ok = true;
      format = 'hsl';
    }

    if (Object.prototype.hasOwnProperty.call(color, 'a')) {
      a = color.a;
    }
  }

  a = (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .boundAlpha */ .Yq)(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a
  };
} // <http://www.w3.org/TR/css3-values/#integers>

var CSS_INTEGER = '[-\\+]?\\d+%?'; // <http://www.w3.org/TR/css3-values/#number-value>

var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")"); // Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren

var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
  rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
  hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
  hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
  hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
  hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */

function stringInputToObject(color) {
  color = color.trim().toLowerCase();

  if (color.length === 0) {
    return false;
  }

  var named = false;

  if (_css_color_names__WEBPACK_IMPORTED_MODULE_2__/* .names */ .R[color]) {
    color = _css_color_names__WEBPACK_IMPORTED_MODULE_2__/* .names */ .R[color];
    named = true;
  } else if (color === 'transparent') {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: 'name'
    };
  } // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.


  var match = matchers.rgb.exec(color);

  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }

  match = matchers.rgba.exec(color);

  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }

  match = matchers.hsl.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }

  match = matchers.hsla.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }

  match = matchers.hsv.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }

  match = matchers.hsva.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }

  match = matchers.hex8.exec(color);

  if (match) {
    return {
      r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[1]),
      g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[2]),
      b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[3]),
      a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .convertHexToDecimal */ .T6)(match[4]),
      format: named ? 'name' : 'hex8'
    };
  }

  match = matchers.hex6.exec(color);

  if (match) {
    return {
      r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[1]),
      g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[2]),
      b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[3]),
      format: named ? 'name' : 'hex'
    };
  }

  match = matchers.hex4.exec(color);

  if (match) {
    return {
      r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[1] + match[1]),
      g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[2] + match[2]),
      b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[3] + match[3]),
      a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .convertHexToDecimal */ .T6)(match[4] + match[4]),
      format: named ? 'name' : 'hex8'
    };
  }

  match = matchers.hex3.exec(color);

  if (match) {
    return {
      r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[1] + match[1]),
      g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[2] + match[2]),
      b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__/* .parseIntFromHex */ .VD)(match[3] + match[3]),
      format: named ? 'name' : 'hex'
    };
  }

  return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */

function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

/***/ }),

/***/ 9521:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FZ": function() { return /* binding */ pad2; },
/* harmony export */   "JX": function() { return /* binding */ convertToPercentage; },
/* harmony export */   "V2": function() { return /* binding */ clamp01; },
/* harmony export */   "Yq": function() { return /* binding */ boundAlpha; },
/* harmony export */   "sh": function() { return /* binding */ bound01; }
/* harmony export */ });
/* unused harmony exports isOnePointZero, isPercentage */
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = '100%';
  }

  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n))); // Automatically convert percentage into number

  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  } // Handle floating point rounding errors


  if (Math.abs(n - max) < 0.000001) {
    return 1;
  } // Convert into [0, 1] range if it isn't already


  if (max === 360) {
    // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = n % max / parseFloat(String(max));
  }

  return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */

function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */

function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */

function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */

function boundAlpha(a) {
  a = parseFloat(a);

  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }

  return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */

function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }

  return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */

function pad2(c) {
  return c.length === 1 ? '0' + c : String(c);
}

/***/ }),

/***/ 9393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": function() { return /* binding */ tuple; }
/* harmony export */ });
/* unused harmony export tupleNum */
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

/***/ }),

/***/ 3895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": function() { return /* binding */ convertLegacyProps; },
  "Z": function() { return /* binding */ button_button; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1694);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/omit.js

function omit(obj, fields) {
  var clone = (0,objectSpread2/* default */.Z)({}, obj);

  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }

  return clone;
}
// EXTERNAL MODULE: consume shared module (default) react@>=16.9.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(8056);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1929);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(9125);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(1815);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/reactNode.js

var isValidElement = index_js_.isValidElement;

function isFragment(child) {
  return child && child.type === React.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }

  return /*#__PURE__*/index_js_.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(9393);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(7277);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(5561);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(8834);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5314);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/raf.js

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0,raf/* default */.Z)(internalCallback);
    }
  }

  ids[myId] = (0,raf/* default */.Z)(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;
  raf/* default.cancel */.Z.cancel(ids[pid]);
  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave.js













var styleForPseudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (false) {}

  return !element || element.offsetParent === null || element.hidden;
}

function getValidateContainer(nodeRoot) {
  if (nodeRoot instanceof Document) {
    return nodeRoot.body;
  }

  return Array.from(nodeRoot.childNodes).find(function (ele) {
    return (ele === null || ele === void 0 ? void 0 : ele.nodeType) === Node.ELEMENT_NODE;
  });
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var InternalWave = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(InternalWave, _React$Component);

  var _super = (0,createSuper/* default */.Z)(InternalWave);

  function InternalWave() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, InternalWave);

    _this = _super.apply(this, arguments);
    _this.containerRef = /*#__PURE__*/index_js_.createRef();
    _this.animationStart = false;
    _this.destroyed = false;

    _this.onClick = function (node, waveColor) {
      var _a, _b;

      var _this$props = _this.props,
          insertExtraNode = _this$props.insertExtraNode,
          disabled = _this$props.disabled;

      if (disabled || !node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          extraNode = _assertThisInitialize.extraNode;

      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparent or grey

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        extraNode.style.borderColor = waveColor;
        var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
        var nodeBody = (_b = getValidateContainer(nodeRoot)) !== null && _b !== void 0 ? _b : nodeRoot;
        styleForPseudo = (0,dynamicCSS/* updateCSS */.hq)("\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), 'antd-wave', {
          csp: _this.csp,
          attachTo: nodeBody
        });
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
        node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
      });
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }

      var node = _this.containerRef.current;

      if (!e || e.target !== node || _this.animationStart) {
        return;
      }

      _this.resetEffect(node);
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(_this.animationStartId);
        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = wrapperRaf(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (! /*#__PURE__*/index_js_.isValidElement(children)) return children;
      var ref = _this.containerRef;

      if ((0,es_ref/* supportRef */.Yr)(children)) {
        ref = (0,es_ref/* composeRef */.sQ)(children.ref, _this.containerRef);
      }

      return cloneElement(children, {
        ref: ref
      });
    };

    return _this;
  }

  (0,createClass/* default */.Z)(InternalWave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      var node = this.containerRef.current;

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      var _this2 = this;

      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      if (styleForPseudo) {
        styleForPseudo.innerHTML = '';
      }

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
        node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/index_js_.createElement(context/* ConfigConsumer */.C, null, this.renderWave);
    }
  }]);

  return InternalWave;
}(index_js_.Component);

InternalWave.contextType = context/* ConfigContext */.E_;
var Wave = /*#__PURE__*/(0,index_js_.forwardRef)(function (props, ref) {
  return /*#__PURE__*/index_js_.createElement(InternalWave, (0,esm_extends/* default */.Z)({
    ref: ref
  }, props));
});
/* harmony default export */ var wave = (Wave);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button-group.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var GroupSizeContext = /*#__PURE__*/index_js_.createContext(undefined);

var ButtonGroup = function ButtonGroup(props) {
  var _classNames;

  var _React$useContext = index_js_.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      size = props.size,
      className = props.className,
      others = __rest(props, ["prefixCls", "size", "className"]);

  var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
  // small => sm

  var sizeCls = '';

  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;

    case 'middle':
    case undefined:
      break;

    default:
       false ? 0 : void 0;
  }

  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/index_js_.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/index_js_.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
    className: classes
  })));
};

/* harmony default export */ var button_group = (ButtonGroup);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7106);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(8689);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/LoadingIcon.js




var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};

var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};

var LoadingIcon = function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
      loading = _ref.loading,
      existIcon = _ref.existIcon;
  var visible = !!loading;

  if (existIcon) {
    return /*#__PURE__*/index_js_default().createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/index_js_default().createElement(LoadingOutlined/* default */.Z, null));
  }

  return /*#__PURE__*/index_js_default().createElement(es/* default */.Z, {
    visible: visible,
    // We do not really use this motionName
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
        style = _ref2.style;
    return /*#__PURE__*/index_js_default().createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/index_js_default().createElement(LoadingOutlined/* default */.Z, {
      className: className
    }));
  });
};

/* harmony default export */ var button_LoadingIcon = (LoadingIcon);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button.js





var button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */














var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function isUnBorderedButtonType(type) {
  return type === 'text' || type === 'link';
}

function isReactFragment(node) {
  return /*#__PURE__*/index_js_.isValidElement(node) && node.type === index_js_.Fragment;
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child === null || child === undefined) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }

  if (typeof child === 'string') {
    return isTwoCNChar(child) ? /*#__PURE__*/index_js_.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/index_js_.createElement("span", null, child);
  }

  if (isReactFragment(child)) {
    return /*#__PURE__*/index_js_.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  index_js_.Children.forEach(children, function (child) {
    var type = (0,esm_typeof/* default */.Z)(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return index_js_.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

var ButtonTypes = (0,type/* tuple */.b)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = (0,type/* tuple */.b)('default', 'circle', 'round');
var ButtonHTMLTypes = (0,type/* tuple */.b)('submit', 'button', 'reset');
function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }

  return {
    type: type
  };
}

var InternalButton = function InternalButton(props, ref) {
  var _classNames;

  var _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      customizePrefixCls = props.prefixCls,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      danger = props.danger,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'default' : _props$shape,
      customizeSize = props.size,
      customDisabled = props.disabled,
      className = props.className,
      children = props.children,
      icon = props.icon,
      _props$ghost = props.ghost,
      ghost = _props$ghost === void 0 ? false : _props$ghost,
      _props$block = props.block,
      block = _props$block === void 0 ? false : _props$block,
      _props$htmlType = props.htmlType,
      htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
      rest = button_rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]);

  var size = index_js_.useContext(SizeContext/* default */.Z); // ===================== Disabled =====================

  var disabled = index_js_.useContext(DisabledContext/* default */.Z);
  var mergedDisabled = customDisabled || disabled;
  var groupSize = index_js_.useContext(GroupSizeContext);

  var _React$useState = index_js_.useState(!!loading),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = index_js_.useState(false),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      hasTwoCNChar = _React$useState4[0],
      setHasTwoCNChar = _React$useState4[1];

  var _React$useContext = index_js_.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
      direction = _React$useContext.direction;

  var buttonRef = ref || /*#__PURE__*/index_js_.createRef();

  var isNeedInserted = function isNeedInserted() {
    return index_js_.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
  };

  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    var buttonText = buttonRef.current.textContent;

    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }; // =============== Update Loading ===============


  var loadingOrDelay = typeof loading === 'boolean' ? loading : (loading === null || loading === void 0 ? void 0 : loading.delay) || true;
  index_js_.useEffect(function () {
    var delayTimer = null;

    if (typeof loadingOrDelay === 'number') {
      delayTimer = window.setTimeout(function () {
        delayTimer = null;
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }

    return function () {
      if (delayTimer) {
        // in order to not perform a React state update on an unmounted component
        // and clear timer after 'loadingOrDelay' updated.
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    };
  }, [loadingOrDelay]);
  index_js_.useEffect(fixTwoCNChar, [buttonRef]);

  var handleClick = function handleClick(e) {
    var onClick = props.onClick; // https://github.com/ant-design/ant-design/issues/30207

    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }

    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };

   false ? 0 : void 0;
   false ? 0 : void 0;
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false;
  var sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined
  };
  var sizeFullname = groupSize || customizeSize || size;
  var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';
  var iconType = innerLoading ? 'loading' : icon;
  var linkButtonRestProps = omit(rest, ['navigate']);
  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(shape), shape !== 'default' && shape), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(type), type), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnBorderedButtonType(type)), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-loading"), innerLoading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace && !innerLoading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-block"), block), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), linkButtonRestProps.href !== undefined && mergedDisabled), _classNames), className);
  var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/index_js_.createElement(button_LoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;

  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/index_js_.createElement("a", (0,esm_extends/* default */.Z)({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  }

  var buttonNode = /*#__PURE__*/index_js_.createElement("button", (0,esm_extends/* default */.Z)({}, rest, {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), iconNode, kids);

  if (isUnBorderedButtonType(type)) {
    return buttonNode;
  }

  return /*#__PURE__*/index_js_.createElement(wave, {
    disabled: !!innerLoading
  }, buttonNode);
};

var Button = /*#__PURE__*/index_js_.forwardRef(InternalButton);

if (false) {}

Button.Group = button_group;
Button.__ANT_BUTTON = true;
/* harmony default export */ var button_button = (Button);

/***/ }),

/***/ 7309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3895);

/* harmony default export */ __webpack_exports__["Z"] = (_button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 9125:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": function() { return /* binding */ DisabledContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DisabledContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
var DisabledContextProvider = function DisabledContextProvider(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled;
  var originDisabled = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DisabledContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisabledContext.Provider, {
    value: disabled || originDisabled
  }, children);
};
/* harmony default export */ __webpack_exports__["Z"] = (DisabledContext);

/***/ }),

/***/ 1815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": function() { return /* binding */ SizeContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};
/* harmony default export */ __webpack_exports__["Z"] = (SizeContext);

/***/ }),

/***/ 1929:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ ConfigConsumer; },
/* harmony export */   "E_": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* unused harmony export withConfigConsumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? "ant-".concat(suffixCls) : 'ant';
}; // zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will case circular dependency.


var ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls
});
var ConfigConsumer = ConfigContext.Consumer;
/** @deprecated Use hooks instead. This is a legacy function */

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/React.createElement(Component, _extends({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';

    if (false) {}

    return SFC;
  };
}

/***/ }),

/***/ 3033:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ modal; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(907);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.Z)(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(181);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: consume shared module (default) react@>=16.0.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(8887);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CheckCircleOutlined.js
// This icon file is generated automatically.
var CheckCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "check-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_CheckCircleOutlined = (CheckCircleOutlined);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(4291);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var CheckCircleOutlined_CheckCircleOutlined = function CheckCircleOutlined(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CheckCircleOutlined
  }));
};

CheckCircleOutlined_CheckCircleOutlined.displayName = 'CheckCircleOutlined';
/* harmony default export */ var icons_CheckCircleOutlined = (/*#__PURE__*/index_js_.forwardRef(CheckCircleOutlined_CheckCircleOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CloseCircleOutlined.js
// This icon file is generated automatically.
var CloseCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "close-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_CloseCircleOutlined = (CloseCircleOutlined);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var CloseCircleOutlined_CloseCircleOutlined = function CloseCircleOutlined(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CloseCircleOutlined
  }));
};

CloseCircleOutlined_CloseCircleOutlined.displayName = 'CloseCircleOutlined';
/* harmony default export */ var icons_CloseCircleOutlined = (/*#__PURE__*/index_js_.forwardRef(CloseCircleOutlined_CloseCircleOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleOutlined.js
// This icon file is generated automatically.
var ExclamationCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
      }
    }]
  },
  "name": "exclamation-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_ExclamationCircleOutlined = (ExclamationCircleOutlined);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var ExclamationCircleOutlined_ExclamationCircleOutlined = function ExclamationCircleOutlined(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ExclamationCircleOutlined
  }));
};

ExclamationCircleOutlined_ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
/* harmony default export */ var icons_ExclamationCircleOutlined = (/*#__PURE__*/index_js_.forwardRef(ExclamationCircleOutlined_ExclamationCircleOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/InfoCircleOutlined.js
// This icon file is generated automatically.
var InfoCircleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  "name": "info-circle",
  "theme": "outlined"
};
/* harmony default export */ var asn_InfoCircleOutlined = (InfoCircleOutlined);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var InfoCircleOutlined_InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_InfoCircleOutlined
  }));
};

InfoCircleOutlined_InfoCircleOutlined.displayName = 'InfoCircleOutlined';
/* harmony default export */ var icons_InfoCircleOutlined = (/*#__PURE__*/index_js_.forwardRef(InfoCircleOutlined_InfoCircleOutlined));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(4165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: consume shared module (default) react-dom@>=16.9.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(1949);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/React/render.js




 // Let compiler not to search module usage

var fullClone = (0,objectSpread2/* default */.Z)({}, react_dom_index_js_);

var version = fullClone.version,
    reactRender = fullClone.render,
    unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;

try {
  var mainVersion = Number((version || '').split('.')[0]);

  if (mainVersion >= 18) {
    createRoot = fullClone.createRoot;
  }
} catch (e) {// Do nothing;
}

function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && (0,esm_typeof/* default */.Z)(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}

var MARK = '__rc_react_root__';

function modernRender(node, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}

function legacyRender(node, container) {
  reactRender(node, container);
}
/** @private Test usage. Not work in prod */


function _r(node, container) {
  if (false) {}
}
function render_render(node, container) {
  if (createRoot) {
    modernRender(node, container);
    return;
  }

  legacyRender(node, container);
} // ========================= Unmount ==========================

function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}

function _modernUnmount() {
  _modernUnmount = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(container) {
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Promise.resolve().then(function () {
              var _container$MARK;

              (_container$MARK = container[MARK]) === null || _container$MARK === void 0 ? void 0 : _container$MARK.unmount();
              delete container[MARK];
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}

function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
/** @private Test usage. Not work in prod */


function _u(container) {
  if (false) {}
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}

function _unmount() {
  _unmount = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(container) {
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(createRoot !== undefined)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", modernUnmount(container));

          case 2:
            legacyUnmount(container);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}
// EXTERNAL MODULE: consume shared module (default) react@>=16.9.0 (singleton) (fallback: ./node_modules/react/index.js)
var react_index_js_ = __webpack_require__(8056);
var react_index_js_default = /*#__PURE__*/__webpack_require__.n(react_index_js_);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(808);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(7277);
// EXTERNAL MODULE: ./node_modules/rc-util/node_modules/react-is/index.js
var react_is = __webpack_require__(3873);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Children/toArray.js


function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  react_index_js_default().Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0,react_is.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(632);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/FieldContext.js


var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

var warningFunc = function warningFunc() {
  (0,warning/* default */.ZP)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};

var FieldContext_Context = /*#__PURE__*/react_index_js_.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
/* harmony default export */ var FieldContext = (FieldContext_Context);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/typeUtil.js
function typeUtil_toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}
;// CONCATENATED MODULE: ./node_modules/async-validator/dist-web/index.js
function dist_web_extends() {
  dist_web_extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return dist_web_extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}
/* eslint no-console:0 */


var formatRegExp = /%[sdj%]/g;

var dist_web_warning = function warning() {}; // don't print warning message when in production env or node runtime


if (typeof process !== 'undefined' && ({"NODE_ENV":"production","PUBLIC_URL":"https://taotao9125.github.io/hostap","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}) && "production" !== 'production' && 0 && 0) {}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = dist_web_extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}; // https://github.com/kevva/url-regex/blob/master/index.js


var urlReg;

var getUrlRegex = function getUrlRegex() {
  if (urlReg) {
    return urlReg;
  }

  var word = '[a-fA-F\\d:]';

  var b = function b(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
  };

  var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
  var v6seg = '[a-fA-F\\d]{1,4}';
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");

  var ip = function ip(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
  };

  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
  };

  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
  };

  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = '(?:\\S+(?::\\S*)?@)?';
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = '(?::\\d{2,5})?';
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", 'i');
  return urlReg;
};
/* eslint max-len:0 */


var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();
/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = dist_web_extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = dist_web_extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return dist_web_extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = dist_web_extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error); // rethrow to report error

          if (!options.suppressValidatorError) {
            setTimeout(function () {
              throw error;
            }, 0);
          }

          cb(error.message);
        }

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = dist_web_warning;
Schema.messages = messages;
Schema.validators = validators;

;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/messages.js
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
;// CONCATENATED MODULE: ./node_modules/rc-util/es/utils/get.js
function get(entity, path) {
  var current = entity;

  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[path[i]];
  }

  return current;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(3878);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(5267);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(arr) {
  return (0,arrayWithHoles/* default */.Z)(arr) || _iterableToArray(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || (0,nonIterableRest/* default */.Z)();
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/utils/set.js





function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }

  var _paths = _toArray(paths),
      path = _paths[0],
      restPath = _paths.slice(1);

  var clone;

  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = (0,objectSpread2/* default */.Z)({}, entity);
  } // Delete prop if `removeIfUndefined` and value is undefined


  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }

  return clone;
}

function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // Do nothing if `removeIfUndefined` and parent object not exist

  if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
    return entity;
  }

  return internalSet(entity, paths, value, removeIfUndefined);
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/cloneDeep.js


function cloneDeep(val) {
  if (Array.isArray(val)) {
    return cloneArrayDeep(val);
  } else if ((0,esm_typeof/* default */.Z)(val) === 'object' && val !== null) {
    return cloneObjectDeep(val);
  }

  return val;
}

function cloneObjectDeep(val) {
  if (Object.getPrototypeOf(val) === Object.prototype) {
    var res = {};

    for (var key in val) {
      res[key] = cloneDeep(val[key]);
    }

    return res;
  }

  return val;
}

function cloneArrayDeep(val) {
  return val.map(function (item) {
    return cloneDeep(item);
  });
}

/* harmony default export */ var utils_cloneDeep = (cloneDeep);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/valueUtil.js







/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */

function getNamePath(path) {
  return typeUtil_toArray(path);
}
function valueUtil_getValue(store, namePath) {
  var value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = valueUtil_getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(path, namePath);
  });
}

function isObject(obj) {
  return (0,esm_typeof/* default */.Z)(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */


function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? _toConsumableArray(store) : (0,objectSpread2/* default */.Z)({}, store);

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value

    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : utils_cloneDeep(value); // Clone deep for arrays
  });
  return newStore;
}

function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }

  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }

  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }

  if (!source && target || source && !target) {
    return false;
  }

  if (!source || !target || (0,esm_typeof/* default */.Z)(source) !== 'object' || (0,esm_typeof/* default */.Z)(target) !== 'object') {
    return false;
  }

  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(sourceKeys, targetKeys));
  return _toConsumableArray(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];

    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }

    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && (0,esm_typeof/* default */.Z)(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */

function valueUtil_move(array, moveIndex, toIndex) {
  var length = array.length;

  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }

  var item = array[moveIndex];
  var diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [].concat(_toConsumableArray(array.slice(0, toIndex)), [item], _toConsumableArray(array.slice(toIndex, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, length)));
  }

  if (diff < 0) {
    // move right
    return [].concat(_toConsumableArray(array.slice(0, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array.slice(toIndex + 1, length)));
  }

  return array;
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/validateUtil.js









 // Remove incorrect original ts define

var AsyncValidator = Schema;
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */

function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}

var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';

function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */


function _validateRule() {
  _validateRule = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cloneRule = (0,objectSpread2/* default */.Z)({}, rule); // Bug of `async-validator`
            // https://github.com/react-component/field-form/issues/316
            // https://github.com/react-component/field-form/issues/313

            delete cloneRule.ruleIndex;

            if (cloneRule.validator) {
              originValidator = cloneRule.validator;

              cloneRule.validator = function () {
                try {
                  return originValidator.apply(void 0, arguments);
                } catch (error) {
                  console.error(error);
                  return Promise.reject(CODE_LOGIC_ERROR);
                }
              };
            } // We should special handle array validate


            subRuleField = null;

            if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }

            validator = new AsyncValidator((0,defineProperty/* default */.Z)({}, name, [cloneRule]));
            messages = setValues({}, defaultValidateMessages, options.validateMessages);
            validator.messages(messages);
            result = [];
            _context2.prev = 9;
            _context2.next = 12;
            return Promise.resolve(validator.validate((0,defineProperty/* default */.Z)({}, name, value), (0,objectSpread2/* default */.Z)({}, options)));

          case 12:
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](9);

            if (_context2.t0.errors) {
              result = _context2.t0.errors.map(function (_ref4, index) {
                var message = _ref4.message;
                var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
                return /*#__PURE__*/react_index_js_.isValidElement(mergedMessage) ?
                /*#__PURE__*/
                // Wrap ReactNode with `key`
                react_index_js_.cloneElement(mergedMessage, {
                  key: "error_".concat(index)
                }) : mergedMessage;
              });
            }

          case 17:
            if (!(!result.length && subRuleField)) {
              _context2.next = 22;
              break;
            }

            _context2.next = 20;
            return Promise.all(value.map(function (subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
            }));

          case 20:
            subResults = _context2.sent;
            return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
              return [].concat(_toConsumableArray(prev), _toConsumableArray(errors));
            }, []));

          case 22:
            // Replace message with variables
            kv = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rule), {}, {
              name: name,
              enum: (rule.enum || []).join(', ')
            }, messageVariables);
            fillVariableResult = result.map(function (error) {
              if (typeof error === 'string') {
                return replaceMessage(error, kv);
              }

              return error;
            });
            return _context2.abrupt("return", fillVariableResult);

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[9, 14]]);
  }));
  return _validateRule.apply(this, arguments);
}

function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.'); // Fill rule with context

  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;

    var cloneRule = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, currentRule), {}, {
      ruleIndex: ruleIndex
    }); // Replace validator if needed


    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false; // Wrap callback only accept when promise not provided

        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          } // Wait a tick to make sure return type is a promise


          Promise.resolve().then(function () {
            (0,warning/* default */.ZP)(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');

            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        }; // Get promise


        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */

        (0,warning/* default */.ZP)(hasPromise, '`callback` is deprecated. Please return a promise instead.');

        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }

    return cloneRule;
  }).sort(function (_ref, _ref2) {
    var w1 = _ref.warningOnly,
        i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly,
        i2 = _ref2.ruleIndex;

    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }

    if (w1) {
      return 1;
    }

    return -1;
  }); // Do validate rules

  var summaryPromise;

  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < filledRules.length)) {
                  _context.next = 12;
                  break;
                }

                rule = filledRules[i];
                _context.next = 5;
                return validateRule(name, value, rule, options, messageVariables);

              case 5:
                errors = _context.sent;

                if (!errors.length) {
                  _context.next = 9;
                  break;
                }

                reject([{
                  errors: errors,
                  rule: rule
                }]);
                return _context.abrupt("return");

              case 9:
                i += 1;
                _context.next = 1;
                break;

              case 12:
                /* eslint-enable */
                resolve([]);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  } // Internal catch error to avoid console error log.


  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}

function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}

function _finishOnAllFailed() {
  _finishOnAllFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee3(rulePromises) {
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
              var _ref5;

              var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));

              return errors;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}

function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}

function _finishOnFirstFailed() {
  _finishOnFirstFailed = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee4(rulePromises) {
    var count;
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function (resolve) {
              rulePromises.forEach(function (promise) {
                promise.then(function (ruleError) {
                  if (ruleError.errors.length) {
                    resolve([ruleError]);
                  }

                  count += 1;

                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/Field.js










var _excluded = ["name"];







var EMPTY_ERRORS = [];

function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }

  return prevValue !== nextValue;
} // We use Class instead of Hooks here since it will cost much code by using Hooks.


var Field = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Field, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Field);
  /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */

  /**
   * Mark when touched & validated. Currently only used for `dependencies`.
   * Note that we do not think field with `initialValue` is dirty
   * but this will be by `isFieldDirty` func.
   */
  // ============================== Subscriptions ==============================


  function Field(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Field);

    _this = _super.call(this, props); // Register on init

    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    _this.touched = false;
    _this.dirty = false;
    _this.validatePromise = null;
    _this.prevValidating = void 0;
    _this.errors = EMPTY_ERRORS;
    _this.warnings = EMPTY_ERRORS;

    _this.cancelRegister = function () {
      var _this$props = _this.props,
          preserve = _this$props.preserve,
          isListField = _this$props.isListField,
          name = _this$props.name;

      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }

      _this.cancelRegisterFunc = null;
    };

    _this.getNamePath = function () {
      var _this$props2 = _this.props,
          name = _this$props2.name,
          fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
          prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
    };

    _this.getRules = function () {
      var _this$props3 = _this.props,
          _this$props3$rules = _this$props3.rules,
          rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
          fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }

        return rule;
      });
    };

    _this.refresh = function () {
      if (!_this.mounted) return;
      /**
       * Clean up current node.
       */

      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    };

    _this.triggerMetaEvent = function (destroy) {
      var onMetaChange = _this.props.onMetaChange;
      onMetaChange === null || onMetaChange === void 0 ? void 0 : onMetaChange((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getMeta()), {}, {
        destroy: destroy
      }));
    };

    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
          shouldUpdate = _this$props4.shouldUpdate,
          _this$props4$dependen = _this$props4.dependencies,
          dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
          onReset = _this$props4.onReset;
      var store = info.store;

      var namePath = _this.getNamePath();

      var prevValue = _this.getValue(prevStore);

      var curValue = _this.getValue(store);

      var namePathMatch = namePathList && containsNamePath(namePathList, namePath); // `setFieldsValue` is a quick access to update related status

      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;

        _this.triggerMetaEvent();
      }

      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;

            _this.triggerMetaEvent();

            onReset === null || onReset === void 0 ? void 0 : onReset();

            _this.refresh();

            return;
          }

          break;

        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */

        case 'remove':
          {
            if (shouldUpdate) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;

              if ('touched' in data) {
                _this.touched = data.touched;
              }

              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }

              if ('errors' in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }

              if ('warnings' in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }

              _this.dirty = true;

              _this.triggerMetaEvent();

              _this.reRender();

              return;
            } // Handle update by `setField` with `shouldUpdate`


            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(getNamePath); // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering

            if (dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();

              return;
            }

            break;
          }

        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();

            return;
          }

          break;
      }

      if (shouldUpdate === true) {
        _this.reRender();
      }
    };

    _this.validateRules = function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();

      var currentValue = _this.getValue(); // Force change to async to avoid rule OOD under renderProps field


      var rootPromise = Promise.resolve().then(function () {
        if (!_this.mounted) {
          return [];
        }

        var _this$props5 = _this.props,
            _this$props5$validate = _this$props5.validateFirst,
            validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
            messageVariables = _this$props5.messageVariables;

        var _ref2 = options || {},
            triggerName = _ref2.triggerName;

        var filteredRules = _this.getRules();

        if (triggerName) {
          filteredRules = filteredRules.filter(function (rule) {
            var validateTrigger = rule.validateTrigger;

            if (!validateTrigger) {
              return true;
            }

            var triggerList = typeUtil_toArray(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }

        var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise.catch(function (e) {
          return e;
        }).then(function () {
          var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;

          if (_this.validatePromise === rootPromise) {
            var _ruleErrors$forEach;

            _this.validatePromise = null; // Get errors & warnings

            var nextErrors = [];
            var nextWarnings = [];
            (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref3) {
              var warningOnly = _ref3.rule.warningOnly,
                  _ref3$errors = _ref3.errors,
                  errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;

              if (warningOnly) {
                nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
              } else {
                nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
              }
            });
            _this.errors = nextErrors;
            _this.warnings = nextWarnings;

            _this.triggerMetaEvent();

            _this.reRender();
          }
        });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;

      _this.triggerMetaEvent(); // Force trigger re-render since we need sync renderProps with new meta


      _this.reRender();

      return rootPromise;
    };

    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };

    _this.isFieldTouched = function () {
      return _this.touched;
    };

    _this.isFieldDirty = function () {
      // Touched or validate or has initialValue
      if (_this.dirty || _this.props.initialValue !== undefined) {
        return true;
      } // Form set initialValue


      var fieldContext = _this.props.fieldContext;

      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK),
          getInitialValue = _fieldContext$getInte.getInitialValue;

      if (getInitialValue(_this.getNamePath()) !== undefined) {
        return true;
      }

      return false;
    };

    _this.getErrors = function () {
      return _this.errors;
    };

    _this.getWarnings = function () {
      return _this.warnings;
    };

    _this.isListField = function () {
      return _this.props.isListField;
    };

    _this.isList = function () {
      return _this.props.isList;
    };

    _this.isPreserve = function () {
      return _this.props.preserve;
    };

    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath()
      };
      return meta;
    };

    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();

        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      } // Filed element only


      var childList = toArray(children);

      if (childList.length !== 1 || ! /*#__PURE__*/react_index_js_.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }

      return {
        child: childList[0],
        isFunction: false
      };
    };

    _this.getValue = function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;

      var namePath = _this.getNamePath();

      return valueUtil_getValue(store || getFieldsValue(true), namePath);
    };

    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          validateTrigger = _this$props6.validateTrigger,
          getValueFromEvent = _this$props6.getValueFromEvent,
          normalize = _this$props6.normalize,
          valuePropName = _this$props6.valuePropName,
          getValueProps = _this$props6.getValueProps,
          fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;

      var namePath = _this.getNamePath();

      var getInternalHooks = fieldContext.getInternalHooks,
          getFieldsValue = fieldContext.getFieldsValue;

      var _getInternalHooks = getInternalHooks(HOOK_MARK),
          dispatch = _getInternalHooks.dispatch;

      var value = _this.getValue();

      var mergedGetValueProps = getValueProps || function (val) {
        return (0,defineProperty/* default */.Z)({}, valuePropName, val);
      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var originTriggerFunc = childProps[trigger];

      var control = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, childProps), mergedGetValueProps(value)); // Add trigger


      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;

        _this.triggerMetaEvent();

        var newValue;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }

        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }

        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });

        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      }; // Add validateTrigger


      var validateTriggerList = typeUtil_toArray(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];

        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          } // Always use latest rules


          var rules = _this.props.rules;

          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    };

    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;

      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
          initEntityValue = _getInternalHooks2.initEntityValue;

      initEntityValue((0,assertThisInitialized/* default */.Z)(_this));
    }

    return _this;
  }

  (0,createClass/* default */.Z)(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          shouldUpdate = _this$props7.shouldUpdate,
          fieldContext = _this$props7.fieldContext;
      this.mounted = true; // Register on init

      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;

        var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
            registerField = _getInternalHooks3.registerField;

        this.cancelRegisterFunc = registerField(this);
      } // One more render for component in case fields not ready


      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;

      var _this$getOnlyChild = this.getOnlyChild(children),
          child = _this$getOnlyChild.child,
          isFunction = _this$getOnlyChild.isFunction; // Not need to `cloneElement` since user can handle this in render function self


      var returnChildNode;

      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/react_index_js_.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/react_index_js_.cloneElement(child, this.getControlled(child.props));
      } else {
        (0,warning/* default */.ZP)(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }

      return /*#__PURE__*/react_index_js_.createElement(react_index_js_.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);

  return Field;
}(react_index_js_.Component);

Field.contextType = FieldContext;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value'
};

function WrapperField(_ref5) {
  var name = _ref5.name,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref5, _excluded);

  var fieldContext = react_index_js_.useContext(FieldContext);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var key = 'keep';

  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  } // Warning if it's a directly list field.
  // We can still support multiple level field preserve.


  if (false) {}

  return /*#__PURE__*/react_index_js_.createElement(Field, (0,esm_extends/* default */.Z)({
    key: key,
    name: namePath
  }, restProps, {
    fieldContext: fieldContext
  }));
}

/* harmony default export */ var es_Field = (WrapperField);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/ListContext.js

var ListContext = /*#__PURE__*/react_index_js_.createContext(null);
/* harmony default export */ var es_ListContext = (ListContext);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/List.js









var List = function List(_ref) {
  var name = _ref.name,
      initialValue = _ref.initialValue,
      children = _ref.children,
      rules = _ref.rules,
      validateTrigger = _ref.validateTrigger;
  var context = react_index_js_.useContext(FieldContext);
  var keyRef = react_index_js_.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = react_index_js_.useMemo(function () {
    var parentPrefixName = getNamePath(context.prefixName) || [];
    return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
  }, [context.prefixName, name]);
  var fieldContext = react_index_js_.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, context), {}, {
      prefixName: prefixName
    });
  }, [context, prefixName]); // List context

  var listContext = react_index_js_.useMemo(function () {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]); // User should not pass `children` as other type.

  if (typeof children !== 'function') {
    (0,warning/* default */.ZP)(false, 'Form.List only accepts function as children.');
    return null;
  }

  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;

    if (source === 'internal') {
      return false;
    }

    return prevValue !== nextValue;
  };

  return /*#__PURE__*/react_index_js_.createElement(es_ListContext.Provider, {
    value: listContext
  }, /*#__PURE__*/react_index_js_.createElement(FieldContext.Provider, {
    value: fieldContext
  }, /*#__PURE__*/react_index_js_.createElement(es_Field, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
        value = _ref3$value === void 0 ? [] : _ref3$value,
        onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;

    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */


    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();

        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index)));
          onChange([].concat(_toConsumableArray(newValue.slice(0, index)), [defaultValue], _toConsumableArray(newValue.slice(index))));
        } else {
          if (false) {}

          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
          onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
        }

        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);

        if (indexSet.size <= 0) {
          return;
        }

        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        }); // Trigger store change

        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move(from, to) {
        if (from === to) {
          return;
        }

        var newValue = getNewValue(); // Do not handle out of range

        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }

        keyManager.keys = valueUtil_move(keyManager.keys, from, to); // Trigger store change

        onChange(valueUtil_move(newValue, from, to));
      }
    };
    var listValue = value || [];

    if (!Array.isArray(listValue)) {
      listValue = [];

      if (false) {}
    }

    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];

      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }

      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  })));
};

/* harmony default export */ var es_List = (List);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;

        if (count > 0) {
          return;
        }

        if (hasError) {
          reject(results);
        }

        resolve(results);
      });
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/utils/NameMap.js





var SPLIT = '__@field_split__';
/**
 * Convert name path into string to fast the fetch speed of Map.
 */

function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat((0,esm_typeof/* default */.Z)(cell), ":").concat(cell);
  }) // Magic split
  .join(SPLIT);
}
/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */


var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    (0,classCallCheck/* default */.Z)(this, NameMap);

    this.kvs = new Map();
  }

  (0,createClass/* default */.Z)(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);

      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    } // Since we only use this in test, let simply realize this

  }, {
    key: "map",
    value: function map(callback) {
      return _toConsumableArray(this.kvs.entries()).map(function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
                _cell$match2 = (0,slicedToArray/* default */.Z)(_cell$match, 3),
                type = _cell$match2[1],
                unit = _cell$match2[2];

            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
            value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);

  return NameMap;
}();

/* harmony default export */ var utils_NameMap = (NameMap);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useForm.js






var useForm_excluded = ["name", "errors"];








var FormStore = /*#__PURE__*/(0,createClass/* default */.Z)(function FormStore(forceRootUpdate) {
  var _this = this;

  (0,classCallCheck/* default */.Z)(this, FormStore);

  this.formHooked = false;
  this.forceRootUpdate = void 0;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;

  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  };

  this.getInternalHooks = function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }

    (0,warning/* default */.ZP)(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };

  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };

  this.prevWithoutPreserves = null;

  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};

    if (init) {
      var _this$prevWithoutPres;

      var nextStore = setValues({}, initialValues, _this.store); // We will take consider prev form unmount fields.
      // When the field is not `preserve`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return

      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function (_ref) {
        var namePath = _ref.key;
        nextStore = setValue(nextStore, namePath, valueUtil_getValue(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;

      _this.updateStore(nextStore);
    }
  };

  this.destroyForm = function () {
    var prevWithoutPreserves = new utils_NameMap();

    _this.getFieldEntities(true).forEach(function (entity) {
      if (!_this.isMergedPreserve(entity.isPreserve())) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });

    _this.prevWithoutPreserves = prevWithoutPreserves;
  };

  this.getInitialValue = function (namePath) {
    var initValue = valueUtil_getValue(_this.initialValues, namePath); // Not cloneDeep when without `namePath`

    return namePath.length ? utils_cloneDeep(initValue) : initValue;
  };

  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };

  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };

  this.setPreserve = function (preserve) {
    _this.preserve = preserve;
  };

  this.watchList = [];

  this.registerWatch = function (callback) {
    _this.watchList.push(callback);

    return function () {
      _this.watchList = _this.watchList.filter(function (fn) {
        return fn !== callback;
      });
    };
  };

  this.notifyWatch = function () {
    var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []; // No need to cost perf when nothing need to watch

    if (_this.watchList.length) {
      var values = _this.getFieldsValue();

      _this.watchList.forEach(function (callback) {
        callback(values, namePath);
      });
    }
  };

  this.timeoutId = null;

  this.warningUnhooked = function () {
    if (false) {}
  };

  this.updateStore = function (nextStore) {
    _this.store = nextStore;
  };

  this.getFieldEntities = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!pure) {
      return _this.fieldEntities;
    }

    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };

  this.getFieldsMap = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new utils_NameMap();

    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });

    return cache;
  };

  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }

    var cache = _this.getFieldsMap(true);

    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  };

  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();

    if (nameList === true && !filterFunc) {
      return _this.store;
    }

    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);

    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _entity$isListField;

      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath(); // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count

      if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
        return;
      }

      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;

        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  };

  this.getFieldValue = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);
    return valueUtil_getValue(_this.store, namePath);
  };

  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);

    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }

      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  };

  this.getFieldError = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.errors;
  };

  this.getFieldWarning = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.warnings;
  };

  this.isFieldsTouched = function () {
    _this.warningUnhooked();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var arg0 = args[0],
        arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;

    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }

    var fieldEntities = _this.getFieldEntities(true);

    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    }; // ===== Will get fully compare when not config namePathList =====


    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    } // Generate a nest tree for validate


    var map = new utils_NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath(); // Find matched entity and put into list

      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat(_toConsumableArray(list), [field]);
          });
        }
      });
    }); // Check if NameMap value is touched

    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };

    var namePathListEntities = map.map(function (_ref2) {
      var value = _ref2.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };

  this.isFieldTouched = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsTouched([name]);
  };

  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntities();

    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }

    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };

  this.isFieldValidating = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsValidating([name]);
  };

  this.resetWithFieldInitialValue = function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // Create cache

    var cache = new utils_NameMap();

    var fieldEntities = _this.getFieldEntities(true);

    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath(); // Record only if has `initialValue`

      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    }); // Reset

    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;

        if (initialValue !== undefined) {
          var namePath = field.getNamePath();

          var formInitialValue = _this.getInitialValue(namePath);

          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            (0,warning/* default */.ZP)(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);

            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              (0,warning/* default */.ZP)(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath); // Set `initialValue`


              if (!info.skipExist || originValue === undefined) {
                _this.updateStore(setValue(_this.store, namePath, _toConsumableArray(records)[0].value));
              }
            }
          }
        }
      });
    };

    var requiredFieldEntities;

    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);

        if (records) {
          var _requiredFieldEntitie;

          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }

    resetWithFields(requiredFieldEntities);
  };

  this.resetFields = function (nameList) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (!nameList) {
      _this.updateStore(setValues({}, _this.initialValues));

      _this.resetWithFieldInitialValue();

      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });

      _this.notifyWatch();

      return;
    } // Reset by `nameList`


    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);

      _this.updateStore(setValue(_this.store, namePath, initialValue));
    });

    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });

    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });

    _this.notifyWatch(namePathList);
  };

  this.setFields = function (fields) {
    _this.warningUnhooked();

    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
          errors = fieldData.errors,
          data = (0,objectWithoutProperties/* default */.Z)(fieldData, useForm_excluded);

      var namePath = getNamePath(name);
      namePathList.push(namePath); // Value

      if ('value' in data) {
        _this.updateStore(setValue(_this.store, namePath, data.value));
      }

      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });

    _this.notifyWatch(namePathList);
  };

  this.getFields = function () {
    var entities = _this.getFieldEntities(true);

    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();

      var fieldData = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });

      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  };

  this.initEntityValue = function (entity) {
    var initialValue = entity.props.initialValue;

    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = valueUtil_getValue(_this.store, namePath);

      if (prevValue === undefined) {
        _this.updateStore(setValue(_this.store, namePath, initialValue));
      }
    }
  };

  this.isMergedPreserve = function (fieldPreserve) {
    var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  };

  this.registerField = function (entity) {
    _this.fieldEntities.push(entity);

    var namePath = entity.getNamePath();

    _this.notifyWatch([namePath]); // Set initial values


    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;

      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });

      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    } // un-register field callback


    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      }); // Clean up store value if not preserve

      if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);

        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (// Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;

          _this.updateStore(setValue(_prevStore, namePath, defaultValue, true)); // Notify that field is unmount


          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          }); // Dependencies update


          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }

      _this.notifyWatch([namePath]);
    };
  };

  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
              value = action.value;

          _this.updateValue(namePath, value);

          break;
        }

      case 'validateField':
        {
          var _namePath = action.namePath,
              triggerName = action.triggerName;

          _this.validateFields([_namePath], {
            triggerName: triggerName
          });

          break;
        }

      default: // Currently we don't have other action. Do nothing.

    }
  };

  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, info), {}, {
        store: _this.getFieldsValue(true)
      });

      _this.getFieldEntities().forEach(function (_ref3) {
        var onStoreChange = _ref3.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };

  this.triggerDependenciesUpdate = function (prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);

    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }

    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
    });

    return childrenFields;
  };

  this.updateValue = function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;

    _this.updateStore(setValue(_this.store, namePath, value));

    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });

    _this.notifyWatch([namePath]); // Dependencies update


    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath); // trigger callback function


    var onValuesChange = _this.callbacks.onValuesChange;

    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }

    _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
  };

  this.setFieldsValue = function (store) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (store) {
      var nextStore = setValues(_this.store, store);

      _this.updateStore(nextStore);
    }

    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });

    _this.notifyWatch();
  };

  this.setFieldValue = function (name, value) {
    _this.setFields([{
      name: name,
      value: value
    }]);
  };

  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new utils_NameMap();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */

    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });

    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();

          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };

    fillChildren(rootNamePath);
    return childrenFields;
  };

  this.triggerOnFieldsChange = function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;

    if (onFieldsChange) {
      var fields = _this.getFields();
      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */


      if (filedErrors) {
        var cache = new utils_NameMap();
        filedErrors.forEach(function (_ref4) {
          var name = _ref4.name,
              errors = _ref4.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }

      var changedFields = fields.filter(function (_ref5) {
        var fieldName = _ref5.name;
        return containsNamePath(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  };

  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();

    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : []; // Collect result in promise list

    var promiseList = [];

    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */


      if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
        var namePath = field.getNamePath();

        if ( // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        namePath.every(function (nameUnit, i) {
          return nameList[i] === nameUnit || nameList[i] === undefined;
        })) {
          namePathList.push(namePath);
        }
      } // Skip if without rule


      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list

      if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
        var promise = field.validateRules((0,objectSpread2/* default */.Z)({
          validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultValidateMessages), _this.validateMessages)
        }, options)); // Wrap promise with field

        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var _ruleErrors$forEach;

          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref6) {
            var warningOnly = _ref6.rule.warningOnly,
                errors = _ref6.errors;

            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
            }
          });

          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }

          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });

    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update

    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref7) {
        var name = _ref7.name;
        return name;
      });

      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });

      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }

      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    }); // Do not throw in console

    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  };

  this.submit = function () {
    _this.warningUnhooked();

    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;

      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;

      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };

  this.forceRootUpdate = forceRootUpdate;
});

function useForm(form) {
  var formRef = react_index_js_.useRef();

  var _React$useState = react_index_js_.useState({}),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };

      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

/* harmony default export */ var es_useForm = (useForm);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/FormContext.js



var FormContext = /*#__PURE__*/react_index_js_.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});

var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
      onFormChange = _ref.onFormChange,
      onFormFinish = _ref.onFormFinish,
      children = _ref.children;
  var formContext = react_index_js_.useContext(FormContext);
  var formsRef = react_index_js_.useRef({});
  return /*#__PURE__*/react_index_js_.createElement(FormContext.Provider, {
    value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext), {}, {
      validateMessages: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }

        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }

        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formsRef.current), {}, (0,defineProperty/* default */.Z)({}, name, form));
        }

        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = (0,objectSpread2/* default */.Z)({}, formsRef.current);

        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};


/* harmony default export */ var es_FormContext = (FormContext);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/Form.js




var Form_excluded = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];






var Form = function Form(_ref, ref) {
  var name = _ref.name,
      initialValues = _ref.initialValues,
      fields = _ref.fields,
      form = _ref.form,
      preserve = _ref.preserve,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'form' : _ref$component,
      validateMessages = _ref.validateMessages,
      _ref$validateTrigger = _ref.validateTrigger,
      validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
      onValuesChange = _ref.onValuesChange,
      _onFieldsChange = _ref.onFieldsChange,
      _onFinish = _ref.onFinish,
      onFinishFailed = _ref.onFinishFailed,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Form_excluded);

  var formContext = react_index_js_.useContext(es_FormContext); // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider

  var _useForm = es_useForm(form),
      _useForm2 = (0,slicedToArray/* default */.Z)(_useForm, 1),
      formInstance = _useForm2[0];

  var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
      useSubscribe = _formInstance$getInte.useSubscribe,
      setInitialValues = _formInstance$getInte.setInitialValues,
      setCallbacks = _formInstance$getInte.setCallbacks,
      setValidateMessages = _formInstance$getInte.setValidateMessages,
      setPreserve = _formInstance$getInte.setPreserve,
      destroyForm = _formInstance$getInte.destroyForm; // Pass ref with form instance


  react_index_js_.useImperativeHandle(ref, function () {
    return formInstance;
  }); // Register form into Context

  react_index_js_.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]); // Pass props to store

  setValidateMessages((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);

      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);

      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve); // Set initial value, init store value when first mount

  var mountRef = react_index_js_.useRef(null);
  setInitialValues(initialValues, !mountRef.current);

  if (!mountRef.current) {
    mountRef.current = true;
  }

  react_index_js_.useEffect(function () {
    return destroyForm;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []); // Prepare children by `children` type

  var childrenNode;
  var childrenRenderProps = typeof children === 'function';

  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  } // Not use subscribe when using render props


  useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render

  var prevFieldsRef = react_index_js_.useRef();
  react_index_js_.useEffect(function () {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }

    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = react_index_js_.useMemo(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/react_index_js_.createElement(FieldContext.Provider, {
    value: formContextValue
  }, childrenNode);

  if (Component === false) {
    return wrapperNode;
  }

  return /*#__PURE__*/react_index_js_.createElement(Component, (0,esm_extends/* default */.Z)({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;

      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};

/* harmony default export */ var es_Form = (Form);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/useWatch.js






function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}

function useWatch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _args$ = args[0],
      dependencies = _args$ === void 0 ? [] : _args$,
      form = args[1];

  var _useState = (0,react_index_js_.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var valueStr = (0,react_index_js_.useMemo)(function () {
    return stringify(value);
  }, [value]);
  var valueStrRef = (0,react_index_js_.useRef)(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = (0,react_index_js_.useContext)(FieldContext);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init; // Warning if not exist form instance

  if (false) {}

  var namePath = getNamePath(dependencies);
  var namePathRef = (0,react_index_js_.useRef)(namePath);
  namePathRef.current = namePath;
  (0,react_index_js_.useEffect)(function () {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }

    var getFieldsValue = formInstance.getFieldsValue,
        getInternalHooks = formInstance.getInternalHooks;

    var _getInternalHooks = getInternalHooks(HOOK_MARK),
        registerWatch = _getInternalHooks.registerWatch;

    var cancelRegister = registerWatch(function (store) {
      var newValue = valueUtil_getValue(store, namePathRef.current);
      var nextValueStr = stringify(newValue); // Compare stringify in case it's nest object

      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(newValue);
      }
    }); // TODO: We can improve this perf in future

    var initialValue = valueUtil_getValue(getFieldsValue(), namePathRef.current);
    setValue(initialValue);
    return cancelRegister;
  }, // We do not need re-register since namePath content is the same
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isValidForm]);
  return value;
}

/* harmony default export */ var es_useWatch = (useWatch);
;// CONCATENATED MODULE: ./node_modules/rc-field-form/es/index.js









var InternalForm = /*#__PURE__*/react_index_js_.forwardRef(es_Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = es_Field;
RefForm.List = es_List;
RefForm.useForm = es_useForm;
RefForm.useWatch = es_useWatch;

/* harmony default export */ var es = ((/* unused pure expression or super */ null && (RefForm)));
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(1534);
;// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === 'number' && value !== value;
};

function isEqual(first, second) {
  if (first === second) {
    return true;
  }

  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }

  return false;
}

function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var cache = null;

  function memoized() {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }

    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult: lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }

  memoized.clear = function clear() {
    cache = null;
  };

  return memoized;
}


;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/locale/en_US.js
/* harmony default export */ var en_US = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
});
;// CONCATENATED MODULE: ./node_modules/rc-picker/es/locale/en_US.js
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ var locale_en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/time-picker/locale/en_US.js
var en_US_locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ var time_picker_locale_en_US = (en_US_locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/date-picker/locale/en_US.js


 // Merge into a locale object

var locale_en_US_locale = {
  lang: (0,esm_extends/* default */.Z)({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale_en_US),
  timePickerLocale: (0,esm_extends/* default */.Z)({}, time_picker_locale_en_US)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ var date_picker_locale_en_US = (locale_en_US_locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/calendar/locale/en_US.js

/* harmony default export */ var calendar_locale_en_US = (date_picker_locale_en_US);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale/default.js
/* eslint-disable no-template-curly-in-string */




var default_typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: en_US,
  DatePicker: date_picker_locale_en_US,
  TimePicker: time_picker_locale_en_US,
  Calendar: calendar_locale_en_US,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: default_typeTemplate,
        method: default_typeTemplate,
        array: default_typeTemplate,
        object: default_typeTemplate,
        number: default_typeTemplate,
        date: default_typeTemplate,
        "boolean": default_typeTemplate,
        integer: default_typeTemplate,
        "float": default_typeTemplate,
        regexp: default_typeTemplate,
        email: default_typeTemplate,
        url: default_typeTemplate,
        hex: default_typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  }
};
/* harmony default export */ var locale_default = (localeValues);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/locale.js



var runtimeLocale = (0,esm_extends/* default */.Z)({}, locale_default.Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = (0,esm_extends/* default */.Z)({}, locale_default.Modal);
  }
}
function getConfirmLocale() {
  return runtimeLocale;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/context.js

var context_LocaleContext = /*#__PURE__*/(0,react_index_js_.createContext)(undefined);
/* harmony default export */ var context = (context_LocaleContext);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/index.js










var ANT_MARK = 'internalMark';

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(LocaleProvider, _React$Component);

  var _super = (0,createSuper/* default */.Z)(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, LocaleProvider);

    _this = _super.call(this, props);
    _this.getMemoizedContextValue = memoizeOne(function (localeValue) {
      return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, localeValue), {
        exist: true
      });
    });
    changeConfirmLocale(props.locale && props.locale.Modal);
     false ? 0 : void 0;
    return _this;
  }

  (0,createClass/* default */.Z)(LocaleProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      changeConfirmLocale(this.props.locale && this.props.locale.Modal);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        changeConfirmLocale(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      changeConfirmLocale();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      var contextValue = this.getMemoizedContextValue(locale);
      return /*#__PURE__*/react_index_js_.createElement(context.Provider, {
        value: contextValue
      }, children);
    }
  }]);

  return LocaleProvider;
}(react_index_js_.Component);


LocaleProvider.defaultProps = {
  locale: {}
};
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/default.js

/* harmony default export */ var locale_provider_default = (locale_default);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js









var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(LocaleReceiver, _React$Component);

  var _super = (0,createSuper/* default */.Z)(LocaleReceiver);

  function LocaleReceiver() {
    (0,classCallCheck/* default */.Z)(this, LocaleReceiver);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || locale_provider_default[componentName !== null && componentName !== void 0 ? componentName : 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return locale_provider_default.locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);

  return LocaleReceiver;
}(react_index_js_.Component);


LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = context;
function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = React.useContext(LocaleContext);
  var componentLocale = React.useMemo(function () {
    var locale = defaultLocale || defaultLocaleData[componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [componentLocale];
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CheckCircleFilled.js
// This icon file is generated automatically.
var CheckCircleFilled = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
      }
    }]
  },
  "name": "check-circle",
  "theme": "filled"
};
/* harmony default export */ var asn_CheckCircleFilled = (CheckCircleFilled);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var CheckCircleFilled_CheckCircleFilled = function CheckCircleFilled(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CheckCircleFilled
  }));
};

CheckCircleFilled_CheckCircleFilled.displayName = 'CheckCircleFilled';
/* harmony default export */ var icons_CheckCircleFilled = (/*#__PURE__*/index_js_.forwardRef(CheckCircleFilled_CheckCircleFilled));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CloseCircleFilled.js
// This icon file is generated automatically.
var CloseCircleFilled = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
      }
    }]
  },
  "name": "close-circle",
  "theme": "filled"
};
/* harmony default export */ var asn_CloseCircleFilled = (CloseCircleFilled);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var CloseCircleFilled_CloseCircleFilled = function CloseCircleFilled(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CloseCircleFilled
  }));
};

CloseCircleFilled_CloseCircleFilled.displayName = 'CloseCircleFilled';
/* harmony default export */ var icons_CloseCircleFilled = (/*#__PURE__*/index_js_.forwardRef(CloseCircleFilled_CloseCircleFilled));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/ExclamationCircleFilled.js
// This icon file is generated automatically.
var ExclamationCircleFilled = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  "name": "exclamation-circle",
  "theme": "filled"
};
/* harmony default export */ var asn_ExclamationCircleFilled = (ExclamationCircleFilled);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var ExclamationCircleFilled_ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_ExclamationCircleFilled
  }));
};

ExclamationCircleFilled_ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
/* harmony default export */ var icons_ExclamationCircleFilled = (/*#__PURE__*/index_js_.forwardRef(ExclamationCircleFilled_ExclamationCircleFilled));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/InfoCircleFilled.js
// This icon file is generated automatically.
var InfoCircleFilled = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  "name": "info-circle",
  "theme": "filled"
};
/* harmony default export */ var asn_InfoCircleFilled = (InfoCircleFilled);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var InfoCircleFilled_InfoCircleFilled = function InfoCircleFilled(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_InfoCircleFilled
  }));
};

InfoCircleFilled_InfoCircleFilled.displayName = 'InfoCircleFilled';
/* harmony default export */ var icons_InfoCircleFilled = (/*#__PURE__*/index_js_.forwardRef(InfoCircleFilled_InfoCircleFilled));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(7106);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1694);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(8689);
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/Notice.js











var Notice = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Notice, _Component);

  var _super = (0,createSuper/* default */.Z)(Notice);

  function Notice() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Notice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var _this$props = _this.props,
          onClose = _this$props.onClose,
          noticeKey = _this$props.noticeKey;

      if (onClose) {
        onClose(noticeKey);
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark || // Visible again need reset timer
      this.props.visible !== prevProps.visible && this.props.visible) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closable = _this$props2.closable,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          holder = _this$props2.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});
      var node = /*#__PURE__*/react_index_js_.createElement("div", (0,esm_extends/* default */.Z)({
        className: classnames_default()(componentClass, className, (0,defineProperty/* default */.Z)({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), /*#__PURE__*/react_index_js_.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? /*#__PURE__*/react_index_js_.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || /*#__PURE__*/react_index_js_.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return /*#__PURE__*/react_dom_index_js_default().createPortal(node, holder);
      }

      return node;
    }
  }]);

  return Notice;
}(react_index_js_.Component);

Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5
};

;// CONCATENATED MODULE: ./node_modules/rc-notification/es/useNotification.js





function useNotification_useNotification(notificationInstance) {
  var createdRef = react_index_js_.useRef({});

  var _React$useState = react_index_js_.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    var firstMount = true;
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && (!createdRef.current[key] || firstMount)) {
        var noticeEle = /*#__PURE__*/react_index_js_.createElement(Notice, (0,esm_extends/* default */.Z)({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          var index = originElements.findIndex(function (ele) {
            return ele.key === props.key;
          });

          if (index === -1) {
            return [].concat(_toConsumableArray(originElements), [noticeEle]);
          }

          var cloneList = _toConsumableArray(originElements);

          cloneList[index] = noticeEle;
          return cloneList;
        });
      }

      firstMount = false;
    });
  }

  return [notify, /*#__PURE__*/react_index_js_.createElement(react_index_js_.Fragment, null, elements)];
}
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/Notification.js







var Notification_excluded = ["getContainer"];







var seed = 0;
var now = Date.now();

function getUuid() {
  var id = seed;
  seed += 1;
  return "rcNotification_".concat(now, "_").concat(id);
}

var Notification = /*#__PURE__*/function (_Component) {
  (0,inherits/* default */.Z)(Notification, _Component);

  var _super = (0,createSuper/* default */.Z)(Notification);

  function Notification() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Notification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      notices: []
    };
    _this.hookRefs = new Map();

    _this.add = function (originNotice, holderCallback) {
      var key = originNotice.key || getUuid();

      var notice = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, originNotice), {}, {
        key: key
      });

      var maxCount = _this.props.maxCount;

      _this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.notice.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();

        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, {
            notice: notice,
            holderCallback: holderCallback
          });
        } else {
          if (maxCount && notices.length >= maxCount) {
            // XXX, use key of first item to update new added (let React to move exsiting
            // instead of remove and mount). Same key was used before for both a) external
            // manual control and b) internal react 'key' prop , which is not that good.
            // eslint-disable-next-line no-param-reassign
            // zombieJ: Not know why use `updateKey`. This makes Notice infinite loop in jest.
            // Change to `updateMark` for compare instead.
            // https://github.com/react-component/notification/commit/32299e6be396f94040bfa82517eea940db947ece
            notice.key = updatedNotices[0].notice.key;
            notice.updateMark = getUuid(); // zombieJ: That's why. User may close by key directly.
            // We need record this but not re-render to avoid upper issue
            // https://github.com/react-component/notification/issues/129

            notice.userPassKey = key;
            updatedNotices.shift();
          }

          updatedNotices.push({
            notice: notice,
            holderCallback: holderCallback
          });
        }

        return {
          notices: updatedNotices
        };
      });
    };

    _this.remove = function (removeKey) {
      _this.setState(function (_ref) {
        var notices = _ref.notices;
        return {
          notices: notices.filter(function (_ref2) {
            var _ref2$notice = _ref2.notice,
                key = _ref2$notice.key,
                userPassKey = _ref2$notice.userPassKey;
            var mergedKey = userPassKey || key;
            return mergedKey !== removeKey;
          })
        };
      });
    };

    _this.noticePropsMap = {};
    return _this;
  }

  (0,createClass/* default */.Z)(Notification, [{
    key: "getTransitionName",
    value: function getTransitionName() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          animation = _this$props.animation;
      var transitionName = this.props.transitionName;

      if (!transitionName && animation) {
        transitionName = "".concat(prefixCls, "-").concat(animation);
      }

      return transitionName;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var notices = this.state.notices;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style;
      var noticeKeys = [];
      notices.forEach(function (_ref3, index) {
        var notice = _ref3.notice,
            holderCallback = _ref3.holderCallback;
        var updateMark = index === notices.length - 1 ? notice.updateMark : undefined;
        var key = notice.key,
            userPassKey = notice.userPassKey;

        var noticeProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
          prefixCls: prefixCls,
          closeIcon: closeIcon
        }, notice), notice.props), {}, {
          key: key,
          noticeKey: userPassKey || key,
          updateMark: updateMark,
          onClose: function onClose(noticeKey) {
            var _notice$onClose;

            _this2.remove(noticeKey);

            (_notice$onClose = notice.onClose) === null || _notice$onClose === void 0 ? void 0 : _notice$onClose.call(notice);
          },
          onClick: notice.onClick,
          children: notice.content
        }); // Give to motion


        noticeKeys.push(key);
        _this2.noticePropsMap[key] = {
          props: noticeProps,
          holderCallback: holderCallback
        };
      });
      return /*#__PURE__*/react_index_js_.createElement("div", {
        className: classnames_default()(prefixCls, className),
        style: style
      }, /*#__PURE__*/react_index_js_.createElement(rc_motion_es/* CSSMotionList */.V, {
        keys: noticeKeys,
        motionName: this.getTransitionName(),
        onVisibleChanged: function onVisibleChanged(changedVisible, _ref4) {
          var key = _ref4.key;

          if (!changedVisible) {
            delete _this2.noticePropsMap[key];
          }
        }
      }, function (_ref5) {
        var key = _ref5.key,
            motionClassName = _ref5.className,
            motionStyle = _ref5.style,
            visible = _ref5.visible;
        var _this2$noticePropsMap = _this2.noticePropsMap[key],
            noticeProps = _this2$noticePropsMap.props,
            holderCallback = _this2$noticePropsMap.holderCallback;

        if (holderCallback) {
          return /*#__PURE__*/react_index_js_.createElement("div", {
            key: key,
            className: classnames_default()(motionClassName, "".concat(prefixCls, "-hook-holder")),
            style: (0,objectSpread2/* default */.Z)({}, motionStyle),
            ref: function ref(div) {
              if (typeof key === 'undefined') {
                return;
              }

              if (div) {
                _this2.hookRefs.set(key, div);

                holderCallback(div, noticeProps);
              } else {
                _this2.hookRefs.delete(key);
              }
            }
          });
        }

        return /*#__PURE__*/react_index_js_.createElement(Notice, (0,esm_extends/* default */.Z)({}, noticeProps, {
          className: classnames_default()(motionClassName, noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.className),
          style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.style),
          visible: visible
        }));
      }));
    }
  }]);

  return Notification;
}(react_index_js_.Component);

Notification.newInstance = void 0;
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};

Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref6 = properties || {},
      getContainer = _ref6.getContainer,
      props = (0,objectWithoutProperties/* default */.Z)(_ref6, Notification_excluded);

  var div = document.createElement('div');

  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  var called = false;

  function ref(notification) {
    if (called) {
      return;
    }

    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },
      component: notification,
      destroy: function destroy() {
        unmount(div);

        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      },
      // Hooks
      useNotification: function useNotification() {
        return useNotification_useNotification(notification);
      }
    });
  } // Only used for test case usage


  if (false) {}

  render_render( /*#__PURE__*/react_index_js_.createElement(Notification, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref
  })), div);
};

/* harmony default export */ var es_Notification = (Notification);
;// CONCATENATED MODULE: ./node_modules/rc-notification/es/index.js

/* harmony default export */ var rc_notification_es = (es_Notification);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(1929);
;// CONCATENATED MODULE: ./node_modules/antd/es/message/hooks/useMessage.js






function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls;
    var getPopupContainer; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = useNotification_useNotification(proxy),
        _useRCNotification2 = (0,slicedToArray/* default */.Z)(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var rootPrefixCls = getPrefixCls();
      var target = args.key || getKeyThenIncreaseKey();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }

          return resolve(true);
        };

        getRcNotificationInstance((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
          prefixCls: mergedPrefixCls,
          rootPrefixCls: rootPrefixCls,
          getPopupContainer: getPopupContainer
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
              instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });

      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };

      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };

      result.promise = closePromise;
      return result;
    } // Fill functions


    var hookApiRef = react_index_js_.useRef({});
    hookApiRef.current.open = notify;
    typeList.forEach(function (type) {
      return attachTypeApi(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/react_index_js_.createElement(config_provider_context/* ConfigConsumer */.C, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      getPopupContainer = context.getPopupContainer;
      return holder;
    })];
  };

  return useMessage;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/message/index.js












var messageInstance;
var defaultDuration = 3;
var defaultTop;
var key = 1;
var localPrefixCls = '';
var transitionName = 'move-up';
var hasTransitionName = false;
var getContainer;
var maxCount;
var rtl = false;
function getKeyThenIncreaseKey() {
  return key++;
}

function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
    messageInstance = null; // delete messageInstance for new getContainer
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName

    hasTransitionName = true;
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getRCNotificationInstance(args, callback) {
  var customizePrefixCls = args.prefixCls,
      getContextPopupContainer = args.getPopupContainer;

  var _globalConfig = globalConfig(),
      getPrefixCls = _globalConfig.getPrefixCls,
      getRootPrefixCls = _globalConfig.getRootPrefixCls,
      getIconPrefixCls = _globalConfig.getIconPrefixCls;

  var prefixCls = getPrefixCls('message', customizePrefixCls || localPrefixCls);
  var rootPrefixCls = getRootPrefixCls(args.rootPrefixCls, prefixCls);
  var iconPrefixCls = getIconPrefixCls();

  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls,
      iconPrefixCls: iconPrefixCls,
      instance: messageInstance
    });
    return;
  }

  var instanceConfig = {
    prefixCls: prefixCls,
    transitionName: hasTransitionName ? transitionName : "".concat(rootPrefixCls, "-").concat(transitionName),
    style: {
      top: defaultTop
    },
    getContainer: getContainer || getContextPopupContainer,
    maxCount: maxCount
  };
  rc_notification_es.newInstance(instanceConfig, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        instance: messageInstance
      });
      return;
    }

    messageInstance = instance;

    if (false) {}

    callback({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls,
      iconPrefixCls: iconPrefixCls,
      instance: instance
    });
  });
}

var typeToIcon = {
  info: icons_InfoCircleFilled,
  success: icons_CheckCircleFilled,
  error: icons_CloseCircleFilled,
  warning: icons_ExclamationCircleFilled,
  loading: LoadingOutlined/* default */.Z
};
var typeList = Object.keys(typeToIcon);

function getRCNoticeProps(args, prefixCls, iconPrefixCls) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = typeToIcon[args.type];
  var messageClass = classnames_default()("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/react_index_js_.createElement(config_provider, {
      iconPrefixCls: iconPrefixCls
    }, /*#__PURE__*/react_index_js_.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/react_index_js_.createElement(IconComponent, null), /*#__PURE__*/react_index_js_.createElement("span", null, args.content))),
    onClose: args.onClose,
    onClick: args.onClick
  };
}

function notice(args) {
  var target = args.key || getKeyThenIncreaseKey();
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          iconPrefixCls = _ref.iconPrefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
        key: target,
        onClose: callback
      }), prefixCls, iconPrefixCls));
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
            removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
            destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}
typeList.forEach(function (type) {
  return attachTypeApi(api, type);
});
api.warn = api.warning;
api.useMessage = createUseMessage(getRCNotificationInstance, getRCNoticeProps);
/** @internal test Only function. Not work on production */

var getInstance = function getInstance() {
  return  false ? 0 : null;
};
/* harmony default export */ var message = (api);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
// This icon file is generated automatically.
var CloseOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
      }
    }]
  },
  "name": "close",
  "theme": "outlined"
};
/* harmony default export */ var asn_CloseOutlined = (CloseOutlined);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CloseOutlined.js
 // GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY





var CloseOutlined_CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/index_js_.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CloseOutlined
  }));
};

CloseOutlined_CloseOutlined.displayName = 'CloseOutlined';
/* harmony default export */ var icons_CloseOutlined = (/*#__PURE__*/index_js_.forwardRef(CloseOutlined_CloseOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/notification/hooks/useNotification.js





function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification = function useNotification() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = useNotification_useNotification(proxy),
        _useRCNotification2 = (0,slicedToArray/* default */.Z)(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = react_index_js_.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/react_index_js_.createElement(config_provider_context/* ConfigConsumer */.C, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/notification/index.js




var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};











var notificationInstance = {};
var notification_defaultDuration = 4.5;
var notification_defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = '';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var notification_rtl = false;
var notification_maxCount;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }

  if (duration !== undefined) {
    notification_defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    notification_defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    notification_rtl = options.rtl;
  }

  if (options.maxCount !== undefined) {
    notification_maxCount = options.maxCount;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : notification_defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'top':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottom':
      style = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: 'auto',
        bottom: bottom
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      customizePrefixCls = args.prefixCls;

  var _globalConfig = globalConfig(),
      getPrefixCls = _globalConfig.getPrefixCls,
      getIconPrefixCls = _globalConfig.getIconPrefixCls;

  var prefixCls = getPrefixCls('notification', customizePrefixCls || defaultPrefixCls);
  var iconPrefixCls = getIconPrefixCls();
  var cacheKey = "".concat(prefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: "".concat(prefixCls, "-notice"),
        iconPrefixCls: iconPrefixCls,
        instance: instance
      });
    });
    return;
  }

  var notificationClass = classnames_default()("".concat(prefixCls, "-").concat(placement), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), notification_rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    rc_notification_es.newInstance({
      prefixCls: prefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      maxCount: notification_maxCount
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: "".concat(prefixCls, "-notice"),
        iconPrefixCls: iconPrefixCls,
        instance: notification
      });
    });
  });
}

var notification_typeToIcon = {
  success: icons_CheckCircleOutlined,
  info: icons_InfoCircleOutlined,
  error: icons_CloseCircleOutlined,
  warning: icons_ExclamationCircleOutlined
};

function notification_getRCNoticeProps(args, prefixCls, iconPrefixCls) {
  var durationArg = args.duration,
      icon = args.icon,
      type = args.type,
      description = args.description,
      message = args.message,
      btn = args.btn,
      onClose = args.onClose,
      onClick = args.onClick,
      key = args.key,
      style = args.style,
      className = args.className,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon;
  var duration = durationArg === undefined ? notification_defaultDuration : durationArg;
  var iconNode = null;

  if (icon) {
    iconNode = /*#__PURE__*/react_index_js_.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (type) {
    iconNode = /*#__PURE__*/react_index_js_.createElement(notification_typeToIcon[type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
    });
  }

  var closeIconToRender = /*#__PURE__*/react_index_js_.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/react_index_js_.createElement(icons_CloseOutlined, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var autoMarginTag = !description && iconNode ? /*#__PURE__*/react_index_js_.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/react_index_js_.createElement(config_provider, {
      iconPrefixCls: iconPrefixCls
    }, /*#__PURE__*/react_index_js_.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/react_index_js_.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, message), /*#__PURE__*/react_index_js_.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description), btn ? /*#__PURE__*/react_index_js_.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, btn) : null)),
    duration: duration,
    closable: true,
    closeIcon: closeIconToRender,
    onClose: onClose,
    onClick: onClick,
    key: key,
    style: style || {},
    className: classnames_default()(className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-").concat(type), !!type))
  };
}

function notification_notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
        iconPrefixCls = _ref.iconPrefixCls,
        instance = _ref.instance;
    instance.notice(notification_getRCNoticeProps(args, prefixCls, iconPrefixCls));
  });
}

var notification_api = {
  open: notification_notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  notification_api[type] = function (args) {
    return notification_api.open((0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, args), {
      type: type
    }));
  };
});
notification_api.warn = notification_api.warning;
notification_api.useNotification = createUseNotification(getNotificationInstance, notification_getRCNoticeProps);
/** @internal test Only function. Not work on production */

var notification_getInstance = function getInstance(cacheKey) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return",  false ? 0 : null);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};
/* harmony default export */ var notification = (notification_api);
// EXTERNAL MODULE: ./node_modules/@ant-design/colors/dist/index.esm.js
var index_esm = __webpack_require__(6327);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/conversion.js
var conversion = __webpack_require__(3669);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var css_color_names = __webpack_require__(7586);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/format-input.js
var format_input = __webpack_require__(7763);
// EXTERNAL MODULE: ./node_modules/@ctrl/tinycolor/dist/module/util.js
var util = __webpack_require__(9521);
;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/index.js





var TinyColor =
/** @class */
function () {
  function TinyColor(color, opts) {
    if (color === void 0) {
      color = '';
    }

    if (opts === void 0) {
      opts = {};
    }

    var _a; // If input is already a tinycolor, return itself


    if (color instanceof TinyColor) {
      // eslint-disable-next-line no-constructor-return
      return color;
    }

    if (typeof color === 'number') {
      color = (0,conversion/* numberInputToObject */.Yt)(color);
    }

    this.originalInput = color;
    var rgb = (0,format_input/* inputToRGB */.uA)(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType; // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`

    if (this.r < 1) {
      this.r = Math.round(this.r);
    }

    if (this.g < 1) {
      this.g = Math.round(this.g);
    }

    if (this.b < 1) {
      this.b = Math.round(this.b);
    }

    this.isValid = rgb.ok;
  }

  TinyColor.prototype.isDark = function () {
    return this.getBrightness() < 128;
  };

  TinyColor.prototype.isLight = function () {
    return !this.isDark();
  };
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */


  TinyColor.prototype.getBrightness = function () {
    // http://www.w3.org/TR/AERT#color-contrast
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  };
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */


  TinyColor.prototype.getLuminance = function () {
    // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    var rgb = this.toRgb();
    var R;
    var G;
    var B;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;

    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }

    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }

    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }

    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  /**
   * Returns the alpha value of a color, from 0-1.
   */


  TinyColor.prototype.getAlpha = function () {
    return this.a;
  };
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */


  TinyColor.prototype.setAlpha = function (alpha) {
    this.a = (0,util/* boundAlpha */.Yq)(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  /**
   * Returns the object as a HSVA object.
   */


  TinyColor.prototype.toHsv = function () {
    var hsv = (0,conversion/* rgbToHsv */.py)(this.r, this.g, this.b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this.a
    };
  };
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */


  TinyColor.prototype.toHsvString = function () {
    var hsv = (0,conversion/* rgbToHsv */.py)(this.r, this.g, this.b);
    var h = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };
  /**
   * Returns the object as a HSLA object.
   */


  TinyColor.prototype.toHsl = function () {
    var hsl = (0,conversion/* rgbToHsl */.lC)(this.r, this.g, this.b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this.a
    };
  };
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */


  TinyColor.prototype.toHslString = function () {
    var hsl = (0,conversion/* rgbToHsl */.lC)(this.r, this.g, this.b);
    var h = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */


  TinyColor.prototype.toHex = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }

    return (0,conversion/* rgbToHex */.vq)(this.r, this.g, this.b, allow3Char);
  };
  /**
   * Returns the hex value of the color -with a # appened.
   * @param allow3Char will shorten hex value to 3 char if possible
   */


  TinyColor.prototype.toHexString = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }

    return '#' + this.toHex(allow3Char);
  };
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */


  TinyColor.prototype.toHex8 = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }

    return (0,conversion/* rgbaToHex */.s)(this.r, this.g, this.b, this.a, allow4Char);
  };
  /**
   * Returns the hex 8 value of the color -with a # appened.
   * @param allow4Char will shorten hex value to 4 char if possible
   */


  TinyColor.prototype.toHex8String = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }

    return '#' + this.toHex8(allow4Char);
  };
  /**
   * Returns the object as a RGBA object.
   */


  TinyColor.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */


  TinyColor.prototype.toRgbString = function () {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
  };
  /**
   * Returns the object as a RGBA object.
   */


  TinyColor.prototype.toPercentageRgb = function () {
    var fmt = function fmt(x) {
      return "".concat(Math.round((0,util/* bound01 */.sh)(x, 255) * 100), "%");
    };

    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  /**
   * Returns the RGBA relative values interpolated into a string
   */


  TinyColor.prototype.toPercentageRgbString = function () {
    var rnd = function rnd(x) {
      return Math.round((0,util/* bound01 */.sh)(x, 255) * 100);
    };

    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  /**
   * The 'real' name of the color -if there is one.
   */


  TinyColor.prototype.toName = function () {
    if (this.a === 0) {
      return 'transparent';
    }

    if (this.a < 1) {
      return false;
    }

    var hex = '#' + (0,conversion/* rgbToHex */.vq)(this.r, this.g, this.b, false);

    for (var _i = 0, _a = Object.entries(css_color_names/* names */.R); _i < _a.length; _i++) {
      var _b = _a[_i],
          key = _b[0],
          value = _b[1];

      if (hex === value) {
        return key;
      }
    }

    return false;
  };

  TinyColor.prototype.toString = function (format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');

    if (needsAlphaFormat) {
      // Special case for "transparent", all other non-alpha formats
      // will return rgba when there is transparency.
      if (format === 'name' && this.a === 0) {
        return this.toName();
      }

      return this.toRgbString();
    }

    if (format === 'rgb') {
      formattedString = this.toRgbString();
    }

    if (format === 'prgb') {
      formattedString = this.toPercentageRgbString();
    }

    if (format === 'hex' || format === 'hex6') {
      formattedString = this.toHexString();
    }

    if (format === 'hex3') {
      formattedString = this.toHexString(true);
    }

    if (format === 'hex4') {
      formattedString = this.toHex8String(true);
    }

    if (format === 'hex8') {
      formattedString = this.toHex8String();
    }

    if (format === 'name') {
      formattedString = this.toName();
    }

    if (format === 'hsl') {
      formattedString = this.toHslString();
    }

    if (format === 'hsv') {
      formattedString = this.toHsvString();
    }

    return formattedString || this.toHexString();
  };

  TinyColor.prototype.toNumber = function () {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };

  TinyColor.prototype.clone = function () {
    return new TinyColor(this.toString());
  };
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */


  TinyColor.prototype.lighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = (0,util/* clamp01 */.V2)(hsl.l);
    return new TinyColor(hsl);
  };
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */


  TinyColor.prototype.brighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor(rgb);
  };
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */


  TinyColor.prototype.darken = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = (0,util/* clamp01 */.V2)(hsl.l);
    return new TinyColor(hsl);
  };
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */


  TinyColor.prototype.tint = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    return this.mix('white', amount);
  };
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */


  TinyColor.prototype.shade = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    return this.mix('black', amount);
  };
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */


  TinyColor.prototype.desaturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = (0,util/* clamp01 */.V2)(hsl.s);
    return new TinyColor(hsl);
  };
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */


  TinyColor.prototype.saturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }

    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = (0,util/* clamp01 */.V2)(hsl.s);
    return new TinyColor(hsl);
  };
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */


  TinyColor.prototype.greyscale = function () {
    return this.desaturate(100);
  };
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */


  TinyColor.prototype.spin = function (amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor(hsl);
  };
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */


  TinyColor.prototype.mix = function (color, amount) {
    if (amount === void 0) {
      amount = 50;
    }

    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor(rgba);
  };

  TinyColor.prototype.analogous = function (results, slices) {
    if (results === void 0) {
      results = 6;
    }

    if (slices === void 0) {
      slices = 30;
    }

    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];

    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor(hsl));
    }

    return ret;
  };
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */


  TinyColor.prototype.complement = function () {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor(hsl);
  };

  TinyColor.prototype.monochromatic = function (results) {
    if (results === void 0) {
      results = 6;
    }

    var hsv = this.toHsv();
    var h = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;

    while (results--) {
      res.push(new TinyColor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }

    return res;
  };

  TinyColor.prototype.splitcomplement = function () {
    var hsl = this.toHsl();
    var h = hsl.h;
    return [this, new TinyColor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), new TinyColor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  };
  /**
   * Compute how the color would appear on a background
   */


  TinyColor.prototype.onBackground = function (background) {
    var fg = this.toRgb();
    var bg = new TinyColor(background).toRgb();
    return new TinyColor({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  /**
   * Alias for `polyad(3)`
   */


  TinyColor.prototype.triad = function () {
    return this.polyad(3);
  };
  /**
   * Alias for `polyad(4)`
   */


  TinyColor.prototype.tetrad = function () {
    return this.polyad(4);
  };
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */


  TinyColor.prototype.polyad = function (n) {
    var hsl = this.toHsl();
    var h = hsl.h;
    var result = [this];
    var increment = 360 / n;

    for (var i = 1; i < n; i++) {
      result.push(new TinyColor({
        h: (h + i * increment) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }

    return result;
  };
  /**
   * compare color vs current color
   */


  TinyColor.prototype.equals = function (color) {
    return this.toRgbString() === new TinyColor(color).toRgbString();
  };

  return TinyColor;
}();

 // kept for backwards compatability with v1

function tinycolor(color, opts) {
  if (color === void 0) {
    color = '';
  }

  if (opts === void 0) {
    opts = {};
  }

  return new TinyColor(color, opts);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(4937);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(5561);
;// CONCATENATED MODULE: ./node_modules/antd/es/config-provider/cssVariables.js
/* eslint-disable import/prefer-default-export, prefer-destructuring */





var dynamicStyleMark = "-ant-".concat(Date.now(), "-").concat(Math.random());
function getStyle(globalPrefixCls, theme) {
  var variables = {};

  var formatColor = function formatColor(color, updater) {
    var clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };

  var fillColor = function fillColor(colorVal, type) {
    var baseColor = new TinyColor(colorVal);
    var colorPalettes = (0,index_esm/* generate */.R_)(baseColor.toRgbString());
    variables["".concat(type, "-color")] = formatColor(baseColor);
    variables["".concat(type, "-color-disabled")] = colorPalettes[1];
    variables["".concat(type, "-color-hover")] = colorPalettes[4];
    variables["".concat(type, "-color-active")] = colorPalettes[6];
    variables["".concat(type, "-color-outline")] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[0];
    variables["".concat(type, "-color-deprecated-border")] = colorPalettes[2];
  }; // ================ Primary Color ================


  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    var primaryColor = new TinyColor(theme.primaryColor);
    var primaryColors = (0,index_esm/* generate */.R_)(primaryColor.toRgbString()); // Legacy - We should use semantic naming standard

    primaryColors.forEach(function (color, index) {
      variables["primary-".concat(index + 1)] = color;
    }); // Deprecated

    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, function (c) {
      return c.lighten(35);
    });
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, function (c) {
      return c.lighten(20);
    });
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, function (c) {
      return c.tint(20);
    });
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, function (c) {
      return c.tint(50);
    });
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, function (c) {
      return c.setAlpha(c.getAlpha() * 0.12);
    });
    var primaryActiveColor = new TinyColor(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, function (c) {
      return c.setAlpha(c.getAlpha() * 0.3);
    });
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, function (c) {
      return c.darken(2);
    });
  } // ================ Success Color ================


  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  } // ================ Warning Color ================


  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  } // ================= Error Color =================


  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  } // ================= Info Color ==================


  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  } // Convert to css variables


  var cssList = Object.keys(variables).map(function (key) {
    return "--".concat(globalPrefixCls, "-").concat(key, ": ").concat(variables[key], ";");
  });
  return "\n  :root {\n    ".concat(cssList.join('\n'), "\n  }\n  ").trim();
}
function registerTheme(globalPrefixCls, theme) {
  var style = getStyle(globalPrefixCls, theme);

  if ((0,canUseDom/* default */.Z)()) {
    (0,dynamicCSS/* updateCSS */.hq)(style, "".concat(dynamicStyleMark, "-dynamic-theme"));
  } else {
     false ? 0 : void 0;
  }
}
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(9125);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(1815);
;// CONCATENATED MODULE: ./node_modules/antd/es/config-provider/index.js















var configConsumerProps = (/* unused pure expression or super */ null && (['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'])); // These props is used by `useContext` directly in sub component

var PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form'];
var config_provider_defaultPrefixCls = 'ant';
var defaultIconPrefixCls = 'anticon';
var globalPrefixCls;
var globalIconPrefixCls;

function getGlobalPrefixCls() {
  return globalPrefixCls || config_provider_defaultPrefixCls;
}

function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}

var setGlobalConfig = function setGlobalConfig(_ref) {
  var prefixCls = _ref.prefixCls,
      iconPrefixCls = _ref.iconPrefixCls,
      theme = _ref.theme;

  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }

  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }

  if (theme) {
    registerTheme(getGlobalPrefixCls(), theme);
  }
};

var globalConfig = function globalConfig() {
  return {
    getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
    },
    getIconPrefixCls: getGlobalIconPrefixCls,
    getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
      // Customize rootPrefixCls is first priority
      if (rootPrefixCls) {
        return rootPrefixCls;
      } // If Global prefixCls provided, use this


      if (globalPrefixCls) {
        return globalPrefixCls;
      } // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls


      if (customizePrefixCls && customizePrefixCls.includes('-')) {
        return customizePrefixCls.replace(/^(.*)-[^-]*$/, '$1');
      } // Fallback to default prefixCls


      return getGlobalPrefixCls();
    }
  };
};

var ProviderChildren = function ProviderChildren(props) {
  var _a, _b;

  var children = props.children,
      csp = props.csp,
      autoInsertSpaceInButton = props.autoInsertSpaceInButton,
      form = props.form,
      locale = props.locale,
      componentSize = props.componentSize,
      direction = props.direction,
      space = props.space,
      virtual = props.virtual,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      legacyLocale = props.legacyLocale,
      parentContext = props.parentContext,
      iconPrefixCls = props.iconPrefixCls,
      componentDisabled = props.componentDisabled;
  var getPrefixCls = react_index_js_.useCallback(function (suffixCls, customizePrefixCls) {
    var prefixCls = props.prefixCls;
    if (customizePrefixCls) return customizePrefixCls;
    var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);

  var config = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, parentContext), {
    csp: csp,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction: direction,
    space: space,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    getPrefixCls: getPrefixCls
  }); // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.


  PASSED_PROPS.forEach(function (propName) {
    var propValue = props[propName];

    if (propValue) {
      config[propName] = propValue;
    }
  }); // https://github.com/ant-design/ant-design/issues/27617

  var memoedConfig = (0,useMemo/* default */.Z)(function () {
    return config;
  }, config, function (prevConfig, currentConfig) {
    var prevKeys = Object.keys(prevConfig);
    var currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(function (key) {
      return prevConfig[key] !== currentConfig[key];
    });
  });
  var memoIconContextValue = react_index_js_.useMemo(function () {
    return {
      prefixCls: iconPrefixCls,
      csp: csp
    };
  }, [iconPrefixCls, csp]);
  var childNode = children; // Additional Form provider

  var validateMessages = {};

  if (locale) {
    validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = locale_default.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
  }

  if (form && form.validateMessages) {
    validateMessages = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, validateMessages), form.validateMessages);
  }

  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/react_index_js_.createElement(FormProvider, {
      validateMessages: validateMessages
    }, children);
  }

  if (locale) {
    childNode = /*#__PURE__*/react_index_js_.createElement(LocaleProvider, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }

  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/react_index_js_.createElement(Context/* default.Provider */.Z.Provider, {
      value: memoIconContextValue
    }, childNode);
  }

  if (componentSize) {
    childNode = /*#__PURE__*/react_index_js_.createElement(SizeContext/* SizeContextProvider */.q, {
      size: componentSize
    }, childNode);
  }

  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/react_index_js_.createElement(DisabledContext/* DisabledContextProvider */.n, {
      disabled: componentDisabled
    }, childNode);
  }

  return /*#__PURE__*/react_index_js_.createElement(config_provider_context/* ConfigContext.Provider */.E_.Provider, {
    value: memoedConfig
  }, childNode);
};

var ConfigProvider = function ConfigProvider(props) {
  react_index_js_.useEffect(function () {
    if (props.direction) {
      message.config({
        rtl: props.direction === 'rtl'
      });
      notification.config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);
  return /*#__PURE__*/react_index_js_.createElement(LocaleReceiver, null, function (_, __, legacyLocale) {
    return /*#__PURE__*/react_index_js_.createElement(config_provider_context/* ConfigConsumer */.C, null, function (context) {
      return /*#__PURE__*/react_index_js_.createElement(ProviderChildren, (0,esm_extends/* default */.Z)({
        parentContext: context,
        legacyLocale: legacyLocale
      }, props));
    });
  });
};
/** @private internal Usage. do not use in your production */


ConfigProvider.ConfigContext = config_provider_context/* ConfigContext */.E_;
ConfigProvider.SizeContext = SizeContext/* default */.Z;
ConfigProvider.config = setGlobalConfig;
/* harmony default export */ var config_provider = (ConfigProvider);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(8368);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(7309);
// EXTERNAL MODULE: ./node_modules/antd/es/button/button.js + 6 modules
var button_button = __webpack_require__(3895);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/ActionButton.js







function isThenable(thing) {
  return !!(thing && !!thing.then);
}

var ActionButton = function ActionButton(props) {
  var clickedRef = react_index_js_.useRef(false);
  var ref = react_index_js_.useRef();

  var _useState = (0,useState/* default */.Z)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var close = props.close;

  var onInternalClose = function onInternalClose() {
    close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
  };

  react_index_js_.useEffect(function () {
    var timeoutId;

    if (props.autoFocus) {
      var $this = ref.current;
      timeoutId = setTimeout(function () {
        return $this.focus();
      });
    }

    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }

    setLoading(true);
    returnValueOfOnOk.then(function () {
      setLoading(false, true);
      onInternalClose.apply(void 0, arguments);
      clickedRef.current = false;
    }, function (e) {
      // Emit error when catch promise reject
      // eslint-disable-next-line no-console
      console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

      setLoading(false, true);
      clickedRef.current = false;
    });
  };

  var onClick = function onClick(e) {
    var actionFn = props.actionFn;

    if (clickedRef.current) {
      return;
    }

    clickedRef.current = true;

    if (!actionFn) {
      onInternalClose();
      return;
    }

    var returnValueOfOnOk;

    if (props.emitEvent) {
      returnValueOfOnOk = actionFn(e);

      if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close); // https://github.com/ant-design/ant-design/issues/23358

      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();

      if (!returnValueOfOnOk) {
        onInternalClose();
        return;
      }
    }

    handlePromiseOnOk(returnValueOfOnOk);
  };

  var type = props.type,
      children = props.children,
      prefixCls = props.prefixCls,
      buttonProps = props.buttonProps;
  return /*#__PURE__*/react_index_js_.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, (0,button_button/* convertLegacyProps */.n)(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: ref
  }), children);
};

/* harmony default export */ var _util_ActionButton = (ActionButton);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var _util_type = __webpack_require__(9393);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/motion.js
 // ================== Collapse Motion ==================

var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  var scrollHeight = node.scrollHeight;
  return {
    height: scrollHeight,
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node ? node.offsetHeight : 0
  };
};

var skipOpacityTransition = function skipOpacityTransition(_, event) {
  return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
};

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
};
var SelectPlacements = (0,_util_type/* tuple */.b)('bottomLeft', 'bottomRight', 'topLeft', 'topRight');

var getTransitionDirection = function getTransitionDirection(placement) {
  if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
    return "slide-down";
  }

  return "slide-up";
};

var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
  if (transitionName !== undefined) {
    return transitionName;
  }

  return "".concat(rootPrefixCls, "-").concat(motion);
};


/* harmony default export */ var motion = ((/* unused pure expression or super */ null && (collapseMotion)));
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5314);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Portal.js



var Portal = /*#__PURE__*/(0,react_index_js_.forwardRef)(function (props, ref) {
  var didUpdate = props.didUpdate,
      getContainer = props.getContainer,
      children = props.children;
  var parentRef = (0,react_index_js_.useRef)();
  var containerRef = (0,react_index_js_.useRef)(); // Ref return nothing, only for wrapper check exist

  (0,react_index_js_.useImperativeHandle)(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = (0,react_index_js_.useRef)(false);

  if (!initRef.current && (0,canUseDom/* default */.Z)()) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current.parentNode;
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`


  (0,react_index_js_.useEffect)(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  (0,react_index_js_.useEffect)(function () {
    // Restore container to original place
    // React 18 StrictMode will unmount first and mount back for effect test:
    // https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
    if (containerRef.current.parentNode === null && parentRef.current !== null) {
      parentRef.current.appendChild(containerRef.current);
    }

    return function () {
      var _containerRef$current, _containerRef$current2; // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.


      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /*#__PURE__*/react_dom_index_js_default().createPortal(children, containerRef.current) : null;
});
/* harmony default export */ var es_Portal = (Portal);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/getScrollBarSize.js
/* eslint-disable no-param-reassign */
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}

function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }

  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
      width = _getComputedStyle.width,
      height = _getComputedStyle.height;

  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-util/es/setStyle.js
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!style) {
    return {};
  }

  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ var es_setStyle = (setStyle);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/switchScrollingEffect.js



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ var switchScrollingEffect = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    es_setStyle(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = getScrollBarSize();

  if (scrollBarSize) {
    cacheStyle = es_setStyle({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/scrollLocker.js





var uuid = 0;
var locks = [];
var scrollingEffectClassName = 'ant-scrolling-effect';
var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g'); // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var scrollLocker_cacheStyle = new Map();

var ScrollLocker = /*#__PURE__*/(0,createClass/* default */.Z)(function ScrollLocker(_options) {
  var _this = this;

  (0,classCallCheck/* default */.Z)(this, ScrollLocker);

  this.lockTarget = void 0;
  this.options = void 0;

  this.getContainer = function () {
    var _this$options;

    return (_this$options = _this.options) === null || _this$options === void 0 ? void 0 : _this$options.container;
  };

  this.reLock = function (options) {
    var findLock = locks.find(function (_ref) {
      var target = _ref.target;
      return target === _this.lockTarget;
    });

    if (findLock) {
      _this.unLock();
    }

    _this.options = options;

    if (findLock) {
      findLock.options = options;

      _this.lock();
    }
  };

  this.lock = function () {
    var _this$options3; // If lockTarget exist return


    if (locks.some(function (_ref2) {
      var target = _ref2.target;
      return target === _this.lockTarget;
    })) {
      return;
    } // If same container effect, return


    if (locks.some(function (_ref3) {
      var _this$options2;

      var options = _ref3.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.container);
    })) {
      locks = [].concat(_toConsumableArray(locks), [{
        target: _this.lockTarget,
        options: _this.options
      }]);
      return;
    }

    var scrollBarSize = 0;
    var container = ((_this$options3 = _this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.container) || document.body;

    if (container === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || container.scrollHeight > container.clientHeight) {
      scrollBarSize = getScrollBarSize();
    }

    var containerClassName = container.className;

    if (locks.filter(function (_ref4) {
      var _this$options4;

      var options = _ref4.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options4 = _this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.container);
    }).length === 0) {
      scrollLocker_cacheStyle.set(container, es_setStyle({
        width: scrollBarSize !== 0 ? "calc(100% - ".concat(scrollBarSize, "px)") : undefined,
        overflow: 'hidden',
        overflowX: 'hidden',
        overflowY: 'hidden'
      }, {
        element: container
      }));
    } // https://github.com/ant-design/ant-design/issues/19729


    if (!scrollingEffectClassNameReg.test(containerClassName)) {
      var addClassName = "".concat(containerClassName, " ").concat(scrollingEffectClassName);
      container.className = addClassName.trim();
    }

    locks = [].concat(_toConsumableArray(locks), [{
      target: _this.lockTarget,
      options: _this.options
    }]);
  };

  this.unLock = function () {
    var _this$options5;

    var findLock = locks.find(function (_ref5) {
      var target = _ref5.target;
      return target === _this.lockTarget;
    });
    locks = locks.filter(function (_ref6) {
      var target = _ref6.target;
      return target !== _this.lockTarget;
    });

    if (!findLock || locks.some(function (_ref7) {
      var _findLock$options;

      var options = _ref7.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_findLock$options = findLock.options) === null || _findLock$options === void 0 ? void 0 : _findLock$options.container);
    })) {
      return;
    } // Remove Effect


    var container = ((_this$options5 = _this.options) === null || _this$options5 === void 0 ? void 0 : _this$options5.container) || document.body;
    var containerClassName = container.className;
    if (!scrollingEffectClassNameReg.test(containerClassName)) return;
    es_setStyle(scrollLocker_cacheStyle.get(container), {
      element: container
    });
    scrollLocker_cacheStyle.delete(container);
    container.className = container.className.replace(scrollingEffectClassNameReg, '').trim();
  }; // eslint-disable-next-line no-plusplus


  this.lockTarget = uuid++;
  this.options = _options;
});


;// CONCATENATED MODULE: ./node_modules/rc-util/es/PortalWrapper.js





/* eslint-disable no-underscore-dangle,react/require-default-props */








var openCount = 0;
var supportDom = (0,canUseDom/* default */.Z)();
/** @private Test usage only */

function getOpenCount() {
  return  false ? 0 : 0;
} // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }

  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }

    if (typeof getContainer === 'function') {
      return getContainer();
    }

    if ((0,esm_typeof/* default */.Z)(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }

  return document.body;
};

var PortalWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(PortalWrapper, _React$Component);

  var _super = (0,createSuper/* default */.Z)(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, PortalWrapper);

    _this = _super.call(this, props);
    _this.container = void 0;
    _this.componentRef = /*#__PURE__*/react_index_js_.createRef();
    _this.rafId = void 0;
    _this.scrollLocker = void 0;
    _this.renderComponent = void 0;

    _this.updateScrollLocker = function (prevProps) {
      var _ref = prevProps || {},
          prevVisible = _ref.visible;

      var _this$props = _this.props,
          getContainer = _this$props.getContainer,
          visible = _this$props.visible;

      if (visible && visible !== prevVisible && supportDom && getParent(getContainer) !== _this.scrollLocker.getContainer()) {
        _this.scrollLocker.reLock({
          container: getParent(getContainer)
        });
      }
    };

    _this.updateOpenCount = function (prevProps) {
      var _ref2 = prevProps || {},
          prevVisible = _ref2.visible,
          prevGetContainer = _ref2.getContainer;

      var _this$props2 = _this.props,
          visible = _this$props2.visible,
          getContainer = _this$props2.getContainer; // Update count

      if (visible !== prevVisible && supportDom && getParent(getContainer) === document.body) {
        if (visible && !prevVisible) {
          openCount += 1;
        } else if (prevProps) {
          openCount -= 1;
        }
      } // Clean up container if needed


      var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

      if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
        _this.removeCurrentContainer();
      }
    };

    _this.attachToParent = function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force || _this.container && !_this.container.parentNode) {
        var parent = getParent(_this.props.getContainer);

        if (parent) {
          parent.appendChild(_this.container);
          return true;
        }

        return false;
      }

      return true;
    };

    _this.getContainer = function () {
      if (!supportDom) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        _this.attachToParent(true);
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.removeCurrentContainer = function () {
      var _this$container, _this$container$paren; // Portal will remove from `parentNode`.
      // Let's handle this again to avoid refactor issue.


      (_this$container = _this.container) === null || _this$container === void 0 ? void 0 : (_this$container$paren = _this$container.parentNode) === null || _this$container$paren === void 0 ? void 0 : _this$container$paren.removeChild(_this.container);
    };

    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        switchScrollingEffect(); // Must be set after switchScrollingEffect

        cacheOverflow = es_setStyle({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        es_setStyle(cacheOverflow);
        cacheOverflow = {};
        switchScrollingEffect(true);
      }
    };

    _this.scrollLocker = new ScrollLocker({
      container: getParent(props.getContainer)
    });
    return _this;
  }

  (0,createClass/* default */.Z)(PortalWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateOpenCount();

      if (!this.attachToParent()) {
        this.rafId = (0,raf/* default */.Z)(function () {
          _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateOpenCount(prevProps);
      this.updateScrollLocker(prevProps);
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
          visible = _this$props3.visible,
          getContainer = _this$props3.getContainer;

      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }

      this.removeCurrentContainer();
      raf/* default.cancel */.Z.cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          forceRender = _this$props4.forceRender,
          visible = _this$props4.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      };

      if (forceRender || visible || this.componentRef.current) {
        portal = /*#__PURE__*/react_index_js_.createElement(es_Portal, {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, children(childProps));
      }

      return portal;
    }
  }]);

  return PortalWrapper;
}(react_index_js_.Component);

/* harmony default export */ var es_PortalWrapper = (PortalWrapper);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ var es_KeyCode = (KeyCode);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useId.js




function getUseId() {
  // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
  var fullClone = (0,objectSpread2/* default */.Z)({}, react_index_js_);

  return fullClone.useId;
}

var useId_uuid = 0;
/** @private Note only worked in develop env. Not work in production. */

function resetUuid() {
  if (false) {}
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react_index_js_.useState('ssr-id'),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerId = _React$useState2[0],
      setInnerId = _React$useState2[1];

  var useOriginId = getUseId();
  var reactNativeId = useOriginId === null || useOriginId === void 0 ? void 0 : useOriginId();
  react_index_js_.useEffect(function () {
    if (!useOriginId) {
      var nextId = useId_uuid;
      useId_uuid += 1;
      setInnerId("rc_unique_".concat(nextId));
    }
  }, []); // Developer passed id is single source of truth

  if (id) {
    return id;
  } // Test env always return mock id


  if (false) {} // Return react native id or inner id


  return reactNativeId || innerId;
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/contains.js
var contains = __webpack_require__(520);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/pickAttrs.js

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */

var ariaPrefix = 'aria-';
var dataPrefix = 'data-';

function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */


function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;

  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,objectSpread2/* default */.Z)({}, ariaOnly);
  }

  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if ( // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) || // Data
    mergedConfig.data && match(key, dataPrefix) || // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Mask.js





function Mask(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      visible = props.visible,
      maskProps = props.maskProps,
      motionName = props.motionName;
  return /*#__PURE__*/react_index_js_.createElement(rc_motion_es/* default */.Z, {
    key: "mask",
    visible: visible,
    motionName: motionName,
    leavedClassName: "".concat(prefixCls, "-mask-hidden")
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/react_index_js_.createElement("div", (0,esm_extends/* default */.Z)({
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style),
      className: classnames_default()("".concat(prefixCls, "-mask"), motionClassName)
    }, maskProps));
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/util.js
// =============================== Motion ===============================
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;

  if (!motionName && animationName) {
    motionName = "".concat(prefixCls, "-").concat(animationName);
  }

  return motionName;
} // =============================== Offset ===============================

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }

  return ret;
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js

/* harmony default export */ var MemoChildren = (/*#__PURE__*/react_index_js_.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, _ref2) {
  var shouldUpdate = _ref2.shouldUpdate;
  return !shouldUpdate;
}));
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/Panel.js





var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var Panel = /*#__PURE__*/react_index_js_default().forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      title = props.title,
      ariaId = props.ariaId,
      footer = props.footer,
      closable = props.closable,
      closeIcon = props.closeIcon,
      onClose = props.onClose,
      children = props.children,
      bodyStyle = props.bodyStyle,
      bodyProps = props.bodyProps,
      modalRender = props.modalRender,
      onMouseDown = props.onMouseDown,
      onMouseUp = props.onMouseUp,
      holderRef = props.holderRef,
      visible = props.visible,
      forceRender = props.forceRender,
      width = props.width,
      height = props.height; // ================================= Refs =================================

  var sentinelStartRef = (0,react_index_js_.useRef)();
  var sentinelEndRef = (0,react_index_js_.useRef)();
  react_index_js_default().useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;

        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
            activeElement = _document.activeElement;

        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  }); // ================================ Style =================================

  var contentStyle = {};

  if (width !== undefined) {
    contentStyle.width = width;
  }

  if (height !== undefined) {
    contentStyle.height = height;
  } // ================================ Render ================================


  var footerNode;

  if (footer) {
    footerNode = /*#__PURE__*/react_index_js_default().createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, footer);
  }

  var headerNode;

  if (title) {
    headerNode = /*#__PURE__*/react_index_js_default().createElement("div", {
      className: "".concat(prefixCls, "-header")
    }, /*#__PURE__*/react_index_js_default().createElement("div", {
      className: "".concat(prefixCls, "-title"),
      id: ariaId
    }, title));
  }

  var closer;

  if (closable) {
    closer = /*#__PURE__*/react_index_js_default().createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close")
    }, closeIcon || /*#__PURE__*/react_index_js_default().createElement("span", {
      className: "".concat(prefixCls, "-close-x")
    }));
  }

  var content = /*#__PURE__*/react_index_js_default().createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, closer, headerNode, /*#__PURE__*/react_index_js_default().createElement("div", (0,esm_extends/* default */.Z)({
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, bodyProps), children), footerNode);
  return /*#__PURE__*/react_index_js_default().createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": title ? ariaId : null,
    "aria-modal": "true",
    ref: holderRef,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), contentStyle),
    className: classnames_default()(prefixCls, className),
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  }, /*#__PURE__*/react_index_js_default().createElement("div", {
    tabIndex: 0,
    ref: sentinelStartRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }), /*#__PURE__*/react_index_js_default().createElement(MemoChildren, {
    shouldUpdate: visible || forceRender
  }, modalRender ? modalRender(content) : content), /*#__PURE__*/react_index_js_default().createElement("div", {
    tabIndex: 0,
    ref: sentinelEndRef,
    style: sentinelStyle,
    "aria-hidden": "true"
  }));
});

if (false) {}

/* harmony default export */ var Content_Panel = (Panel);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/Content/index.js









var Content = /*#__PURE__*/react_index_js_.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      title = props.title,
      style = props.style,
      className = props.className,
      visible = props.visible,
      forceRender = props.forceRender,
      destroyOnClose = props.destroyOnClose,
      motionName = props.motionName,
      ariaId = props.ariaId,
      onVisibleChanged = props.onVisibleChanged,
      mousePosition = props.mousePosition;
  var dialogRef = (0,react_index_js_.useRef)(); // ============================= Style ==============================

  var _React$useState = react_index_js_.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      transformOrigin = _React$useState2[0],
      setTransformOrigin = _React$useState2[1];

  var contentStyle = {};

  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }

  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(mousePosition ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
  } // ============================= Render =============================


  return /*#__PURE__*/react_index_js_.createElement(rc_motion_es/* default */.Z, {
    visible: visible,
    onVisibleChanged: onVisibleChanged,
    onAppearPrepare: onPrepare,
    onEnterPrepare: onPrepare,
    forceRender: forceRender,
    motionName: motionName,
    removeOnLeave: destroyOnClose,
    ref: dialogRef
  }, function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/react_index_js_.createElement(Content_Panel, (0,esm_extends/* default */.Z)({}, props, {
      ref: ref,
      title: title,
      ariaId: ariaId,
      prefixCls: prefixCls,
      holderRef: motionRef,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), style), contentStyle),
      className: classnames_default()(className, motionClassName)
    }));
  });
});
Content.displayName = 'Content';
/* harmony default export */ var Dialog_Content = (Content);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/Dialog/index.js













function Dialog(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
      zIndex = props.zIndex,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      _props$keyboard = props.keyboard,
      keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
      _props$focusTriggerAf = props.focusTriggerAfterClose,
      focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
      scrollLocker = props.scrollLocker,
      wrapStyle = props.wrapStyle,
      wrapClassName = props.wrapClassName,
      wrapProps = props.wrapProps,
      onClose = props.onClose,
      afterClose = props.afterClose,
      transitionName = props.transitionName,
      animation = props.animation,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? true : _props$closable,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      maskStyle = props.maskStyle,
      maskProps = props.maskProps,
      rootClassName = props.rootClassName;
  var lastOutSideActiveElementRef = (0,react_index_js_.useRef)();
  var wrapperRef = (0,react_index_js_.useRef)();
  var contentRef = (0,react_index_js_.useRef)();

  var _React$useState = react_index_js_.useState(visible),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      animatedVisible = _React$useState2[0],
      setAnimatedVisible = _React$useState2[1]; // ========================== Init ==========================


  var ariaId = useId(); // ========================= Events =========================

  function onDialogVisibleChanged(newVisible) {
    if (newVisible) {
      // Try to focus
      if (!(0,contains/* default */.Z)(wrapperRef.current, document.activeElement)) {
        var _contentRef$current;

        lastOutSideActiveElementRef.current = document.activeElement;
        (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.focus();
      }
    } else {
      // Clean up scroll bar & focus back
      setAnimatedVisible(false);

      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {// Do nothing
        }

        lastOutSideActiveElementRef.current = null;
      } // Trigger afterClose only when change visible from true to false


      if (animatedVisible) {
        afterClose === null || afterClose === void 0 ? void 0 : afterClose();
      }
    }
  }

  function onInternalClose(e) {
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
  } // >>> Content


  var contentClickRef = (0,react_index_js_.useRef)(false);
  var contentTimeoutRef = (0,react_index_js_.useRef)(); // We need record content click incase content popup out of dialog

  var onContentMouseDown = function onContentMouseDown() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };

  var onContentMouseUp = function onContentMouseUp() {
    contentTimeoutRef.current = setTimeout(function () {
      contentClickRef.current = false;
    });
  }; // >>> Wrapper
  // Close only when element not on dialog


  var onWrapperClick = null;

  if (maskClosable) {
    onWrapperClick = function onWrapperClick(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }

  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === es_KeyCode.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    } // keep focus inside dialog


    if (visible) {
      if (e.keyCode === es_KeyCode.TAB) {
        contentRef.current.changeActive(!e.shiftKey);
      }
    }
  } // ========================= Effect =========================


  (0,react_index_js_.useEffect)(function () {
    if (visible) {
      setAnimatedVisible(true);
    }

    return function () {};
  }, [visible]); // Remove direct should also check the scroll bar update

  (0,react_index_js_.useEffect)(function () {
    return function () {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  (0,react_index_js_.useEffect)(function () {
    if (animatedVisible) {
      scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
      return scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock;
    }

    return function () {};
  }, [animatedVisible, scrollLocker]); // ========================= Render =========================

  return /*#__PURE__*/react_index_js_.createElement("div", (0,esm_extends/* default */.Z)({
    className: classnames_default()("".concat(prefixCls, "-root"), rootClassName)
  }, pickAttrs(props, {
    data: true
  })), /*#__PURE__*/react_index_js_.createElement(Mask, {
    prefixCls: prefixCls,
    visible: mask && visible,
    motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
    style: (0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, maskStyle),
    maskProps: maskProps
  }), /*#__PURE__*/react_index_js_.createElement("div", (0,esm_extends/* default */.Z)({
    tabIndex: -1,
    onKeyDown: onWrapperKeyDown,
    className: classnames_default()("".concat(prefixCls, "-wrap"), wrapClassName),
    ref: wrapperRef,
    onClick: onWrapperClick,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      zIndex: zIndex
    }, wrapStyle), {}, {
      display: !animatedVisible ? 'none' : null
    })
  }, wrapProps), /*#__PURE__*/react_index_js_.createElement(Dialog_Content, (0,esm_extends/* default */.Z)({}, props, {
    onMouseDown: onContentMouseDown,
    onMouseUp: onContentMouseUp,
    ref: contentRef,
    closable: closable,
    ariaId: ariaId,
    prefixCls: prefixCls,
    visible: visible,
    onClose: onInternalClose,
    onVisibleChanged: onDialogVisibleChanged,
    motionName: getMotionName(prefixCls, transitionName, animation)
  }))));
}
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/DialogWrap.js




 // fix issue #10656

/*
 * getContainer remarks
 * Custom container should not be return, because in the Portal component, it will remove the
 * return container element here, if the custom container is the only child of it's component,
 * like issue #10656, It will has a conflict with removeChild method in react-dom.
 * So here should add a child (div element) to custom container.
 * */

var DialogWrap = function DialogWrap(props) {
  var visible = props.visible,
      getContainer = props.getContainer,
      forceRender = props.forceRender,
      _props$destroyOnClose = props.destroyOnClose,
      destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
      _afterClose = props.afterClose;

  var _React$useState = react_index_js_.useState(visible),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      animatedVisible = _React$useState2[0],
      setAnimatedVisible = _React$useState2[1];

  react_index_js_.useEffect(function () {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]); // 渲染在当前 dom 里；

  if (getContainer === false) {
    return /*#__PURE__*/react_index_js_.createElement(Dialog, (0,esm_extends/* default */.Z)({}, props, {
      getOpenCount: function getOpenCount() {
        return 2;
      } // 不对 body 做任何操作。。

    }));
  } // Destroy on close will remove wrapped div


  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }

  return /*#__PURE__*/react_index_js_.createElement(es_PortalWrapper, {
    visible: visible,
    forceRender: forceRender,
    getContainer: getContainer
  }, function (childProps) {
    return /*#__PURE__*/react_index_js_.createElement(Dialog, (0,esm_extends/* default */.Z)({}, props, {
      destroyOnClose: destroyOnClose,
      afterClose: function afterClose() {
        _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
        setAnimatedVisible(false);
      }
    }, childProps));
  });
};

DialogWrap.displayName = 'Dialog';
/* harmony default export */ var es_DialogWrap = (DialogWrap);
;// CONCATENATED MODULE: ./node_modules/rc-dialog/es/index.js



/* harmony default export */ var rc_dialog_es = (es_DialogWrap);
;// CONCATENATED MODULE: ./node_modules/antd/es/form/context.js





var context_FormContext = /*#__PURE__*/react_index_js_.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: function itemRef() {}
});
var NoStyleItemContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(null)));
var context_FormProvider = function FormProvider(props) {
  var providerProps = omit(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(RcFormProvider, _extends({}, providerProps));
};
var FormItemPrefixContext = /*#__PURE__*/react_index_js_.createContext({
  prefixCls: ''
});
var FormItemInputContext = /*#__PURE__*/react_index_js_.createContext({});
var NoFormStyle = function NoFormStyle(_ref) {
  var children = _ref.children,
      status = _ref.status,
      override = _ref.override;
  var formItemInputContext = (0,react_index_js_.useContext)(FormItemInputContext);
  var newFormItemInputContext = (0,react_index_js_.useMemo)(function () {
    var newContext = (0,esm_extends/* default */.Z)({}, formItemInputContext);

    if (override) {
      delete newContext.isFormItemInput;
    }

    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }

    return newContext;
  }, [status, override, formItemInputContext]);
  return /*#__PURE__*/react_index_js_.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/styleChecker.js


var canUseDocElement = function canUseDocElement() {
  return (0,canUseDom/* default */.Z)() && window.document.documentElement;
};

var flexGapSupported;
var detectFlexGapSupported = function detectFlexGapSupported() {
  if (!canUseDocElement()) {
    return false;
  }

  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  } // create flex container with row-gap set


  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px'; // create two, elements inside it

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  document.body.removeChild(flex);
  return flexGapSupported;
};
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/Modal.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














var mousePosition; // ref: https://github.com/ant-design/ant-design/issues/15795

var getClickPosition = function getClickPosition(e) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }; // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开

  setTimeout(function () {
    mousePosition = null;
  }, 100);
}; // 只有点击事件支持从鼠标位置动画展开


if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

var Modal = function Modal(props) {
  var _classNames;

  var _React$useContext = react_index_js_.useContext(config_provider_context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var handleCancel = function handleCancel(e) {
    var onCancel = props.onCancel;
    onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
  };

  var handleOk = function handleOk(e) {
    var onOk = props.onOk;
    onOk === null || onOk === void 0 ? void 0 : onOk(e);
  };

   false ? 0 : void 0;

  var customizePrefixCls = props.prefixCls,
      footer = props.footer,
      visible = props.visible,
      open = props.open,
      wrapClassName = props.wrapClassName,
      centered = props.centered,
      getContainer = props.getContainer,
      closeIcon = props.closeIcon,
      _props$focusTriggerAf = props.focusTriggerAfterClose,
      focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
      restProps = __rest(props, ["prefixCls", "footer", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);

  var prefixCls = getPrefixCls('modal', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var defaultFooter = /*#__PURE__*/react_index_js_.createElement(LocaleReceiver, {
    componentName: "Modal",
    defaultLocale: getConfirmLocale()
  }, function (contextLocale) {
    var okText = props.okText,
        okType = props.okType,
        cancelText = props.cancelText,
        confirmLoading = props.confirmLoading;
    return /*#__PURE__*/react_index_js_.createElement(react_index_js_.Fragment, null, /*#__PURE__*/react_index_js_.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({
      onClick: handleCancel
    }, props.cancelButtonProps), cancelText || contextLocale.cancelText), /*#__PURE__*/react_index_js_.createElement(es_button/* default */.Z, (0,esm_extends/* default */.Z)({}, (0,button_button/* convertLegacyProps */.n)(okType), {
      loading: confirmLoading,
      onClick: handleOk
    }, props.okButtonProps), okText !== null && okText !== void 0 ? okText : contextLocale.okText));
  });
  var closeIconToRender = /*#__PURE__*/react_index_js_.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/react_index_js_.createElement(icons_CloseOutlined, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var wrapClassNameExtended = classnames_default()(wrapClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-centered"), !!centered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-wrap-rtl"), direction === 'rtl'), _classNames));
  return /*#__PURE__*/react_index_js_.createElement(NoFormStyle, {
    status: true,
    override: true
  }, /*#__PURE__*/react_index_js_.createElement(rc_dialog_es, (0,esm_extends/* default */.Z)({}, restProps, {
    getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
    prefixCls: prefixCls,
    wrapClassName: wrapClassNameExtended,
    footer: footer === undefined ? defaultFooter : footer,
    visible: open || visible,
    mousePosition: mousePosition,
    onClose: handleCancel,
    closeIcon: closeIconToRender,
    focusTriggerAfterClose: focusTriggerAfterClose,
    transitionName: getTransitionName(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName)
  })));
};

Modal.defaultProps = {
  width: 520,
  confirmLoading: false,
  open: false,
  okType: 'primary'
};
/* harmony default export */ var modal_Modal = (Modal);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/ConfirmDialog.js









var ConfirmDialog = function ConfirmDialog(props) {
  var icon = props.icon,
      onCancel = props.onCancel,
      onOk = props.onOk,
      close = props.close,
      zIndex = props.zIndex,
      afterClose = props.afterClose,
      visible = props.visible,
      open = props.open,
      keyboard = props.keyboard,
      centered = props.centered,
      getContainer = props.getContainer,
      maskStyle = props.maskStyle,
      okText = props.okText,
      okButtonProps = props.okButtonProps,
      cancelText = props.cancelText,
      cancelButtonProps = props.cancelButtonProps,
      direction = props.direction,
      prefixCls = props.prefixCls,
      wrapClassName = props.wrapClassName,
      rootPrefixCls = props.rootPrefixCls,
      iconPrefixCls = props.iconPrefixCls,
      bodyStyle = props.bodyStyle,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? false : _props$closable,
      closeIcon = props.closeIcon,
      modalRender = props.modalRender,
      focusTriggerAfterClose = props.focusTriggerAfterClose;

  if (false) {} // 支持传入{ icon: null }来隐藏`Modal.confirm`默认的Icon


  var okType = props.okType || 'primary';
  var contentPrefixCls = "".concat(prefixCls, "-confirm"); // 默认为 true，保持向下兼容

  var okCancel = 'okCancel' in props ? props.okCancel : true;
  var width = props.width || 416;
  var style = props.style || {};
  var mask = props.mask === undefined ? true : props.mask; // 默认为 false，保持旧版默认行为

  var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
  var autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || 'ok';
  var classString = classnames_default()(contentPrefixCls, "".concat(contentPrefixCls, "-").concat(props.type), (0,defineProperty/* default */.Z)({}, "".concat(contentPrefixCls, "-rtl"), direction === 'rtl'), props.className);
  var cancelButton = okCancel && /*#__PURE__*/react_index_js_.createElement(_util_ActionButton, {
    actionFn: onCancel,
    close: close,
    autoFocus: autoFocusButton === 'cancel',
    buttonProps: cancelButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, cancelText);
  return /*#__PURE__*/react_index_js_.createElement(config_provider, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: iconPrefixCls,
    direction: direction
  }, /*#__PURE__*/react_index_js_.createElement(modal_Modal, {
    prefixCls: prefixCls,
    className: classString,
    wrapClassName: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(contentPrefixCls, "-centered"), !!props.centered), wrapClassName),
    onCancel: function onCancel() {
      return close === null || close === void 0 ? void 0 : close({
        triggerCancel: true
      });
    },
    open: open || visible,
    title: "",
    footer: "",
    transitionName: getTransitionName(rootPrefixCls, 'zoom', props.transitionName),
    maskTransitionName: getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName),
    mask: mask,
    maskClosable: maskClosable,
    maskStyle: maskStyle,
    style: style,
    bodyStyle: bodyStyle,
    width: width,
    zIndex: zIndex,
    afterClose: afterClose,
    keyboard: keyboard,
    centered: centered,
    getContainer: getContainer,
    closable: closable,
    closeIcon: closeIcon,
    modalRender: modalRender,
    focusTriggerAfterClose: focusTriggerAfterClose
  }, /*#__PURE__*/react_index_js_.createElement("div", {
    className: "".concat(contentPrefixCls, "-body-wrapper")
  }, /*#__PURE__*/react_index_js_.createElement("div", {
    className: "".concat(contentPrefixCls, "-body")
  }, icon, props.title === undefined ? null : /*#__PURE__*/react_index_js_.createElement("span", {
    className: "".concat(contentPrefixCls, "-title")
  }, props.title), /*#__PURE__*/react_index_js_.createElement("div", {
    className: "".concat(contentPrefixCls, "-content")
  }, props.content)), /*#__PURE__*/react_index_js_.createElement("div", {
    className: "".concat(contentPrefixCls, "-btns")
  }, cancelButton, /*#__PURE__*/react_index_js_.createElement(_util_ActionButton, {
    type: okType,
    actionFn: onOk,
    close: close,
    autoFocus: autoFocusButton === 'ok',
    buttonProps: okButtonProps,
    prefixCls: "".concat(rootPrefixCls, "-btn")
  }, okText)))));
};

/* harmony default export */ var modal_ConfirmDialog = (ConfirmDialog);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/destroyFns.js
var destroyFns = [];
/* harmony default export */ var modal_destroyFns = (destroyFns);
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/confirm.js



var confirm_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












var defaultRootPrefixCls = '';

function getRootPrefixCls() {
  return defaultRootPrefixCls;
}

function confirm_confirm(config) {
  var container = document.createDocumentFragment(); // eslint-disable-next-line @typescript-eslint/no-use-before-define

  var currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, config), {
    close: close,
    open: true
  });

  function destroy() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, [function () {}].concat(_toConsumableArray(args.slice(1))));
    }

    for (var i = 0; i < modal_destroyFns.length; i++) {
      var fn = modal_destroyFns[i]; // eslint-disable-next-line @typescript-eslint/no-use-before-define

      if (fn === close) {
        modal_destroyFns.splice(i, 1);
        break;
      }
    }

    unmount(container);
  }

  function render(_a) {
    var okText = _a.okText,
        cancelText = _a.cancelText,
        customizePrefixCls = _a.prefixCls,
        props = confirm_rest(_a, ["okText", "cancelText", "prefixCls"]);
    /**
     * https://github.com/ant-design/ant-design/issues/23623
     *
     * Sync render blocks React event. Let's make this async.
     */


    setTimeout(function () {
      var runtimeLocale = getConfirmLocale();

      var _globalConfig = globalConfig(),
          getPrefixCls = _globalConfig.getPrefixCls,
          getIconPrefixCls = _globalConfig.getIconPrefixCls; // because Modal.config  set rootPrefixCls, which is different from other components


      var rootPrefixCls = getPrefixCls(undefined, getRootPrefixCls());
      var prefixCls = customizePrefixCls || "".concat(rootPrefixCls, "-modal");
      var iconPrefixCls = getIconPrefixCls();
      render_render( /*#__PURE__*/react_index_js_.createElement(modal_ConfirmDialog, (0,esm_extends/* default */.Z)({}, props, {
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        iconPrefixCls: iconPrefixCls,
        okText: okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText),
        cancelText: cancelText || runtimeLocale.cancelText
      })), container);
    });
  }

  function close() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, currentConfig), {
      open: false,
      afterClose: function afterClose() {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }

        destroy.apply(_this, args);
      }
    }); // Legacy support

    if (currentConfig.visible) {
      delete currentConfig.visible;
    }

    render(currentConfig);
  }

  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, currentConfig), configUpdate);
    }

    render(currentConfig);
  }

  render(currentConfig);
  modal_destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
}
function withWarn(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react_index_js_.createElement(icons_ExclamationCircleOutlined, null),
    okCancel: false
  }, props), {
    type: 'warning'
  });
}
function withInfo(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react_index_js_.createElement(icons_InfoCircleOutlined, null),
    okCancel: false
  }, props), {
    type: 'info'
  });
}
function withSuccess(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react_index_js_.createElement(icons_CheckCircleOutlined, null),
    okCancel: false
  }, props), {
    type: 'success'
  });
}
function withError(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react_index_js_.createElement(icons_CloseCircleOutlined, null),
    okCancel: false
  }, props), {
    type: 'error'
  });
}
function withConfirm(props) {
  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
    icon: /*#__PURE__*/react_index_js_.createElement(icons_ExclamationCircleOutlined, null),
    okCancel: true
  }, props), {
    type: 'confirm'
  });
}
function modalGlobalConfig(_ref) {
  var rootPrefixCls = _ref.rootPrefixCls;
   false ? 0 : void 0;
  defaultRootPrefixCls = rootPrefixCls;
}
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/hooks/usePatchElement.js



function usePatchElement() {
  var _React$useState = react_index_js_.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  var patchElement = react_index_js_.useCallback(function (element) {
    // append a new element to elements (and create a new ref)
    setElements(function (originElements) {
      return [].concat(_toConsumableArray(originElements), [element]);
    }); // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect

    return function () {
      setElements(function (originElements) {
        return originElements.filter(function (ele) {
          return ele !== element;
        });
      });
    };
  }, []);
  return [elements, patchElement];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/HookModal.js









var HookModal = function HookModal(_ref, ref) {
  var afterClose = _ref.afterClose,
      config = _ref.config;

  var _React$useState = react_index_js_.useState(true),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react_index_js_.useState(config),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      innerConfig = _React$useState4[0],
      setInnerConfig = _React$useState4[1];

  var _React$useContext = react_index_js_.useContext(config_provider_context/* ConfigContext */.E_),
      direction = _React$useContext.direction,
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('modal');
  var rootPrefixCls = getPrefixCls();

  var close = function close() {
    setOpen(false);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });

    if (innerConfig.onCancel && triggerCancel) {
      innerConfig.onCancel.apply(innerConfig, [function () {}].concat(_toConsumableArray(args.slice(1))));
    }
  };

  react_index_js_.useImperativeHandle(ref, function () {
    return {
      destroy: close,
      update: function update(newConfig) {
        setInnerConfig(function (originConfig) {
          return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, originConfig), newConfig);
        });
      }
    };
  });
  return /*#__PURE__*/react_index_js_.createElement(LocaleReceiver, {
    componentName: "Modal",
    defaultLocale: locale_default.Modal
  }, function (contextLocale) {
    return /*#__PURE__*/react_index_js_.createElement(modal_ConfirmDialog, (0,esm_extends/* default */.Z)({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls
    }, innerConfig, {
      close: close,
      open: open,
      afterClose: afterClose,
      okText: innerConfig.okText || (innerConfig.okCancel ? contextLocale.okText : contextLocale.justOkText),
      direction: direction,
      cancelText: innerConfig.cancelText || contextLocale.cancelText
    }));
  });
};

/* harmony default export */ var useModal_HookModal = (/*#__PURE__*/react_index_js_.forwardRef(HookModal));
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/useModal/index.js






var useModal_uuid = 0;
var ElementsHolder = /*#__PURE__*/react_index_js_.memo( /*#__PURE__*/react_index_js_.forwardRef(function (_props, ref) {
  var _usePatchElement = usePatchElement(),
      _usePatchElement2 = (0,slicedToArray/* default */.Z)(_usePatchElement, 2),
      elements = _usePatchElement2[0],
      patchElement = _usePatchElement2[1];

  react_index_js_.useImperativeHandle(ref, function () {
    return {
      patchElement: patchElement
    };
  }, []); // eslint-disable-next-line react/jsx-no-useless-fragment

  return /*#__PURE__*/react_index_js_.createElement(react_index_js_.Fragment, null, elements);
}));
function useModal() {
  var holderRef = react_index_js_.useRef(null); // ========================== Effect ==========================

  var _React$useState = react_index_js_.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      actionQueue = _React$useState2[0],
      setActionQueue = _React$useState2[1];

  react_index_js_.useEffect(function () {
    if (actionQueue.length) {
      var cloneQueue = _toConsumableArray(actionQueue);

      cloneQueue.forEach(function (action) {
        action();
      });
      setActionQueue([]);
    }
  }, [actionQueue]); // =========================== Hook ===========================

  var getConfirmFunc = react_index_js_.useCallback(function (withFunc) {
    return function hookConfirm(config) {
      var _a;

      useModal_uuid += 1;
      var modalRef = /*#__PURE__*/react_index_js_.createRef();
      var closeFunc;
      var modal = /*#__PURE__*/react_index_js_.createElement(useModal_HookModal, {
        key: "modal-".concat(useModal_uuid),
        config: withFunc(config),
        ref: modalRef,
        afterClose: function afterClose() {
          closeFunc();
        }
      });
      closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
      return {
        destroy: function destroy() {
          function destroyAction() {
            var _a;

            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
          }

          if (modalRef.current) {
            destroyAction();
          } else {
            setActionQueue(function (prev) {
              return [].concat(_toConsumableArray(prev), [destroyAction]);
            });
          }
        },
        update: function update(newConfig) {
          function updateAction() {
            var _a;

            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
          }

          if (modalRef.current) {
            updateAction();
          } else {
            setActionQueue(function (prev) {
              return [].concat(_toConsumableArray(prev), [updateAction]);
            });
          }
        }
      };
    };
  }, []);
  var fns = react_index_js_.useMemo(function () {
    return {
      info: getConfirmFunc(withInfo),
      success: getConfirmFunc(withSuccess),
      error: getConfirmFunc(withError),
      warning: getConfirmFunc(withWarn),
      confirm: getConfirmFunc(withConfirm)
    };
  }, []); // eslint-disable-next-line react/jsx-key

  return [fns, /*#__PURE__*/react_index_js_.createElement(ElementsHolder, {
    ref: holderRef
  })];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/modal/index.js





function modalWarn(props) {
  return confirm_confirm(withWarn(props));
}

var es_modal_Modal = modal_Modal;
es_modal_Modal.useModal = useModal;

es_modal_Modal.info = function infoFn(props) {
  return confirm_confirm(withInfo(props));
};

es_modal_Modal.success = function successFn(props) {
  return confirm_confirm(withSuccess(props));
};

es_modal_Modal.error = function errorFn(props) {
  return confirm_confirm(withError(props));
};

es_modal_Modal.warning = modalWarn;
es_modal_Modal.warn = modalWarn;

es_modal_Modal.confirm = function confirmFn(props) {
  return confirm_confirm(withConfirm(props));
};

es_modal_Modal.destroyAll = function destroyAllFn() {
  while (modal_destroyFns.length) {
    var close = modal_destroyFns.pop();

    if (close) {
      close();
    }
  }
};

es_modal_Modal.config = modalGlobalConfig;
/* harmony default export */ var modal = (es_modal_Modal);

/***/ }),

/***/ 1694:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  var nativeCodeString = '[native code]';

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          classes.push(arg.toString());
          continue;
        }

        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ 888:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(9047);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ 2007:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(888)();
}

/***/ }),

/***/ 9047:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ 8689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": function() { return /* reexport */ CSSMotionList; },
  "Z": function() { return /* binding */ es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: consume shared module (default) react@>=16.9.0 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(8056);
// EXTERNAL MODULE: consume shared module (default) react-dom@>=16.9.0 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(1949);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return react_dom_index_js_default().findDOMNode(node);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(8834);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1694);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(4937);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/util/motion.js

 // ================= Transition =================
// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes((0,canUseDom/* default */.Z)(), typeof window !== 'undefined' ? window : {});
var style = {};

if ((0,canUseDom/* default */.Z)()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if ((0,esm_typeof/* default */.Z)(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/interface.js
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(8368);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5314);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useNextFrame.js


/* harmony default export */ var useNextFrame = (function () {
  var nextFrameRef = index_js_.useRef(null);

  function cancelNextFrame() {
    raf/* default.cancel */.Z.cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = (0,raf/* default */.Z)(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  index_js_.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js

 // It's safe to use `useLayoutEffect` but the warning is annoying

var useIsomorphicLayoutEffect = (0,canUseDom/* default */.Z)() ? index_js_.useLayoutEffect : index_js_.useEffect;
/* harmony default export */ var hooks_useIsomorphicLayoutEffect = (useIsomorphicLayoutEffect);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useStepQueue.js






var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
/* harmony default export */ var useStepQueue = (function (status, callback) {
  var _useState = (0,useState/* default */.Z)(STEP_NONE),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useNextFrame = useNextFrame(),
      _useNextFrame2 = (0,slicedToArray/* default */.Z)(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(STEP_PREPARE, true);
  }

  hooks_useIsomorphicLayoutEffect(function () {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep, true);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  index_js_.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useDomMotionEvents.js



/* harmony default export */ var useDomMotionEvents = (function (callback) {
  var cacheElementRef = (0,index_js_.useRef)(); // Cache callback

  var callbackRef = (0,index_js_.useRef)(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = index_js_.useCallback(function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  index_js_.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useStatus.js










function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged; // Used for outer render usage to avoid `visible: false & status: none` to render nothing

  var _useState = (0,useState/* default */.Z)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = (0,useState/* default */.Z)(STATUS_NONE),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = (0,useState/* default */.Z)(null),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = (0,index_js_.useRef)(false);
  var deadlineRef = (0,index_js_.useRef)(null); // =========================== Dom Node ===========================

  function getDomElement() {
    return getElement();
  } // ========================== Motion End ==========================


  var activeRef = (0,index_js_.useRef)(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var currentActive = activeRef.current;
    var canEnd;

    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (status !== STATUS_NONE && currentActive && canEnd !== false) {
      setStatus(STATUS_NONE, true);
      setStyle(null, true);
    }
  }

  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
      _useDomMotionEvents2 = (0,slicedToArray/* default */.Z)(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = index_js_.useMemo(function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case STATUS_APPEAR:
        return _ref2 = {}, (0,defineProperty/* default */.Z)(_ref2, STEP_PREPARE, onAppearPrepare), (0,defineProperty/* default */.Z)(_ref2, STEP_START, onAppearStart), (0,defineProperty/* default */.Z)(_ref2, STEP_ACTIVE, onAppearActive), _ref2;

      case STATUS_ENTER:
        return _ref3 = {}, (0,defineProperty/* default */.Z)(_ref3, STEP_PREPARE, onEnterPrepare), (0,defineProperty/* default */.Z)(_ref3, STEP_START, onEnterStart), (0,defineProperty/* default */.Z)(_ref3, STEP_ACTIVE, onEnterActive), _ref3;

      case STATUS_LEAVE:
        return _ref4 = {}, (0,defineProperty/* default */.Z)(_ref4, STEP_PREPARE, onLeavePrepare), (0,defineProperty/* default */.Z)(_ref4, STEP_START, onLeaveStart), (0,defineProperty/* default */.Z)(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = useStepQueue(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];

      if (!onPrepare) {
        return SkipStep;
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update
    // Rest step is sync update


    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === STEP_ACTIVE) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return DoStep;
  }),
      _useStepQueue2 = (0,slicedToArray/* default */.Z)(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = isActive(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  hooks_useIsomorphicLayoutEffect(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  (0,index_js_.useEffect)(function () {
    if ( // Cancel appear
    status === STATUS_APPEAR && !motionAppear || // Cancel enter
    status === STATUS_ENTER && !motionEnter || // Cancel leave
    status === STATUS_LEAVE && !motionLeave) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0,index_js_.useEffect)(function () {
    return function () {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []); // Trigger `onVisibleChanged`

  var firstMountChangeRef = index_js_.useRef(false);
  (0,index_js_.useEffect)(function () {
    // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }

    if (asyncVisible !== undefined && status === STATUS_NONE) {
      // Skip first render is invisible since it's nothing changed
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
      }

      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = (0,objectSpread2/* default */.Z)({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(7277);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/DomWrapper.js






var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(DomWrapper, _React$Component);

  var _super = (0,createSuper/* default */.Z)(DomWrapper);

  function DomWrapper() {
    (0,classCallCheck/* default */.Z)(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(index_js_.Component);

/* harmony default export */ var es_DomWrapper = (DomWrapper);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/CSSMotion.js




/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */











/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if ((0,esm_typeof/* default */.Z)(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/index_js_.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = (0,index_js_.useRef)(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = (0,index_js_.useRef)();

    function getDomElement() {
      try {
        // Here we're avoiding call for findDOMNode since it's deprecated
        // in strict mode. We're calling it only when node ref is not
        // an instance of DOM HTMLElement. Otherwise use
        // findDOMNode as a final resort
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
        _useStatus2 = (0,slicedToArray/* default */.Z)(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rendered
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = index_js_.useRef(mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var setNodeRef = index_js_.useCallback(function (node) {
      nodeRef.current = node;
      (0,es_ref/* fillRef */.mH)(ref, node);
    }, [ref]); // ===================== Render =====================

    var motionChildren;

    var mergedProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children((0,objectSpread2/* default */.Z)({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender) {
        motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames; // In motion


      var statusSuffix;

      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }

      motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
        className: classnames_default()(getTransitionName(motionName, status), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), (0,defineProperty/* default */.Z)(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    } // Auto inject ref if child node not have `ref` props


    if ( /*#__PURE__*/index_js_.isValidElement(motionChildren) && (0,es_ref/* supportRef */.Yr)(motionChildren)) {
      var _motionChildren = motionChildren,
          originNodeRef = _motionChildren.ref;

      if (!originNodeRef) {
        motionChildren = /*#__PURE__*/index_js_.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }

    return /*#__PURE__*/index_js_.createElement(es_DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ var es_CSSMotion = (genCSSMotion(supportTransition));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/util/diff.js


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && (0,esm_typeof/* default */.Z)(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/CSSMotionList.js







var _excluded = ["component", "children", "onVisibleChanged", "onAllRemoved"],
    _excluded2 = ["status"];
/* eslint react/prop-types: 0 */





var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */

function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : es_CSSMotion;

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    (0,inherits/* default */.Z)(CSSMotionList, _React$Component);

    var _super = (0,createSuper/* default */.Z)(CSSMotionList);

    function CSSMotionList() {
      var _this;

      (0,classCallCheck/* default */.Z)(this, CSSMotionList);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        keyEntities: []
      };

      _this.removeKey = function (removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function (entity) {
          if (entity.key !== removeKey) return entity;
          return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, entity), {}, {
            status: STATUS_REMOVED
          });
        });

        _this.setState({
          keyEntities: nextKeyEntities
        });

        return nextKeyEntities.filter(function (_ref) {
          var status = _ref.status;
          return status !== STATUS_REMOVED;
        }).length;
      };

      return _this;
    }

    (0,createClass/* default */.Z)(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            onAllRemoved = _this$props.onAllRemoved,
            restProps = (0,objectWithoutProperties/* default */.Z)(_this$props, _excluded);

        var Component = component || index_js_.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/index_js_.createElement(Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);

          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /*#__PURE__*/index_js_.createElement(CSSMotion, (0,esm_extends/* default */.Z)({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                var restKeysCount = _this2.removeKey(eventProps.key);

                if (restKeysCount === 0 && onAllRemoved) {
                  onAllRemoved();
                }
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }

            return true;
          })
        };
      } // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.

    }]);

    return CSSMotionList;
  }(index_js_.Component);

  CSSMotionList.defaultProps = {
    component: 'div'
  };
  return CSSMotionList;
}
/* harmony default export */ var CSSMotionList = (genCSSMotionList(supportTransition));
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/index.js



/* harmony default export */ var es = (es_CSSMotion);

/***/ }),

/***/ 4937:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ canUseDom; }
/* harmony export */ });
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ 520:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ contains; }
/* harmony export */ });
function contains(root, n) {
  if (!root) {
    return false;
  } // Use native if support


  if (root.contains) {
    return root.contains(n);
  } // `document.contains` not support with IE11


  var node = n;

  while (node) {
    if (node === root) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}

/***/ }),

/***/ 5561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hq": function() { return /* binding */ updateCSS; }
/* harmony export */ });
/* unused harmony exports injectCSS, removeCSS */
/* harmony import */ var _canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4937);
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(520);


var APPEND_ORDER = 'data-rc-order';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();

function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      mark = _ref.mark;

  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }

  return MARK_KEY;
}

function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }

  return prepend ? 'prepend' : 'append';
}
/**
 * Find style which inject by rc-util
 */


function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}

function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!(0,_canUseDom__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
    return null;
  }

  var csp = option.csp,
      prepend = option.prepend;
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));

  if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;

  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (prepend === 'queue') {
      var existStyle = findStyles(container).filter(function (node) {
        return ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER));
      });

      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    } // Use `insertBefore` as `prepend`


    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}

function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}

function removeCSS(key) {
  var _existNode$parentNode;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  existNode === null || existNode === void 0 ? void 0 : (_existNode$parentNode = existNode.parentNode) === null || _existNode$parentNode === void 0 ? void 0 : _existNode$parentNode.removeChild(existNode);
}
/**
 * qiankun will inject `appendChild` to insert into other
 */

function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container); // Find real container when not cached or cached container removed

  if (!cachedRealContainer || !(0,_contains__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }
}

function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option); // Sync real parent

  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);

  if (existNode) {
    var _option$csp, _option$csp2;

    if (((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;

      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

/***/ }),

/***/ 1534:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useMemo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});

  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}

/***/ }),

/***/ 8368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ useSafeState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */

function useSafeState(defaultValue) {
  var destroyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);

  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }

    setValue(updater);
  }

  return [value, safeSetState];
}

/***/ }),

/***/ 5314:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ wrapperRaf; }
/* harmony export */ });
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

var rafUUID = 0;
var rafIds = new Map();

function cleanup(id) {
  rafIds.delete(id);
}

function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;

  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id); // Trigger

      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      }); // Bind real raf id

      rafIds.set(id, realId);
    }
  }

  callRef(times);
  return id;
}

wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};

/***/ }),

/***/ 8834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yr": function() { return /* binding */ supportRef; },
/* harmony export */   "mH": function() { return /* binding */ fillRef; },
/* harmony export */   "sQ": function() { return /* binding */ composeRef; }
/* harmony export */ });
/* unused harmony export useComposeRef */
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1002);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3873);
/* harmony import */ var _hooks_useMemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1534);



function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var refList = refs.filter(function (ref) {
    return ref;
  });

  if (refList.length <= 1) {
    return refList[0];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }

  return useMemo(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length === next.length && prev.every(function (ref, i) {
      return ref === next[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = (0,react_is__WEBPACK_IMPORTED_MODULE_0__.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */

/***/ }),

/***/ 632:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports warning, note, resetWarned, call, warningOnce, noteOnce */
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (false) {}
}
function note(valid, message) {
  // Support uglify
  if (false) {}
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ __webpack_exports__["ZP"] = (warningOnce);
/* eslint-enable */

/***/ }),

/***/ 4501:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

__webpack_unused_export__ = l;
__webpack_unused_export__ = m;
__webpack_unused_export__ = k;
__webpack_unused_export__ = h;
__webpack_unused_export__ = c;
__webpack_unused_export__ = n;
__webpack_unused_export__ = e;
__webpack_unused_export__ = t;
__webpack_unused_export__ = r;
__webpack_unused_export__ = d;
__webpack_unused_export__ = g;
__webpack_unused_export__ = f;
__webpack_unused_export__ = p;

__webpack_unused_export__ = function (a) {
  return A(a) || z(a) === l;
};

__webpack_unused_export__ = A;

__webpack_unused_export__ = function (a) {
  return z(a) === k;
};

__webpack_unused_export__ = function (a) {
  return z(a) === h;
};

__webpack_unused_export__ = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

__webpack_unused_export__ = function (a) {
  return z(a) === n;
};

exports.isFragment = function (a) {
  return z(a) === e;
};

__webpack_unused_export__ = function (a) {
  return z(a) === t;
};

exports.isMemo = function (a) {
  return z(a) === r;
};

__webpack_unused_export__ = function (a) {
  return z(a) === d;
};

__webpack_unused_export__ = function (a) {
  return z(a) === g;
};

__webpack_unused_export__ = function (a) {
  return z(a) === f;
};

__webpack_unused_export__ = function (a) {
  return z(a) === p;
};

__webpack_unused_export__ = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

__webpack_unused_export__ = z;

/***/ }),

/***/ 3873:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(4501);
} else {}

/***/ }),

/***/ 1250:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(4556);

if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }

/***/ }),

/***/ 7222:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(4819);

var PropTypes = __webpack_require__(2007);

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (( false ? 0 : _typeof(__webpack_require__.m)) !== "object") {
    return false;
  }

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class = function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      _classCallCheck(this, LoadableComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.retry = function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      };

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    LoadableComponent.prototype.componentWillMount = function componentWillMount() {
      this._mounted = true;

      this._loadModule();
    };

    LoadableComponent.prototype._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context.loadable && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.loadable.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      if (typeof opts.delay === "number") {
        if (opts.delay === 0) {
          this.setState({
            pastDelay: true
          });
        } else {
          this._delay = setTimeout(function () {
            _this2.setState({
              pastDelay: true
            });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          _this2.setState({
            timedOut: true
          });
        }, opts.timeout);
      }

      var update = function update() {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
      }).catch(function (err) {
        update();
      });
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;

      this._clearTimeouts();
    };

    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    LoadableComponent.prototype.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _class.contextTypes = {
    loadable: PropTypes.shape({
      report: PropTypes.func.isRequired
    })
  }, _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture = function (_React$Component2) {
  _inherits(Capture, _React$Component2);

  function Capture() {
    _classCallCheck(this, Capture);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Capture.prototype.getChildContext = function getChildContext() {
    return {
      loadable: {
        report: this.props.report
      }
    };
  };

  Capture.prototype.render = function render() {
    return React.Children.only(this.props.children);
  };

  return Capture;
}(React.Component);

Capture.propTypes = {
  report: PropTypes.func.isRequired
};
Capture.childContextTypes = {
  loadable: PropTypes.shape({
    report: PropTypes.func.isRequired
  }).isRequired
};
Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ 6374:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(7082),
    k = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    m = Object.prototype.hasOwnProperty,
    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, g) {
  var b,
      d = {},
      e = null,
      h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);

  for (b in a) {
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}

__webpack_unused_export__ = l;
exports.jsx = q;
__webpack_unused_export__ = q;

/***/ }),

/***/ 184:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(6374);
} else {}

/***/ }),

/***/ 6072:
/***/ (function() {

"use strict";
// extracted by mini-css-extract-plugin
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ 8416:
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2122:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(8416);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7462:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 4925:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _objectWithoutProperties; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ })

}]);
//# sourceMappingURL=170.b3fccc43.chunk.js.map
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6733:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(7277);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(9611);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(8814);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(Parent, args, Class) {
  if ((0,isNativeReflectConstruct/* default */.Z)()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,setPrototypeOf/* default */.Z)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




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
      return _construct(Class, arguments, (0,getPrototypeOf/* default */.Z)(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,setPrototypeOf/* default */.Z)(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(4165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(181);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = (0,unsupportedIterableToArray/* default */.Z)(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ../micromodule/packages/core/lib/index.esm.js












var copyProperty = function copyProperty(to, from, property, ignoreNonConfigurable) {
  // `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
  // `Function#prototype` is non-writable and non-configurable so can never be modified.
  if (property === 'length' || property === 'prototype') {
    return;
  } // `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.


  if (property === 'arguments' || property === 'caller') {
    return;
  }

  var toDescriptor = Object.getOwnPropertyDescriptor(to, property);
  var fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

  if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
    return;
  }

  Object.defineProperty(to, property, fromDescriptor);
}; // `Object.defineProperty()` throws if the property exists, is not configurable and either:
// - one its descriptors is changed
// - it is non-writable and its value is changed


var canCopyProperty = function canCopyProperty(toDescriptor, fromDescriptor) {
  return toDescriptor === undefined || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
};

var changePrototype = function changePrototype(to, from) {
  var fromPrototype = Object.getPrototypeOf(from);

  if (fromPrototype === Object.getPrototypeOf(to)) {
    return;
  }

  Object.setPrototypeOf(to, fromPrototype);
};

var wrappedToString = function wrappedToString(withName, fromBody) {
  return "/* Wrapped ".concat(withName, "*/\n").concat(fromBody);
};

var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name'); // We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.

var changeToString = function changeToString(to, from, name) {
  var withName = name === '' ? '' : "with ".concat(name.trim(), "() ");
  var newToString = wrappedToString.bind(null, withName, from.toString()); // Ensure `to.toString.toString` is non-enumerable and has the same `same`

  Object.defineProperty(newToString, 'name', toStringName);
  Object.defineProperty(to, 'toString', (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, toStringDescriptor), {}, {
    value: newToString
  }));
};

function mimicFunction(to, from) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$ignoreNonConfigu = _ref.ignoreNonConfigurable,
      ignoreNonConfigurable = _ref$ignoreNonConfigu === void 0 ? false : _ref$ignoreNonConfigu;

  var name = to.name;

  var _iterator = _createForOfIteratorHelper(Reflect.ownKeys(from)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;
      copyProperty(to, from, property, ignoreNonConfigurable);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  changePrototype(to, from);
  changeToString(to, from, name);
  return to;
}

var cacheStore = new WeakMap();
/**
[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.

@param fn - Function to be memoized.

@example
```
import {setTimeout as delay} from 'node:timer/promises';
import pMemoize from 'p-memoize';
import got from 'got';

const memoizedGot = pMemoize(got);

await memoizedGot('https://sindresorhus.com');

// This call is cached
await memoizedGot('https://sindresorhus.com');

await delay(2000);

// This call is not cached as the cache has expired
await memoizedGot('https://sindresorhus.com');
```
*/

function pMemoize(fn) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$cacheKey = _ref2.cacheKey,
      cacheKey = _ref2$cacheKey === void 0 ? function (_ref3) {
    var _ref4 = (0,slicedToArray/* default */.Z)(_ref3, 1),
        firstArgument = _ref4[0];

    return firstArgument;
  } : _ref2$cacheKey,
      _ref2$cache = _ref2.cache,
      cache = _ref2$cache === void 0 ? new Map() : _ref2$cache;

  // Promise objects can't be serialized so we keep track of them internally and only provide their resolved values to `cache`
  // `Promise<AsyncReturnType<FunctionToMemoize>>` is used instead of `ReturnType<FunctionToMemoize>` because promise properties are not kept
  var promiseCache = new Map();

  var memoized = function memoized() {
    var _this = this;

    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var key = cacheKey(arguments_);

    if (promiseCache.has(key)) {
      return promiseCache.get(key);
    }

    var promise = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
      var _promise, result;

      return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.t0 = cache;

              if (!_context.t0) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return cache.has(key);

            case 5:
              _context.t0 = _context.sent;

            case 6:
              if (!_context.t0) {
                _context.next = 10;
                break;
              }

              _context.next = 9;
              return cache.get(key);

            case 9:
              return _context.abrupt("return", _context.sent);

            case 10:
              _promise = fn.apply(_this, arguments_);
              _context.next = 13;
              return _promise;

            case 13:
              result = _context.sent;
              _context.prev = 14;
              return _context.abrupt("return", result);

            case 16:
              _context.prev = 16;

              if (!cache) {
                _context.next = 20;
                break;
              }

              _context.next = 20;
              return cache.set(key, result);

            case 20:
              return _context.finish(16);

            case 21:
              _context.prev = 21;
              promiseCache.delete(key);
              return _context.finish(21);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 21, 24], [14,, 16, 21]]);
    }))();

    promiseCache.set(key, promise);
    return promise;
  };

  mimicFunction(memoized, fn, {
    ignoreNonConfigurable: true
  });
  cacheStore.set(memoized, cache);
  return memoized;
}

function deferredPromise() {
  var rel, rej;
  var promise = new Promise(function (resolve, reject) {
    rel = resolve;
    rej = reject;
  });
  promise.resolve = rel;
  promise.reject = rej;
  return promise;
}

var rawWindow = window.__isZMF__ ? window.rawWindow : window;
var rawDoc = rawWindow.document;
var rawAppendChild = Node.prototype.appendChild;
var rawInsertBefore = Node.prototype.insertBefore;
rawDoc.createElement;

var emptyFn = function emptyFn() {};

var isString = function isString(p) {
  return Object.prototype.toString.call(p) === '[object String]';
};

var defer = Promise.resolve().then.bind(Promise.resolve());

var fetch = function () {
  var cache = {};
  return function fetchSource(url) {
    if (cache[url]) return Promise.resolve(cache[url]);
    return rawWindow.fetch(url, {
      mode: 'cors'
    }).then( /*#__PURE__*/function () {
      var _ref6 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(r) {
        var code;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return r.text();

              case 2:
                code = _context2.sent;
                return _context2.abrupt("return", cache[url] = {
                  code: code,
                  loaded: false
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }());
  };
}();

var isAvailableUrl = function isAvailableUrl(url) {
  var showMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  try {
    new URL(url);
    return true;
  } catch (e) {
    if (showMsg) {
      log.error(e);
    }

    return false;
  }
};

var bindLexicalScope = function bindLexicalScope(code, proxyWindow, proxyDocument) {
  return new Function('window', 'document', "\n       ".concat(code, ";\n    ").trim())(proxyWindow, proxyDocument);
};

var pFetchSource = pMemoize(fetch);

var loadScript = function loadScript(url) {
  var defer = deferredPromise();
  var doc = rawWindow.document,
      scriptDomInstance;
  var scripts = rawWindow.document.getElementsByTagName('script'); // cache

  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src === url) {
      scriptDomInstance = scripts[i];
      defer.resolve();
      break;
    }
  }

  if (!scriptDomInstance) {
    scriptDomInstance = doc.createElement('script');
    scriptDomInstance.src = url;

    scriptDomInstance.onload = function onload() {
      defer.resolve();
    };

    scriptDomInstance.onerror = function onError(e) {
      defer.reject(e);
    };

    doc.head.appendChild(scriptDomInstance);
  }

  return defer;
};

var pLoadScript = pMemoize(loadScript);

var pathJoin = function pathJoin(basePath, joinPath) {
  // 是带域名的绝对路径
  if (isAvailableUrl(joinPath, false)) {
    return joinPath;
  }

  var urlInfo = new URL(basePath); // https://a.com + /a/b.xxx

  if (/^\//.test(joinPath)) {
    return urlInfo.origin + joinPath;
  } // https://a.com/a/b/c.xxx + ./m/y.ttt


  if (/^.\//.test(joinPath)) {
    var paths = urlInfo.pathname.split('/');
    paths.pop();
    return urlInfo.origin + paths.join('/') + joinPath;
  } // https://a.com/a/b/c.xxx + ../../m/y.ttt


  if (/^(\.\.\/)/.test(joinPath)) {
    var parentLevelLength = (joinPath.match(/\.\.\//g) || []).length;

    var _paths = urlInfo.pathname.split('/');

    _paths.pop();

    var targetPath = joinPath.replace(/\.\.\//g, '');
    return urlInfo.origin + _paths.slice(0, _paths.length - parentLevelLength).join('/') + '/' + targetPath;
  }

  return joinPath;
};

var log = {
  info: function info(msg) {
    console.info("INFO: ".concat(msg));
  },
  warn: function warn(msg) {
    console.warn("WARN: ".concat(msg));
  },
  error: function error(msg) {
    console.error("ERROR: ".concat(msg));
  }
}; // 发布订阅系统

var EventCenter = /*#__PURE__*/function () {
  function EventCenter() {
    (0,classCallCheck/* default */.Z)(this, EventCenter);

    (0,defineProperty/* default */.Z)(this, "eventList", new Map());
  }

  (0,createClass/* default */.Z)(EventCenter, [{
    key: "on",
    value:
    /**
     * 绑定监听函数
     * @param name 事件名称
     * @param f 绑定函数
     */
    function on(name, f) {
      var eventInfo = this.eventList.get(name); // 如果没有缓存，则初始化

      if (!eventInfo) {
        eventInfo = {
          data: {},
          callbacks: new Set()
        }; // 放入缓存

        this.eventList.set(name, eventInfo);
      } // 记录绑定函数


      eventInfo.callbacks.add(f);
    } // 解除绑定

  }, {
    key: "off",
    value: function off(name, f) {
      var eventInfo = this.eventList.get(name); // eventInfo存在且f为函数则卸载指定函数,否则卸载所有函数

      if (eventInfo) {
        if (typeof f === 'function') {
          eventInfo.callbacks.delete(f);
        } else {
          eventInfo.callbacks = new Set();
        }
      }
    } // 发送数据

  }, {
    key: "dispatch",
    value: function dispatch(name, data) {
      var eventInfo = this.eventList.get(name); // 当数据不相等时才更新

      if (eventInfo && eventInfo.data !== data) {
        eventInfo.data = data; // 遍历执行所有绑定函数

        var _iterator2 = _createForOfIteratorHelper(eventInfo.callbacks),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var f = _step2.value;
            f(data);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }]);

  return EventCenter;
}(); // 实例化发布订阅对象


var eventCenter = new EventCenter(); // 应用的数据通信方法集合

var EventCenterForApp = /*#__PURE__*/function () {
  function EventCenterForApp(appId) {
    (0,classCallCheck/* default */.Z)(this, EventCenterForApp);

    this.appId = appId;
  }
  /**
   * 向指定应用发送数据
   * @param appIds 应用id,可为多个,单个唯一不可以重复（父应用往多个应用发送数据）
   * @param data 对象数据
   */


  (0,createClass/* default */.Z)(EventCenterForApp, [{
    key: "dispatch",
    value: function dispatch(appIds, data) {
      if (Array.isArray(appIds)) {
        appIds.map(function (appId) {
          eventCenter.dispatch(appId, data);
        });
      }
    }
    /**
     * 监听基座应用发送的数据
     * @param cb 绑定函数
     */

  }, {
    key: "addDataListener",
    value: function addDataListener(cb) {
      eventCenter.on(this.appId, cb);
    }
    /**
     * 清空某个应用的监听函数
     * @param appId 子应用名称
     */

  }, {
    key: "clearDataListener",
    value: function clearDataListener() {
      eventCenter.off(this.appId);
    }
  }]);

  return EventCenterForApp;
}(); // http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027


var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

function parse(css, options) {
  options = options || {};
  /**
   * Positional.
   */

  var lineno = 1;
  var column = 1;
  /**
   * Update lineno and column based on `str`.
   */

  function updatePosition(str) {
    var lines = str.match(/\n/g);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf('\n');
    column = ~i ? str.length - i : column + str.length;
  }
  /**
   * Mark position and patch `node.position`.
   */


  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  /**
   * Store position information for a node
   */


  function Position(start) {
    this.start = start;
    this.end = {
      line: lineno,
      column: column
    };
    this.source = options.source;
  }
  /**
   * Non-enumerable source string
   */


  Position.prototype.content = css;
  /**
   * Error `msg`.
   */

  var errorsList = [];

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }
  /**
   * Parse stylesheet.
   */


  function stylesheet() {
    var rulesList = rules();
    return {
      type: 'stylesheet',
      stylesheet: {
        source: options.source,
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
  }
  /**
   * Opening brace.
   */


  function open() {
    return match(/^{\s*/);
  }
  /**
   * Closing brace.
   */


  function close() {
    return match(/^}/);
  }
  /**
   * Parse ruleset.
   */


  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);

    while (css.length && css.charAt(0) != '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }

    return rules;
  }
  /**
   * Match `re` and return captures.
   */


  function match(re) {
    var m = re.exec(css);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }
  /**
   * Parse whitespace.
   */


  function whitespace() {
    match(/^\s*/);
  }
  /**
   * Parse comments;
   */


  function comments(rules) {
    var c;
    rules = rules || [];

    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }

    return rules;
  }
  /**
   * Parse comment.
   */


  function comment() {
    var pos = position();
    if ('/' != css.charAt(0) || '*' != css.charAt(1)) return;
    var i = 2;

    while ("" != css.charAt(i) && ('*' != css.charAt(i) || '/' != css.charAt(i + 1))) {
      ++i;
    }

    i += 2;

    if ("" === css.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;
    return pos({
      type: 'comment',
      comment: str
    });
  }
  /**
   * Parse selector.
   */


  function selector() {
    var m = match(/^([^{]+)/);
    if (!m) return;
    /* @fix Remove all comments from selectors
     * http://ostermiller.org/findcomment.html */

    var s = trim(m[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '').replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
      return m.replace(/,/g, "\u200C");
    }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
      // add by yangtao
      // 把 html 换成 zmf-app
      // 吧 body 换成 zmf-app-body
      var patchedSelector = s;

      if (options.selectorsMap[s]) {
        patchedSelector = options.selectorsMap[patchedSelector];
      }

      return patchedSelector.replace(/\u200C/g, ',');
    }); // add by yangtao
    // .xxx .yyy => zmf-app[xxx=yy] .xxx .yyy

    if (options.scopeSelectorPrefix) {
      s[0] = options.scopeSelectorPrefix + ' ' + s[0];
    }

    return s;
  }
  /**
   * Parse declaration.
   */


  function declaration() {
    var pos = position(); // prop

    var prop = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) return;
    prop = trim(prop[0]); // :

    if (!match(/^:\s*/)) return error("property missing ':'"); // val

    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
    var ret = pos({
      type: 'declaration',
      property: prop.replace(commentre, ''),
      value: val ? trim(val[0]).replace(commentre, '') : ''
    }); // ;

    match(/^[;\s]*/); // add by yangtao
    // 补全 css url 路径

    if (/url\(/.test(ret.value) && options.baseUrl) {
      // path 路径里不带, 空格, 单双引号
      ret.value = ret.value.replace(/url\(['"]*([^,\s'"]+)['"]*\)/gm, function (match, group) {
        return "url('".concat(pathJoin(options.baseUrl, group), "')");
      });
    }

    return ret;
  }
  /**
   * Parse declarations.
   */


  function declarations() {
    var decls = [];
    if (!open()) return error("missing '{'");
    comments(decls); // declarations

    var decl;

    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    if (!close()) return error("missing '}'");
    return decls;
  }
  /**
   * Parse keyframe.
   */


  function keyframe() {
    var m;
    var vals = [];
    var pos = position();

    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }

    if (!vals.length) return;
    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations()
    });
  }
  /**
   * Parse keyframes.
   */


  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);
    if (!m) return;
    var vendor = m[1]; // identifier

    var m = match(/^([-\w]+)\s*/);
    if (!m) return error("@keyframes missing name");
    var name = m[1];
    if (!open()) return error("@keyframes missing '{'");
    var frame;
    var frames = comments();

    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }

    if (!close()) return error("@keyframes missing '}'");
    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames
    });
  }
  /**
   * Parse supports.
   */


  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);
    if (!m) return;
    var supports = trim(m[1]);
    if (!open()) return error("@supports missing '{'");
    var style = comments().concat(rules());
    if (!close()) return error("@supports missing '}'");
    return pos({
      type: 'supports',
      supports: supports,
      rules: style
    });
  }
  /**
   * Parse host.
   */


  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);
    if (!m) return;
    if (!open()) return error("@host missing '{'");
    var style = comments().concat(rules());
    if (!close()) return error("@host missing '}'");
    return pos({
      type: 'host',
      rules: style
    });
  }
  /**
   * Parse media.
   */


  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);
    if (!m) return;
    var media = trim(m[1]);
    if (!open()) return error("@media missing '{'");
    var style = comments().concat(rules());
    if (!close()) return error("@media missing '}'");
    return pos({
      type: 'media',
      media: media,
      rules: style
    });
  }
  /**
   * Parse custom-media.
   */


  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) return;
    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2])
    });
  }
  /**
   * Parse paged media.
   */


  function atpage() {
    var pos = position();
    var m = match(/^@page */);
    if (!m) return;
    var sel = selector() || [];
    if (!open()) return error("@page missing '{'");
    var decls = comments(); // declarations

    var decl;

    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) return error("@page missing '}'");
    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls
    });
  }
  /**
   * Parse document.
   */


  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) return;
    var vendor = trim(m[1]);
    var doc = trim(m[2]);
    if (!open()) return error("@document missing '{'");
    var style = comments().concat(rules());
    if (!close()) return error("@document missing '}'");
    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style
    });
  }
  /**
   * Parse font-face.
   */


  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);
    if (!m) return;
    if (!open()) return error("@font-face missing '{'");
    var decls = comments(); // declarations

    var decl;

    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) return error("@font-face missing '}'");
    return pos({
      type: 'font-face',
      declarations: decls
    });
  }
  /**
   * Parse import
   */


  var atimport = _compileAtrule('import');
  /**
   * Parse charset
   */


  var atcharset = _compileAtrule('charset');
  /**
   * Parse namespace
   */


  var atnamespace = _compileAtrule('namespace');
  /**
   * Parse non-block at-rules
   */


  function _compileAtrule(name) {
    var re = new RegExp('^@' + name + '\\s*([^;]+);');
    return function () {
      var pos = position();
      var m = match(re);
      if (!m) return;
      var ret = {
        type: name
      };
      ret[name] = m[1].trim();
      return pos(ret);
    };
  }
  /**
   * Parse at rule.
   */


  function atrule() {
    if (css[0] != '@') return;
    return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface();
  }
  /**
   * Parse rule.
   */


  function rule() {
    var pos = position();
    var sel = selector();
    if (!sel) return error('selector missing');
    comments();
    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    });
  }

  return addParent(stylesheet());
}
/**
 * Trim `str`.
 */


function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
/**
 * Adds non-enumerable parent node reference to each node.
 */


function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;

  for (var k in obj) {
    var value = obj[k];

    if (Array.isArray(value)) {
      value.forEach(function (v) {
        addParent(v, childParent);
      });
    } else if (value && typeof value === 'object') {
      addParent(value, childParent);
    }
  }

  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }

  return obj;
}
/**
 * Initialize a compiler.
 *
 * @param {Type} name
 * @return {Type}
 * @api public
 */


function Compiler$2(opts) {
  this.options = opts || {};
}
/**
 * Emit `str`
 */


Compiler$2.prototype.emit = function (str) {
  return str;
};
/**
 * Visit `node`.
 */


Compiler$2.prototype.visit = function (node) {
  return this[node.type](node);
};
/**
 * Map visit over array of `nodes`, optionally using a `delim`
 */


Compiler$2.prototype.mapVisit = function (nodes, delim) {
  var buf = '';
  delim = delim || '';

  for (var i = 0, length = nodes.length; i < length; i++) {
    buf += this.visit(nodes[i]);
    if (delim && i < length - 1) buf += this.emit(delim);
  }

  return buf;
};

function inherits$1(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}
/**
 * Initialize a new `Compiler`.
 */


function Compiler$1(options) {
  Compiler$2.call(this, options);
}
/**
 * Inherit from `Base.prototype`.
 */


inherits$1(Compiler$1, Compiler$2);
/**
 * Compile `node`.
 */

Compiler$1.prototype.compile = function (node) {
  return node.stylesheet.rules.map(this.visit, this).join('');
};
/**
 * Visit comment node.
 */


Compiler$1.prototype.comment = function (node) {
  return this.emit('', node.position);
};
/**
 * Visit import node.
 */


Compiler$1.prototype.import = function (node) {
  return this.emit('@import ' + node.import + ';', node.position);
};
/**
 * Visit media node.
 */


Compiler$1.prototype.media = function (node) {
  return this.emit('@media ' + node.media, node.position) + this.emit('{') + this.mapVisit(node.rules) + this.emit('}');
};
/**
 * Visit document node.
 */


Compiler$1.prototype.document = function (node) {
  var doc = '@' + (node.vendor || '') + 'document ' + node.document;
  return this.emit(doc, node.position) + this.emit('{') + this.mapVisit(node.rules) + this.emit('}');
};
/**
 * Visit charset node.
 */


Compiler$1.prototype.charset = function (node) {
  return this.emit('@charset ' + node.charset + ';', node.position);
};
/**
 * Visit namespace node.
 */


Compiler$1.prototype.namespace = function (node) {
  return this.emit('@namespace ' + node.namespace + ';', node.position);
};
/**
 * Visit supports node.
 */


Compiler$1.prototype.supports = function (node) {
  return this.emit('@supports ' + node.supports, node.position) + this.emit('{') + this.mapVisit(node.rules) + this.emit('}');
};
/**
 * Visit keyframes node.
 */


Compiler$1.prototype.keyframes = function (node) {
  return this.emit('@' + (node.vendor || '') + 'keyframes ' + node.name, node.position) + this.emit('{') + this.mapVisit(node.keyframes) + this.emit('}');
};
/**
 * Visit keyframe node.
 */


Compiler$1.prototype.keyframe = function (node) {
  var decls = node.declarations;
  return this.emit(node.values.join(','), node.position) + this.emit('{') + this.mapVisit(decls) + this.emit('}');
};
/**
 * Visit page node.
 */


Compiler$1.prototype.page = function (node) {
  var sel = node.selectors.length ? node.selectors.join(', ') : '';
  return this.emit('@page ' + sel, node.position) + this.emit('{') + this.mapVisit(node.declarations) + this.emit('}');
};
/**
 * Visit font-face node.
 */


Compiler$1.prototype['font-face'] = function (node) {
  return this.emit('@font-face', node.position) + this.emit('{') + this.mapVisit(node.declarations) + this.emit('}');
};
/**
 * Visit host node.
 */


Compiler$1.prototype.host = function (node) {
  return this.emit('@host', node.position) + this.emit('{') + this.mapVisit(node.rules) + this.emit('}');
};
/**
 * Visit custom-media node.
 */


Compiler$1.prototype['custom-media'] = function (node) {
  return this.emit('@custom-media ' + node.name + ' ' + node.media + ';', node.position);
};
/**
 * Visit rule node.
 */


Compiler$1.prototype.rule = function (node) {
  var decls = node.declarations;
  if (!decls.length) return '';
  return this.emit(node.selectors.join(','), node.position) + this.emit('{') + this.mapVisit(decls) + this.emit('}');
};
/**
 * Visit declaration node.
 */


Compiler$1.prototype.declaration = function (node) {
  return this.emit(node.property + ':' + node.value, node.position) + this.emit(';');
}; // var inherits = require('inherits');


function index_esm_inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
}
/**
 * Initialize a new `Compiler`.
 */


function Compiler(options) {
  options = options || {};
  Compiler$2.call(this, options);
  this.indentation = options.indent;
}
/**
 * Inherit from `Base.prototype`.
 */


index_esm_inherits(Compiler, Compiler$2);
/**
 * Compile `node`.
 */

Compiler.prototype.compile = function (node) {
  return this.stylesheet(node);
};
/**
 * Visit stylesheet node.
 */


Compiler.prototype.stylesheet = function (node) {
  return this.mapVisit(node.stylesheet.rules, '\n\n');
};
/**
 * Visit comment node.
 */


Compiler.prototype.comment = function (node) {
  return this.emit(this.indent() + '/*' + node.comment + '*/', node.position);
};
/**
 * Visit import node.
 */


Compiler.prototype.import = function (node) {
  return this.emit('@import ' + node.import + ';', node.position);
};
/**
 * Visit media node.
 */


Compiler.prototype.media = function (node) {
  return this.emit('@media ' + node.media, node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(node.rules, '\n\n') + this.emit(this.indent(-1) + '\n}');
};
/**
 * Visit document node.
 */


Compiler.prototype.document = function (node) {
  var doc = '@' + (node.vendor || '') + 'document ' + node.document;
  return this.emit(doc, node.position) + this.emit(' ' + ' {\n' + this.indent(1)) + this.mapVisit(node.rules, '\n\n') + this.emit(this.indent(-1) + '\n}');
};
/**
 * Visit charset node.
 */


Compiler.prototype.charset = function (node) {
  return this.emit('@charset ' + node.charset + ';', node.position);
};
/**
 * Visit namespace node.
 */


Compiler.prototype.namespace = function (node) {
  return this.emit('@namespace ' + node.namespace + ';', node.position);
};
/**
 * Visit supports node.
 */


Compiler.prototype.supports = function (node) {
  return this.emit('@supports ' + node.supports, node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(node.rules, '\n\n') + this.emit(this.indent(-1) + '\n}');
};
/**
 * Visit keyframes node.
 */


Compiler.prototype.keyframes = function (node) {
  return this.emit('@' + (node.vendor || '') + 'keyframes ' + node.name, node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(node.keyframes, '\n') + this.emit(this.indent(-1) + '}');
};
/**
 * Visit keyframe node.
 */


Compiler.prototype.keyframe = function (node) {
  var decls = node.declarations;
  return this.emit(this.indent()) + this.emit(node.values.join(', '), node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(decls, '\n') + this.emit(this.indent(-1) + '\n' + this.indent() + '}\n');
};
/**
 * Visit page node.
 */


Compiler.prototype.page = function (node) {
  var sel = node.selectors.length ? node.selectors.join(', ') + ' ' : '';
  return this.emit('@page ' + sel, node.position) + this.emit('{\n') + this.emit(this.indent(1)) + this.mapVisit(node.declarations, '\n') + this.emit(this.indent(-1)) + this.emit('\n}');
};
/**
 * Visit font-face node.
 */


Compiler.prototype['font-face'] = function (node) {
  return this.emit('@font-face ', node.position) + this.emit('{\n') + this.emit(this.indent(1)) + this.mapVisit(node.declarations, '\n') + this.emit(this.indent(-1)) + this.emit('\n}');
};
/**
 * Visit host node.
 */


Compiler.prototype.host = function (node) {
  return this.emit('@host', node.position) + this.emit(' {\n' + this.indent(1)) + this.mapVisit(node.rules, '\n\n') + this.emit(this.indent(-1) + '\n}');
};
/**
 * Visit custom-media node.
 */


Compiler.prototype['custom-media'] = function (node) {
  return this.emit('@custom-media ' + node.name + ' ' + node.media + ';', node.position);
};
/**
 * Visit rule node.
 */


Compiler.prototype.rule = function (node) {
  var indent = this.indent();
  var decls = node.declarations;
  if (!decls.length) return '';
  return this.emit(node.selectors.map(function (s) {
    return indent + s;
  }).join(',\n'), node.position) + this.emit(' {\n') + this.emit(this.indent(1)) + this.mapVisit(decls, '\n') + this.emit(this.indent(-1)) + this.emit('\n' + this.indent() + '}');
};
/**
 * Visit declaration node.
 */


Compiler.prototype.declaration = function (node) {
  return this.emit(this.indent()) + this.emit(node.property + ': ' + node.value, node.position) + this.emit(';');
};
/**
 * Increase, decrease or return current indentation.
 */


Compiler.prototype.indent = function (level) {
  this.level = this.level || 1;

  if (null != level) {
    this.level += level;
    return '';
  }

  return Array(this.level).join(this.indentation || '  ');
};
/**
 * Stringfy the given AST `node`.
 *
 * Options:
 *
 *  - `compress` space-optimized output
 *  - `sourcemap` return an object with `.code` and `.map`
 *
 * @param {Object} node
 * @param {Object} [options]
 * @return {String}
 * @api public
 */


function stringify(node, options) {
  options = options || {};
  var compiler = options.compress ? new Compiler$1(options) : new Compiler(options); // source maps
  // if (options.sourcemap) {
  //   var sourcemaps = require('./source-map-support');
  //   sourcemaps(compiler);
  //   var code = compiler.compile(node);
  //   compiler.applySourceMaps();
  //   var map = options.sourcemap === 'generator'
  //     ? compiler.map
  //     : compiler.map.toJSON();
  //   return { code: code, map: map };
  // }

  var code = compiler.compile(node);
  return code;
}

var css = {
  parse: parse,
  stringify: stringify
};
var appsMap = new Map();

var setApp = function setApp(id, instance) {
  if (appsMap.has(id)) {
    log.error("App ".concat(id, " \u5DF2\u5B58\u5728, \u91CD\u590D\u5B9E\u4F8B\u5316\u5931\u8D25."));
    return false;
  }

  appsMap.set(id, instance);
  return true;
};

var getApp = function getApp(id) {
  return appsMap.get(id);
};

var getApps = function getApps() {
  return Array.from(appsMap.values);
};

var removeApp = function removeApp(id) {
  return appsMap.delete(id);
};

var currentRuningApp = '';

function setCurrentRuningApp(appId) {
  if (currentRuningApp === appId) return;
  currentRuningApp = appId;
  defer(function () {
    currentRuningApp = '';
  });
}

function getCurrentRuningApp() {
  return currentRuningApp;
}

function getModuleFactorys(containerId) {
  return rawWindow["__ZMF_".concat(containerId.toUpperCase(), "_WEBPACK_MODULES__")];
}

function getRemoteAppOriginWebpackRequire(containerId) {
  return rawWindow["__ZMF_".concat(containerId.toUpperCase(), "_WEBPACK_REQUIRE__")];
}

var federationModuleRequire = /*#__PURE__*/function () {
  function federationModuleRequire(options) {
    (0,classCallCheck/* default */.Z)(this, federationModuleRequire);

    this.cache = {};
    this.options = options;
    this.moduleFactorys = getModuleFactorys(this.options.containerId);
    this.bindedThisRequire = this.copyOriginRequireMethods(getRemoteAppOriginWebpackRequire(this.options.containerId));
  }

  (0,createClass/* default */.Z)(federationModuleRequire, [{
    key: "copyOriginRequireMethods",
    value: function copyOriginRequireMethods(webpackRequire) {
      // 传入 module factory 里执行防止 this 丢失
      var newRequire = this.require.bind(this);

      Object.keys(webpackRequire).forEach(function (key) {
        return newRequire[key] = webpackRequire[key];
      });
      newRequire.__containerId__ = this.options.containerId;
      return newRequire;
    }
  }, {
    key: "require",
    value: function require(mid) {
      // 模块 id 生产模式下可能是数字，要转成字符串，才能去 consumesIds 里查找
      var moduleId = typeof mid === 'number' ? '' + mid : mid;
      var remoteAppOriginWebpackRequire = getRemoteAppOriginWebpackRequire(this.options.containerId); //  "webpack/sharing/consume/default/xx/xx?4a07"

      if (remoteAppOriginWebpackRequire.f.consumes.consumesIds.includes(moduleId)) {
        return remoteAppOriginWebpackRequire(moduleId);
      }

      var cachedModule = this.cache[moduleId];
      var _this$options = this.options,
          proxyWindow = _this$options.proxyWindow,
          proxyDocument = _this$options.proxyDocument;
      var moduleFactorys = this.moduleFactorys;

      if (cachedModule !== undefined) {
        if (cachedModule.error !== undefined) throw cachedModule.error;
        return cachedModule.exports;
      }

      var webpackModule = this.cache[moduleId] = {
        id: moduleId,
        loaded: false,
        exports: {}
      };

      try {
        var factory = bindLexicalScope("return  ".concat(moduleFactorys[moduleId].toString()), proxyWindow, proxyDocument);
        var execOptions = {
          id: moduleId,
          module: webpackModule,
          factory: factory,
          // 传入 module factory 里执行下一个 require 防止 this 丢失
          require: this.bindedThisRequire
        }; // 这里做个兼容， 生产环境是没有 HRM 代码的

        (this.bindedThisRequire.i || []).forEach(function (handler) {
          return handler(execOptions);
        });
        execOptions.factory.call(webpackModule.exports, webpackModule, webpackModule.exports, execOptions.require);
      } catch (e) {
        webpackModule.error = e;
        throw e;
      }

      webpackModule.loaded = true;
      return webpackModule.exports;
    }
  }]);

  return federationModuleRequire;
}();

function getZmfConfig() {
  return rawWindow.__ZMF__ || {};
}

function getEntry(containerName) {
  return "".concat(getZmfConfig()[containerName], "/").concat(containerName, ".remoteEntry.js");
}

function getModuleFactoryId(fn) {
  var str = fn.toString() // (/*! ./x/y.js */ "./x/y.js") => ("./x/y.js")
  .replace(/\s*\/\*.+?\*\/\s*/, ''); // () => ((__webpack_require__("./src/bootstrap.js")))
  // function(){return n(1794)}

  var ret = /['"](.+)['"]/.exec(str) || /\((\d+)\)/.exec(str);

  if (!ret) {
    throw "function `".concat(str, "` can not match module factory id.");
  }

  return ret[1];
}

var domAppendOrInsertHanders = {
  '[object HTMLStyleElement]': function objectHTMLStyleElement(dom, containerId) {
    if (dom.textContent) {
      parseInlineStyle(dom.textContent, containerId).then(function (code) {
        dom.textContent = code;
      });
    }
  },
  '[object HTMLLinkElement]': function objectHTMLLinkElement(dom, containerId) {
    var href = dom.href;
    var inlineStyleEl = rawDoc.createElement('style');
    var ctx = this;
    inlineStyleEl.dataset.f = dom.href;

    inlineStyleEl.onload = dom.onload || function onload() {};

    inlineStyleEl.onerror = dom.onerror || function onerror() {};

    parseLinkStyle(href, containerId).then(function (scopedCSSCode) {
      var textNode = document.createTextNode(scopedCSSCode);
      textNode.__scoped__ = true;
      inlineStyleEl.appendChild(textNode);
    }); // 样式都添加根 doc head

    if (this.nodeName.toLowerCase() === 'zmf-app-head') {
      ctx = rawDoc.head;
    }

    return {
      resolvedCtx: ctx,
      resolvedDom: inlineStyleEl
    };
  },
  '[object HTMLScriptElement]': function objectHTMLScriptElement(dom, currentRuningAppId) {
    var _this2 = this;

    if (!isAvailableUrl(dom.src)) {
      return false;
    } else {
      var onload = (dom.onload || function onload() {}).bind(this);

      var onerror = (dom.onerror || function onerror() {}).bind(this);

      pFetchSource(dom.src).then(function (ret) {
        if (ret.loaded) return;
        var currentRuningApp = getApp(currentRuningAppId);
        bindLexicalScope(ret.code, currentRuningApp.proxyWindow, currentRuningApp.proxyWindow.proxyDoc);
        onload();

        _this2.appendChild(rawDoc.createComment(" replace ".concat(dom.src, " by micro-module-federation ")));

        ret.loaded = true;
      }).catch(function (e) {
        onerror(e);
      });
      return true;
    }
  }
};

function getContainerIdFromAppid(id) {
  // xx_containerId/moduleName;
  return id.split('_').pop().split('/')[0];
}

function parseLinkStyle(url, scopeAttr) {
  return pFetchSource(url).then(function (ret) {
    if (ret.loaded) return;
    var scopedStyle = parseStyle(ret.code, scopeAttr, url);
    ret.load = true;
    return scopedStyle;
  });
}

function parseInlineStyle(code, scopeAttr, baseUrl) {
  return Promise.resolve(parseStyle(code, scopeAttr, baseUrl));
}

function parseStyle(code, scopeAttr, baseUrl) {
  var cssAst = css.parse(code, {
    baseUrl: baseUrl,
    scopeSelectorPrefix: "zmf-app[data-cid=".concat(scopeAttr, "]"),
    selectorsMap: {
      html: 'zmf-app',
      body: 'zmf-app-body'
    }
  });
  return css.stringify(cssAst);
}

var patchFns = {
  appendChild: function appendChild(dom) {
    var domType = Object.prototype.toString.call(dom);
    var currentRuningAppId = getCurrentRuningApp();
    var containerId = getContainerIdFromAppid(currentRuningAppId);
    var ctx = this;
    var replacementDom = dom; // 外链样式

    if (containerId && replacementDom instanceof HTMLLinkElement && replacementDom.href) {
      var _domAppendOrInsertHan = domAppendOrInsertHanders[domType].bind(this)(replacementDom, containerId),
          resolvedDom = _domAppendOrInsertHan.resolvedDom,
          resolvedCtx = _domAppendOrInsertHan.resolvedCtx;

      return rawAppendChild.call(resolvedCtx, resolvedDom);
    } else if (containerId && replacementDom instanceof HTMLStyleElement && replacementDom.textNode) {
      // 内联样式只是转换 textContent 就行
      domAppendOrInsertHanders[domType].bind(this)(replacementDom, containerId);
    } else if (containerId && replacementDom.nodeName === '#text' && ctx.nodeName.toLowerCase() === 'style' && !replacementDom.__scoped__) {
      domAppendOrInsertHanders['[object HTMLStyleElement]'].bind(this)(replacementDom, containerId);
    } // 当执行真正的 factory 时候的 dom 操作.


    if (currentRuningAppId && // INIT 初始化下载 thunk 阶段的不用绑定 win, doc
    !/INIT:/.test(currentRuningAppId) && domAppendOrInsertHanders[domType] && domAppendOrInsertHanders[domType].bind(this)(dom, currentRuningAppId)) {
      return;
    }

    return rawAppendChild.call(ctx, replacementDom);
  },
  insertBefore: function insertBefore(dom, referenceNode) {
    var domType = Object.prototype.toString.call(dom);
    var currentRuningAppId = getCurrentRuningApp();
    var containerId = getContainerIdFromAppid(currentRuningAppId);
    var ctx = this; // 外链样式

    if (containerId && dom instanceof HTMLLinkElement && dom.href) {
      var _domAppendOrInsertHan2 = domAppendOrInsertHanders[domType].bind(this)(dom, containerId),
          resolvedDom = _domAppendOrInsertHan2.resolvedDom,
          resolvedCtx = _domAppendOrInsertHan2.resolvedCtx;

      return rawInsertBefore.call(resolvedCtx, resolvedDom, referenceNode);
    } else if (containerId && dom instanceof HTMLStyleElement) {
      domAppendOrInsertHanders[domType].bind(this)(dom, containerId);
    } else if (containerId && dom.nodeName === '#text' && ctx.nodeName.toLowerCase() === 'style' && !dom.__scoped__) {
      domAppendOrInsertHanders['[object HTMLStyleElement]'].bind(this)(dom, containerId);
    }

    if (currentRuningAppId && // INIT 初始化下载 thunk 阶段的不用绑定 win, doc
    !/INIT:/.test(currentRuningAppId) && domAppendOrInsertHanders[domType] && domAppendOrInsertHanders[domType].bind(this)(dom, currentRuningAppId)) {
      return;
    }

    return rawInsertBefore.call(ctx, dom, referenceNode);
  }
};

function patchDomAppendOrInsert() {
  if (Node.prototype.appendChild === patchFns.appendChild) return;
  Object.assign(Node.prototype, patchFns);
}

function freePatchDomAppendOrInsert() {
  Node.prototype.appendChild = rawAppendChild;
  Node.prototype.insertBefore = rawInsertBefore;
}

function loadFederationModule(_x2, _x3, _x4) {
  return _loadFederationModule.apply(this, arguments);
}

function _loadFederationModule() {
  _loadFederationModule = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee4(container, moduleName, appid) {
    return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __webpack_require__.I('default');

          case 2:
            _context4.next = 4;
            return rawWindow[container].init(__webpack_require__.S.default);

          case 4:
            setCurrentRuningApp("INIT:".concat(appid));
            return _context4.abrupt("return", rawWindow[container].get("./".concat(moduleName)));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _loadFederationModule.apply(this, arguments);
}

var nodeNameMap = {
  head: 'zmf-app-head',
  body: 'zmf-app-body'
};
var documentOperateRedirect = {
  head: function head() {
    return this.querySelector('zmf-app-head');
  },
  body: function body() {
    return this.querySelector('zmf-app-body');
  },
  images: function images() {
    // HTMLCollection
    return this.getElementsByTagName('img');
  },
  addEventListener: function addEventListener() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.addEventListener.apply(this, args);
  },
  removeEventListener: function removeEventListener() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.removeEventListener.apply(this, args);
  },
  querySelector: function querySelector(selector) {
    var lowerCaseSelector = selector.toLowerCase();
    return this.querySelector(nodeNameMap[lowerCaseSelector] ? nodeNameMap[lowerCaseSelector] : selector);
  },
  querySelectorAll: function querySelectorAll(selector) {
    var lowerCaseSelector = selector.toLowerCase();
    return this.querySelectorAll(nodeNameMap[lowerCaseSelector] ? nodeNameMap[lowerCaseSelector] : selector);
  },
  // Element.prototype 下没有 getElementById
  getElementById: function getElementById(id) {
    return this.querySelector("#".concat(id));
  },
  getElementsByClassName: function getElementsByClassName(cls) {
    return this.getElementsByClassName(cls);
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    return this.getElementsByTagName(tagName);
  },
  getElementsByTagNameNS: function getElementsByTagNameNS() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return this.getElementsByTagNameNS.apply(this, args);
  },
  getAnimations: function getAnimations() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return this.getAnimations.apply(this, args);
  }
};
var proxyWindows = {}; // 同一个 host 下的不用 module 共享一个 proxyWindow

function createProxyWindow(containerId, moduleId) {
  if (proxyWindows[containerId]) return proxyWindows[containerId];
  var fakeWindow = {
    rawWindow: rawWindow,
    document: rawDoc,
    __isZMF__: true,
    __MICRO_MODULE_ID__: moduleId
  };
  var proxyWindow = new Proxy(fakeWindow, {
    get: function get(target, prop) {
      var value = target[prop] || rawWindow[prop];

      if (typeof value === 'function') {
        return value.bind(rawWindow);
      }

      return value;
    },
    set: function set(obj, prop, value) {
      obj[prop] = value;
      return true;
    }
  });
  return proxyWindows[containerId] = proxyWindow;
}

var App = /*#__PURE__*/function () {
  function App(options) {
    (0,classCallCheck/* default */.Z)(this, App);

    this.options = options;
    this.appId = this.options.id;
    this.module = this.options.module;
    this.containerId = this.options.module.split('/')[0];
    this.remoteEntry = '';
    this.proxyWindow = createProxyWindow(this.containerId, this.appId);
    this.proxyWindow.microApp = new EventCenterForApp(this.appId);
    this.remoteModuleExports = null;
    this.deferredPromise = deferredPromise();
    this.init();
  }

  (0,createClass/* default */.Z)(App, [{
    key: "createProxyDoc",
    value: function createProxyDoc() {
      var shadowRoot = this.shadow.shadowRoot;
      var appId = this.appId;
      return new Proxy(rawDoc, {
        get: function get(target, prop) {
          setCurrentRuningApp(appId);

          if (documentOperateRedirect[prop]) {
            // e.g. document.querySelector, addEventListener
            if (typeof target[prop] === 'function') {
              return documentOperateRedirect[prop].bind(shadowRoot);
            } else {
              // e.g. document.head
              return documentOperateRedirect[prop].call(shadowRoot);
            }
          }

          if (typeof target[prop] === 'function') {
            return target[prop].bind(rawDoc);
          }

          return target[prop];
        },
        set: function set(target, prop, value) {
          // e.g. dom.onclick = function() {}
          if (/^(on)/.test(prop)) {
            shadowRoot[prop] = value;
          } else {
            target[prop] = value;
          }

          return true;
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      setApp(this.appId, this);
      this.resolveShadow();
      this.executeRemoteEntry();
    }
  }, {
    key: "resolveShadow",
    value: function resolveShadow() {
      var shadow = this.options.shadow;
      var shadowRoot = shadow;
      var containerId = this.options.module.split('/')[0];
      shadow.dataset.id = this.options.id;
      shadow.dataset.f = getZmfConfig()[containerId];
      shadow.dataset.cid = containerId;
      this.shadow = {
        shadow: shadow,
        shadowRoot: shadowRoot,
        shadowHead: shadowRoot.querySelector('zmf-app-head'),
        shadowBody: shadowRoot.querySelector('zmf-app-body')
      };
    }
  }, {
    key: "executeRemoteEntry",
    value: function () {
      var _executeRemoteEntry = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee3() {
        var module, _module$split, _module$split2, containerId, moduleName, factory, moduleId, requireInstance;

        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                module = this.options.module;
                _module$split = module.split('/'), _module$split2 = (0,slicedToArray/* default */.Z)(_module$split, 2), containerId = _module$split2[0], moduleName = _module$split2[1];
                this.remoteEntry = getEntry(containerId);
                _context3.next = 5;
                return pLoadScript(this.remoteEntry);

              case 5:
                patchDomAppendOrInsert();
                _context3.next = 8;
                return loadFederationModule(containerId, moduleName, this.appId);

              case 8:
                factory = _context3.sent;
                moduleId = getModuleFactoryId(factory);
                this.proxyWindow.proxyDoc = this.createProxyDoc(this.appId);
                requireInstance = new federationModuleRequire({
                  containerId: containerId,
                  proxyWindow: this.proxyWindow,
                  proxyDocument: this.proxyWindow.proxyDoc
                });
                this.remoteModuleExports = requireInstance.require(moduleId);
                this.deferredPromise.resolve(this);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function executeRemoteEntry() {
        return _executeRemoteEntry.apply(this, arguments);
      }

      return executeRemoteEntry;
    }()
  }, {
    key: "start",
    value: function start() {
      return this.deferredPromise;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      removeApp(this.appId);

      if (!getApps().length) {
        freePatchDomAppendOrInsert();
      }
    }
  }]);

  return App;
}();

var globalLifeCycles = {};

var setGlobalLifeCycle = function setGlobalLifeCycle(lifeCycleName, handler) {
  globalLifeCycles[lifeCycleName] = handler;
};

var getGlobalLifeCycles = function getGlobalLifeCycles() {
  return globalLifeCycles;
};

var webComponentTagName = 'zmf-app';
var execLock = {};

function defineWebComponents() {
  if (rawWindow.customElements.get(webComponentTagName)) return;
  var globalLifeCycles = getGlobalLifeCycles();
  var template = rawWindow.document.createElement('template');
  template.innerHTML = "\n    <zmf-app-head></zmf-app-head>\n    <zmf-app-body></zmf-app-body>\n  ".trim();

  var ZmfWebComponent = /*#__PURE__*/function (_HTMLElement) {
    (0,inherits/* default */.Z)(ZmfWebComponent, _HTMLElement);

    var _super = (0,createSuper/* default */.Z)(ZmfWebComponent);

    function ZmfWebComponent() {
      var _this3;

      (0,classCallCheck/* default */.Z)(this, ZmfWebComponent);

      _this3 = _super.call(this); // const shadow = this.attachShadow({ mode: 'open' });

      _this3.appId = '';
      _this3.app = null;
      return _this3;
    }

    (0,createClass/* default */.Z)(ZmfWebComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this4 = this;

        this.appendChild(template.content.cloneNode(true));
        var name = this.getAttribute('name');
        var module = this.getAttribute('module');

        if (!isString(name)) {
          log.error('options `name` type must be a string.');
          return;
        }

        if (!/^\w+\/\w+$/.test(module)) {
          log.error('options `module` not available, e.g. remoteApp1/someModule');
          return;
        }

        var appId = "".concat(name, "_").concat(module);
        var shadow = this;
        this.appId = appId;
        if (execLock[this.appId]) return;
        execLock[this.appId] = true;
        setTimeout(function () {
          _this4.dispatchEvent(new CustomEvent("".concat(appId, ":beforeMount")));

          globalLifeCycles['beforeMount'](appId);
        }, 0);
        var app = new App({
          shadow: shadow,
          name: name,
          module: module,
          id: appId
        }).start();
        app.then(function (app) {
          _this4.app = app;

          if (typeof app.remoteModuleExports.mount !== 'function') {
            log.error("remote module ".concat(app.module, " rendered by zmf-app must export mount function."));
            return;
          }

          app.remoteModuleExports.mount(app.shadow.shadowBody);

          _this4.dispatchEvent(new CustomEvent("".concat(appId, ":onMount")));

          globalLifeCycles['onMount'](appId);
        }).catch(function (e) {
          _this4.dispatchEvent(new CustomEvent("".concat(appId, ":onError"), {
            detail: e
          }));

          globalLifeCycles['onError'](e, appId);
        }).finally(function () {
          execLock[_this4.appId] = false;
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.dispatchEvent(new CustomEvent("".concat(this.appId, ":onUnmount")));
        globalLifeCycles['onUnmount'](this.appId);
        if (this.app) this.app.destroy();
      }
    }]);

    return ZmfWebComponent;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  rawWindow.customElements.define(webComponentTagName, ZmfWebComponent);
}

var lifeCycleNames = ['beforeMount', 'onMount', 'onUnmount', 'onError'];

function getLifeCycles(options) {
  return Object.keys(options).filter(function (propName) {
    return lifeCycleNames.includes(propName) && typeof options[propName] === 'function';
  });
} // 防止多次 start


var isStart = false;
var defaultOptions = {
  beforeMount: emptyFn,
  onMount: emptyFn,
  onUnmount: emptyFn,
  onError: emptyFn
};

function startMMF() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  if (isStart) return;
  window.baseApp = new EventCenterForApp('baseApp');
  var mergedOpts = Object.assign({}, defaultOptions, options);
  getLifeCycles(mergedOpts).forEach(function (propName) {
    return setGlobalLifeCycle(propName, mergedOpts[propName]);
  });
  defineWebComponents();
  isStart = true;
}


;// CONCATENATED MODULE: ./src/index.js
Promise.all(/* import() */[__webpack_require__.e(170), __webpack_require__.e(856)]).then(__webpack_require__.bind(__webpack_require__, 9014));startMMF({beforeMount:function beforeMount(id){console.log('global beforemount:',id);}});

/***/ }),

/***/ 907:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 3878:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 7326:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 5861:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ 5671:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 3144:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 7277:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _createSuper; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(8814);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && ((0,esm_typeof/* default */.Z)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,assertThisInitialized/* default */.Z)(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,isNativeReflectConstruct/* default */.Z)();
  return function _createSuperInternal() {
    var Super = (0,getPrototypeOf/* default */.Z)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),

/***/ 4942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ 1120:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 136:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9611);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 8814:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
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

/***/ }),

/***/ 5267:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 1413:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);


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
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ 4165:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _regeneratorRuntime; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1002);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

/***/ }),

/***/ 9611:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 9439:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _slicedToArray; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(3878);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(181);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(5267);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return (0,arrayWithHoles/* default */.Z)(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray/* default */.Z)(arr, i) || (0,nonIterableRest/* default */.Z)();
}

/***/ }),

/***/ 1002:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ 181:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(907);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/js/" + chunkId + "." + {"164":"5509618b","170":"b3fccc43","416":"df36d9a4","787":"ec34b57f","791":"7d9c86e6","856":"e0b21d52"}[chunkId] + ".chunk.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "static/css/" + chunkId + "." + {"170":"3babf211","856":"df91fc96"}[chunkId] + ".chunk.css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "app1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	!function() {
/******/ 		var chunkMapping = {};
/******/ 		var idToExternalAndNameMapping = {};
/******/ 		
/******/ 		__webpack_require__.f.remotes = function (chunkId, promises) {
/******/ 		  if (__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 		    chunkMapping[chunkId].forEach(function (id) {
/******/ 		      var getScope = __webpack_require__.R;
/******/ 		      if (!getScope) getScope = [];
/******/ 		      var data = idToExternalAndNameMapping[id];
/******/ 		      if (getScope.indexOf(data) >= 0) return;
/******/ 		      getScope.push(data);
/******/ 		      if (data.p) return promises.push(data.p);
/******/ 		
/******/ 		      var onError = function (error) {
/******/ 		        if (!error) error = new Error("Container missing");
/******/ 		        if (typeof error.message === "string") error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 		        __webpack_modules__[id] = module => {
/******/ 		          console.error(error.message);
/******/ 		          module.exports = Promise.reject(error);
/******/ 		        };;
/******/ 		        data.p = 0;
/******/ 		      };
/******/ 		
/******/ 		      var handleFunction = function (fn, arg1, arg2, d, next, first) {
/******/ 		        try {
/******/ 		          var promise = fn(arg1, arg2);
/******/ 		
/******/ 		          if (promise && promise.then) {
/******/ 		            var p = promise.then(function (result) {
/******/ 		              return next(result, d);
/******/ 		            }, onError);
/******/ 		            if (first) promises.push(data.p = p);else return p;
/******/ 		          } else {
/******/ 		            return next(promise, d, first);
/******/ 		          }
/******/ 		        } catch (error) {
/******/ 		          onError(error);
/******/ 		        }
/******/ 		      };
/******/ 		
/******/ 		      var onExternal = function (external, _, first) {
/******/ 		        return external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError();
/******/ 		      };
/******/ 		
/******/ 		      var onInitialized = function (_, external, first) {
/******/ 		        return handleFunction(external.get, data[1], getScope, 0, onFactory, first);
/******/ 		      };
/******/ 		
/******/ 		      var onFactory = function (factory) {
/******/ 		        data.p = 1;
/******/ 		
/******/ 		        __webpack_modules__[id] = function (module) {
/******/ 		          module.exports = factory();
/******/ 		        };
/******/ 		      };
/******/ 		
/******/ 		      handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 		    });
/******/ 		  }
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	!function() {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = function(name, initScope) {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = function(msg) { return typeof console !== "undefined" && console.warn && console.warn(msg); };
/******/ 			var uniqueName = "app1";
/******/ 			var register = function(name, version, factory, eager) {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = function(id) {
/******/ 				var handleError = function(err) { warn("Initialization of sharing external failed: " + err); };
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = function(module) { return module && module.init && module.init(__webpack_require__.S[name], initScope); }
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("react-dom", "18.2.0", function() { return Promise.all([__webpack_require__.e(164), __webpack_require__.e(416)]).then(function() { return function() { return __webpack_require__(4164); }; }); });
/******/ 					register("react", "18.2.0", function() { return __webpack_require__.e(791).then(function() { return function() { return __webpack_require__(2791); }; }); });
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(function() { return initPromises[name] = 1; });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "https://taotao9125.github.io/hostapp/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	!function() {
/******/ 		var parseVersion = function(str) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=function(p){return p.split(".").map((function(p){return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = function(a, b) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = function(range) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = function(range, version) {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var ensureExistence = function(scopeName, key) {
/******/ 			var scope = __webpack_require__.S[scopeName];
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 			return scope;
/******/ 		};
/******/ 		var findVersion = function(scope, key) {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce(function(a, b) {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = function(scope, key) {
/******/ 			var versions = scope[key];
/******/ 			return Object.keys(versions).reduce(function(a, b) {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = function(scope, key, version, requiredVersion) {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getSingleton = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getSingletonVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var getStrictSingletonVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var version = findSingletonVersionKey(scope, key);
/******/ 			if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			return get(scope[key][version]);
/******/ 		};
/******/ 		var findValidVersion = function(scope, key, requiredVersion) {
/******/ 			var versions = scope[key];
/******/ 			var key = Object.keys(versions).reduce(function(a, b) {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var getInvalidVersionMessage = function(scope, scopeName, key, requiredVersion) {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map(function(key) {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var getValidVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			var entry = findValidVersion(scope, key, requiredVersion);
/******/ 			if(entry) return get(entry);
/******/ 			throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var warnInvalidVersion = function(scope, scopeName, key, requiredVersion) {
/******/ 			typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 		};
/******/ 		var get = function(entry) {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var init = function(fn) { return function(scopeName, a, b, c) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 		}; };
/******/ 		
/******/ 		var load = /*#__PURE__*/ init(function(scopeName, scope, key) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findVersion(scope, key));
/******/ 		});
/******/ 		var loadFallback = /*#__PURE__*/ init(function(scopeName, scope, key, fallback) {
/******/ 			return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 		});
/******/ 		var loadVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init(function(scopeName, scope, key) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getValidVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheck = /*#__PURE__*/ init(function(scopeName, scope, key, version) {
/******/ 			ensureExistence(scopeName, key);
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 		});
/******/ 		var loadSingletonFallback = /*#__PURE__*/ init(function(scopeName, scope, key, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingleton(scope, scopeName, key);
/******/ 		});
/******/ 		var loadSingletonVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var loadStrictVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 			return entry ? get(entry) : fallback();
/******/ 		});
/******/ 		var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init(function(scopeName, scope, key, version, fallback) {
/******/ 			if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 			return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			56: function() { return loadSingletonVersionCheckFallback("default", "react-dom", [4,18,2,0], function() { return Promise.all([__webpack_require__.e(164), __webpack_require__.e(416)]).then(function() { return function() { return __webpack_require__(4164); }; }); }); },
/******/ 			1949: function() { return loadSingletonVersionCheckFallback("default", "react-dom", [0,16,9,0], function() { return Promise.all([__webpack_require__.e(164), __webpack_require__.e(416)]).then(function() { return function() { return __webpack_require__(4164); }; }); }); },
/******/ 			4556: function() { return loadSingletonFallback("default", "react-dom", function() { return Promise.all([__webpack_require__.e(164), __webpack_require__.e(416)]).then(function() { return function() { return __webpack_require__(4164); }; }); }); },
/******/ 			4819: function() { return loadSingletonVersionCheckFallback("default", "react", [0], function() { return __webpack_require__.e(791).then(function() { return function() { return __webpack_require__(2791); }; }); }); },
/******/ 			2747: function() { return loadSingletonVersionCheckFallback("default", "react", [4,18,2,0], function() { return __webpack_require__.e(791).then(function() { return function() { return __webpack_require__(2791); }; }); }); },
/******/ 			8887: function() { return loadSingletonVersionCheckFallback("default", "react", [0,16,0,0], function() { return __webpack_require__.e(791).then(function() { return function() { return __webpack_require__(2791); }; }); }); },
/******/ 			8056: function() { return loadSingletonVersionCheckFallback("default", "react", [0,16,9,0], function() { return __webpack_require__.e(791).then(function() { return function() { return __webpack_require__(2791); }; }); }); },
/******/ 			7082: function() { return loadSingletonFallback("default", "react", function() { return __webpack_require__.e(791).then(function() { return function() { return __webpack_require__(2791); }; }); }); },
/******/ 			8172: function() { return loadSingletonVersionCheckFallback("default", "react", [1,18,2,0], function() { return __webpack_require__.e(791).then(function() { return function() { return __webpack_require__(2791); }; }); }); }
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"416": [
/******/ 				8172
/******/ 			],
/******/ 			"856": [
/******/ 				56,
/******/ 				1949,
/******/ 				4556,
/******/ 				4819,
/******/ 				2747,
/******/ 				8887,
/******/ 				8056,
/******/ 				7082
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = function(chunkId, promises) {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach(function(id) {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					var onFactory = function(factory) {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = function(module) {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					var onError = function(error) {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = function(module) {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"170":1,"856":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(416 != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp1"] = self["webpackChunkapp1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(6733);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.51b7b341.js.map
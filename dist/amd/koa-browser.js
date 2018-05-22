define("koa-browser", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KoaApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _koaCompose = __webpack_require__(1);

var _koaCompose2 = _interopRequireDefault(_koaCompose);

var _koaContext = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KoaApp = exports.KoaApp = function () {
  function KoaApp() {
    _classCallCheck(this, KoaApp);

    this.middleware = [];
    this.ContextClass = function (_KoaContext) {
      _inherits(_class, _KoaContext);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      return _class;
    }(_koaContext.KoaContext);
    this.ctx = this.ContextClass.prototype;
  }

  _createClass(KoaApp, [{
    key: 'use',
    value: function use(fn) {
      this.middleware.push(fn);
    }
  }, {
    key: 'handler',
    value: function handler() {
      var _this2 = this;

      var fn = (0, _koaCompose2.default)(this.middleware);

      return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
          var ctx;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ctx = new _this2.ContextClass(_this2, req);
                  _context.next = 3;
                  return fn(ctx);

                case 3:
                  return _context.abrupt('return', ctx.response.finalize());

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
  }]);

  return KoaApp;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose compositor.
 */

module.exports = compose

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, function next () {
          return dispatch(i + 1)
        }))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KoaContext = undefined;

var _delegates = __webpack_require__(3);

var _delegates2 = _interopRequireDefault(_delegates);

var _koaRequest = __webpack_require__(4);

var _koaResponse = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KoaContext = exports.KoaContext = function KoaContext(app, req) {
  _classCallCheck(this, KoaContext);

  this.app = app;
  this.request = new _koaRequest.KoaRequest(this, req);
  this.response = new _koaResponse.KoaResponse(this);
};

/**
 * Response delegation.
 */


(0, _delegates2.default)(KoaContext.prototype, 'response').method('attachment').method('redirect').method('remove').method('vary').method('set').method('append').method('flushHeaders').access('status').access('message').access('body').access('length').access('type').access('lastModified').access('etag').getter('headerSent').getter('writable');

/**
 * Request delegation.
 */
(0, _delegates2.default)(KoaContext.prototype, 'request').method('acceptsLanguages').method('acceptsEncodings').method('acceptsCharsets').method('accepts').method('get').method('is').access('querystring').access('idempotent').access('socket').access('search').access('method').access('query').access('path').access('url').getter('origin').getter('href').getter('subdomains').getter('protocol').getter('host').getter('hostname').getter('URL').getter('header').getter('headers').getter('secure').getter('stale').getter('fresh').getter('ips').getter('ip');

/***/ }),
/* 3 */
/***/ (function(module, exports) {


/**
 * Expose `Delegator`.
 */

module.exports = Delegator;

/**
 * Initialize a delegator.
 *
 * @param {Object} proto
 * @param {String} target
 * @api public
 */

function Delegator(proto, target) {
  if (!(this instanceof Delegator)) return new Delegator(proto, target);
  this.proto = proto;
  this.target = target;
  this.methods = [];
  this.getters = [];
  this.setters = [];
  this.fluents = [];
}

/**
 * Delegate method `name`.
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.method = function(name){
  var proto = this.proto;
  var target = this.target;
  this.methods.push(name);

  proto[name] = function(){
    return this[target][name].apply(this[target], arguments);
  };

  return this;
};

/**
 * Delegator accessor `name`.
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.access = function(name){
  return this.getter(name).setter(name);
};

/**
 * Delegator getter `name`.
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.getter = function(name){
  var proto = this.proto;
  var target = this.target;
  this.getters.push(name);

  proto.__defineGetter__(name, function(){
    return this[target][name];
  });

  return this;
};

/**
 * Delegator setter `name`.
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.setter = function(name){
  var proto = this.proto;
  var target = this.target;
  this.setters.push(name);

  proto.__defineSetter__(name, function(val){
    return this[target][name] = val;
  });

  return this;
};

/**
 * Delegator fluent accessor
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.fluent = function (name) {
  var proto = this.proto;
  var target = this.target;
  this.fluents.push(name);

  proto[name] = function(val){
    if ('undefined' != typeof val) {
      this[target][name] = val;
      return this;
    } else {
      return this[target][name];
    }
  };

  return this;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KoaRequest = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _contentType = __webpack_require__(5);

var _contentType2 = _interopRequireDefault(_contentType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KoaRequest = exports.KoaRequest = function () {
  function KoaRequest(ctx, req) {
    _classCallCheck(this, KoaRequest);

    this.ctx = ctx;
    this._url = new URL(req.url);
    this._method = req.method;
    this._headers = req.headers;
    this._querycache = {};
  }

  _createClass(KoaRequest, [{
    key: 'get',
    value: function get(field) {
      var headers = this._headers;

      switch (field = field.toLowerCase()) {
        case 'referrer':
          return headers.get('referer');
        default:
          return headers.get(field);
      }
    }
  }, {
    key: 'URL',
    get: function get() {
      return this._url;
    }
  }, {
    key: 'header',
    get: function get() {
      return this.headers;
    },
    set: function set(val) {
      this.headers = val;
    }
  }, {
    key: 'headers',
    get: function get() {
      return this._headers;
    },
    set: function set(val) {
      this._headers = new Headers(val);
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url.pathname + this._url.search + this._url.hash;
    },
    set: function set(val) {
      var parts = val.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);

      this._url.pathname = parts[1];
      this._url.search = parts[2] || '';
      this._url.hash = parts[3] || '';
    }
  }, {
    key: 'href',
    get: function get() {
      return this._url.toString();
    }
  }, {
    key: 'method',
    get: function get() {
      return this._method;
    },
    set: function set(val) {
      this._method = val;
    }
  }, {
    key: 'query',
    get: function get() {
      var qs = this.querystring;
      var obj = this._querycache[qs];

      if (obj) return obj;

      obj = this._querycache[qs] = {};

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._url.searchParams[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pair = _step.value;

          obj[pair[0]] = pair[1];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return Object.freeze(obj);
    },
    set: function set(obj) {
      var parts = [];

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var escKey = window.encodeURIComponent(key);
          var escValue = window.encodeURIComponent(obj[key]);

          parts.push(escKey + '=' + escValue);
        }
      }
      this.querystring = parts.join('&');
    }
  }, {
    key: 'querystring',
    get: function get() {
      return this.search.slice(1);
    },
    set: function set(str) {
      this.search = str;
    }
  }, {
    key: 'fresh',
    get: function get() {
      var method = this.method;
      var s = this.ctx.status;

      // GET or HEAD for weak freshness validation only
      if (method !== 'GET' && method !== 'HEAD') return false;

      // 2xx or 304 as per rfc2616 14.26
      if (s >= 200 && s < 300 || s === 304) {
        return this.fresh(this.header, this.ctx.response.header);
      }

      return false;
    }
  }, {
    key: 'stale',
    get: function get() {
      return !this.fresh;
    }
  }, {
    key: 'idempotent',
    get: function get() {
      var methods = ['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];

      return !!~methods.indexOf(this.method);
    }
  }, {
    key: 'charset',
    get: function get() {
      var type = this.get('Content-Type');

      if (!type) return '';

      try {
        type = _contentType2.default.parse(type);
      } catch (e) {
        return '';
      }

      return type.parameters.charset || '';
    }
  }, {
    key: 'length',
    get: function get() {
      var len = this.get('Content-Length');

      if (len === '') return 0;
      return ~~len;
    }
  }, {
    key: 'protocol',
    get: function get() {
      return this.protocolWithColon.slice(0, -1);
    }
  }, {
    key: 'secure',
    get: function get() {
      return this.protocol === 'https';
    }
  }, {
    key: 'ips',
    get: function get() {
      return [];
    }
  }, {
    key: 'subdomains',
    get: function get() {
      return [];
    }
  }, {
    key: 'type',
    get: function get() {
      var type = this.get('Content-Type');

      if (!type) return '';
      return type.split(';')[0];
    }
  }]);

  return KoaRequest;
}();

function delegateToUrl(name, target) {
  if (!target) target = name;

  Object.defineProperty(KoaRequest.prototype, name, {
    get: function get() {
      return this._url[target];
    },
    set: function set(val) {
      this._url[target] = val;
    }
  });
}

delegateToUrl('origin');
delegateToUrl('path', 'pathname');
delegateToUrl('search');
delegateToUrl('host');
delegateToUrl('hostname');
delegateToUrl('protocolWithColon', 'protocol');

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
 *
 * parameter     = token "=" ( token / quoted-string )
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
 * obs-text      = %x80-FF
 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
 */
var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
 *
 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
 * obs-text    = %x80-FF
 */
var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
 */
var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp to match type in RFC 7231 sec 3.1.1.1
 *
 * media-type = type "/" subtype
 * type       = token
 * subtype    = token
 */
var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * Module exports.
 * @public
 */

exports.format = format
exports.parse = parse

/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */

function format (obj) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('argument obj is required')
  }

  var parameters = obj.parameters
  var type = obj.type

  if (!type || !TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  var string = type

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      if (!TOKEN_REGEXP.test(param)) {
        throw new TypeError('invalid parameter name')
      }

      string += '; ' + param + '=' + qstring(parameters[param])
    }
  }

  return string
}

/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */

function parse (string) {
  if (!string) {
    throw new TypeError('argument string is required')
  }

  // support req/res-like objects as argument
  var header = typeof string === 'object'
    ? getcontenttype(string)
    : string

  if (typeof header !== 'string') {
    throw new TypeError('argument string is required to be a string')
  }

  var index = header.indexOf(';')
  var type = index !== -1
    ? header.substr(0, index).trim()
    : header.trim()

  if (!TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid media type')
  }

  var obj = new ContentType(type.toLowerCase())

  // parse parameters
  if (index !== -1) {
    var key
    var match
    var value

    PARAM_REGEXP.lastIndex = index

    while ((match = PARAM_REGEXP.exec(header))) {
      if (match.index !== index) {
        throw new TypeError('invalid parameter format')
      }

      index += match[0].length
      key = match[1].toLowerCase()
      value = match[2]

      if (value[0] === '"') {
        // remove quotes and escapes
        value = value
          .substr(1, value.length - 2)
          .replace(QESC_REGEXP, '$1')
      }

      obj.parameters[key] = value
    }

    if (index !== header.length) {
      throw new TypeError('invalid parameter format')
    }
  }

  return obj
}

/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */

function getcontenttype (obj) {
  var header

  if (typeof obj.getHeader === 'function') {
    // res-like
    header = obj.getHeader('content-type')
  } else if (typeof obj.headers === 'object') {
    // req-like
    header = obj.headers && obj.headers['content-type']
  }

  if (typeof header !== 'string') {
    throw new TypeError('content-type header is missing from object')
  }

  return header
}

/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function qstring (val) {
  var str = String(val)

  // no need to quote tokens
  if (TOKEN_REGEXP.test(str)) {
    return str
  }

  if (str.length > 0 && !TEXT_REGEXP.test(str)) {
    throw new TypeError('invalid parameter value')
  }

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Class to represent a content type.
 * @private
 */
function ContentType (type) {
  this.parameters = Object.create(null)
  this.type = type
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KoaResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _statuses = __webpack_require__(7);

var _statuses2 = _interopRequireDefault(_statuses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KoaResponse = exports.KoaResponse = function () {
  function KoaResponse() {
    _classCallCheck(this, KoaResponse);

    this._headers = new Headers();
    this._status = 404;
    this._body = null;
  }

  _createClass(KoaResponse, [{
    key: 'finalize',
    value: function finalize() {
      var response = new Response(this._body, {
        status: this._status,
        headers: this._headers
      });

      console.log('finalize', response);
      return response;
    }
  }, {
    key: 'redirect',
    value: function redirect(url, alt) {
      // location
      if (url === 'back') url = this.ctx.get('Referrer') || alt || '/';
      this.set('Location', url);

      // status
      if (!_statuses2.default.redirect[this.status]) this.status = 302;

      // html
      if (this.ctx.accepts('html')) {
        url = escape(url);
        this.type = 'text/html; charset=utf-8';
        this.body = 'Redirecting to <a href="' + url + '">' + url + '</a>.';
        return;
      }

      // text
      this.type = 'text/plain; charset=utf-8';
      this.body = 'Redirecting to ' + url + '.';
    }
  }, {
    key: 'attachment',
    value: function attachment(filename) {
      // if (filename) this.type = extname(filename);
      // this.set('Content-Disposition', contentDisposition(filename));
    }
  }, {
    key: 'get',
    value: function get(field) {
      return this.header.get(field);
    }
  }, {
    key: 'set',
    value: function set(field, val) {
      if (arguments.length === 2) {
        if (Array.isArray(val)) {
          this._headers.set(field, val[0]);
          for (var i = 1; i < val.length; i++) {
            this._headers.append(field, val[i]);
          }
        } else {
          this._headers.set(field, val);
        }
      } else {
        for (var key in field) {
          this.set(key, field[key]);
        }
      }
    }
  }, {
    key: 'append',
    value: function append(field, val) {
      if (Array.isArray(val)) {
        for (var i = 0; i < val.length; i++) {
          this._headers.append(field, val[i]);
        }
      } else {
        this._headers.append(field, val);
      }
    }
  }, {
    key: 'remove',
    value: function remove(field) {
      this._headers.delete(field);
    }
  }, {
    key: 'flushHeaders',
    value: function flushHeaders() {
      // do nothing
    }
  }, {
    key: 'header',
    get: function get() {
      return this._headers;
    }
  }, {
    key: 'headers',
    get: function get() {
      return this.header;
    }
  }, {
    key: 'status',
    get: function get() {
      return this._status;
    },
    set: function set(code) {
      this._status = code;
    }
  }, {
    key: 'message',
    get: function get() {
      return this._statusMessage || _statuses2.default[this.status];
    },
    set: function set(msg) {
      this._statusMessage = msg;
    }
  }, {
    key: 'body',
    get: function get() {
      return this._body;
    },
    set: function set(val) {
      this._body = val;
    }
  }, {
    key: 'length',
    set: function set(n) {
      // do nothing
    },
    get: function get() {
      return 0;
    }
  }, {
    key: 'headerSent',
    get: function get() {
      return false;
    }
  }, {
    key: 'type',
    set: function set(type) {
      if (type) {
        this.set('Content-Type', type);
      } else {
        this.remove('Content-Type');
      }
    },
    get: function get() {
      var type = this.get('Content-Type');

      if (!type) return '';
      return type.split(';')[0];
    }
  }, {
    key: 'lastModified',
    set: function set(val) {
      if (typeof val === 'string') val = new Date(val);
      this.set('Last-Modified', val.toUTCString());
    },
    get: function get() {
      var date = this.get('last-modified');

      if (date) return new Date(date);
      return null;
    }
  }, {
    key: 'etag',
    set: function set(val) {
      if (!/^(W\/)?"/.test(val)) val = '"' + val + '"';
      this.set('ETag', val);
    },
    get: function get() {
      return this.get('ETag');
    }
  }, {
    key: 'writable',
    get: function get() {
      return true;
    }
  }]);

  return KoaResponse;
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var codes = __webpack_require__(8)

/**
 * Module exports.
 * @public
 */

module.exports = status

// status code to message map
status.STATUS_CODES = codes

// array of status codes
status.codes = populateStatusesMap(status, codes)

// status codes for redirects
status.redirect = {
  300: true,
  301: true,
  302: true,
  303: true,
  305: true,
  307: true,
  308: true
}

// status codes for empty bodies
status.empty = {
  204: true,
  205: true,
  304: true
}

// status codes for when you should retry the request
status.retry = {
  502: true,
  503: true,
  504: true
}

/**
 * Populate the statuses map for given codes.
 * @private
 */

function populateStatusesMap (statuses, codes) {
  var arr = []

  Object.keys(codes).forEach(function forEachCode (code) {
    var message = codes[code]
    var status = Number(code)

    // Populate properties
    statuses[status] = message
    statuses[message] = status
    statuses[message.toLowerCase()] = status

    // Add to array
    arr.push(status)
  })

  return arr
}

/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */

function status (code) {
  if (typeof code === 'number') {
    if (!status[code]) throw new Error('invalid status code: ' + code)
    return code
  }

  if (typeof code !== 'string') {
    throw new TypeError('code must be a number or string')
  }

  // '403'
  var n = parseInt(code, 10)
  if (!isNaN(n)) {
    if (!status[n]) throw new Error('invalid status code: ' + n)
    return n
  }

  n = status[code.toLowerCase()]
  if (!n) throw new Error('invalid status message: "' + code + '"')
  return n
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"100":"Continue","101":"Switching Protocols","102":"Processing","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I'm a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}

/***/ })
/******/ ])});;
//# sourceMappingURL=koa-browser.js.map
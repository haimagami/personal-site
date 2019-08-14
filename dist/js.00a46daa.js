// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"node_modules/rxjs/_esm5/internal/util/isFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
  return typeof x === 'function';
}
},{}],"node_modules/rxjs/_esm5/internal/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error =
      /*@__PURE__*/
      new Error();
      /*@__PURE__*/

      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      /*@__PURE__*/
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};
exports.config = config;
},{}],"node_modules/rxjs/_esm5/internal/util/hostReportError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hostReportError = hostReportError;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
  setTimeout(function () {
    throw err;
  }, 0);
}
},{}],"node_modules/rxjs/_esm5/internal/Observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = void 0;

var _config = require("./config");

var _hostReportError = require("./util/hostReportError");

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      (0, _hostReportError.hostReportError)(err);
    }
  },
  complete: function () {}
};
exports.empty = empty;
},{"./config":"node_modules/rxjs/_esm5/internal/config.js","./util/hostReportError":"node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"node_modules/rxjs/_esm5/internal/util/isArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};

exports.isArray = isArray;
},{}],"node_modules/rxjs/_esm5/internal/util/isObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
  return x !== null && typeof x === 'object';
}
},{}],"node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
  Error.call(this);
  this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
    return i + 1 + ") " + err.toString();
  }).join('\n  ') : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
  return this;
}

UnsubscriptionErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
exports.UnsubscriptionError = UnsubscriptionError;
},{}],"node_modules/rxjs/_esm5/internal/Subscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = void 0;

var _isArray = require("./util/isArray");

var _isObject = require("./util/isObject");

var _isFunction = require("./util/isFunction");

var _UnsubscriptionError = require("./util/UnsubscriptionError");

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription =
/*@__PURE__*/
function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parentOrParents = _a._parentOrParents,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (_parentOrParents instanceof Subscription) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (var index = 0; index < _parentOrParents.length; ++index) {
        var parent_1 = _parentOrParents[index];
        parent_1.remove(this);
      }
    }

    if ((0, _isFunction.isFunction)(_unsubscribe)) {
      try {
        _unsubscribe.call(this);
      } catch (e) {
        errors = e instanceof _UnsubscriptionError.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if ((0, _isArray.isArray)(_subscriptions)) {
      var index = -1;
      var len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if ((0, _isObject.isObject)(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            errors = errors || [];

            if (e instanceof _UnsubscriptionError.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (errors) {
      throw new _UnsubscriptionError.UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    if (!teardown) {
      return Subscription.EMPTY;
    }

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    var _parentOrParents = subscription._parentOrParents;

    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription) {
      if (_parentOrParents === this) {
        return subscription;
      }

      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }

    var subscriptions = this._subscriptions;

    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof _UnsubscriptionError.UnsubscriptionError ? err.errors : err);
  }, []);
}
},{"./util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","./util/isObject":"node_modules/rxjs/_esm5/internal/util/isObject.js","./util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","./util/UnsubscriptionError":"node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js"}],"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$$rxSubscriber = exports.rxSubscriber = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function' ?
/*@__PURE__*/
Symbol('rxSubscriber') : '@@rxSubscriber_' +
/*@__PURE__*/
Math.random();
exports.rxSubscriber = rxSubscriber;
var $$rxSubscriber = rxSubscriber;
exports.$$rxSubscriber = $$rxSubscriber;
},{}],"node_modules/rxjs/_esm5/internal/Subscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafeSubscriber = exports.Subscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isFunction = require("./util/isFunction");

var _Observer = require("./Observer");

var _Subscription = require("./Subscription");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

var _config = require("./config");

var _hostReportError = require("./util/hostReportError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
var Subscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = _Observer.empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = _Observer.empty;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[_rxSubscriber.rxSubscriber] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _parentOrParents = this._parentOrParents;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  };

  return Subscriber;
}(_Subscription.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if ((0, _isFunction.isFunction)(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== _Observer.empty) {
        context = Object.create(observerOrNext);

        if ((0, _isFunction.isFunction)(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = _config.config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        (0, _hostReportError.hostReportError)(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          (0, _hostReportError.hostReportError)(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function () {
          return _this._complete.call(_this._context);
        };

        if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        (0, _hostReportError.hostReportError)(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!_config.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        (0, _hostReportError.hostReportError)(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","./util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","./Observer":"node_modules/rxjs/_esm5/internal/Observer.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../internal/symbol/rxSubscriber":"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","./config":"node_modules/rxjs/_esm5/internal/config.js","./util/hostReportError":"node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"node_modules/rxjs/_esm5/internal/util/canReportError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canReportError = canReportError;

var _Subscriber = require("../Subscriber");

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof _Subscriber.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}
},{"../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/util/toSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSubscriber = toSubscriber;

var _Subscriber = require("../Subscriber");

var _rxSubscriber = require("../symbol/rxSubscriber");

var _Observer = require("../Observer");

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof _Subscriber.Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[_rxSubscriber.rxSubscriber]) {
      return nextOrObserver[_rxSubscriber.rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new _Subscriber.Subscriber(_Observer.empty);
  }

  return new _Subscriber.Subscriber(nextOrObserver, error, complete);
}
},{"../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../symbol/rxSubscriber":"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","../Observer":"node_modules/rxjs/_esm5/internal/Observer.js"}],"node_modules/rxjs/_esm5/internal/symbol/observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
exports.observable = observable;
},{}],"node_modules/rxjs/_esm5/internal/util/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() {}
},{}],"node_modules/rxjs/_esm5/internal/util/pipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = pipe;
exports.pipeFromArray = pipeFromArray;

var _noop = require("./noop");

/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

function pipeFromArray(fns) {
  if (!fns) {
    return _noop.noop;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}
},{"./noop":"node_modules/rxjs/_esm5/internal/util/noop.js"}],"node_modules/rxjs/_esm5/internal/Observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

var _canReportError = require("./util/canReportError");

var _toSubscriber = require("./util/toSubscriber");

var _observable = require("./symbol/observable");

var _pipe = require("./util/pipe");

var _config = require("./config");

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable =
/*@__PURE__*/
function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = (0, _toSubscriber.toSubscriber)(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || _config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if ((0, _canReportError.canReportError)(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[_observable.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return (0, _pipe.pipeFromArray)(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = _config.config.Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}
},{"./util/canReportError":"node_modules/rxjs/_esm5/internal/util/canReportError.js","./util/toSubscriber":"node_modules/rxjs/_esm5/internal/util/toSubscriber.js","./symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js","./util/pipe":"node_modules/rxjs/_esm5/internal/util/pipe.js","./config":"node_modules/rxjs/_esm5/internal/config.js"}],"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectUnsubscribedError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
  Error.call(this);
  this.message = 'object unsubscribed';
  this.name = 'ObjectUnsubscribedError';
  return this;
}

ObjectUnsubscribedErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
},{}],"node_modules/rxjs/_esm5/internal/SubjectSubscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectSubscription = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("./Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubjectSubscription, _super);

  function SubjectSubscription(subject, subscriber) {
    var _this = _super.call(this) || this;

    _this.subject = subject;
    _this.subscriber = subscriber;
    _this.closed = false;
    return _this;
  }

  SubjectSubscription.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.closed = true;
    var subject = this.subject;
    var observers = subject.observers;
    this.subject = null;

    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }

    var subscriberIndex = observers.indexOf(this.subscriber);

    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  };

  return SubjectSubscription;
}(_Subscription.Subscription);

exports.SubjectSubscription = SubjectSubscription;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/Subject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnonymousSubject = exports.Subject = exports.SubjectSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("./Observable");

var _Subscriber = require("./Subscriber");

var _Subscription = require("./Subscription");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _SubjectSubscription = require("./SubjectSubscription");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubjectSubscriber, _super);

  function SubjectSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    return _this;
  }

  return SubjectSubscriber;
}(_Subscriber.Subscriber);

exports.SubjectSubscriber = SubjectSubscriber;

var Subject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.observers = [];
    _this.closed = false;
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype[_rxSubscriber.rxSubscriber] = function () {
    return new SubjectSubscriber(this);
  };

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype.next = function (value) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    if (!this.isStopped) {
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();

      for (var i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  };

  Subject.prototype.error = function (err) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].error(err);
    }

    this.observers.length = 0;
  };

  Subject.prototype.complete = function () {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].complete();
    }

    this.observers.length = 0;
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  };

  Subject.prototype._trySubscribe = function (subscriber) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };

  Subject.prototype._subscribe = function (subscriber) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription.Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return _Subscription.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new _SubjectSubscription.SubjectSubscription(this, subscriber);
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new _Observable.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(_Observable.Observable);

exports.Subject = Subject;

var AnonymousSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var destination = this.destination;

    if (destination && destination.next) {
      destination.next(value);
    }
  };

  AnonymousSubject.prototype.error = function (err) {
    var destination = this.destination;

    if (destination && destination.error) {
      this.destination.error(err);
    }
  };

  AnonymousSubject.prototype.complete = function () {
    var destination = this.destination;

    if (destination && destination.complete) {
      this.destination.complete();
    }
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var source = this.source;

    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return _Subscription.Subscription.EMPTY;
    }
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","./util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./SubjectSubscription":"node_modules/rxjs/_esm5/internal/SubjectSubscription.js","../internal/symbol/rxSubscriber":"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/refCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refCount = refCount;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}

var RefCountOperator =
/*@__PURE__*/
function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectableObservableDescriptor = exports.ConnectableObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _Observable = require("../Observable");

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

var _refCount = require("../operators/refCount");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
var ConnectableObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ConnectableObservable, _super);

  function ConnectableObservable(source, subjectFactory) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._refCount = 0;
    _this._isComplete = false;
    return _this;
  }

  ConnectableObservable.prototype._subscribe = function (subscriber) {
    return this.getSubject().subscribe(subscriber);
  };

  ConnectableObservable.prototype.getSubject = function () {
    var subject = this._subject;

    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }

    return this._subject;
  };

  ConnectableObservable.prototype.connect = function () {
    var connection = this._connection;

    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new _Subscription.Subscription();
      connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

      if (connection.closed) {
        this._connection = null;
        connection = _Subscription.Subscription.EMPTY;
      }
    }

    return connection;
  };

  ConnectableObservable.prototype.refCount = function () {
    return (0, _refCount.refCount)()(this);
  };

  return ConnectableObservable;
}(_Observable.Observable);

exports.ConnectableObservable = ConnectableObservable;
var connectableProto = ConnectableObservable.prototype;
var connectableObservableDescriptor = {
  operator: {
    value: null
  },
  _refCount: {
    value: 0,
    writable: true
  },
  _subject: {
    value: null,
    writable: true
  },
  _connection: {
    value: null,
    writable: true
  },
  _subscribe: {
    value: connectableProto._subscribe
  },
  _isComplete: {
    value: connectableProto._isComplete,
    writable: true
  },
  getSubject: {
    value: connectableProto.getSubject
  },
  connect: {
    value: connectableProto.connect
  },
  refCount: {
    value: connectableProto.refCount
  }
};
exports.connectableObservableDescriptor = connectableObservableDescriptor;

var ConnectableSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ConnectableSubscriber, _super);

  function ConnectableSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  ConnectableSubscriber.prototype._error = function (err) {
    this._unsubscribe();

    _super.prototype._error.call(this, err);
  };

  ConnectableSubscriber.prototype._complete = function () {
    this.connectable._isComplete = true;

    this._unsubscribe();

    _super.prototype._complete.call(this);
  };

  ConnectableSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (connectable) {
      this.connectable = null;
      var connection = connectable._connection;
      connectable._refCount = 0;
      connectable._subject = null;
      connectable._connection = null;

      if (connection) {
        connection.unsubscribe();
      }
    }
  };

  return ConnectableSubscriber;
}(_Subject.SubjectSubscriber);

var RefCountOperator =
/*@__PURE__*/
function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../operators/refCount":"node_modules/rxjs/_esm5/internal/operators/refCount.js"}],"node_modules/rxjs/_esm5/internal/operators/groupBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = groupBy;
exports.GroupedObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

var _Observable = require("../Observable");

var _Subject = require("../Subject");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
  return function (source) {
    return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  };
}

var GroupByOperator =
/*@__PURE__*/
function () {
  function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
    this.keySelector = keySelector;
    this.elementSelector = elementSelector;
    this.durationSelector = durationSelector;
    this.subjectSelector = subjectSelector;
  }

  GroupByOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  };

  return GroupByOperator;
}();

var GroupBySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupBySubscriber, _super);

  function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.elementSelector = elementSelector;
    _this.durationSelector = durationSelector;
    _this.subjectSelector = subjectSelector;
    _this.groups = null;
    _this.attemptedToUnsubscribe = false;
    _this.count = 0;
    return _this;
  }

  GroupBySubscriber.prototype._next = function (value) {
    var key;

    try {
      key = this.keySelector(value);
    } catch (err) {
      this.error(err);
      return;
    }

    this._group(value, key);
  };

  GroupBySubscriber.prototype._group = function (value, key) {
    var groups = this.groups;

    if (!groups) {
      groups = this.groups = new Map();
    }

    var group = groups.get(key);
    var element;

    if (this.elementSelector) {
      try {
        element = this.elementSelector(value);
      } catch (err) {
        this.error(err);
      }
    } else {
      element = value;
    }

    if (!group) {
      group = this.subjectSelector ? this.subjectSelector() : new _Subject.Subject();
      groups.set(key, group);
      var groupedObservable = new GroupedObservable(key, group, this);
      this.destination.next(groupedObservable);

      if (this.durationSelector) {
        var duration = void 0;

        try {
          duration = this.durationSelector(new GroupedObservable(key, group));
        } catch (err) {
          this.error(err);
          return;
        }

        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
      }
    }

    if (!group.closed) {
      group.next(element);
    }
  };

  GroupBySubscriber.prototype._error = function (err) {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.error(err);
      });
      groups.clear();
    }

    this.destination.error(err);
  };

  GroupBySubscriber.prototype._complete = function () {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.complete();
      });
      groups.clear();
    }

    this.destination.complete();
  };

  GroupBySubscriber.prototype.removeGroup = function (key) {
    this.groups.delete(key);
  };

  GroupBySubscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.attemptedToUnsubscribe = true;

      if (this.count === 0) {
        _super.prototype.unsubscribe.call(this);
      }
    }
  };

  return GroupBySubscriber;
}(_Subscriber.Subscriber);

var GroupDurationSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupDurationSubscriber, _super);

  function GroupDurationSubscriber(key, group, parent) {
    var _this = _super.call(this, group) || this;

    _this.key = key;
    _this.group = group;
    _this.parent = parent;
    return _this;
  }

  GroupDurationSubscriber.prototype._next = function (value) {
    this.complete();
  };

  GroupDurationSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        parent = _a.parent,
        key = _a.key;

    this.key = this.parent = null;

    if (parent) {
      parent.removeGroup(key);
    }
  };

  return GroupDurationSubscriber;
}(_Subscriber.Subscriber);

var GroupedObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupedObservable, _super);

  function GroupedObservable(key, groupSubject, refCountSubscription) {
    var _this = _super.call(this) || this;

    _this.key = key;
    _this.groupSubject = groupSubject;
    _this.refCountSubscription = refCountSubscription;
    return _this;
  }

  GroupedObservable.prototype._subscribe = function (subscriber) {
    var subscription = new _Subscription.Subscription();

    var _a = this,
        refCountSubscription = _a.refCountSubscription,
        groupSubject = _a.groupSubject;

    if (refCountSubscription && !refCountSubscription.closed) {
      subscription.add(new InnerRefCountSubscription(refCountSubscription));
    }

    subscription.add(groupSubject.subscribe(subscriber));
    return subscription;
  };

  return GroupedObservable;
}(_Observable.Observable);

exports.GroupedObservable = GroupedObservable;

var InnerRefCountSubscription =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(InnerRefCountSubscription, _super);

  function InnerRefCountSubscription(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    parent.count++;
    return _this;
  }

  InnerRefCountSubscription.prototype.unsubscribe = function () {
    var parent = this.parent;

    if (!parent.closed && !this.closed) {
      _super.prototype.unsubscribe.call(this);

      parent.count -= 1;

      if (parent.count === 0 && parent.attemptedToUnsubscribe) {
        parent.unsubscribe();
      }
    }
  };

  return InnerRefCountSubscription;
}(_Subscription.Subscription);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js"}],"node_modules/rxjs/_esm5/internal/BehaviorSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BehaviorSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
var BehaviorSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function () {
      return this.getValue();
    },
    enumerable: true,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }

    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(_Subject.Subject);

exports.BehaviorSubject = BehaviorSubject;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js"}],"node_modules/rxjs/_esm5/internal/scheduler/Action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("../Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return this;
  };

  return Action;
}(_Subscription.Subscription);

exports.Action = Action;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Action = require("./Action");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncAction, _super);

  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }

  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (this.closed) {
      return this;
    }

    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };

  AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  };

  AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
    return undefined;
  };

  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    var error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, delay) {
    var errored = false;
    var errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };

  AsyncAction.prototype._unsubscribe = function () {
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  };

  return AsyncAction;
}(_Action.Action);

exports.AsyncAction = AsyncAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Action":"node_modules/rxjs/_esm5/internal/scheduler/Action.js"}],"node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var QueueAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(QueueAction, _super);

  function QueueAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  QueueAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay > 0) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };

  QueueAction.prototype.execute = function (state, delay) {
    return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
  };

  QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    return scheduler.flush(this);
  };

  return QueueAction;
}(_AsyncAction.AsyncAction);

exports.QueueAction = QueueAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"node_modules/rxjs/_esm5/internal/Scheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler = void 0;

var Scheduler =
/*@__PURE__*/
function () {
  function Scheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }

    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    return new this.SchedulerAction(this, work).schedule(state, delay);
  };

  Scheduler.now = function () {
    return Date.now();
  };

  return Scheduler;
}();

exports.Scheduler = Scheduler;
},{}],"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Scheduler = require("../Scheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = _Scheduler.Scheduler.now;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    }) || this;

    _this.actions = [];
    _this.active = false;
    _this.scheduled = undefined;
    return _this;
  }

  AsyncScheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return _super.prototype.schedule.call(this, work, delay, state);
    }
  };

  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;

    if (this.active) {
      actions.push(action);
      return;
    }

    var error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsyncScheduler;
}(_Scheduler.Scheduler);

exports.AsyncScheduler = AsyncScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Scheduler":"node_modules/rxjs/_esm5/internal/Scheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var QueueScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(QueueScheduler, _super);

  function QueueScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return QueueScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.QueueScheduler = QueueScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/queue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = void 0;

var _QueueAction = require("./QueueAction");

var _QueueScheduler = require("./QueueScheduler");

/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
var queue =
/*@__PURE__*/
new _QueueScheduler.QueueScheduler(_QueueAction.QueueAction);
exports.queue = queue;
},{"./QueueAction":"node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js","./QueueScheduler":"node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js"}],"node_modules/rxjs/_esm5/internal/observable/empty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.EMPTY = void 0;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
var EMPTY =
/*@__PURE__*/
new _Observable.Observable(function (subscriber) {
  return subscriber.complete();
});
exports.EMPTY = EMPTY;

function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}

function emptyScheduled(scheduler) {
  return new _Observable.Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/util/isScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScheduler = isScheduler;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
  return value && typeof value.schedule === 'function';
}
},{}],"node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToArray = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
  return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    subscriber.complete();
  };
};

exports.subscribeToArray = subscribeToArray;
},{}],"node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleArray = scheduleArray;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function scheduleArray(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    var i = 0;
    sub.add(scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
        return;
      }

      subscriber.next(input[i++]);

      if (!subscriber.closed) {
        sub.add(this.schedule());
      }
    }));
    return sub;
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/observable/fromArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromArray = fromArray;

var _Observable = require("../Observable");

var _subscribeToArray = require("../util/subscribeToArray");

var _scheduleArray = require("../scheduled/scheduleArray");

/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
function fromArray(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToArray.subscribeToArray)(input));
  } else {
    return (0, _scheduleArray.scheduleArray)(input, scheduler);
  }
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/subscribeToArray":"node_modules/rxjs/_esm5/internal/util/subscribeToArray.js","../scheduled/scheduleArray":"node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js"}],"node_modules/rxjs/_esm5/internal/observable/of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = of;

var _isScheduler = require("../util/isScheduler");

var _fromArray = require("./fromArray");

var _scheduleArray = require("../scheduled/scheduleArray");

/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
function of() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args[args.length - 1];

  if ((0, _isScheduler.isScheduler)(scheduler)) {
    args.pop();
    return (0, _scheduleArray.scheduleArray)(args, scheduler);
  } else {
    return (0, _fromArray.fromArray)(args);
  }
}
},{"../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js","../scheduled/scheduleArray":"node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js"}],"node_modules/rxjs/_esm5/internal/observable/throwError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwError = throwError;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function throwError(error, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable(function (subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new _Observable.Observable(function (subscriber) {
      return scheduler.schedule(dispatch, 0, {
        error: error,
        subscriber: subscriber
      });
    });
  }
}

function dispatch(_a) {
  var error = _a.error,
      subscriber = _a.subscriber;
  subscriber.error(error);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/Notification.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = exports.NotificationKind = void 0;

var _empty = require("./observable/empty");

var _of = require("./observable/of");

var _throwError = require("./observable/throwError");

/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
var NotificationKind;
/*@__PURE__*/

exports.NotificationKind = NotificationKind;

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (exports.NotificationKind = NotificationKind = {}));

var Notification =
/*@__PURE__*/
function () {
  function Notification(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === 'N';
  }

  Notification.prototype.observe = function (observer) {
    switch (this.kind) {
      case 'N':
        return observer.next && observer.next(this.value);

      case 'E':
        return observer.error && observer.error(this.error);

      case 'C':
        return observer.complete && observer.complete();
    }
  };

  Notification.prototype.do = function (next, error, complete) {
    var kind = this.kind;

    switch (kind) {
      case 'N':
        return next && next(this.value);

      case 'E':
        return error && error(this.error);

      case 'C':
        return complete && complete();
    }
  };

  Notification.prototype.accept = function (nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  };

  Notification.prototype.toObservable = function () {
    var kind = this.kind;

    switch (kind) {
      case 'N':
        return (0, _of.of)(this.value);

      case 'E':
        return (0, _throwError.throwError)(this.error);

      case 'C':
        return (0, _empty.empty)();
    }

    throw new Error('unexpected notification kind value');
  };

  Notification.createNext = function (value) {
    if (typeof value !== 'undefined') {
      return new Notification('N', value);
    }

    return Notification.undefinedValueNotification;
  };

  Notification.createError = function (err) {
    return new Notification('E', undefined, err);
  };

  Notification.createComplete = function () {
    return Notification.completeNotification;
  };

  Notification.completeNotification = new Notification('C');
  Notification.undefinedValueNotification = new Notification('N', undefined);
  return Notification;
}();

exports.Notification = Notification;
},{"./observable/empty":"node_modules/rxjs/_esm5/internal/observable/empty.js","./observable/of":"node_modules/rxjs/_esm5/internal/observable/of.js","./observable/throwError":"node_modules/rxjs/_esm5/internal/observable/throwError.js"}],"node_modules/rxjs/_esm5/internal/operators/observeOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeOn = observeOn;
exports.ObserveOnMessage = exports.ObserveOnSubscriber = exports.ObserveOnOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Notification = require("../Notification");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}

var ObserveOnOperator =
/*@__PURE__*/
function () {
  function ObserveOnOperator(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.scheduler = scheduler;
    this.delay = delay;
  }

  ObserveOnOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  };

  return ObserveOnOperator;
}();

exports.ObserveOnOperator = ObserveOnOperator;

var ObserveOnSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ObserveOnSubscriber, _super);

  function ObserveOnSubscriber(destination, scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    var _this = _super.call(this, destination) || this;

    _this.scheduler = scheduler;
    _this.delay = delay;
    return _this;
  }

  ObserveOnSubscriber.dispatch = function (arg) {
    var notification = arg.notification,
        destination = arg.destination;
    notification.observe(destination);
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
    var destination = this.destination;
    destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
  };

  ObserveOnSubscriber.prototype._next = function (value) {
    this.scheduleMessage(_Notification.Notification.createNext(value));
  };

  ObserveOnSubscriber.prototype._error = function (err) {
    this.scheduleMessage(_Notification.Notification.createError(err));
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype._complete = function () {
    this.scheduleMessage(_Notification.Notification.createComplete());
    this.unsubscribe();
  };

  return ObserveOnSubscriber;
}(_Subscriber.Subscriber);

exports.ObserveOnSubscriber = ObserveOnSubscriber;

var ObserveOnMessage =
/*@__PURE__*/
function () {
  function ObserveOnMessage(notification, destination) {
    this.notification = notification;
    this.destination = destination;
  }

  return ObserveOnMessage;
}();

exports.ObserveOnMessage = ObserveOnMessage;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Notification":"node_modules/rxjs/_esm5/internal/Notification.js"}],"node_modules/rxjs/_esm5/internal/ReplaySubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaySubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _queue = require("./scheduler/queue");

var _Subscription = require("./Subscription");

var _observeOn = require("./operators/observeOn");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _SubjectSubscription = require("./SubjectSubscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
var ReplaySubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ReplaySubject, _super);

  function ReplaySubject(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }

    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this) || this;

    _this.scheduler = scheduler;
    _this._events = [];
    _this._infiniteTimeWindow = false;
    _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    _this._windowTime = windowTime < 1 ? 1 : windowTime;

    if (windowTime === Number.POSITIVE_INFINITY) {
      _this._infiniteTimeWindow = true;
      _this.next = _this.nextInfiniteTimeWindow;
    } else {
      _this.next = _this.nextTimeWindow;
    }

    return _this;
  }

  ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
    var _events = this._events;

    _events.push(value);

    if (_events.length > this._bufferSize) {
      _events.shift();
    }

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype.nextTimeWindow = function (value) {
    this._events.push(new ReplayEvent(this._getNow(), value));

    this._trimBufferThenGetEvents();

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype._subscribe = function (subscriber) {
    var _infiniteTimeWindow = this._infiniteTimeWindow;

    var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

    var scheduler = this.scheduler;
    var len = _events.length;
    var subscription;

    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else if (this.isStopped || this.hasError) {
      subscription = _Subscription.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new _SubjectSubscription.SubjectSubscription(this, subscriber);
    }

    if (scheduler) {
      subscriber.add(subscriber = new _observeOn.ObserveOnSubscriber(subscriber, scheduler));
    }

    if (_infiniteTimeWindow) {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }

    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }

    return subscription;
  };

  ReplaySubject.prototype._getNow = function () {
    return (this.scheduler || _queue.queue).now();
  };

  ReplaySubject.prototype._trimBufferThenGetEvents = function () {
    var now = this._getNow();

    var _bufferSize = this._bufferSize;
    var _windowTime = this._windowTime;
    var _events = this._events;
    var eventsCount = _events.length;
    var spliceCount = 0;

    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
        break;
      }

      spliceCount++;
    }

    if (eventsCount > _bufferSize) {
      spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
    }

    if (spliceCount > 0) {
      _events.splice(0, spliceCount);
    }

    return _events;
  };

  return ReplaySubject;
}(_Subject.Subject);

exports.ReplaySubject = ReplaySubject;

var ReplayEvent =
/*@__PURE__*/
function () {
  function ReplayEvent(time, value) {
    this.time = time;
    this.value = value;
  }

  return ReplayEvent;
}();
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./scheduler/queue":"node_modules/rxjs/_esm5/internal/scheduler/queue.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","./operators/observeOn":"node_modules/rxjs/_esm5/internal/operators/observeOn.js","./util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./SubjectSubscription":"node_modules/rxjs/_esm5/internal/SubjectSubscription.js"}],"node_modules/rxjs/_esm5/internal/AsyncSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _Subscription = require("./Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
var AsyncSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncSubject, _super);

  function AsyncSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.value = null;
    _this.hasNext = false;
    _this.hasCompleted = false;
    return _this;
  }

  AsyncSubject.prototype._subscribe = function (subscriber) {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription.Subscription.EMPTY;
    } else if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return _Subscription.Subscription.EMPTY;
    }

    return _super.prototype._subscribe.call(this, subscriber);
  };

  AsyncSubject.prototype.next = function (value) {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  };

  AsyncSubject.prototype.error = function (error) {
    if (!this.hasCompleted) {
      _super.prototype.error.call(this, error);
    }
  };

  AsyncSubject.prototype.complete = function () {
    this.hasCompleted = true;

    if (this.hasNext) {
      _super.prototype.next.call(this, this.value);
    }

    _super.prototype.complete.call(this);
  };

  return AsyncSubject;
}(_Subject.Subject);

exports.AsyncSubject = AsyncSubject;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/util/Immediate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Immediate = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};

function runIfPresent(handle) {
  var cb = tasksByHandle[handle];

  if (cb) {
    cb();
  }
}

var Immediate = {
  setImmediate: function (cb) {
    var handle = nextHandle++;
    tasksByHandle[handle] = cb;
    Promise.resolve().then(function () {
      return runIfPresent(handle);
    });
    return handle;
  },
  clearImmediate: function (handle) {
    delete tasksByHandle[handle];
  }
};
exports.Immediate = Immediate;
},{}],"node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Immediate = require("../util/Immediate");

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
var AsapAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsapAction, _super);

  function AsapAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = _Immediate.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
  };

  AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      _Immediate.Immediate.clearImmediate(id);

      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AsapAction;
}(_AsyncAction.AsyncAction);

exports.AsapAction = AsapAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/Immediate":"node_modules/rxjs/_esm5/internal/util/Immediate.js","./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AsapScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsapScheduler, _super);

  function AsapScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsapScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsapScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AsapScheduler = AsapScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/asap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = void 0;

var _AsapAction = require("./AsapAction");

var _AsapScheduler = require("./AsapScheduler");

/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
var asap =
/*@__PURE__*/
new _AsapScheduler.AsapScheduler(_AsapAction.AsapAction);
exports.asap = asap;
},{"./AsapAction":"node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js","./AsapScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/async.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.async = void 0;

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var async =
/*@__PURE__*/
new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
exports.async = async;
},{"./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var AnimationFrameAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnimationFrameAction, _super);

  function AnimationFrameAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
      return scheduler.flush(null);
    }));
  };

  AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      cancelAnimationFrame(id);
      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AnimationFrameAction;
}(_AsyncAction.AsyncAction);

exports.AnimationFrameAction = AnimationFrameAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AnimationFrameScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnimationFrameScheduler, _super);

  function AnimationFrameScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AnimationFrameScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AnimationFrameScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AnimationFrameScheduler = AnimationFrameScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrame = void 0;

var _AnimationFrameAction = require("./AnimationFrameAction");

var _AnimationFrameScheduler = require("./AnimationFrameScheduler");

/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
var animationFrame =
/*@__PURE__*/
new _AnimationFrameScheduler.AnimationFrameScheduler(_AnimationFrameAction.AnimationFrameAction);
exports.animationFrame = animationFrame;
},{"./AnimationFrameAction":"node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js","./AnimationFrameScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js"}],"node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var VirtualTimeScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(VirtualTimeScheduler, _super);

  function VirtualTimeScheduler(SchedulerAction, maxFrames) {
    if (SchedulerAction === void 0) {
      SchedulerAction = VirtualAction;
    }

    if (maxFrames === void 0) {
      maxFrames = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      return _this.frame;
    }) || this;

    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }

  VirtualTimeScheduler.prototype.flush = function () {
    var _a = this,
        actions = _a.actions,
        maxFrames = _a.maxFrames;

    var error, action;

    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;

      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  VirtualTimeScheduler.frameTimeFactor = 10;
  return VirtualTimeScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(VirtualAction, _super);

  function VirtualAction(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }

    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }

  VirtualAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (!this.id) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.active = false;
    var action = new VirtualAction(this.scheduler, this.work);
    this.add(action);
    return action.schedule(state, delay);
  };

  VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
  };

  VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return undefined;
  };

  VirtualAction.prototype._execute = function (state, delay) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay);
    }
  };

  VirtualAction.sortActions = function (a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };

  return VirtualAction;
}(_AsyncAction.AsyncAction);

exports.VirtualAction = VirtualAction;
},{"tslib":"node_modules/tslib/tslib.es6.js","./AsyncAction":"node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/internal/util/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
  return x;
}
},{}],"node_modules/rxjs/_esm5/internal/util/isObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObservable = isObservable;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function isObservable(obj) {
  return !!obj && (obj instanceof _Observable.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArgumentOutOfRangeError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
  Error.call(this);
  this.message = 'argument out of range';
  this.name = 'ArgumentOutOfRangeError';
  return this;
}

ArgumentOutOfRangeErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
},{}],"node_modules/rxjs/_esm5/internal/util/EmptyError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
  Error.call(this);
  this.message = 'no elements in sequence';
  this.name = 'EmptyError';
  return this;
}

EmptyErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var EmptyError = EmptyErrorImpl;
exports.EmptyError = EmptyError;
},{}],"node_modules/rxjs/_esm5/internal/util/TimeoutError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeoutError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
  Error.call(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  return this;
}

TimeoutErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var TimeoutError = TimeoutErrorImpl;
exports.TimeoutError = TimeoutError;
},{}],"node_modules/rxjs/_esm5/internal/operators/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.MapOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }

    return source.lift(new MapOperator(project, thisArg));
  };
}

var MapOperator =
/*@__PURE__*/
function () {
  function MapOperator(project, thisArg) {
    this.project = project;
    this.thisArg = thisArg;
  }

  MapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  };

  return MapOperator;
}();

exports.MapOperator = MapOperator;

var MapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MapSubscriber, _super);

  function MapSubscriber(destination, project, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.count = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }

  MapSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.project.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return MapSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/observable/bindCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCallback = bindCallback;

var _Observable = require("../Observable");

var _AsyncSubject = require("../AsyncSubject");

var _map = require("../operators/map");

var _canReportError = require("../util/canReportError");

var _isArray = require("../util/isArray");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */
function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
          return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var context = this;
    var subject;
    var params = {
      context: context,
      subject: subject,
      callbackFunc: callbackFunc,
      scheduler: scheduler
    };
    return new _Observable.Observable(function (subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new _AsyncSubject.AsyncSubject();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if ((0, _canReportError.canReportError)(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        var state = {
          args: args,
          subscriber: subscriber,
          params: params
        };
        return scheduler.schedule(dispatch, 0, state);
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var self = this;
  var args = state.args,
      subscriber = state.subscriber,
      params = state.params;
  var callbackFunc = params.callbackFunc,
      context = params.context,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject.AsyncSubject();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

      _this.add(scheduler.schedule(dispatchNext, 0, {
        value: value,
        subject: subject
      }));
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(state) {
  var value = state.value,
      subject = state.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(state) {
  var err = state.err,
      subject = state.subject;
  subject.error(err);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../AsyncSubject":"node_modules/rxjs/_esm5/internal/AsyncSubject.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js","../util/canReportError":"node_modules/rxjs/_esm5/internal/util/canReportError.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindNodeCallback = bindNodeCallback;

var _Observable = require("../Observable");

var _AsyncSubject = require("../AsyncSubject");

var _map = require("../operators/map");

var _canReportError = require("../util/canReportError");

var _isScheduler = require("../util/isScheduler");

var _isArray = require("../util/isArray");

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
          return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var params = {
      subject: undefined,
      args: args,
      callbackFunc: callbackFunc,
      scheduler: scheduler,
      context: this
    };
    return new _Observable.Observable(function (subscriber) {
      var context = params.context;
      var subject = params.subject;

      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new _AsyncSubject.AsyncSubject();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            var err = innerArgs.shift();

            if (err) {
              subject.error(err);
              return;
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if ((0, _canReportError.canReportError)(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          params: params,
          subscriber: subscriber,
          context: context
        });
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var params = state.params,
      subscriber = state.subscriber,
      context = state.context;
  var callbackFunc = params.callbackFunc,
      args = params.args,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject.AsyncSubject();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var err = innerArgs.shift();

      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, {
          err: err,
          subject: subject
        }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

        _this.add(scheduler.schedule(dispatchNext, 0, {
          value: value,
          subject: subject
        }));
      }
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, {
        err: err,
        subject: subject
      }));
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(arg) {
  var value = arg.value,
      subject = arg.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(arg) {
  var err = arg.err,
      subject = arg.subject;
  subject.error(err);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../AsyncSubject":"node_modules/rxjs/_esm5/internal/AsyncSubject.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js","../util/canReportError":"node_modules/rxjs/_esm5/internal/util/canReportError.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js"}],"node_modules/rxjs/_esm5/internal/OuterSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OuterSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var OuterSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(OuterSubscriber, _super);

  function OuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  OuterSubscriber.prototype.notifyError = function (error, innerSub) {
    this.destination.error(error);
  };

  OuterSubscriber.prototype.notifyComplete = function (innerSub) {
    this.destination.complete();
  };

  return OuterSubscriber;
}(_Subscriber.Subscriber);

exports.OuterSubscriber = OuterSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/InnerSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var InnerSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(InnerSubscriber, _super);

  function InnerSubscriber(parent, outerValue, outerIndex) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.outerValue = outerValue;
    _this.outerIndex = outerIndex;
    _this.index = 0;
    return _this;
  }

  InnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  };

  InnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  };

  InnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  };

  return InnerSubscriber;
}(_Subscriber.Subscriber);

exports.InnerSubscriber = InnerSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","./Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToPromise = void 0;

var _hostReportError = require("./hostReportError");

/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
var subscribeToPromise = function (promise) {
  return function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, _hostReportError.hostReportError);
    return subscriber;
  };
};

exports.subscribeToPromise = subscribeToPromise;
},{"./hostReportError":"node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"node_modules/rxjs/_esm5/internal/symbol/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSymbolIterator = getSymbolIterator;
exports.$$iterator = exports.iterator = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

var iterator =
/*@__PURE__*/
getSymbolIterator();
exports.iterator = iterator;
var $$iterator = iterator;
exports.$$iterator = $$iterator;
},{}],"node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToIterable = void 0;

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
var subscribeToIterable = function (iterable) {
  return function (subscriber) {
    var iterator = iterable[_iterator.iterator]();

    do {
      var item = iterator.next();

      if (item.done) {
        subscriber.complete();
        break;
      }

      subscriber.next(item.value);

      if (subscriber.closed) {
        break;
      }
    } while (true);

    if (typeof iterator.return === 'function') {
      subscriber.add(function () {
        if (iterator.return) {
          iterator.return();
        }
      });
    }

    return subscriber;
  };
};

exports.subscribeToIterable = subscribeToIterable;
},{"../symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToObservable = void 0;

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
var subscribeToObservable = function (obj) {
  return function (subscriber) {
    var obs = obj[_observable.observable]();

    if (typeof obs.subscribe !== 'function') {
      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    } else {
      return obs.subscribe(subscriber);
    }
  };
};

exports.subscribeToObservable = subscribeToObservable;
},{"../symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"node_modules/rxjs/_esm5/internal/util/isArrayLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

exports.isArrayLike = isArrayLike;
},{}],"node_modules/rxjs/_esm5/internal/util/isPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = isPromise;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
},{}],"node_modules/rxjs/_esm5/internal/util/subscribeTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeTo = void 0;

var _subscribeToArray = require("./subscribeToArray");

var _subscribeToPromise = require("./subscribeToPromise");

var _subscribeToIterable = require("./subscribeToIterable");

var _subscribeToObservable = require("./subscribeToObservable");

var _isArrayLike = require("./isArrayLike");

var _isPromise = require("./isPromise");

var _isObject = require("./isObject");

var _iterator = require("../symbol/iterator");

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
var subscribeTo = function (result) {
  if (!!result && typeof result[_observable.observable] === 'function') {
    return (0, _subscribeToObservable.subscribeToObservable)(result);
  } else if ((0, _isArrayLike.isArrayLike)(result)) {
    return (0, _subscribeToArray.subscribeToArray)(result);
  } else if ((0, _isPromise.isPromise)(result)) {
    return (0, _subscribeToPromise.subscribeToPromise)(result);
  } else if (!!result && typeof result[_iterator.iterator] === 'function') {
    return (0, _subscribeToIterable.subscribeToIterable)(result);
  } else {
    var value = (0, _isObject.isObject)(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};

exports.subscribeTo = subscribeTo;
},{"./subscribeToArray":"node_modules/rxjs/_esm5/internal/util/subscribeToArray.js","./subscribeToPromise":"node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js","./subscribeToIterable":"node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js","./subscribeToObservable":"node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js","./isArrayLike":"node_modules/rxjs/_esm5/internal/util/isArrayLike.js","./isPromise":"node_modules/rxjs/_esm5/internal/util/isPromise.js","./isObject":"node_modules/rxjs/_esm5/internal/util/isObject.js","../symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js","../symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToResult = subscribeToResult;

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeTo = require("./subscribeTo");

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
  if (destination === void 0) {
    destination = new _InnerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }

  if (destination.closed) {
    return undefined;
  }

  if (result instanceof _Observable.Observable) {
    return result.subscribe(destination);
  }

  return (0, _subscribeTo.subscribeTo)(result)(destination);
}
},{"../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","./subscribeTo":"node_modules/rxjs/_esm5/internal/util/subscribeTo.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/observable/combineLatest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = combineLatest;
exports.CombineLatestSubscriber = exports.CombineLatestOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isScheduler = require("../util/isScheduler");

var _isArray = require("../util/isArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _fromArray = require("./fromArray");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
var NONE = {};

function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = null;
  var scheduler = null;

  if ((0, _isScheduler.isScheduler)(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }

  if (typeof observables[observables.length - 1] === 'function') {
    resultSelector = observables.pop();
  }

  if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
    observables = observables[0];
  }

  return (0, _fromArray.fromArray)(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}

var CombineLatestOperator =
/*@__PURE__*/
function () {
  function CombineLatestOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  CombineLatestOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
  };

  return CombineLatestOperator;
}();

exports.CombineLatestOperator = CombineLatestOperator;

var CombineLatestSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CombineLatestSubscriber, _super);

  function CombineLatestSubscriber(destination, resultSelector) {
    var _this = _super.call(this, destination) || this;

    _this.resultSelector = resultSelector;
    _this.active = 0;
    _this.values = [];
    _this.observables = [];
    return _this;
  }

  CombineLatestSubscriber.prototype._next = function (observable) {
    this.values.push(NONE);
    this.observables.push(observable);
  };

  CombineLatestSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      this.active = len;
      this.toRespond = len;

      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add((0, _subscribeToResult.subscribeToResult)(this, observable, observable, i));
      }
    }
  };

  CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
    if ((this.active -= 1) === 0) {
      this.destination.complete();
    }
  };

  CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var values = this.values;
    var oldVal = values[outerIndex];
    var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
    values[outerIndex] = innerValue;

    if (toRespond === 0) {
      if (this.resultSelector) {
        this._tryResultSelector(values);
      } else {
        this.destination.next(values.slice());
      }
    }
  };

  CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
    var result;

    try {
      result = this.resultSelector.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return CombineLatestSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.CombineLatestSubscriber = CombineLatestSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js"}],"node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleObservable = scheduleObservable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */
function scheduleObservable(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    sub.add(scheduler.schedule(function () {
      var observable = input[_observable.observable]();

      sub.add(observable.subscribe({
        next: function (value) {
          sub.add(scheduler.schedule(function () {
            return subscriber.next(value);
          }));
        },
        error: function (err) {
          sub.add(scheduler.schedule(function () {
            return subscriber.error(err);
          }));
        },
        complete: function () {
          sub.add(scheduler.schedule(function () {
            return subscriber.complete();
          }));
        }
      }));
    }));
    return sub;
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schedulePromise = schedulePromise;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function schedulePromise(input, scheduler) {
  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    sub.add(scheduler.schedule(function () {
      return input.then(function (value) {
        sub.add(scheduler.schedule(function () {
          subscriber.next(value);
          sub.add(scheduler.schedule(function () {
            return subscriber.complete();
          }));
        }));
      }, function (err) {
        sub.add(scheduler.schedule(function () {
          return subscriber.error(err);
        }));
      });
    }));
    return sub;
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleIterable = scheduleIterable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */
function scheduleIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  return new _Observable.Observable(function (subscriber) {
    var sub = new _Subscription.Subscription();
    var iterator;
    sub.add(function () {
      if (iterator && typeof iterator.return === 'function') {
        iterator.return();
      }
    });
    sub.add(scheduler.schedule(function () {
      iterator = input[_iterator.iterator]();
      sub.add(scheduler.schedule(function () {
        if (subscriber.closed) {
          return;
        }

        var value;
        var done;

        try {
          var result = iterator.next();
          value = result.value;
          done = result.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }

        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
          this.schedule();
        }
      }));
    }));
    return sub;
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInteropObservable = isInteropObservable;

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
function isInteropObservable(input) {
  return input && typeof input[_observable.observable] === 'function';
}
},{"../symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"node_modules/rxjs/_esm5/internal/util/isIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = isIterable;

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
function isIterable(input) {
  return input && typeof input[_iterator.iterator] === 'function';
}
},{"../symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"node_modules/rxjs/_esm5/internal/scheduled/scheduled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduled = scheduled;

var _scheduleObservable = require("./scheduleObservable");

var _schedulePromise = require("./schedulePromise");

var _scheduleArray = require("./scheduleArray");

var _scheduleIterable = require("./scheduleIterable");

var _isInteropObservable = require("../util/isInteropObservable");

var _isPromise = require("../util/isPromise");

var _isArrayLike = require("../util/isArrayLike");

var _isIterable = require("../util/isIterable");

/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */
function scheduled(input, scheduler) {
  if (input != null) {
    if ((0, _isInteropObservable.isInteropObservable)(input)) {
      return (0, _scheduleObservable.scheduleObservable)(input, scheduler);
    } else if ((0, _isPromise.isPromise)(input)) {
      return (0, _schedulePromise.schedulePromise)(input, scheduler);
    } else if ((0, _isArrayLike.isArrayLike)(input)) {
      return (0, _scheduleArray.scheduleArray)(input, scheduler);
    } else if ((0, _isIterable.isIterable)(input) || typeof input === 'string') {
      return (0, _scheduleIterable.scheduleIterable)(input, scheduler);
    }
  }

  throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
},{"./scheduleObservable":"node_modules/rxjs/_esm5/internal/scheduled/scheduleObservable.js","./schedulePromise":"node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js","./scheduleArray":"node_modules/rxjs/_esm5/internal/scheduled/scheduleArray.js","./scheduleIterable":"node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js","../util/isInteropObservable":"node_modules/rxjs/_esm5/internal/util/isInteropObservable.js","../util/isPromise":"node_modules/rxjs/_esm5/internal/util/isPromise.js","../util/isArrayLike":"node_modules/rxjs/_esm5/internal/util/isArrayLike.js","../util/isIterable":"node_modules/rxjs/_esm5/internal/util/isIterable.js"}],"node_modules/rxjs/_esm5/internal/observable/from.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from = from;

var _Observable = require("../Observable");

var _subscribeTo = require("../util/subscribeTo");

var _scheduled = require("../scheduled/scheduled");

/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */
function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof _Observable.Observable) {
      return input;
    }

    return new _Observable.Observable((0, _subscribeTo.subscribeTo)(input));
  } else {
    return (0, _scheduled.scheduled)(input, scheduler);
  }
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/subscribeTo":"node_modules/rxjs/_esm5/internal/util/subscribeTo.js","../scheduled/scheduled":"node_modules/rxjs/_esm5/internal/scheduled/scheduled.js"}],"node_modules/rxjs/_esm5/internal/operators/mergeMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMap = mergeMap;
exports.MergeMapSubscriber = exports.MergeMapOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _map = require("./map");

var _from = require("../observable/from");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(mergeMap(function (a, i) {
        return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return function (source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}

var MergeMapOperator =
/*@__PURE__*/
function () {
  function MergeMapOperator(project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    this.project = project;
    this.concurrent = concurrent;
  }

  MergeMapOperator.prototype.call = function (observer, source) {
    return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
  };

  return MergeMapOperator;
}();

exports.MergeMapOperator = MergeMapOperator;

var MergeMapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MergeMapSubscriber, _super);

  function MergeMapSubscriber(destination, project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.concurrent = concurrent;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }

  MergeMapSubscriber.prototype._next = function (value) {
    if (this.active < this.concurrent) {
      this._tryNext(value);
    } else {
      this.buffer.push(value);
    }
  };

  MergeMapSubscriber.prototype._tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.active++;

    this._innerSub(result, value, index);
  };

  MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    (0, _subscribeToResult.subscribeToResult)(this, ish, value, index, innerSubscriber);
  };

  MergeMapSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.active === 0 && this.buffer.length === 0) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    this.remove(innerSub);
    this.active--;

    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      this.destination.complete();
    }
  };

  return MergeMapSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.MergeMapSubscriber = MergeMapSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","./map":"node_modules/rxjs/_esm5/internal/operators/map.js","../observable/from":"node_modules/rxjs/_esm5/internal/observable/from.js"}],"node_modules/rxjs/_esm5/internal/operators/mergeAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAll = mergeAll;

var _mergeMap = require("./mergeMap");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return (0, _mergeMap.mergeMap)(_identity.identity, concurrent);
}
},{"./mergeMap":"node_modules/rxjs/_esm5/internal/operators/mergeMap.js","../util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js"}],"node_modules/rxjs/_esm5/internal/operators/concatAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAll = concatAll;

var _mergeAll = require("./mergeAll");

/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
function concatAll() {
  return (0, _mergeAll.mergeAll)(1);
}
},{"./mergeAll":"node_modules/rxjs/_esm5/internal/operators/mergeAll.js"}],"node_modules/rxjs/_esm5/internal/observable/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _of = require("./of");

var _concatAll = require("../operators/concatAll");

/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */
function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return (0, _concatAll.concatAll)()(_of.of.apply(void 0, observables));
}
},{"./of":"node_modules/rxjs/_esm5/internal/observable/of.js","../operators/concatAll":"node_modules/rxjs/_esm5/internal/operators/concatAll.js"}],"node_modules/rxjs/_esm5/internal/observable/defer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defer = defer;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function defer(observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var input;

    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = input ? (0, _from.from)(input) : (0, _empty.empty)();
    return source.subscribe(subscriber);
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./from":"node_modules/rxjs/_esm5/internal/observable/from.js","./empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/observable/forkJoin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forkJoin = forkJoin;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _map = require("../operators/map");

var _isObject = require("../util/isObject");

var _from = require("./from");

/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */
function forkJoin() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  if (sources.length === 1) {
    var first_1 = sources[0];

    if ((0, _isArray.isArray)(first_1)) {
      return forkJoinInternal(first_1, null);
    }

    if ((0, _isObject.isObject)(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
      var keys = Object.keys(first_1);
      return forkJoinInternal(keys.map(function (key) {
        return first_1[key];
      }), keys);
    }
  }

  if (typeof sources[sources.length - 1] === 'function') {
    var resultSelector_1 = sources.pop();
    sources = sources.length === 1 && (0, _isArray.isArray)(sources[0]) ? sources[0] : sources;
    return forkJoinInternal(sources, null).pipe((0, _map.map)(function (args) {
      return resultSelector_1.apply(void 0, args);
    }));
  }

  return forkJoinInternal(sources, null);
}

function forkJoinInternal(sources, keys) {
  return new _Observable.Observable(function (subscriber) {
    var len = sources.length;

    if (len === 0) {
      subscriber.complete();
      return;
    }

    var values = new Array(len);
    var completed = 0;
    var emitted = 0;

    var _loop_1 = function (i) {
      var source = (0, _from.from)(sources[i]);
      var hasValue = false;
      subscriber.add(source.subscribe({
        next: function (value) {
          if (!hasValue) {
            hasValue = true;
            emitted++;
          }

          values[i] = value;
        },
        error: function (err) {
          return subscriber.error(err);
        },
        complete: function () {
          completed++;

          if (completed === len || !hasValue) {
            if (emitted === len) {
              subscriber.next(keys ? keys.reduce(function (result, key, i) {
                return result[key] = values[i], result;
              }, {}) : values);
            }

            subscriber.complete();
          }
        }
      }));
    };

    for (var i = 0; i < len; i++) {
      _loop_1(i);
    }
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js","../util/isObject":"node_modules/rxjs/_esm5/internal/util/isObject.js","./from":"node_modules/rxjs/_esm5/internal/observable/from.js"}],"node_modules/rxjs/_esm5/internal/observable/fromEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEvent = fromEvent;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _isFunction = require("../util/isFunction");

var _map = require("../operators/map");

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
var toString = Object.prototype.toString;

function fromEvent(target, eventName, options, resultSelector) {
  if ((0, _isFunction.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0, _map.map)(function (args) {
      return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    function handler(e) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e);
      }
    }

    setupSubscription(target, eventName, handler, subscriber, options);
  });
}

function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;

  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);

    unsubscribe = function () {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);

    unsubscribe = function () {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);

    unsubscribe = function () {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
    throw new TypeError('Invalid event target');
  }

  subscriber.add(unsubscribe);
}

function isNodeStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}

function isJQueryStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}

function isEventTarget(sourceObj) {
  return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js"}],"node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEventPattern = fromEventPattern;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _isFunction = require("../util/isFunction");

var _map = require("../operators/map");

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe((0, _map.map)(function (args) {
      return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    var handler = function () {
      var e = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }

      return subscriber.next(e.length === 1 ? e[0] : e);
    };

    var retValue;

    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!(0, _isFunction.isFunction)(removeHandler)) {
      return undefined;
    }

    return function () {
      return removeHandler(handler, retValue);
    };
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js"}],"node_modules/rxjs/_esm5/internal/observable/generate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;

var _Observable = require("../Observable");

var _identity = require("../util/identity");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;

  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || _identity.identity;
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === undefined || (0, _isScheduler.isScheduler)(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = _identity.identity;
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }

  return new _Observable.Observable(function (subscriber) {
    var state = initialState;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        subscriber: subscriber,
        iterate: iterate,
        condition: condition,
        resultSelector: resultSelector,
        state: state
      });
    }

    do {
      if (condition) {
        var conditionResult = void 0;

        try {
          conditionResult = condition(state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }

      var value = void 0;

      try {
        value = resultSelector(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }

      subscriber.next(value);

      if (subscriber.closed) {
        break;
      }

      try {
        state = iterate(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }
    } while (true);

    return undefined;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      condition = state.condition;

  if (subscriber.closed) {
    return undefined;
  }

  if (state.needIterate) {
    try {
      state.state = state.iterate(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }
  } else {
    state.needIterate = true;
  }

  if (condition) {
    var conditionResult = void 0;

    try {
      conditionResult = condition(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!conditionResult) {
      subscriber.complete();
      return undefined;
    }

    if (subscriber.closed) {
      return undefined;
    }
  }

  var value;

  try {
    value = state.resultSelector(state.state);
  } catch (err) {
    subscriber.error(err);
    return undefined;
  }

  if (subscriber.closed) {
    return undefined;
  }

  subscriber.next(value);

  if (subscriber.closed) {
    return undefined;
  }

  return this.schedule(state);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/observable/iif.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iif = iif;

var _defer = require("./defer");

var _empty = require("./empty");

/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */
function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = _empty.EMPTY;
  }

  if (falseResult === void 0) {
    falseResult = _empty.EMPTY;
  }

  return (0, _defer.defer)(function () {
    return condition() ? trueResult : falseResult;
  });
}
},{"./defer":"node_modules/rxjs/_esm5/internal/observable/defer.js","./empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/util/isNumeric.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;

var _isArray = require("./isArray");

/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
function isNumeric(val) {
  return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}
},{"./isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js"}],"node_modules/rxjs/_esm5/internal/observable/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interval = interval;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isNumeric = require("../util/isNumeric");

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }

  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  if (!(0, _isNumeric.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _async.async;
  }

  return new _Observable.Observable(function (subscriber) {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber: subscriber,
      counter: 0,
      period: period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      counter = state.counter,
      period = state.period;
  subscriber.next(counter);
  this.schedule({
    subscriber: subscriber,
    counter: counter + 1,
    period: period
  }, period);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isNumeric":"node_modules/rxjs/_esm5/internal/util/isNumeric.js"}],"node_modules/rxjs/_esm5/internal/observable/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

var _Observable = require("../Observable");

var _isScheduler = require("../util/isScheduler");

var _mergeAll = require("../operators/mergeAll");

var _fromArray = require("./fromArray");

/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last = observables[observables.length - 1];

  if ((0, _isScheduler.isScheduler)(last)) {
    scheduler = observables.pop();

    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = observables.pop();
  }

  if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable.Observable) {
    return observables[0];
  }

  return (0, _mergeAll.mergeAll)(concurrent)((0, _fromArray.fromArray)(observables, scheduler));
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","../operators/mergeAll":"node_modules/rxjs/_esm5/internal/operators/mergeAll.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js"}],"node_modules/rxjs/_esm5/internal/observable/never.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.never = never;
exports.NEVER = void 0;

var _Observable = require("../Observable");

var _noop = require("../util/noop");

/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
var NEVER =
/*@__PURE__*/
new _Observable.Observable(_noop.noop);
exports.NEVER = NEVER;

function never() {
  return NEVER;
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/noop":"node_modules/rxjs/_esm5/internal/util/noop.js"}],"node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = onErrorResumeNext;

var _Observable = require("../Observable");

var _from = require("./from");

var _isArray = require("../util/isArray");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */
function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  if (sources.length === 0) {
    return _empty.EMPTY;
  }

  var first = sources[0],
      remainder = sources.slice(1);

  if (sources.length === 1 && (0, _isArray.isArray)(first)) {
    return onErrorResumeNext.apply(void 0, first);
  }

  return new _Observable.Observable(function (subscriber) {
    var subNext = function () {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };

    return (0, _from.from)(first).subscribe({
      next: function (value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./from":"node_modules/rxjs/_esm5/internal/observable/from.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","./empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/observable/pairs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;
exports.dispatch = dispatch;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function pairs(obj, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable(function (subscriber) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];

        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }

      subscriber.complete();
    });
  } else {
    return new _Observable.Observable(function (subscriber) {
      var keys = Object.keys(obj);
      var subscription = new _Subscription.Subscription();
      subscription.add(scheduler.schedule(dispatch, 0, {
        keys: keys,
        index: 0,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
      return subscription;
    });
  }
}

function dispatch(state) {
  var keys = state.keys,
      index = state.index,
      subscriber = state.subscriber,
      subscription = state.subscription,
      obj = state.obj;

  if (!subscriber.closed) {
    if (index < keys.length) {
      var key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({
        keys: keys,
        index: index + 1,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
    } else {
      subscriber.complete();
    }
  }
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/util/not.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.not = not;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
  function notPred() {
    return !notPred.pred.apply(notPred.thisArg, arguments);
  }

  notPred.pred = pred;
  notPred.thisArg = thisArg;
  return notPred;
}
},{}],"node_modules/rxjs/_esm5/internal/operators/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}

var FilterOperator =
/*@__PURE__*/
function () {
  function FilterOperator(predicate, thisArg) {
    this.predicate = predicate;
    this.thisArg = thisArg;
  }

  FilterOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
  };

  return FilterOperator;
}();

var FilterSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(FilterSubscriber, _super);

  function FilterSubscriber(destination, predicate, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.count = 0;
    return _this;
  }

  FilterSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.predicate.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.destination.next(value);
    }
  };

  return FilterSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/observable/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _not = require("../util/not");

var _subscribeTo = require("../util/subscribeTo");

var _filter = require("../operators/filter");

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */
function partition(source, predicate, thisArg) {
  return [(0, _filter.filter)(predicate, thisArg)(new _Observable.Observable((0, _subscribeTo.subscribeTo)(source))), (0, _filter.filter)((0, _not.not)(predicate, thisArg))(new _Observable.Observable((0, _subscribeTo.subscribeTo)(source)))];
}
},{"../util/not":"node_modules/rxjs/_esm5/internal/util/not.js","../util/subscribeTo":"node_modules/rxjs/_esm5/internal/util/subscribeTo.js","../operators/filter":"node_modules/rxjs/_esm5/internal/operators/filter.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/observable/race.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = race;
exports.RaceSubscriber = exports.RaceOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isArray = require("../util/isArray");

var _fromArray = require("./fromArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  if (observables.length === 1) {
    if ((0, _isArray.isArray)(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }

  return (0, _fromArray.fromArray)(observables, undefined).lift(new RaceOperator());
}

var RaceOperator =
/*@__PURE__*/
function () {
  function RaceOperator() {}

  RaceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RaceSubscriber(subscriber));
  };

  return RaceOperator;
}();

exports.RaceOperator = RaceOperator;

var RaceSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RaceSubscriber, _super);

  function RaceSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasFirst = false;
    _this.observables = [];
    _this.subscriptions = [];
    return _this;
  }

  RaceSubscriber.prototype._next = function (observable) {
    this.observables.push(observable);
  };

  RaceSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      for (var i = 0; i < len && !this.hasFirst; i++) {
        var observable = observables[i];
        var subscription = (0, _subscribeToResult.subscribeToResult)(this, observable, observable, i);

        if (this.subscriptions) {
          this.subscriptions.push(subscription);
        }

        this.add(subscription);
      }

      this.observables = null;
    }
  };

  RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (!this.hasFirst) {
      this.hasFirst = true;

      for (var i = 0; i < this.subscriptions.length; i++) {
        if (i !== outerIndex) {
          var subscription = this.subscriptions[i];
          subscription.unsubscribe();
          this.remove(subscription);
        }
      }

      this.subscriptions = null;
    }

    this.destination.next(innerValue);
  };

  return RaceSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.RaceSubscriber = RaceSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/observable/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.dispatch = dispatch;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function range(start, count, scheduler) {
  if (start === void 0) {
    start = 0;
  }

  return new _Observable.Observable(function (subscriber) {
    if (count === undefined) {
      count = start;
      start = 0;
    }

    var index = 0;
    var current = start;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        index: index,
        count: count,
        start: start,
        subscriber: subscriber
      });
    } else {
      do {
        if (index++ >= count) {
          subscriber.complete();
          break;
        }

        subscriber.next(current++);

        if (subscriber.closed) {
          break;
        }
      } while (true);
    }

    return undefined;
  });
}

function dispatch(state) {
  var start = state.start,
      index = state.index,
      count = state.count,
      subscriber = state.subscriber;

  if (index >= count) {
    subscriber.complete();
    return;
  }

  subscriber.next(start);

  if (subscriber.closed) {
    return;
  }

  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js"}],"node_modules/rxjs/_esm5/internal/observable/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = timer;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isNumeric = require("../util/isNumeric");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  var period = -1;

  if ((0, _isNumeric.isNumeric)(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if ((0, _isScheduler.isScheduler)(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }

  if (!(0, _isScheduler.isScheduler)(scheduler)) {
    scheduler = _async.async;
  }

  return new _Observable.Observable(function (subscriber) {
    var due = (0, _isNumeric.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period: period,
      subscriber: subscriber
    });
  });
}

function dispatch(state) {
  var index = state.index,
      period = state.period,
      subscriber = state.subscriber;
  subscriber.next(index);

  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }

  state.index = index + 1;
  this.schedule(state, period);
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isNumeric":"node_modules/rxjs/_esm5/internal/util/isNumeric.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/observable/using.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.using = using;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function using(resourceFactory, observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var resource;

    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var result;

    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = result ? (0, _from.from)(result) : _empty.EMPTY;
    var subscription = source.subscribe(subscriber);
    return function () {
      subscription.unsubscribe();

      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./from":"node_modules/rxjs/_esm5/internal/observable/from.js","./empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/observable/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;
exports.ZipSubscriber = exports.ZipOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _fromArray = require("./fromArray");

var _isArray = require("../util/isArray");

var _Subscriber = require("../Subscriber");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _iterator = require("../../internal/symbol/iterator");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */
function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = observables[observables.length - 1];

  if (typeof resultSelector === 'function') {
    observables.pop();
  }

  return (0, _fromArray.fromArray)(observables, undefined).lift(new ZipOperator(resultSelector));
}

var ZipOperator =
/*@__PURE__*/
function () {
  function ZipOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  ZipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  };

  return ZipOperator;
}();

exports.ZipOperator = ZipOperator;

var ZipSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ZipSubscriber, _super);

  function ZipSubscriber(destination, resultSelector, values) {
    if (values === void 0) {
      values = Object.create(null);
    }

    var _this = _super.call(this, destination) || this;

    _this.iterators = [];
    _this.active = 0;
    _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : null;
    _this.values = values;
    return _this;
  }

  ZipSubscriber.prototype._next = function (value) {
    var iterators = this.iterators;

    if ((0, _isArray.isArray)(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[_iterator.iterator] === 'function') {
      iterators.push(new StaticIterator(value[_iterator.iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  };

  ZipSubscriber.prototype._complete = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    this.unsubscribe();

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (iterator.stillUnsubscribed) {
        var destination = this.destination;
        destination.add(iterator.subscribe(iterator, i));
      } else {
        this.active--;
      }
    }
  };

  ZipSubscriber.prototype.notifyInactive = function () {
    this.active--;

    if (this.active === 0) {
      this.destination.complete();
    }
  };

  ZipSubscriber.prototype.checkIterators = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    var destination = this.destination;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    var shouldComplete = false;
    var args = [];

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];
      var result = iterator.next();

      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  };

  ZipSubscriber.prototype._tryresultSelector = function (args) {
    var result;

    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return ZipSubscriber;
}(_Subscriber.Subscriber);

exports.ZipSubscriber = ZipSubscriber;

var StaticIterator =
/*@__PURE__*/
function () {
  function StaticIterator(iterator) {
    this.iterator = iterator;
    this.nextResult = iterator.next();
  }

  StaticIterator.prototype.hasValue = function () {
    return true;
  };

  StaticIterator.prototype.next = function () {
    var result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  };

  StaticIterator.prototype.hasCompleted = function () {
    var nextResult = this.nextResult;
    return nextResult && nextResult.done;
  };

  return StaticIterator;
}();

var StaticArrayIterator =
/*@__PURE__*/
function () {
  function StaticArrayIterator(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }

  StaticArrayIterator.prototype[_iterator.iterator] = function () {
    return this;
  };

  StaticArrayIterator.prototype.next = function (value) {
    var i = this.index++;
    var array = this.array;
    return i < this.length ? {
      value: array[i],
      done: false
    } : {
      value: null,
      done: true
    };
  };

  StaticArrayIterator.prototype.hasValue = function () {
    return this.array.length > this.index;
  };

  StaticArrayIterator.prototype.hasCompleted = function () {
    return this.array.length === this.index;
  };

  return StaticArrayIterator;
}();

var ZipBufferIterator =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ZipBufferIterator, _super);

  function ZipBufferIterator(destination, parent, observable) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    _this.observable = observable;
    _this.stillUnsubscribed = true;
    _this.buffer = [];
    _this.isComplete = false;
    return _this;
  }

  ZipBufferIterator.prototype[_iterator.iterator] = function () {
    return this;
  };

  ZipBufferIterator.prototype.next = function () {
    var buffer = this.buffer;

    if (buffer.length === 0 && this.isComplete) {
      return {
        value: null,
        done: true
      };
    } else {
      return {
        value: buffer.shift(),
        done: false
      };
    }
  };

  ZipBufferIterator.prototype.hasValue = function () {
    return this.buffer.length > 0;
  };

  ZipBufferIterator.prototype.hasCompleted = function () {
    return this.buffer.length === 0 && this.isComplete;
  };

  ZipBufferIterator.prototype.notifyComplete = function () {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  };

  ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  };

  ZipBufferIterator.prototype.subscribe = function (value, index) {
    return (0, _subscribeToResult.subscribeToResult)(this, this.observable, this, index);
  };

  return ZipBufferIterator;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","./fromArray":"node_modules/rxjs/_esm5/internal/observable/fromArray.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../../internal/symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"node_modules/rxjs/_esm5/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Observable", {
  enumerable: true,
  get: function () {
    return _Observable.Observable;
  }
});
Object.defineProperty(exports, "ConnectableObservable", {
  enumerable: true,
  get: function () {
    return _ConnectableObservable.ConnectableObservable;
  }
});
Object.defineProperty(exports, "GroupedObservable", {
  enumerable: true,
  get: function () {
    return _groupBy.GroupedObservable;
  }
});
Object.defineProperty(exports, "observable", {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});
Object.defineProperty(exports, "Subject", {
  enumerable: true,
  get: function () {
    return _Subject.Subject;
  }
});
Object.defineProperty(exports, "BehaviorSubject", {
  enumerable: true,
  get: function () {
    return _BehaviorSubject.BehaviorSubject;
  }
});
Object.defineProperty(exports, "ReplaySubject", {
  enumerable: true,
  get: function () {
    return _ReplaySubject.ReplaySubject;
  }
});
Object.defineProperty(exports, "AsyncSubject", {
  enumerable: true,
  get: function () {
    return _AsyncSubject.AsyncSubject;
  }
});
Object.defineProperty(exports, "asapScheduler", {
  enumerable: true,
  get: function () {
    return _asap.asap;
  }
});
Object.defineProperty(exports, "asyncScheduler", {
  enumerable: true,
  get: function () {
    return _async.async;
  }
});
Object.defineProperty(exports, "queueScheduler", {
  enumerable: true,
  get: function () {
    return _queue.queue;
  }
});
Object.defineProperty(exports, "animationFrameScheduler", {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrame;
  }
});
Object.defineProperty(exports, "VirtualTimeScheduler", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualTimeScheduler;
  }
});
Object.defineProperty(exports, "VirtualAction", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualAction;
  }
});
Object.defineProperty(exports, "Scheduler", {
  enumerable: true,
  get: function () {
    return _Scheduler.Scheduler;
  }
});
Object.defineProperty(exports, "Subscription", {
  enumerable: true,
  get: function () {
    return _Subscription.Subscription;
  }
});
Object.defineProperty(exports, "Subscriber", {
  enumerable: true,
  get: function () {
    return _Subscriber.Subscriber;
  }
});
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function () {
    return _Notification.Notification;
  }
});
Object.defineProperty(exports, "NotificationKind", {
  enumerable: true,
  get: function () {
    return _Notification.NotificationKind;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function () {
    return _noop.noop;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function () {
    return _identity.identity;
  }
});
Object.defineProperty(exports, "isObservable", {
  enumerable: true,
  get: function () {
    return _isObservable.isObservable;
  }
});
Object.defineProperty(exports, "ArgumentOutOfRangeError", {
  enumerable: true,
  get: function () {
    return _ArgumentOutOfRangeError.ArgumentOutOfRangeError;
  }
});
Object.defineProperty(exports, "EmptyError", {
  enumerable: true,
  get: function () {
    return _EmptyError.EmptyError;
  }
});
Object.defineProperty(exports, "ObjectUnsubscribedError", {
  enumerable: true,
  get: function () {
    return _ObjectUnsubscribedError.ObjectUnsubscribedError;
  }
});
Object.defineProperty(exports, "UnsubscriptionError", {
  enumerable: true,
  get: function () {
    return _UnsubscriptionError.UnsubscriptionError;
  }
});
Object.defineProperty(exports, "TimeoutError", {
  enumerable: true,
  get: function () {
    return _TimeoutError.TimeoutError;
  }
});
Object.defineProperty(exports, "bindCallback", {
  enumerable: true,
  get: function () {
    return _bindCallback.bindCallback;
  }
});
Object.defineProperty(exports, "bindNodeCallback", {
  enumerable: true,
  get: function () {
    return _bindNodeCallback.bindNodeCallback;
  }
});
Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});
Object.defineProperty(exports, "defer", {
  enumerable: true,
  get: function () {
    return _defer.defer;
  }
});
Object.defineProperty(exports, "empty", {
  enumerable: true,
  get: function () {
    return _empty.empty;
  }
});
Object.defineProperty(exports, "EMPTY", {
  enumerable: true,
  get: function () {
    return _empty.EMPTY;
  }
});
Object.defineProperty(exports, "forkJoin", {
  enumerable: true,
  get: function () {
    return _forkJoin.forkJoin;
  }
});
Object.defineProperty(exports, "from", {
  enumerable: true,
  get: function () {
    return _from.from;
  }
});
Object.defineProperty(exports, "fromEvent", {
  enumerable: true,
  get: function () {
    return _fromEvent.fromEvent;
  }
});
Object.defineProperty(exports, "fromEventPattern", {
  enumerable: true,
  get: function () {
    return _fromEventPattern.fromEventPattern;
  }
});
Object.defineProperty(exports, "generate", {
  enumerable: true,
  get: function () {
    return _generate.generate;
  }
});
Object.defineProperty(exports, "iif", {
  enumerable: true,
  get: function () {
    return _iif.iif;
  }
});
Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function () {
    return _interval.interval;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});
Object.defineProperty(exports, "never", {
  enumerable: true,
  get: function () {
    return _never.never;
  }
});
Object.defineProperty(exports, "NEVER", {
  enumerable: true,
  get: function () {
    return _never.NEVER;
  }
});
Object.defineProperty(exports, "of", {
  enumerable: true,
  get: function () {
    return _of.of;
  }
});
Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});
Object.defineProperty(exports, "pairs", {
  enumerable: true,
  get: function () {
    return _pairs.pairs;
  }
});
Object.defineProperty(exports, "partition", {
  enumerable: true,
  get: function () {
    return _partition.partition;
  }
});
Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});
Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function () {
    return _range.range;
  }
});
Object.defineProperty(exports, "throwError", {
  enumerable: true,
  get: function () {
    return _throwError.throwError;
  }
});
Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function () {
    return _timer.timer;
  }
});
Object.defineProperty(exports, "using", {
  enumerable: true,
  get: function () {
    return _using.using;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, "scheduled", {
  enumerable: true,
  get: function () {
    return _scheduled.scheduled;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});

var _Observable = require("./internal/Observable");

var _ConnectableObservable = require("./internal/observable/ConnectableObservable");

var _groupBy = require("./internal/operators/groupBy");

var _observable = require("./internal/symbol/observable");

var _Subject = require("./internal/Subject");

var _BehaviorSubject = require("./internal/BehaviorSubject");

var _ReplaySubject = require("./internal/ReplaySubject");

var _AsyncSubject = require("./internal/AsyncSubject");

var _asap = require("./internal/scheduler/asap");

var _async = require("./internal/scheduler/async");

var _queue = require("./internal/scheduler/queue");

var _animationFrame = require("./internal/scheduler/animationFrame");

var _VirtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");

var _Scheduler = require("./internal/Scheduler");

var _Subscription = require("./internal/Subscription");

var _Subscriber = require("./internal/Subscriber");

var _Notification = require("./internal/Notification");

var _pipe = require("./internal/util/pipe");

var _noop = require("./internal/util/noop");

var _identity = require("./internal/util/identity");

var _isObservable = require("./internal/util/isObservable");

var _ArgumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");

var _EmptyError = require("./internal/util/EmptyError");

var _ObjectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");

var _UnsubscriptionError = require("./internal/util/UnsubscriptionError");

var _TimeoutError = require("./internal/util/TimeoutError");

var _bindCallback = require("./internal/observable/bindCallback");

var _bindNodeCallback = require("./internal/observable/bindNodeCallback");

var _combineLatest = require("./internal/observable/combineLatest");

var _concat = require("./internal/observable/concat");

var _defer = require("./internal/observable/defer");

var _empty = require("./internal/observable/empty");

var _forkJoin = require("./internal/observable/forkJoin");

var _from = require("./internal/observable/from");

var _fromEvent = require("./internal/observable/fromEvent");

var _fromEventPattern = require("./internal/observable/fromEventPattern");

var _generate = require("./internal/observable/generate");

var _iif = require("./internal/observable/iif");

var _interval = require("./internal/observable/interval");

var _merge = require("./internal/observable/merge");

var _never = require("./internal/observable/never");

var _of = require("./internal/observable/of");

var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");

var _pairs = require("./internal/observable/pairs");

var _partition = require("./internal/observable/partition");

var _race = require("./internal/observable/race");

var _range = require("./internal/observable/range");

var _throwError = require("./internal/observable/throwError");

var _timer = require("./internal/observable/timer");

var _using = require("./internal/observable/using");

var _zip = require("./internal/observable/zip");

var _scheduled = require("./internal/scheduled/scheduled");

var _config = require("./internal/config");
},{"./internal/Observable":"node_modules/rxjs/_esm5/internal/Observable.js","./internal/observable/ConnectableObservable":"node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js","./internal/operators/groupBy":"node_modules/rxjs/_esm5/internal/operators/groupBy.js","./internal/symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js","./internal/Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./internal/BehaviorSubject":"node_modules/rxjs/_esm5/internal/BehaviorSubject.js","./internal/ReplaySubject":"node_modules/rxjs/_esm5/internal/ReplaySubject.js","./internal/AsyncSubject":"node_modules/rxjs/_esm5/internal/AsyncSubject.js","./internal/scheduler/asap":"node_modules/rxjs/_esm5/internal/scheduler/asap.js","./internal/scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","./internal/scheduler/queue":"node_modules/rxjs/_esm5/internal/scheduler/queue.js","./internal/scheduler/animationFrame":"node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js","./internal/scheduler/VirtualTimeScheduler":"node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js","./internal/Scheduler":"node_modules/rxjs/_esm5/internal/Scheduler.js","./internal/Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","./internal/Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","./internal/Notification":"node_modules/rxjs/_esm5/internal/Notification.js","./internal/util/pipe":"node_modules/rxjs/_esm5/internal/util/pipe.js","./internal/util/noop":"node_modules/rxjs/_esm5/internal/util/noop.js","./internal/util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js","./internal/util/isObservable":"node_modules/rxjs/_esm5/internal/util/isObservable.js","./internal/util/ArgumentOutOfRangeError":"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","./internal/util/EmptyError":"node_modules/rxjs/_esm5/internal/util/EmptyError.js","./internal/util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./internal/util/UnsubscriptionError":"node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js","./internal/util/TimeoutError":"node_modules/rxjs/_esm5/internal/util/TimeoutError.js","./internal/observable/bindCallback":"node_modules/rxjs/_esm5/internal/observable/bindCallback.js","./internal/observable/bindNodeCallback":"node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js","./internal/observable/combineLatest":"node_modules/rxjs/_esm5/internal/observable/combineLatest.js","./internal/observable/concat":"node_modules/rxjs/_esm5/internal/observable/concat.js","./internal/observable/defer":"node_modules/rxjs/_esm5/internal/observable/defer.js","./internal/observable/empty":"node_modules/rxjs/_esm5/internal/observable/empty.js","./internal/observable/forkJoin":"node_modules/rxjs/_esm5/internal/observable/forkJoin.js","./internal/observable/from":"node_modules/rxjs/_esm5/internal/observable/from.js","./internal/observable/fromEvent":"node_modules/rxjs/_esm5/internal/observable/fromEvent.js","./internal/observable/fromEventPattern":"node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js","./internal/observable/generate":"node_modules/rxjs/_esm5/internal/observable/generate.js","./internal/observable/iif":"node_modules/rxjs/_esm5/internal/observable/iif.js","./internal/observable/interval":"node_modules/rxjs/_esm5/internal/observable/interval.js","./internal/observable/merge":"node_modules/rxjs/_esm5/internal/observable/merge.js","./internal/observable/never":"node_modules/rxjs/_esm5/internal/observable/never.js","./internal/observable/of":"node_modules/rxjs/_esm5/internal/observable/of.js","./internal/observable/onErrorResumeNext":"node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js","./internal/observable/pairs":"node_modules/rxjs/_esm5/internal/observable/pairs.js","./internal/observable/partition":"node_modules/rxjs/_esm5/internal/observable/partition.js","./internal/observable/race":"node_modules/rxjs/_esm5/internal/observable/race.js","./internal/observable/range":"node_modules/rxjs/_esm5/internal/observable/range.js","./internal/observable/throwError":"node_modules/rxjs/_esm5/internal/observable/throwError.js","./internal/observable/timer":"node_modules/rxjs/_esm5/internal/observable/timer.js","./internal/observable/using":"node_modules/rxjs/_esm5/internal/observable/using.js","./internal/observable/zip":"node_modules/rxjs/_esm5/internal/observable/zip.js","./internal/scheduled/scheduled":"node_modules/rxjs/_esm5/internal/scheduled/scheduled.js","./internal/config":"node_modules/rxjs/_esm5/internal/config.js"}],"node_modules/rxjs/_esm5/internal/observable/fromPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromPromise = fromPromise;

var _Observable = require("../Observable");

var _subscribeToPromise = require("../util/subscribeToPromise");

var _schedulePromise = require("../scheduled/schedulePromise");

/** PURE_IMPORTS_START _Observable,_util_subscribeToPromise,_scheduled_schedulePromise PURE_IMPORTS_END */
function fromPromise(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToPromise.subscribeToPromise)(input));
  } else {
    return (0, _schedulePromise.schedulePromise)(input, scheduler);
  }
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/subscribeToPromise":"node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js","../scheduled/schedulePromise":"node_modules/rxjs/_esm5/internal/scheduled/schedulePromise.js"}],"node_modules/rxjs/_esm5/internal/observable/fromIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromIterable = fromIterable;

var _Observable = require("../Observable");

var _subscribeToIterable = require("../util/subscribeToIterable");

var _scheduleIterable = require("../scheduled/scheduleIterable");

/** PURE_IMPORTS_START _Observable,_util_subscribeToIterable,_scheduled_scheduleIterable PURE_IMPORTS_END */
function fromIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToIterable.subscribeToIterable)(input));
  } else {
    return (0, _scheduleIterable.scheduleIterable)(input, scheduler);
  }
}
},{"../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../util/subscribeToIterable":"node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js","../scheduled/scheduleIterable":"node_modules/rxjs/_esm5/internal/scheduled/scheduleIterable.js"}],"node_modules/rxjs/_esm5/internal/util/root.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.root = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var __window = typeof window !== 'undefined' && window;

var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && self;

var __global = typeof global !== 'undefined' && global;

var _root = __window || __global || __self;
/*@__PURE__*/


exports.root = _root;

(function () {
  if (!_root) {
    throw (
      /*@__PURE__*/
      new Error('RxJS could not find any global context (window, self, global)')
    );
  }
})();
},{}],"node_modules/rxjs/_esm5/internal/observable/dom/AjaxObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxGet = ajaxGet;
exports.ajaxPost = ajaxPost;
exports.ajaxDelete = ajaxDelete;
exports.ajaxPut = ajaxPut;
exports.ajaxPatch = ajaxPatch;
exports.ajaxGetJSON = ajaxGetJSON;
exports.AjaxTimeoutError = exports.AjaxError = exports.AjaxResponse = exports.AjaxSubscriber = exports.AjaxObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _root = require("../../util/root");

var _Observable = require("../../Observable");

var _Subscriber = require("../../Subscriber");

var _map = require("../../operators/map");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_.._util_root,_.._Observable,_.._Subscriber,_.._operators_map PURE_IMPORTS_END */
function getCORSRequest() {
  if (_root.root.XMLHttpRequest) {
    return new _root.root.XMLHttpRequest();
  } else if (!!_root.root.XDomainRequest) {
    return new _root.root.XDomainRequest();
  } else {
    throw new Error('CORS is not supported by your browser');
  }
}

function getXMLHttpRequest() {
  if (_root.root.XMLHttpRequest) {
    return new _root.root.XMLHttpRequest();
  } else {
    var progId = void 0;

    try {
      var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];

      for (var i = 0; i < 3; i++) {
        try {
          progId = progIds[i];

          if (new _root.root.ActiveXObject(progId)) {
            break;
          }
        } catch (e) {}
      }

      return new _root.root.ActiveXObject(progId);
    } catch (e) {
      throw new Error('XMLHttpRequest is not supported by your browser');
    }
  }
}

function ajaxGet(url, headers) {
  if (headers === void 0) {
    headers = null;
  }

  return new AjaxObservable({
    method: 'GET',
    url: url,
    headers: headers
  });
}

function ajaxPost(url, body, headers) {
  return new AjaxObservable({
    method: 'POST',
    url: url,
    body: body,
    headers: headers
  });
}

function ajaxDelete(url, headers) {
  return new AjaxObservable({
    method: 'DELETE',
    url: url,
    headers: headers
  });
}

function ajaxPut(url, body, headers) {
  return new AjaxObservable({
    method: 'PUT',
    url: url,
    body: body,
    headers: headers
  });
}

function ajaxPatch(url, body, headers) {
  return new AjaxObservable({
    method: 'PATCH',
    url: url,
    body: body,
    headers: headers
  });
}

var mapResponse =
/*@__PURE__*/
(0, _map.map)(function (x, index) {
  return x.response;
});

function ajaxGetJSON(url, headers) {
  return mapResponse(new AjaxObservable({
    method: 'GET',
    url: url,
    responseType: 'json',
    headers: headers
  }));
}

var AjaxObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AjaxObservable, _super);

  function AjaxObservable(urlOrRequest) {
    var _this = _super.call(this) || this;

    var request = {
      async: true,
      createXHR: function () {
        return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
      },
      crossDomain: true,
      withCredentials: false,
      headers: {},
      method: 'GET',
      responseType: 'json',
      timeout: 0
    };

    if (typeof urlOrRequest === 'string') {
      request.url = urlOrRequest;
    } else {
      for (var prop in urlOrRequest) {
        if (urlOrRequest.hasOwnProperty(prop)) {
          request[prop] = urlOrRequest[prop];
        }
      }
    }

    _this.request = request;
    return _this;
  }

  AjaxObservable.prototype._subscribe = function (subscriber) {
    return new AjaxSubscriber(subscriber, this.request);
  };

  AjaxObservable.create = function () {
    var create = function (urlOrRequest) {
      return new AjaxObservable(urlOrRequest);
    };

    create.get = ajaxGet;
    create.post = ajaxPost;
    create.delete = ajaxDelete;
    create.put = ajaxPut;
    create.patch = ajaxPatch;
    create.getJSON = ajaxGetJSON;
    return create;
  }();

  return AjaxObservable;
}(_Observable.Observable);

exports.AjaxObservable = AjaxObservable;

var AjaxSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AjaxSubscriber, _super);

  function AjaxSubscriber(destination, request) {
    var _this = _super.call(this, destination) || this;

    _this.request = request;
    _this.done = false;
    var headers = request.headers = request.headers || {};

    if (!request.crossDomain && !_this.getHeader(headers, 'X-Requested-With')) {
      headers['X-Requested-With'] = 'XMLHttpRequest';
    }

    var contentTypeHeader = _this.getHeader(headers, 'Content-Type');

    if (!contentTypeHeader && !(_root.root.FormData && request.body instanceof _root.root.FormData) && typeof request.body !== 'undefined') {
      headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    }

    request.body = _this.serializeBody(request.body, _this.getHeader(request.headers, 'Content-Type'));

    _this.send();

    return _this;
  }

  AjaxSubscriber.prototype.next = function (e) {
    this.done = true;

    var _a = this,
        xhr = _a.xhr,
        request = _a.request,
        destination = _a.destination;

    var result;

    try {
      result = new AjaxResponse(e, xhr, request);
    } catch (err) {
      return destination.error(err);
    }

    destination.next(result);
  };

  AjaxSubscriber.prototype.send = function () {
    var _a = this,
        request = _a.request,
        _b = _a.request,
        user = _b.user,
        method = _b.method,
        url = _b.url,
        async = _b.async,
        password = _b.password,
        headers = _b.headers,
        body = _b.body;

    try {
      var xhr = this.xhr = request.createXHR();
      this.setupEvents(xhr, request);

      if (user) {
        xhr.open(method, url, async, user, password);
      } else {
        xhr.open(method, url, async);
      }

      if (async) {
        xhr.timeout = request.timeout;
        xhr.responseType = request.responseType;
      }

      if ('withCredentials' in xhr) {
        xhr.withCredentials = !!request.withCredentials;
      }

      this.setHeaders(xhr, headers);

      if (body) {
        xhr.send(body);
      } else {
        xhr.send();
      }
    } catch (err) {
      this.error(err);
    }
  };

  AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
    if (!body || typeof body === 'string') {
      return body;
    } else if (_root.root.FormData && body instanceof _root.root.FormData) {
      return body;
    }

    if (contentType) {
      var splitIndex = contentType.indexOf(';');

      if (splitIndex !== -1) {
        contentType = contentType.substring(0, splitIndex);
      }
    }

    switch (contentType) {
      case 'application/x-www-form-urlencoded':
        return Object.keys(body).map(function (key) {
          return encodeURIComponent(key) + "=" + encodeURIComponent(body[key]);
        }).join('&');

      case 'application/json':
        return JSON.stringify(body);

      default:
        return body;
    }
  };

  AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  };

  AjaxSubscriber.prototype.getHeader = function (headers, headerName) {
    for (var key in headers) {
      if (key.toLowerCase() === headerName.toLowerCase()) {
        return headers[key];
      }
    }

    return undefined;
  };

  AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
    var progressSubscriber = request.progressSubscriber;

    function xhrTimeout(e) {
      var _a = xhrTimeout,
          subscriber = _a.subscriber,
          progressSubscriber = _a.progressSubscriber,
          request = _a.request;

      if (progressSubscriber) {
        progressSubscriber.error(e);
      }

      var error;

      try {
        error = new AjaxTimeoutError(this, request);
      } catch (err) {
        error = err;
      }

      subscriber.error(error);
    }

    xhr.ontimeout = xhrTimeout;
    xhrTimeout.request = request;
    xhrTimeout.subscriber = this;
    xhrTimeout.progressSubscriber = progressSubscriber;

    if (xhr.upload && 'withCredentials' in xhr) {
      if (progressSubscriber) {
        var xhrProgress_1;

        xhrProgress_1 = function (e) {
          var progressSubscriber = xhrProgress_1.progressSubscriber;
          progressSubscriber.next(e);
        };

        if (_root.root.XDomainRequest) {
          xhr.onprogress = xhrProgress_1;
        } else {
          xhr.upload.onprogress = xhrProgress_1;
        }

        xhrProgress_1.progressSubscriber = progressSubscriber;
      }

      var xhrError_1;

      xhrError_1 = function (e) {
        var _a = xhrError_1,
            progressSubscriber = _a.progressSubscriber,
            subscriber = _a.subscriber,
            request = _a.request;

        if (progressSubscriber) {
          progressSubscriber.error(e);
        }

        var error;

        try {
          error = new AjaxError('ajax error', this, request);
        } catch (err) {
          error = err;
        }

        subscriber.error(error);
      };

      xhr.onerror = xhrError_1;
      xhrError_1.request = request;
      xhrError_1.subscriber = this;
      xhrError_1.progressSubscriber = progressSubscriber;
    }

    function xhrReadyStateChange(e) {
      return;
    }

    xhr.onreadystatechange = xhrReadyStateChange;
    xhrReadyStateChange.subscriber = this;
    xhrReadyStateChange.progressSubscriber = progressSubscriber;
    xhrReadyStateChange.request = request;

    function xhrLoad(e) {
      var _a = xhrLoad,
          subscriber = _a.subscriber,
          progressSubscriber = _a.progressSubscriber,
          request = _a.request;

      if (this.readyState === 4) {
        var status_1 = this.status === 1223 ? 204 : this.status;
        var response = this.responseType === 'text' ? this.response || this.responseText : this.response;

        if (status_1 === 0) {
          status_1 = response ? 200 : 0;
        }

        if (status_1 < 400) {
          if (progressSubscriber) {
            progressSubscriber.complete();
          }

          subscriber.next(e);
          subscriber.complete();
        } else {
          if (progressSubscriber) {
            progressSubscriber.error(e);
          }

          var error = void 0;

          try {
            error = new AjaxError('ajax error ' + status_1, this, request);
          } catch (err) {
            error = err;
          }

          subscriber.error(error);
        }
      }
    }

    xhr.onload = xhrLoad;
    xhrLoad.subscriber = this;
    xhrLoad.progressSubscriber = progressSubscriber;
    xhrLoad.request = request;
  };

  AjaxSubscriber.prototype.unsubscribe = function () {
    var _a = this,
        done = _a.done,
        xhr = _a.xhr;

    if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
      xhr.abort();
    }

    _super.prototype.unsubscribe.call(this);
  };

  return AjaxSubscriber;
}(_Subscriber.Subscriber);

exports.AjaxSubscriber = AjaxSubscriber;

var AjaxResponse =
/*@__PURE__*/
function () {
  function AjaxResponse(originalEvent, xhr, request) {
    this.originalEvent = originalEvent;
    this.xhr = xhr;
    this.request = request;
    this.status = xhr.status;
    this.responseType = xhr.responseType || request.responseType;
    this.response = parseXhrResponse(this.responseType, xhr);
  }

  return AjaxResponse;
}();

exports.AjaxResponse = AjaxResponse;

function AjaxErrorImpl(message, xhr, request) {
  Error.call(this);
  this.message = message;
  this.name = 'AjaxError';
  this.xhr = xhr;
  this.request = request;
  this.status = xhr.status;
  this.responseType = xhr.responseType || request.responseType;
  this.response = parseXhrResponse(this.responseType, xhr);
  return this;
}

AjaxErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var AjaxError = AjaxErrorImpl;
exports.AjaxError = AjaxError;

function parseJson(xhr) {
  if ('response' in xhr) {
    return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
  } else {
    return JSON.parse(xhr.responseText || 'null');
  }
}

function parseXhrResponse(responseType, xhr) {
  switch (responseType) {
    case 'json':
      return parseJson(xhr);

    case 'xml':
      return xhr.responseXML;

    case 'text':
    default:
      return 'response' in xhr ? xhr.response : xhr.responseText;
  }
}

function AjaxTimeoutErrorImpl(xhr, request) {
  AjaxError.call(this, 'ajax timeout', xhr, request);
  this.name = 'AjaxTimeoutError';
  return this;
}

var AjaxTimeoutError = AjaxTimeoutErrorImpl;
exports.AjaxTimeoutError = AjaxTimeoutError;
},{"tslib":"node_modules/tslib/tslib.es6.js","../../util/root":"node_modules/rxjs/_esm5/internal/util/root.js","../../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../../operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js"}],"node_modules/rxjs/_esm5/internal/observable/dom/ajax.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajax = void 0;

var _AjaxObservable = require("./AjaxObservable");

/** PURE_IMPORTS_START _AjaxObservable PURE_IMPORTS_END */
var ajax = _AjaxObservable.AjaxObservable.create;
exports.ajax = ajax;
},{"./AjaxObservable":"node_modules/rxjs/_esm5/internal/observable/dom/AjaxObservable.js"}],"node_modules/rxjs/_esm5/internal/observable/dom/WebSocketSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebSocketSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../../Subject");

var _Subscriber = require("../../Subscriber");

var _Observable = require("../../Observable");

var _Subscription = require("../../Subscription");

var _ReplaySubject = require("../../ReplaySubject");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_.._Subject,_.._Subscriber,_.._Observable,_.._Subscription,_.._ReplaySubject PURE_IMPORTS_END */
var DEFAULT_WEBSOCKET_CONFIG = {
  url: '',
  deserializer: function (e) {
    return JSON.parse(e.data);
  },
  serializer: function (value) {
    return JSON.stringify(value);
  }
};
var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';

var WebSocketSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WebSocketSubject, _super);

  function WebSocketSubject(urlConfigOrSource, destination) {
    var _this = _super.call(this) || this;

    if (urlConfigOrSource instanceof _Observable.Observable) {
      _this.destination = destination;
      _this.source = urlConfigOrSource;
    } else {
      var config = _this._config = tslib_1.__assign({}, DEFAULT_WEBSOCKET_CONFIG);

      _this._output = new _Subject.Subject();

      if (typeof urlConfigOrSource === 'string') {
        config.url = urlConfigOrSource;
      } else {
        for (var key in urlConfigOrSource) {
          if (urlConfigOrSource.hasOwnProperty(key)) {
            config[key] = urlConfigOrSource[key];
          }
        }
      }

      if (!config.WebSocketCtor && WebSocket) {
        config.WebSocketCtor = WebSocket;
      } else if (!config.WebSocketCtor) {
        throw new Error('no WebSocket constructor can be found');
      }

      _this.destination = new _ReplaySubject.ReplaySubject();
    }

    return _this;
  }

  WebSocketSubject.prototype.lift = function (operator) {
    var sock = new WebSocketSubject(this._config, this.destination);
    sock.operator = operator;
    sock.source = this;
    return sock;
  };

  WebSocketSubject.prototype._resetState = function () {
    this._socket = null;

    if (!this.source) {
      this.destination = new _ReplaySubject.ReplaySubject();
    }

    this._output = new _Subject.Subject();
  };

  WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
    var self = this;
    return new _Observable.Observable(function (observer) {
      try {
        self.next(subMsg());
      } catch (err) {
        observer.error(err);
      }

      var subscription = self.subscribe(function (x) {
        try {
          if (messageFilter(x)) {
            observer.next(x);
          }
        } catch (err) {
          observer.error(err);
        }
      }, function (err) {
        return observer.error(err);
      }, function () {
        return observer.complete();
      });
      return function () {
        try {
          self.next(unsubMsg());
        } catch (err) {
          observer.error(err);
        }

        subscription.unsubscribe();
      };
    });
  };

  WebSocketSubject.prototype._connectSocket = function () {
    var _this = this;

    var _a = this._config,
        WebSocketCtor = _a.WebSocketCtor,
        protocol = _a.protocol,
        url = _a.url,
        binaryType = _a.binaryType;
    var observer = this._output;
    var socket = null;

    try {
      socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
      this._socket = socket;

      if (binaryType) {
        this._socket.binaryType = binaryType;
      }
    } catch (e) {
      observer.error(e);
      return;
    }

    var subscription = new _Subscription.Subscription(function () {
      _this._socket = null;

      if (socket && socket.readyState === 1) {
        socket.close();
      }
    });

    socket.onopen = function (e) {
      var _socket = _this._socket;

      if (!_socket) {
        socket.close();

        _this._resetState();

        return;
      }

      var openObserver = _this._config.openObserver;

      if (openObserver) {
        openObserver.next(e);
      }

      var queue = _this.destination;
      _this.destination = _Subscriber.Subscriber.create(function (x) {
        if (socket.readyState === 1) {
          try {
            var serializer = _this._config.serializer;
            socket.send(serializer(x));
          } catch (e) {
            _this.destination.error(e);
          }
        }
      }, function (e) {
        var closingObserver = _this._config.closingObserver;

        if (closingObserver) {
          closingObserver.next(undefined);
        }

        if (e && e.code) {
          socket.close(e.code, e.reason);
        } else {
          observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
        }

        _this._resetState();
      }, function () {
        var closingObserver = _this._config.closingObserver;

        if (closingObserver) {
          closingObserver.next(undefined);
        }

        socket.close();

        _this._resetState();
      });

      if (queue && queue instanceof _ReplaySubject.ReplaySubject) {
        subscription.add(queue.subscribe(_this.destination));
      }
    };

    socket.onerror = function (e) {
      _this._resetState();

      observer.error(e);
    };

    socket.onclose = function (e) {
      _this._resetState();

      var closeObserver = _this._config.closeObserver;

      if (closeObserver) {
        closeObserver.next(e);
      }

      if (e.wasClean) {
        observer.complete();
      } else {
        observer.error(e);
      }
    };

    socket.onmessage = function (e) {
      try {
        var deserializer = _this._config.deserializer;
        observer.next(deserializer(e));
      } catch (err) {
        observer.error(err);
      }
    };
  };

  WebSocketSubject.prototype._subscribe = function (subscriber) {
    var _this = this;

    var source = this.source;

    if (source) {
      return source.subscribe(subscriber);
    }

    if (!this._socket) {
      this._connectSocket();
    }

    this._output.subscribe(subscriber);

    subscriber.add(function () {
      var _socket = _this._socket;

      if (_this._output.observers.length === 0) {
        if (_socket && _socket.readyState === 1) {
          _socket.close();
        }

        _this._resetState();
      }
    });
    return subscriber;
  };

  WebSocketSubject.prototype.unsubscribe = function () {
    var _socket = this._socket;

    if (_socket && _socket.readyState === 1) {
      _socket.close();
    }

    this._resetState();

    _super.prototype.unsubscribe.call(this);
  };

  return WebSocketSubject;
}(_Subject.AnonymousSubject);

exports.WebSocketSubject = WebSocketSubject;
},{"tslib":"node_modules/tslib/tslib.es6.js","../../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../../ReplaySubject":"node_modules/rxjs/_esm5/internal/ReplaySubject.js"}],"node_modules/rxjs/_esm5/internal/observable/dom/webSocket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webSocket = webSocket;

var _WebSocketSubject = require("./WebSocketSubject");

/** PURE_IMPORTS_START _WebSocketSubject PURE_IMPORTS_END */
function webSocket(urlConfigOrSource) {
  return new _WebSocketSubject.WebSocketSubject(urlConfigOrSource);
}
},{"./WebSocketSubject":"node_modules/rxjs/_esm5/internal/observable/dom/WebSocketSubject.js"}],"node_modules/rxjs/_esm5/internal/observable/SubscribeOnObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscribeOnObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("../Observable");

var _asap = require("../scheduler/asap");

var _isNumeric = require("../util/isNumeric");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */
var SubscribeOnObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubscribeOnObservable, _super);

  function SubscribeOnObservable(source, delayTime, scheduler) {
    if (delayTime === void 0) {
      delayTime = 0;
    }

    if (scheduler === void 0) {
      scheduler = _asap.asap;
    }

    var _this = _super.call(this) || this;

    _this.source = source;
    _this.delayTime = delayTime;
    _this.scheduler = scheduler;

    if (!(0, _isNumeric.isNumeric)(delayTime) || delayTime < 0) {
      _this.delayTime = 0;
    }

    if (!scheduler || typeof scheduler.schedule !== 'function') {
      _this.scheduler = _asap.asap;
    }

    return _this;
  }

  SubscribeOnObservable.create = function (source, delay, scheduler) {
    if (delay === void 0) {
      delay = 0;
    }

    if (scheduler === void 0) {
      scheduler = _asap.asap;
    }

    return new SubscribeOnObservable(source, delay, scheduler);
  };

  SubscribeOnObservable.dispatch = function (arg) {
    var source = arg.source,
        subscriber = arg.subscriber;
    return this.add(source.subscribe(subscriber));
  };

  SubscribeOnObservable.prototype._subscribe = function (subscriber) {
    var delay = this.delayTime;
    var source = this.source;
    var scheduler = this.scheduler;
    return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
      source: source,
      subscriber: subscriber
    });
  };

  return SubscribeOnObservable;
}(_Observable.Observable);

exports.SubscribeOnObservable = SubscribeOnObservable;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/asap":"node_modules/rxjs/_esm5/internal/scheduler/asap.js","../util/isNumeric":"node_modules/rxjs/_esm5/internal/util/isNumeric.js"}],"node_modules/rxjs/_esm5/internal/operators/timestamp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestamp = timestamp;
exports.Timestamp = void 0;

var _async = require("../scheduler/async");

var _map = require("./map");

/** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */
function timestamp(scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return (0, _map.map)(function (value) {
    return new Timestamp(value, scheduler.now());
  });
}

var Timestamp =
/*@__PURE__*/
function () {
  function Timestamp(value, timestamp) {
    this.value = value;
    this.timestamp = timestamp;
  }

  return Timestamp;
}();

exports.Timestamp = Timestamp;
},{"../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","./map":"node_modules/rxjs/_esm5/internal/operators/map.js"}],"node_modules/rxjs/_esm5/internal/operators/scan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scan = scan;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function scan(accumulator, seed) {
  var hasSeed = false;

  if (arguments.length >= 2) {
    hasSeed = true;
  }

  return function scanOperatorFunction(source) {
    return source.lift(new ScanOperator(accumulator, seed, hasSeed));
  };
}

var ScanOperator =
/*@__PURE__*/
function () {
  function ScanOperator(accumulator, seed, hasSeed) {
    if (hasSeed === void 0) {
      hasSeed = false;
    }

    this.accumulator = accumulator;
    this.seed = seed;
    this.hasSeed = hasSeed;
  }

  ScanOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
  };

  return ScanOperator;
}();

var ScanSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ScanSubscriber, _super);

  function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
    var _this = _super.call(this, destination) || this;

    _this.accumulator = accumulator;
    _this._seed = _seed;
    _this.hasSeed = hasSeed;
    _this.index = 0;
    return _this;
  }

  Object.defineProperty(ScanSubscriber.prototype, "seed", {
    get: function () {
      return this._seed;
    },
    set: function (value) {
      this.hasSeed = true;
      this._seed = value;
    },
    enumerable: true,
    configurable: true
  });

  ScanSubscriber.prototype._next = function (value) {
    if (!this.hasSeed) {
      this.seed = value;
      this.destination.next(value);
    } else {
      return this._tryNext(value);
    }
  };

  ScanSubscriber.prototype._tryNext = function (value) {
    var index = this.index++;
    var result;

    try {
      result = this.accumulator(this.seed, value, index);
    } catch (err) {
      this.destination.error(err);
    }

    this.seed = result;
    this.destination.next(result);
  };

  return ScanSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/timeInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeInterval = timeInterval;
exports.TimeInterval = void 0;

var _async = require("../scheduler/async");

var _scan = require("./scan");

var _defer = require("../observable/defer");

var _map = require("./map");

/** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */
function timeInterval(scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    return (0, _defer.defer)(function () {
      return source.pipe((0, _scan.scan)(function (_a, value) {
        var current = _a.current;
        return {
          value: value,
          current: scheduler.now(),
          last: current
        };
      }, {
        current: scheduler.now(),
        value: undefined,
        last: undefined
      }), (0, _map.map)(function (_a) {
        var current = _a.current,
            last = _a.last,
            value = _a.value;
        return new TimeInterval(value, current - last);
      }));
    });
  };
}

var TimeInterval =
/*@__PURE__*/
function () {
  function TimeInterval(value, interval) {
    this.value = value;
    this.interval = interval;
  }

  return TimeInterval;
}();

exports.TimeInterval = TimeInterval;
},{"../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","./scan":"node_modules/rxjs/_esm5/internal/operators/scan.js","../observable/defer":"node_modules/rxjs/_esm5/internal/observable/defer.js","./map":"node_modules/rxjs/_esm5/internal/operators/map.js"}],"node_modules/rxjs/_esm5/internal/operators/throttle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;
exports.defaultThrottleConfig = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
var defaultThrottleConfig = {
  leading: true,
  trailing: false
};
exports.defaultThrottleConfig = defaultThrottleConfig;

function throttle(durationSelector, config) {
  if (config === void 0) {
    config = defaultThrottleConfig;
  }

  return function (source) {
    return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing));
  };
}

var ThrottleOperator =
/*@__PURE__*/
function () {
  function ThrottleOperator(durationSelector, leading, trailing) {
    this.durationSelector = durationSelector;
    this.leading = leading;
    this.trailing = trailing;
  }

  ThrottleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
  };

  return ThrottleOperator;
}();

var ThrottleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ThrottleSubscriber, _super);

  function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.durationSelector = durationSelector;
    _this._leading = _leading;
    _this._trailing = _trailing;
    _this._hasValue = false;
    return _this;
  }

  ThrottleSubscriber.prototype._next = function (value) {
    this._hasValue = true;
    this._sendValue = value;

    if (!this._throttled) {
      if (this._leading) {
        this.send();
      } else {
        this.throttle(value);
      }
    }
  };

  ThrottleSubscriber.prototype.send = function () {
    var _a = this,
        _hasValue = _a._hasValue,
        _sendValue = _a._sendValue;

    if (_hasValue) {
      this.destination.next(_sendValue);
      this.throttle(_sendValue);
    }

    this._hasValue = false;
    this._sendValue = null;
  };

  ThrottleSubscriber.prototype.throttle = function (value) {
    var duration = this.tryDurationSelector(value);

    if (!!duration) {
      this.add(this._throttled = (0, _subscribeToResult.subscribeToResult)(this, duration));
    }
  };

  ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
    try {
      return this.durationSelector(value);
    } catch (err) {
      this.destination.error(err);
      return null;
    }
  };

  ThrottleSubscriber.prototype.throttlingDone = function () {
    var _a = this,
        _throttled = _a._throttled,
        _trailing = _a._trailing;

    if (_throttled) {
      _throttled.unsubscribe();
    }

    this._throttled = null;

    if (_trailing) {
      this.send();
    }
  };

  ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.throttlingDone();
  };

  ThrottleSubscriber.prototype.notifyComplete = function () {
    this.throttlingDone();
  };

  return ThrottleSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/util/applyMixins.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMixins = applyMixins;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function applyMixins(derivedCtor, baseCtors) {
  for (var i = 0, len = baseCtors.length; i < len; i++) {
    var baseCtor = baseCtors[i];
    var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);

    for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
      var name_1 = propertyKeys[j];
      derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
    }
  }
}
},{}],"node_modules/rxjs/_esm5/internal/util/errorObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorObject = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var errorObject = {
  e: {}
};
exports.errorObject = errorObject;
},{}],"node_modules/rxjs/_esm5/internal/util/isDate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = isDate;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}
},{}],"node_modules/rxjs/_esm5/internal/util/tryCatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryCatch = tryCatch;

var _errorObject = require("./errorObject");

/** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */
var tryCatchTarget;

function tryCatcher() {
  _errorObject.errorObject.e = undefined;

  try {
    return tryCatchTarget.apply(this, arguments);
  } catch (e) {
    _errorObject.errorObject.e = e;
    return _errorObject.errorObject;
  } finally {
    tryCatchTarget = undefined;
  }
}

function tryCatch(fn) {
  tryCatchTarget = fn;
  return tryCatcher;
}
},{"./errorObject":"node_modules/rxjs/_esm5/internal/util/errorObject.js"}],"node_modules/rxjs/_esm5/internal-compatibility/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});
Object.defineProperty(exports, "InnerSubscriber", {
  enumerable: true,
  get: function () {
    return _InnerSubscriber.InnerSubscriber;
  }
});
Object.defineProperty(exports, "OuterSubscriber", {
  enumerable: true,
  get: function () {
    return _OuterSubscriber.OuterSubscriber;
  }
});
Object.defineProperty(exports, "Scheduler", {
  enumerable: true,
  get: function () {
    return _Scheduler.Scheduler;
  }
});
Object.defineProperty(exports, "AnonymousSubject", {
  enumerable: true,
  get: function () {
    return _Subject.AnonymousSubject;
  }
});
Object.defineProperty(exports, "SubjectSubscription", {
  enumerable: true,
  get: function () {
    return _SubjectSubscription.SubjectSubscription;
  }
});
Object.defineProperty(exports, "Subscriber", {
  enumerable: true,
  get: function () {
    return _Subscriber.Subscriber;
  }
});
Object.defineProperty(exports, "fromPromise", {
  enumerable: true,
  get: function () {
    return _fromPromise.fromPromise;
  }
});
Object.defineProperty(exports, "fromIterable", {
  enumerable: true,
  get: function () {
    return _fromIterable.fromIterable;
  }
});
Object.defineProperty(exports, "ajax", {
  enumerable: true,
  get: function () {
    return _ajax.ajax;
  }
});
Object.defineProperty(exports, "webSocket", {
  enumerable: true,
  get: function () {
    return _webSocket.webSocket;
  }
});
Object.defineProperty(exports, "ajaxGet", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.ajaxGet;
  }
});
Object.defineProperty(exports, "ajaxPost", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.ajaxPost;
  }
});
Object.defineProperty(exports, "ajaxDelete", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.ajaxDelete;
  }
});
Object.defineProperty(exports, "ajaxPut", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.ajaxPut;
  }
});
Object.defineProperty(exports, "ajaxPatch", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.ajaxPatch;
  }
});
Object.defineProperty(exports, "ajaxGetJSON", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.ajaxGetJSON;
  }
});
Object.defineProperty(exports, "AjaxObservable", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.AjaxObservable;
  }
});
Object.defineProperty(exports, "AjaxSubscriber", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.AjaxSubscriber;
  }
});
Object.defineProperty(exports, "AjaxResponse", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.AjaxResponse;
  }
});
Object.defineProperty(exports, "AjaxError", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.AjaxError;
  }
});
Object.defineProperty(exports, "AjaxTimeoutError", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.AjaxTimeoutError;
  }
});
Object.defineProperty(exports, "WebSocketSubject", {
  enumerable: true,
  get: function () {
    return _WebSocketSubject.WebSocketSubject;
  }
});
Object.defineProperty(exports, "CombineLatestOperator", {
  enumerable: true,
  get: function () {
    return _combineLatest.CombineLatestOperator;
  }
});
Object.defineProperty(exports, "dispatch", {
  enumerable: true,
  get: function () {
    return _range.dispatch;
  }
});
Object.defineProperty(exports, "SubscribeOnObservable", {
  enumerable: true,
  get: function () {
    return _SubscribeOnObservable.SubscribeOnObservable;
  }
});
Object.defineProperty(exports, "Timestamp", {
  enumerable: true,
  get: function () {
    return _timestamp.Timestamp;
  }
});
Object.defineProperty(exports, "TimeInterval", {
  enumerable: true,
  get: function () {
    return _timeInterval.TimeInterval;
  }
});
Object.defineProperty(exports, "GroupedObservable", {
  enumerable: true,
  get: function () {
    return _groupBy.GroupedObservable;
  }
});
Object.defineProperty(exports, "defaultThrottleConfig", {
  enumerable: true,
  get: function () {
    return _throttle.defaultThrottleConfig;
  }
});
Object.defineProperty(exports, "rxSubscriber", {
  enumerable: true,
  get: function () {
    return _rxSubscriber.rxSubscriber;
  }
});
Object.defineProperty(exports, "iterator", {
  enumerable: true,
  get: function () {
    return _iterator.iterator;
  }
});
Object.defineProperty(exports, "observable", {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});
Object.defineProperty(exports, "ArgumentOutOfRangeError", {
  enumerable: true,
  get: function () {
    return _ArgumentOutOfRangeError.ArgumentOutOfRangeError;
  }
});
Object.defineProperty(exports, "EmptyError", {
  enumerable: true,
  get: function () {
    return _EmptyError.EmptyError;
  }
});
Object.defineProperty(exports, "Immediate", {
  enumerable: true,
  get: function () {
    return _Immediate.Immediate;
  }
});
Object.defineProperty(exports, "ObjectUnsubscribedError", {
  enumerable: true,
  get: function () {
    return _ObjectUnsubscribedError.ObjectUnsubscribedError;
  }
});
Object.defineProperty(exports, "TimeoutError", {
  enumerable: true,
  get: function () {
    return _TimeoutError.TimeoutError;
  }
});
Object.defineProperty(exports, "UnsubscriptionError", {
  enumerable: true,
  get: function () {
    return _UnsubscriptionError.UnsubscriptionError;
  }
});
Object.defineProperty(exports, "applyMixins", {
  enumerable: true,
  get: function () {
    return _applyMixins.applyMixins;
  }
});
Object.defineProperty(exports, "errorObject", {
  enumerable: true,
  get: function () {
    return _errorObject.errorObject;
  }
});
Object.defineProperty(exports, "hostReportError", {
  enumerable: true,
  get: function () {
    return _hostReportError.hostReportError;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function () {
    return _identity.identity;
  }
});
Object.defineProperty(exports, "isArray", {
  enumerable: true,
  get: function () {
    return _isArray.isArray;
  }
});
Object.defineProperty(exports, "isArrayLike", {
  enumerable: true,
  get: function () {
    return _isArrayLike.isArrayLike;
  }
});
Object.defineProperty(exports, "isDate", {
  enumerable: true,
  get: function () {
    return _isDate.isDate;
  }
});
Object.defineProperty(exports, "isFunction", {
  enumerable: true,
  get: function () {
    return _isFunction.isFunction;
  }
});
Object.defineProperty(exports, "isIterable", {
  enumerable: true,
  get: function () {
    return _isIterable.isIterable;
  }
});
Object.defineProperty(exports, "isNumeric", {
  enumerable: true,
  get: function () {
    return _isNumeric.isNumeric;
  }
});
Object.defineProperty(exports, "isObject", {
  enumerable: true,
  get: function () {
    return _isObject.isObject;
  }
});
Object.defineProperty(exports, "isObservable", {
  enumerable: true,
  get: function () {
    return _isInteropObservable.isInteropObservable;
  }
});
Object.defineProperty(exports, "isPromise", {
  enumerable: true,
  get: function () {
    return _isPromise.isPromise;
  }
});
Object.defineProperty(exports, "isScheduler", {
  enumerable: true,
  get: function () {
    return _isScheduler.isScheduler;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function () {
    return _noop.noop;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function () {
    return _not.not;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
Object.defineProperty(exports, "root", {
  enumerable: true,
  get: function () {
    return _root.root;
  }
});
Object.defineProperty(exports, "subscribeTo", {
  enumerable: true,
  get: function () {
    return _subscribeTo.subscribeTo;
  }
});
Object.defineProperty(exports, "subscribeToArray", {
  enumerable: true,
  get: function () {
    return _subscribeToArray.subscribeToArray;
  }
});
Object.defineProperty(exports, "subscribeToIterable", {
  enumerable: true,
  get: function () {
    return _subscribeToIterable.subscribeToIterable;
  }
});
Object.defineProperty(exports, "subscribeToObservable", {
  enumerable: true,
  get: function () {
    return _subscribeToObservable.subscribeToObservable;
  }
});
Object.defineProperty(exports, "subscribeToPromise", {
  enumerable: true,
  get: function () {
    return _subscribeToPromise.subscribeToPromise;
  }
});
Object.defineProperty(exports, "subscribeToResult", {
  enumerable: true,
  get: function () {
    return _subscribeToResult.subscribeToResult;
  }
});
Object.defineProperty(exports, "toSubscriber", {
  enumerable: true,
  get: function () {
    return _toSubscriber.toSubscriber;
  }
});
Object.defineProperty(exports, "tryCatch", {
  enumerable: true,
  get: function () {
    return _tryCatch.tryCatch;
  }
});

var _config = require("../internal/config");

var _InnerSubscriber = require("../internal/InnerSubscriber");

var _OuterSubscriber = require("../internal/OuterSubscriber");

var _Scheduler = require("../internal/Scheduler");

var _Subject = require("../internal/Subject");

var _SubjectSubscription = require("../internal/SubjectSubscription");

var _Subscriber = require("../internal/Subscriber");

var _fromPromise = require("../internal/observable/fromPromise");

var _fromIterable = require("../internal/observable/fromIterable");

var _ajax = require("../internal/observable/dom/ajax");

var _webSocket = require("../internal/observable/dom/webSocket");

var _AjaxObservable = require("../internal/observable/dom/AjaxObservable");

var _WebSocketSubject = require("../internal/observable/dom/WebSocketSubject");

var _combineLatest = require("../internal/observable/combineLatest");

var _range = require("../internal/observable/range");

var _SubscribeOnObservable = require("../internal/observable/SubscribeOnObservable");

var _timestamp = require("../internal/operators/timestamp");

var _timeInterval = require("../internal/operators/timeInterval");

var _groupBy = require("../internal/operators/groupBy");

var _throttle = require("../internal/operators/throttle");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

var _iterator = require("../internal/symbol/iterator");

var _observable = require("../internal/symbol/observable");

var _ArgumentOutOfRangeError = require("../internal/util/ArgumentOutOfRangeError");

var _EmptyError = require("../internal/util/EmptyError");

var _Immediate = require("../internal/util/Immediate");

var _ObjectUnsubscribedError = require("../internal/util/ObjectUnsubscribedError");

var _TimeoutError = require("../internal/util/TimeoutError");

var _UnsubscriptionError = require("../internal/util/UnsubscriptionError");

var _applyMixins = require("../internal/util/applyMixins");

var _errorObject = require("../internal/util/errorObject");

var _hostReportError = require("../internal/util/hostReportError");

var _identity = require("../internal/util/identity");

var _isArray = require("../internal/util/isArray");

var _isArrayLike = require("../internal/util/isArrayLike");

var _isDate = require("../internal/util/isDate");

var _isFunction = require("../internal/util/isFunction");

var _isIterable = require("../internal/util/isIterable");

var _isNumeric = require("../internal/util/isNumeric");

var _isObject = require("../internal/util/isObject");

var _isInteropObservable = require("../internal/util/isInteropObservable");

var _isPromise = require("../internal/util/isPromise");

var _isScheduler = require("../internal/util/isScheduler");

var _noop = require("../internal/util/noop");

var _not = require("../internal/util/not");

var _pipe = require("../internal/util/pipe");

var _root = require("../internal/util/root");

var _subscribeTo = require("../internal/util/subscribeTo");

var _subscribeToArray = require("../internal/util/subscribeToArray");

var _subscribeToIterable = require("../internal/util/subscribeToIterable");

var _subscribeToObservable = require("../internal/util/subscribeToObservable");

var _subscribeToPromise = require("../internal/util/subscribeToPromise");

var _subscribeToResult = require("../internal/util/subscribeToResult");

var _toSubscriber = require("../internal/util/toSubscriber");

var _tryCatch = require("../internal/util/tryCatch");
},{"../internal/config":"node_modules/rxjs/_esm5/internal/config.js","../internal/InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../internal/OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../internal/Scheduler":"node_modules/rxjs/_esm5/internal/Scheduler.js","../internal/Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../internal/SubjectSubscription":"node_modules/rxjs/_esm5/internal/SubjectSubscription.js","../internal/Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../internal/observable/fromPromise":"node_modules/rxjs/_esm5/internal/observable/fromPromise.js","../internal/observable/fromIterable":"node_modules/rxjs/_esm5/internal/observable/fromIterable.js","../internal/observable/dom/ajax":"node_modules/rxjs/_esm5/internal/observable/dom/ajax.js","../internal/observable/dom/webSocket":"node_modules/rxjs/_esm5/internal/observable/dom/webSocket.js","../internal/observable/dom/AjaxObservable":"node_modules/rxjs/_esm5/internal/observable/dom/AjaxObservable.js","../internal/observable/dom/WebSocketSubject":"node_modules/rxjs/_esm5/internal/observable/dom/WebSocketSubject.js","../internal/observable/combineLatest":"node_modules/rxjs/_esm5/internal/observable/combineLatest.js","../internal/observable/range":"node_modules/rxjs/_esm5/internal/observable/range.js","../internal/observable/SubscribeOnObservable":"node_modules/rxjs/_esm5/internal/observable/SubscribeOnObservable.js","../internal/operators/timestamp":"node_modules/rxjs/_esm5/internal/operators/timestamp.js","../internal/operators/timeInterval":"node_modules/rxjs/_esm5/internal/operators/timeInterval.js","../internal/operators/groupBy":"node_modules/rxjs/_esm5/internal/operators/groupBy.js","../internal/operators/throttle":"node_modules/rxjs/_esm5/internal/operators/throttle.js","../internal/symbol/rxSubscriber":"node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","../internal/symbol/iterator":"node_modules/rxjs/_esm5/internal/symbol/iterator.js","../internal/symbol/observable":"node_modules/rxjs/_esm5/internal/symbol/observable.js","../internal/util/ArgumentOutOfRangeError":"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","../internal/util/EmptyError":"node_modules/rxjs/_esm5/internal/util/EmptyError.js","../internal/util/Immediate":"node_modules/rxjs/_esm5/internal/util/Immediate.js","../internal/util/ObjectUnsubscribedError":"node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","../internal/util/TimeoutError":"node_modules/rxjs/_esm5/internal/util/TimeoutError.js","../internal/util/UnsubscriptionError":"node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js","../internal/util/applyMixins":"node_modules/rxjs/_esm5/internal/util/applyMixins.js","../internal/util/errorObject":"node_modules/rxjs/_esm5/internal/util/errorObject.js","../internal/util/hostReportError":"node_modules/rxjs/_esm5/internal/util/hostReportError.js","../internal/util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js","../internal/util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../internal/util/isArrayLike":"node_modules/rxjs/_esm5/internal/util/isArrayLike.js","../internal/util/isDate":"node_modules/rxjs/_esm5/internal/util/isDate.js","../internal/util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js","../internal/util/isIterable":"node_modules/rxjs/_esm5/internal/util/isIterable.js","../internal/util/isNumeric":"node_modules/rxjs/_esm5/internal/util/isNumeric.js","../internal/util/isObject":"node_modules/rxjs/_esm5/internal/util/isObject.js","../internal/util/isInteropObservable":"node_modules/rxjs/_esm5/internal/util/isInteropObservable.js","../internal/util/isPromise":"node_modules/rxjs/_esm5/internal/util/isPromise.js","../internal/util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js","../internal/util/noop":"node_modules/rxjs/_esm5/internal/util/noop.js","../internal/util/not":"node_modules/rxjs/_esm5/internal/util/not.js","../internal/util/pipe":"node_modules/rxjs/_esm5/internal/util/pipe.js","../internal/util/root":"node_modules/rxjs/_esm5/internal/util/root.js","../internal/util/subscribeTo":"node_modules/rxjs/_esm5/internal/util/subscribeTo.js","../internal/util/subscribeToArray":"node_modules/rxjs/_esm5/internal/util/subscribeToArray.js","../internal/util/subscribeToIterable":"node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js","../internal/util/subscribeToObservable":"node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js","../internal/util/subscribeToPromise":"node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js","../internal/util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../internal/util/toSubscriber":"node_modules/rxjs/_esm5/internal/util/toSubscriber.js","../internal/util/tryCatch":"node_modules/rxjs/_esm5/internal/util/tryCatch.js"}],"node_modules/rxjs-compat/add/observable/bindCallback.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.bindCallback = rxjs_1.bindCallback;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/bindNodeCallback.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.bindNodeCallback = rxjs_1.bindNodeCallback;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/combineLatest.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.combineLatest = rxjs_1.combineLatest;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/concat.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.concat = rxjs_1.concat;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/defer.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.defer = rxjs_1.defer;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/empty.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.empty = rxjs_1.empty;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/forkJoin.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.forkJoin = rxjs_1.forkJoin;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/from.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.from = rxjs_1.from;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/fromEvent.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.fromEvent = rxjs_1.fromEvent;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/fromEventPattern.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.fromEventPattern = rxjs_1.fromEventPattern;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/fromPromise.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.fromPromise = rxjs_1.from;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/generate.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.generate = rxjs_1.generate;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/if.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.if = rxjs_1.iif;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/interval.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.interval = rxjs_1.interval;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/merge.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.merge = rxjs_1.merge;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/race.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.race = rxjs_1.race;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/never.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function staticNever() {
    return rxjs_1.NEVER;
}
exports.staticNever = staticNever;
rxjs_1.Observable.never = staticNever;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/of.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.of = rxjs_1.of;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.onErrorResumeNext = rxjs_1.onErrorResumeNext;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/pairs.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.pairs = rxjs_1.pairs;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/range.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.range = rxjs_1.range;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/using.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.using = rxjs_1.using;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/throw.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.throw = rxjs_1.throwError;
rxjs_1.Observable.throwError = rxjs_1.throwError;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/timer.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.timer = rxjs_1.timer;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/observable/zip.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
rxjs_1.Observable.zip = rxjs_1.zip;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs/_esm5/ajax/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ajax", {
  enumerable: true,
  get: function () {
    return _ajax.ajax;
  }
});
Object.defineProperty(exports, "AjaxResponse", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.AjaxResponse;
  }
});
Object.defineProperty(exports, "AjaxError", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.AjaxError;
  }
});
Object.defineProperty(exports, "AjaxTimeoutError", {
  enumerable: true,
  get: function () {
    return _AjaxObservable.AjaxTimeoutError;
  }
});

var _ajax = require("../internal/observable/dom/ajax");

var _AjaxObservable = require("../internal/observable/dom/AjaxObservable");
},{"../internal/observable/dom/ajax":"node_modules/rxjs/_esm5/internal/observable/dom/ajax.js","../internal/observable/dom/AjaxObservable":"node_modules/rxjs/_esm5/internal/observable/dom/AjaxObservable.js"}],"node_modules/rxjs-compat/add/observable/dom/ajax.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var ajax_1 = require("rxjs/ajax");
rxjs_1.Observable.ajax = ajax_1.ajax;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/ajax":"node_modules/rxjs/_esm5/ajax/index.js"}],"node_modules/rxjs/_esm5/webSocket/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "webSocket", {
  enumerable: true,
  get: function () {
    return _webSocket.webSocket;
  }
});
Object.defineProperty(exports, "WebSocketSubject", {
  enumerable: true,
  get: function () {
    return _WebSocketSubject.WebSocketSubject;
  }
});

var _webSocket = require("../internal/observable/dom/webSocket");

var _WebSocketSubject = require("../internal/observable/dom/WebSocketSubject");
},{"../internal/observable/dom/webSocket":"node_modules/rxjs/_esm5/internal/observable/dom/webSocket.js","../internal/observable/dom/WebSocketSubject":"node_modules/rxjs/_esm5/internal/observable/dom/WebSocketSubject.js"}],"node_modules/rxjs-compat/add/observable/dom/webSocket.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var webSocket_1 = require("rxjs/webSocket");
rxjs_1.Observable.webSocket = webSocket_1.webSocket;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/webSocket":"node_modules/rxjs/_esm5/webSocket/index.js"}],"node_modules/rxjs/_esm5/internal/operators/audit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audit = audit;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function audit(durationSelector) {
  return function auditOperatorFunction(source) {
    return source.lift(new AuditOperator(durationSelector));
  };
}

var AuditOperator =
/*@__PURE__*/
function () {
  function AuditOperator(durationSelector) {
    this.durationSelector = durationSelector;
  }

  AuditOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
  };

  return AuditOperator;
}();

var AuditSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AuditSubscriber, _super);

  function AuditSubscriber(destination, durationSelector) {
    var _this = _super.call(this, destination) || this;

    _this.durationSelector = durationSelector;
    _this.hasValue = false;
    return _this;
  }

  AuditSubscriber.prototype._next = function (value) {
    this.value = value;
    this.hasValue = true;

    if (!this.throttled) {
      var duration = void 0;

      try {
        var durationSelector = this.durationSelector;
        duration = durationSelector(value);
      } catch (err) {
        return this.destination.error(err);
      }

      var innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, duration);

      if (!innerSubscription || innerSubscription.closed) {
        this.clearThrottle();
      } else {
        this.add(this.throttled = innerSubscription);
      }
    }
  };

  AuditSubscriber.prototype.clearThrottle = function () {
    var _a = this,
        value = _a.value,
        hasValue = _a.hasValue,
        throttled = _a.throttled;

    if (throttled) {
      this.remove(throttled);
      this.throttled = null;
      throttled.unsubscribe();
    }

    if (hasValue) {
      this.value = null;
      this.hasValue = false;
      this.destination.next(value);
    }
  };

  AuditSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
    this.clearThrottle();
  };

  AuditSubscriber.prototype.notifyComplete = function () {
    this.clearThrottle();
  };

  return AuditSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/auditTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auditTime = auditTime;

var _async = require("../scheduler/async");

var _audit = require("./audit");

var _timer = require("../observable/timer");

/** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */
function auditTime(duration, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return (0, _audit.audit)(function () {
    return (0, _timer.timer)(duration, scheduler);
  });
}
},{"../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","./audit":"node_modules/rxjs/_esm5/internal/operators/audit.js","../observable/timer":"node_modules/rxjs/_esm5/internal/observable/timer.js"}],"node_modules/rxjs/_esm5/internal/operators/buffer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffer = buffer;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function buffer(closingNotifier) {
  return function bufferOperatorFunction(source) {
    return source.lift(new BufferOperator(closingNotifier));
  };
}

var BufferOperator =
/*@__PURE__*/
function () {
  function BufferOperator(closingNotifier) {
    this.closingNotifier = closingNotifier;
  }

  BufferOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
  };

  return BufferOperator;
}();

var BufferSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferSubscriber, _super);

  function BufferSubscriber(destination, closingNotifier) {
    var _this = _super.call(this, destination) || this;

    _this.buffer = [];

    _this.add((0, _subscribeToResult.subscribeToResult)(_this, closingNotifier));

    return _this;
  }

  BufferSubscriber.prototype._next = function (value) {
    this.buffer.push(value);
  };

  BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var buffer = this.buffer;
    this.buffer = [];
    this.destination.next(buffer);
  };

  return BufferSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/bufferCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferCount = bufferCount;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function bufferCount(bufferSize, startBufferEvery) {
  if (startBufferEvery === void 0) {
    startBufferEvery = null;
  }

  return function bufferCountOperatorFunction(source) {
    return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
  };
}

var BufferCountOperator =
/*@__PURE__*/
function () {
  function BufferCountOperator(bufferSize, startBufferEvery) {
    this.bufferSize = bufferSize;
    this.startBufferEvery = startBufferEvery;

    if (!startBufferEvery || bufferSize === startBufferEvery) {
      this.subscriberClass = BufferCountSubscriber;
    } else {
      this.subscriberClass = BufferSkipCountSubscriber;
    }
  }

  BufferCountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
  };

  return BufferCountOperator;
}();

var BufferCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferCountSubscriber, _super);

  function BufferCountSubscriber(destination, bufferSize) {
    var _this = _super.call(this, destination) || this;

    _this.bufferSize = bufferSize;
    _this.buffer = [];
    return _this;
  }

  BufferCountSubscriber.prototype._next = function (value) {
    var buffer = this.buffer;
    buffer.push(value);

    if (buffer.length == this.bufferSize) {
      this.destination.next(buffer);
      this.buffer = [];
    }
  };

  BufferCountSubscriber.prototype._complete = function () {
    var buffer = this.buffer;

    if (buffer.length > 0) {
      this.destination.next(buffer);
    }

    _super.prototype._complete.call(this);
  };

  return BufferCountSubscriber;
}(_Subscriber.Subscriber);

var BufferSkipCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferSkipCountSubscriber, _super);

  function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
    var _this = _super.call(this, destination) || this;

    _this.bufferSize = bufferSize;
    _this.startBufferEvery = startBufferEvery;
    _this.buffers = [];
    _this.count = 0;
    return _this;
  }

  BufferSkipCountSubscriber.prototype._next = function (value) {
    var _a = this,
        bufferSize = _a.bufferSize,
        startBufferEvery = _a.startBufferEvery,
        buffers = _a.buffers,
        count = _a.count;

    this.count++;

    if (count % startBufferEvery === 0) {
      buffers.push([]);
    }

    for (var i = buffers.length; i--;) {
      var buffer = buffers[i];
      buffer.push(value);

      if (buffer.length === bufferSize) {
        buffers.splice(i, 1);
        this.destination.next(buffer);
      }
    }
  };

  BufferSkipCountSubscriber.prototype._complete = function () {
    var _a = this,
        buffers = _a.buffers,
        destination = _a.destination;

    while (buffers.length > 0) {
      var buffer = buffers.shift();

      if (buffer.length > 0) {
        destination.next(buffer);
      }
    }

    _super.prototype._complete.call(this);
  };

  return BufferSkipCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/bufferTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferTime = bufferTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _async = require("../scheduler/async");

var _Subscriber = require("../Subscriber");

var _isScheduler = require("../util/isScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */
function bufferTime(bufferTimeSpan) {
  var length = arguments.length;
  var scheduler = _async.async;

  if ((0, _isScheduler.isScheduler)(arguments[arguments.length - 1])) {
    scheduler = arguments[arguments.length - 1];
    length--;
  }

  var bufferCreationInterval = null;

  if (length >= 2) {
    bufferCreationInterval = arguments[1];
  }

  var maxBufferSize = Number.POSITIVE_INFINITY;

  if (length >= 3) {
    maxBufferSize = arguments[2];
  }

  return function bufferTimeOperatorFunction(source) {
    return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
  };
}

var BufferTimeOperator =
/*@__PURE__*/
function () {
  function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
    this.bufferTimeSpan = bufferTimeSpan;
    this.bufferCreationInterval = bufferCreationInterval;
    this.maxBufferSize = maxBufferSize;
    this.scheduler = scheduler;
  }

  BufferTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
  };

  return BufferTimeOperator;
}();

var Context =
/*@__PURE__*/
function () {
  function Context() {
    this.buffer = [];
  }

  return Context;
}();

var BufferTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferTimeSubscriber, _super);

  function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.bufferTimeSpan = bufferTimeSpan;
    _this.bufferCreationInterval = bufferCreationInterval;
    _this.maxBufferSize = maxBufferSize;
    _this.scheduler = scheduler;
    _this.contexts = [];

    var context = _this.openContext();

    _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;

    if (_this.timespanOnly) {
      var timeSpanOnlyState = {
        subscriber: _this,
        context: context,
        bufferTimeSpan: bufferTimeSpan
      };

      _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
    } else {
      var closeState = {
        subscriber: _this,
        context: context
      };
      var creationState = {
        bufferTimeSpan: bufferTimeSpan,
        bufferCreationInterval: bufferCreationInterval,
        subscriber: _this,
        scheduler: scheduler
      };

      _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));

      _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
    }

    return _this;
  }

  BufferTimeSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;
    var len = contexts.length;
    var filledBufferContext;

    for (var i = 0; i < len; i++) {
      var context_1 = contexts[i];
      var buffer = context_1.buffer;
      buffer.push(value);

      if (buffer.length == this.maxBufferSize) {
        filledBufferContext = context_1;
      }
    }

    if (filledBufferContext) {
      this.onBufferFull(filledBufferContext);
    }
  };

  BufferTimeSubscriber.prototype._error = function (err) {
    this.contexts.length = 0;

    _super.prototype._error.call(this, err);
  };

  BufferTimeSubscriber.prototype._complete = function () {
    var _a = this,
        contexts = _a.contexts,
        destination = _a.destination;

    while (contexts.length > 0) {
      var context_2 = contexts.shift();
      destination.next(context_2.buffer);
    }

    _super.prototype._complete.call(this);
  };

  BufferTimeSubscriber.prototype._unsubscribe = function () {
    this.contexts = null;
  };

  BufferTimeSubscriber.prototype.onBufferFull = function (context) {
    this.closeContext(context);
    var closeAction = context.closeAction;
    closeAction.unsubscribe();
    this.remove(closeAction);

    if (!this.closed && this.timespanOnly) {
      context = this.openContext();
      var bufferTimeSpan = this.bufferTimeSpan;
      var timeSpanOnlyState = {
        subscriber: this,
        context: context,
        bufferTimeSpan: bufferTimeSpan
      };
      this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
    }
  };

  BufferTimeSubscriber.prototype.openContext = function () {
    var context = new Context();
    this.contexts.push(context);
    return context;
  };

  BufferTimeSubscriber.prototype.closeContext = function (context) {
    this.destination.next(context.buffer);
    var contexts = this.contexts;
    var spliceIndex = contexts ? contexts.indexOf(context) : -1;

    if (spliceIndex >= 0) {
      contexts.splice(contexts.indexOf(context), 1);
    }
  };

  return BufferTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchBufferTimeSpanOnly(state) {
  var subscriber = state.subscriber;
  var prevContext = state.context;

  if (prevContext) {
    subscriber.closeContext(prevContext);
  }

  if (!subscriber.closed) {
    state.context = subscriber.openContext();
    state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
  }
}

function dispatchBufferCreation(state) {
  var bufferCreationInterval = state.bufferCreationInterval,
      bufferTimeSpan = state.bufferTimeSpan,
      subscriber = state.subscriber,
      scheduler = state.scheduler;
  var context = subscriber.openContext();
  var action = this;

  if (!subscriber.closed) {
    subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
      subscriber: subscriber,
      context: context
    }));
    action.schedule(state, bufferCreationInterval);
  }
}

function dispatchBufferClose(arg) {
  var subscriber = arg.subscriber,
      context = arg.context;
  subscriber.closeContext(context);
}
},{"tslib":"node_modules/tslib/tslib.es6.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/operators/bufferToggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferToggle = bufferToggle;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("../Subscription");

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */
function bufferToggle(openings, closingSelector) {
  return function bufferToggleOperatorFunction(source) {
    return source.lift(new BufferToggleOperator(openings, closingSelector));
  };
}

var BufferToggleOperator =
/*@__PURE__*/
function () {
  function BufferToggleOperator(openings, closingSelector) {
    this.openings = openings;
    this.closingSelector = closingSelector;
  }

  BufferToggleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
  };

  return BufferToggleOperator;
}();

var BufferToggleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferToggleSubscriber, _super);

  function BufferToggleSubscriber(destination, openings, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.openings = openings;
    _this.closingSelector = closingSelector;
    _this.contexts = [];

    _this.add((0, _subscribeToResult.subscribeToResult)(_this, openings));

    return _this;
  }

  BufferToggleSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;
    var len = contexts.length;

    for (var i = 0; i < len; i++) {
      contexts[i].buffer.push(value);
    }
  };

  BufferToggleSubscriber.prototype._error = function (err) {
    var contexts = this.contexts;

    while (contexts.length > 0) {
      var context_1 = contexts.shift();
      context_1.subscription.unsubscribe();
      context_1.buffer = null;
      context_1.subscription = null;
    }

    this.contexts = null;

    _super.prototype._error.call(this, err);
  };

  BufferToggleSubscriber.prototype._complete = function () {
    var contexts = this.contexts;

    while (contexts.length > 0) {
      var context_2 = contexts.shift();
      this.destination.next(context_2.buffer);
      context_2.subscription.unsubscribe();
      context_2.buffer = null;
      context_2.subscription = null;
    }

    this.contexts = null;

    _super.prototype._complete.call(this);
  };

  BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
  };

  BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
    this.closeBuffer(innerSub.context);
  };

  BufferToggleSubscriber.prototype.openBuffer = function (value) {
    try {
      var closingSelector = this.closingSelector;
      var closingNotifier = closingSelector.call(this, value);

      if (closingNotifier) {
        this.trySubscribe(closingNotifier);
      }
    } catch (err) {
      this._error(err);
    }
  };

  BufferToggleSubscriber.prototype.closeBuffer = function (context) {
    var contexts = this.contexts;

    if (contexts && context) {
      var buffer = context.buffer,
          subscription = context.subscription;
      this.destination.next(buffer);
      contexts.splice(contexts.indexOf(context), 1);
      this.remove(subscription);
      subscription.unsubscribe();
    }
  };

  BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
    var contexts = this.contexts;
    var buffer = [];
    var subscription = new _Subscription.Subscription();
    var context = {
      buffer: buffer,
      subscription: subscription
    };
    contexts.push(context);
    var innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier, context);

    if (!innerSubscription || innerSubscription.closed) {
      this.closeBuffer(context);
    } else {
      innerSubscription.context = context;
      this.add(innerSubscription);
      subscription.add(innerSubscription);
    }
  };

  return BufferToggleSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/bufferWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferWhen = bufferWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("../Subscription");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function bufferWhen(closingSelector) {
  return function (source) {
    return source.lift(new BufferWhenOperator(closingSelector));
  };
}

var BufferWhenOperator =
/*@__PURE__*/
function () {
  function BufferWhenOperator(closingSelector) {
    this.closingSelector = closingSelector;
  }

  BufferWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
  };

  return BufferWhenOperator;
}();

var BufferWhenSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BufferWhenSubscriber, _super);

  function BufferWhenSubscriber(destination, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.closingSelector = closingSelector;
    _this.subscribing = false;

    _this.openBuffer();

    return _this;
  }

  BufferWhenSubscriber.prototype._next = function (value) {
    this.buffer.push(value);
  };

  BufferWhenSubscriber.prototype._complete = function () {
    var buffer = this.buffer;

    if (buffer) {
      this.destination.next(buffer);
    }

    _super.prototype._complete.call(this);
  };

  BufferWhenSubscriber.prototype._unsubscribe = function () {
    this.buffer = null;
    this.subscribing = false;
  };

  BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openBuffer();
  };

  BufferWhenSubscriber.prototype.notifyComplete = function () {
    if (this.subscribing) {
      this.complete();
    } else {
      this.openBuffer();
    }
  };

  BufferWhenSubscriber.prototype.openBuffer = function () {
    var closingSubscription = this.closingSubscription;

    if (closingSubscription) {
      this.remove(closingSubscription);
      closingSubscription.unsubscribe();
    }

    var buffer = this.buffer;

    if (this.buffer) {
      this.destination.next(buffer);
    }

    this.buffer = [];
    var closingNotifier;

    try {
      var closingSelector = this.closingSelector;
      closingNotifier = closingSelector();
    } catch (err) {
      return this.error(err);
    }

    closingSubscription = new _Subscription.Subscription();
    this.closingSubscription = closingSubscription;
    this.add(closingSubscription);
    this.subscribing = true;
    closingSubscription.add((0, _subscribeToResult.subscribeToResult)(this, closingNotifier));
    this.subscribing = false;
  };

  return BufferWhenSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/catchError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catchError = catchError;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function catchError(selector) {
  return function catchErrorOperatorFunction(source) {
    var operator = new CatchOperator(selector);
    var caught = source.lift(operator);
    return operator.caught = caught;
  };
}

var CatchOperator =
/*@__PURE__*/
function () {
  function CatchOperator(selector) {
    this.selector = selector;
  }

  CatchOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
  };

  return CatchOperator;
}();

var CatchSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CatchSubscriber, _super);

  function CatchSubscriber(destination, selector, caught) {
    var _this = _super.call(this, destination) || this;

    _this.selector = selector;
    _this.caught = caught;
    return _this;
  }

  CatchSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var result = void 0;

      try {
        result = this.selector(err, this.caught);
      } catch (err2) {
        _super.prototype.error.call(this, err2);

        return;
      }

      this._unsubscribeAndRecycle();

      var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
      this.add(innerSubscriber);
      (0, _subscribeToResult.subscribeToResult)(this, result, undefined, undefined, innerSubscriber);
    }
  };

  return CatchSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/combineAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineAll = combineAll;

var _combineLatest = require("../observable/combineLatest");

/** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */
function combineAll(project) {
  return function (source) {
    return source.lift(new _combineLatest.CombineLatestOperator(project));
  };
}
},{"../observable/combineLatest":"node_modules/rxjs/_esm5/internal/observable/combineLatest.js"}],"node_modules/rxjs/_esm5/internal/operators/combineLatest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = combineLatest;

var _isArray = require("../util/isArray");

var _combineLatest = require("../observable/combineLatest");

var _from = require("../observable/from");

/** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */
var none = {};

function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var project = null;

  if (typeof observables[observables.length - 1] === 'function') {
    project = observables.pop();
  }

  if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
    observables = observables[0].slice();
  }

  return function (source) {
    return source.lift.call((0, _from.from)([source].concat(observables)), new _combineLatest.CombineLatestOperator(project));
  };
}
},{"../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../observable/combineLatest":"node_modules/rxjs/_esm5/internal/observable/combineLatest.js","../observable/from":"node_modules/rxjs/_esm5/internal/observable/from.js"}],"node_modules/rxjs/_esm5/internal/operators/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _concat = require("../observable/concat");

/** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */
function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function (source) {
    return source.lift.call(_concat.concat.apply(void 0, [source].concat(observables)));
  };
}
},{"../observable/concat":"node_modules/rxjs/_esm5/internal/observable/concat.js"}],"node_modules/rxjs/_esm5/internal/operators/concatMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatMap = concatMap;

var _mergeMap = require("./mergeMap");

/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
function concatMap(project, resultSelector) {
  return (0, _mergeMap.mergeMap)(project, resultSelector, 1);
}
},{"./mergeMap":"node_modules/rxjs/_esm5/internal/operators/mergeMap.js"}],"node_modules/rxjs/_esm5/internal/operators/concatMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatMapTo = concatMapTo;

var _concatMap = require("./concatMap");

/** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */
function concatMapTo(innerObservable, resultSelector) {
  return (0, _concatMap.concatMap)(function () {
    return innerObservable;
  }, resultSelector);
}
},{"./concatMap":"node_modules/rxjs/_esm5/internal/operators/concatMap.js"}],"node_modules/rxjs/_esm5/internal/operators/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function count(predicate) {
  return function (source) {
    return source.lift(new CountOperator(predicate, source));
  };
}

var CountOperator =
/*@__PURE__*/
function () {
  function CountOperator(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }

  CountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
  };

  return CountOperator;
}();

var CountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CountSubscriber, _super);

  function CountSubscriber(destination, predicate, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.count = 0;
    _this.index = 0;
    return _this;
  }

  CountSubscriber.prototype._next = function (value) {
    if (this.predicate) {
      this._tryPredicate(value);
    } else {
      this.count++;
    }
  };

  CountSubscriber.prototype._tryPredicate = function (value) {
    var result;

    try {
      result = this.predicate(value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (result) {
      this.count++;
    }
  };

  CountSubscriber.prototype._complete = function () {
    this.destination.next(this.count);
    this.destination.complete();
  };

  return CountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function debounce(durationSelector) {
  return function (source) {
    return source.lift(new DebounceOperator(durationSelector));
  };
}

var DebounceOperator =
/*@__PURE__*/
function () {
  function DebounceOperator(durationSelector) {
    this.durationSelector = durationSelector;
  }

  DebounceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
  };

  return DebounceOperator;
}();

var DebounceSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DebounceSubscriber, _super);

  function DebounceSubscriber(destination, durationSelector) {
    var _this = _super.call(this, destination) || this;

    _this.durationSelector = durationSelector;
    _this.hasValue = false;
    _this.durationSubscription = null;
    return _this;
  }

  DebounceSubscriber.prototype._next = function (value) {
    try {
      var result = this.durationSelector.call(this, value);

      if (result) {
        this._tryNext(value, result);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  DebounceSubscriber.prototype._complete = function () {
    this.emitValue();
    this.destination.complete();
  };

  DebounceSubscriber.prototype._tryNext = function (value, duration) {
    var subscription = this.durationSubscription;
    this.value = value;
    this.hasValue = true;

    if (subscription) {
      subscription.unsubscribe();
      this.remove(subscription);
    }

    subscription = (0, _subscribeToResult.subscribeToResult)(this, duration);

    if (subscription && !subscription.closed) {
      this.add(this.durationSubscription = subscription);
    }
  };

  DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.emitValue();
  };

  DebounceSubscriber.prototype.notifyComplete = function () {
    this.emitValue();
  };

  DebounceSubscriber.prototype.emitValue = function () {
    if (this.hasValue) {
      var value = this.value;
      var subscription = this.durationSubscription;

      if (subscription) {
        this.durationSubscription = null;
        subscription.unsubscribe();
        this.remove(subscription);
      }

      this.value = null;
      this.hasValue = false;

      _super.prototype._next.call(this, value);
    }
  };

  return DebounceSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/debounceTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounceTime = debounceTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _async = require("../scheduler/async");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    return source.lift(new DebounceTimeOperator(dueTime, scheduler));
  };
}

var DebounceTimeOperator =
/*@__PURE__*/
function () {
  function DebounceTimeOperator(dueTime, scheduler) {
    this.dueTime = dueTime;
    this.scheduler = scheduler;
  }

  DebounceTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
  };

  return DebounceTimeOperator;
}();

var DebounceTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DebounceTimeSubscriber, _super);

  function DebounceTimeSubscriber(destination, dueTime, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.dueTime = dueTime;
    _this.scheduler = scheduler;
    _this.debouncedSubscription = null;
    _this.lastValue = null;
    _this.hasValue = false;
    return _this;
  }

  DebounceTimeSubscriber.prototype._next = function (value) {
    this.clearDebounce();
    this.lastValue = value;
    this.hasValue = true;
    this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
  };

  DebounceTimeSubscriber.prototype._complete = function () {
    this.debouncedNext();
    this.destination.complete();
  };

  DebounceTimeSubscriber.prototype.debouncedNext = function () {
    this.clearDebounce();

    if (this.hasValue) {
      var lastValue = this.lastValue;
      this.lastValue = null;
      this.hasValue = false;
      this.destination.next(lastValue);
    }
  };

  DebounceTimeSubscriber.prototype.clearDebounce = function () {
    var debouncedSubscription = this.debouncedSubscription;

    if (debouncedSubscription !== null) {
      this.remove(debouncedSubscription);
      debouncedSubscription.unsubscribe();
      this.debouncedSubscription = null;
    }
  };

  return DebounceTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchNext(subscriber) {
  subscriber.debouncedNext();
}
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js"}],"node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultIfEmpty = defaultIfEmpty;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function defaultIfEmpty(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = null;
  }

  return function (source) {
    return source.lift(new DefaultIfEmptyOperator(defaultValue));
  };
}

var DefaultIfEmptyOperator =
/*@__PURE__*/
function () {
  function DefaultIfEmptyOperator(defaultValue) {
    this.defaultValue = defaultValue;
  }

  DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
  };

  return DefaultIfEmptyOperator;
}();

var DefaultIfEmptySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DefaultIfEmptySubscriber, _super);

  function DefaultIfEmptySubscriber(destination, defaultValue) {
    var _this = _super.call(this, destination) || this;

    _this.defaultValue = defaultValue;
    _this.isEmpty = true;
    return _this;
  }

  DefaultIfEmptySubscriber.prototype._next = function (value) {
    this.isEmpty = false;
    this.destination.next(value);
  };

  DefaultIfEmptySubscriber.prototype._complete = function () {
    if (this.isEmpty) {
      this.destination.next(this.defaultValue);
    }

    this.destination.complete();
  };

  return DefaultIfEmptySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/delay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = delay;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _async = require("../scheduler/async");

var _isDate = require("../util/isDate");

var _Subscriber = require("../Subscriber");

var _Notification = require("../Notification");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */
function delay(delay, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  var absoluteDelay = (0, _isDate.isDate)(delay);
  var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
  return function (source) {
    return source.lift(new DelayOperator(delayFor, scheduler));
  };
}

var DelayOperator =
/*@__PURE__*/
function () {
  function DelayOperator(delay, scheduler) {
    this.delay = delay;
    this.scheduler = scheduler;
  }

  DelayOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
  };

  return DelayOperator;
}();

var DelaySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DelaySubscriber, _super);

  function DelaySubscriber(destination, delay, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.delay = delay;
    _this.scheduler = scheduler;
    _this.queue = [];
    _this.active = false;
    _this.errored = false;
    return _this;
  }

  DelaySubscriber.dispatch = function (state) {
    var source = state.source;
    var queue = source.queue;
    var scheduler = state.scheduler;
    var destination = state.destination;

    while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
      queue.shift().notification.observe(destination);
    }

    if (queue.length > 0) {
      var delay_1 = Math.max(0, queue[0].time - scheduler.now());
      this.schedule(state, delay_1);
    } else {
      this.unsubscribe();
      source.active = false;
    }
  };

  DelaySubscriber.prototype._schedule = function (scheduler) {
    this.active = true;
    var destination = this.destination;
    destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: scheduler
    }));
  };

  DelaySubscriber.prototype.scheduleNotification = function (notification) {
    if (this.errored === true) {
      return;
    }

    var scheduler = this.scheduler;
    var message = new DelayMessage(scheduler.now() + this.delay, notification);
    this.queue.push(message);

    if (this.active === false) {
      this._schedule(scheduler);
    }
  };

  DelaySubscriber.prototype._next = function (value) {
    this.scheduleNotification(_Notification.Notification.createNext(value));
  };

  DelaySubscriber.prototype._error = function (err) {
    this.errored = true;
    this.queue = [];
    this.destination.error(err);
    this.unsubscribe();
  };

  DelaySubscriber.prototype._complete = function () {
    this.scheduleNotification(_Notification.Notification.createComplete());
    this.unsubscribe();
  };

  return DelaySubscriber;
}(_Subscriber.Subscriber);

var DelayMessage =
/*@__PURE__*/
function () {
  function DelayMessage(time, notification) {
    this.time = time;
    this.notification = notification;
  }

  return DelayMessage;
}();
},{"tslib":"node_modules/tslib/tslib.es6.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isDate":"node_modules/rxjs/_esm5/internal/util/isDate.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Notification":"node_modules/rxjs/_esm5/internal/Notification.js"}],"node_modules/rxjs/_esm5/internal/operators/delayWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayWhen = delayWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Observable = require("../Observable");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function (source) {
      return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    };
  }

  return function (source) {
    return source.lift(new DelayWhenOperator(delayDurationSelector));
  };
}

var DelayWhenOperator =
/*@__PURE__*/
function () {
  function DelayWhenOperator(delayDurationSelector) {
    this.delayDurationSelector = delayDurationSelector;
  }

  DelayWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
  };

  return DelayWhenOperator;
}();

var DelayWhenSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DelayWhenSubscriber, _super);

  function DelayWhenSubscriber(destination, delayDurationSelector) {
    var _this = _super.call(this, destination) || this;

    _this.delayDurationSelector = delayDurationSelector;
    _this.completed = false;
    _this.delayNotifierSubscriptions = [];
    _this.index = 0;
    return _this;
  }

  DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(outerValue);
    this.removeSubscription(innerSub);
    this.tryComplete();
  };

  DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
    var value = this.removeSubscription(innerSub);

    if (value) {
      this.destination.next(value);
    }

    this.tryComplete();
  };

  DelayWhenSubscriber.prototype._next = function (value) {
    var index = this.index++;

    try {
      var delayNotifier = this.delayDurationSelector(value, index);

      if (delayNotifier) {
        this.tryDelay(delayNotifier, value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  DelayWhenSubscriber.prototype._complete = function () {
    this.completed = true;
    this.tryComplete();
    this.unsubscribe();
  };

  DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
    subscription.unsubscribe();
    var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);

    if (subscriptionIdx !== -1) {
      this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
    }

    return subscription.outerValue;
  };

  DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
    var notifierSubscription = (0, _subscribeToResult.subscribeToResult)(this, delayNotifier, value);

    if (notifierSubscription && !notifierSubscription.closed) {
      var destination = this.destination;
      destination.add(notifierSubscription);
      this.delayNotifierSubscriptions.push(notifierSubscription);
    }
  };

  DelayWhenSubscriber.prototype.tryComplete = function () {
    if (this.completed && this.delayNotifierSubscriptions.length === 0) {
      this.destination.complete();
    }
  };

  return DelayWhenSubscriber;
}(_OuterSubscriber.OuterSubscriber);

var SubscriptionDelayObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubscriptionDelayObservable, _super);

  function SubscriptionDelayObservable(source, subscriptionDelay) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subscriptionDelay = subscriptionDelay;
    return _this;
  }

  SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
    this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
  };

  return SubscriptionDelayObservable;
}(_Observable.Observable);

var SubscriptionDelaySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubscriptionDelaySubscriber, _super);

  function SubscriptionDelaySubscriber(parent, source) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.source = source;
    _this.sourceSubscribed = false;
    return _this;
  }

  SubscriptionDelaySubscriber.prototype._next = function (unused) {
    this.subscribeToSource();
  };

  SubscriptionDelaySubscriber.prototype._error = function (err) {
    this.unsubscribe();
    this.parent.error(err);
  };

  SubscriptionDelaySubscriber.prototype._complete = function () {
    this.unsubscribe();
    this.subscribeToSource();
  };

  SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
    if (!this.sourceSubscribed) {
      this.sourceSubscribed = true;
      this.unsubscribe();
      this.source.subscribe(this.parent);
    }
  };

  return SubscriptionDelaySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/dematerialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dematerialize = dematerialize;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function dematerialize() {
  return function dematerializeOperatorFunction(source) {
    return source.lift(new DeMaterializeOperator());
  };
}

var DeMaterializeOperator =
/*@__PURE__*/
function () {
  function DeMaterializeOperator() {}

  DeMaterializeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DeMaterializeSubscriber(subscriber));
  };

  return DeMaterializeOperator;
}();

var DeMaterializeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DeMaterializeSubscriber, _super);

  function DeMaterializeSubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  DeMaterializeSubscriber.prototype._next = function (value) {
    value.observe(this.destination);
  };

  return DeMaterializeSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/distinct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinct = distinct;
exports.DistinctSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function distinct(keySelector, flushes) {
  return function (source) {
    return source.lift(new DistinctOperator(keySelector, flushes));
  };
}

var DistinctOperator =
/*@__PURE__*/
function () {
  function DistinctOperator(keySelector, flushes) {
    this.keySelector = keySelector;
    this.flushes = flushes;
  }

  DistinctOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
  };

  return DistinctOperator;
}();

var DistinctSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DistinctSubscriber, _super);

  function DistinctSubscriber(destination, keySelector, flushes) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.values = new Set();

    if (flushes) {
      _this.add((0, _subscribeToResult.subscribeToResult)(_this, flushes));
    }

    return _this;
  }

  DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values.clear();
  };

  DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  DistinctSubscriber.prototype._next = function (value) {
    if (this.keySelector) {
      this._useKeySelector(value);
    } else {
      this._finalizeNext(value, value);
    }
  };

  DistinctSubscriber.prototype._useKeySelector = function (value) {
    var key;
    var destination = this.destination;

    try {
      key = this.keySelector(value);
    } catch (err) {
      destination.error(err);
      return;
    }

    this._finalizeNext(key, value);
  };

  DistinctSubscriber.prototype._finalizeNext = function (key, value) {
    var values = this.values;

    if (!values.has(key)) {
      values.add(key);
      this.destination.next(value);
    }
  };

  return DistinctSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.DistinctSubscriber = DistinctSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinctUntilChanged = distinctUntilChanged;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function distinctUntilChanged(compare, keySelector) {
  return function (source) {
    return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
  };
}

var DistinctUntilChangedOperator =
/*@__PURE__*/
function () {
  function DistinctUntilChangedOperator(compare, keySelector) {
    this.compare = compare;
    this.keySelector = keySelector;
  }

  DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
  };

  return DistinctUntilChangedOperator;
}();

var DistinctUntilChangedSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(DistinctUntilChangedSubscriber, _super);

  function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.hasKey = false;

    if (typeof compare === 'function') {
      _this.compare = compare;
    }

    return _this;
  }

  DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
    return x === y;
  };

  DistinctUntilChangedSubscriber.prototype._next = function (value) {
    var key;

    try {
      var keySelector = this.keySelector;
      key = keySelector ? keySelector(value) : value;
    } catch (err) {
      return this.destination.error(err);
    }

    var result = false;

    if (this.hasKey) {
      try {
        var compare = this.compare;
        result = compare(this.key, key);
      } catch (err) {
        return this.destination.error(err);
      }
    } else {
      this.hasKey = true;
    }

    if (!result) {
      this.key = key;
      this.destination.next(value);
    }
  };

  return DistinctUntilChangedSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/distinctUntilKeyChanged.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

var _distinctUntilChanged = require("./distinctUntilChanged");

/** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */
function distinctUntilKeyChanged(key, compare) {
  return (0, _distinctUntilChanged.distinctUntilChanged)(function (x, y) {
    return compare ? compare(x[key], y[key]) : x[key] === y[key];
  });
}
},{"./distinctUntilChanged":"node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js"}],"node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwIfEmpty = throwIfEmpty;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _EmptyError = require("../util/EmptyError");

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */
function throwIfEmpty(errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }

  return function (source) {
    return source.lift(new ThrowIfEmptyOperator(errorFactory));
  };
}

var ThrowIfEmptyOperator =
/*@__PURE__*/
function () {
  function ThrowIfEmptyOperator(errorFactory) {
    this.errorFactory = errorFactory;
  }

  ThrowIfEmptyOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
  };

  return ThrowIfEmptyOperator;
}();

var ThrowIfEmptySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ThrowIfEmptySubscriber, _super);

  function ThrowIfEmptySubscriber(destination, errorFactory) {
    var _this = _super.call(this, destination) || this;

    _this.errorFactory = errorFactory;
    _this.hasValue = false;
    return _this;
  }

  ThrowIfEmptySubscriber.prototype._next = function (value) {
    this.hasValue = true;
    this.destination.next(value);
  };

  ThrowIfEmptySubscriber.prototype._complete = function () {
    if (!this.hasValue) {
      var err = void 0;

      try {
        err = this.errorFactory();
      } catch (e) {
        err = e;
      }

      this.destination.error(err);
    } else {
      return this.destination.complete();
    }
  };

  return ThrowIfEmptySubscriber;
}(_Subscriber.Subscriber);

function defaultErrorFactory() {
  return new _EmptyError.EmptyError();
}
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/EmptyError":"node_modules/rxjs/_esm5/internal/util/EmptyError.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/take.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

var _empty = require("../observable/empty");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
function take(count) {
  return function (source) {
    if (count === 0) {
      return (0, _empty.empty)();
    } else {
      return source.lift(new TakeOperator(count));
    }
  };
}

var TakeOperator =
/*@__PURE__*/
function () {
  function TakeOperator(total) {
    this.total = total;

    if (this.total < 0) {
      throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }
  }

  TakeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  };

  return TakeOperator;
}();

var TakeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TakeSubscriber, _super);

  function TakeSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.count = 0;
    return _this;
  }

  TakeSubscriber.prototype._next = function (value) {
    var total = this.total;
    var count = ++this.count;

    if (count <= total) {
      this.destination.next(value);

      if (count === total) {
        this.destination.complete();
        this.unsubscribe();
      }
    }
  };

  return TakeSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../util/ArgumentOutOfRangeError":"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","../observable/empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/operators/elementAt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementAt = elementAt;

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

var _filter = require("./filter");

var _throwIfEmpty = require("./throwIfEmpty");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _take = require("./take");

/** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */
function elementAt(index, defaultValue) {
  if (index < 0) {
    throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
  }

  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe((0, _filter.filter)(function (v, i) {
      return i === index;
    }), (0, _take.take)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }));
  };
}
},{"../util/ArgumentOutOfRangeError":"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","./filter":"node_modules/rxjs/_esm5/internal/operators/filter.js","./throwIfEmpty":"node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js","./defaultIfEmpty":"node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","./take":"node_modules/rxjs/_esm5/internal/operators/take.js"}],"node_modules/rxjs/_esm5/internal/operators/endWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endWith = endWith;

var _concat = require("../observable/concat");

var _of = require("../observable/of");

/** PURE_IMPORTS_START _observable_concat,_observable_of PURE_IMPORTS_END */
function endWith() {
  var array = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }

  return function (source) {
    return (0, _concat.concat)(source, _of.of.apply(void 0, array));
  };
}
},{"../observable/concat":"node_modules/rxjs/_esm5/internal/observable/concat.js","../observable/of":"node_modules/rxjs/_esm5/internal/observable/of.js"}],"node_modules/rxjs/_esm5/internal/operators/every.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = every;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function every(predicate, thisArg) {
  return function (source) {
    return source.lift(new EveryOperator(predicate, thisArg, source));
  };
}

var EveryOperator =
/*@__PURE__*/
function () {
  function EveryOperator(predicate, thisArg, source) {
    this.predicate = predicate;
    this.thisArg = thisArg;
    this.source = source;
  }

  EveryOperator.prototype.call = function (observer, source) {
    return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
  };

  return EveryOperator;
}();

var EverySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(EverySubscriber, _super);

  function EverySubscriber(destination, predicate, thisArg, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.thisArg = thisArg;
    _this.source = source;
    _this.index = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }

  EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
    this.destination.next(everyValueMatch);
    this.destination.complete();
  };

  EverySubscriber.prototype._next = function (value) {
    var result = false;

    try {
      result = this.predicate.call(this.thisArg, value, this.index++, this.source);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    if (!result) {
      this.notifyComplete(false);
    }
  };

  EverySubscriber.prototype._complete = function () {
    this.notifyComplete(true);
  };

  return EverySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/exhaust.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaust = exhaust;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function exhaust() {
  return function (source) {
    return source.lift(new SwitchFirstOperator());
  };
}

var SwitchFirstOperator =
/*@__PURE__*/
function () {
  function SwitchFirstOperator() {}

  SwitchFirstOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SwitchFirstSubscriber(subscriber));
  };

  return SwitchFirstOperator;
}();

var SwitchFirstSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SwitchFirstSubscriber, _super);

  function SwitchFirstSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasCompleted = false;
    _this.hasSubscription = false;
    return _this;
  }

  SwitchFirstSubscriber.prototype._next = function (value) {
    if (!this.hasSubscription) {
      this.hasSubscription = true;
      this.add((0, _subscribeToResult.subscribeToResult)(this, value));
    }
  };

  SwitchFirstSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (!this.hasSubscription) {
      this.destination.complete();
    }
  };

  SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
    this.remove(innerSub);
    this.hasSubscription = false;

    if (this.hasCompleted) {
      this.destination.complete();
    }
  };

  return SwitchFirstSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/exhaustMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaustMap = exhaustMap;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _map = require("./map");

var _from = require("../observable/from");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
function exhaustMap(project, resultSelector) {
  if (resultSelector) {
    return function (source) {
      return source.pipe(exhaustMap(function (a, i) {
        return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }

  return function (source) {
    return source.lift(new ExhaustMapOperator(project));
  };
}

var ExhaustMapOperator =
/*@__PURE__*/
function () {
  function ExhaustMapOperator(project) {
    this.project = project;
  }

  ExhaustMapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
  };

  return ExhaustMapOperator;
}();

var ExhaustMapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ExhaustMapSubscriber, _super);

  function ExhaustMapSubscriber(destination, project) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.hasSubscription = false;
    _this.hasCompleted = false;
    _this.index = 0;
    return _this;
  }

  ExhaustMapSubscriber.prototype._next = function (value) {
    if (!this.hasSubscription) {
      this.tryNext(value);
    }
  };

  ExhaustMapSubscriber.prototype.tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.hasSubscription = true;

    this._innerSub(result, value, index);
  };

  ExhaustMapSubscriber.prototype._innerSub = function (result, value, index) {
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    (0, _subscribeToResult.subscribeToResult)(this, result, value, index, innerSubscriber);
  };

  ExhaustMapSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (!this.hasSubscription) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  ExhaustMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  ExhaustMapSubscriber.prototype.notifyError = function (err) {
    this.destination.error(err);
  };

  ExhaustMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var destination = this.destination;
    destination.remove(innerSub);
    this.hasSubscription = false;

    if (this.hasCompleted) {
      this.destination.complete();
    }
  };

  return ExhaustMapSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","./map":"node_modules/rxjs/_esm5/internal/operators/map.js","../observable/from":"node_modules/rxjs/_esm5/internal/observable/from.js"}],"node_modules/rxjs/_esm5/internal/operators/expand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expand = expand;
exports.ExpandSubscriber = exports.ExpandOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function expand(project, concurrent, scheduler) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (scheduler === void 0) {
    scheduler = undefined;
  }

  concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
  return function (source) {
    return source.lift(new ExpandOperator(project, concurrent, scheduler));
  };
}

var ExpandOperator =
/*@__PURE__*/
function () {
  function ExpandOperator(project, concurrent, scheduler) {
    this.project = project;
    this.concurrent = concurrent;
    this.scheduler = scheduler;
  }

  ExpandOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
  };

  return ExpandOperator;
}();

exports.ExpandOperator = ExpandOperator;

var ExpandSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ExpandSubscriber, _super);

  function ExpandSubscriber(destination, project, concurrent, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.concurrent = concurrent;
    _this.scheduler = scheduler;
    _this.index = 0;
    _this.active = 0;
    _this.hasCompleted = false;

    if (concurrent < Number.POSITIVE_INFINITY) {
      _this.buffer = [];
    }

    return _this;
  }

  ExpandSubscriber.dispatch = function (arg) {
    var subscriber = arg.subscriber,
        result = arg.result,
        value = arg.value,
        index = arg.index;
    subscriber.subscribeToProjection(result, value, index);
  };

  ExpandSubscriber.prototype._next = function (value) {
    var destination = this.destination;

    if (destination.closed) {
      this._complete();

      return;
    }

    var index = this.index++;

    if (this.active < this.concurrent) {
      destination.next(value);

      try {
        var project = this.project;
        var result = project(value, index);

        if (!this.scheduler) {
          this.subscribeToProjection(result, value, index);
        } else {
          var state = {
            subscriber: this,
            result: result,
            value: value,
            index: index
          };
          var destination_1 = this.destination;
          destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
        }
      } catch (e) {
        destination.error(e);
      }
    } else {
      this.buffer.push(value);
    }
  };

  ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
    this.active++;
    var destination = this.destination;
    destination.add((0, _subscribeToResult.subscribeToResult)(this, result, value, index));
  };

  ExpandSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.hasCompleted && this.active === 0) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this._next(innerValue);
  };

  ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    var destination = this.destination;
    destination.remove(innerSub);
    this.active--;

    if (buffer && buffer.length > 0) {
      this._next(buffer.shift());
    }

    if (this.hasCompleted && this.active === 0) {
      this.destination.complete();
    }
  };

  return ExpandSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.ExpandSubscriber = ExpandSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/finalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalize = finalize;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */
function finalize(callback) {
  return function (source) {
    return source.lift(new FinallyOperator(callback));
  };
}

var FinallyOperator =
/*@__PURE__*/
function () {
  function FinallyOperator(callback) {
    this.callback = callback;
  }

  FinallyOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new FinallySubscriber(subscriber, this.callback));
  };

  return FinallyOperator;
}();

var FinallySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(FinallySubscriber, _super);

  function FinallySubscriber(destination, callback) {
    var _this = _super.call(this, destination) || this;

    _this.add(new _Subscription.Subscription(callback));

    return _this;
  }

  return FinallySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js"}],"node_modules/rxjs/_esm5/internal/operators/find.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.find = find;
exports.FindValueSubscriber = exports.FindValueOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function find(predicate, thisArg) {
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate is not a function');
  }

  return function (source) {
    return source.lift(new FindValueOperator(predicate, source, false, thisArg));
  };
}

var FindValueOperator =
/*@__PURE__*/
function () {
  function FindValueOperator(predicate, source, yieldIndex, thisArg) {
    this.predicate = predicate;
    this.source = source;
    this.yieldIndex = yieldIndex;
    this.thisArg = thisArg;
  }

  FindValueOperator.prototype.call = function (observer, source) {
    return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
  };

  return FindValueOperator;
}();

exports.FindValueOperator = FindValueOperator;

var FindValueSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(FindValueSubscriber, _super);

  function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.yieldIndex = yieldIndex;
    _this.thisArg = thisArg;
    _this.index = 0;
    return _this;
  }

  FindValueSubscriber.prototype.notifyComplete = function (value) {
    var destination = this.destination;
    destination.next(value);
    destination.complete();
    this.unsubscribe();
  };

  FindValueSubscriber.prototype._next = function (value) {
    var _a = this,
        predicate = _a.predicate,
        thisArg = _a.thisArg;

    var index = this.index++;

    try {
      var result = predicate.call(thisArg || this, value, index, this.source);

      if (result) {
        this.notifyComplete(this.yieldIndex ? index : value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  FindValueSubscriber.prototype._complete = function () {
    this.notifyComplete(this.yieldIndex ? -1 : undefined);
  };

  return FindValueSubscriber;
}(_Subscriber.Subscriber);

exports.FindValueSubscriber = FindValueSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/findIndex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIndex = findIndex;

var _find = require("../operators/find");

/** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */
function findIndex(predicate, thisArg) {
  return function (source) {
    return source.lift(new _find.FindValueOperator(predicate, source, true, thisArg));
  };
}
},{"../operators/find":"node_modules/rxjs/_esm5/internal/operators/find.js"}],"node_modules/rxjs/_esm5/internal/operators/first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;

var _EmptyError = require("../util/EmptyError");

var _filter = require("./filter");

var _take = require("./take");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _throwIfEmpty = require("./throwIfEmpty");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */
function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? (0, _filter.filter)(function (v, i) {
      return predicate(v, i, source);
    }) : _identity.identity, (0, _take.take)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _EmptyError.EmptyError();
    }));
  };
}
},{"../util/EmptyError":"node_modules/rxjs/_esm5/internal/util/EmptyError.js","./filter":"node_modules/rxjs/_esm5/internal/operators/filter.js","./take":"node_modules/rxjs/_esm5/internal/operators/take.js","./defaultIfEmpty":"node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","./throwIfEmpty":"node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js","../util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js"}],"node_modules/rxjs/_esm5/internal/operators/ignoreElements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignoreElements = ignoreElements;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function ignoreElements() {
  return function ignoreElementsOperatorFunction(source) {
    return source.lift(new IgnoreElementsOperator());
  };
}

var IgnoreElementsOperator =
/*@__PURE__*/
function () {
  function IgnoreElementsOperator() {}

  IgnoreElementsOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new IgnoreElementsSubscriber(subscriber));
  };

  return IgnoreElementsOperator;
}();

var IgnoreElementsSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(IgnoreElementsSubscriber, _super);

  function IgnoreElementsSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  IgnoreElementsSubscriber.prototype._next = function (unused) {};

  return IgnoreElementsSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/isEmpty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = isEmpty;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function isEmpty() {
  return function (source) {
    return source.lift(new IsEmptyOperator());
  };
}

var IsEmptyOperator =
/*@__PURE__*/
function () {
  function IsEmptyOperator() {}

  IsEmptyOperator.prototype.call = function (observer, source) {
    return source.subscribe(new IsEmptySubscriber(observer));
  };

  return IsEmptyOperator;
}();

var IsEmptySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(IsEmptySubscriber, _super);

  function IsEmptySubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
    var destination = this.destination;
    destination.next(isEmpty);
    destination.complete();
  };

  IsEmptySubscriber.prototype._next = function (value) {
    this.notifyComplete(false);
  };

  IsEmptySubscriber.prototype._complete = function () {
    this.notifyComplete(true);
  };

  return IsEmptySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/takeLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeLast = takeLast;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

var _empty = require("../observable/empty");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */
function takeLast(count) {
  return function takeLastOperatorFunction(source) {
    if (count === 0) {
      return (0, _empty.empty)();
    } else {
      return source.lift(new TakeLastOperator(count));
    }
  };
}

var TakeLastOperator =
/*@__PURE__*/
function () {
  function TakeLastOperator(total) {
    this.total = total;

    if (this.total < 0) {
      throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }
  }

  TakeLastOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
  };

  return TakeLastOperator;
}();

var TakeLastSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TakeLastSubscriber, _super);

  function TakeLastSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.ring = new Array();
    _this.count = 0;
    return _this;
  }

  TakeLastSubscriber.prototype._next = function (value) {
    var ring = this.ring;
    var total = this.total;
    var count = this.count++;

    if (ring.length < total) {
      ring.push(value);
    } else {
      var index = count % total;
      ring[index] = value;
    }
  };

  TakeLastSubscriber.prototype._complete = function () {
    var destination = this.destination;
    var count = this.count;

    if (count > 0) {
      var total = this.count >= this.total ? this.total : this.count;
      var ring = this.ring;

      for (var i = 0; i < total; i++) {
        var idx = count++ % total;
        destination.next(ring[idx]);
      }
    }

    destination.complete();
  };

  return TakeLastSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../util/ArgumentOutOfRangeError":"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","../observable/empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/operators/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _EmptyError = require("../util/EmptyError");

var _filter = require("./filter");

var _takeLast = require("./takeLast");

var _throwIfEmpty = require("./throwIfEmpty");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */
function last(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? (0, _filter.filter)(function (v, i) {
      return predicate(v, i, source);
    }) : _identity.identity, (0, _takeLast.takeLast)(1), hasDefaultValue ? (0, _defaultIfEmpty.defaultIfEmpty)(defaultValue) : (0, _throwIfEmpty.throwIfEmpty)(function () {
      return new _EmptyError.EmptyError();
    }));
  };
}
},{"../util/EmptyError":"node_modules/rxjs/_esm5/internal/util/EmptyError.js","./filter":"node_modules/rxjs/_esm5/internal/operators/filter.js","./takeLast":"node_modules/rxjs/_esm5/internal/operators/takeLast.js","./throwIfEmpty":"node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js","./defaultIfEmpty":"node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","../util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js"}],"node_modules/rxjs/_esm5/internal/operators/mapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTo = mapTo;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function mapTo(value) {
  return function (source) {
    return source.lift(new MapToOperator(value));
  };
}

var MapToOperator =
/*@__PURE__*/
function () {
  function MapToOperator(value) {
    this.value = value;
  }

  MapToOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapToSubscriber(subscriber, this.value));
  };

  return MapToOperator;
}();

var MapToSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MapToSubscriber, _super);

  function MapToSubscriber(destination, value) {
    var _this = _super.call(this, destination) || this;

    _this.value = value;
    return _this;
  }

  MapToSubscriber.prototype._next = function (x) {
    this.destination.next(this.value);
  };

  return MapToSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/materialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.materialize = materialize;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Notification = require("../Notification");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
function materialize() {
  return function materializeOperatorFunction(source) {
    return source.lift(new MaterializeOperator());
  };
}

var MaterializeOperator =
/*@__PURE__*/
function () {
  function MaterializeOperator() {}

  MaterializeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MaterializeSubscriber(subscriber));
  };

  return MaterializeOperator;
}();

var MaterializeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MaterializeSubscriber, _super);

  function MaterializeSubscriber(destination) {
    return _super.call(this, destination) || this;
  }

  MaterializeSubscriber.prototype._next = function (value) {
    this.destination.next(_Notification.Notification.createNext(value));
  };

  MaterializeSubscriber.prototype._error = function (err) {
    var destination = this.destination;
    destination.next(_Notification.Notification.createError(err));
    destination.complete();
  };

  MaterializeSubscriber.prototype._complete = function () {
    var destination = this.destination;
    destination.next(_Notification.Notification.createComplete());
    destination.complete();
  };

  return MaterializeSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Notification":"node_modules/rxjs/_esm5/internal/Notification.js"}],"node_modules/rxjs/_esm5/internal/operators/reduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = reduce;

var _scan = require("./scan");

var _takeLast = require("./takeLast");

var _defaultIfEmpty = require("./defaultIfEmpty");

var _pipe = require("../util/pipe");

/** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */
function reduce(accumulator, seed) {
  if (arguments.length >= 2) {
    return function reduceOperatorFunctionWithSeed(source) {
      return (0, _pipe.pipe)((0, _scan.scan)(accumulator, seed), (0, _takeLast.takeLast)(1), (0, _defaultIfEmpty.defaultIfEmpty)(seed))(source);
    };
  }

  return function reduceOperatorFunction(source) {
    return (0, _pipe.pipe)((0, _scan.scan)(function (acc, value, index) {
      return accumulator(acc, value, index + 1);
    }), (0, _takeLast.takeLast)(1))(source);
  };
}
},{"./scan":"node_modules/rxjs/_esm5/internal/operators/scan.js","./takeLast":"node_modules/rxjs/_esm5/internal/operators/takeLast.js","./defaultIfEmpty":"node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","../util/pipe":"node_modules/rxjs/_esm5/internal/util/pipe.js"}],"node_modules/rxjs/_esm5/internal/operators/max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = max;

var _reduce = require("./reduce");

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function max(comparer) {
  var max = typeof comparer === 'function' ? function (x, y) {
    return comparer(x, y) > 0 ? x : y;
  } : function (x, y) {
    return x > y ? x : y;
  };
  return (0, _reduce.reduce)(max);
}
},{"./reduce":"node_modules/rxjs/_esm5/internal/operators/reduce.js"}],"node_modules/rxjs/_esm5/internal/operators/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

var _merge = require("../observable/merge");

/** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */
function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function (source) {
    return source.lift.call(_merge.merge.apply(void 0, [source].concat(observables)));
  };
}
},{"../observable/merge":"node_modules/rxjs/_esm5/internal/observable/merge.js"}],"node_modules/rxjs/_esm5/internal/operators/mergeMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMapTo = mergeMapTo;

var _mergeMap = require("./mergeMap");

/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return (0, _mergeMap.mergeMap)(function () {
      return innerObservable;
    }, resultSelector, concurrent);
  }

  if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return (0, _mergeMap.mergeMap)(function () {
    return innerObservable;
  }, concurrent);
}
},{"./mergeMap":"node_modules/rxjs/_esm5/internal/operators/mergeMap.js"}],"node_modules/rxjs/_esm5/internal/operators/mergeScan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeScan = mergeScan;
exports.MergeScanSubscriber = exports.MergeScanOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber PURE_IMPORTS_END */
function mergeScan(accumulator, seed, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return function (source) {
    return source.lift(new MergeScanOperator(accumulator, seed, concurrent));
  };
}

var MergeScanOperator =
/*@__PURE__*/
function () {
  function MergeScanOperator(accumulator, seed, concurrent) {
    this.accumulator = accumulator;
    this.seed = seed;
    this.concurrent = concurrent;
  }

  MergeScanOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
  };

  return MergeScanOperator;
}();

exports.MergeScanOperator = MergeScanOperator;

var MergeScanSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MergeScanSubscriber, _super);

  function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
    var _this = _super.call(this, destination) || this;

    _this.accumulator = accumulator;
    _this.acc = acc;
    _this.concurrent = concurrent;
    _this.hasValue = false;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }

  MergeScanSubscriber.prototype._next = function (value) {
    if (this.active < this.concurrent) {
      var index = this.index++;
      var destination = this.destination;
      var ish = void 0;

      try {
        var accumulator = this.accumulator;
        ish = accumulator(this.acc, value, index);
      } catch (e) {
        return destination.error(e);
      }

      this.active++;

      this._innerSub(ish, value, index);
    } else {
      this.buffer.push(value);
    }
  };

  MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    (0, _subscribeToResult.subscribeToResult)(this, ish, value, index, innerSubscriber);
  };

  MergeScanSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.active === 0 && this.buffer.length === 0) {
      if (this.hasValue === false) {
        this.destination.next(this.acc);
      }

      this.destination.complete();
    }

    this.unsubscribe();
  };

  MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var destination = this.destination;
    this.acc = innerValue;
    this.hasValue = true;
    destination.next(innerValue);
  };

  MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    var destination = this.destination;
    destination.remove(innerSub);
    this.active--;

    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      if (this.hasValue === false) {
        this.destination.next(this.acc);
      }

      this.destination.complete();
    }
  };

  return MergeScanSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.MergeScanSubscriber = MergeScanSubscriber;
},{"tslib":"node_modules/tslib/tslib.es6.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;

var _reduce = require("./reduce");

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function min(comparer) {
  var min = typeof comparer === 'function' ? function (x, y) {
    return comparer(x, y) < 0 ? x : y;
  } : function (x, y) {
    return x < y ? x : y;
  };
  return (0, _reduce.reduce)(min);
}
},{"./reduce":"node_modules/rxjs/_esm5/internal/operators/reduce.js"}],"node_modules/rxjs/_esm5/internal/operators/multicast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multicast = multicast;
exports.MulticastOperator = void 0;

var _ConnectableObservable = require("../observable/ConnectableObservable");

/** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */
function multicast(subjectOrSubjectFactory, selector) {
  return function multicastOperatorFunction(source) {
    var subjectFactory;

    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }

    if (typeof selector === 'function') {
      return source.lift(new MulticastOperator(subjectFactory, selector));
    }

    var connectable = Object.create(source, _ConnectableObservable.connectableObservableDescriptor);
    connectable.source = source;
    connectable.subjectFactory = subjectFactory;
    return connectable;
  };
}

var MulticastOperator =
/*@__PURE__*/
function () {
  function MulticastOperator(subjectFactory, selector) {
    this.subjectFactory = subjectFactory;
    this.selector = selector;
  }

  MulticastOperator.prototype.call = function (subscriber, source) {
    var selector = this.selector;
    var subject = this.subjectFactory();
    var subscription = selector(subject).subscribe(subscriber);
    subscription.add(source.subscribe(subject));
    return subscription;
  };

  return MulticastOperator;
}();

exports.MulticastOperator = MulticastOperator;
},{"../observable/ConnectableObservable":"node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js"}],"node_modules/rxjs/_esm5/internal/operators/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = onErrorResumeNext;
exports.onErrorResumeNextStatic = onErrorResumeNextStatic;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _from = require("../observable/from");

var _isArray = require("../util/isArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function onErrorResumeNext() {
  var nextSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    nextSources[_i] = arguments[_i];
  }

  if (nextSources.length === 1 && (0, _isArray.isArray)(nextSources[0])) {
    nextSources = nextSources[0];
  }

  return function (source) {
    return source.lift(new OnErrorResumeNextOperator(nextSources));
  };
}

function onErrorResumeNextStatic() {
  var nextSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    nextSources[_i] = arguments[_i];
  }

  var source = null;

  if (nextSources.length === 1 && (0, _isArray.isArray)(nextSources[0])) {
    nextSources = nextSources[0];
  }

  source = nextSources.shift();
  return (0, _from.from)(source, null).lift(new OnErrorResumeNextOperator(nextSources));
}

var OnErrorResumeNextOperator =
/*@__PURE__*/
function () {
  function OnErrorResumeNextOperator(nextSources) {
    this.nextSources = nextSources;
  }

  OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
  };

  return OnErrorResumeNextOperator;
}();

var OnErrorResumeNextSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(OnErrorResumeNextSubscriber, _super);

  function OnErrorResumeNextSubscriber(destination, nextSources) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.nextSources = nextSources;
    return _this;
  }

  OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
    this.subscribeToNextSource();
  };

  OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
    this.subscribeToNextSource();
  };

  OnErrorResumeNextSubscriber.prototype._error = function (err) {
    this.subscribeToNextSource();
    this.unsubscribe();
  };

  OnErrorResumeNextSubscriber.prototype._complete = function () {
    this.subscribeToNextSource();
    this.unsubscribe();
  };

  OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
    var next = this.nextSources.shift();

    if (!!next) {
      var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
      var destination = this.destination;
      destination.add(innerSubscriber);
      (0, _subscribeToResult.subscribeToResult)(this, next, undefined, undefined, innerSubscriber);
    } else {
      this.destination.complete();
    }
  };

  return OnErrorResumeNextSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../observable/from":"node_modules/rxjs/_esm5/internal/observable/from.js","../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/pairwise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairwise = pairwise;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function pairwise() {
  return function (source) {
    return source.lift(new PairwiseOperator());
  };
}

var PairwiseOperator =
/*@__PURE__*/
function () {
  function PairwiseOperator() {}

  PairwiseOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new PairwiseSubscriber(subscriber));
  };

  return PairwiseOperator;
}();

var PairwiseSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(PairwiseSubscriber, _super);

  function PairwiseSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasPrev = false;
    return _this;
  }

  PairwiseSubscriber.prototype._next = function (value) {
    var pair;

    if (this.hasPrev) {
      pair = [this.prev, value];
    } else {
      this.hasPrev = true;
    }

    this.prev = value;

    if (pair) {
      this.destination.next(pair);
    }
  };

  return PairwiseSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _not = require("../util/not");

var _filter = require("./filter");

/** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */
function partition(predicate, thisArg) {
  return function (source) {
    return [(0, _filter.filter)(predicate, thisArg)(source), (0, _filter.filter)((0, _not.not)(predicate, thisArg))(source)];
  };
}
},{"../util/not":"node_modules/rxjs/_esm5/internal/util/not.js","./filter":"node_modules/rxjs/_esm5/internal/operators/filter.js"}],"node_modules/rxjs/_esm5/internal/operators/pluck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluck = pluck;

var _map = require("./map");

/** PURE_IMPORTS_START _map PURE_IMPORTS_END */
function pluck() {
  var properties = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    properties[_i] = arguments[_i];
  }

  var length = properties.length;

  if (length === 0) {
    throw new Error('list of properties cannot be empty.');
  }

  return function (source) {
    return (0, _map.map)(plucker(properties, length))(source);
  };
}

function plucker(props, length) {
  var mapper = function (x) {
    var currentProp = x;

    for (var i = 0; i < length; i++) {
      var p = currentProp[props[i]];

      if (typeof p !== 'undefined') {
        currentProp = p;
      } else {
        return undefined;
      }
    }

    return currentProp;
  };

  return mapper;
}
},{"./map":"node_modules/rxjs/_esm5/internal/operators/map.js"}],"node_modules/rxjs/_esm5/internal/operators/publish.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;

var _Subject = require("../Subject");

var _multicast = require("./multicast");

/** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */
function publish(selector) {
  return selector ? (0, _multicast.multicast)(function () {
    return new _Subject.Subject();
  }, selector) : (0, _multicast.multicast)(new _Subject.Subject());
}
},{"../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","./multicast":"node_modules/rxjs/_esm5/internal/operators/multicast.js"}],"node_modules/rxjs/_esm5/internal/operators/publishBehavior.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishBehavior = publishBehavior;

var _BehaviorSubject = require("../BehaviorSubject");

var _multicast = require("./multicast");

/** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */
function publishBehavior(value) {
  return function (source) {
    return (0, _multicast.multicast)(new _BehaviorSubject.BehaviorSubject(value))(source);
  };
}
},{"../BehaviorSubject":"node_modules/rxjs/_esm5/internal/BehaviorSubject.js","./multicast":"node_modules/rxjs/_esm5/internal/operators/multicast.js"}],"node_modules/rxjs/_esm5/internal/operators/publishLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishLast = publishLast;

var _AsyncSubject = require("../AsyncSubject");

var _multicast = require("./multicast");

/** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */
function publishLast() {
  return function (source) {
    return (0, _multicast.multicast)(new _AsyncSubject.AsyncSubject())(source);
  };
}
},{"../AsyncSubject":"node_modules/rxjs/_esm5/internal/AsyncSubject.js","./multicast":"node_modules/rxjs/_esm5/internal/operators/multicast.js"}],"node_modules/rxjs/_esm5/internal/operators/publishReplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishReplay = publishReplay;

var _ReplaySubject = require("../ReplaySubject");

var _multicast = require("./multicast");

/** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
  if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
    scheduler = selectorOrScheduler;
  }

  var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
  var subject = new _ReplaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
  return function (source) {
    return (0, _multicast.multicast)(function () {
      return subject;
    }, selector)(source);
  };
}
},{"../ReplaySubject":"node_modules/rxjs/_esm5/internal/ReplaySubject.js","./multicast":"node_modules/rxjs/_esm5/internal/operators/multicast.js"}],"node_modules/rxjs/_esm5/internal/operators/race.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = race;

var _isArray = require("../util/isArray");

var _race = require("../observable/race");

/** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */
function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function raceOperatorFunction(source) {
    if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
      observables = observables[0];
    }

    return source.lift.call(_race.race.apply(void 0, [source].concat(observables)));
  };
}
},{"../util/isArray":"node_modules/rxjs/_esm5/internal/util/isArray.js","../observable/race":"node_modules/rxjs/_esm5/internal/observable/race.js"}],"node_modules/rxjs/_esm5/internal/operators/repeat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _empty = require("../observable/empty");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */
function repeat(count) {
  if (count === void 0) {
    count = -1;
  }

  return function (source) {
    if (count === 0) {
      return (0, _empty.empty)();
    } else if (count < 0) {
      return source.lift(new RepeatOperator(-1, source));
    } else {
      return source.lift(new RepeatOperator(count - 1, source));
    }
  };
}

var RepeatOperator =
/*@__PURE__*/
function () {
  function RepeatOperator(count, source) {
    this.count = count;
    this.source = source;
  }

  RepeatOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
  };

  return RepeatOperator;
}();

var RepeatSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RepeatSubscriber, _super);

  function RepeatSubscriber(destination, count, source) {
    var _this = _super.call(this, destination) || this;

    _this.count = count;
    _this.source = source;
    return _this;
  }

  RepeatSubscriber.prototype.complete = function () {
    if (!this.isStopped) {
      var _a = this,
          source = _a.source,
          count = _a.count;

      if (count === 0) {
        return _super.prototype.complete.call(this);
      } else if (count > -1) {
        this.count = count - 1;
      }

      source.subscribe(this._unsubscribeAndRecycle());
    }
  };

  return RepeatSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../observable/empty":"node_modules/rxjs/_esm5/internal/observable/empty.js"}],"node_modules/rxjs/_esm5/internal/operators/repeatWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatWhen = repeatWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function repeatWhen(notifier) {
  return function (source) {
    return source.lift(new RepeatWhenOperator(notifier));
  };
}

var RepeatWhenOperator =
/*@__PURE__*/
function () {
  function RepeatWhenOperator(notifier) {
    this.notifier = notifier;
  }

  RepeatWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
  };

  return RepeatWhenOperator;
}();

var RepeatWhenSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RepeatWhenSubscriber, _super);

  function RepeatWhenSubscriber(destination, notifier, source) {
    var _this = _super.call(this, destination) || this;

    _this.notifier = notifier;
    _this.source = source;
    _this.sourceIsBeingSubscribedTo = true;
    return _this;
  }

  RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.sourceIsBeingSubscribedTo = true;
    this.source.subscribe(this);
  };

  RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
    if (this.sourceIsBeingSubscribedTo === false) {
      return _super.prototype.complete.call(this);
    }
  };

  RepeatWhenSubscriber.prototype.complete = function () {
    this.sourceIsBeingSubscribedTo = false;

    if (!this.isStopped) {
      if (!this.retries) {
        this.subscribeToRetries();
      }

      if (!this.retriesSubscription || this.retriesSubscription.closed) {
        return _super.prototype.complete.call(this);
      }

      this._unsubscribeAndRecycle();

      this.notifications.next();
    }
  };

  RepeatWhenSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        notifications = _a.notifications,
        retriesSubscription = _a.retriesSubscription;

    if (notifications) {
      notifications.unsubscribe();
      this.notifications = null;
    }

    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = null;
    }

    this.retries = null;
  };

  RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
    var _unsubscribe = this._unsubscribe;
    this._unsubscribe = null;

    _super.prototype._unsubscribeAndRecycle.call(this);

    this._unsubscribe = _unsubscribe;
    return this;
  };

  RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
    this.notifications = new _Subject.Subject();
    var retries;

    try {
      var notifier = this.notifier;
      retries = notifier(this.notifications);
    } catch (e) {
      return _super.prototype.complete.call(this);
    }

    this.retries = retries;
    this.retriesSubscription = (0, _subscribeToResult.subscribeToResult)(this, retries);
  };

  return RepeatWhenSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/retry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retry = retry;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function retry(count) {
  if (count === void 0) {
    count = -1;
  }

  return function (source) {
    return source.lift(new RetryOperator(count, source));
  };
}

var RetryOperator =
/*@__PURE__*/
function () {
  function RetryOperator(count, source) {
    this.count = count;
    this.source = source;
  }

  RetryOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
  };

  return RetryOperator;
}();

var RetrySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RetrySubscriber, _super);

  function RetrySubscriber(destination, count, source) {
    var _this = _super.call(this, destination) || this;

    _this.count = count;
    _this.source = source;
    return _this;
  }

  RetrySubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _a = this,
          source = _a.source,
          count = _a.count;

      if (count === 0) {
        return _super.prototype.error.call(this, err);
      } else if (count > -1) {
        this.count = count - 1;
      }

      source.subscribe(this._unsubscribeAndRecycle());
    }
  };

  return RetrySubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/retryWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retryWhen = retryWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function retryWhen(notifier) {
  return function (source) {
    return source.lift(new RetryWhenOperator(notifier, source));
  };
}

var RetryWhenOperator =
/*@__PURE__*/
function () {
  function RetryWhenOperator(notifier, source) {
    this.notifier = notifier;
    this.source = source;
  }

  RetryWhenOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
  };

  return RetryWhenOperator;
}();

var RetryWhenSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RetryWhenSubscriber, _super);

  function RetryWhenSubscriber(destination, notifier, source) {
    var _this = _super.call(this, destination) || this;

    _this.notifier = notifier;
    _this.source = source;
    return _this;
  }

  RetryWhenSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var errors = this.errors;
      var retries = this.retries;
      var retriesSubscription = this.retriesSubscription;

      if (!retries) {
        errors = new _Subject.Subject();

        try {
          var notifier = this.notifier;
          retries = notifier(errors);
        } catch (e) {
          return _super.prototype.error.call(this, e);
        }

        retriesSubscription = (0, _subscribeToResult.subscribeToResult)(this, retries);
      } else {
        this.errors = null;
        this.retriesSubscription = null;
      }

      this._unsubscribeAndRecycle();

      this.errors = errors;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      errors.next(err);
    }
  };

  RetryWhenSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        errors = _a.errors,
        retriesSubscription = _a.retriesSubscription;

    if (errors) {
      errors.unsubscribe();
      this.errors = null;
    }

    if (retriesSubscription) {
      retriesSubscription.unsubscribe();
      this.retriesSubscription = null;
    }

    this.retries = null;
  };

  RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var _unsubscribe = this._unsubscribe;
    this._unsubscribe = null;

    this._unsubscribeAndRecycle();

    this._unsubscribe = _unsubscribe;
    this.source.subscribe(this);
  };

  return RetryWhenSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/sample.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = sample;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function sample(notifier) {
  return function (source) {
    return source.lift(new SampleOperator(notifier));
  };
}

var SampleOperator =
/*@__PURE__*/
function () {
  function SampleOperator(notifier) {
    this.notifier = notifier;
  }

  SampleOperator.prototype.call = function (subscriber, source) {
    var sampleSubscriber = new SampleSubscriber(subscriber);
    var subscription = source.subscribe(sampleSubscriber);
    subscription.add((0, _subscribeToResult.subscribeToResult)(sampleSubscriber, this.notifier));
    return subscription;
  };

  return SampleOperator;
}();

var SampleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SampleSubscriber, _super);

  function SampleSubscriber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.hasValue = false;
    return _this;
  }

  SampleSubscriber.prototype._next = function (value) {
    this.value = value;
    this.hasValue = true;
  };

  SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.emitValue();
  };

  SampleSubscriber.prototype.notifyComplete = function () {
    this.emitValue();
  };

  SampleSubscriber.prototype.emitValue = function () {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.value);
    }
  };

  return SampleSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/sampleTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleTime = sampleTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _async = require("../scheduler/async");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */
function sampleTime(period, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    return source.lift(new SampleTimeOperator(period, scheduler));
  };
}

var SampleTimeOperator =
/*@__PURE__*/
function () {
  function SampleTimeOperator(period, scheduler) {
    this.period = period;
    this.scheduler = scheduler;
  }

  SampleTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
  };

  return SampleTimeOperator;
}();

var SampleTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SampleTimeSubscriber, _super);

  function SampleTimeSubscriber(destination, period, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.period = period;
    _this.scheduler = scheduler;
    _this.hasValue = false;

    _this.add(scheduler.schedule(dispatchNotification, period, {
      subscriber: _this,
      period: period
    }));

    return _this;
  }

  SampleTimeSubscriber.prototype._next = function (value) {
    this.lastValue = value;
    this.hasValue = true;
  };

  SampleTimeSubscriber.prototype.notifyNext = function () {
    if (this.hasValue) {
      this.hasValue = false;
      this.destination.next(this.lastValue);
    }
  };

  return SampleTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchNotification(state) {
  var subscriber = state.subscriber,
      period = state.period;
  subscriber.notifyNext();
  this.schedule(state, period);
}
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js"}],"node_modules/rxjs/_esm5/internal/operators/sequenceEqual.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequenceEqual = sequenceEqual;
exports.SequenceEqualSubscriber = exports.SequenceEqualOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function sequenceEqual(compareTo, comparator) {
  return function (source) {
    return source.lift(new SequenceEqualOperator(compareTo, comparator));
  };
}

var SequenceEqualOperator =
/*@__PURE__*/
function () {
  function SequenceEqualOperator(compareTo, comparator) {
    this.compareTo = compareTo;
    this.comparator = comparator;
  }

  SequenceEqualOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
  };

  return SequenceEqualOperator;
}();

exports.SequenceEqualOperator = SequenceEqualOperator;

var SequenceEqualSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SequenceEqualSubscriber, _super);

  function SequenceEqualSubscriber(destination, compareTo, comparator) {
    var _this = _super.call(this, destination) || this;

    _this.compareTo = compareTo;
    _this.comparator = comparator;
    _this._a = [];
    _this._b = [];
    _this._oneComplete = false;

    _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));

    return _this;
  }

  SequenceEqualSubscriber.prototype._next = function (value) {
    if (this._oneComplete && this._b.length === 0) {
      this.emit(false);
    } else {
      this._a.push(value);

      this.checkValues();
    }
  };

  SequenceEqualSubscriber.prototype._complete = function () {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }

    this.unsubscribe();
  };

  SequenceEqualSubscriber.prototype.checkValues = function () {
    var _c = this,
        _a = _c._a,
        _b = _c._b,
        comparator = _c.comparator;

    while (_a.length > 0 && _b.length > 0) {
      var a = _a.shift();

      var b = _b.shift();

      var areEqual = false;

      try {
        areEqual = comparator ? comparator(a, b) : a === b;
      } catch (e) {
        this.destination.error(e);
      }

      if (!areEqual) {
        this.emit(false);
      }
    }
  };

  SequenceEqualSubscriber.prototype.emit = function (value) {
    var destination = this.destination;
    destination.next(value);
    destination.complete();
  };

  SequenceEqualSubscriber.prototype.nextB = function (value) {
    if (this._oneComplete && this._a.length === 0) {
      this.emit(false);
    } else {
      this._b.push(value);

      this.checkValues();
    }
  };

  SequenceEqualSubscriber.prototype.completeB = function () {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }
  };

  return SequenceEqualSubscriber;
}(_Subscriber.Subscriber);

exports.SequenceEqualSubscriber = SequenceEqualSubscriber;

var SequenceEqualCompareToSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SequenceEqualCompareToSubscriber, _super);

  function SequenceEqualCompareToSubscriber(destination, parent) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    return _this;
  }

  SequenceEqualCompareToSubscriber.prototype._next = function (value) {
    this.parent.nextB(value);
  };

  SequenceEqualCompareToSubscriber.prototype._error = function (err) {
    this.parent.error(err);
    this.unsubscribe();
  };

  SequenceEqualCompareToSubscriber.prototype._complete = function () {
    this.parent.completeB();
    this.unsubscribe();
  };

  return SequenceEqualCompareToSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/share.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.share = share;

var _multicast = require("./multicast");

var _refCount = require("./refCount");

var _Subject = require("../Subject");

/** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */
function shareSubjectFactory() {
  return new _Subject.Subject();
}

function share() {
  return function (source) {
    return (0, _refCount.refCount)()((0, _multicast.multicast)(shareSubjectFactory)(source));
  };
}
},{"./multicast":"node_modules/rxjs/_esm5/internal/operators/multicast.js","./refCount":"node_modules/rxjs/_esm5/internal/operators/refCount.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js"}],"node_modules/rxjs/_esm5/internal/operators/shareReplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareReplay = shareReplay;

var _ReplaySubject = require("../ReplaySubject");

/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */
function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var config;

  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    config = configOrBufferSize;
  } else {
    config = {
      bufferSize: configOrBufferSize,
      windowTime: windowTime,
      refCount: false,
      scheduler: scheduler
    };
  }

  return function (source) {
    return source.lift(shareReplayOperator(config));
  };
}

function shareReplayOperator(_a) {
  var _b = _a.bufferSize,
      bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b,
      _c = _a.windowTime,
      windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c,
      useRefCount = _a.refCount,
      scheduler = _a.scheduler;
  var subject;
  var refCount = 0;
  var subscription;
  var hasError = false;
  var isComplete = false;
  return function shareReplayOperation(source) {
    refCount++;

    if (!subject || hasError) {
      hasError = false;
      subject = new _ReplaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
      subscription = source.subscribe({
        next: function (value) {
          subject.next(value);
        },
        error: function (err) {
          hasError = true;
          subject.error(err);
        },
        complete: function () {
          isComplete = true;
          subject.complete();
        }
      });
    }

    var innerSub = subject.subscribe(this);
    this.add(function () {
      refCount--;
      innerSub.unsubscribe();

      if (subscription && !isComplete && useRefCount && refCount === 0) {
        subscription.unsubscribe();
        subscription = undefined;
        subject = undefined;
      }
    });
  };
}
},{"../ReplaySubject":"node_modules/rxjs/_esm5/internal/ReplaySubject.js"}],"node_modules/rxjs/_esm5/internal/operators/single.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.single = single;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _EmptyError = require("../util/EmptyError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */
function single(predicate) {
  return function (source) {
    return source.lift(new SingleOperator(predicate, source));
  };
}

var SingleOperator =
/*@__PURE__*/
function () {
  function SingleOperator(predicate, source) {
    this.predicate = predicate;
    this.source = source;
  }

  SingleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
  };

  return SingleOperator;
}();

var SingleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SingleSubscriber, _super);

  function SingleSubscriber(destination, predicate, source) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.source = source;
    _this.seenValue = false;
    _this.index = 0;
    return _this;
  }

  SingleSubscriber.prototype.applySingleValue = function (value) {
    if (this.seenValue) {
      this.destination.error('Sequence contains more than one element');
    } else {
      this.seenValue = true;
      this.singleValue = value;
    }
  };

  SingleSubscriber.prototype._next = function (value) {
    var index = this.index++;

    if (this.predicate) {
      this.tryNext(value, index);
    } else {
      this.applySingleValue(value);
    }
  };

  SingleSubscriber.prototype.tryNext = function (value, index) {
    try {
      if (this.predicate(value, index, this.source)) {
        this.applySingleValue(value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  };

  SingleSubscriber.prototype._complete = function () {
    var destination = this.destination;

    if (this.index > 0) {
      destination.next(this.seenValue ? this.singleValue : undefined);
      destination.complete();
    } else {
      destination.error(new _EmptyError.EmptyError());
    }
  };

  return SingleSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../util/EmptyError":"node_modules/rxjs/_esm5/internal/util/EmptyError.js"}],"node_modules/rxjs/_esm5/internal/operators/skip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skip = skip;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function skip(count) {
  return function (source) {
    return source.lift(new SkipOperator(count));
  };
}

var SkipOperator =
/*@__PURE__*/
function () {
  function SkipOperator(total) {
    this.total = total;
  }

  SkipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SkipSubscriber(subscriber, this.total));
  };

  return SkipOperator;
}();

var SkipSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SkipSubscriber, _super);

  function SkipSubscriber(destination, total) {
    var _this = _super.call(this, destination) || this;

    _this.total = total;
    _this.count = 0;
    return _this;
  }

  SkipSubscriber.prototype._next = function (x) {
    if (++this.count > this.total) {
      this.destination.next(x);
    }
  };

  return SkipSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/skipLast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipLast = skipLast;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _ArgumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */
function skipLast(count) {
  return function (source) {
    return source.lift(new SkipLastOperator(count));
  };
}

var SkipLastOperator =
/*@__PURE__*/
function () {
  function SkipLastOperator(_skipCount) {
    this._skipCount = _skipCount;

    if (this._skipCount < 0) {
      throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
    }
  }

  SkipLastOperator.prototype.call = function (subscriber, source) {
    if (this._skipCount === 0) {
      return source.subscribe(new _Subscriber.Subscriber(subscriber));
    } else {
      return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
    }
  };

  return SkipLastOperator;
}();

var SkipLastSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SkipLastSubscriber, _super);

  function SkipLastSubscriber(destination, _skipCount) {
    var _this = _super.call(this, destination) || this;

    _this._skipCount = _skipCount;
    _this._count = 0;
    _this._ring = new Array(_skipCount);
    return _this;
  }

  SkipLastSubscriber.prototype._next = function (value) {
    var skipCount = this._skipCount;
    var count = this._count++;

    if (count < skipCount) {
      this._ring[count] = value;
    } else {
      var currentIndex = count % skipCount;
      var ring = this._ring;
      var oldValue = ring[currentIndex];
      ring[currentIndex] = value;
      this.destination.next(oldValue);
    }
  };

  return SkipLastSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../util/ArgumentOutOfRangeError":"node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js"}],"node_modules/rxjs/_esm5/internal/operators/skipUntil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipUntil = skipUntil;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function skipUntil(notifier) {
  return function (source) {
    return source.lift(new SkipUntilOperator(notifier));
  };
}

var SkipUntilOperator =
/*@__PURE__*/
function () {
  function SkipUntilOperator(notifier) {
    this.notifier = notifier;
  }

  SkipUntilOperator.prototype.call = function (destination, source) {
    return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
  };

  return SkipUntilOperator;
}();

var SkipUntilSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SkipUntilSubscriber, _super);

  function SkipUntilSubscriber(destination, notifier) {
    var _this = _super.call(this, destination) || this;

    _this.hasValue = false;
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(_this, undefined, undefined);

    _this.add(innerSubscriber);

    _this.innerSubscription = innerSubscriber;
    (0, _subscribeToResult.subscribeToResult)(_this, notifier, undefined, undefined, innerSubscriber);
    return _this;
  }

  SkipUntilSubscriber.prototype._next = function (value) {
    if (this.hasValue) {
      _super.prototype._next.call(this, value);
    }
  };

  SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.hasValue = true;

    if (this.innerSubscription) {
      this.innerSubscription.unsubscribe();
    }
  };

  SkipUntilSubscriber.prototype.notifyComplete = function () {};

  return SkipUntilSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/skipWhile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipWhile = skipWhile;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function skipWhile(predicate) {
  return function (source) {
    return source.lift(new SkipWhileOperator(predicate));
  };
}

var SkipWhileOperator =
/*@__PURE__*/
function () {
  function SkipWhileOperator(predicate) {
    this.predicate = predicate;
  }

  SkipWhileOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
  };

  return SkipWhileOperator;
}();

var SkipWhileSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SkipWhileSubscriber, _super);

  function SkipWhileSubscriber(destination, predicate) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.skipping = true;
    _this.index = 0;
    return _this;
  }

  SkipWhileSubscriber.prototype._next = function (value) {
    var destination = this.destination;

    if (this.skipping) {
      this.tryCallPredicate(value);
    }

    if (!this.skipping) {
      destination.next(value);
    }
  };

  SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
    try {
      var result = this.predicate(value, this.index++);
      this.skipping = Boolean(result);
    } catch (err) {
      this.destination.error(err);
    }
  };

  return SkipWhileSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/startWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startWith = startWith;

var _concat = require("../observable/concat");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */
function startWith() {
  var array = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }

  var scheduler = array[array.length - 1];

  if ((0, _isScheduler.isScheduler)(scheduler)) {
    array.pop();
    return function (source) {
      return (0, _concat.concat)(array, source, scheduler);
    };
  } else {
    return function (source) {
      return (0, _concat.concat)(array, source);
    };
  }
}
},{"../observable/concat":"node_modules/rxjs/_esm5/internal/observable/concat.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/operators/subscribeOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeOn = subscribeOn;

var _SubscribeOnObservable = require("../observable/SubscribeOnObservable");

/** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function subscribeOnOperatorFunction(source) {
    return source.lift(new SubscribeOnOperator(scheduler, delay));
  };
}

var SubscribeOnOperator =
/*@__PURE__*/
function () {
  function SubscribeOnOperator(scheduler, delay) {
    this.scheduler = scheduler;
    this.delay = delay;
  }

  SubscribeOnOperator.prototype.call = function (subscriber, source) {
    return new _SubscribeOnObservable.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
  };

  return SubscribeOnOperator;
}();
},{"../observable/SubscribeOnObservable":"node_modules/rxjs/_esm5/internal/observable/SubscribeOnObservable.js"}],"node_modules/rxjs/_esm5/internal/operators/switchMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMap = switchMap;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _map = require("./map");

var _from = require("../observable/from");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_InnerSubscriber,_util_subscribeToResult,_map,_observable_from PURE_IMPORTS_END */
function switchMap(project, resultSelector) {
  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(switchMap(function (a, i) {
        return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }

  return function (source) {
    return source.lift(new SwitchMapOperator(project));
  };
}

var SwitchMapOperator =
/*@__PURE__*/
function () {
  function SwitchMapOperator(project) {
    this.project = project;
  }

  SwitchMapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
  };

  return SwitchMapOperator;
}();

var SwitchMapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SwitchMapSubscriber, _super);

  function SwitchMapSubscriber(destination, project) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.index = 0;
    return _this;
  }

  SwitchMapSubscriber.prototype._next = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (error) {
      this.destination.error(error);
      return;
    }

    this._innerSub(result, value, index);
  };

  SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
    var innerSubscription = this.innerSubscription;

    if (innerSubscription) {
      innerSubscription.unsubscribe();
    }

    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    this.innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, result, value, index, innerSubscriber);
  };

  SwitchMapSubscriber.prototype._complete = function () {
    var innerSubscription = this.innerSubscription;

    if (!innerSubscription || innerSubscription.closed) {
      _super.prototype._complete.call(this);
    }

    this.unsubscribe();
  };

  SwitchMapSubscriber.prototype._unsubscribe = function () {
    this.innerSubscription = null;
  };

  SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var destination = this.destination;
    destination.remove(innerSub);
    this.innerSubscription = null;

    if (this.isStopped) {
      _super.prototype._complete.call(this);
    }
  };

  SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  return SwitchMapSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"node_modules/rxjs/_esm5/internal/InnerSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","./map":"node_modules/rxjs/_esm5/internal/operators/map.js","../observable/from":"node_modules/rxjs/_esm5/internal/observable/from.js"}],"node_modules/rxjs/_esm5/internal/operators/switchAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchAll = switchAll;

var _switchMap = require("./switchMap");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */
function switchAll() {
  return (0, _switchMap.switchMap)(_identity.identity);
}
},{"./switchMap":"node_modules/rxjs/_esm5/internal/operators/switchMap.js","../util/identity":"node_modules/rxjs/_esm5/internal/util/identity.js"}],"node_modules/rxjs/_esm5/internal/operators/switchMapTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMapTo = switchMapTo;

var _switchMap = require("./switchMap");

/** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */
function switchMapTo(innerObservable, resultSelector) {
  return resultSelector ? (0, _switchMap.switchMap)(function () {
    return innerObservable;
  }, resultSelector) : (0, _switchMap.switchMap)(function () {
    return innerObservable;
  });
}
},{"./switchMap":"node_modules/rxjs/_esm5/internal/operators/switchMap.js"}],"node_modules/rxjs/_esm5/internal/operators/takeUntil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeUntil = takeUntil;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function takeUntil(notifier) {
  return function (source) {
    return source.lift(new TakeUntilOperator(notifier));
  };
}

var TakeUntilOperator =
/*@__PURE__*/
function () {
  function TakeUntilOperator(notifier) {
    this.notifier = notifier;
  }

  TakeUntilOperator.prototype.call = function (subscriber, source) {
    var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    var notifierSubscription = (0, _subscribeToResult.subscribeToResult)(takeUntilSubscriber, this.notifier);

    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }

    return takeUntilSubscriber;
  };

  return TakeUntilOperator;
}();

var TakeUntilSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TakeUntilSubscriber, _super);

  function TakeUntilSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.seenValue = false;
    return _this;
  }

  TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.seenValue = true;
    this.complete();
  };

  TakeUntilSubscriber.prototype.notifyComplete = function () {};

  return TakeUntilSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/takeWhile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeWhile = takeWhile;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }

  return function (source) {
    return source.lift(new TakeWhileOperator(predicate, inclusive));
  };
}

var TakeWhileOperator =
/*@__PURE__*/
function () {
  function TakeWhileOperator(predicate, inclusive) {
    this.predicate = predicate;
    this.inclusive = inclusive;
  }

  TakeWhileOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
  };

  return TakeWhileOperator;
}();

var TakeWhileSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TakeWhileSubscriber, _super);

  function TakeWhileSubscriber(destination, predicate, inclusive) {
    var _this = _super.call(this, destination) || this;

    _this.predicate = predicate;
    _this.inclusive = inclusive;
    _this.index = 0;
    return _this;
  }

  TakeWhileSubscriber.prototype._next = function (value) {
    var destination = this.destination;
    var result;

    try {
      result = this.predicate(value, this.index++);
    } catch (err) {
      destination.error(err);
      return;
    }

    this.nextOrComplete(value, result);
  };

  TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
    var destination = this.destination;

    if (Boolean(predicateResult)) {
      destination.next(value);
    } else {
      if (this.inclusive) {
        destination.next(value);
      }

      destination.complete();
    }
  };

  return TakeWhileSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js"}],"node_modules/rxjs/_esm5/internal/operators/tap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tap = tap;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _noop = require("../util/noop");

var _isFunction = require("../util/isFunction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
function tap(nextOrObserver, error, complete) {
  return function tapOperatorFunction(source) {
    return source.lift(new DoOperator(nextOrObserver, error, complete));
  };
}

var DoOperator =
/*@__PURE__*/
function () {
  function DoOperator(nextOrObserver, error, complete) {
    this.nextOrObserver = nextOrObserver;
    this.error = error;
    this.complete = complete;
  }

  DoOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
  };

  return DoOperator;
}();

var TapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TapSubscriber, _super);

  function TapSubscriber(destination, observerOrNext, error, complete) {
    var _this = _super.call(this, destination) || this;

    _this._tapNext = _noop.noop;
    _this._tapError = _noop.noop;
    _this._tapComplete = _noop.noop;
    _this._tapError = error || _noop.noop;
    _this._tapComplete = complete || _noop.noop;

    if ((0, _isFunction.isFunction)(observerOrNext)) {
      _this._context = _this;
      _this._tapNext = observerOrNext;
    } else if (observerOrNext) {
      _this._context = observerOrNext;
      _this._tapNext = observerOrNext.next || _noop.noop;
      _this._tapError = observerOrNext.error || _noop.noop;
      _this._tapComplete = observerOrNext.complete || _noop.noop;
    }

    return _this;
  }

  TapSubscriber.prototype._next = function (value) {
    try {
      this._tapNext.call(this._context, value);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(value);
  };

  TapSubscriber.prototype._error = function (err) {
    try {
      this._tapError.call(this._context, err);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.error(err);
  };

  TapSubscriber.prototype._complete = function () {
    try {
      this._tapComplete.call(this._context);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    return this.destination.complete();
  };

  return TapSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../util/noop":"node_modules/rxjs/_esm5/internal/util/noop.js","../util/isFunction":"node_modules/rxjs/_esm5/internal/util/isFunction.js"}],"node_modules/rxjs/_esm5/internal/operators/throttleTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttleTime = throttleTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _async = require("../scheduler/async");

var _throttle = require("./throttle");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */
function throttleTime(duration, scheduler, config) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  if (config === void 0) {
    config = _throttle.defaultThrottleConfig;
  }

  return function (source) {
    return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
  };
}

var ThrottleTimeOperator =
/*@__PURE__*/
function () {
  function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
    this.duration = duration;
    this.scheduler = scheduler;
    this.leading = leading;
    this.trailing = trailing;
  }

  ThrottleTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
  };

  return ThrottleTimeOperator;
}();

var ThrottleTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ThrottleTimeSubscriber, _super);

  function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
    var _this = _super.call(this, destination) || this;

    _this.duration = duration;
    _this.scheduler = scheduler;
    _this.leading = leading;
    _this.trailing = trailing;
    _this._hasTrailingValue = false;
    _this._trailingValue = null;
    return _this;
  }

  ThrottleTimeSubscriber.prototype._next = function (value) {
    if (this.throttled) {
      if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    } else {
      this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
        subscriber: this
      }));

      if (this.leading) {
        this.destination.next(value);
      } else if (this.trailing) {
        this._trailingValue = value;
        this._hasTrailingValue = true;
      }
    }
  };

  ThrottleTimeSubscriber.prototype._complete = function () {
    if (this._hasTrailingValue) {
      this.destination.next(this._trailingValue);
      this.destination.complete();
    } else {
      this.destination.complete();
    }
  };

  ThrottleTimeSubscriber.prototype.clearThrottle = function () {
    var throttled = this.throttled;

    if (throttled) {
      if (this.trailing && this._hasTrailingValue) {
        this.destination.next(this._trailingValue);
        this._trailingValue = null;
        this._hasTrailingValue = false;
      }

      throttled.unsubscribe();
      this.remove(throttled);
      this.throttled = null;
    }
  };

  return ThrottleTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchNext(arg) {
  var subscriber = arg.subscriber;
  subscriber.clearThrottle();
}
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","./throttle":"node_modules/rxjs/_esm5/internal/operators/throttle.js"}],"node_modules/rxjs/_esm5/internal/operators/timeoutWith.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeoutWith = timeoutWith;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _async = require("../scheduler/async");

var _isDate = require("../util/isDate");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function timeoutWith(due, withObservable, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return function (source) {
    var absoluteTimeout = (0, _isDate.isDate)(due);
    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
    return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  };
}

var TimeoutWithOperator =
/*@__PURE__*/
function () {
  function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
    this.waitFor = waitFor;
    this.absoluteTimeout = absoluteTimeout;
    this.withObservable = withObservable;
    this.scheduler = scheduler;
  }

  TimeoutWithOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  };

  return TimeoutWithOperator;
}();

var TimeoutWithSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TimeoutWithSubscriber, _super);

  function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.absoluteTimeout = absoluteTimeout;
    _this.waitFor = waitFor;
    _this.withObservable = withObservable;
    _this.scheduler = scheduler;
    _this.action = null;

    _this.scheduleTimeout();

    return _this;
  }

  TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
    var withObservable = subscriber.withObservable;

    subscriber._unsubscribeAndRecycle();

    subscriber.add((0, _subscribeToResult.subscribeToResult)(subscriber, withObservable));
  };

  TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
    var action = this.action;

    if (action) {
      this.action = action.schedule(this, this.waitFor);
    } else {
      this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
    }
  };

  TimeoutWithSubscriber.prototype._next = function (value) {
    if (!this.absoluteTimeout) {
      this.scheduleTimeout();
    }

    _super.prototype._next.call(this, value);
  };

  TimeoutWithSubscriber.prototype._unsubscribe = function () {
    this.action = null;
    this.scheduler = null;
    this.withObservable = null;
  };

  return TimeoutWithSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isDate":"node_modules/rxjs/_esm5/internal/util/isDate.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/timeout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeout = timeout;

var _async = require("../scheduler/async");

var _TimeoutError = require("../util/TimeoutError");

var _timeoutWith = require("./timeoutWith");

var _throwError = require("../observable/throwError");

/** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */
function timeout(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  return (0, _timeoutWith.timeoutWith)(due, (0, _throwError.throwError)(new _TimeoutError.TimeoutError()), scheduler);
}
},{"../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/TimeoutError":"node_modules/rxjs/_esm5/internal/util/TimeoutError.js","./timeoutWith":"node_modules/rxjs/_esm5/internal/operators/timeoutWith.js","../observable/throwError":"node_modules/rxjs/_esm5/internal/observable/throwError.js"}],"node_modules/rxjs/_esm5/internal/operators/toArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = toArray;

var _reduce = require("./reduce");

/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
function toArrayReducer(arr, item, index) {
  if (index === 0) {
    return [item];
  }

  arr.push(item);
  return arr;
}

function toArray() {
  return (0, _reduce.reduce)(toArrayReducer, []);
}
},{"./reduce":"node_modules/rxjs/_esm5/internal/operators/reduce.js"}],"node_modules/rxjs/_esm5/internal/operators/window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.window = window;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function window(windowBoundaries) {
  return function windowOperatorFunction(source) {
    return source.lift(new WindowOperator(windowBoundaries));
  };
}

var WindowOperator =
/*@__PURE__*/
function () {
  function WindowOperator(windowBoundaries) {
    this.windowBoundaries = windowBoundaries;
  }

  WindowOperator.prototype.call = function (subscriber, source) {
    var windowSubscriber = new WindowSubscriber(subscriber);
    var sourceSubscription = source.subscribe(windowSubscriber);

    if (!sourceSubscription.closed) {
      windowSubscriber.add((0, _subscribeToResult.subscribeToResult)(windowSubscriber, this.windowBoundaries));
    }

    return sourceSubscription;
  };

  return WindowOperator;
}();

var WindowSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowSubscriber, _super);

  function WindowSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.window = new _Subject.Subject();
    destination.next(_this.window);
    return _this;
  }

  WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openWindow();
  };

  WindowSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  WindowSubscriber.prototype.notifyComplete = function (innerSub) {
    this._complete();
  };

  WindowSubscriber.prototype._next = function (value) {
    this.window.next(value);
  };

  WindowSubscriber.prototype._error = function (err) {
    this.window.error(err);
    this.destination.error(err);
  };

  WindowSubscriber.prototype._complete = function () {
    this.window.complete();
    this.destination.complete();
  };

  WindowSubscriber.prototype._unsubscribe = function () {
    this.window = null;
  };

  WindowSubscriber.prototype.openWindow = function () {
    var prevWindow = this.window;

    if (prevWindow) {
      prevWindow.complete();
    }

    var destination = this.destination;
    var newWindow = this.window = new _Subject.Subject();
    destination.next(newWindow);
  };

  return WindowSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/windowCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowCount = windowCount;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Subject = require("../Subject");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */
function windowCount(windowSize, startWindowEvery) {
  if (startWindowEvery === void 0) {
    startWindowEvery = 0;
  }

  return function windowCountOperatorFunction(source) {
    return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
  };
}

var WindowCountOperator =
/*@__PURE__*/
function () {
  function WindowCountOperator(windowSize, startWindowEvery) {
    this.windowSize = windowSize;
    this.startWindowEvery = startWindowEvery;
  }

  WindowCountOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
  };

  return WindowCountOperator;
}();

var WindowCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowCountSubscriber, _super);

  function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.windowSize = windowSize;
    _this.startWindowEvery = startWindowEvery;
    _this.windows = [new _Subject.Subject()];
    _this.count = 0;
    destination.next(_this.windows[0]);
    return _this;
  }

  WindowCountSubscriber.prototype._next = function (value) {
    var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
    var destination = this.destination;
    var windowSize = this.windowSize;
    var windows = this.windows;
    var len = windows.length;

    for (var i = 0; i < len && !this.closed; i++) {
      windows[i].next(value);
    }

    var c = this.count - windowSize + 1;

    if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
      windows.shift().complete();
    }

    if (++this.count % startWindowEvery === 0 && !this.closed) {
      var window_1 = new _Subject.Subject();
      windows.push(window_1);
      destination.next(window_1);
    }
  };

  WindowCountSubscriber.prototype._error = function (err) {
    var windows = this.windows;

    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().error(err);
      }
    }

    this.destination.error(err);
  };

  WindowCountSubscriber.prototype._complete = function () {
    var windows = this.windows;

    if (windows) {
      while (windows.length > 0 && !this.closed) {
        windows.shift().complete();
      }
    }

    this.destination.complete();
  };

  WindowCountSubscriber.prototype._unsubscribe = function () {
    this.count = 0;
    this.windows = null;
  };

  return WindowCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js"}],"node_modules/rxjs/_esm5/internal/operators/windowTime.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowTime = windowTime;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _async = require("../scheduler/async");

var _Subscriber = require("../Subscriber");

var _isNumeric = require("../util/isNumeric");

var _isScheduler = require("../util/isScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function windowTime(windowTimeSpan) {
  var scheduler = _async.async;
  var windowCreationInterval = null;
  var maxWindowSize = Number.POSITIVE_INFINITY;

  if ((0, _isScheduler.isScheduler)(arguments[3])) {
    scheduler = arguments[3];
  }

  if ((0, _isScheduler.isScheduler)(arguments[2])) {
    scheduler = arguments[2];
  } else if ((0, _isNumeric.isNumeric)(arguments[2])) {
    maxWindowSize = arguments[2];
  }

  if ((0, _isScheduler.isScheduler)(arguments[1])) {
    scheduler = arguments[1];
  } else if ((0, _isNumeric.isNumeric)(arguments[1])) {
    windowCreationInterval = arguments[1];
  }

  return function windowTimeOperatorFunction(source) {
    return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
  };
}

var WindowTimeOperator =
/*@__PURE__*/
function () {
  function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
    this.windowTimeSpan = windowTimeSpan;
    this.windowCreationInterval = windowCreationInterval;
    this.maxWindowSize = maxWindowSize;
    this.scheduler = scheduler;
  }

  WindowTimeOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
  };

  return WindowTimeOperator;
}();

var CountedSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CountedSubject, _super);

  function CountedSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._numberOfNextedValues = 0;
    return _this;
  }

  CountedSubject.prototype.next = function (value) {
    this._numberOfNextedValues++;

    _super.prototype.next.call(this, value);
  };

  Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
    get: function () {
      return this._numberOfNextedValues;
    },
    enumerable: true,
    configurable: true
  });
  return CountedSubject;
}(_Subject.Subject);

var WindowTimeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowTimeSubscriber, _super);

  function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.windowTimeSpan = windowTimeSpan;
    _this.windowCreationInterval = windowCreationInterval;
    _this.maxWindowSize = maxWindowSize;
    _this.scheduler = scheduler;
    _this.windows = [];

    var window = _this.openWindow();

    if (windowCreationInterval !== null && windowCreationInterval >= 0) {
      var closeState = {
        subscriber: _this,
        window: window,
        context: null
      };
      var creationState = {
        windowTimeSpan: windowTimeSpan,
        windowCreationInterval: windowCreationInterval,
        subscriber: _this,
        scheduler: scheduler
      };

      _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));

      _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
    } else {
      var timeSpanOnlyState = {
        subscriber: _this,
        window: window,
        windowTimeSpan: windowTimeSpan
      };

      _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
    }

    return _this;
  }

  WindowTimeSubscriber.prototype._next = function (value) {
    var windows = this.windows;
    var len = windows.length;

    for (var i = 0; i < len; i++) {
      var window_1 = windows[i];

      if (!window_1.closed) {
        window_1.next(value);

        if (window_1.numberOfNextedValues >= this.maxWindowSize) {
          this.closeWindow(window_1);
        }
      }
    }
  };

  WindowTimeSubscriber.prototype._error = function (err) {
    var windows = this.windows;

    while (windows.length > 0) {
      windows.shift().error(err);
    }

    this.destination.error(err);
  };

  WindowTimeSubscriber.prototype._complete = function () {
    var windows = this.windows;

    while (windows.length > 0) {
      var window_2 = windows.shift();

      if (!window_2.closed) {
        window_2.complete();
      }
    }

    this.destination.complete();
  };

  WindowTimeSubscriber.prototype.openWindow = function () {
    var window = new CountedSubject();
    this.windows.push(window);
    var destination = this.destination;
    destination.next(window);
    return window;
  };

  WindowTimeSubscriber.prototype.closeWindow = function (window) {
    window.complete();
    var windows = this.windows;
    windows.splice(windows.indexOf(window), 1);
  };

  return WindowTimeSubscriber;
}(_Subscriber.Subscriber);

function dispatchWindowTimeSpanOnly(state) {
  var subscriber = state.subscriber,
      windowTimeSpan = state.windowTimeSpan,
      window = state.window;

  if (window) {
    subscriber.closeWindow(window);
  }

  state.window = subscriber.openWindow();
  this.schedule(state, windowTimeSpan);
}

function dispatchWindowCreation(state) {
  var windowTimeSpan = state.windowTimeSpan,
      subscriber = state.subscriber,
      scheduler = state.scheduler,
      windowCreationInterval = state.windowCreationInterval;
  var window = subscriber.openWindow();
  var action = this;
  var context = {
    action: action,
    subscription: null
  };
  var timeSpanState = {
    subscriber: subscriber,
    window: window,
    context: context
  };
  context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
  action.add(context.subscription);
  action.schedule(state, windowCreationInterval);
}

function dispatchWindowClose(state) {
  var subscriber = state.subscriber,
      window = state.window,
      context = state.context;

  if (context && context.action && context.subscription) {
    context.action.remove(context.subscription);
  }

  subscriber.closeWindow(window);
}
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../scheduler/async":"node_modules/rxjs/_esm5/internal/scheduler/async.js","../Subscriber":"node_modules/rxjs/_esm5/internal/Subscriber.js","../util/isNumeric":"node_modules/rxjs/_esm5/internal/util/isNumeric.js","../util/isScheduler":"node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"node_modules/rxjs/_esm5/internal/operators/windowToggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowToggle = windowToggle;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _Subscription = require("../Subscription");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function windowToggle(openings, closingSelector) {
  return function (source) {
    return source.lift(new WindowToggleOperator(openings, closingSelector));
  };
}

var WindowToggleOperator =
/*@__PURE__*/
function () {
  function WindowToggleOperator(openings, closingSelector) {
    this.openings = openings;
    this.closingSelector = closingSelector;
  }

  WindowToggleOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
  };

  return WindowToggleOperator;
}();

var WindowToggleSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowToggleSubscriber, _super);

  function WindowToggleSubscriber(destination, openings, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.openings = openings;
    _this.closingSelector = closingSelector;
    _this.contexts = [];

    _this.add(_this.openSubscription = (0, _subscribeToResult.subscribeToResult)(_this, openings, openings));

    return _this;
  }

  WindowToggleSubscriber.prototype._next = function (value) {
    var contexts = this.contexts;

    if (contexts) {
      var len = contexts.length;

      for (var i = 0; i < len; i++) {
        contexts[i].window.next(value);
      }
    }
  };

  WindowToggleSubscriber.prototype._error = function (err) {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_1 = contexts[index];
        context_1.window.error(err);
        context_1.subscription.unsubscribe();
      }
    }

    _super.prototype._error.call(this, err);
  };

  WindowToggleSubscriber.prototype._complete = function () {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_2 = contexts[index];
        context_2.window.complete();
        context_2.subscription.unsubscribe();
      }
    }

    _super.prototype._complete.call(this);
  };

  WindowToggleSubscriber.prototype._unsubscribe = function () {
    var contexts = this.contexts;
    this.contexts = null;

    if (contexts) {
      var len = contexts.length;
      var index = -1;

      while (++index < len) {
        var context_3 = contexts[index];
        context_3.window.unsubscribe();
        context_3.subscription.unsubscribe();
      }
    }
  };

  WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (outerValue === this.openings) {
      var closingNotifier = void 0;

      try {
        var closingSelector = this.closingSelector;
        closingNotifier = closingSelector(innerValue);
      } catch (e) {
        return this.error(e);
      }

      var window_1 = new _Subject.Subject();
      var subscription = new _Subscription.Subscription();
      var context_4 = {
        window: window_1,
        subscription: subscription
      };
      this.contexts.push(context_4);
      var innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier, context_4);

      if (innerSubscription.closed) {
        this.closeWindow(this.contexts.length - 1);
      } else {
        innerSubscription.context = context_4;
        subscription.add(innerSubscription);
      }

      this.destination.next(window_1);
    } else {
      this.closeWindow(this.contexts.indexOf(outerValue));
    }
  };

  WindowToggleSubscriber.prototype.notifyError = function (err) {
    this.error(err);
  };

  WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
    if (inner !== this.openSubscription) {
      this.closeWindow(this.contexts.indexOf(inner.context));
    }
  };

  WindowToggleSubscriber.prototype.closeWindow = function (index) {
    if (index === -1) {
      return;
    }

    var contexts = this.contexts;
    var context = contexts[index];
    var window = context.window,
        subscription = context.subscription;
    contexts.splice(index, 1);
    window.complete();
    subscription.unsubscribe();
  };

  return WindowToggleSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/windowWhen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowWhen = windowWhen;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function windowWhen(closingSelector) {
  return function windowWhenOperatorFunction(source) {
    return source.lift(new WindowOperator(closingSelector));
  };
}

var WindowOperator =
/*@__PURE__*/
function () {
  function WindowOperator(closingSelector) {
    this.closingSelector = closingSelector;
  }

  WindowOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
  };

  return WindowOperator;
}();

var WindowSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WindowSubscriber, _super);

  function WindowSubscriber(destination, closingSelector) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    _this.closingSelector = closingSelector;

    _this.openWindow();

    return _this;
  }

  WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.openWindow(innerSub);
  };

  WindowSubscriber.prototype.notifyError = function (error, innerSub) {
    this._error(error);
  };

  WindowSubscriber.prototype.notifyComplete = function (innerSub) {
    this.openWindow(innerSub);
  };

  WindowSubscriber.prototype._next = function (value) {
    this.window.next(value);
  };

  WindowSubscriber.prototype._error = function (err) {
    this.window.error(err);
    this.destination.error(err);
    this.unsubscribeClosingNotification();
  };

  WindowSubscriber.prototype._complete = function () {
    this.window.complete();
    this.destination.complete();
    this.unsubscribeClosingNotification();
  };

  WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
    if (this.closingNotification) {
      this.closingNotification.unsubscribe();
    }
  };

  WindowSubscriber.prototype.openWindow = function (innerSub) {
    if (innerSub === void 0) {
      innerSub = null;
    }

    if (innerSub) {
      this.remove(innerSub);
      innerSub.unsubscribe();
    }

    var prevWindow = this.window;

    if (prevWindow) {
      prevWindow.complete();
    }

    var window = this.window = new _Subject.Subject();
    this.destination.next(window);
    var closingNotifier;

    try {
      var closingSelector = this.closingSelector;
      closingNotifier = closingSelector();
    } catch (e) {
      this.destination.error(e);
      this.window.error(e);
      return;
    }

    this.add(this.closingNotification = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier));
  };

  return WindowSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLatestFrom = withLatestFrom;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function withLatestFrom() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return function (source) {
    var project;

    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }

    var observables = args;
    return source.lift(new WithLatestFromOperator(observables, project));
  };
}

var WithLatestFromOperator =
/*@__PURE__*/
function () {
  function WithLatestFromOperator(observables, project) {
    this.observables = observables;
    this.project = project;
  }

  WithLatestFromOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
  };

  return WithLatestFromOperator;
}();

var WithLatestFromSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(WithLatestFromSubscriber, _super);

  function WithLatestFromSubscriber(destination, observables, project) {
    var _this = _super.call(this, destination) || this;

    _this.observables = observables;
    _this.project = project;
    _this.toRespond = [];
    var len = observables.length;
    _this.values = new Array(len);

    for (var i = 0; i < len; i++) {
      _this.toRespond.push(i);
    }

    for (var i = 0; i < len; i++) {
      var observable = observables[i];

      _this.add((0, _subscribeToResult.subscribeToResult)(_this, observable, observable, i));
    }

    return _this;
  }

  WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values[outerIndex] = innerValue;
    var toRespond = this.toRespond;

    if (toRespond.length > 0) {
      var found = toRespond.indexOf(outerIndex);

      if (found !== -1) {
        toRespond.splice(found, 1);
      }
    }
  };

  WithLatestFromSubscriber.prototype.notifyComplete = function () {};

  WithLatestFromSubscriber.prototype._next = function (value) {
    if (this.toRespond.length === 0) {
      var args = [value].concat(this.values);

      if (this.project) {
        this._tryProject(args);
      } else {
        this.destination.next(args);
      }
    }
  };

  WithLatestFromSubscriber.prototype._tryProject = function (args) {
    var result;

    try {
      result = this.project.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return WithLatestFromSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"node_modules/tslib/tslib.es6.js","../OuterSubscriber":"node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"node_modules/rxjs/_esm5/internal/operators/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;

var _zip = require("../observable/zip");

/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */
function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return function zipOperatorFunction(source) {
    return source.lift.call(_zip.zip.apply(void 0, [source].concat(observables)));
  };
}
},{"../observable/zip":"node_modules/rxjs/_esm5/internal/observable/zip.js"}],"node_modules/rxjs/_esm5/internal/operators/zipAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipAll = zipAll;

var _zip = require("../observable/zip");

/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */
function zipAll(project) {
  return function (source) {
    return source.lift(new _zip.ZipOperator(project));
  };
}
},{"../observable/zip":"node_modules/rxjs/_esm5/internal/observable/zip.js"}],"node_modules/rxjs/_esm5/operators/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "audit", {
  enumerable: true,
  get: function () {
    return _audit.audit;
  }
});
Object.defineProperty(exports, "auditTime", {
  enumerable: true,
  get: function () {
    return _auditTime.auditTime;
  }
});
Object.defineProperty(exports, "buffer", {
  enumerable: true,
  get: function () {
    return _buffer.buffer;
  }
});
Object.defineProperty(exports, "bufferCount", {
  enumerable: true,
  get: function () {
    return _bufferCount.bufferCount;
  }
});
Object.defineProperty(exports, "bufferTime", {
  enumerable: true,
  get: function () {
    return _bufferTime.bufferTime;
  }
});
Object.defineProperty(exports, "bufferToggle", {
  enumerable: true,
  get: function () {
    return _bufferToggle.bufferToggle;
  }
});
Object.defineProperty(exports, "bufferWhen", {
  enumerable: true,
  get: function () {
    return _bufferWhen.bufferWhen;
  }
});
Object.defineProperty(exports, "catchError", {
  enumerable: true,
  get: function () {
    return _catchError.catchError;
  }
});
Object.defineProperty(exports, "combineAll", {
  enumerable: true,
  get: function () {
    return _combineAll.combineAll;
  }
});
Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});
Object.defineProperty(exports, "concatAll", {
  enumerable: true,
  get: function () {
    return _concatAll.concatAll;
  }
});
Object.defineProperty(exports, "concatMap", {
  enumerable: true,
  get: function () {
    return _concatMap.concatMap;
  }
});
Object.defineProperty(exports, "concatMapTo", {
  enumerable: true,
  get: function () {
    return _concatMapTo.concatMapTo;
  }
});
Object.defineProperty(exports, "count", {
  enumerable: true,
  get: function () {
    return _count.count;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function () {
    return _debounce.debounce;
  }
});
Object.defineProperty(exports, "debounceTime", {
  enumerable: true,
  get: function () {
    return _debounceTime.debounceTime;
  }
});
Object.defineProperty(exports, "defaultIfEmpty", {
  enumerable: true,
  get: function () {
    return _defaultIfEmpty.defaultIfEmpty;
  }
});
Object.defineProperty(exports, "delay", {
  enumerable: true,
  get: function () {
    return _delay.delay;
  }
});
Object.defineProperty(exports, "delayWhen", {
  enumerable: true,
  get: function () {
    return _delayWhen.delayWhen;
  }
});
Object.defineProperty(exports, "dematerialize", {
  enumerable: true,
  get: function () {
    return _dematerialize.dematerialize;
  }
});
Object.defineProperty(exports, "distinct", {
  enumerable: true,
  get: function () {
    return _distinct.distinct;
  }
});
Object.defineProperty(exports, "distinctUntilChanged", {
  enumerable: true,
  get: function () {
    return _distinctUntilChanged.distinctUntilChanged;
  }
});
Object.defineProperty(exports, "distinctUntilKeyChanged", {
  enumerable: true,
  get: function () {
    return _distinctUntilKeyChanged.distinctUntilKeyChanged;
  }
});
Object.defineProperty(exports, "elementAt", {
  enumerable: true,
  get: function () {
    return _elementAt.elementAt;
  }
});
Object.defineProperty(exports, "endWith", {
  enumerable: true,
  get: function () {
    return _endWith.endWith;
  }
});
Object.defineProperty(exports, "every", {
  enumerable: true,
  get: function () {
    return _every.every;
  }
});
Object.defineProperty(exports, "exhaust", {
  enumerable: true,
  get: function () {
    return _exhaust.exhaust;
  }
});
Object.defineProperty(exports, "exhaustMap", {
  enumerable: true,
  get: function () {
    return _exhaustMap.exhaustMap;
  }
});
Object.defineProperty(exports, "expand", {
  enumerable: true,
  get: function () {
    return _expand.expand;
  }
});
Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function () {
    return _filter.filter;
  }
});
Object.defineProperty(exports, "finalize", {
  enumerable: true,
  get: function () {
    return _finalize.finalize;
  }
});
Object.defineProperty(exports, "find", {
  enumerable: true,
  get: function () {
    return _find.find;
  }
});
Object.defineProperty(exports, "findIndex", {
  enumerable: true,
  get: function () {
    return _findIndex.findIndex;
  }
});
Object.defineProperty(exports, "first", {
  enumerable: true,
  get: function () {
    return _first.first;
  }
});
Object.defineProperty(exports, "groupBy", {
  enumerable: true,
  get: function () {
    return _groupBy.groupBy;
  }
});
Object.defineProperty(exports, "ignoreElements", {
  enumerable: true,
  get: function () {
    return _ignoreElements.ignoreElements;
  }
});
Object.defineProperty(exports, "isEmpty", {
  enumerable: true,
  get: function () {
    return _isEmpty.isEmpty;
  }
});
Object.defineProperty(exports, "last", {
  enumerable: true,
  get: function () {
    return _last.last;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function () {
    return _map.map;
  }
});
Object.defineProperty(exports, "mapTo", {
  enumerable: true,
  get: function () {
    return _mapTo.mapTo;
  }
});
Object.defineProperty(exports, "materialize", {
  enumerable: true,
  get: function () {
    return _materialize.materialize;
  }
});
Object.defineProperty(exports, "max", {
  enumerable: true,
  get: function () {
    return _max.max;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});
Object.defineProperty(exports, "mergeAll", {
  enumerable: true,
  get: function () {
    return _mergeAll.mergeAll;
  }
});
Object.defineProperty(exports, "mergeMap", {
  enumerable: true,
  get: function () {
    return _mergeMap.mergeMap;
  }
});
Object.defineProperty(exports, "flatMap", {
  enumerable: true,
  get: function () {
    return _mergeMap.mergeMap;
  }
});
Object.defineProperty(exports, "mergeMapTo", {
  enumerable: true,
  get: function () {
    return _mergeMapTo.mergeMapTo;
  }
});
Object.defineProperty(exports, "mergeScan", {
  enumerable: true,
  get: function () {
    return _mergeScan.mergeScan;
  }
});
Object.defineProperty(exports, "min", {
  enumerable: true,
  get: function () {
    return _min.min;
  }
});
Object.defineProperty(exports, "multicast", {
  enumerable: true,
  get: function () {
    return _multicast.multicast;
  }
});
Object.defineProperty(exports, "observeOn", {
  enumerable: true,
  get: function () {
    return _observeOn.observeOn;
  }
});
Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});
Object.defineProperty(exports, "pairwise", {
  enumerable: true,
  get: function () {
    return _pairwise.pairwise;
  }
});
Object.defineProperty(exports, "partition", {
  enumerable: true,
  get: function () {
    return _partition.partition;
  }
});
Object.defineProperty(exports, "pluck", {
  enumerable: true,
  get: function () {
    return _pluck.pluck;
  }
});
Object.defineProperty(exports, "publish", {
  enumerable: true,
  get: function () {
    return _publish.publish;
  }
});
Object.defineProperty(exports, "publishBehavior", {
  enumerable: true,
  get: function () {
    return _publishBehavior.publishBehavior;
  }
});
Object.defineProperty(exports, "publishLast", {
  enumerable: true,
  get: function () {
    return _publishLast.publishLast;
  }
});
Object.defineProperty(exports, "publishReplay", {
  enumerable: true,
  get: function () {
    return _publishReplay.publishReplay;
  }
});
Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});
Object.defineProperty(exports, "reduce", {
  enumerable: true,
  get: function () {
    return _reduce.reduce;
  }
});
Object.defineProperty(exports, "repeat", {
  enumerable: true,
  get: function () {
    return _repeat.repeat;
  }
});
Object.defineProperty(exports, "repeatWhen", {
  enumerable: true,
  get: function () {
    return _repeatWhen.repeatWhen;
  }
});
Object.defineProperty(exports, "retry", {
  enumerable: true,
  get: function () {
    return _retry.retry;
  }
});
Object.defineProperty(exports, "retryWhen", {
  enumerable: true,
  get: function () {
    return _retryWhen.retryWhen;
  }
});
Object.defineProperty(exports, "refCount", {
  enumerable: true,
  get: function () {
    return _refCount.refCount;
  }
});
Object.defineProperty(exports, "sample", {
  enumerable: true,
  get: function () {
    return _sample.sample;
  }
});
Object.defineProperty(exports, "sampleTime", {
  enumerable: true,
  get: function () {
    return _sampleTime.sampleTime;
  }
});
Object.defineProperty(exports, "scan", {
  enumerable: true,
  get: function () {
    return _scan.scan;
  }
});
Object.defineProperty(exports, "sequenceEqual", {
  enumerable: true,
  get: function () {
    return _sequenceEqual.sequenceEqual;
  }
});
Object.defineProperty(exports, "share", {
  enumerable: true,
  get: function () {
    return _share.share;
  }
});
Object.defineProperty(exports, "shareReplay", {
  enumerable: true,
  get: function () {
    return _shareReplay.shareReplay;
  }
});
Object.defineProperty(exports, "single", {
  enumerable: true,
  get: function () {
    return _single.single;
  }
});
Object.defineProperty(exports, "skip", {
  enumerable: true,
  get: function () {
    return _skip.skip;
  }
});
Object.defineProperty(exports, "skipLast", {
  enumerable: true,
  get: function () {
    return _skipLast.skipLast;
  }
});
Object.defineProperty(exports, "skipUntil", {
  enumerable: true,
  get: function () {
    return _skipUntil.skipUntil;
  }
});
Object.defineProperty(exports, "skipWhile", {
  enumerable: true,
  get: function () {
    return _skipWhile.skipWhile;
  }
});
Object.defineProperty(exports, "startWith", {
  enumerable: true,
  get: function () {
    return _startWith.startWith;
  }
});
Object.defineProperty(exports, "subscribeOn", {
  enumerable: true,
  get: function () {
    return _subscribeOn.subscribeOn;
  }
});
Object.defineProperty(exports, "switchAll", {
  enumerable: true,
  get: function () {
    return _switchAll.switchAll;
  }
});
Object.defineProperty(exports, "switchMap", {
  enumerable: true,
  get: function () {
    return _switchMap.switchMap;
  }
});
Object.defineProperty(exports, "switchMapTo", {
  enumerable: true,
  get: function () {
    return _switchMapTo.switchMapTo;
  }
});
Object.defineProperty(exports, "take", {
  enumerable: true,
  get: function () {
    return _take.take;
  }
});
Object.defineProperty(exports, "takeLast", {
  enumerable: true,
  get: function () {
    return _takeLast.takeLast;
  }
});
Object.defineProperty(exports, "takeUntil", {
  enumerable: true,
  get: function () {
    return _takeUntil.takeUntil;
  }
});
Object.defineProperty(exports, "takeWhile", {
  enumerable: true,
  get: function () {
    return _takeWhile.takeWhile;
  }
});
Object.defineProperty(exports, "tap", {
  enumerable: true,
  get: function () {
    return _tap.tap;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function () {
    return _throttle.throttle;
  }
});
Object.defineProperty(exports, "throttleTime", {
  enumerable: true,
  get: function () {
    return _throttleTime.throttleTime;
  }
});
Object.defineProperty(exports, "throwIfEmpty", {
  enumerable: true,
  get: function () {
    return _throwIfEmpty.throwIfEmpty;
  }
});
Object.defineProperty(exports, "timeInterval", {
  enumerable: true,
  get: function () {
    return _timeInterval.timeInterval;
  }
});
Object.defineProperty(exports, "timeout", {
  enumerable: true,
  get: function () {
    return _timeout.timeout;
  }
});
Object.defineProperty(exports, "timeoutWith", {
  enumerable: true,
  get: function () {
    return _timeoutWith.timeoutWith;
  }
});
Object.defineProperty(exports, "timestamp", {
  enumerable: true,
  get: function () {
    return _timestamp.timestamp;
  }
});
Object.defineProperty(exports, "toArray", {
  enumerable: true,
  get: function () {
    return _toArray.toArray;
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function () {
    return _window.window;
  }
});
Object.defineProperty(exports, "windowCount", {
  enumerable: true,
  get: function () {
    return _windowCount.windowCount;
  }
});
Object.defineProperty(exports, "windowTime", {
  enumerable: true,
  get: function () {
    return _windowTime.windowTime;
  }
});
Object.defineProperty(exports, "windowToggle", {
  enumerable: true,
  get: function () {
    return _windowToggle.windowToggle;
  }
});
Object.defineProperty(exports, "windowWhen", {
  enumerable: true,
  get: function () {
    return _windowWhen.windowWhen;
  }
});
Object.defineProperty(exports, "withLatestFrom", {
  enumerable: true,
  get: function () {
    return _withLatestFrom.withLatestFrom;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, "zipAll", {
  enumerable: true,
  get: function () {
    return _zipAll.zipAll;
  }
});

var _audit = require("../internal/operators/audit");

var _auditTime = require("../internal/operators/auditTime");

var _buffer = require("../internal/operators/buffer");

var _bufferCount = require("../internal/operators/bufferCount");

var _bufferTime = require("../internal/operators/bufferTime");

var _bufferToggle = require("../internal/operators/bufferToggle");

var _bufferWhen = require("../internal/operators/bufferWhen");

var _catchError = require("../internal/operators/catchError");

var _combineAll = require("../internal/operators/combineAll");

var _combineLatest = require("../internal/operators/combineLatest");

var _concat = require("../internal/operators/concat");

var _concatAll = require("../internal/operators/concatAll");

var _concatMap = require("../internal/operators/concatMap");

var _concatMapTo = require("../internal/operators/concatMapTo");

var _count = require("../internal/operators/count");

var _debounce = require("../internal/operators/debounce");

var _debounceTime = require("../internal/operators/debounceTime");

var _defaultIfEmpty = require("../internal/operators/defaultIfEmpty");

var _delay = require("../internal/operators/delay");

var _delayWhen = require("../internal/operators/delayWhen");

var _dematerialize = require("../internal/operators/dematerialize");

var _distinct = require("../internal/operators/distinct");

var _distinctUntilChanged = require("../internal/operators/distinctUntilChanged");

var _distinctUntilKeyChanged = require("../internal/operators/distinctUntilKeyChanged");

var _elementAt = require("../internal/operators/elementAt");

var _endWith = require("../internal/operators/endWith");

var _every = require("../internal/operators/every");

var _exhaust = require("../internal/operators/exhaust");

var _exhaustMap = require("../internal/operators/exhaustMap");

var _expand = require("../internal/operators/expand");

var _filter = require("../internal/operators/filter");

var _finalize = require("../internal/operators/finalize");

var _find = require("../internal/operators/find");

var _findIndex = require("../internal/operators/findIndex");

var _first = require("../internal/operators/first");

var _groupBy = require("../internal/operators/groupBy");

var _ignoreElements = require("../internal/operators/ignoreElements");

var _isEmpty = require("../internal/operators/isEmpty");

var _last = require("../internal/operators/last");

var _map = require("../internal/operators/map");

var _mapTo = require("../internal/operators/mapTo");

var _materialize = require("../internal/operators/materialize");

var _max = require("../internal/operators/max");

var _merge = require("../internal/operators/merge");

var _mergeAll = require("../internal/operators/mergeAll");

var _mergeMap = require("../internal/operators/mergeMap");

var _mergeMapTo = require("../internal/operators/mergeMapTo");

var _mergeScan = require("../internal/operators/mergeScan");

var _min = require("../internal/operators/min");

var _multicast = require("../internal/operators/multicast");

var _observeOn = require("../internal/operators/observeOn");

var _onErrorResumeNext = require("../internal/operators/onErrorResumeNext");

var _pairwise = require("../internal/operators/pairwise");

var _partition = require("../internal/operators/partition");

var _pluck = require("../internal/operators/pluck");

var _publish = require("../internal/operators/publish");

var _publishBehavior = require("../internal/operators/publishBehavior");

var _publishLast = require("../internal/operators/publishLast");

var _publishReplay = require("../internal/operators/publishReplay");

var _race = require("../internal/operators/race");

var _reduce = require("../internal/operators/reduce");

var _repeat = require("../internal/operators/repeat");

var _repeatWhen = require("../internal/operators/repeatWhen");

var _retry = require("../internal/operators/retry");

var _retryWhen = require("../internal/operators/retryWhen");

var _refCount = require("../internal/operators/refCount");

var _sample = require("../internal/operators/sample");

var _sampleTime = require("../internal/operators/sampleTime");

var _scan = require("../internal/operators/scan");

var _sequenceEqual = require("../internal/operators/sequenceEqual");

var _share = require("../internal/operators/share");

var _shareReplay = require("../internal/operators/shareReplay");

var _single = require("../internal/operators/single");

var _skip = require("../internal/operators/skip");

var _skipLast = require("../internal/operators/skipLast");

var _skipUntil = require("../internal/operators/skipUntil");

var _skipWhile = require("../internal/operators/skipWhile");

var _startWith = require("../internal/operators/startWith");

var _subscribeOn = require("../internal/operators/subscribeOn");

var _switchAll = require("../internal/operators/switchAll");

var _switchMap = require("../internal/operators/switchMap");

var _switchMapTo = require("../internal/operators/switchMapTo");

var _take = require("../internal/operators/take");

var _takeLast = require("../internal/operators/takeLast");

var _takeUntil = require("../internal/operators/takeUntil");

var _takeWhile = require("../internal/operators/takeWhile");

var _tap = require("../internal/operators/tap");

var _throttle = require("../internal/operators/throttle");

var _throttleTime = require("../internal/operators/throttleTime");

var _throwIfEmpty = require("../internal/operators/throwIfEmpty");

var _timeInterval = require("../internal/operators/timeInterval");

var _timeout = require("../internal/operators/timeout");

var _timeoutWith = require("../internal/operators/timeoutWith");

var _timestamp = require("../internal/operators/timestamp");

var _toArray = require("../internal/operators/toArray");

var _window = require("../internal/operators/window");

var _windowCount = require("../internal/operators/windowCount");

var _windowTime = require("../internal/operators/windowTime");

var _windowToggle = require("../internal/operators/windowToggle");

var _windowWhen = require("../internal/operators/windowWhen");

var _withLatestFrom = require("../internal/operators/withLatestFrom");

var _zip = require("../internal/operators/zip");

var _zipAll = require("../internal/operators/zipAll");
},{"../internal/operators/audit":"node_modules/rxjs/_esm5/internal/operators/audit.js","../internal/operators/auditTime":"node_modules/rxjs/_esm5/internal/operators/auditTime.js","../internal/operators/buffer":"node_modules/rxjs/_esm5/internal/operators/buffer.js","../internal/operators/bufferCount":"node_modules/rxjs/_esm5/internal/operators/bufferCount.js","../internal/operators/bufferTime":"node_modules/rxjs/_esm5/internal/operators/bufferTime.js","../internal/operators/bufferToggle":"node_modules/rxjs/_esm5/internal/operators/bufferToggle.js","../internal/operators/bufferWhen":"node_modules/rxjs/_esm5/internal/operators/bufferWhen.js","../internal/operators/catchError":"node_modules/rxjs/_esm5/internal/operators/catchError.js","../internal/operators/combineAll":"node_modules/rxjs/_esm5/internal/operators/combineAll.js","../internal/operators/combineLatest":"node_modules/rxjs/_esm5/internal/operators/combineLatest.js","../internal/operators/concat":"node_modules/rxjs/_esm5/internal/operators/concat.js","../internal/operators/concatAll":"node_modules/rxjs/_esm5/internal/operators/concatAll.js","../internal/operators/concatMap":"node_modules/rxjs/_esm5/internal/operators/concatMap.js","../internal/operators/concatMapTo":"node_modules/rxjs/_esm5/internal/operators/concatMapTo.js","../internal/operators/count":"node_modules/rxjs/_esm5/internal/operators/count.js","../internal/operators/debounce":"node_modules/rxjs/_esm5/internal/operators/debounce.js","../internal/operators/debounceTime":"node_modules/rxjs/_esm5/internal/operators/debounceTime.js","../internal/operators/defaultIfEmpty":"node_modules/rxjs/_esm5/internal/operators/defaultIfEmpty.js","../internal/operators/delay":"node_modules/rxjs/_esm5/internal/operators/delay.js","../internal/operators/delayWhen":"node_modules/rxjs/_esm5/internal/operators/delayWhen.js","../internal/operators/dematerialize":"node_modules/rxjs/_esm5/internal/operators/dematerialize.js","../internal/operators/distinct":"node_modules/rxjs/_esm5/internal/operators/distinct.js","../internal/operators/distinctUntilChanged":"node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js","../internal/operators/distinctUntilKeyChanged":"node_modules/rxjs/_esm5/internal/operators/distinctUntilKeyChanged.js","../internal/operators/elementAt":"node_modules/rxjs/_esm5/internal/operators/elementAt.js","../internal/operators/endWith":"node_modules/rxjs/_esm5/internal/operators/endWith.js","../internal/operators/every":"node_modules/rxjs/_esm5/internal/operators/every.js","../internal/operators/exhaust":"node_modules/rxjs/_esm5/internal/operators/exhaust.js","../internal/operators/exhaustMap":"node_modules/rxjs/_esm5/internal/operators/exhaustMap.js","../internal/operators/expand":"node_modules/rxjs/_esm5/internal/operators/expand.js","../internal/operators/filter":"node_modules/rxjs/_esm5/internal/operators/filter.js","../internal/operators/finalize":"node_modules/rxjs/_esm5/internal/operators/finalize.js","../internal/operators/find":"node_modules/rxjs/_esm5/internal/operators/find.js","../internal/operators/findIndex":"node_modules/rxjs/_esm5/internal/operators/findIndex.js","../internal/operators/first":"node_modules/rxjs/_esm5/internal/operators/first.js","../internal/operators/groupBy":"node_modules/rxjs/_esm5/internal/operators/groupBy.js","../internal/operators/ignoreElements":"node_modules/rxjs/_esm5/internal/operators/ignoreElements.js","../internal/operators/isEmpty":"node_modules/rxjs/_esm5/internal/operators/isEmpty.js","../internal/operators/last":"node_modules/rxjs/_esm5/internal/operators/last.js","../internal/operators/map":"node_modules/rxjs/_esm5/internal/operators/map.js","../internal/operators/mapTo":"node_modules/rxjs/_esm5/internal/operators/mapTo.js","../internal/operators/materialize":"node_modules/rxjs/_esm5/internal/operators/materialize.js","../internal/operators/max":"node_modules/rxjs/_esm5/internal/operators/max.js","../internal/operators/merge":"node_modules/rxjs/_esm5/internal/operators/merge.js","../internal/operators/mergeAll":"node_modules/rxjs/_esm5/internal/operators/mergeAll.js","../internal/operators/mergeMap":"node_modules/rxjs/_esm5/internal/operators/mergeMap.js","../internal/operators/mergeMapTo":"node_modules/rxjs/_esm5/internal/operators/mergeMapTo.js","../internal/operators/mergeScan":"node_modules/rxjs/_esm5/internal/operators/mergeScan.js","../internal/operators/min":"node_modules/rxjs/_esm5/internal/operators/min.js","../internal/operators/multicast":"node_modules/rxjs/_esm5/internal/operators/multicast.js","../internal/operators/observeOn":"node_modules/rxjs/_esm5/internal/operators/observeOn.js","../internal/operators/onErrorResumeNext":"node_modules/rxjs/_esm5/internal/operators/onErrorResumeNext.js","../internal/operators/pairwise":"node_modules/rxjs/_esm5/internal/operators/pairwise.js","../internal/operators/partition":"node_modules/rxjs/_esm5/internal/operators/partition.js","../internal/operators/pluck":"node_modules/rxjs/_esm5/internal/operators/pluck.js","../internal/operators/publish":"node_modules/rxjs/_esm5/internal/operators/publish.js","../internal/operators/publishBehavior":"node_modules/rxjs/_esm5/internal/operators/publishBehavior.js","../internal/operators/publishLast":"node_modules/rxjs/_esm5/internal/operators/publishLast.js","../internal/operators/publishReplay":"node_modules/rxjs/_esm5/internal/operators/publishReplay.js","../internal/operators/race":"node_modules/rxjs/_esm5/internal/operators/race.js","../internal/operators/reduce":"node_modules/rxjs/_esm5/internal/operators/reduce.js","../internal/operators/repeat":"node_modules/rxjs/_esm5/internal/operators/repeat.js","../internal/operators/repeatWhen":"node_modules/rxjs/_esm5/internal/operators/repeatWhen.js","../internal/operators/retry":"node_modules/rxjs/_esm5/internal/operators/retry.js","../internal/operators/retryWhen":"node_modules/rxjs/_esm5/internal/operators/retryWhen.js","../internal/operators/refCount":"node_modules/rxjs/_esm5/internal/operators/refCount.js","../internal/operators/sample":"node_modules/rxjs/_esm5/internal/operators/sample.js","../internal/operators/sampleTime":"node_modules/rxjs/_esm5/internal/operators/sampleTime.js","../internal/operators/scan":"node_modules/rxjs/_esm5/internal/operators/scan.js","../internal/operators/sequenceEqual":"node_modules/rxjs/_esm5/internal/operators/sequenceEqual.js","../internal/operators/share":"node_modules/rxjs/_esm5/internal/operators/share.js","../internal/operators/shareReplay":"node_modules/rxjs/_esm5/internal/operators/shareReplay.js","../internal/operators/single":"node_modules/rxjs/_esm5/internal/operators/single.js","../internal/operators/skip":"node_modules/rxjs/_esm5/internal/operators/skip.js","../internal/operators/skipLast":"node_modules/rxjs/_esm5/internal/operators/skipLast.js","../internal/operators/skipUntil":"node_modules/rxjs/_esm5/internal/operators/skipUntil.js","../internal/operators/skipWhile":"node_modules/rxjs/_esm5/internal/operators/skipWhile.js","../internal/operators/startWith":"node_modules/rxjs/_esm5/internal/operators/startWith.js","../internal/operators/subscribeOn":"node_modules/rxjs/_esm5/internal/operators/subscribeOn.js","../internal/operators/switchAll":"node_modules/rxjs/_esm5/internal/operators/switchAll.js","../internal/operators/switchMap":"node_modules/rxjs/_esm5/internal/operators/switchMap.js","../internal/operators/switchMapTo":"node_modules/rxjs/_esm5/internal/operators/switchMapTo.js","../internal/operators/take":"node_modules/rxjs/_esm5/internal/operators/take.js","../internal/operators/takeLast":"node_modules/rxjs/_esm5/internal/operators/takeLast.js","../internal/operators/takeUntil":"node_modules/rxjs/_esm5/internal/operators/takeUntil.js","../internal/operators/takeWhile":"node_modules/rxjs/_esm5/internal/operators/takeWhile.js","../internal/operators/tap":"node_modules/rxjs/_esm5/internal/operators/tap.js","../internal/operators/throttle":"node_modules/rxjs/_esm5/internal/operators/throttle.js","../internal/operators/throttleTime":"node_modules/rxjs/_esm5/internal/operators/throttleTime.js","../internal/operators/throwIfEmpty":"node_modules/rxjs/_esm5/internal/operators/throwIfEmpty.js","../internal/operators/timeInterval":"node_modules/rxjs/_esm5/internal/operators/timeInterval.js","../internal/operators/timeout":"node_modules/rxjs/_esm5/internal/operators/timeout.js","../internal/operators/timeoutWith":"node_modules/rxjs/_esm5/internal/operators/timeoutWith.js","../internal/operators/timestamp":"node_modules/rxjs/_esm5/internal/operators/timestamp.js","../internal/operators/toArray":"node_modules/rxjs/_esm5/internal/operators/toArray.js","../internal/operators/window":"node_modules/rxjs/_esm5/internal/operators/window.js","../internal/operators/windowCount":"node_modules/rxjs/_esm5/internal/operators/windowCount.js","../internal/operators/windowTime":"node_modules/rxjs/_esm5/internal/operators/windowTime.js","../internal/operators/windowToggle":"node_modules/rxjs/_esm5/internal/operators/windowToggle.js","../internal/operators/windowWhen":"node_modules/rxjs/_esm5/internal/operators/windowWhen.js","../internal/operators/withLatestFrom":"node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js","../internal/operators/zip":"node_modules/rxjs/_esm5/internal/operators/zip.js","../internal/operators/zipAll":"node_modules/rxjs/_esm5/internal/operators/zipAll.js"}],"node_modules/rxjs-compat/operator/buffer.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return operators_1.buffer(closingNotifier)(this);
}
exports.buffer = buffer;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/buffer.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var buffer_1 = require("../../operator/buffer");
rxjs_1.Observable.prototype.buffer = buffer_1.buffer;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/buffer":"node_modules/rxjs-compat/operator/buffer.js"}],"node_modules/rxjs-compat/operator/bufferCount.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return operators_1.bufferCount(bufferSize, startBufferEvery)(this);
}
exports.bufferCount = bufferCount;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/bufferCount.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var bufferCount_1 = require("../../operator/bufferCount");
rxjs_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/bufferCount":"node_modules/rxjs-compat/operator/bufferCount.js"}],"node_modules/rxjs-compat/operator/bufferTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var internal_compatibility_1 = require("rxjs/internal-compatibility");
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=asyncScheduler] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = rxjs_1.asyncScheduler;
    if (internal_compatibility_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return operators_1.bufferTime(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
}
exports.bufferTime = bufferTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/internal-compatibility":"node_modules/rxjs/_esm5/internal-compatibility/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/bufferTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var bufferTime_1 = require("../../operator/bufferTime");
rxjs_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/bufferTime":"node_modules/rxjs-compat/operator/bufferTime.js"}],"node_modules/rxjs-compat/operator/bufferToggle.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return operators_1.bufferToggle(openings, closingSelector)(this);
}
exports.bufferToggle = bufferToggle;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/bufferToggle.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var bufferToggle_1 = require("../../operator/bufferToggle");
rxjs_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/bufferToggle":"node_modules/rxjs-compat/operator/bufferToggle.js"}],"node_modules/rxjs-compat/operator/bufferWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return operators_1.bufferWhen(closingSelector)(this);
}
exports.bufferWhen = bufferWhen;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/bufferWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var bufferWhen_1 = require("../../operator/bufferWhen");
rxjs_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/bufferWhen":"node_modules/rxjs-compat/operator/bufferWhen.js"}],"node_modules/rxjs-compat/operator/catch.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    return operators_1.catchError(selector)(this);
}
exports._catch = _catch;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/catch.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var catch_1 = require("../../operator/catch");
rxjs_1.Observable.prototype.catch = catch_1._catch;
rxjs_1.Observable.prototype._catch = catch_1._catch;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/catch":"node_modules/rxjs-compat/operator/catch.js"}],"node_modules/rxjs-compat/operator/combineAll.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return operators_1.combineAll(project)(this);
}
exports.combineAll = combineAll;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/combineAll.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var combineAll_1 = require("../../operator/combineAll");
rxjs_1.Observable.prototype.combineAll = combineAll_1.combineAll;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/combineAll":"node_modules/rxjs-compat/operator/combineAll.js"}],"node_modules/rxjs-compat/operator/combineLatest.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var internal_compatibility_1 = require("rxjs/internal-compatibility");
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && internal_compatibility_1.isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return this.lift.call(rxjs_1.of.apply(void 0, [this].concat(observables)), new internal_compatibility_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/internal-compatibility":"node_modules/rxjs/_esm5/internal-compatibility/index.js"}],"node_modules/rxjs-compat/add/operator/combineLatest.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var combineLatest_1 = require("../../operator/combineLatest");
rxjs_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/combineLatest":"node_modules/rxjs-compat/operator/combineLatest.js"}],"node_modules/rxjs-compat/operator/concat.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return this.lift.call(rxjs_1.concat.apply(void 0, [this].concat(observables)));
}
exports.concat = concat;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/operator/concat.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var concat_1 = require("../../operator/concat");
rxjs_1.Observable.prototype.concat = concat_1.concat;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/concat":"node_modules/rxjs-compat/operator/concat.js"}],"node_modules/rxjs-compat/operator/concatAll.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Converts a higher-order Observable into a first-order Observable by
 * concatenating the inner Observables in order.
 *
 * <span class="informal">Flattens an Observable-of-Observables by putting one
 * inner Observable after the other.</span>
 *
 * <img src="./img/concatAll.png" width="100%">
 *
 * Joins every Observable emitted by the source (a higher-order Observable), in
 * a serial fashion. It subscribes to each inner Observable only after the
 * previous inner Observable has completed, and merges all of their values into
 * the returned observable.
 *
 * __Warning:__ If the source Observable emits Observables quickly and
 * endlessly, and the inner Observables it emits generally complete slower than
 * the source emits, you can run into memory issues as the incoming Observables
 * collect in an unbounded buffer.
 *
 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
 * var firstOrder = higherOrder.concatAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link combineAll}
 * @see {@link concat}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable emitting values from all the inner
 * Observables concatenated.
 * @method concatAll
 * @owner Observable
 */
function concatAll() {
    return operators_1.concatAll()(this);
}
exports.concatAll = concatAll;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/concatAll.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var concatAll_1 = require("../../operator/concatAll");
rxjs_1.Observable.prototype.concatAll = concatAll_1.concatAll;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/concatAll":"node_modules/rxjs-compat/operator/concatAll.js"}],"node_modules/rxjs-compat/operator/concatMap.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, in a serialized fashion waiting for each one to complete before
 * merging the next.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link concatAll}.</span>
 *
 * <img src="./img/concatMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each new inner Observable is
 * concatenated with the previous inner Observable.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMapTo}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking values from each projected inner
 * Observable sequentially.
 * @method concatMap
 * @owner Observable
 */
function concatMap(project) {
    return operators_1.concatMap(project)(this);
}
exports.concatMap = concatMap;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/concatMap.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var concatMap_1 = require("../../operator/concatMap");
rxjs_1.Observable.prototype.concatMap = concatMap_1.concatMap;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/concatMap":"node_modules/rxjs-compat/operator/concatMap.js"}],"node_modules/rxjs-compat/operator/concatMapTo.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable) {
    return operators_1.concatMapTo(innerObservable)(this);
}
exports.concatMapTo = concatMapTo;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/concatMapTo.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var concatMapTo_1 = require("../../operator/concatMapTo");
rxjs_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/concatMapTo":"node_modules/rxjs-compat/operator/concatMapTo.js"}],"node_modules/rxjs-compat/operator/count.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return operators_1.count(predicate)(this);
}
exports.count = count;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/count.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var count_1 = require("../../operator/count");
rxjs_1.Observable.prototype.count = count_1.count;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/count":"node_modules/rxjs-compat/operator/count.js"}],"node_modules/rxjs-compat/operator/dematerialize.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return operators_1.dematerialize()(this);
}
exports.dematerialize = dematerialize;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/dematerialize.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var dematerialize_1 = require("../../operator/dematerialize");
rxjs_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/dematerialize":"node_modules/rxjs-compat/operator/dematerialize.js"}],"node_modules/rxjs-compat/operator/debounce.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return operators_1.debounce(durationSelector)(this);
}
exports.debounce = debounce;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/debounce.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var debounce_1 = require("../../operator/debounce");
rxjs_1.Observable.prototype.debounce = debounce_1.debounce;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/debounce":"node_modules/rxjs-compat/operator/debounce.js"}],"node_modules/rxjs-compat/operator/debounceTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.debounceTime(dueTime, scheduler)(this);
}
exports.debounceTime = debounceTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/debounceTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var debounceTime_1 = require("../../operator/debounceTime");
rxjs_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/debounceTime":"node_modules/rxjs-compat/operator/debounceTime.js"}],"node_modules/rxjs-compat/operator/defaultIfEmpty.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return operators_1.defaultIfEmpty(defaultValue)(this);
}
exports.defaultIfEmpty = defaultIfEmpty;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/defaultIfEmpty.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var defaultIfEmpty_1 = require("../../operator/defaultIfEmpty");
rxjs_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/defaultIfEmpty":"node_modules/rxjs-compat/operator/defaultIfEmpty.js"}],"node_modules/rxjs-compat/operator/delay.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=asyncScheduler] The SchedulerLike to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.delay(delay, scheduler)(this);
}
exports.delay = delay;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/delay.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var delay_1 = require("../../operator/delay");
rxjs_1.Observable.prototype.delay = delay_1.delay;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/delay":"node_modules/rxjs-compat/operator/delay.js"}],"node_modules/rxjs-compat/operator/delayWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    return operators_1.delayWhen(delayDurationSelector, subscriptionDelay)(this);
}
exports.delayWhen = delayWhen;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/delayWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var delayWhen_1 = require("../../operator/delayWhen");
rxjs_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/delayWhen":"node_modules/rxjs-compat/operator/delayWhen.js"}],"node_modules/rxjs-compat/operator/distinct.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return operators_1.distinct(keySelector, flushes)(this);
}
exports.distinct = distinct;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/distinct.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var distinct_1 = require("../../operator/distinct");
rxjs_1.Observable.prototype.distinct = distinct_1.distinct;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/distinct":"node_modules/rxjs-compat/operator/distinct.js"}],"node_modules/rxjs-compat/operator/distinctUntilChanged.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return operators_1.distinctUntilChanged(compare, keySelector)(this);
}
exports.distinctUntilChanged = distinctUntilChanged;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/distinctUntilChanged.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var distinctUntilChanged_1 = require("../../operator/distinctUntilChanged");
rxjs_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/distinctUntilChanged":"node_modules/rxjs-compat/operator/distinctUntilChanged.js"}],"node_modules/rxjs-compat/operator/distinctUntilKeyChanged.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
// tslint:disable-next-line:max-line-length
function distinctUntilKeyChanged(key, compare) {
    return operators_1.distinctUntilKeyChanged(key, compare)(this);
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/distinctUntilKeyChanged.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var distinctUntilKeyChanged_1 = require("../../operator/distinctUntilKeyChanged");
rxjs_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/distinctUntilKeyChanged":"node_modules/rxjs-compat/operator/distinctUntilKeyChanged.js"}],"node_modules/rxjs-compat/operator/do.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return operators_1.tap(nextOrObserver, error, complete)(this);
}
exports._do = _do;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/do.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var do_1 = require("../../operator/do");
rxjs_1.Observable.prototype.do = do_1._do;
rxjs_1.Observable.prototype._do = do_1._do;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/do":"node_modules/rxjs-compat/operator/do.js"}],"node_modules/rxjs-compat/operator/exhaust.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 */
function exhaust() {
    return operators_1.exhaust()(this);
}
exports.exhaust = exhaust;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/exhaust.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var exhaust_1 = require("../../operator/exhaust");
rxjs_1.Observable.prototype.exhaust = exhaust_1.exhaust;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/exhaust":"node_modules/rxjs-compat/operator/exhaust.js"}],"node_modules/rxjs-compat/operator/exhaustMap.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = fromEvent(document, 'click');
 * var result = clicks.pipe(exhaustMap((ev) => Rx.Observable.interval(1000).take(5)));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 */
function exhaustMap(project) {
    return operators_1.exhaustMap(project)(this);
}
exports.exhaustMap = exhaustMap;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/exhaustMap.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var exhaustMap_1 = require("../../operator/exhaustMap");
rxjs_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/exhaustMap":"node_modules/rxjs-compat/operator/exhaustMap.js"}],"node_modules/rxjs-compat/operator/expand.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (scheduler === void 0) { scheduler = undefined; }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return operators_1.expand(project, concurrent, scheduler)(this);
}
exports.expand = expand;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/expand.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var expand_1 = require("../../operator/expand");
rxjs_1.Observable.prototype.expand = expand_1.expand;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/expand":"node_modules/rxjs-compat/operator/expand.js"}],"node_modules/rxjs-compat/operator/elementAt.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return operators_1.elementAt.apply(undefined, arguments)(this);
}
exports.elementAt = elementAt;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/elementAt.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var elementAt_1 = require("../../operator/elementAt");
rxjs_1.Observable.prototype.elementAt = elementAt_1.elementAt;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/elementAt":"node_modules/rxjs-compat/operator/elementAt.js"}],"node_modules/rxjs-compat/operator/filter.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
    return operators_1.filter(predicate, thisArg)(this);
}
exports.filter = filter;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/filter.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var filter_1 = require("../../operator/filter");
rxjs_1.Observable.prototype.filter = filter_1.filter;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/filter":"node_modules/rxjs-compat/operator/filter.js"}],"node_modules/rxjs-compat/operator/finally.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete, error or unsubscribe.
 *
 * <span class="informal">Ensure a given function will be called when a stream ends, no matter why it ended.</span>
 *
 * `finally` method accepts as a single parameter a function. This function does not accept any parameters and
 * should not return anything. It will be called whenever source Observable completes, errors or is unsubscribed,
 * which makes it good candidate to perform any necessary clean up or side effects when Observable terminates,
 * no matter how or why it terminated.
 *
 * Observable returned by `finally` will simply mirror source Observable - each time it is subscribed, source
 * Observable will be subscribed underneath.
 *
 * Note that behavior of `finally` will be repeated per every subscription, so if resulting Observable has
 * many subscribers, function passed to `finally` might be potentially called multiple times.
 *
 * Remember also that `finally` differs quite a lot from passing complete or error handler to {@link subscribe}. It will
 * return an Observable which can be further chained, while `subscribe` returns Subscription, basically ending Observable
 * chain. Function passed to `finally` will be called also when consumer of resulting Observable unsubscribes from it,
 * while handlers passed to `subscribe` will not (even complete handler). But most importantly, `finally` does not start
 * an execution of source Observable, like `subscribe` does, allowing you to set up all necessary hooks before
 * passing Observable further, even without specific knowledge how or when it will be used.
 *
 *
 * @example <caption>Call finally after complete notification</caption>
 * Rx.Observable.of(1, 2, 3)
 * .finally(() => console.log('I was finalized!'))
 * .map(x => x * 2) // `finally` returns an Observable, so we still can chain operators.
 * .subscribe(
 *   val => console.log(val),
 *   err => {},
 *   () => console.log('I completed!')
 * );
 *
 * // Logs:
 * // 1
 * // 2
 * // 3
 * // "I completed!"
 * // "I was finalized!"
 *
 *
 *
 * @example <caption>Call finally after consumer unsubscribes</caption>
 * const o = Rx.Observable.interval(1000)
 * .finally(() => console.log('Timer stopped'));
 *
 * const subscription = o.subscribe(
 *   val => console.log(val),
 *   err => {},
 *   () => console.log('Complete!') // Will not be called, since complete handler
 * );                               // does not react to unsubscription, just to
 *                                  // complete notification sent by the Observable itself.
 *
 * setTimeout(() => subscription.unsubscribe(), 2500);
 *
 * // Logs:
 * // 0 after 1s
 * // 1 after 2s
 * // "Timer stopped" after 2.5s
 *
 * @see {@link using}
 *
 * @param {function} callback Function to be called when source terminates (completes, errors or is unsubscribed).
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @name finally
 * @owner Observable
 */
function _finally(callback) {
    return operators_1.finalize(callback)(this);
}
exports._finally = _finally;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/finally.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var finally_1 = require("../../operator/finally");
rxjs_1.Observable.prototype.finally = finally_1._finally;
rxjs_1.Observable.prototype._finally = finally_1._finally;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/finally":"node_modules/rxjs-compat/operator/finally.js"}],"node_modules/rxjs-compat/operator/find.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    return operators_1.find(predicate, thisArg)(this);
}
exports.find = find;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/find.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var find_1 = require("../../operator/find");
rxjs_1.Observable.prototype.find = find_1.find;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/find":"node_modules/rxjs-compat/operator/find.js"}],"node_modules/rxjs-compat/operator/findIndex.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return operators_1.findIndex(predicate, thisArg)(this);
}
exports.findIndex = findIndex;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/findIndex.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var findIndex_1 = require("../../operator/findIndex");
rxjs_1.Observable.prototype.findIndex = findIndex_1.findIndex;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/findIndex":"node_modules/rxjs-compat/operator/findIndex.js"}],"node_modules/rxjs-compat/operator/first.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * <img src="./img/first.png" width="100%">
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a `resultSelector` function to produce the output value from
 * the input value, and a `defaultValue` to emit in case the source completes
 * before it is able to emit a valid value. Throws an error if `defaultValue`
 * was not provided and a matching element is not found.
 *
 * @example <caption>Emit only the first click that happens on the DOM</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Emits the first click that happens on a DIV</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {T} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
function first() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return operators_1.first.apply(void 0, args)(this);
}
exports.first = first;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/first.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var first_1 = require("../../operator/first");
rxjs_1.Observable.prototype.first = first_1.first;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/first":"node_modules/rxjs-compat/operator/first.js"}],"node_modules/rxjs-compat/operator/groupBy.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return operators_1.groupBy(keySelector, elementSelector, durationSelector, subjectSelector)(this);
}
exports.groupBy = groupBy;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/groupBy.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var groupBy_1 = require("../../operator/groupBy");
rxjs_1.Observable.prototype.groupBy = groupBy_1.groupBy;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/groupBy":"node_modules/rxjs-compat/operator/groupBy.js"}],"node_modules/rxjs-compat/operator/ignoreElements.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return operators_1.ignoreElements()(this);
}
exports.ignoreElements = ignoreElements;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/ignoreElements.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var ignoreElements_1 = require("../../operator/ignoreElements");
rxjs_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/ignoreElements":"node_modules/rxjs-compat/operator/ignoreElements.js"}],"node_modules/rxjs-compat/operator/isEmpty.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return operators_1.isEmpty()(this);
}
exports.isEmpty = isEmpty;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/isEmpty.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var isEmpty_1 = require("../../operator/isEmpty");
rxjs_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/isEmpty":"node_modules/rxjs-compat/operator/isEmpty.js"}],"node_modules/rxjs-compat/operator/audit.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return operators_1.audit(durationSelector)(this);
}
exports.audit = audit;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/audit.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var audit_1 = require("../../operator/audit");
rxjs_1.Observable.prototype.audit = audit_1.audit;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/audit":"node_modules/rxjs-compat/operator/audit.js"}],"node_modules/rxjs-compat/operator/auditTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.auditTime(duration, scheduler)(this);
}
exports.auditTime = auditTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/auditTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var auditTime_1 = require("../../operator/auditTime");
rxjs_1.Observable.prototype.auditTime = auditTime_1.auditTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/auditTime":"node_modules/rxjs-compat/operator/auditTime.js"}],"node_modules/rxjs-compat/operator/last.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits only the last item emitted by the source Observable.
 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
 * the last item from the source Observable, the resulting Observable will emit the last item
 * from the source Observable that satisfies the predicate.
 *
 * <img src="./img/last.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {function} [predicate] - The condition any source emitted item has to satisfy.
 * @param {any} [defaultValue] - The default value to use if the predicate isn't
 * satisfied, or no values were emitted (if no predicate).
 * @return {Observable} An Observable that emits only the last item satisfying the given condition
 * from the source, or an NoSuchElementException if no such items are emitted.
 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
 * @method last
 * @owner Observable
 */
function last() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return operators_1.last.apply(void 0, args)(this);
}
exports.last = last;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/last.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var last_1 = require("../../operator/last");
rxjs_1.Observable.prototype.last = last_1.last;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/last":"node_modules/rxjs-compat/operator/last.js"}],"node_modules/rxjs-compat/operator/let.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
function letProto(func) {
    return func(this);
}
exports.letProto = letProto;

},{}],"node_modules/rxjs-compat/add/operator/let.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var let_1 = require("../../operator/let");
rxjs_1.Observable.prototype.let = let_1.letProto;
rxjs_1.Observable.prototype.letBind = let_1.letProto;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/let":"node_modules/rxjs-compat/operator/let.js"}],"node_modules/rxjs-compat/operator/every.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
 *
 * @example <caption>A simple example emitting true if all elements are less than 5, false otherwise</caption>
 *  Observable.of(1, 2, 3, 4, 5, 6)
 *     .every(x => x < 5)
 *     .subscribe(x => console.log(x)); // -> false
 *
 * @param {function} predicate A function for determining if an item meets a specified condition.
 * @param {any} [thisArg] Optional object to use for `this` in the callback.
 * @return {Observable} An Observable of booleans that determines if all items of the source Observable meet the condition specified.
 * @method every
 * @owner Observable
 */
function every(predicate, thisArg) {
    return operators_1.every(predicate, thisArg)(this);
}
exports.every = every;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/every.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var every_1 = require("../../operator/every");
rxjs_1.Observable.prototype.every = every_1.every;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/every":"node_modules/rxjs-compat/operator/every.js"}],"node_modules/rxjs-compat/operator/map.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * <img src="./img/map.png" width="100%">
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * @example <caption>Map every click to the clientX position of that click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks.map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
function map(project, thisArg) {
    return operators_1.map(project, thisArg)(this);
}
exports.map = map;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/map.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var map_1 = require("../../operator/map");
rxjs_1.Observable.prototype.map = map_1.map;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/map":"node_modules/rxjs-compat/operator/map.js"}],"node_modules/rxjs-compat/operator/mapTo.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return operators_1.mapTo(value)(this);
}
exports.mapTo = mapTo;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/mapTo.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var mapTo_1 = require("../../operator/mapTo");
rxjs_1.Observable.prototype.mapTo = mapTo_1.mapTo;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/mapTo":"node_modules/rxjs-compat/operator/mapTo.js"}],"node_modules/rxjs-compat/operator/materialize.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return operators_1.materialize()(this);
}
exports.materialize = materialize;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/materialize.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var materialize_1 = require("../../operator/materialize");
rxjs_1.Observable.prototype.materialize = materialize_1.materialize;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/materialize":"node_modules/rxjs-compat/operator/materialize.js"}],"node_modules/rxjs-compat/operator/max.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    return operators_1.max(comparer)(this);
}
exports.max = max;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/max.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var max_1 = require("../../operator/max");
rxjs_1.Observable.prototype.max = max_1.max;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/max":"node_modules/rxjs-compat/operator/max.js"}],"node_modules/rxjs-compat/operator/merge.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {ObservableInput} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} An Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return this.lift.call(rxjs_1.merge.apply(void 0, [this].concat(observables)));
}
exports.merge = merge;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/operator/merge.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var merge_1 = require("../../operator/merge");
rxjs_1.Observable.prototype.merge = merge_1.merge;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/merge":"node_modules/rxjs-compat/operator/merge.js"}],"node_modules/rxjs-compat/operator/mergeAll.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Converts a higher-order Observable into a first-order Observable which
 * concurrently delivers all values that are emitted on the inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * <img src="./img/mergeAll.png" width="100%">
 *
 * `mergeAll` subscribes to an Observable that emits Observables, also known as
 * a higher-order Observable. Each time it observes one of these emitted inner
 * Observables, it subscribes to that and delivers all the values from the
 * inner Observable on the output Observable. The output Observable only
 * completes once all inner Observables have completed. Any error delivered by
 * a inner Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var firstOrder = higherOrder.mergeAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
 * var firstOrder = higherOrder.mergeAll(2);
 * firstOrder.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link merge}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits values coming from all the
 * inner Observables emitted by the source Observable.
 * @method mergeAll
 * @owner Observable
 */
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return operators_1.mergeAll(concurrent)(this);
}
exports.mergeAll = mergeAll;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/mergeAll.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var mergeAll_1 = require("../../operator/mergeAll");
rxjs_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/mergeAll":"node_modules/rxjs-compat/operator/mergeAll.js"}],"node_modules/rxjs-compat/operator/mergeMap.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link mergeAll}.</span>
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
 * var letters = Rx.Observable.of('a', 'b', 'c');
 * var result = letters.mergeMap(x =>
 *   Rx.Observable.interval(1000).map(i => x+i)
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // a0
 * // b0
 * // c0
 * // a1
 * // b1
 * // c1
 * // continues to list a,b,c with respective ascending integers
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and merging the results of the Observables obtained
 * from this transformation.
 * @method mergeMap
 * @owner Observable
 */
function mergeMap(project, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return operators_1.mergeMap(project, concurrent)(this);
}
exports.mergeMap = mergeMap;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/mergeMap.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var mergeMap_1 = require("../../operator/mergeMap");
rxjs_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
rxjs_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/mergeMap":"node_modules/rxjs-compat/operator/mergeMap.js"}],"node_modules/rxjs-compat/operator/mergeMapTo.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable`.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return operators_1.mergeMapTo(innerObservable, concurrent)(this);
}
exports.mergeMapTo = mergeMapTo;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/mergeMapTo.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var mergeMapTo_1 = require("../../operator/mergeMapTo");
rxjs_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
rxjs_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/mergeMapTo":"node_modules/rxjs-compat/operator/mergeMapTo.js"}],"node_modules/rxjs-compat/operator/mergeScan.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return operators_1.mergeScan(accumulator, seed, concurrent)(this);
}
exports.mergeScan = mergeScan;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/mergeScan.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var mergeScan_1 = require("../../operator/mergeScan");
rxjs_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/mergeScan":"node_modules/rxjs-compat/operator/mergeScan.js"}],"node_modules/rxjs-compat/operator/min.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    return operators_1.min(comparer)(this);
}
exports.min = min;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/min.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var min_1 = require("../../operator/min");
rxjs_1.Observable.prototype.min = min_1.min;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/min":"node_modules/rxjs-compat/operator/min.js"}],"node_modules/rxjs-compat/operator/multicast.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Allows source Observable to be subscribed only once with a Subject of choice,
 * while still sharing its values between multiple subscribers.
 *
 * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * `multicast` is an operator that works in two modes.
 *
 * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
 * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
 * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
 * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
 * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
 * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
 * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
 * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
 *
 * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
 * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
 * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
 * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
 * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
 * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
 * ConnectableObservable, use `refCount`.
 *
 * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
 * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
 * as well, which should be the input stream modified by any operators you want. Note that in this
 * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
 * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
 * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
 * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
 * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
 * but you want to subscribe to that Observable only once, this is the mode you would use.
 *
 * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
 * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
 * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
 * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
 * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
 * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
 * just wrappers around `multicast`, with a specific Subject hardcoded inside.
 *
 * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
 * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
 *
 * @example <caption>Use ConnectableObservable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const connectableSeconds = seconds.multicast(new Subject());
 *
 * connectableSeconds.subscribe(value => console.log('first: ' + value));
 * connectableSeconds.subscribe(value => console.log('second: ' + value));
 *
 * // At this point still nothing happens, even though we subscribed twice.
 *
 * connectableSeconds.connect();
 *
 * // From now on `seconds` are being logged to the console,
 * // twice per every second. `seconds` Observable was however only subscribed once,
 * // so under the hood Observable.interval had only one clock started.
 *
 * @example <caption>Use selector</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds
 *     .multicast(
 *         () => new Subject(),
 *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
 *                                         // Because we are inside selector, `seconds` is subscribed once,
 *     )                                   // thus starting only one clock used internally by Observable.interval.
 *     .subscribe();
 *
 * @see {@link publish}
 * @see {@link publishLast}
 * @see {@link publishBehavior}
 * @see {@link publishReplay}
 * @see {@link share}
 * @see {@link shareReplay}
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
 * which the source sequence's elements will be multicast to the selector function input Observable or
 * ConnectableObservable returned by the operator.
 * @param {Function} [selector] - Optional selector function that can use the input stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the input source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
 * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
 *
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    return operators_1.multicast(subjectOrSubjectFactory, selector)(this);
}
exports.multicast = multicast;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/multicast.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var multicast_1 = require("../../operator/multicast");
rxjs_1.Observable.prototype.multicast = multicast_1.multicast;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/multicast":"node_modules/rxjs-compat/operator/multicast.js"}],"node_modules/rxjs-compat/operator/observeOn.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {SchedulerLike} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operators_1.observeOn(scheduler, delay)(this);
}
exports.observeOn = observeOn;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/observeOn.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observeOn_1 = require("../../operator/observeOn");
rxjs_1.Observable.prototype.observeOn = observeOn_1.observeOn;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/observeOn":"node_modules/rxjs-compat/operator/observeOn.js"}],"node_modules/rxjs-compat/operator/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i] = arguments[_i];
    }
    return operators_1.onErrorResumeNext.apply(void 0, nextSources)(this);
}
exports.onErrorResumeNext = onErrorResumeNext;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var onErrorResumeNext_1 = require("../../operator/onErrorResumeNext");
rxjs_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/onErrorResumeNext":"node_modules/rxjs-compat/operator/onErrorResumeNext.js"}],"node_modules/rxjs-compat/operator/pairwise.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return operators_1.pairwise()(this);
}
exports.pairwise = pairwise;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/pairwise.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var pairwise_1 = require("../../operator/pairwise");
rxjs_1.Observable.prototype.pairwise = pairwise_1.pairwise;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/pairwise":"node_modules/rxjs-compat/operator/pairwise.js"}],"node_modules/rxjs-compat/operator/partition.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return operators_1.partition(predicate, thisArg)(this);
}
exports.partition = partition;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/partition.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var partition_1 = require("../../operator/partition");
rxjs_1.Observable.prototype.partition = partition_1.partition;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/partition":"node_modules/rxjs-compat/operator/partition.js"}],"node_modules/rxjs-compat/operator/pluck.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
    }
    return operators_1.pluck.apply(void 0, properties)(this);
}
exports.pluck = pluck;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/pluck.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var pluck_1 = require("../../operator/pluck");
rxjs_1.Observable.prototype.pluck = pluck_1.pluck;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/pluck":"node_modules/rxjs-compat/operator/pluck.js"}],"node_modules/rxjs-compat/operator/publish.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return operators_1.publish(selector)(this);
}
exports.publish = publish;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/publish.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var publish_1 = require("../../operator/publish");
rxjs_1.Observable.prototype.publish = publish_1.publish;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/publish":"node_modules/rxjs-compat/operator/publish.js"}],"node_modules/rxjs-compat/operator/publishBehavior.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return operators_1.publishBehavior(value)(this);
}
exports.publishBehavior = publishBehavior;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/publishBehavior.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var publishBehavior_1 = require("../../operator/publishBehavior");
rxjs_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/publishBehavior":"node_modules/rxjs-compat/operator/publishBehavior.js"}],"node_modules/rxjs-compat/operator/publishReplay.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return operators_1.publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
}
exports.publishReplay = publishReplay;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/publishReplay.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var publishReplay_1 = require("../../operator/publishReplay");
rxjs_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/publishReplay":"node_modules/rxjs-compat/operator/publishReplay.js"}],"node_modules/rxjs-compat/operator/publishLast.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return operators_1.publishLast()(this);
}
exports.publishLast = publishLast;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/publishLast.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var publishLast_1 = require("../../operator/publishLast");
rxjs_1.Observable.prototype.publishLast = publishLast_1.publishLast;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/publishLast":"node_modules/rxjs-compat/operator/publishLast.js"}],"node_modules/rxjs-compat/operator/race.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return operators_1.race.apply(void 0, observables)(this);
}
exports.race = race;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/race.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var race_1 = require("../../operator/race");
rxjs_1.Observable.prototype.race = race_1.race;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/race":"node_modules/rxjs-compat/operator/race.js"}],"node_modules/rxjs-compat/operator/reduce.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns the
 * accumulated result when the source completes, given an optional seed value.
 *
 * <span class="informal">Combines together all values emitted on the source,
 * using an accumulator function that knows how to join a new source value into
 * the accumulation from the past.</span>
 *
 * <img src="./img/reduce.png" width="100%">
 *
 * Like
 * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
 * `reduce` applies an `accumulator` function against an accumulation and each
 * value of the source Observable (from the past) to reduce it to a single
 * value, emitted on the output Observable. Note that `reduce` will only emit
 * one value, only when the source Observable completes. It is equivalent to
 * applying operator {@link scan} followed by operator {@link last}.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events that happened in 5 seconds</caption>
 * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
 *   .takeUntil(Rx.Observable.interval(5000));
 * var ones = clicksInFiveSeconds.mapTo(1);
 * var seed = 0;
 * var count = ones.reduce((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link count}
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link scan}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator The accumulator function
 * called on each source value.
 * @param {R} [seed] The initial accumulation value.
 * @return {Observable<R>} An Observable that emits a single value that is the
 * result of accumulating the values emitted by the source Observable.
 * @method reduce
 * @owner Observable
 */
function reduce(accumulator, seed) {
    // providing a seed of `undefined` *should* be valid and trigger
    // hasSeed! so don't use `seed !== undefined` checks!
    // For this reason, we have to check it here at the original call site
    // otherwise inside Operator/Subscriber we won't know if `undefined`
    // means they didn't provide anything or if they literally provided `undefined`
    if (arguments.length >= 2) {
        return operators_1.reduce(accumulator, seed)(this);
    }
    return operators_1.reduce(accumulator)(this);
}
exports.reduce = reduce;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/reduce.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var reduce_1 = require("../../operator/reduce");
rxjs_1.Observable.prototype.reduce = reduce_1.reduce;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/reduce":"node_modules/rxjs-compat/operator/reduce.js"}],"node_modules/rxjs-compat/operator/repeat.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) { count = -1; }
    return operators_1.repeat(count)(this);
}
exports.repeat = repeat;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/repeat.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var repeat_1 = require("../../operator/repeat");
rxjs_1.Observable.prototype.repeat = repeat_1.repeat;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/repeat":"node_modules/rxjs-compat/operator/repeat.js"}],"node_modules/rxjs-compat/operator/repeatWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return operators_1.repeatWhen(notifier)(this);
}
exports.repeatWhen = repeatWhen;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/repeatWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var repeatWhen_1 = require("../../operator/repeatWhen");
rxjs_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/repeatWhen":"node_modules/rxjs-compat/operator/repeatWhen.js"}],"node_modules/rxjs-compat/operator/retry.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return operators_1.retry(count)(this);
}
exports.retry = retry;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/retry.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var retry_1 = require("../../operator/retry");
rxjs_1.Observable.prototype.retry = retry_1.retry;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/retry":"node_modules/rxjs-compat/operator/retry.js"}],"node_modules/rxjs-compat/operator/retryWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return operators_1.retryWhen(notifier)(this);
}
exports.retryWhen = retryWhen;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/retryWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var retryWhen_1 = require("../../operator/retryWhen");
rxjs_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/retryWhen":"node_modules/rxjs-compat/operator/retryWhen.js"}],"node_modules/rxjs-compat/operator/sample.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return operators_1.sample(notifier)(this);
}
exports.sample = sample;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/sample.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var sample_1 = require("../../operator/sample");
rxjs_1.Observable.prototype.sample = sample_1.sample;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/sample":"node_modules/rxjs-compat/operator/sample.js"}],"node_modules/rxjs-compat/operator/sampleTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.sampleTime(period, scheduler)(this);
}
exports.sampleTime = sampleTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/sampleTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var sampleTime_1 = require("../../operator/sampleTime");
rxjs_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/sampleTime":"node_modules/rxjs-compat/operator/sampleTime.js"}],"node_modules/rxjs-compat/operator/scan.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return operators_1.scan(accumulator, seed)(this);
    }
    return operators_1.scan(accumulator)(this);
}
exports.scan = scan;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/scan.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var scan_1 = require("../../operator/scan");
rxjs_1.Observable.prototype.scan = scan_1.scan;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/scan":"node_modules/rxjs-compat/operator/scan.js"}],"node_modules/rxjs-compat/operator/sequenceEqual.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return operators_1.sequenceEqual(compareTo, comparor)(this);
}
exports.sequenceEqual = sequenceEqual;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/sequenceEqual.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var sequenceEqual_1 = require("../../operator/sequenceEqual");
rxjs_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/sequenceEqual":"node_modules/rxjs-compat/operator/sequenceEqual.js"}],"node_modules/rxjs-compat/operator/share.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
 *
 * This behaves similarly to .publish().refCount(), with a behavior difference when the source observable emits complete.
 * .publish().refCount() will not resubscribe to the original source, however .share() will resubscribe to the original source.
 * Observable.of("test").publish().refCount() will not re-emit "test" on new subscriptions, Observable.of("test").share() will
 * re-emit "test" to new subscriptions.
 *
 * <img src="./img/share.png" width="100%">
 *
 * @return {Observable<T>} An Observable that upon connection causes the source Observable to emit items to its Observers.
 * @method share
 * @owner Observable
 */
function share() {
    return operators_1.share()(this);
}
exports.share = share;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/share.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var share_1 = require("../../operator/share");
rxjs_1.Observable.prototype.share = share_1.share;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/share":"node_modules/rxjs-compat/operator/share.js"}],"node_modules/rxjs-compat/operator/shareReplay.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        return operators_1.shareReplay(configOrBufferSize)(this);
    }
    return operators_1.shareReplay(configOrBufferSize, windowTime, scheduler)(this);
}
exports.shareReplay = shareReplay;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/shareReplay.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var shareReplay_1 = require("../../operator/shareReplay");
rxjs_1.Observable.prototype.shareReplay = shareReplay_1.shareReplay;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/shareReplay":"node_modules/rxjs-compat/operator/shareReplay.js"}],"node_modules/rxjs-compat/operator/single.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return operators_1.single(predicate)(this);
}
exports.single = single;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/single.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var single_1 = require("../../operator/single");
rxjs_1.Observable.prototype.single = single_1.single;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/single":"node_modules/rxjs-compat/operator/single.js"}],"node_modules/rxjs-compat/operator/skip.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return operators_1.skip(count)(this);
}
exports.skip = skip;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/skip.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var skip_1 = require("../../operator/skip");
rxjs_1.Observable.prototype.skip = skip_1.skip;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/skip":"node_modules/rxjs-compat/operator/skip.js"}],"node_modules/rxjs-compat/operator/skipLast.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return operators_1.skipLast(count)(this);
}
exports.skipLast = skipLast;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/skipLast.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var skipLast_1 = require("../../operator/skipLast");
rxjs_1.Observable.prototype.skipLast = skipLast_1.skipLast;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/skipLast":"node_modules/rxjs-compat/operator/skipLast.js"}],"node_modules/rxjs-compat/operator/skipUntil.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return operators_1.skipUntil(notifier)(this);
}
exports.skipUntil = skipUntil;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/skipUntil.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var skipUntil_1 = require("../../operator/skipUntil");
rxjs_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/skipUntil":"node_modules/rxjs-compat/operator/skipUntil.js"}],"node_modules/rxjs-compat/operator/skipWhile.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return operators_1.skipWhile(predicate)(this);
}
exports.skipWhile = skipWhile;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/skipWhile.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var skipWhile_1 = require("../../operator/skipWhile");
rxjs_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/skipWhile":"node_modules/rxjs-compat/operator/skipWhile.js"}],"node_modules/rxjs-compat/operator/startWith.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    return operators_1.startWith.apply(void 0, array)(this);
}
exports.startWith = startWith;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/startWith.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var startWith_1 = require("../../operator/startWith");
rxjs_1.Observable.prototype.startWith = startWith_1.startWith;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/startWith":"node_modules/rxjs-compat/operator/startWith.js"}],"node_modules/rxjs-compat/operator/subscribeOn.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operators_1.subscribeOn(scheduler, delay)(this);
}
exports.subscribeOn = subscribeOn;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/subscribeOn.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var subscribeOn_1 = require("../../operator/subscribeOn");
rxjs_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/subscribeOn":"node_modules/rxjs-compat/operator/subscribeOn.js"}],"node_modules/rxjs-compat/operator/switch.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return operators_1.switchAll()(this);
}
exports._switch = _switch;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/switch.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var switch_1 = require("../../operator/switch");
rxjs_1.Observable.prototype.switch = switch_1._switch;
rxjs_1.Observable.prototype._switch = switch_1._switch;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/switch":"node_modules/rxjs-compat/operator/switch.js"}],"node_modules/rxjs-compat/operator/switchMap.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project) {
    return operators_1.switchMap(project)(this);
}
exports.switchMap = switchMap;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/switchMap.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var switchMap_1 = require("../../operator/switchMap");
rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/switchMap":"node_modules/rxjs-compat/operator/switchMap.js"}],"node_modules/rxjs-compat/operator/switchMapTo.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable) {
    return operators_1.switchMapTo(innerObservable)(this);
}
exports.switchMapTo = switchMapTo;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/switchMapTo.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var switchMapTo_1 = require("../../operator/switchMapTo");
rxjs_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/switchMapTo":"node_modules/rxjs-compat/operator/switchMapTo.js"}],"node_modules/rxjs-compat/operator/take.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return operators_1.take(count)(this);
}
exports.take = take;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/take.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var take_1 = require("../../operator/take");
rxjs_1.Observable.prototype.take = take_1.take;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/take":"node_modules/rxjs-compat/operator/take.js"}],"node_modules/rxjs-compat/operator/takeLast.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    return operators_1.takeLast(count)(this);
}
exports.takeLast = takeLast;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/takeLast.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var takeLast_1 = require("../../operator/takeLast");
rxjs_1.Observable.prototype.takeLast = takeLast_1.takeLast;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/takeLast":"node_modules/rxjs-compat/operator/takeLast.js"}],"node_modules/rxjs-compat/operator/takeUntil.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits a value. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value, the output Observable stops mirroring the source Observable
 * and completes. If the `notifier` doesn't emit any value and completes
 * then `takeUntil` will pass all values.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return operators_1.takeUntil(notifier)(this);
}
exports.takeUntil = takeUntil;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/takeUntil.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var takeUntil_1 = require("../../operator/takeUntil");
rxjs_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/takeUntil":"node_modules/rxjs-compat/operator/takeUntil.js"}],"node_modules/rxjs-compat/operator/takeWhile.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return operators_1.takeWhile(predicate)(this);
}
exports.takeWhile = takeWhile;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/takeWhile.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var takeWhile_1 = require("../../operator/takeWhile");
rxjs_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/takeWhile":"node_modules/rxjs-compat/operator/takeWhile.js"}],"node_modules/rxjs-compat/operator/throttle.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var internal_compatibility_1 = require("rxjs/internal-compatibility");
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) { config = internal_compatibility_1.defaultThrottleConfig; }
    return operators_1.throttle(durationSelector, config)(this);
}
exports.throttle = throttle;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js","rxjs/internal-compatibility":"node_modules/rxjs/_esm5/internal-compatibility/index.js"}],"node_modules/rxjs-compat/add/operator/throttle.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var throttle_1 = require("../../operator/throttle");
rxjs_1.Observable.prototype.throttle = throttle_1.throttle;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/throttle":"node_modules/rxjs-compat/operator/throttle.js"}],"node_modules/rxjs-compat/operator/throttleTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var internal_compatibility_1 = require("rxjs/internal-compatibility");
var operators_1 = require("rxjs/operators");
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=asyncScheduler] The {@link SchedulerLike} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    if (config === void 0) { config = internal_compatibility_1.defaultThrottleConfig; }
    return operators_1.throttleTime(duration, scheduler, config)(this);
}
exports.throttleTime = throttleTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/internal-compatibility":"node_modules/rxjs/_esm5/internal-compatibility/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/throttleTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var throttleTime_1 = require("../../operator/throttleTime");
rxjs_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/throttleTime":"node_modules/rxjs-compat/operator/throttleTime.js"}],"node_modules/rxjs-compat/operator/timeInterval.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.timeInterval(scheduler)(this);
}
exports.timeInterval = timeInterval;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/timeInterval.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var timeInterval_1 = require("../../operator/timeInterval");
rxjs_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/timeInterval":"node_modules/rxjs-compat/operator/timeInterval.js"}],"node_modules/rxjs-compat/operator/timeout.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.timeout(due, scheduler)(this);
}
exports.timeout = timeout;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/timeout.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var timeout_1 = require("../../operator/timeout");
rxjs_1.Observable.prototype.timeout = timeout_1.timeout;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/timeout":"node_modules/rxjs-compat/operator/timeout.js"}],"node_modules/rxjs-compat/operator/timeoutWith.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.timeoutWith(due, withObservable, scheduler)(this);
}
exports.timeoutWith = timeoutWith;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/timeoutWith.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var timeoutWith_1 = require("../../operator/timeoutWith");
rxjs_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/timeoutWith":"node_modules/rxjs-compat/operator/timeoutWith.js"}],"node_modules/rxjs-compat/operator/timestamp.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) { scheduler = rxjs_1.asyncScheduler; }
    return operators_1.timestamp(scheduler)(this);
}
exports.timestamp = timestamp;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/timestamp.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var timestamp_1 = require("../../operator/timestamp");
rxjs_1.Observable.prototype.timestamp = timestamp_1.timestamp;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/timestamp":"node_modules/rxjs-compat/operator/timestamp.js"}],"node_modules/rxjs-compat/operator/toArray.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return operators_1.toArray()(this);
}
exports.toArray = toArray;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/toArray.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var toArray_1 = require("../../operator/toArray");
rxjs_1.Observable.prototype.toArray = toArray_1.toArray;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/toArray":"node_modules/rxjs-compat/operator/toArray.js"}],"node_modules/rxjs-compat/add/operator/toPromise.js":[function(require,module,exports) {
// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.

},{}],"node_modules/rxjs-compat/operator/window.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return operators_1.window(windowBoundaries)(this);
}
exports.window = window;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/window.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var window_1 = require("../../operator/window");
rxjs_1.Observable.prototype.window = window_1.window;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/window":"node_modules/rxjs-compat/operator/window.js"}],"node_modules/rxjs-compat/operator/windowCount.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    return operators_1.windowCount(windowSize, startWindowEvery)(this);
}
exports.windowCount = windowCount;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/windowCount.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var windowCount_1 = require("../../operator/windowCount");
rxjs_1.Observable.prototype.windowCount = windowCount_1.windowCount;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/windowCount":"node_modules/rxjs-compat/operator/windowCount.js"}],"node_modules/rxjs-compat/operator/windowTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var internal_compatibility_1 = require("rxjs/internal-compatibility");
var operators_1 = require("rxjs/operators");
function windowTime(windowTimeSpan) {
    var scheduler = rxjs_1.asyncScheduler;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (internal_compatibility_1.isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (internal_compatibility_1.isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (internal_compatibility_1.isNumeric(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (internal_compatibility_1.isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (internal_compatibility_1.isNumeric(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return operators_1.windowTime(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
}
exports.windowTime = windowTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/internal-compatibility":"node_modules/rxjs/_esm5/internal-compatibility/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/windowTime.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var windowTime_1 = require("../../operator/windowTime");
rxjs_1.Observable.prototype.windowTime = windowTime_1.windowTime;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/windowTime":"node_modules/rxjs-compat/operator/windowTime.js"}],"node_modules/rxjs-compat/operator/windowToggle.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return operators_1.windowToggle(openings, closingSelector)(this);
}
exports.windowToggle = windowToggle;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/windowToggle.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var windowToggle_1 = require("../../operator/windowToggle");
rxjs_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/windowToggle":"node_modules/rxjs-compat/operator/windowToggle.js"}],"node_modules/rxjs-compat/operator/windowWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return operators_1.windowWhen(closingSelector)(this);
}
exports.windowWhen = windowWhen;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/windowWhen.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var windowWhen_1 = require("../../operator/windowWhen");
rxjs_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/windowWhen":"node_modules/rxjs-compat/operator/windowWhen.js"}],"node_modules/rxjs-compat/operator/withLatestFrom.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return operators_1.withLatestFrom.apply(void 0, args)(this);
}
exports.withLatestFrom = withLatestFrom;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/withLatestFrom.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var withLatestFrom_1 = require("../../operator/withLatestFrom");
rxjs_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/withLatestFrom":"node_modules/rxjs-compat/operator/withLatestFrom.js"}],"node_modules/rxjs-compat/operator/zip.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return this.lift.call(rxjs_1.zip.apply(void 0, [this].concat(observables)));
}
exports.zipProto = zipProto;

},{"rxjs":"node_modules/rxjs/_esm5/index.js"}],"node_modules/rxjs-compat/add/operator/zip.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var zip_1 = require("../../operator/zip");
rxjs_1.Observable.prototype.zip = zip_1.zipProto;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/zip":"node_modules/rxjs-compat/operator/zip.js"}],"node_modules/rxjs-compat/operator/zipAll.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return operators_1.zipAll(project)(this);
}
exports.zipAll = zipAll;

},{"rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs-compat/add/operator/zipAll.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var zipAll_1 = require("../../operator/zipAll");
rxjs_1.Observable.prototype.zipAll = zipAll_1.zipAll;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","../../operator/zipAll":"node_modules/rxjs-compat/operator/zipAll.js"}],"node_modules/rxjs/_esm5/internal/testing/SubscriptionLog.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionLog = void 0;

var SubscriptionLog =
/*@__PURE__*/
function () {
  function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
    if (unsubscribedFrame === void 0) {
      unsubscribedFrame = Number.POSITIVE_INFINITY;
    }

    this.subscribedFrame = subscribedFrame;
    this.unsubscribedFrame = unsubscribedFrame;
  }

  return SubscriptionLog;
}();

exports.SubscriptionLog = SubscriptionLog;
},{}],"node_modules/rxjs/_esm5/internal/testing/SubscriptionLoggable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionLoggable = void 0;

var _SubscriptionLog = require("./SubscriptionLog");

/** PURE_IMPORTS_START _SubscriptionLog PURE_IMPORTS_END */
var SubscriptionLoggable =
/*@__PURE__*/
function () {
  function SubscriptionLoggable() {
    this.subscriptions = [];
  }

  SubscriptionLoggable.prototype.logSubscribedFrame = function () {
    this.subscriptions.push(new _SubscriptionLog.SubscriptionLog(this.scheduler.now()));
    return this.subscriptions.length - 1;
  };

  SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
    var subscriptionLogs = this.subscriptions;
    var oldSubscriptionLog = subscriptionLogs[index];
    subscriptionLogs[index] = new _SubscriptionLog.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
  };

  return SubscriptionLoggable;
}();

exports.SubscriptionLoggable = SubscriptionLoggable;
},{"./SubscriptionLog":"node_modules/rxjs/_esm5/internal/testing/SubscriptionLog.js"}],"node_modules/rxjs/_esm5/internal/testing/ColdObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColdObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _SubscriptionLoggable = require("./SubscriptionLoggable");

var _applyMixins = require("../util/applyMixins");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_Subscription,_SubscriptionLoggable,_util_applyMixins PURE_IMPORTS_END */
var ColdObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ColdObservable, _super);

  function ColdObservable(messages, scheduler) {
    var _this = _super.call(this, function (subscriber) {
      var observable = this;
      var index = observable.logSubscribedFrame();
      var subscription = new _Subscription.Subscription();
      subscription.add(new _Subscription.Subscription(function () {
        observable.logUnsubscribedFrame(index);
      }));
      observable.scheduleMessages(subscriber);
      return subscription;
    }) || this;

    _this.messages = messages;
    _this.subscriptions = [];
    _this.scheduler = scheduler;
    return _this;
  }

  ColdObservable.prototype.scheduleMessages = function (subscriber) {
    var messagesLength = this.messages.length;

    for (var i = 0; i < messagesLength; i++) {
      var message = this.messages[i];
      subscriber.add(this.scheduler.schedule(function (_a) {
        var message = _a.message,
            subscriber = _a.subscriber;
        message.notification.observe(subscriber);
      }, message.frame, {
        message: message,
        subscriber: subscriber
      }));
    }
  };

  return ColdObservable;
}(_Observable.Observable);

exports.ColdObservable = ColdObservable;

/*@__PURE__*/
(0, _applyMixins.applyMixins)(ColdObservable, [_SubscriptionLoggable.SubscriptionLoggable]);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","./SubscriptionLoggable":"node_modules/rxjs/_esm5/internal/testing/SubscriptionLoggable.js","../util/applyMixins":"node_modules/rxjs/_esm5/internal/util/applyMixins.js"}],"node_modules/rxjs/_esm5/internal/testing/HotObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HotObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _Subscription = require("../Subscription");

var _SubscriptionLoggable = require("./SubscriptionLoggable");

var _applyMixins = require("../util/applyMixins");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_SubscriptionLoggable,_util_applyMixins PURE_IMPORTS_END */
var HotObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(HotObservable, _super);

  function HotObservable(messages, scheduler) {
    var _this = _super.call(this) || this;

    _this.messages = messages;
    _this.subscriptions = [];
    _this.scheduler = scheduler;
    return _this;
  }

  HotObservable.prototype._subscribe = function (subscriber) {
    var subject = this;
    var index = subject.logSubscribedFrame();
    var subscription = new _Subscription.Subscription();
    subscription.add(new _Subscription.Subscription(function () {
      subject.logUnsubscribedFrame(index);
    }));
    subscription.add(_super.prototype._subscribe.call(this, subscriber));
    return subscription;
  };

  HotObservable.prototype.setup = function () {
    var subject = this;
    var messagesLength = subject.messages.length;

    for (var i = 0; i < messagesLength; i++) {
      (function () {
        var message = subject.messages[i];
        subject.scheduler.schedule(function () {
          message.notification.observe(subject);
        }, message.frame);
      })();
    }
  };

  return HotObservable;
}(_Subject.Subject);

exports.HotObservable = HotObservable;

/*@__PURE__*/
(0, _applyMixins.applyMixins)(HotObservable, [_SubscriptionLoggable.SubscriptionLoggable]);
},{"tslib":"node_modules/tslib/tslib.es6.js","../Subject":"node_modules/rxjs/_esm5/internal/Subject.js","../Subscription":"node_modules/rxjs/_esm5/internal/Subscription.js","./SubscriptionLoggable":"node_modules/rxjs/_esm5/internal/testing/SubscriptionLoggable.js","../util/applyMixins":"node_modules/rxjs/_esm5/internal/util/applyMixins.js"}],"node_modules/rxjs/_esm5/internal/testing/TestScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("../Observable");

var _Notification = require("../Notification");

var _ColdObservable = require("./ColdObservable");

var _HotObservable = require("./HotObservable");

var _SubscriptionLog = require("./SubscriptionLog");

var _VirtualTimeScheduler = require("../scheduler/VirtualTimeScheduler");

var _AsyncScheduler = require("../scheduler/AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_Notification,_ColdObservable,_HotObservable,_SubscriptionLog,_scheduler_VirtualTimeScheduler,_scheduler_AsyncScheduler PURE_IMPORTS_END */
var defaultMaxFrame = 750;

var TestScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(TestScheduler, _super);

  function TestScheduler(assertDeepEqual) {
    var _this = _super.call(this, _VirtualTimeScheduler.VirtualAction, defaultMaxFrame) || this;

    _this.assertDeepEqual = assertDeepEqual;
    _this.hotObservables = [];
    _this.coldObservables = [];
    _this.flushTests = [];
    _this.runMode = false;
    return _this;
  }

  TestScheduler.prototype.createTime = function (marbles) {
    var indexOf = marbles.indexOf('|');

    if (indexOf === -1) {
      throw new Error('marble diagram for time should have a completion marker "|"');
    }

    return indexOf * TestScheduler.frameTimeFactor;
  };

  TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
    if (marbles.indexOf('^') !== -1) {
      throw new Error('cold observable cannot have subscription offset "^"');
    }

    if (marbles.indexOf('!') !== -1) {
      throw new Error('cold observable cannot have unsubscription marker "!"');
    }

    var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
    var cold = new _ColdObservable.ColdObservable(messages, this);
    this.coldObservables.push(cold);
    return cold;
  };

  TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
    if (marbles.indexOf('!') !== -1) {
      throw new Error('hot observable cannot have unsubscription marker "!"');
    }

    var messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
    var subject = new _HotObservable.HotObservable(messages, this);
    this.hotObservables.push(subject);
    return subject;
  };

  TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
    var _this = this;

    var messages = [];
    observable.subscribe(function (value) {
      messages.push({
        frame: _this.frame - outerFrame,
        notification: _Notification.Notification.createNext(value)
      });
    }, function (err) {
      messages.push({
        frame: _this.frame - outerFrame,
        notification: _Notification.Notification.createError(err)
      });
    }, function () {
      messages.push({
        frame: _this.frame - outerFrame,
        notification: _Notification.Notification.createComplete()
      });
    });
    return messages;
  };

  TestScheduler.prototype.expectObservable = function (observable, subscriptionMarbles) {
    var _this = this;

    if (subscriptionMarbles === void 0) {
      subscriptionMarbles = null;
    }

    var actual = [];
    var flushTest = {
      actual: actual,
      ready: false
    };
    var subscriptionParsed = TestScheduler.parseMarblesAsSubscriptions(subscriptionMarbles, this.runMode);
    var subscriptionFrame = subscriptionParsed.subscribedFrame === Number.POSITIVE_INFINITY ? 0 : subscriptionParsed.subscribedFrame;
    var unsubscriptionFrame = subscriptionParsed.unsubscribedFrame;
    var subscription;
    this.schedule(function () {
      subscription = observable.subscribe(function (x) {
        var value = x;

        if (x instanceof _Observable.Observable) {
          value = _this.materializeInnerObservable(value, _this.frame);
        }

        actual.push({
          frame: _this.frame,
          notification: _Notification.Notification.createNext(value)
        });
      }, function (err) {
        actual.push({
          frame: _this.frame,
          notification: _Notification.Notification.createError(err)
        });
      }, function () {
        actual.push({
          frame: _this.frame,
          notification: _Notification.Notification.createComplete()
        });
      });
    }, subscriptionFrame);

    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
      this.schedule(function () {
        return subscription.unsubscribe();
      }, unsubscriptionFrame);
    }

    this.flushTests.push(flushTest);
    var runMode = this.runMode;
    return {
      toBe: function (marbles, values, errorValue) {
        flushTest.ready = true;
        flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true, runMode);
      }
    };
  };

  TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
    var flushTest = {
      actual: actualSubscriptionLogs,
      ready: false
    };
    this.flushTests.push(flushTest);
    var runMode = this.runMode;
    return {
      toBe: function (marbles) {
        var marblesArray = typeof marbles === 'string' ? [marbles] : marbles;
        flushTest.ready = true;
        flushTest.expected = marblesArray.map(function (marbles) {
          return TestScheduler.parseMarblesAsSubscriptions(marbles, runMode);
        });
      }
    };
  };

  TestScheduler.prototype.flush = function () {
    var _this = this;

    var hotObservables = this.hotObservables;

    while (hotObservables.length > 0) {
      hotObservables.shift().setup();
    }

    _super.prototype.flush.call(this);

    this.flushTests = this.flushTests.filter(function (test) {
      if (test.ready) {
        _this.assertDeepEqual(test.actual, test.expected);

        return false;
      }

      return true;
    });
  };

  TestScheduler.parseMarblesAsSubscriptions = function (marbles, runMode) {
    var _this = this;

    if (runMode === void 0) {
      runMode = false;
    }

    if (typeof marbles !== 'string') {
      return new _SubscriptionLog.SubscriptionLog(Number.POSITIVE_INFINITY);
    }

    var len = marbles.length;
    var groupStart = -1;
    var subscriptionFrame = Number.POSITIVE_INFINITY;
    var unsubscriptionFrame = Number.POSITIVE_INFINITY;
    var frame = 0;

    var _loop_1 = function (i) {
      var nextFrame = frame;

      var advanceFrameBy = function (count) {
        nextFrame += count * _this.frameTimeFactor;
      };

      var c = marbles[i];

      switch (c) {
        case ' ':
          if (!runMode) {
            advanceFrameBy(1);
          }

          break;

        case '-':
          advanceFrameBy(1);
          break;

        case '(':
          groupStart = frame;
          advanceFrameBy(1);
          break;

        case ')':
          groupStart = -1;
          advanceFrameBy(1);
          break;

        case '^':
          if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
            throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
          }

          subscriptionFrame = groupStart > -1 ? groupStart : frame;
          advanceFrameBy(1);
          break;

        case '!':
          if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            throw new Error('found a second subscription point \'^\' in a ' + 'subscription marble diagram. There can only be one.');
          }

          unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
          break;

        default:
          if (runMode && c.match(/^[0-9]$/)) {
            if (i === 0 || marbles[i - 1] === ' ') {
              var buffer = marbles.slice(i);
              var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);

              if (match) {
                i += match[0].length - 1;
                var duration = parseFloat(match[1]);
                var unit = match[2];
                var durationInMs = void 0;

                switch (unit) {
                  case 'ms':
                    durationInMs = duration;
                    break;

                  case 's':
                    durationInMs = duration * 1000;
                    break;

                  case 'm':
                    durationInMs = duration * 1000 * 60;
                    break;

                  default:
                    break;
                }

                advanceFrameBy(durationInMs / this_1.frameTimeFactor);
                break;
              }
            }
          }

          throw new Error('there can only be \'^\' and \'!\' markers in a ' + 'subscription marble diagram. Found instead \'' + c + '\'.');
      }

      frame = nextFrame;
      out_i_1 = i;
    };

    var this_1 = this,
        out_i_1;

    for (var i = 0; i < len; i++) {
      _loop_1(i);

      i = out_i_1;
    }

    if (unsubscriptionFrame < 0) {
      return new _SubscriptionLog.SubscriptionLog(subscriptionFrame);
    } else {
      return new _SubscriptionLog.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
    }
  };

  TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables, runMode) {
    var _this = this;

    if (materializeInnerObservables === void 0) {
      materializeInnerObservables = false;
    }

    if (runMode === void 0) {
      runMode = false;
    }

    if (marbles.indexOf('!') !== -1) {
      throw new Error('conventional marble diagrams cannot have the ' + 'unsubscription marker "!"');
    }

    var len = marbles.length;
    var testMessages = [];
    var subIndex = runMode ? marbles.replace(/^[ ]+/, '').indexOf('^') : marbles.indexOf('^');
    var frame = subIndex === -1 ? 0 : subIndex * -this.frameTimeFactor;
    var getValue = typeof values !== 'object' ? function (x) {
      return x;
    } : function (x) {
      if (materializeInnerObservables && values[x] instanceof _ColdObservable.ColdObservable) {
        return values[x].messages;
      }

      return values[x];
    };
    var groupStart = -1;

    var _loop_2 = function (i) {
      var nextFrame = frame;

      var advanceFrameBy = function (count) {
        nextFrame += count * _this.frameTimeFactor;
      };

      var notification = void 0;
      var c = marbles[i];

      switch (c) {
        case ' ':
          if (!runMode) {
            advanceFrameBy(1);
          }

          break;

        case '-':
          advanceFrameBy(1);
          break;

        case '(':
          groupStart = frame;
          advanceFrameBy(1);
          break;

        case ')':
          groupStart = -1;
          advanceFrameBy(1);
          break;

        case '|':
          notification = _Notification.Notification.createComplete();
          advanceFrameBy(1);
          break;

        case '^':
          advanceFrameBy(1);
          break;

        case '#':
          notification = _Notification.Notification.createError(errorValue || 'error');
          advanceFrameBy(1);
          break;

        default:
          if (runMode && c.match(/^[0-9]$/)) {
            if (i === 0 || marbles[i - 1] === ' ') {
              var buffer = marbles.slice(i);
              var match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);

              if (match) {
                i += match[0].length - 1;
                var duration = parseFloat(match[1]);
                var unit = match[2];
                var durationInMs = void 0;

                switch (unit) {
                  case 'ms':
                    durationInMs = duration;
                    break;

                  case 's':
                    durationInMs = duration * 1000;
                    break;

                  case 'm':
                    durationInMs = duration * 1000 * 60;
                    break;

                  default:
                    break;
                }

                advanceFrameBy(durationInMs / this_2.frameTimeFactor);
                break;
              }
            }
          }

          notification = _Notification.Notification.createNext(getValue(c));
          advanceFrameBy(1);
          break;
      }

      if (notification) {
        testMessages.push({
          frame: groupStart > -1 ? groupStart : frame,
          notification: notification
        });
      }

      frame = nextFrame;
      out_i_2 = i;
    };

    var this_2 = this,
        out_i_2;

    for (var i = 0; i < len; i++) {
      _loop_2(i);

      i = out_i_2;
    }

    return testMessages;
  };

  TestScheduler.prototype.run = function (callback) {
    var prevFrameTimeFactor = TestScheduler.frameTimeFactor;
    var prevMaxFrames = this.maxFrames;
    TestScheduler.frameTimeFactor = 1;
    this.maxFrames = Number.POSITIVE_INFINITY;
    this.runMode = true;
    _AsyncScheduler.AsyncScheduler.delegate = this;
    var helpers = {
      cold: this.createColdObservable.bind(this),
      hot: this.createHotObservable.bind(this),
      flush: this.flush.bind(this),
      expectObservable: this.expectObservable.bind(this),
      expectSubscriptions: this.expectSubscriptions.bind(this)
    };

    try {
      var ret = callback(helpers);
      this.flush();
      return ret;
    } finally {
      TestScheduler.frameTimeFactor = prevFrameTimeFactor;
      this.maxFrames = prevMaxFrames;
      this.runMode = false;
      _AsyncScheduler.AsyncScheduler.delegate = undefined;
    }
  };

  return TestScheduler;
}(_VirtualTimeScheduler.VirtualTimeScheduler);

exports.TestScheduler = TestScheduler;
},{"tslib":"node_modules/tslib/tslib.es6.js","../Observable":"node_modules/rxjs/_esm5/internal/Observable.js","../Notification":"node_modules/rxjs/_esm5/internal/Notification.js","./ColdObservable":"node_modules/rxjs/_esm5/internal/testing/ColdObservable.js","./HotObservable":"node_modules/rxjs/_esm5/internal/testing/HotObservable.js","./SubscriptionLog":"node_modules/rxjs/_esm5/internal/testing/SubscriptionLog.js","../scheduler/VirtualTimeScheduler":"node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js","../scheduler/AsyncScheduler":"node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"node_modules/rxjs/_esm5/testing/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TestScheduler", {
  enumerable: true,
  get: function () {
    return _TestScheduler.TestScheduler;
  }
});

var _TestScheduler = require("../internal/testing/TestScheduler");
},{"../internal/testing/TestScheduler":"node_modules/rxjs/_esm5/internal/testing/TestScheduler.js"}],"node_modules/rxjs-compat/Rx.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var rxjs_1 = require("rxjs");
exports.Observable = rxjs_1.Observable;
exports.Subject = rxjs_1.Subject;
var internal_compatibility_1 = require("rxjs/internal-compatibility");
exports.AnonymousSubject = internal_compatibility_1.AnonymousSubject;
/* tslint:enable:no-unused-variable */
var internal_compatibility_2 = require("rxjs/internal-compatibility");
exports.config = internal_compatibility_2.config;
// statics
/* tslint:disable:no-use-before-declare */
require("./add/observable/bindCallback");
require("./add/observable/bindNodeCallback");
require("./add/observable/combineLatest");
require("./add/observable/concat");
require("./add/observable/defer");
require("./add/observable/empty");
require("./add/observable/forkJoin");
require("./add/observable/from");
require("./add/observable/fromEvent");
require("./add/observable/fromEventPattern");
require("./add/observable/fromPromise");
require("./add/observable/generate");
require("./add/observable/if");
require("./add/observable/interval");
require("./add/observable/merge");
require("./add/observable/race");
require("./add/observable/never");
require("./add/observable/of");
require("./add/observable/onErrorResumeNext");
require("./add/observable/pairs");
require("./add/observable/range");
require("./add/observable/using");
require("./add/observable/throw");
require("./add/observable/timer");
require("./add/observable/zip");
//dom
require("./add/observable/dom/ajax");
require("./add/observable/dom/webSocket");
//internal/operators
require("./add/operator/buffer");
require("./add/operator/bufferCount");
require("./add/operator/bufferTime");
require("./add/operator/bufferToggle");
require("./add/operator/bufferWhen");
require("./add/operator/catch");
require("./add/operator/combineAll");
require("./add/operator/combineLatest");
require("./add/operator/concat");
require("./add/operator/concatAll");
require("./add/operator/concatMap");
require("./add/operator/concatMapTo");
require("./add/operator/count");
require("./add/operator/dematerialize");
require("./add/operator/debounce");
require("./add/operator/debounceTime");
require("./add/operator/defaultIfEmpty");
require("./add/operator/delay");
require("./add/operator/delayWhen");
require("./add/operator/distinct");
require("./add/operator/distinctUntilChanged");
require("./add/operator/distinctUntilKeyChanged");
require("./add/operator/do");
require("./add/operator/exhaust");
require("./add/operator/exhaustMap");
require("./add/operator/expand");
require("./add/operator/elementAt");
require("./add/operator/filter");
require("./add/operator/finally");
require("./add/operator/find");
require("./add/operator/findIndex");
require("./add/operator/first");
require("./add/operator/groupBy");
require("./add/operator/ignoreElements");
require("./add/operator/isEmpty");
require("./add/operator/audit");
require("./add/operator/auditTime");
require("./add/operator/last");
require("./add/operator/let");
require("./add/operator/every");
require("./add/operator/map");
require("./add/operator/mapTo");
require("./add/operator/materialize");
require("./add/operator/max");
require("./add/operator/merge");
require("./add/operator/mergeAll");
require("./add/operator/mergeMap");
require("./add/operator/mergeMapTo");
require("./add/operator/mergeScan");
require("./add/operator/min");
require("./add/operator/multicast");
require("./add/operator/observeOn");
require("./add/operator/onErrorResumeNext");
require("./add/operator/pairwise");
require("./add/operator/partition");
require("./add/operator/pluck");
require("./add/operator/publish");
require("./add/operator/publishBehavior");
require("./add/operator/publishReplay");
require("./add/operator/publishLast");
require("./add/operator/race");
require("./add/operator/reduce");
require("./add/operator/repeat");
require("./add/operator/repeatWhen");
require("./add/operator/retry");
require("./add/operator/retryWhen");
require("./add/operator/sample");
require("./add/operator/sampleTime");
require("./add/operator/scan");
require("./add/operator/sequenceEqual");
require("./add/operator/share");
require("./add/operator/shareReplay");
require("./add/operator/single");
require("./add/operator/skip");
require("./add/operator/skipLast");
require("./add/operator/skipUntil");
require("./add/operator/skipWhile");
require("./add/operator/startWith");
require("./add/operator/subscribeOn");
require("./add/operator/switch");
require("./add/operator/switchMap");
require("./add/operator/switchMapTo");
require("./add/operator/take");
require("./add/operator/takeLast");
require("./add/operator/takeUntil");
require("./add/operator/takeWhile");
require("./add/operator/throttle");
require("./add/operator/throttleTime");
require("./add/operator/timeInterval");
require("./add/operator/timeout");
require("./add/operator/timeoutWith");
require("./add/operator/timestamp");
require("./add/operator/toArray");
require("./add/operator/toPromise");
require("./add/operator/window");
require("./add/operator/windowCount");
require("./add/operator/windowTime");
require("./add/operator/windowToggle");
require("./add/operator/windowWhen");
require("./add/operator/withLatestFrom");
require("./add/operator/zip");
require("./add/operator/zipAll");
/* tslint:disable:no-unused-variable */
var rxjs_2 = require("rxjs");
exports.Subscription = rxjs_2.Subscription;
exports.ReplaySubject = rxjs_2.ReplaySubject;
exports.BehaviorSubject = rxjs_2.BehaviorSubject;
exports.Notification = rxjs_2.Notification;
exports.EmptyError = rxjs_2.EmptyError;
exports.ArgumentOutOfRangeError = rxjs_2.ArgumentOutOfRangeError;
exports.ObjectUnsubscribedError = rxjs_2.ObjectUnsubscribedError;
exports.UnsubscriptionError = rxjs_2.UnsubscriptionError;
exports.pipe = rxjs_2.pipe;
var testing_1 = require("rxjs/testing");
exports.TestScheduler = testing_1.TestScheduler;
var rxjs_3 = require("rxjs");
exports.Subscriber = rxjs_3.Subscriber;
exports.AsyncSubject = rxjs_3.AsyncSubject;
exports.ConnectableObservable = rxjs_3.ConnectableObservable;
exports.TimeoutError = rxjs_3.TimeoutError;
exports.VirtualTimeScheduler = rxjs_3.VirtualTimeScheduler;
var ajax_1 = require("rxjs/ajax");
exports.AjaxResponse = ajax_1.AjaxResponse;
exports.AjaxError = ajax_1.AjaxError;
exports.AjaxTimeoutError = ajax_1.AjaxTimeoutError;
var rxjs_4 = require("rxjs");
var internal_compatibility_3 = require("rxjs/internal-compatibility");
var internal_compatibility_4 = require("rxjs/internal-compatibility");
exports.TimeInterval = internal_compatibility_4.TimeInterval;
exports.Timestamp = internal_compatibility_4.Timestamp;
var _operators = require("rxjs/operators");
exports.operators = _operators;
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which is the same
 * queue used for promises. Basically after the current job, but before the next
 * job. Use this for asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: rxjs_4.asapScheduler,
    queue: rxjs_4.queueScheduler,
    animationFrame: rxjs_4.animationFrameScheduler,
    async: rxjs_4.asyncScheduler
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: internal_compatibility_3.rxSubscriber,
    observable: internal_compatibility_3.observable,
    iterator: internal_compatibility_3.iterator
};
exports.Symbol = Symbol;

},{"rxjs":"node_modules/rxjs/_esm5/index.js","rxjs/internal-compatibility":"node_modules/rxjs/_esm5/internal-compatibility/index.js","./add/observable/bindCallback":"node_modules/rxjs-compat/add/observable/bindCallback.js","./add/observable/bindNodeCallback":"node_modules/rxjs-compat/add/observable/bindNodeCallback.js","./add/observable/combineLatest":"node_modules/rxjs-compat/add/observable/combineLatest.js","./add/observable/concat":"node_modules/rxjs-compat/add/observable/concat.js","./add/observable/defer":"node_modules/rxjs-compat/add/observable/defer.js","./add/observable/empty":"node_modules/rxjs-compat/add/observable/empty.js","./add/observable/forkJoin":"node_modules/rxjs-compat/add/observable/forkJoin.js","./add/observable/from":"node_modules/rxjs-compat/add/observable/from.js","./add/observable/fromEvent":"node_modules/rxjs-compat/add/observable/fromEvent.js","./add/observable/fromEventPattern":"node_modules/rxjs-compat/add/observable/fromEventPattern.js","./add/observable/fromPromise":"node_modules/rxjs-compat/add/observable/fromPromise.js","./add/observable/generate":"node_modules/rxjs-compat/add/observable/generate.js","./add/observable/if":"node_modules/rxjs-compat/add/observable/if.js","./add/observable/interval":"node_modules/rxjs-compat/add/observable/interval.js","./add/observable/merge":"node_modules/rxjs-compat/add/observable/merge.js","./add/observable/race":"node_modules/rxjs-compat/add/observable/race.js","./add/observable/never":"node_modules/rxjs-compat/add/observable/never.js","./add/observable/of":"node_modules/rxjs-compat/add/observable/of.js","./add/observable/onErrorResumeNext":"node_modules/rxjs-compat/add/observable/onErrorResumeNext.js","./add/observable/pairs":"node_modules/rxjs-compat/add/observable/pairs.js","./add/observable/range":"node_modules/rxjs-compat/add/observable/range.js","./add/observable/using":"node_modules/rxjs-compat/add/observable/using.js","./add/observable/throw":"node_modules/rxjs-compat/add/observable/throw.js","./add/observable/timer":"node_modules/rxjs-compat/add/observable/timer.js","./add/observable/zip":"node_modules/rxjs-compat/add/observable/zip.js","./add/observable/dom/ajax":"node_modules/rxjs-compat/add/observable/dom/ajax.js","./add/observable/dom/webSocket":"node_modules/rxjs-compat/add/observable/dom/webSocket.js","./add/operator/buffer":"node_modules/rxjs-compat/add/operator/buffer.js","./add/operator/bufferCount":"node_modules/rxjs-compat/add/operator/bufferCount.js","./add/operator/bufferTime":"node_modules/rxjs-compat/add/operator/bufferTime.js","./add/operator/bufferToggle":"node_modules/rxjs-compat/add/operator/bufferToggle.js","./add/operator/bufferWhen":"node_modules/rxjs-compat/add/operator/bufferWhen.js","./add/operator/catch":"node_modules/rxjs-compat/add/operator/catch.js","./add/operator/combineAll":"node_modules/rxjs-compat/add/operator/combineAll.js","./add/operator/combineLatest":"node_modules/rxjs-compat/add/operator/combineLatest.js","./add/operator/concat":"node_modules/rxjs-compat/add/operator/concat.js","./add/operator/concatAll":"node_modules/rxjs-compat/add/operator/concatAll.js","./add/operator/concatMap":"node_modules/rxjs-compat/add/operator/concatMap.js","./add/operator/concatMapTo":"node_modules/rxjs-compat/add/operator/concatMapTo.js","./add/operator/count":"node_modules/rxjs-compat/add/operator/count.js","./add/operator/dematerialize":"node_modules/rxjs-compat/add/operator/dematerialize.js","./add/operator/debounce":"node_modules/rxjs-compat/add/operator/debounce.js","./add/operator/debounceTime":"node_modules/rxjs-compat/add/operator/debounceTime.js","./add/operator/defaultIfEmpty":"node_modules/rxjs-compat/add/operator/defaultIfEmpty.js","./add/operator/delay":"node_modules/rxjs-compat/add/operator/delay.js","./add/operator/delayWhen":"node_modules/rxjs-compat/add/operator/delayWhen.js","./add/operator/distinct":"node_modules/rxjs-compat/add/operator/distinct.js","./add/operator/distinctUntilChanged":"node_modules/rxjs-compat/add/operator/distinctUntilChanged.js","./add/operator/distinctUntilKeyChanged":"node_modules/rxjs-compat/add/operator/distinctUntilKeyChanged.js","./add/operator/do":"node_modules/rxjs-compat/add/operator/do.js","./add/operator/exhaust":"node_modules/rxjs-compat/add/operator/exhaust.js","./add/operator/exhaustMap":"node_modules/rxjs-compat/add/operator/exhaustMap.js","./add/operator/expand":"node_modules/rxjs-compat/add/operator/expand.js","./add/operator/elementAt":"node_modules/rxjs-compat/add/operator/elementAt.js","./add/operator/filter":"node_modules/rxjs-compat/add/operator/filter.js","./add/operator/finally":"node_modules/rxjs-compat/add/operator/finally.js","./add/operator/find":"node_modules/rxjs-compat/add/operator/find.js","./add/operator/findIndex":"node_modules/rxjs-compat/add/operator/findIndex.js","./add/operator/first":"node_modules/rxjs-compat/add/operator/first.js","./add/operator/groupBy":"node_modules/rxjs-compat/add/operator/groupBy.js","./add/operator/ignoreElements":"node_modules/rxjs-compat/add/operator/ignoreElements.js","./add/operator/isEmpty":"node_modules/rxjs-compat/add/operator/isEmpty.js","./add/operator/audit":"node_modules/rxjs-compat/add/operator/audit.js","./add/operator/auditTime":"node_modules/rxjs-compat/add/operator/auditTime.js","./add/operator/last":"node_modules/rxjs-compat/add/operator/last.js","./add/operator/let":"node_modules/rxjs-compat/add/operator/let.js","./add/operator/every":"node_modules/rxjs-compat/add/operator/every.js","./add/operator/map":"node_modules/rxjs-compat/add/operator/map.js","./add/operator/mapTo":"node_modules/rxjs-compat/add/operator/mapTo.js","./add/operator/materialize":"node_modules/rxjs-compat/add/operator/materialize.js","./add/operator/max":"node_modules/rxjs-compat/add/operator/max.js","./add/operator/merge":"node_modules/rxjs-compat/add/operator/merge.js","./add/operator/mergeAll":"node_modules/rxjs-compat/add/operator/mergeAll.js","./add/operator/mergeMap":"node_modules/rxjs-compat/add/operator/mergeMap.js","./add/operator/mergeMapTo":"node_modules/rxjs-compat/add/operator/mergeMapTo.js","./add/operator/mergeScan":"node_modules/rxjs-compat/add/operator/mergeScan.js","./add/operator/min":"node_modules/rxjs-compat/add/operator/min.js","./add/operator/multicast":"node_modules/rxjs-compat/add/operator/multicast.js","./add/operator/observeOn":"node_modules/rxjs-compat/add/operator/observeOn.js","./add/operator/onErrorResumeNext":"node_modules/rxjs-compat/add/operator/onErrorResumeNext.js","./add/operator/pairwise":"node_modules/rxjs-compat/add/operator/pairwise.js","./add/operator/partition":"node_modules/rxjs-compat/add/operator/partition.js","./add/operator/pluck":"node_modules/rxjs-compat/add/operator/pluck.js","./add/operator/publish":"node_modules/rxjs-compat/add/operator/publish.js","./add/operator/publishBehavior":"node_modules/rxjs-compat/add/operator/publishBehavior.js","./add/operator/publishReplay":"node_modules/rxjs-compat/add/operator/publishReplay.js","./add/operator/publishLast":"node_modules/rxjs-compat/add/operator/publishLast.js","./add/operator/race":"node_modules/rxjs-compat/add/operator/race.js","./add/operator/reduce":"node_modules/rxjs-compat/add/operator/reduce.js","./add/operator/repeat":"node_modules/rxjs-compat/add/operator/repeat.js","./add/operator/repeatWhen":"node_modules/rxjs-compat/add/operator/repeatWhen.js","./add/operator/retry":"node_modules/rxjs-compat/add/operator/retry.js","./add/operator/retryWhen":"node_modules/rxjs-compat/add/operator/retryWhen.js","./add/operator/sample":"node_modules/rxjs-compat/add/operator/sample.js","./add/operator/sampleTime":"node_modules/rxjs-compat/add/operator/sampleTime.js","./add/operator/scan":"node_modules/rxjs-compat/add/operator/scan.js","./add/operator/sequenceEqual":"node_modules/rxjs-compat/add/operator/sequenceEqual.js","./add/operator/share":"node_modules/rxjs-compat/add/operator/share.js","./add/operator/shareReplay":"node_modules/rxjs-compat/add/operator/shareReplay.js","./add/operator/single":"node_modules/rxjs-compat/add/operator/single.js","./add/operator/skip":"node_modules/rxjs-compat/add/operator/skip.js","./add/operator/skipLast":"node_modules/rxjs-compat/add/operator/skipLast.js","./add/operator/skipUntil":"node_modules/rxjs-compat/add/operator/skipUntil.js","./add/operator/skipWhile":"node_modules/rxjs-compat/add/operator/skipWhile.js","./add/operator/startWith":"node_modules/rxjs-compat/add/operator/startWith.js","./add/operator/subscribeOn":"node_modules/rxjs-compat/add/operator/subscribeOn.js","./add/operator/switch":"node_modules/rxjs-compat/add/operator/switch.js","./add/operator/switchMap":"node_modules/rxjs-compat/add/operator/switchMap.js","./add/operator/switchMapTo":"node_modules/rxjs-compat/add/operator/switchMapTo.js","./add/operator/take":"node_modules/rxjs-compat/add/operator/take.js","./add/operator/takeLast":"node_modules/rxjs-compat/add/operator/takeLast.js","./add/operator/takeUntil":"node_modules/rxjs-compat/add/operator/takeUntil.js","./add/operator/takeWhile":"node_modules/rxjs-compat/add/operator/takeWhile.js","./add/operator/throttle":"node_modules/rxjs-compat/add/operator/throttle.js","./add/operator/throttleTime":"node_modules/rxjs-compat/add/operator/throttleTime.js","./add/operator/timeInterval":"node_modules/rxjs-compat/add/operator/timeInterval.js","./add/operator/timeout":"node_modules/rxjs-compat/add/operator/timeout.js","./add/operator/timeoutWith":"node_modules/rxjs-compat/add/operator/timeoutWith.js","./add/operator/timestamp":"node_modules/rxjs-compat/add/operator/timestamp.js","./add/operator/toArray":"node_modules/rxjs-compat/add/operator/toArray.js","./add/operator/toPromise":"node_modules/rxjs-compat/add/operator/toPromise.js","./add/operator/window":"node_modules/rxjs-compat/add/operator/window.js","./add/operator/windowCount":"node_modules/rxjs-compat/add/operator/windowCount.js","./add/operator/windowTime":"node_modules/rxjs-compat/add/operator/windowTime.js","./add/operator/windowToggle":"node_modules/rxjs-compat/add/operator/windowToggle.js","./add/operator/windowWhen":"node_modules/rxjs-compat/add/operator/windowWhen.js","./add/operator/withLatestFrom":"node_modules/rxjs-compat/add/operator/withLatestFrom.js","./add/operator/zip":"node_modules/rxjs-compat/add/operator/zip.js","./add/operator/zipAll":"node_modules/rxjs-compat/add/operator/zipAll.js","rxjs/testing":"node_modules/rxjs/_esm5/testing/index.js","rxjs/ajax":"node_modules/rxjs/_esm5/ajax/index.js","rxjs/operators":"node_modules/rxjs/_esm5/operators/index.js"}],"node_modules/rxjs/Rx.js":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("rxjs-compat"));

},{"rxjs-compat":"node_modules/rxjs-compat/Rx.js"}],"node_modules/animejs/lib/anime.js":[function(require,module,exports) {
/*
 * anime.js v3.0.1
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

'use strict';

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; }
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Elastic easing adapted from jQueryUI http://api.jqueryui.com/easings/

function elastic(amplitude, period) {
  if ( amplitude === void 0 ) amplitude = 1;
  if ( period === void 0 ) period = .5;

  var a = minMax(amplitude, 1, 10);
  var p = minMax(period, .1, 2);
  return function (t) {
    return (t === 0 || t === 1) ? t : 
      -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
  }
}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.round(t * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic'];

  // Approximated Penner equations http://matthewlein.com/ceaser/

  var curves = {
    In: [
      [0.550, 0.085, 0.680, 0.530], /* inQuad */
      [0.550, 0.055, 0.675, 0.190], /* inCubic */
      [0.895, 0.030, 0.685, 0.220], /* inQuart */
      [0.755, 0.050, 0.855, 0.060], /* inQuint */
      [0.470, 0.000, 0.745, 0.715], /* inSine */
      [0.950, 0.050, 0.795, 0.035], /* inExpo */
      [0.600, 0.040, 0.980, 0.335], /* inCirc */
      [0.600,-0.280, 0.735, 0.045], /* inBack */
      elastic /* inElastic */
    ],
    Out: [
      [0.250, 0.460, 0.450, 0.940], /* outQuad */
      [0.215, 0.610, 0.355, 1.000], /* outCubic */
      [0.165, 0.840, 0.440, 1.000], /* outQuart */
      [0.230, 1.000, 0.320, 1.000], /* outQuint */
      [0.390, 0.575, 0.565, 1.000], /* outSine */
      [0.190, 1.000, 0.220, 1.000], /* outExpo */
      [0.075, 0.820, 0.165, 1.000], /* outCirc */
      [0.175, 0.885, 0.320, 1.275], /* outBack */
      function (a, p) { return function (t) { return 1 - elastic(a, p)(1 - t); }; } /* outElastic */
    ],
    InOut: [
      [0.455, 0.030, 0.515, 0.955], /* inOutQuad */
      [0.645, 0.045, 0.355, 1.000], /* inOutCubic */
      [0.770, 0.000, 0.175, 1.000], /* inOutQuart */
      [0.860, 0.000, 0.070, 1.000], /* inOutQuint */
      [0.445, 0.050, 0.550, 0.950], /* inOutSine */
      [1.000, 0.000, 0.000, 1.000], /* inOutExpo */
      [0.785, 0.135, 0.150, 0.860], /* inOutCirc */
      [0.680,-0.550, 0.265, 1.550], /* inOutBack */
      function (a, p) { return function (t) { return t < .5 ? elastic(a, p)(t * 2) / 2 : 1 - elastic(a, p)(t * -2 + 2) / 2; }; } /* inOutElastic */
    ]
  };

  var eases = { 
    linear: [0.250, 0.250, 0.750, 0.750]
  };

  var loop = function ( coords ) {
    curves[coords].forEach(function (ease, i) {
      eases['ease'+coords+names[i]] = ease;
    });
  };

  for (var coords in curves) loop( coords );

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return is.fnc(ease) ? applyArguments(ease, args) : applyArguments(bezier, ease);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[2]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  return unit && !/\s/g.test(val) ? unitLess + unit : unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    parentEl = parentEl.parentNode;
    if (!is.svg(parentEl.parentNode)) { break; }
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  switch (path.property) {
    case 'x': return (p.x - svg.x) * svg.w;
    case 'y': return (p.y - svg.y) * svg.h;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  var rgx = /-?\d*\.?\d+/g;
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = (function () {
  function play() { 
    raf = requestAnimationFrame(step);
  }
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    if (activeInstancesLength) {
      var i = 0;
      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];
        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);
          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }
        i++;
      }
      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }
  return play;
})();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) { return ins.pause(); });
    pausedInstances = activeInstances.slice(0);
    activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) { return ins.play(); });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekCild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekCild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekCild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (instance.remaining) {
        startTime = now;
        setCallback('loopComplete');
        setCallback('loopBegin');
        if (instance.direction === 'alternate') { toggleInstanceDirection(); }
      } else {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(0);
  };

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    if (!raf) { engine(); }
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
    }
    if (!animations.length && !children.length) { instance.pause(); }
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.0.1';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

module.exports = anime;

},{}],"js/index.js":[function(require,module,exports) {
var Rx = require('rxjs/Rx');

var anime = require('animejs/lib/anime.js');

var animation = anime({
  targets: '.marker',
  duration: 100,
  autoplay: false,
  opacity: [1, 0],
  // from 100 to 250
  translateX: [0, -200],
  // from 100 to 250
  backgroundColor: 'green',
  easing: 'linear'
});
var marker = document.querySelector(".marker");
var pageMove$ = Rx.Observable.fromEvent(window, 'scroll'); // Apply values to element

pageMove$.subscribe(function (event) {
  var marker_bounding = marker.getBoundingClientRect(); //const scrollPercent = marker_bounding.y;

  if (marker_bounding.top > 0 && marker_bounding.top < marker_bounding.height) {
    // code block to be executed
    var scrollPercent = marker_bounding.top / marker_bounding.height;
    console.log(scrollPercent);
    animation.seek(animation.duration * scrollPercent);
  }
});
},{"rxjs/Rx":"node_modules/rxjs/Rx.js","animejs/lib/anime.js":"node_modules/animejs/lib/anime.js"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55675" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.map
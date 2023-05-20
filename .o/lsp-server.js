var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/models.js
var require_models = __commonJS({
  "node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/models.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createJSONRPCNotification = exports.createJSONRPCRequest = exports.createJSONRPCSuccessResponse = exports.createJSONRPCErrorResponse = exports.JSONRPCErrorCode = exports.JSONRPCErrorException = exports.isJSONRPCResponses = exports.isJSONRPCResponse = exports.isJSONRPCRequests = exports.isJSONRPCRequest = exports.isJSONRPCID = exports.JSONRPC = void 0;
    exports.JSONRPC = "2.0";
    var isJSONRPCID = function(id) {
      return typeof id === "string" || typeof id === "number" || id === null;
    };
    exports.isJSONRPCID = isJSONRPCID;
    var isJSONRPCRequest = function(payload) {
      return payload.jsonrpc === exports.JSONRPC && payload.method !== void 0 && payload.result === void 0 && payload.error === void 0;
    };
    exports.isJSONRPCRequest = isJSONRPCRequest;
    var isJSONRPCRequests = function(payload) {
      return Array.isArray(payload) && payload.every(exports.isJSONRPCRequest);
    };
    exports.isJSONRPCRequests = isJSONRPCRequests;
    var isJSONRPCResponse2 = function(payload) {
      return payload.jsonrpc === exports.JSONRPC && payload.id !== void 0 && (payload.result !== void 0 || payload.error !== void 0);
    };
    exports.isJSONRPCResponse = isJSONRPCResponse2;
    var isJSONRPCResponses = function(payload) {
      return Array.isArray(payload) && payload.every(exports.isJSONRPCResponse);
    };
    exports.isJSONRPCResponses = isJSONRPCResponses;
    var createJSONRPCError = function(code, message, data) {
      var error = { code, message };
      if (data != null) {
        error.data = data;
      }
      return error;
    };
    var JSONRPCErrorException = (
      /** @class */
      function(_super) {
        __extends(JSONRPCErrorException2, _super);
        function JSONRPCErrorException2(message, code, data) {
          var _this = _super.call(this, message) || this;
          Object.setPrototypeOf(_this, JSONRPCErrorException2.prototype);
          _this.code = code;
          _this.data = data;
          return _this;
        }
        JSONRPCErrorException2.prototype.toObject = function() {
          return createJSONRPCError(this.code, this.message, this.data);
        };
        return JSONRPCErrorException2;
      }(Error)
    );
    exports.JSONRPCErrorException = JSONRPCErrorException;
    var JSONRPCErrorCode;
    (function(JSONRPCErrorCode2) {
      JSONRPCErrorCode2[JSONRPCErrorCode2["ParseError"] = -32700] = "ParseError";
      JSONRPCErrorCode2[JSONRPCErrorCode2["InvalidRequest"] = -32600] = "InvalidRequest";
      JSONRPCErrorCode2[JSONRPCErrorCode2["MethodNotFound"] = -32601] = "MethodNotFound";
      JSONRPCErrorCode2[JSONRPCErrorCode2["InvalidParams"] = -32602] = "InvalidParams";
      JSONRPCErrorCode2[JSONRPCErrorCode2["InternalError"] = -32603] = "InternalError";
    })(JSONRPCErrorCode = exports.JSONRPCErrorCode || (exports.JSONRPCErrorCode = {}));
    var createJSONRPCErrorResponse = function(id, code, message, data) {
      return {
        jsonrpc: exports.JSONRPC,
        id,
        error: createJSONRPCError(code, message, data)
      };
    };
    exports.createJSONRPCErrorResponse = createJSONRPCErrorResponse;
    var createJSONRPCSuccessResponse = function(id, result) {
      return {
        jsonrpc: exports.JSONRPC,
        id,
        result: result !== null && result !== void 0 ? result : null
      };
    };
    exports.createJSONRPCSuccessResponse = createJSONRPCSuccessResponse;
    var createJSONRPCRequest = function(id, method, params) {
      return {
        jsonrpc: exports.JSONRPC,
        id,
        method,
        params
      };
    };
    exports.createJSONRPCRequest = createJSONRPCRequest;
    var createJSONRPCNotification = function(method, params) {
      return {
        jsonrpc: exports.JSONRPC,
        method,
        params
      };
    };
    exports.createJSONRPCNotification = createJSONRPCNotification;
  }
});

// node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/internal.js
var require_internal = __commonJS({
  "node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/internal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultErrorCode = void 0;
    exports.DefaultErrorCode = 0;
  }
});

// node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/client.js
var require_client = __commonJS({
  "node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/client.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
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
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
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
                if (t[2])
                  _.ops.pop();
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
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSONRPCClient = void 0;
    var models_1 = require_models();
    var internal_1 = require_internal();
    var JSONRPCClient2 = (
      /** @class */
      function() {
        function JSONRPCClient3(_send, createID) {
          this._send = _send;
          this.createID = createID;
          this.idToResolveMap = /* @__PURE__ */ new Map();
          this.id = 0;
        }
        JSONRPCClient3.prototype._createID = function() {
          if (this.createID) {
            return this.createID();
          } else {
            return ++this.id;
          }
        };
        JSONRPCClient3.prototype.timeout = function(delay, overrideCreateJSONRPCErrorResponse) {
          var _this = this;
          if (overrideCreateJSONRPCErrorResponse === void 0) {
            overrideCreateJSONRPCErrorResponse = function(id) {
              return (0, models_1.createJSONRPCErrorResponse)(id, internal_1.DefaultErrorCode, "Request timeout");
            };
          }
          var timeoutRequest = function(ids, request) {
            var timeoutID = setTimeout(function() {
              ids.forEach(function(id) {
                var resolve = _this.idToResolveMap.get(id);
                if (resolve) {
                  _this.idToResolveMap.delete(id);
                  resolve(overrideCreateJSONRPCErrorResponse(id));
                }
              });
            }, delay);
            return request().then(function(result) {
              clearTimeout(timeoutID);
              return result;
            }, function(error) {
              clearTimeout(timeoutID);
              return Promise.reject(error);
            });
          };
          var requestAdvanced = function(request, clientParams) {
            var ids = (!Array.isArray(request) ? [request] : request).map(function(request2) {
              return request2.id;
            }).filter(isDefinedAndNonNull);
            return timeoutRequest(ids, function() {
              return _this.requestAdvanced(request, clientParams);
            });
          };
          return {
            request: function(method, params, clientParams) {
              var id = _this._createID();
              return timeoutRequest([id], function() {
                return _this.requestWithID(method, params, clientParams, id);
              });
            },
            requestAdvanced: function(request, clientParams) {
              return requestAdvanced(request, clientParams);
            }
          };
        };
        JSONRPCClient3.prototype.request = function(method, params, clientParams) {
          return this.requestWithID(method, params, clientParams, this._createID());
        };
        JSONRPCClient3.prototype.requestWithID = function(method, params, clientParams, id) {
          return __awaiter(this, void 0, void 0, function() {
            var request, response;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  request = (0, models_1.createJSONRPCRequest)(id, method, params);
                  return [4, this.requestAdvanced(request, clientParams)];
                case 1:
                  response = _a.sent();
                  if (response.result !== void 0 && !response.error) {
                    return [2, response.result];
                  } else if (response.result === void 0 && response.error) {
                    return [2, Promise.reject(new models_1.JSONRPCErrorException(response.error.message, response.error.code, response.error.data))];
                  } else {
                    return [2, Promise.reject(new Error("An unexpected error occurred"))];
                  }
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        JSONRPCClient3.prototype.requestAdvanced = function(requests, clientParams) {
          var _this = this;
          var areRequestsOriginallyArray = Array.isArray(requests);
          if (!Array.isArray(requests)) {
            requests = [requests];
          }
          var requestsWithID = requests.filter(function(request) {
            return isDefinedAndNonNull(request.id);
          });
          var promises = requestsWithID.map(function(request) {
            return new Promise(function(resolve) {
              return _this.idToResolveMap.set(request.id, resolve);
            });
          });
          var promise = Promise.all(promises).then(function(responses) {
            if (areRequestsOriginallyArray || !responses.length) {
              return responses;
            } else {
              return responses[0];
            }
          });
          return this.send(areRequestsOriginallyArray ? requests : requests[0], clientParams).then(function() {
            return promise;
          }, function(error) {
            requestsWithID.forEach(function(request) {
              _this.receive((0, models_1.createJSONRPCErrorResponse)(request.id, internal_1.DefaultErrorCode, error && error.message || "Failed to send a request"));
            });
            return promise;
          });
        };
        JSONRPCClient3.prototype.notify = function(method, params, clientParams) {
          var request = (0, models_1.createJSONRPCNotification)(method, params);
          this.send(request, clientParams).then(void 0, function() {
            return void 0;
          });
        };
        JSONRPCClient3.prototype.send = function(payload, clientParams) {
          return this._send(payload, clientParams);
        };
        JSONRPCClient3.prototype.rejectAllPendingRequests = function(message) {
          this.idToResolveMap.forEach(function(resolve, id) {
            return resolve((0, models_1.createJSONRPCErrorResponse)(id, internal_1.DefaultErrorCode, message));
          });
          this.idToResolveMap.clear();
        };
        JSONRPCClient3.prototype.receive = function(responses) {
          var _this = this;
          if (!Array.isArray(responses)) {
            responses = [responses];
          }
          responses.forEach(function(response) {
            var resolve = _this.idToResolveMap.get(response.id);
            if (resolve) {
              _this.idToResolveMap.delete(response.id);
              resolve(response);
            }
          });
        };
        return JSONRPCClient3;
      }()
    );
    exports.JSONRPCClient = JSONRPCClient2;
    var isDefinedAndNonNull = function(value) {
      return value !== void 0 && value !== null;
    };
  }
});

// node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/interfaces.js
var require_interfaces = __commonJS({
  "node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/interfaces.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/server.js
var require_server = __commonJS({
  "node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/server.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
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
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
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
                if (t[2])
                  _.ops.pop();
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
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSONRPCServer = void 0;
    var models_1 = require_models();
    var internal_1 = require_internal();
    var createParseErrorResponse = function() {
      return (0, models_1.createJSONRPCErrorResponse)(null, models_1.JSONRPCErrorCode.ParseError, "Parse error");
    };
    var createInvalidRequestResponse = function(request) {
      return (0, models_1.createJSONRPCErrorResponse)((0, models_1.isJSONRPCID)(request.id) ? request.id : null, models_1.JSONRPCErrorCode.InvalidRequest, "Invalid Request");
    };
    var createMethodNotFoundResponse = function(id) {
      return (0, models_1.createJSONRPCErrorResponse)(id, models_1.JSONRPCErrorCode.MethodNotFound, "Method not found");
    };
    var JSONRPCServer2 = (
      /** @class */
      function() {
        function JSONRPCServer3(options) {
          if (options === void 0) {
            options = {};
          }
          var _a;
          this.mapErrorToJSONRPCErrorResponse = defaultMapErrorToJSONRPCErrorResponse;
          this.nameToMethodDictionary = {};
          this.middleware = null;
          this.errorListener = (_a = options.errorListener) !== null && _a !== void 0 ? _a : console.warn;
        }
        JSONRPCServer3.prototype.hasMethod = function(name) {
          return !!this.nameToMethodDictionary[name];
        };
        JSONRPCServer3.prototype.addMethod = function(name, method) {
          this.addMethodAdvanced(name, this.toJSONRPCMethod(method));
        };
        JSONRPCServer3.prototype.toJSONRPCMethod = function(method) {
          return function(request, serverParams) {
            var response = method(request.params, serverParams);
            return Promise.resolve(response).then(function(result) {
              return mapResultToJSONRPCResponse(request.id, result);
            });
          };
        };
        JSONRPCServer3.prototype.addMethodAdvanced = function(name, method) {
          var _a;
          this.nameToMethodDictionary = __assign(__assign({}, this.nameToMethodDictionary), (_a = {}, _a[name] = method, _a));
        };
        JSONRPCServer3.prototype.receiveJSON = function(json, serverParams) {
          var request = this.tryParseRequestJSON(json);
          if (request) {
            return this.receive(request, serverParams);
          } else {
            return Promise.resolve(createParseErrorResponse());
          }
        };
        JSONRPCServer3.prototype.tryParseRequestJSON = function(json) {
          try {
            return JSON.parse(json);
          } catch (_a) {
            return null;
          }
        };
        JSONRPCServer3.prototype.receive = function(request, serverParams) {
          if (Array.isArray(request)) {
            return this.receiveMultiple(request, serverParams);
          } else {
            return this.receiveSingle(request, serverParams);
          }
        };
        JSONRPCServer3.prototype.receiveMultiple = function(requests, serverParams) {
          return __awaiter(this, void 0, void 0, function() {
            var responses;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, Promise.all(requests.map(function(request) {
                    return _this.receiveSingle(request, serverParams);
                  }))];
                case 1:
                  responses = _a.sent().filter(isNonNull);
                  if (responses.length === 1) {
                    return [2, responses[0]];
                  } else if (responses.length) {
                    return [2, responses];
                  } else {
                    return [2, null];
                  }
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        JSONRPCServer3.prototype.receiveSingle = function(request, serverParams) {
          return __awaiter(this, void 0, void 0, function() {
            var method, response;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  method = this.nameToMethodDictionary[request.method];
                  if (!!(0, models_1.isJSONRPCRequest)(request))
                    return [3, 1];
                  return [2, createInvalidRequestResponse(request)];
                case 1:
                  return [4, this.callMethod(method, request, serverParams)];
                case 2:
                  response = _a.sent();
                  return [2, mapResponse(request, response)];
              }
            });
          });
        };
        JSONRPCServer3.prototype.applyMiddleware = function() {
          var middlewares = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
          }
          if (this.middleware) {
            this.middleware = this.combineMiddlewares(__spreadArray([
              this.middleware
            ], middlewares, true));
          } else {
            this.middleware = this.combineMiddlewares(middlewares);
          }
        };
        JSONRPCServer3.prototype.combineMiddlewares = function(middlewares) {
          if (!middlewares.length) {
            return null;
          } else {
            return middlewares.reduce(this.middlewareReducer);
          }
        };
        JSONRPCServer3.prototype.middlewareReducer = function(prevMiddleware, nextMiddleware) {
          return function(next, request, serverParams) {
            return prevMiddleware(function(request2, serverParams2) {
              return nextMiddleware(next, request2, serverParams2);
            }, request, serverParams);
          };
        };
        JSONRPCServer3.prototype.callMethod = function(method, request, serverParams) {
          var _this = this;
          var callMethod = function(request2, serverParams2) {
            if (method) {
              return method(request2, serverParams2);
            } else if (request2.id !== void 0) {
              return Promise.resolve(createMethodNotFoundResponse(request2.id));
            } else {
              return Promise.resolve(null);
            }
          };
          var onError = function(error) {
            _this.errorListener('An unexpected error occurred while executing "'.concat(request.method, '" JSON-RPC method:'), error);
            return Promise.resolve(_this.mapErrorToJSONRPCErrorResponseIfNecessary(request.id, error));
          };
          try {
            return (this.middleware || noopMiddleware)(callMethod, request, serverParams).then(void 0, onError);
          } catch (error) {
            return onError(error);
          }
        };
        JSONRPCServer3.prototype.mapErrorToJSONRPCErrorResponseIfNecessary = function(id, error) {
          if (id !== void 0) {
            return this.mapErrorToJSONRPCErrorResponse(id, error);
          } else {
            return null;
          }
        };
        return JSONRPCServer3;
      }()
    );
    exports.JSONRPCServer = JSONRPCServer2;
    var isNonNull = function(value) {
      return value !== null;
    };
    var noopMiddleware = function(next, request, serverParams) {
      return next(request, serverParams);
    };
    var mapResultToJSONRPCResponse = function(id, result) {
      if (id !== void 0) {
        return (0, models_1.createJSONRPCSuccessResponse)(id, result);
      } else {
        return null;
      }
    };
    var defaultMapErrorToJSONRPCErrorResponse = function(id, error) {
      var _a;
      var message = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "An unexpected error occurred";
      var code = internal_1.DefaultErrorCode;
      var data;
      if (error instanceof models_1.JSONRPCErrorException) {
        code = error.code;
        data = error.data;
      }
      return (0, models_1.createJSONRPCErrorResponse)(id, code, message, data);
    };
    var mapResponse = function(request, response) {
      if (response) {
        return response;
      } else if (request.id !== void 0) {
        return (0, models_1.createJSONRPCErrorResponse)(request.id, models_1.JSONRPCErrorCode.InternalError, "Internal error");
      } else {
        return null;
      }
    };
  }
});

// node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/server-and-client.js
var require_server_and_client = __commonJS({
  "node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/server-and-client.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
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
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
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
                if (t[2])
                  _.ops.pop();
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
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSONRPCServerAndClient = void 0;
    var models_1 = require_models();
    var JSONRPCServerAndClient = (
      /** @class */
      function() {
        function JSONRPCServerAndClient2(server, client, options) {
          if (options === void 0) {
            options = {};
          }
          var _a;
          this.server = server;
          this.client = client;
          this.errorListener = (_a = options.errorListener) !== null && _a !== void 0 ? _a : console.warn;
        }
        JSONRPCServerAndClient2.prototype.applyServerMiddleware = function() {
          var _a;
          var middlewares = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
          }
          (_a = this.server).applyMiddleware.apply(_a, middlewares);
        };
        JSONRPCServerAndClient2.prototype.hasMethod = function(name) {
          return this.server.hasMethod(name);
        };
        JSONRPCServerAndClient2.prototype.addMethod = function(name, method) {
          this.server.addMethod(name, method);
        };
        JSONRPCServerAndClient2.prototype.addMethodAdvanced = function(name, method) {
          this.server.addMethodAdvanced(name, method);
        };
        JSONRPCServerAndClient2.prototype.timeout = function(delay) {
          return this.client.timeout(delay);
        };
        JSONRPCServerAndClient2.prototype.request = function(method, params, clientParams) {
          return this.client.request(method, params, clientParams);
        };
        JSONRPCServerAndClient2.prototype.requestAdvanced = function(jsonRPCRequest, clientParams) {
          return this.client.requestAdvanced(jsonRPCRequest, clientParams);
        };
        JSONRPCServerAndClient2.prototype.notify = function(method, params, clientParams) {
          this.client.notify(method, params, clientParams);
        };
        JSONRPCServerAndClient2.prototype.rejectAllPendingRequests = function(message) {
          this.client.rejectAllPendingRequests(message);
        };
        JSONRPCServerAndClient2.prototype.receiveAndSend = function(payload, serverParams, clientParams) {
          return __awaiter(this, void 0, void 0, function() {
            var response, message;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!((0, models_1.isJSONRPCResponse)(payload) || (0, models_1.isJSONRPCResponses)(payload)))
                    return [3, 1];
                  this.client.receive(payload);
                  return [3, 4];
                case 1:
                  if (!((0, models_1.isJSONRPCRequest)(payload) || (0, models_1.isJSONRPCRequests)(payload)))
                    return [3, 3];
                  return [4, this.server.receive(payload, serverParams)];
                case 2:
                  response = _a.sent();
                  if (response) {
                    return [2, this.client.send(response, clientParams)];
                  }
                  return [3, 4];
                case 3:
                  message = "Received an invalid JSON-RPC message";
                  this.errorListener(message, payload);
                  return [2, Promise.reject(new Error(message))];
                case 4:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        return JSONRPCServerAndClient2;
      }()
    );
    exports.JSONRPCServerAndClient = JSONRPCServerAndClient;
  }
});

// node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/json-rpc-2.0@1.5.1/node_modules/json-rpc-2.0/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_client(), exports);
    __exportStar(require_interfaces(), exports);
    __exportStar(require_models(), exports);
    __exportStar(require_server(), exports);
    __exportStar(require_server_and_client(), exports);
  }
});

// node_modules/.pnpm/autobind-decorator@2.4.0/node_modules/autobind-decorator/lib/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/autobind-decorator@2.4.0/node_modules/autobind-decorator/lib/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.boundMethod = boundMethod;
    exports.boundClass = boundClass;
    exports.default = autobind3;
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function boundMethod(target, key, descriptor) {
      var fn = descriptor.value;
      if (typeof fn !== "function") {
        throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(_typeof(fn)));
      }
      var definingProperty = false;
      return {
        configurable: true,
        get: function get() {
          if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== "function") {
            return fn;
          }
          var boundFn = fn.bind(this);
          definingProperty = true;
          Object.defineProperty(this, key, {
            configurable: true,
            get: function get2() {
              return boundFn;
            },
            set: function set(value) {
              fn = value;
              delete this[key];
            }
          });
          definingProperty = false;
          return boundFn;
        },
        set: function set(value) {
          fn = value;
        }
      };
    }
    function boundClass(target) {
      var keys;
      if (typeof Reflect !== "undefined" && typeof Reflect.ownKeys === "function") {
        keys = Reflect.ownKeys(target.prototype);
      } else {
        keys = Object.getOwnPropertyNames(target.prototype);
        if (typeof Object.getOwnPropertySymbols === "function") {
          keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
        }
      }
      keys.forEach(function(key) {
        if (key === "constructor") {
          return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (typeof descriptor.value === "function") {
          Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
        }
      });
      return target;
    }
    function autobind3() {
      if (arguments.length === 1) {
        return boundClass.apply(void 0, arguments);
      }
      return boundMethod.apply(void 0, arguments);
    }
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/alea.js"(exports, module) {
    (function(global, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor128.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v, w;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, w, X = [];
          if (seed2 === (seed2 | 0)) {
            w = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8)
            X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j)
            ;
          if (j == 8)
            w = X[7] = -1;
          else
            w = X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2)
              v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0)
              w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      ;
      function impl(seed, opts) {
        if (seed == null)
          seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      exports,
      // window object or global
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/tychei.js"(exports, module) {
    (function(global, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto;
      function seedrandom2(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten(
          options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else
            return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask & i2 + 1];
            r = r * width + s2[mask & (s2[i2] = s2[j2 = mask & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      ;
      function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global.crypto || global.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global.navigator, plugins = browser && browser.plugins;
          return [+/* @__PURE__ */ new Date(), global, plugins, global.screen, tostring(pool)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom2;
        try {
          nodecrypto = __require("crypto");
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom2;
        });
      } else {
        math["seed" + rngname] = seedrandom2;
      }
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self !== "undefined" ? self : exports,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js"(exports, module) {
    var alea = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// node_modules/.pnpm/char-regex@1.0.2/node_modules/char-regex/index.js
var require_char_regex = __commonJS({
  "node_modules/.pnpm/char-regex@1.0.2/node_modules/char-regex/index.js"(exports, module) {
    "use strict";
    module.exports = () => {
      const astralRange = "\\ud800-\\udfff";
      const comboMarksRange = "\\u0300-\\u036f";
      const comboHalfMarksRange = "\\ufe20-\\ufe2f";
      const comboSymbolsRange = "\\u20d0-\\u20ff";
      const comboMarksExtendedRange = "\\u1ab0-\\u1aff";
      const comboMarksSupplementRange = "\\u1dc0-\\u1dff";
      const comboRange = comboMarksRange + comboHalfMarksRange + comboSymbolsRange + comboMarksExtendedRange + comboMarksSupplementRange;
      const varRange = "\\ufe0e\\ufe0f";
      const familyRange = "\\uD83D\\uDC69\\uD83C\\uDFFB\\u200D\\uD83C\\uDF93";
      const astral = `[${astralRange}]`;
      const combo = `[${comboRange}]`;
      const fitz = "\\ud83c[\\udffb-\\udfff]";
      const modifier = `(?:${combo}|${fitz})`;
      const nonAstral = `[^${astralRange}]`;
      const regional = "(?:\\uD83C[\\uDDE6-\\uDDFF]){2}";
      const surrogatePair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
      const zwj = "\\u200d";
      const blackFlag = "(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)";
      const family = `[${familyRange}]`;
      const optModifier = `${modifier}?`;
      const optVar = `[${varRange}]?`;
      const optJoin = `(?:${zwj}(?:${[nonAstral, regional, surrogatePair].join("|")})${optVar + optModifier})*`;
      const seq = optVar + optModifier + optJoin;
      const nonAstralCombo = `${nonAstral}${combo}?`;
      const symbol = `(?:${[nonAstralCombo, combo, regional, surrogatePair, astral, family].join("|")})`;
      return new RegExp(`${blackFlag}|${fitz}(?=${fitz})|${symbol + seq}`, "g");
    };
  }
});

// node_modules/.pnpm/stringz@2.1.0/node_modules/stringz/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/stringz@2.1.0/node_modules/stringz/dist/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var char_regex_1 = __importDefault(require_char_regex());
    function toArray2(str) {
      if (typeof str !== "string") {
        throw new Error("A string is expected as input");
      }
      return str.match(char_regex_1.default()) || [];
    }
    exports.toArray = toArray2;
    function length2(str) {
      if (typeof str !== "string") {
        throw new Error("Input must be a string");
      }
      var match = str.match(char_regex_1.default());
      return match === null ? 0 : match.length;
    }
    exports.length = length2;
    function substring2(str, begin, end) {
      if (begin === void 0) {
        begin = 0;
      }
      if (typeof str !== "string") {
        throw new Error("Input must be a string");
      }
      if (typeof begin !== "number" || begin < 0) {
        begin = 0;
      }
      if (typeof end === "number" && end < 0) {
        end = 0;
      }
      var match = str.match(char_regex_1.default());
      if (!match)
        return "";
      return match.slice(begin, end).join("");
    }
    exports.substring = substring2;
    function substr(str, begin, len) {
      if (begin === void 0) {
        begin = 0;
      }
      if (typeof str !== "string") {
        throw new Error("Input must be a string");
      }
      var strLength = length2(str);
      if (typeof begin !== "number") {
        begin = parseInt(begin, 10);
      }
      if (begin >= strLength) {
        return "";
      }
      if (begin < 0) {
        begin += strLength;
      }
      var end;
      if (typeof len === "undefined") {
        end = strLength;
      } else {
        if (typeof len !== "number") {
          len = parseInt(len, 10);
        }
        end = len >= 0 ? len + begin : begin;
      }
      var match = str.match(char_regex_1.default());
      if (!match)
        return "";
      return match.slice(begin, end).join("");
    }
    exports.substr = substr;
    function limit(str, limit2, padString, padPosition) {
      if (limit2 === void 0) {
        limit2 = 16;
      }
      if (padString === void 0) {
        padString = "#";
      }
      if (padPosition === void 0) {
        padPosition = "right";
      }
      if (typeof str !== "string" || typeof limit2 !== "number") {
        throw new Error("Invalid arguments specified");
      }
      if (["left", "right"].indexOf(padPosition) === -1) {
        throw new Error("Pad position should be either left or right");
      }
      if (typeof padString !== "string") {
        padString = String(padString);
      }
      var strLength = length2(str);
      if (strLength > limit2) {
        return substring2(str, 0, limit2);
      } else if (strLength < limit2) {
        var padRepeats = padString.repeat(limit2 - strLength);
        return padPosition === "left" ? padRepeats + str : str + padRepeats;
      }
      return str;
    }
    exports.limit = limit;
    function indexOf2(str, searchStr, pos) {
      if (pos === void 0) {
        pos = 0;
      }
      if (typeof str !== "string") {
        throw new Error("Input must be a string");
      }
      if (str === "") {
        if (searchStr === "") {
          return 0;
        }
        return -1;
      }
      pos = Number(pos);
      pos = isNaN(pos) ? 0 : pos;
      searchStr = String(searchStr);
      var strArr = toArray2(str);
      if (pos >= strArr.length) {
        if (searchStr === "") {
          return strArr.length;
        }
        return -1;
      }
      if (searchStr === "") {
        return pos;
      }
      var searchArr = toArray2(searchStr);
      var finded = false;
      var index;
      for (index = pos; index < strArr.length; index += 1) {
        var searchIndex = 0;
        while (searchIndex < searchArr.length && searchArr[searchIndex] === strArr[index + searchIndex]) {
          searchIndex += 1;
        }
        if (searchIndex === searchArr.length && searchArr[searchIndex - 1] === strArr[index + searchIndex - 1]) {
          finded = true;
          break;
        }
      }
      return finded ? index : -1;
    }
    exports.indexOf = indexOf2;
  }
});

// src/lsp-server.ts
var import_json_rpc_2 = __toESM(require_dist(), 1);
import * as fs from "fs";

// src/lsp-protocol.ts
function headerParser(header) {
  const res = /* @__PURE__ */ new Map();
  for (const o of header.split("\r\n")) {
    let [k, v] = o.split(/: */);
    res.set(k, v);
  }
  return res;
}
function toStringMapAsHeader(header) {
  const res = [];
  for (const [k, v] of header) {
    res.push(`${k}: ${v}`);
  }
  return res.join("\r\n");
}
function parseLspMessage(src) {
  const [header, body] = src.split(/\r\n\r\n/);
  return {
    header: headerParser(header),
    body
  };
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/interpreter/index.js
var import_autobind_decorator2 = __toESM(require_cjs());

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/error.js
var AiScriptError = class extends Error {
  info;
  constructor(message, info) {
    super(message);
    this.info = info;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AiScriptError);
    }
  }
};
var SyntaxError = class extends AiScriptError {
  constructor(message, info) {
    super(message, info);
  }
};
var RuntimeError = class extends AiScriptError {
  constructor(message, info) {
    super(message, info);
  }
};
var IndexOutOfRangeError = class extends RuntimeError {
  constructor(message, info) {
    super(message, info);
  }
};

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/interpreter/scope.js
var import_autobind_decorator = __toESM(require_cjs());
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Scope = class {
  parent;
  layerdStates;
  name;
  opts = {};
  constructor(layerdStates = [], parent, name) {
    this.layerdStates = layerdStates;
    this.parent = parent;
    this.name = name || (layerdStates.length === 1 ? "<root>" : "<anonymous>");
  }
  log(type, params) {
    if (this.parent) {
      this.parent.log(type, params);
    } else {
      if (this.opts.log)
        this.opts.log(type, params);
    }
  }
  onUpdated(name, value) {
    if (this.parent) {
      this.parent.onUpdated(name, value);
    } else {
      if (this.opts.onUpdated)
        this.opts.onUpdated(name, value);
    }
  }
  createChildScope(states = /* @__PURE__ */ new Map(), name) {
    const layer = [states, ...this.layerdStates];
    return new Scope(layer, this, name);
  }
  /**
   * 指定した名前の変数を取得します
   * @param name - 変数名
   */
  get(name) {
    for (const layer of this.layerdStates) {
      if (layer.has(name)) {
        const state = layer.get(name);
        this.log("read", { var: name, val: state });
        return state;
      }
    }
    throw new RuntimeError(`No such variable '${name}' in scope '${this.name}'`, {
      scope: this.layerdStates
    });
  }
  /**
   * 現在のスコープに存在する全ての変数を取得します
   */
  getAll() {
    const vars = this.layerdStates.reduce((arr, layer) => {
      return [...arr, ...layer];
    }, []);
    return new Map(vars);
  }
  /**
   * 指定した名前の変数を現在のスコープに追加します
   * @param name - 変数名
   * @param val - 初期値
   */
  add(name, val) {
    this.log("add", { var: name, val });
    const states = this.layerdStates[0];
    if (states.has(name)) {
      throw new RuntimeError(`Variable '${name}' is alerady exists in scope '${this.name}'`, {
        scope: this.layerdStates
      });
    }
    states.set(name, val);
    if (this.parent == null)
      this.onUpdated(name, val);
  }
  /**
   * 指定した名前の変数に値を再代入します
   * @param name - 変数名
   * @param val - 値
   */
  assign(name, val) {
    let i = 1;
    for (const layer of this.layerdStates) {
      if (layer.has(name)) {
        layer.set(name, val);
        this.log("assign", { var: name, val });
        if (i === this.layerdStates.length)
          this.onUpdated(name, val);
        return;
      }
      i++;
    }
    throw new RuntimeError(`No such variable '${name}' in scope '${this.name}'`, {
      scope: this.layerdStates
    });
  }
};
__decorate([
  import_autobind_decorator.default
], Scope.prototype, "log", null);
__decorate([
  import_autobind_decorator.default
], Scope.prototype, "onUpdated", null);
__decorate([
  import_autobind_decorator.default
], Scope.prototype, "createChildScope", null);
__decorate([
  import_autobind_decorator.default
], Scope.prototype, "get", null);
__decorate([
  import_autobind_decorator.default
], Scope.prototype, "getAll", null);
__decorate([
  import_autobind_decorator.default
], Scope.prototype, "add", null);
__decorate([
  import_autobind_decorator.default
], Scope.prototype, "assign", null);

// node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-node/rng.js
import crypto from "crypto";
var rnds8Pool = new Uint8Array(256);
var poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

// node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-node/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-node/native.js
import crypto2 from "crypto";
var native_default = {
  randomUUID: crypto2.randomUUID
};

// node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/interpreter/lib/std.js
var import_seedrandom = __toESM(require_seedrandom2());

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/interpreter/value.js
var NULL = {
  type: "null"
};
var TRUE = {
  type: "bool",
  value: true
};
var FALSE = {
  type: "bool",
  value: false
};
var NUM = (num) => ({
  type: "num",
  value: num
});
var STR = (str) => ({
  type: "str",
  value: str
});
var BOOL = (bool) => ({
  type: "bool",
  value: bool
});
var OBJ = (obj) => ({
  type: "obj",
  value: obj
});
var ARR = (arr) => ({
  type: "arr",
  value: arr
});
var FN = (args, statements, scope) => ({
  type: "fn",
  args,
  statements,
  scope
});
var FN_NATIVE = (fn) => ({
  type: "fn",
  native: fn
});
var RETURN = (v) => ({
  type: "return",
  value: v
});
var BREAK = () => ({
  type: "break",
  value: null
});
var CONTINUE = () => ({
  type: "continue",
  value: null
});
var unWrapRet = (v) => v.type === "return" ? v.value : v;

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/interpreter/util.js
function expectAny(val) {
  if (val == null) {
    throw new RuntimeError("Expect anything, but got nothing.");
  }
}
function assertBoolean(val) {
  if (val == null) {
    throw new RuntimeError("Expect boolean, but got nothing.");
  }
  if (val.type !== "bool") {
    throw new RuntimeError(`Expect boolean, but got ${val.type}.`);
  }
}
function assertFunction(val) {
  if (val == null) {
    throw new RuntimeError("Expect function, but got nothing.");
  }
  if (val.type !== "fn") {
    throw new RuntimeError(`Expect function, but got ${val.type}.`);
  }
}
function assertString(val) {
  if (val == null) {
    throw new RuntimeError("Expect string, but got nothing.");
  }
  if (val.type !== "str") {
    throw new RuntimeError(`Expect string, but got ${val.type}.`);
  }
}
function assertNumber(val) {
  if (val == null) {
    throw new RuntimeError("Expect number, but got nothing.");
  }
  if (val.type !== "num") {
    throw new RuntimeError(`Expect number, but got ${val.type}.`);
  }
}
function assertObject(val) {
  if (val == null) {
    throw new RuntimeError("Expect object, but got nothing.");
  }
  if (val.type !== "obj") {
    throw new RuntimeError(`Expect object, but got ${val.type}.`);
  }
}
function assertArray(val) {
  if (val == null) {
    throw new RuntimeError("Expect array, but got nothing.");
  }
  if (val.type !== "arr") {
    throw new RuntimeError(`Expect array, but got ${val.type}.`);
  }
}
function isString(val) {
  return val.type === "str";
}
function isNumber(val) {
  return val.type === "num";
}
function isObject(val) {
  return val.type === "obj";
}
function isArray(val) {
  return val.type === "arr";
}
function eq(a, b) {
  if (a.type === "fn" || b.type === "fn")
    return false;
  if (a.type === "null" && b.type === "null")
    return true;
  if (a.type === "null" || b.type === "null")
    return false;
  return a.value === b.value;
}
function valToJs(val) {
  switch (val.type) {
    case "arr":
      return val.value.map((item) => valToJs(item));
    case "bool":
      return val.value;
    case "null":
      return null;
    case "num":
      return val.value;
    case "obj": {
      const obj = {};
      for (const [k, v] of val.value.entries()) {
        obj[k] = valToJs(v);
      }
      return obj;
    }
    case "str":
      return val.value;
    default:
      return void 0;
  }
}
function jsToVal(val) {
  if (val === null)
    return NULL;
  if (typeof val === "boolean")
    return BOOL(val);
  if (typeof val === "string")
    return STR(val);
  if (typeof val === "number")
    return NUM(val);
  if (Array.isArray(val))
    return ARR(val.map((item) => jsToVal(item)));
  if (typeof val === "object") {
    const obj = /* @__PURE__ */ new Map();
    for (const [k, v] of Object.entries(val)) {
      obj.set(k, jsToVal(v));
    }
    return OBJ(obj);
  }
  return NULL;
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/interpreter/lib/std.js
var std = {
  "help": STR("SEE: https://github.com/syuilo/aiscript/blob/master/docs/get-started.md"),
  //#region Core
  "Core:v": STR("0.12.4"),
  "Core:ai": STR("kawaii"),
  "Core:not": FN_NATIVE(([a]) => {
    assertBoolean(a);
    return a.value ? FALSE : TRUE;
  }),
  "Core:eq": FN_NATIVE(([a, b]) => {
    expectAny(a);
    expectAny(b);
    return eq(a, b) ? TRUE : FALSE;
  }),
  "Core:neq": FN_NATIVE(([a, b]) => {
    expectAny(a);
    expectAny(b);
    return eq(a, b) ? FALSE : TRUE;
  }),
  "Core:and": FN_NATIVE(([a, b]) => {
    assertBoolean(a);
    assertBoolean(b);
    return a.value && b.value ? TRUE : FALSE;
  }),
  "Core:or": FN_NATIVE(([a, b]) => {
    assertBoolean(a);
    assertBoolean(b);
    return a.value || b.value ? TRUE : FALSE;
  }),
  "Core:add": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return NUM(a.value + b.value);
  }),
  "Core:sub": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return NUM(a.value - b.value);
  }),
  "Core:mul": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return NUM(a.value * b.value);
  }),
  "Core:div": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    const res = a.value / b.value;
    if (isNaN(res))
      throw new RuntimeError("Invalid operation.");
    return NUM(res);
  }),
  "Core:mod": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return NUM(a.value % b.value);
  }),
  "Core:gt": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return a.value > b.value ? TRUE : FALSE;
  }),
  "Core:lt": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return a.value < b.value ? TRUE : FALSE;
  }),
  "Core:gteq": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return a.value >= b.value ? TRUE : FALSE;
  }),
  "Core:lteq": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return a.value <= b.value ? TRUE : FALSE;
  }),
  "Core:type": FN_NATIVE(([v]) => {
    expectAny(v);
    return STR(v.type);
  }),
  "Core:to_str": FN_NATIVE(([v]) => {
    expectAny(v);
    if (v.type === "str")
      return v;
    if (v.type === "num")
      return STR(v.value.toString());
    return STR("?");
  }),
  "Core:range": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    if (a.value < b.value) {
      return ARR(Array.from({ length: b.value - a.value + 1 }, (_, i) => NUM(i + a.value)));
    } else if (a.value > b.value) {
      return ARR(Array.from({ length: a.value - b.value + 1 }, (_, i) => NUM(a.value - i)));
    } else {
      return ARR([a]);
    }
  }),
  //#endregion
  //#region Util
  "Util:uuid": FN_NATIVE(() => {
    return STR(v4_default());
  }),
  //#endregion
  //#region Json
  "Json:stringify": FN_NATIVE(([v]) => {
    expectAny(v);
    return STR(JSON.stringify(valToJs(v)));
  }),
  "Json:parse": FN_NATIVE(([json]) => {
    assertString(json);
    return jsToVal(JSON.parse(json.value));
  }),
  //#endregion
  //#region Date
  "Date:now": FN_NATIVE(() => {
    return NUM(Date.now());
  }),
  "Date:year": FN_NATIVE(() => {
    return NUM((/* @__PURE__ */ new Date()).getFullYear());
  }),
  "Date:month": FN_NATIVE(() => {
    return NUM((/* @__PURE__ */ new Date()).getMonth() + 1);
  }),
  "Date:day": FN_NATIVE(() => {
    return NUM((/* @__PURE__ */ new Date()).getDate());
  }),
  "Date:hour": FN_NATIVE(() => {
    return NUM((/* @__PURE__ */ new Date()).getHours());
  }),
  "Date:minute": FN_NATIVE(() => {
    return NUM((/* @__PURE__ */ new Date()).getMinutes());
  }),
  "Date:second": FN_NATIVE(() => {
    return NUM((/* @__PURE__ */ new Date()).getSeconds());
  }),
  "Date:parse": FN_NATIVE(([v]) => {
    assertString(v);
    return NUM(new Date(v.value).getTime());
  }),
  //#endregion
  //#region Math
  "Math:Infinity": NUM(Infinity),
  "Math:PI": NUM(Math.PI),
  "Math:sin": FN_NATIVE(([v]) => {
    assertNumber(v);
    return NUM(Math.sin(v.value));
  }),
  "Math:cos": FN_NATIVE(([v]) => {
    assertNumber(v);
    return NUM(Math.cos(v.value));
  }),
  "Math:abs": FN_NATIVE(([v]) => {
    assertNumber(v);
    return NUM(Math.abs(v.value));
  }),
  "Math:sqrt": FN_NATIVE(([v]) => {
    assertNumber(v);
    const res = Math.sqrt(v.value);
    if (isNaN(res))
      throw new RuntimeError("Invalid operation.");
    return NUM(res);
  }),
  "Math:round": FN_NATIVE(([v]) => {
    assertNumber(v);
    return NUM(Math.round(v.value));
  }),
  "Math:floor": FN_NATIVE(([v]) => {
    assertNumber(v);
    return NUM(Math.floor(v.value));
  }),
  "Math:min": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return NUM(Math.min(a.value, b.value));
  }),
  "Math:max": FN_NATIVE(([a, b]) => {
    assertNumber(a);
    assertNumber(b);
    return NUM(Math.max(a.value, b.value));
  }),
  "Math:rnd": FN_NATIVE(([min, max]) => {
    if (min && min.type === "num" && max && max.type === "num") {
      return NUM(Math.floor(Math.random() * (max.value - min.value + 1) + min.value));
    }
    return NUM(Math.random());
  }),
  "Math:gen_rng": FN_NATIVE(([seed]) => {
    expectAny(seed);
    if (seed.type !== "num" && seed.type !== "str")
      return NULL;
    const rng2 = (0, import_seedrandom.default)(seed.value.toString());
    return FN_NATIVE(([min, max]) => {
      if (min && min.type === "num" && max && max.type === "num") {
        return NUM(Math.floor(rng2() * (max.value - min.value + 1) + min.value));
      }
      return NUM(rng2());
    });
  }),
  //#endregion
  //#region Num
  "Num:to_hex": FN_NATIVE(([v]) => {
    assertNumber(v);
    return STR(v.value.toString(16));
  }),
  "Num:from_hex": FN_NATIVE(([v]) => {
    assertString(v);
    return NUM(parseInt(v.value, 16));
  }),
  //#endregion
  //#region Str
  "Str:lf": STR("\n"),
  //#endregion
  //#region Arr
  //#endregion
  //#region Obj
  "Obj:keys": FN_NATIVE(([obj]) => {
    assertObject(obj);
    return ARR(Array.from(obj.value.keys()).map((k) => STR(k)));
  }),
  "Obj:kvs": FN_NATIVE(([obj]) => {
    assertObject(obj);
    return ARR(Array.from(obj.value.entries()).map(([k, v]) => ARR([STR(k), v])));
  }),
  "Obj:get": FN_NATIVE(([obj, key]) => {
    assertObject(obj);
    assertString(key);
    return obj.value.get(key.value) ?? NULL;
  }),
  "Obj:set": FN_NATIVE(([obj, key, value]) => {
    assertObject(obj);
    assertString(key);
    expectAny(value);
    obj.value.set(key.value, value);
    return NULL;
  }),
  "Obj:has": FN_NATIVE(([obj, key]) => {
    assertObject(obj);
    assertString(key);
    return BOOL(obj.value.has(key.value));
  }),
  "Obj:copy": FN_NATIVE(([obj]) => {
    assertObject(obj);
    return OBJ(new Map(obj.value));
  }),
  /* TODO
  'Obj:merge': FN_NATIVE(([a, b]) => {
      assertObject(a);
      assertObject(b);
      return OBJ();
  }),
  */
  //#endregion
  //#region Async
  "Async:interval": FN_NATIVE(async ([interval, callback, immediate], opts) => {
    assertNumber(interval);
    assertFunction(callback);
    if (immediate)
      assertBoolean(immediate);
    if (immediate)
      opts.call(callback, []);
    const id = setInterval(() => {
      opts.call(callback, []);
    }, interval.value);
    const abortHandler = () => {
      clearInterval(id);
    };
    opts.registerAbortHandler(abortHandler);
    return FN_NATIVE(([], opts2) => {
      clearInterval(id);
      opts2.unregisterAbortHandler(abortHandler);
    });
  }),
  "Async:timeout": FN_NATIVE(async ([delay, callback], opts) => {
    assertNumber(delay);
    assertFunction(callback);
    const id = setTimeout(() => {
      opts.call(callback, []);
    }, delay.value);
    const abortHandler = () => {
      clearTimeout(id);
    };
    opts.registerAbortHandler(abortHandler);
    return FN_NATIVE(([], opts2) => {
      clearTimeout(id);
      opts2.unregisterAbortHandler(abortHandler);
    });
  })
  //#endregion
};

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/interpreter/primitive-props.js
var import_stringz = __toESM(require_dist2());
var PRIMITIVE_PROPS = {
  num: {
    to_str: (target) => FN_NATIVE(async ([], opts) => {
      return STR(target.value.toString());
    })
  },
  str: {
    to_num: (target) => FN_NATIVE(async ([], opts) => {
      const parsed = parseInt(target.value, 10);
      if (isNaN(parsed))
        return NULL;
      return NUM(parsed);
    }),
    len: (target) => NUM((0, import_stringz.length)(target.value)),
    replace: (target) => FN_NATIVE(async ([a, b], opts) => {
      assertString(a);
      assertString(b);
      return STR(target.value.split(a.value).join(b.value));
    }),
    index_of: (target) => FN_NATIVE(async ([search], opts) => {
      assertString(search);
      return NUM((0, import_stringz.indexOf)(target.value, search.value));
    }),
    incl: (target) => FN_NATIVE(async ([search], opts) => {
      assertString(search);
      return target.value.includes(search.value) ? TRUE : FALSE;
    }),
    trim: (target) => FN_NATIVE(async ([], opts) => {
      return STR(target.value.trim());
    }),
    upper: (target) => FN_NATIVE(async ([], opts) => {
      return STR(target.value.toUpperCase());
    }),
    lower: (target) => FN_NATIVE(async ([], opts) => {
      return STR(target.value.toLowerCase());
    }),
    split: (target) => FN_NATIVE(async ([splitter], opts) => {
      if (splitter)
        assertString(splitter);
      if (splitter) {
        return ARR(target.value.split(splitter ? splitter.value : "").map((s) => STR(s)));
      } else {
        return ARR((0, import_stringz.toArray)(target.value).map((s) => STR(s)));
      }
    }),
    slice: (target) => FN_NATIVE(async ([begin, end], opts) => {
      assertNumber(begin);
      assertNumber(end);
      return STR((0, import_stringz.substring)(target.value, begin.value, end.value));
    }),
    pick: (target) => FN_NATIVE(async ([i], opts) => {
      assertNumber(i);
      const chars = (0, import_stringz.toArray)(target.value);
      const char = chars[i.value];
      return char ? STR(char) : NULL;
    })
  },
  arr: {
    len: (target) => NUM(target.value.length),
    push: (target) => FN_NATIVE(async ([val], opts) => {
      expectAny(val);
      target.value.push(val);
      return target;
    }),
    unshift: (target) => FN_NATIVE(async ([val], opts) => {
      expectAny(val);
      target.value.unshift(val);
      return target;
    }),
    pop: (target) => FN_NATIVE(async ([], opts) => {
      return target.value.pop() ?? NULL;
    }),
    shift: (target) => FN_NATIVE(async ([], opts) => {
      return target.value.shift() ?? NULL;
    }),
    concat: (target) => FN_NATIVE(async ([x], opts) => {
      assertArray(x);
      return ARR(target.value.concat(x.value));
    }),
    slice: (target) => FN_NATIVE(async ([begin, end], opts) => {
      assertNumber(begin);
      assertNumber(end);
      return ARR(target.value.slice(begin.value, end.value));
    }),
    join: (target) => FN_NATIVE(async ([joiner], opts) => {
      if (joiner)
        assertString(joiner);
      return STR(target.value.map((i) => i.type === "str" ? i.value : "").join(joiner ? joiner.value : ""));
    }),
    map: (target) => FN_NATIVE(async ([fn], opts) => {
      assertFunction(fn);
      const vals = target.value.map(async (item, i) => {
        return await opts.call(fn, [item, NUM(i + 1)]);
      });
      return ARR(await Promise.all(vals));
    }),
    filter: (target) => FN_NATIVE(async ([fn], opts) => {
      assertFunction(fn);
      const vals = [];
      for (let i = 0; i < target.value.length; i++) {
        const item = target.value[i];
        const res = await opts.call(fn, [item, NUM(i + 1)]);
        assertBoolean(res);
        if (res.value)
          vals.push(item);
      }
      return ARR(vals);
    }),
    reduce: (target) => FN_NATIVE(async ([fn, initialValue], opts) => {
      assertFunction(fn);
      const withInitialValue = initialValue != null;
      let accumulator = withInitialValue ? initialValue : target.value[0];
      for (let i = withInitialValue ? 0 : 1; i < target.value.length; i++) {
        const item = target.value[i];
        accumulator = await opts.call(fn, [accumulator, item, NUM(i + 1)]);
      }
      return accumulator;
    }),
    find: (target) => FN_NATIVE(async ([fn], opts) => {
      assertFunction(fn);
      for (let i = 0; i < target.value.length; i++) {
        const item = target.value[i];
        const res = await opts.call(fn, [item, NUM(i + 1)]);
        assertBoolean(res);
        if (res.value)
          return item;
      }
      return NULL;
    }),
    incl: (target) => FN_NATIVE(async ([val], opts) => {
      expectAny(val);
      if (val.type !== "str" && val.type !== "num" && val.type !== "bool" && val.type !== "null")
        return FALSE;
      const getValue = (v) => {
        return v.value.map((i) => {
          if (i.type === "str")
            return i.value;
          if (i.type === "num")
            return i.value;
          if (i.type === "bool")
            return i.value;
          if (i.type === "null")
            return null;
          return Symbol();
        });
      };
      return getValue(target).includes(val.type === "null" ? null : val.value) ? TRUE : FALSE;
    }),
    reverse: (target) => FN_NATIVE(async ([], opts) => {
      target.value.reverse();
      return NULL;
    }),
    copy: (target) => FN_NATIVE(async ([], opts) => {
      return ARR([...target.value]);
    })
  }
};

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/interpreter/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IRQ_RATE = 100;
var IRQ_AT = IRQ_RATE - 1;
var Interpreter = class {
  vars;
  opts;
  stepCount = 0;
  stop = false;
  scope;
  abortHandlers = [];
  constructor(vars, opts) {
    this.opts = opts ?? {};
    const io = {
      print: FN_NATIVE(([v]) => {
        expectAny(v);
        if (this.opts.out)
          this.opts.out(v);
      }),
      readline: FN_NATIVE(async (args) => {
        const q = args[0];
        assertString(q);
        if (this.opts.in == null)
          return NULL;
        const a = await this.opts.in(q.value);
        return STR(a);
      })
    };
    this.vars = { ...vars, ...std, ...io };
    this.scope = new Scope([new Map(Object.entries(this.vars))]);
    this.scope.opts.log = (type, params) => {
      switch (type) {
        case "add":
          this.log("var:add", params);
          break;
        case "read":
          this.log("var:read", params);
          break;
        case "write":
          this.log("var:write", params);
          break;
        default:
          break;
      }
    };
  }
  async exec(script) {
    if (script == null || script.length === 0)
      return;
    await this.collectNs(script);
    const result = await this._run(script, this.scope);
    this.log("end", { val: result });
  }
  async execFn(fn, args) {
    return this._fn(fn, args);
  }
  static collectMetadata(script) {
    if (script == null || script.length === 0)
      return;
    function nodeToJs(node) {
      switch (node.type) {
        case "arr":
          return node.value.map((item) => nodeToJs(item));
        case "bool":
          return node.value;
        case "null":
          return null;
        case "num":
          return node.value;
        case "obj": {
          const obj = {};
          for (const [k, v] of node.value.entries()) {
            obj[k] = nodeToJs(v);
          }
          return obj;
        }
        case "str":
          return node.value;
      }
    }
    const meta = /* @__PURE__ */ new Map();
    for (const node of script) {
      switch (node.type) {
        case "meta": {
          meta.set(node.name, nodeToJs(node.value));
          break;
        }
        default: {
        }
      }
    }
    return meta;
  }
  log(type, params) {
    if (this.opts.log)
      this.opts.log(type, params);
  }
  async collectNs(script) {
    for (const node of script) {
      switch (node.type) {
        case "ns": {
          await this.collectNsMember(node);
          break;
        }
        default: {
        }
      }
    }
  }
  async collectNsMember(ns) {
    const scope = this.scope.createChildScope();
    for (const node of ns.members) {
      switch (node.type) {
        case "def": {
          const v = await this._eval(node.expr, scope);
          scope.add(node.name, v);
          this.scope.add(ns.name + ":" + node.name, v);
          break;
        }
        case "ns": {
          break;
        }
        default: {
          throw new Error("invalid ns member type: " + node.type);
        }
      }
    }
  }
  async _fn(fn, args) {
    if (fn.native) {
      const result = await Promise.resolve(fn.native(args, {
        call: this._fn,
        registerAbortHandler: this.registerAbortHandler,
        unregisterAbortHandler: this.unregisterAbortHandler
      }));
      return result ?? NULL;
    } else {
      const _args = /* @__PURE__ */ new Map();
      for (let i = 0; i < (fn.args ?? []).length; i++) {
        _args.set(fn.args[i], args[i]);
      }
      const fnScope = fn.scope.createChildScope(_args);
      return unWrapRet(await this._run(fn.statements, fnScope));
    }
  }
  async _eval(node, scope) {
    if (this.stop)
      return NULL;
    if (this.stepCount % IRQ_RATE === IRQ_AT)
      await new Promise((resolve) => setTimeout(resolve, 5));
    this.stepCount++;
    if (this.opts.maxStep && this.stepCount > this.opts.maxStep) {
      throw new RuntimeError("max step exceeded");
    }
    switch (node.type) {
      case "call": {
        const callee = await this._eval(node.target, scope);
        assertFunction(callee);
        const args = await Promise.all(node.args.map(async (expr) => await this._eval(expr, scope)));
        return this._fn(callee, args);
      }
      case "if": {
        const cond = await this._eval(node.cond, scope);
        assertBoolean(cond);
        if (cond.value) {
          return this._eval(node.then, scope);
        } else {
          if (node.elseif && node.elseif.length > 0) {
            for (const elseif of node.elseif) {
              const cond2 = await this._eval(elseif.cond, scope);
              assertBoolean(cond2);
              if (cond2.value) {
                return this._eval(elseif.then, scope);
              }
            }
            if (node.else) {
              return this._eval(node.else, scope);
            }
          } else if (node.else) {
            return this._eval(node.else, scope);
          }
        }
        return NULL;
      }
      case "match": {
        const about = await this._eval(node.about, scope);
        for (const qa of node.qs) {
          const q = await this._eval(qa.q, scope);
          if (eq(about, q)) {
            return await this._eval(qa.a, scope);
          }
        }
        if (node.default) {
          return await this._eval(node.default, scope);
        }
        return NULL;
      }
      case "loop": {
        while (true) {
          const v = await this._run(node.statements, scope.createChildScope());
          if (v.type === "break") {
            break;
          } else if (v.type === "return") {
            return v;
          }
        }
        return NULL;
      }
      case "for": {
        if (node.times) {
          const times = await this._eval(node.times, scope);
          assertNumber(times);
          for (let i = 0; i < times.value; i++) {
            const v = await this._eval(node.for, scope);
            if (v.type === "break") {
              break;
            } else if (v.type === "return") {
              return v;
            }
          }
        } else {
          const from = await this._eval(node.from, scope);
          const to = await this._eval(node.to, scope);
          assertNumber(from);
          assertNumber(to);
          for (let i = from.value; i < from.value + to.value; i++) {
            const v = await this._eval(node.for, scope.createChildScope(/* @__PURE__ */ new Map([
              [node.var, NUM(i)]
            ])));
            if (v.type === "break") {
              break;
            } else if (v.type === "return") {
              return v;
            }
          }
        }
        return NULL;
      }
      case "each": {
        const items = await this._eval(node.items, scope);
        assertArray(items);
        for (const item of items.value) {
          const v = await this._eval(node.for, scope.createChildScope(/* @__PURE__ */ new Map([
            [node.var, item]
          ])));
          if (v.type === "break") {
            break;
          } else if (v.type === "return") {
            return v;
          }
        }
        return NULL;
      }
      case "def": {
        const value = await this._eval(node.expr, scope);
        if (node.attr.length > 0) {
          const attrs = [];
          for (const nAttr of node.attr) {
            attrs.push({
              name: nAttr.name,
              value: await this._eval(nAttr.value, scope)
            });
          }
          value.attr = attrs;
        }
        scope.add(node.name, value);
        return NULL;
      }
      case "identifier": {
        return scope.get(node.name);
      }
      case "assign": {
        const v = await this._eval(node.expr, scope);
        if (node.dest.type === "identifier") {
          scope.assign(node.dest.name, v);
          return NULL;
        } else if (node.dest.type === "index") {
          const assignee = await this._eval(node.dest.target, scope);
          assertArray(assignee);
          const i = await this._eval(node.dest.index, scope);
          assertNumber(i);
          assignee.value[i.value] = v;
          return NULL;
        } else if (node.dest.type === "prop") {
          const assignee = await this._eval(node.dest.target, scope);
          assertObject(assignee);
          assignee.value.set(node.dest.name, v);
          return NULL;
        } else {
          throw new RuntimeError("The left-hand side of an assignment expression must be a variable or a property/index access.");
        }
      }
      case "addAssign": {
        const target = await this._eval(node.dest, scope);
        assertNumber(target);
        const v = await this._eval(node.expr, scope);
        assertNumber(v);
        target.value += v.value;
        return NULL;
      }
      case "subAssign": {
        const target = await this._eval(node.dest, scope);
        assertNumber(target);
        const v = await this._eval(node.expr, scope);
        assertNumber(v);
        target.value -= v.value;
        return NULL;
      }
      case "null":
        return NULL;
      case "bool":
        return BOOL(node.value);
      case "num":
        return NUM(node.value);
      case "str":
        return STR(node.value);
      case "arr":
        return ARR(await Promise.all(node.value.map(async (item) => await this._eval(item, scope))));
      case "obj": {
        const obj = /* @__PURE__ */ new Map();
        for (const k of node.value.keys()) {
          obj.set(k, await this._eval(node.value.get(k), scope));
        }
        return OBJ(obj);
      }
      case "prop": {
        const target = await this._eval(node.target, scope);
        if (isObject(target)) {
          if (target.value.has(node.name)) {
            return target.value.get(node.name);
          } else {
            return NULL;
          }
        } else if (isNumber(target)) {
          if (Object.hasOwn(PRIMITIVE_PROPS.num, node.name)) {
            return PRIMITIVE_PROPS.num[node.name](target);
          } else {
            throw new RuntimeError(`No such prop (${node.name}) in ${target.type}.`);
          }
        } else if (isString(target)) {
          if (Object.hasOwn(PRIMITIVE_PROPS.str, node.name)) {
            return PRIMITIVE_PROPS.str[node.name](target);
          } else {
            throw new RuntimeError(`No such prop (${node.name}) in ${target.type}.`);
          }
        } else if (isArray(target)) {
          if (Object.hasOwn(PRIMITIVE_PROPS.arr, node.name)) {
            return PRIMITIVE_PROPS.arr[node.name](target);
          } else {
            throw new RuntimeError(`No such prop (${node.name}) in ${target.type}.`);
          }
        } else {
          throw new RuntimeError(`Cannot read prop (${node.name}) of ${target.type}.`);
        }
      }
      case "index": {
        const target = await this._eval(node.target, scope);
        assertArray(target);
        const i = await this._eval(node.index, scope);
        assertNumber(i);
        const item = target.value[i.value];
        if (item === void 0) {
          throw new IndexOutOfRangeError(`Index out of range. index: ${i.value} max: ${target.value.length - 1}`);
        }
        return item;
      }
      case "not": {
        const v = await this._eval(node.expr, scope);
        assertBoolean(v);
        return BOOL(!v.value);
      }
      case "fn": {
        return FN(node.args.map((arg) => arg.name), node.children, scope);
      }
      case "block": {
        return this._run(node.statements, scope.createChildScope());
      }
      case "tmpl": {
        let str = "";
        for (const x of node.tmpl) {
          if (typeof x === "string") {
            str += x;
          } else {
            const v = await this._eval(x, scope);
            let text = "";
            if (v.type === "str")
              text = v.value;
            else if (v.type === "num")
              text = v.value.toString();
            str += text;
          }
        }
        return STR(str);
      }
      case "return": {
        const val = await this._eval(node.expr, scope);
        this.log("block:return", { scope: scope.name, val });
        return RETURN(val);
      }
      case "break": {
        this.log("block:break", { scope: scope.name });
        return BREAK();
      }
      case "continue": {
        this.log("block:continue", { scope: scope.name });
        return CONTINUE();
      }
      case "ns": {
        return NULL;
      }
      case "meta": {
        return NULL;
      }
      default: {
        throw new Error("invalid node type");
      }
    }
  }
  async _run(program, scope) {
    this.log("block:enter", { scope: scope.name });
    let v = NULL;
    for (let i = 0; i < program.length; i++) {
      const node = program[i];
      v = await this._eval(node, scope);
      if (v.type === "return") {
        this.log("block:return", { scope: scope.name, val: v.value });
        return v;
      } else if (v.type === "break") {
        this.log("block:break", { scope: scope.name });
        return v;
      } else if (v.type === "continue") {
        this.log("block:continue", { scope: scope.name });
        return v;
      }
    }
    this.log("block:leave", { scope: scope.name, val: v });
    return v;
  }
  registerAbortHandler(handler) {
    this.abortHandlers.push(handler);
  }
  unregisterAbortHandler(handler) {
    this.abortHandlers = this.abortHandlers.filter((h) => h !== handler);
  }
  abort() {
    this.stop = true;
    for (const handler of this.abortHandlers) {
      handler();
    }
    this.abortHandlers = [];
  }
};
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "exec", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "execFn", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "log", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "collectNs", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "collectNsMember", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "_fn", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "_eval", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "_run", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "registerAbortHandler", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "unregisterAbortHandler", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter.prototype, "abort", null);
__decorate2([
  import_autobind_decorator2.default
], Interpreter, "collectMetadata", null);

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/parser.js
function peg$subclass(child, parent) {
  function C() {
    this.constructor = child;
  }
  C.prototype = parent.prototype;
  child.prototype = new C();
}
function peg$SyntaxError(message, expected, found, location) {
  var self2 = Error.call(this, message);
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self2, peg$SyntaxError.prototype);
  }
  self2.expected = expected;
  self2.found = found;
  self2.location = location;
  self2.name = "SyntaxError";
  return self2;
}
peg$subclass(peg$SyntaxError, Error);
function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) {
    return str;
  }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}
peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var loc = this.location.source + ":" + s.line + ":" + s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", s.line.toString().length, " ");
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = last - s.column || 1;
      str += "\n --> " + loc + "\n" + filler + " |\n" + s.line + " | " + line + "\n" + filler + " | " + peg$padEnd("", s.column - 1, " ") + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};
peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return '"' + literalEscape(expectation.text) + '"';
    },
    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
      });
      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(expectation) {
      return expectation.description;
    }
  };
  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }
  function literalEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
      return "\\x" + hex(ch);
    });
  }
  function classEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
      return "\\x" + hex(ch);
    });
  }
  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }
  function describeExpected(expected2) {
    var descriptions = expected2.map(describeExpectation);
    var i, j;
    descriptions.sort();
    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }
    switch (descriptions.length) {
      case 1:
        return descriptions[0];
      case 2:
        return descriptions[0] + " or " + descriptions[1];
      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }
  function describeFound(found2) {
    return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
  }
  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};
function peg$parse(input, options) {
  options = options !== void 0 ? options : {};
  var peg$FAILED = {};
  var peg$source = options.grammarSource;
  var peg$startRuleFunctions = { Preprocess: peg$parsePreprocess, Main: peg$parseMain };
  var peg$startRuleFunction = peg$parsePreprocess;
  var peg$c0 = "//";
  var peg$c1 = "/*";
  var peg$c2 = "*/";
  var peg$c3 = "(";
  var peg$c4 = ")";
  var peg$c5 = "::";
  var peg$c6 = "{";
  var peg$c7 = "}";
  var peg$c8 = "###";
  var peg$c9 = "let";
  var peg$c10 = ":";
  var peg$c11 = "=";
  var peg$c12 = "var";
  var peg$c13 = "<:";
  var peg$c14 = "#[";
  var peg$c15 = "]";
  var peg$c16 = "each";
  var peg$c17 = ",";
  var peg$c18 = "for";
  var peg$c19 = "return";
  var peg$c20 = "loop";
  var peg$c21 = "break";
  var peg$c22 = "continue";
  var peg$c23 = "+=";
  var peg$c24 = "-=";
  var peg$c25 = "\\";
  var peg$c26 = "||";
  var peg$c27 = "&&";
  var peg$c28 = "==";
  var peg$c29 = "!=";
  var peg$c30 = "<=";
  var peg$c31 = ">=";
  var peg$c32 = "<";
  var peg$c33 = ">";
  var peg$c34 = "+";
  var peg$c35 = "-";
  var peg$c36 = "*";
  var peg$c37 = "/";
  var peg$c38 = "%";
  var peg$c39 = "!";
  var peg$c40 = "[";
  var peg$c41 = ".";
  var peg$c42 = "if";
  var peg$c43 = "elif";
  var peg$c44 = "else";
  var peg$c45 = "match";
  var peg$c46 = "=>";
  var peg$c47 = "eval";
  var peg$c48 = "`";
  var peg$c49 = "\\{";
  var peg$c50 = "\\}";
  var peg$c51 = "\\`";
  var peg$c52 = '"';
  var peg$c53 = "'";
  var peg$c54 = '\\"';
  var peg$c55 = "\\'";
  var peg$c56 = "true";
  var peg$c57 = "false";
  var peg$c58 = "null";
  var peg$c59 = ";";
  var peg$c60 = "@";
  var peg$c61 = "@(";
  var peg$c62 = "\r\n";
  var peg$r0 = /^[A-Z0-9_:]/i;
  var peg$r1 = /^[\-+*\/%&|=~<>!?]/;
  var peg$r2 = /^[+\-]/;
  var peg$r3 = /^[1-9]/;
  var peg$r4 = /^[0-9]/;
  var peg$r5 = /^[A-Z_]/i;
  var peg$r6 = /^[A-Z0-9_]/i;
  var peg$r7 = /^[\r\n]/;
  var peg$r8 = /^[ \t\r\n]/;
  var peg$r9 = /^[ \t]/;
  var peg$e0 = peg$anyExpectation();
  var peg$e1 = peg$literalExpectation("//", false);
  var peg$e2 = peg$literalExpectation("/*", false);
  var peg$e3 = peg$literalExpectation("*/", false);
  var peg$e4 = peg$literalExpectation("(", false);
  var peg$e5 = peg$literalExpectation(")", false);
  var peg$e6 = peg$literalExpectation("::", false);
  var peg$e7 = peg$literalExpectation("{", false);
  var peg$e8 = peg$literalExpectation("}", false);
  var peg$e9 = peg$literalExpectation("###", false);
  var peg$e10 = peg$literalExpectation("let", false);
  var peg$e11 = peg$literalExpectation(":", false);
  var peg$e12 = peg$literalExpectation("=", false);
  var peg$e13 = peg$literalExpectation("var", false);
  var peg$e14 = peg$literalExpectation("<:", false);
  var peg$e15 = peg$literalExpectation("#[", false);
  var peg$e16 = peg$literalExpectation("]", false);
  var peg$e17 = peg$literalExpectation("each", false);
  var peg$e18 = peg$literalExpectation(",", false);
  var peg$e19 = peg$literalExpectation("for", false);
  var peg$e20 = peg$literalExpectation("return", false);
  var peg$e21 = peg$classExpectation([["A", "Z"], ["0", "9"], "_", ":"], false, true);
  var peg$e22 = peg$literalExpectation("loop", false);
  var peg$e23 = peg$literalExpectation("break", false);
  var peg$e24 = peg$literalExpectation("continue", false);
  var peg$e25 = peg$literalExpectation("+=", false);
  var peg$e26 = peg$literalExpectation("-=", false);
  var peg$e27 = peg$literalExpectation("\\", false);
  var peg$e28 = peg$literalExpectation("||", false);
  var peg$e29 = peg$literalExpectation("&&", false);
  var peg$e30 = peg$literalExpectation("==", false);
  var peg$e31 = peg$literalExpectation("!=", false);
  var peg$e32 = peg$literalExpectation("<=", false);
  var peg$e33 = peg$literalExpectation(">=", false);
  var peg$e34 = peg$literalExpectation("<", false);
  var peg$e35 = peg$literalExpectation(">", false);
  var peg$e36 = peg$literalExpectation("+", false);
  var peg$e37 = peg$literalExpectation("-", false);
  var peg$e38 = peg$literalExpectation("*", false);
  var peg$e39 = peg$literalExpectation("/", false);
  var peg$e40 = peg$literalExpectation("%", false);
  var peg$e41 = peg$classExpectation(["-", "+", "*", "/", "%", "&", "|", "=", "~", "<", ">", "!", "?"], false, false);
  var peg$e42 = peg$literalExpectation("!", false);
  var peg$e43 = peg$literalExpectation("[", false);
  var peg$e44 = peg$literalExpectation(".", false);
  var peg$e45 = peg$literalExpectation("if", false);
  var peg$e46 = peg$literalExpectation("elif", false);
  var peg$e47 = peg$literalExpectation("else", false);
  var peg$e48 = peg$literalExpectation("match", false);
  var peg$e49 = peg$literalExpectation("=>", false);
  var peg$e50 = peg$literalExpectation("eval", false);
  var peg$e51 = peg$literalExpectation("`", false);
  var peg$e52 = peg$literalExpectation("\\{", false);
  var peg$e53 = peg$literalExpectation("\\}", false);
  var peg$e54 = peg$literalExpectation("\\`", false);
  var peg$e55 = peg$literalExpectation('"', false);
  var peg$e56 = peg$literalExpectation("'", false);
  var peg$e57 = peg$literalExpectation('\\"', false);
  var peg$e58 = peg$literalExpectation("\\'", false);
  var peg$e59 = peg$classExpectation(["+", "-"], false, false);
  var peg$e60 = peg$classExpectation([["1", "9"]], false, false);
  var peg$e61 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e62 = peg$literalExpectation("true", false);
  var peg$e63 = peg$literalExpectation("false", false);
  var peg$e64 = peg$literalExpectation("null", false);
  var peg$e65 = peg$literalExpectation(";", false);
  var peg$e66 = peg$literalExpectation("@", false);
  var peg$e67 = peg$literalExpectation("@(", false);
  var peg$e68 = peg$classExpectation([["A", "Z"], "_"], false, true);
  var peg$e69 = peg$classExpectation([["A", "Z"], ["0", "9"], "_"], false, true);
  var peg$e70 = peg$literalExpectation("\r\n", false);
  var peg$e71 = peg$classExpectation(["\r", "\n"], false, false);
  var peg$e72 = peg$classExpectation([" ", "	", "\r", "\n"], false, false);
  var peg$e73 = peg$classExpectation([" ", "	"], false, false);
  var peg$f0 = function(s) {
    return s.join("");
  };
  var peg$f1 = function() {
    return text();
  };
  var peg$f2 = function() {
    return text();
  };
  var peg$f3 = function() {
    return "";
  };
  var peg$f4 = function() {
    return "";
  };
  var peg$f5 = function(content) {
    return content ?? [];
  };
  var peg$f6 = function(head, s) {
    return s;
  };
  var peg$f7 = function(head, tails) {
    return [head, ...tails];
  };
  var peg$f8 = function(head, s) {
    return s;
  };
  var peg$f9 = function(head, tails) {
    return [head, ...tails];
  };
  var peg$f10 = function(head, s) {
    return s;
  };
  var peg$f11 = function(head, tails) {
    return [head, ...tails];
  };
  var peg$f12 = function(e) {
    return e;
  };
  var peg$f13 = function(name, members) {
    return createNode("ns", { name, members });
  };
  var peg$f14 = function(name, value) {
    return createNode("meta", { name, value });
  };
  var peg$f15 = function(value) {
    return createNode("meta", { name: null, value });
  };
  var peg$f16 = function(name, type, expr) {
    return createNode("def", { name, varType: type, expr, mut: false, attr: [] });
  };
  var peg$f17 = function(name, type, expr) {
    return createNode("def", { name, varType: type, expr, mut: true, attr: [] });
  };
  var peg$f18 = function(expr) {
    return createNode("identifier", {
      name: "print",
      chain: [createNode("callChain", { args: [expr] })]
    });
  };
  var peg$f19 = function(name, value) {
    return createNode("attr", {
      name,
      value: value ?? createNode("bool", { value: true })
    });
  };
  var peg$f20 = function(varn, items, x) {
    return createNode("each", {
      var: varn,
      items,
      for: x
    });
  };
  var peg$f21 = function(varn, items, x) {
    return createNode("each", {
      var: varn,
      items,
      for: x
    });
  };
  var peg$f22 = function(varn, v) {
    return v;
  };
  var peg$f23 = function(varn, from, to, x) {
    return createNode("for", {
      var: varn,
      from: from ?? createNode("num", { value: 0 }),
      to,
      for: x
    });
  };
  var peg$f24 = function(varn, v) {
    return v;
  };
  var peg$f25 = function(varn, from, to, x) {
    return createNode("for", {
      var: varn,
      from: from ?? createNode("num", { value: 0 }),
      to,
      for: x
    });
  };
  var peg$f26 = function(times, x) {
    return createNode("for", {
      times,
      for: x
    });
  };
  var peg$f27 = function(times, x) {
    return createNode("for", {
      times,
      for: x
    });
  };
  var peg$f28 = function(expr) {
    return createNode("return", { expr });
  };
  var peg$f29 = function(s) {
    return createNode("loop", { statements: s });
  };
  var peg$f30 = function() {
    return createNode("break", {});
  };
  var peg$f31 = function() {
    return createNode("continue", {});
  };
  var peg$f32 = function(dest, op, expr) {
    if (op === "+=")
      return createNode("addAssign", { dest, expr });
    else if (op === "-=")
      return createNode("subAssign", { dest, expr });
    else
      return createNode("assign", { dest, expr });
  };
  var peg$f33 = function(head, op, term) {
    return { op, term };
  };
  var peg$f34 = function(head, tail) {
    return createNode("infix", {
      operands: [head, ...tail.map((i) => i.term)],
      operators: tail.map((i) => i.op)
    });
  };
  var peg$f35 = function() {
    return text();
  };
  var peg$f36 = function(expr) {
    return createNode("not", {
      expr
    });
  };
  var peg$f37 = function(e, chain) {
    return { ...e, chain };
  };
  var peg$f38 = function(args) {
    return createNode("callChain", { args: args ?? [] });
  };
  var peg$f39 = function(head, expr) {
    return expr;
  };
  var peg$f40 = function(head, tails) {
    return [head, ...tails];
  };
  var peg$f41 = function(index) {
    return createNode("indexChain", { index });
  };
  var peg$f42 = function(name) {
    return createNode("propChain", { name });
  };
  var peg$f43 = function(cond, then, elseif, elseBlock) {
    return createNode("if", {
      cond,
      then,
      elseif: elseif ?? [],
      else: elseBlock
    });
  };
  var peg$f44 = function(head, tails) {
    return [head, ...tails];
  };
  var peg$f45 = function(cond, then) {
    return { cond, then };
  };
  var peg$f46 = function(then) {
    return then;
  };
  var peg$f47 = function(about, q, a) {
    return { q, a };
  };
  var peg$f48 = function(about, qs, x) {
    return createNode("match", {
      about,
      qs: qs ?? [],
      default: x
    });
  };
  var peg$f49 = function(s) {
    return createNode("block", { statements: s });
  };
  var peg$f50 = function(name) {
    return createNode("identifier", { name });
  };
  var peg$f51 = function(i) {
    return i;
  };
  var peg$f52 = function(items) {
    return createNode("tmpl", { tmpl: concatTemplate(items) });
  };
  var peg$f53 = function(expr) {
    return expr;
  };
  var peg$f54 = function() {
    return text()[1];
  };
  var peg$f55 = function() {
    return text()[1];
  };
  var peg$f56 = function() {
    return "`";
  };
  var peg$f57 = function(c) {
    return c;
  };
  var peg$f58 = function(value) {
    return createNode("str", { value: value.join("") });
  };
  var peg$f59 = function(c) {
    return c;
  };
  var peg$f60 = function(value) {
    return createNode("str", { value: value.join("") });
  };
  var peg$f61 = function() {
    return '"';
  };
  var peg$f62 = function() {
    return "'";
  };
  var peg$f63 = function() {
    return createNode("num", { value: parseFloat(text()) });
  };
  var peg$f64 = function() {
    return createNode("num", { value: parseFloat(text()) });
  };
  var peg$f65 = function() {
    return createNode("num", { value: parseInt(text(), 10) });
  };
  var peg$f66 = function() {
    return createNode("num", { value: parseInt(text(), 10) });
  };
  var peg$f67 = function() {
    return createNode("bool", { value: true });
  };
  var peg$f68 = function() {
    return createNode("bool", { value: false });
  };
  var peg$f69 = function() {
    return createNode("null", {});
  };
  var peg$f70 = function(k, v) {
    return { k, v };
  };
  var peg$f71 = function(kvs) {
    const obj = /* @__PURE__ */ new Map();
    for (const kv of kvs) {
      obj.set(kv.k, kv.v);
    }
    return createNode("obj", { value: obj });
  };
  var peg$f72 = function(item) {
    return item;
  };
  var peg$f73 = function(items) {
    return createNode("arr", { value: items });
  };
  var peg$f74 = function(name, type) {
    return { name, argType: type };
  };
  var peg$f75 = function(head, tails) {
    return [head, ...tails];
  };
  var peg$f76 = function(s1, name, s2, args, ret, content) {
    if (s1.length > 0 || s2.length > 0) {
      error("Cannot use spaces before or after the function name.");
    }
    return createNode("def", {
      name,
      expr: createNode("fn", { args: args ?? [], retType: ret }, content ?? []),
      mut: false,
      attr: []
    });
  };
  var peg$f77 = function(args, ret, content) {
    return createNode("fn", { args: args ?? [], retType: ret }, content ?? []);
  };
  var peg$f78 = function(item) {
    return item;
  };
  var peg$f79 = function(items) {
    return createNode("arr", { value: items });
  };
  var peg$f80 = function(k, v) {
    return { k, v };
  };
  var peg$f81 = function(kvs) {
    const obj = /* @__PURE__ */ new Map();
    for (const kv of kvs) {
      obj.set(kv.k, kv.v);
    }
    return createNode("obj", { value: obj });
  };
  var peg$f82 = function(args, result) {
    return createNode("fnTypeSource", { args: args ?? [], result });
  };
  var peg$f83 = function(head, tails) {
    return [head, ...tails];
  };
  var peg$f84 = function(name, inner) {
    return createNode("namedTypeSource", { name, inner });
  };
  var peg$f85 = function(name) {
    return createNode("namedTypeSource", { name, inner: null });
  };
  var peg$f86 = function() {
    return text();
  };
  var peg$f87 = function() {
    return text();
  };
  var peg$f88 = function(s) {
    return createNode("block", { statements: s ?? [] });
  };
  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = 0;
  var peg$maxFailExpected = [];
  var peg$silentFails = 0;
  var peg$resultsCache = {};
  var peg$result;
  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
    }
    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }
  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }
  function offset() {
    return peg$savedPos;
  }
  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }
  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }
  function expected(description, location2) {
    location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location2);
  }
  function error(message, location2) {
    location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location2);
  }
  function peg$literalExpectation(text2, ignoreCase) {
    return { type: "literal", text: text2, ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts, inverted, ignoreCase };
  }
  function peg$anyExpectation() {
    return { type: "any" };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$otherExpectation(description) {
    return { type: "other", description };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;
    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }
      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };
      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);
    return {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected2) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected2);
  }
  function peg$buildSimpleError(message, location2) {
    return new peg$SyntaxError(message, null, null, location2);
  }
  function peg$buildStructuredError(expected2, found, location2) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected2, found), expected2, found, location2);
  }
  function peg$parsePreprocess() {
    var s0, s1, s2;
    var key = peg$currPos * 75 + 0;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsePreprocessPart();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsePreprocessPart();
    }
    peg$savedPos = s0;
    s1 = peg$f0(s1);
    s0 = s1;
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parsePreprocessPart() {
    var s0, s1;
    var key = peg$currPos * 75 + 1;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseTmpl();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f1();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseStr();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f2();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parseComment();
        if (s0 === peg$FAILED) {
          if (input.length > peg$currPos) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e0);
            }
          }
        }
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseComment() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 2;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c0) {
      s1 = peg$c0;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e1);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parseEOL();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e0);
          }
        }
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        s5 = peg$parseEOL();
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e0);
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f3();
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c1) {
        s1 = peg$c1;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e2);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c2) {
          s5 = peg$c2;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e3);
          }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e0);
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.substr(peg$currPos, 2) === peg$c2) {
            s5 = peg$c2;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e3);
            }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e0);
              }
            }
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (input.substr(peg$currPos, 2) === peg$c2) {
          s3 = peg$c2;
          peg$currPos += 2;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e3);
          }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f4();
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseMain() {
    var s0, s1, s2, s3, s4;
    var key = peg$currPos * 75 + 3;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    s2 = peg$parseGlobalStatements();
    if (s2 === peg$FAILED) {
      s2 = null;
    }
    s3 = [];
    s4 = peg$parse_();
    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$parse_();
    }
    peg$savedPos = s0;
    s0 = peg$f5(s2);
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseGlobalStatements() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    var key = peg$currPos * 75 + 4;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseGlobalStatement();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parse__();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse__();
      }
      s5 = peg$parseLF();
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parse_();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parse_();
        }
        s7 = peg$parseGlobalStatement();
        if (s7 !== peg$FAILED) {
          peg$savedPos = s3;
          s3 = peg$f6(s1, s7);
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parse__();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse__();
        }
        s5 = peg$parseLF();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          s7 = peg$parseGlobalStatement();
          if (s7 !== peg$FAILED) {
            peg$savedPos = s3;
            s3 = peg$f6(s1, s7);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f7(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNamespaceStatements() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    var key = peg$currPos * 75 + 5;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseNamespaceStatement();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parse__();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse__();
      }
      s5 = peg$parseLF();
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parse_();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parse_();
        }
        s7 = peg$parseNamespaceStatement();
        if (s7 !== peg$FAILED) {
          peg$savedPos = s3;
          s3 = peg$f8(s1, s7);
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parse__();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse__();
        }
        s5 = peg$parseLF();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          s7 = peg$parseNamespaceStatement();
          if (s7 !== peg$FAILED) {
            peg$savedPos = s3;
            s3 = peg$f8(s1, s7);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f9(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseStatements() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    var key = peg$currPos * 75 + 6;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseStatement();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parse__();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse__();
      }
      s5 = peg$parseLF();
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parse_();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parse_();
        }
        s7 = peg$parseStatement();
        if (s7 !== peg$FAILED) {
          peg$savedPos = s3;
          s3 = peg$f10(s1, s7);
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parse__();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse__();
        }
        s5 = peg$parseLF();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          s7 = peg$parseStatement();
          if (s7 !== peg$FAILED) {
            peg$savedPos = s3;
            s3 = peg$f10(s1, s7);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f11(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseGlobalStatement() {
    var s0;
    var key = peg$currPos * 75 + 7;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseNamespace();
    if (s0 === peg$FAILED) {
      s0 = peg$parseMeta();
      if (s0 === peg$FAILED) {
        s0 = peg$parseStatement();
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNamespaceStatement() {
    var s0;
    var key = peg$currPos * 75 + 8;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseVarDef();
    if (s0 === peg$FAILED) {
      s0 = peg$parseFnDef();
      if (s0 === peg$FAILED) {
        s0 = peg$parseNamespace();
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseStatement() {
    var s0;
    var key = peg$currPos * 75 + 9;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseVarDef();
    if (s0 === peg$FAILED) {
      s0 = peg$parseFnDef();
      if (s0 === peg$FAILED) {
        s0 = peg$parseOut();
        if (s0 === peg$FAILED) {
          s0 = peg$parseReturn();
          if (s0 === peg$FAILED) {
            s0 = peg$parseAttr();
            if (s0 === peg$FAILED) {
              s0 = peg$parseEach();
              if (s0 === peg$FAILED) {
                s0 = peg$parseFor();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseLoop();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseBreak();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseContinue();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseAssign();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseExpr();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseExpr() {
    var s0;
    var key = peg$currPos * 75 + 10;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseInfix();
    if (s0 === peg$FAILED) {
      s0 = peg$parseExpr2();
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseExpr2() {
    var s0;
    var key = peg$currPos * 75 + 11;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseIf();
    if (s0 === peg$FAILED) {
      s0 = peg$parseFn();
      if (s0 === peg$FAILED) {
        s0 = peg$parseChain();
        if (s0 === peg$FAILED) {
          s0 = peg$parseExpr3();
        }
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseExpr3() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 12;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseMatch();
    if (s0 === peg$FAILED) {
      s0 = peg$parseEval();
      if (s0 === peg$FAILED) {
        s0 = peg$parseTmpl();
        if (s0 === peg$FAILED) {
          s0 = peg$parseStr();
          if (s0 === peg$FAILED) {
            s0 = peg$parseNum();
            if (s0 === peg$FAILED) {
              s0 = peg$parseBool();
              if (s0 === peg$FAILED) {
                s0 = peg$parseNull();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseObj();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseArr();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseNot();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseIdentifier();
                        if (s0 === peg$FAILED) {
                          s0 = peg$currPos;
                          if (input.charCodeAt(peg$currPos) === 40) {
                            s1 = peg$c3;
                            peg$currPos++;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$e4);
                            }
                          }
                          if (s1 !== peg$FAILED) {
                            s2 = [];
                            s3 = peg$parse_();
                            while (s3 !== peg$FAILED) {
                              s2.push(s3);
                              s3 = peg$parse_();
                            }
                            s3 = peg$parseExpr();
                            if (s3 !== peg$FAILED) {
                              s4 = [];
                              s5 = peg$parse_();
                              while (s5 !== peg$FAILED) {
                                s4.push(s5);
                                s5 = peg$parse_();
                              }
                              if (input.charCodeAt(peg$currPos) === 41) {
                                s5 = peg$c4;
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$e5);
                                }
                              }
                              if (s5 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s0 = peg$f12(s3);
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseStaticLiteral() {
    var s0;
    var key = peg$currPos * 75 + 13;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseNum();
    if (s0 === peg$FAILED) {
      s0 = peg$parseStr();
      if (s0 === peg$FAILED) {
        s0 = peg$parseBool();
        if (s0 === peg$FAILED) {
          s0 = peg$parseStaticArr();
          if (s0 === peg$FAILED) {
            s0 = peg$parseStaticObj();
            if (s0 === peg$FAILED) {
              s0 = peg$parseNull();
            }
          }
        }
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNamespace() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    var key = peg$currPos * 75 + 14;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c5) {
      s1 = peg$c5;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e6);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNAME();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parse_();
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s5 = peg$c6;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e7);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              s7 = peg$parseNamespaceStatements();
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              s8 = [];
              s9 = peg$parse_();
              while (s9 !== peg$FAILED) {
                s8.push(s9);
                s9 = peg$parse_();
              }
              if (input.charCodeAt(peg$currPos) === 125) {
                s9 = peg$c7;
                peg$currPos++;
              } else {
                s9 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e8);
                }
              }
              if (s9 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f13(s3, s7);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseMeta() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 15;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c8) {
      s1 = peg$c8;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e9);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse__();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse__();
      }
      s3 = peg$parseNAME();
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parse_();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_();
        }
        s5 = peg$parseStaticLiteral();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f14(s3, s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c8) {
        s1 = peg$c8;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e9);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse__();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse__();
        }
        s3 = peg$parseStaticLiteral();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f15(s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseVarDef() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;
    var key = peg$currPos * 75 + 16;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c9) {
      s1 = peg$c9;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e10);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNAME();
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$parse_();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 58) {
            s6 = peg$c10;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e11);
            }
          }
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$parse_();
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              s8 = peg$parse_();
            }
            s8 = peg$parseType();
            if (s8 !== peg$FAILED) {
              s4 = s8;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          s5 = [];
          s6 = peg$parse_();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 61) {
            s6 = peg$c11;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e12);
            }
          }
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$parse_();
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              s8 = peg$parse_();
            }
            s8 = peg$parseExpr();
            if (s8 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f16(s3, s4, s8);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c12) {
        s1 = peg$c12;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e13);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseNAME();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (input.charCodeAt(peg$currPos) === 58) {
              s6 = peg$c10;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e11);
              }
            }
            if (s6 !== peg$FAILED) {
              s7 = [];
              s8 = peg$parse_();
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$parse_();
              }
              s8 = peg$parseType();
              if (s8 !== peg$FAILED) {
                s4 = s8;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = null;
            }
            s5 = [];
            s6 = peg$parse_();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parse_();
            }
            if (input.charCodeAt(peg$currPos) === 61) {
              s6 = peg$c11;
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e12);
              }
            }
            if (s6 !== peg$FAILED) {
              s7 = [];
              s8 = peg$parse_();
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$parse_();
              }
              s8 = peg$parseExpr();
              if (s8 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f17(s3, s4, s8);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseOut() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 17;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c13) {
      s1 = peg$c13;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e14);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = peg$parseExpr();
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f18(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseAttr() {
    var s0, s1, s2, s3, s4, s5, s6;
    var key = peg$currPos * 75 + 18;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c14) {
      s1 = peg$c14;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e15);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = peg$parseNAME();
      if (s3 !== peg$FAILED) {
        s4 = peg$currPos;
        s5 = [];
        s6 = peg$parse_();
        while (s6 !== peg$FAILED) {
          s5.push(s6);
          s6 = peg$parse_();
        }
        s6 = peg$parseStaticLiteral();
        if (s6 !== peg$FAILED) {
          s4 = s6;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 === peg$FAILED) {
          s4 = null;
        }
        s5 = [];
        s6 = peg$parse_();
        while (s6 !== peg$FAILED) {
          s5.push(s6);
          s6 = peg$parse_();
        }
        if (input.charCodeAt(peg$currPos) === 93) {
          s6 = peg$c15;
          peg$currPos++;
        } else {
          s6 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e16);
          }
        }
        if (s6 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f19(s3, s4);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseEach() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    var key = peg$currPos * 75 + 19;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c16) {
      s1 = peg$c16;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e17);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c3;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e4);
        }
      }
      if (s3 !== peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c9) {
          s4 = peg$c9;
          peg$currPos += 3;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e10);
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parse_();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_();
          }
          s6 = peg$parseNAME();
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$parse_();
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              s8 = peg$parse_();
            }
            if (input.charCodeAt(peg$currPos) === 44) {
              s8 = peg$c17;
              peg$currPos++;
            } else {
              s8 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e18);
              }
            }
            if (s8 === peg$FAILED) {
              s8 = null;
            }
            s9 = [];
            s10 = peg$parse_();
            while (s10 !== peg$FAILED) {
              s9.push(s10);
              s10 = peg$parse_();
            }
            s10 = peg$parseExpr();
            if (s10 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s11 = peg$c4;
                peg$currPos++;
              } else {
                s11 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e5);
                }
              }
              if (s11 !== peg$FAILED) {
                s12 = [];
                s13 = peg$parse_();
                while (s13 !== peg$FAILED) {
                  s12.push(s13);
                  s13 = peg$parse_();
                }
                s13 = peg$parseBlockOrStatement();
                if (s13 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f20(s6, s10, s13);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c16) {
        s1 = peg$c16;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e17);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c9) {
            s3 = peg$c9;
            peg$currPos += 3;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e10);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parse_();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parse_();
            }
            s5 = peg$parseNAME();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              if (input.charCodeAt(peg$currPos) === 44) {
                s7 = peg$c17;
                peg$currPos++;
              } else {
                s7 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e18);
                }
              }
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              s8 = [];
              s9 = peg$parse_();
              while (s9 !== peg$FAILED) {
                s8.push(s9);
                s9 = peg$parse_();
              }
              s9 = peg$parseExpr();
              if (s9 !== peg$FAILED) {
                s10 = [];
                s11 = peg$parse_();
                if (s11 !== peg$FAILED) {
                  while (s11 !== peg$FAILED) {
                    s10.push(s11);
                    s11 = peg$parse_();
                  }
                } else {
                  s10 = peg$FAILED;
                }
                if (s10 !== peg$FAILED) {
                  s11 = peg$parseBlockOrStatement();
                  if (s11 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f21(s5, s9, s11);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseFor() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;
    var key = peg$currPos * 75 + 20;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c18) {
      s1 = peg$c18;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e19);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c3;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e4);
        }
      }
      if (s3 !== peg$FAILED) {
        if (input.substr(peg$currPos, 3) === peg$c9) {
          s4 = peg$c9;
          peg$currPos += 3;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e10);
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parse_();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_();
          }
          s6 = peg$parseNAME();
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$parse_();
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              s8 = peg$parse_();
            }
            s8 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 61) {
              s9 = peg$c11;
              peg$currPos++;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e12);
              }
            }
            if (s9 !== peg$FAILED) {
              s10 = [];
              s11 = peg$parse_();
              while (s11 !== peg$FAILED) {
                s10.push(s11);
                s11 = peg$parse_();
              }
              s11 = peg$parseExpr();
              if (s11 !== peg$FAILED) {
                peg$savedPos = s8;
                s8 = peg$f22(s6, s11);
              } else {
                peg$currPos = s8;
                s8 = peg$FAILED;
              }
            } else {
              peg$currPos = s8;
              s8 = peg$FAILED;
            }
            if (s8 === peg$FAILED) {
              s8 = null;
            }
            if (input.charCodeAt(peg$currPos) === 44) {
              s9 = peg$c17;
              peg$currPos++;
            } else {
              s9 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e18);
              }
            }
            if (s9 === peg$FAILED) {
              s9 = null;
            }
            s10 = [];
            s11 = peg$parse_();
            while (s11 !== peg$FAILED) {
              s10.push(s11);
              s11 = peg$parse_();
            }
            s11 = peg$parseExpr();
            if (s11 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s12 = peg$c4;
                peg$currPos++;
              } else {
                s12 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e5);
                }
              }
              if (s12 !== peg$FAILED) {
                s13 = [];
                s14 = peg$parse_();
                while (s14 !== peg$FAILED) {
                  s13.push(s14);
                  s14 = peg$parse_();
                }
                s14 = peg$parseBlockOrStatement();
                if (s14 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f23(s6, s8, s11, s14);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 3) === peg$c18) {
        s1 = peg$c18;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e19);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }
        } else {
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c9) {
            s3 = peg$c9;
            peg$currPos += 3;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e10);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parse_();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parse_();
            }
            s5 = peg$parseNAME();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$parse_();
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$parse_();
              }
              s7 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 61) {
                s8 = peg$c11;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e12);
                }
              }
              if (s8 !== peg$FAILED) {
                s9 = [];
                s10 = peg$parse_();
                while (s10 !== peg$FAILED) {
                  s9.push(s10);
                  s10 = peg$parse_();
                }
                s10 = peg$parseExpr();
                if (s10 !== peg$FAILED) {
                  peg$savedPos = s7;
                  s7 = peg$f24(s5, s10);
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              if (input.charCodeAt(peg$currPos) === 44) {
                s8 = peg$c17;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e18);
                }
              }
              if (s8 === peg$FAILED) {
                s8 = null;
              }
              s9 = [];
              s10 = peg$parse_();
              while (s10 !== peg$FAILED) {
                s9.push(s10);
                s10 = peg$parse_();
              }
              s10 = peg$parseExpr();
              if (s10 !== peg$FAILED) {
                s11 = [];
                s12 = peg$parse_();
                if (s12 !== peg$FAILED) {
                  while (s12 !== peg$FAILED) {
                    s11.push(s12);
                    s12 = peg$parse_();
                  }
                } else {
                  s11 = peg$FAILED;
                }
                if (s11 !== peg$FAILED) {
                  s12 = peg$parseBlockOrStatement();
                  if (s12 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f25(s5, s7, s10, s12);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 3) === peg$c18) {
          s1 = peg$c18;
          peg$currPos += 3;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e19);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c3;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e4);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseExpr();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c4;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e5);
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parse_();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parse_();
                }
                s7 = peg$parseBlockOrStatement();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f26(s4, s7);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 3) === peg$c18) {
            s1 = peg$c18;
            peg$currPos += 3;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e19);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parse_();
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parse_();
              }
            } else {
              s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parseExpr();
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    s5 = peg$parse_();
                  }
                } else {
                  s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseBlockOrStatement();
                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f27(s3, s5);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseReturn() {
    var s0, s1, s2, s3, s4;
    var key = peg$currPos * 75 + 21;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c19) {
      s1 = peg$c19;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e20);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        s4 = peg$parseExpr();
        if (s4 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f28(s4);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseLoop() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    var key = peg$currPos * 75 + 22;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c20) {
      s1 = peg$c20;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e22);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 123) {
        s3 = peg$c6;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e7);
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parse_();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_();
        }
        s5 = peg$parseStatements();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 125) {
            s7 = peg$c7;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e8);
            }
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f29(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseBreak() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 23;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c21) {
      s1 = peg$c21;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e23);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f30();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseContinue() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 24;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 8) === peg$c22) {
      s1 = peg$c22;
      peg$currPos += 8;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e24);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f31();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseAssign() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 25;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseExpr();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (input.substr(peg$currPos, 2) === peg$c23) {
        s3 = peg$c23;
        peg$currPos += 2;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e25);
        }
      }
      if (s3 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c24) {
          s3 = peg$c24;
          peg$currPos += 2;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e26);
          }
        }
        if (s3 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c11;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e12);
            }
          }
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parse_();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_();
        }
        s5 = peg$parseExpr();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f32(s1, s3, s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseInfix() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    var key = peg$currPos * 75 + 26;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseExpr2();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parseInfixSp();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parseInfixSp();
      }
      s5 = peg$parseOp();
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parseInfixSp();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parseInfixSp();
        }
        s7 = peg$parseExpr2();
        if (s7 !== peg$FAILED) {
          peg$savedPos = s3;
          s3 = peg$f33(s1, s5, s7);
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parseInfixSp();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseInfixSp();
          }
          s5 = peg$parseOp();
          if (s5 !== peg$FAILED) {
            s6 = [];
            s7 = peg$parseInfixSp();
            while (s7 !== peg$FAILED) {
              s6.push(s7);
              s7 = peg$parseInfixSp();
            }
            s7 = peg$parseExpr2();
            if (s7 !== peg$FAILED) {
              peg$savedPos = s3;
              s3 = peg$f33(s1, s5, s7);
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f34(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseInfixSp() {
    var s0, s1, s2;
    var key = peg$currPos * 75 + 27;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c25;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e27);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseLF();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parse__();
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseOp() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 28;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c26) {
      s1 = peg$c26;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e28);
      }
    }
    if (s1 === peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c27) {
        s1 = peg$c27;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e29);
        }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c28) {
          s1 = peg$c28;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e30);
          }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c29) {
            s1 = peg$c29;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e31);
            }
          }
          if (s1 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c30) {
              s1 = peg$c30;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e32);
              }
            }
            if (s1 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c31) {
                s1 = peg$c31;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e33);
                }
              }
              if (s1 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 60) {
                  s1 = peg$c32;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e34);
                  }
                }
                if (s1 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 62) {
                    s1 = peg$c33;
                    peg$currPos++;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e35);
                    }
                  }
                  if (s1 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 43) {
                      s1 = peg$c34;
                      peg$currPos++;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$e36);
                      }
                    }
                    if (s1 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 45) {
                        s1 = peg$c35;
                        peg$currPos++;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$e37);
                        }
                      }
                      if (s1 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 42) {
                          s1 = peg$c36;
                          peg$currPos++;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$e38);
                          }
                        }
                        if (s1 === peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 47) {
                            s1 = peg$c37;
                            peg$currPos++;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$e39);
                            }
                          }
                          if (s1 === peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 37) {
                              s1 = peg$c38;
                              peg$currPos++;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$e40);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r1.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e41);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f35();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNot() {
    var s0, s1, s2;
    var key = peg$currPos * 75 + 29;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 33) {
      s1 = peg$c39;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e42);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseExpr();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f36(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseChain() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 30;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseExpr3();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseCallChain();
      if (s3 === peg$FAILED) {
        s3 = peg$parseIndexChain();
        if (s3 === peg$FAILED) {
          s3 = peg$parsePropChain();
        }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parseCallChain();
          if (s3 === peg$FAILED) {
            s3 = peg$parseIndexChain();
            if (s3 === peg$FAILED) {
              s3 = peg$parsePropChain();
            }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f37(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseCallChain() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 31;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 40) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e4);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = peg$parseCallArgs();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s4 = [];
      s5 = peg$parse_();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 41) {
        s5 = peg$c4;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e5);
        }
      }
      if (s5 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f38(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseCallArgs() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 32;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseExpr();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parseSEP();
      if (s4 !== peg$FAILED) {
        s5 = peg$parseExpr();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s3;
          s3 = peg$f39(s1, s5);
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parseSEP();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseExpr();
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s3 = peg$f39(s1, s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f40(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseIndexChain() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 33;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c40;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e43);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = peg$parseExpr();
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parse_();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_();
        }
        if (input.charCodeAt(peg$currPos) === 93) {
          s5 = peg$c15;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e16);
          }
        }
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f41(s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parsePropChain() {
    var s0, s1, s2;
    var key = peg$currPos * 75 + 34;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 46) {
      s1 = peg$c41;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e44);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNAME();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f42(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseIf() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    var key = peg$currPos * 75 + 35;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c42) {
      s1 = peg$c42;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e45);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_();
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseExpr();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parse_();
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseBlockOrStatement();
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              s7 = [];
              s8 = peg$parse_();
              if (s8 !== peg$FAILED) {
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$parse_();
                }
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parseElseifBlocks();
                if (s8 !== peg$FAILED) {
                  s6 = s8;
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 === peg$FAILED) {
                s6 = null;
              }
              s7 = peg$currPos;
              s8 = [];
              s9 = peg$parse_();
              if (s9 !== peg$FAILED) {
                while (s9 !== peg$FAILED) {
                  s8.push(s9);
                  s9 = peg$parse_();
                }
              } else {
                s8 = peg$FAILED;
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parseElseBlock();
                if (s9 !== peg$FAILED) {
                  s7 = s9;
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              if (s7 === peg$FAILED) {
                s7 = null;
              }
              peg$savedPos = s0;
              s0 = peg$f43(s3, s5, s6, s7);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseElseifBlocks() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 36;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseElseifBlock();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = [];
      s5 = peg$parse_();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse_();
      }
      s5 = peg$parseElseifBlock();
      if (s5 !== peg$FAILED) {
        s3 = s5;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parse_();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_();
        }
        s5 = peg$parseElseifBlock();
        if (s5 !== peg$FAILED) {
          s3 = s5;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f44(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseElseifBlock() {
    var s0, s1, s2, s3, s4, s5, s6;
    var key = peg$currPos * 75 + 37;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c43) {
      s1 = peg$c43;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e46);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        s4 = peg$parseExpr();
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parse_();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_();
          }
          s6 = peg$parseBlockOrStatement();
          if (s6 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f45(s4, s6);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseElseBlock() {
    var s0, s1, s2, s3, s4;
    var key = peg$currPos * 75 + 38;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c44) {
      s1 = peg$c44;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e47);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        s4 = peg$parseBlockOrStatement();
        if (s4 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f46(s4);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseMatch() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16;
    var key = peg$currPos * 75 + 39;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c45) {
      s1 = peg$c45;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e48);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parse_();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parse_();
        }
        s4 = peg$parseExpr();
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parse_();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 123) {
            s6 = peg$c6;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e7);
            }
          }
          if (s6 !== peg$FAILED) {
            s7 = [];
            s8 = peg$parse_();
            while (s8 !== peg$FAILED) {
              s7.push(s8);
              s8 = peg$parse_();
            }
            s8 = [];
            s9 = peg$currPos;
            s10 = peg$parseExpr();
            if (s10 !== peg$FAILED) {
              s11 = [];
              s12 = peg$parse_();
              while (s12 !== peg$FAILED) {
                s11.push(s12);
                s12 = peg$parse_();
              }
              if (input.substr(peg$currPos, 2) === peg$c46) {
                s12 = peg$c46;
                peg$currPos += 2;
              } else {
                s12 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e49);
                }
              }
              if (s12 !== peg$FAILED) {
                s13 = [];
                s14 = peg$parse_();
                while (s14 !== peg$FAILED) {
                  s13.push(s14);
                  s14 = peg$parse_();
                }
                s14 = peg$parseBlockOrStatement();
                if (s14 !== peg$FAILED) {
                  s15 = [];
                  s16 = peg$parse_();
                  while (s16 !== peg$FAILED) {
                    s15.push(s16);
                    s16 = peg$parse_();
                  }
                  peg$savedPos = s9;
                  s9 = peg$f47(s4, s10, s14);
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
              } else {
                peg$currPos = s9;
                s9 = peg$FAILED;
              }
            } else {
              peg$currPos = s9;
              s9 = peg$FAILED;
            }
            if (s9 !== peg$FAILED) {
              while (s9 !== peg$FAILED) {
                s8.push(s9);
                s9 = peg$currPos;
                s10 = peg$parseExpr();
                if (s10 !== peg$FAILED) {
                  s11 = [];
                  s12 = peg$parse_();
                  while (s12 !== peg$FAILED) {
                    s11.push(s12);
                    s12 = peg$parse_();
                  }
                  if (input.substr(peg$currPos, 2) === peg$c46) {
                    s12 = peg$c46;
                    peg$currPos += 2;
                  } else {
                    s12 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e49);
                    }
                  }
                  if (s12 !== peg$FAILED) {
                    s13 = [];
                    s14 = peg$parse_();
                    while (s14 !== peg$FAILED) {
                      s13.push(s14);
                      s14 = peg$parse_();
                    }
                    s14 = peg$parseBlockOrStatement();
                    if (s14 !== peg$FAILED) {
                      s15 = [];
                      s16 = peg$parse_();
                      while (s16 !== peg$FAILED) {
                        s15.push(s16);
                        s16 = peg$parse_();
                      }
                      peg$savedPos = s9;
                      s9 = peg$f47(s4, s10, s14);
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
              }
            } else {
              s8 = peg$FAILED;
            }
            if (s8 !== peg$FAILED) {
              s9 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 42) {
                s10 = peg$c36;
                peg$currPos++;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e38);
                }
              }
              if (s10 !== peg$FAILED) {
                s11 = [];
                s12 = peg$parse_();
                while (s12 !== peg$FAILED) {
                  s11.push(s12);
                  s12 = peg$parse_();
                }
                if (input.substr(peg$currPos, 2) === peg$c46) {
                  s12 = peg$c46;
                  peg$currPos += 2;
                } else {
                  s12 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e49);
                  }
                }
                if (s12 !== peg$FAILED) {
                  s13 = [];
                  s14 = peg$parse_();
                  while (s14 !== peg$FAILED) {
                    s13.push(s14);
                    s14 = peg$parse_();
                  }
                  s14 = peg$parseBlockOrStatement();
                  if (s14 !== peg$FAILED) {
                    s15 = [];
                    s16 = peg$parse_();
                    while (s16 !== peg$FAILED) {
                      s15.push(s16);
                      s16 = peg$parse_();
                    }
                    s9 = s14;
                  } else {
                    peg$currPos = s9;
                    s9 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
              } else {
                peg$currPos = s9;
                s9 = peg$FAILED;
              }
              if (s9 === peg$FAILED) {
                s9 = null;
              }
              s10 = [];
              s11 = peg$parse_();
              while (s11 !== peg$FAILED) {
                s10.push(s11);
                s11 = peg$parse_();
              }
              if (input.charCodeAt(peg$currPos) === 125) {
                s11 = peg$c7;
                peg$currPos++;
              } else {
                s11 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e8);
                }
              }
              if (s11 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f48(s4, s8, s9);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseEval() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    var key = peg$currPos * 75 + 40;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c47) {
      s1 = peg$c47;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e50);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 123) {
        s3 = peg$c6;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e7);
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parse_();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_();
        }
        s5 = peg$parseStatements();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 125) {
            s7 = peg$c7;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e8);
            }
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f49(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseIdentifier() {
    var s0, s1;
    var key = peg$currPos * 75 + 41;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseNAME_WITH_NAMESPACE();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f50(s1);
    }
    s0 = s1;
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseTmpl() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 42;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 96) {
      s1 = peg$c48;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e51);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 96) {
        s5 = peg$c48;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e51);
        }
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseTmplEmbed();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s3;
          s3 = peg$f51(s5);
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 96) {
          s5 = peg$c48;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e51);
          }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseTmplEmbed();
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s3 = peg$f51(s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (input.charCodeAt(peg$currPos) === 96) {
        s3 = peg$c48;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e51);
        }
      }
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f52(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseTmplEmbed() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 43;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseTmplEsc();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c6;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e7);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse__();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse__();
        }
        s3 = peg$parseExpr();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parse__();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse__();
          }
          if (input.charCodeAt(peg$currPos) === 125) {
            s5 = peg$c7;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e8);
            }
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f53(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        if (input.length > peg$currPos) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e0);
          }
        }
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseTmplEsc() {
    var s0, s1;
    var key = peg$currPos * 75 + 44;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c49) {
      s1 = peg$c49;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e52);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f54();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c50) {
        s1 = peg$c50;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e53);
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f55();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c51) {
          s1 = peg$c51;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e54);
          }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f56();
        }
        s0 = s1;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseStr() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 45;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c52;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e55);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$currPos;
      peg$silentFails++;
      if (input.charCodeAt(peg$currPos) === 34) {
        s5 = peg$c52;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e55);
        }
      }
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = void 0;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseStrDoubleQuoteEsc();
        if (s5 === peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e0);
            }
          }
        }
        if (s5 !== peg$FAILED) {
          peg$savedPos = s3;
          s3 = peg$f57(s5);
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 34) {
          s5 = peg$c52;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e55);
          }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseStrDoubleQuoteEsc();
          if (s5 === peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e0);
              }
            }
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s3 = peg$f57(s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      if (input.charCodeAt(peg$currPos) === 34) {
        s3 = peg$c52;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e55);
        }
      }
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f58(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c53;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e56);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 39) {
          s5 = peg$c53;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e56);
          }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseStrSingleQuoteEsc();
          if (s5 === peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e0);
              }
            }
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s3;
            s3 = peg$f59(s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.charCodeAt(peg$currPos) === 39) {
            s5 = peg$c53;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e56);
            }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parseStrSingleQuoteEsc();
            if (s5 === peg$FAILED) {
              if (input.length > peg$currPos) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e0);
                }
              }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s3 = peg$f59(s5);
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c53;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e56);
          }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f60(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseStrDoubleQuoteEsc() {
    var s0, s1;
    var key = peg$currPos * 75 + 46;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c54) {
      s1 = peg$c54;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e57);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f61();
    }
    s0 = s1;
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseStrSingleQuoteEsc() {
    var s0, s1;
    var key = peg$currPos * 75 + 47;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c55) {
      s1 = peg$c55;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e58);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f62();
    }
    s0 = s1;
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNum() {
    var s0;
    var key = peg$currPos * 75 + 48;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseFloat();
    if (s0 === peg$FAILED) {
      s0 = peg$parseInt();
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseFloat() {
    var s0, s1, s2, s3, s4, s5, s6;
    var key = peg$currPos * 75 + 49;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (peg$r2.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e59);
      }
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    s2 = [];
    if (peg$r3.test(input.charAt(peg$currPos))) {
      s3 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s3 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e60);
      }
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$r3.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e60);
          }
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s3 = [];
      if (peg$r4.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e61);
        }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$r4.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e61);
            }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s4 = peg$c41;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e44);
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$r4.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e61);
            }
          }
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              if (peg$r4.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e61);
                }
              }
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f63();
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (peg$r2.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e59);
        }
      }
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (peg$r4.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e61);
        }
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s3 = peg$c41;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e44);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          if (peg$r4.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e61);
            }
          }
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$r4.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e61);
                }
              }
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f64();
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseInt() {
    var s0, s1, s2, s3, s4;
    var key = peg$currPos * 75 + 50;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (peg$r2.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e59);
      }
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (peg$r3.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e60);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = [];
      if (peg$r4.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e61);
        }
      }
      if (s4 !== peg$FAILED) {
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$r4.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e61);
            }
          }
        }
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f65();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (peg$r2.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e59);
        }
      }
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (peg$r4.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e61);
        }
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f66();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseBool() {
    var s0;
    var key = peg$currPos * 75 + 51;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseTrue();
    if (s0 === peg$FAILED) {
      s0 = peg$parseFalse();
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseTrue() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 52;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c56) {
      s1 = peg$c56;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e62);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f67();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseFalse() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 53;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c57) {
      s1 = peg$c57;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e63);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f68();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNull() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 54;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c58) {
      s1 = peg$c58;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e64);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$silentFails++;
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e21);
        }
      }
      peg$silentFails--;
      if (s3 === peg$FAILED) {
        s2 = void 0;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f69();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseObj() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    var key = peg$currPos * 75 + 55;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e7);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = [];
      s4 = peg$currPos;
      s5 = peg$parseNAME();
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parse_();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parse_();
        }
        if (input.charCodeAt(peg$currPos) === 58) {
          s7 = peg$c10;
          peg$currPos++;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e11);
          }
        }
        if (s7 !== peg$FAILED) {
          s8 = [];
          s9 = peg$parse_();
          if (s9 !== peg$FAILED) {
            while (s9 !== peg$FAILED) {
              s8.push(s9);
              s9 = peg$parse_();
            }
          } else {
            s8 = peg$FAILED;
          }
          if (s8 !== peg$FAILED) {
            s9 = peg$parseExpr();
            if (s9 !== peg$FAILED) {
              s10 = [];
              s11 = peg$parse_();
              while (s11 !== peg$FAILED) {
                s10.push(s11);
                s11 = peg$parse_();
              }
              if (input.charCodeAt(peg$currPos) === 44) {
                s11 = peg$c17;
                peg$currPos++;
              } else {
                s11 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e18);
                }
              }
              if (s11 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 59) {
                  s11 = peg$c59;
                  peg$currPos++;
                } else {
                  s11 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e65);
                  }
                }
              }
              if (s11 === peg$FAILED) {
                s11 = null;
              }
              s12 = [];
              s13 = peg$parse_();
              while (s13 !== peg$FAILED) {
                s12.push(s13);
                s13 = peg$parse_();
              }
              peg$savedPos = s4;
              s4 = peg$f70(s5, s9);
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$currPos;
        s5 = peg$parseNAME();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 58) {
            s7 = peg$c10;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e11);
            }
          }
          if (s7 !== peg$FAILED) {
            s8 = [];
            s9 = peg$parse_();
            if (s9 !== peg$FAILED) {
              while (s9 !== peg$FAILED) {
                s8.push(s9);
                s9 = peg$parse_();
              }
            } else {
              s8 = peg$FAILED;
            }
            if (s8 !== peg$FAILED) {
              s9 = peg$parseExpr();
              if (s9 !== peg$FAILED) {
                s10 = [];
                s11 = peg$parse_();
                while (s11 !== peg$FAILED) {
                  s10.push(s11);
                  s11 = peg$parse_();
                }
                if (input.charCodeAt(peg$currPos) === 44) {
                  s11 = peg$c17;
                  peg$currPos++;
                } else {
                  s11 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e18);
                  }
                }
                if (s11 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 59) {
                    s11 = peg$c59;
                    peg$currPos++;
                  } else {
                    s11 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e65);
                    }
                  }
                }
                if (s11 === peg$FAILED) {
                  s11 = null;
                }
                s12 = [];
                s13 = peg$parse_();
                while (s13 !== peg$FAILED) {
                  s12.push(s13);
                  s13 = peg$parse_();
                }
                peg$savedPos = s4;
                s4 = peg$f70(s5, s9);
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      }
      if (input.charCodeAt(peg$currPos) === 125) {
        s4 = peg$c7;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e8);
        }
      }
      if (s4 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f71(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseArr() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    var key = peg$currPos * 75 + 56;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c40;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e43);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = [];
      s4 = peg$currPos;
      s5 = peg$parseExpr();
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parse_();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parse_();
        }
        if (input.charCodeAt(peg$currPos) === 44) {
          s7 = peg$c17;
          peg$currPos++;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e18);
          }
        }
        if (s7 === peg$FAILED) {
          s7 = null;
        }
        s8 = [];
        s9 = peg$parse_();
        while (s9 !== peg$FAILED) {
          s8.push(s9);
          s9 = peg$parse_();
        }
        peg$savedPos = s4;
        s4 = peg$f72(s5);
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$currPos;
        s5 = peg$parseExpr();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 44) {
            s7 = peg$c17;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e18);
            }
          }
          if (s7 === peg$FAILED) {
            s7 = null;
          }
          s8 = [];
          s9 = peg$parse_();
          while (s9 !== peg$FAILED) {
            s8.push(s9);
            s9 = peg$parse_();
          }
          peg$savedPos = s4;
          s4 = peg$f72(s5);
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      }
      s4 = [];
      s5 = peg$parse_();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 93) {
        s5 = peg$c15;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e16);
        }
      }
      if (s5 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f73(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseArg() {
    var s0, s1, s2, s3, s4, s5, s6;
    var key = peg$currPos * 75 + 57;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseNAME();
    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = [];
      s4 = peg$parse_();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 58) {
        s4 = peg$c10;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e11);
        }
      }
      if (s4 !== peg$FAILED) {
        s5 = [];
        s6 = peg$parse_();
        while (s6 !== peg$FAILED) {
          s5.push(s6);
          s6 = peg$parse_();
        }
        s6 = peg$parseType();
        if (s6 !== peg$FAILED) {
          s2 = s6;
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      peg$savedPos = s0;
      s0 = peg$f74(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseArgs() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 58;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseArg();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parseSEP();
      if (s4 !== peg$FAILED) {
        s5 = peg$parseArg();
        if (s5 !== peg$FAILED) {
          s3 = s5;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parseSEP();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseArg();
          if (s5 !== peg$FAILED) {
            s3 = s5;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f75(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseFnDef() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16;
    var key = peg$currPos * 75 + 59;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c60;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e66);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse__();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse__();
      }
      s3 = peg$parseNAME();
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parse__();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse__();
        }
        if (input.charCodeAt(peg$currPos) === 40) {
          s5 = peg$c3;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e4);
          }
        }
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          s7 = peg$parseArgs();
          if (s7 === peg$FAILED) {
            s7 = null;
          }
          s8 = [];
          s9 = peg$parse_();
          while (s9 !== peg$FAILED) {
            s8.push(s9);
            s9 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 41) {
            s9 = peg$c4;
            peg$currPos++;
          } else {
            s9 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e5);
            }
          }
          if (s9 !== peg$FAILED) {
            s10 = peg$currPos;
            s11 = [];
            s12 = peg$parse_();
            while (s12 !== peg$FAILED) {
              s11.push(s12);
              s12 = peg$parse_();
            }
            if (input.charCodeAt(peg$currPos) === 58) {
              s12 = peg$c10;
              peg$currPos++;
            } else {
              s12 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e11);
              }
            }
            if (s12 !== peg$FAILED) {
              s13 = [];
              s14 = peg$parse_();
              while (s14 !== peg$FAILED) {
                s13.push(s14);
                s14 = peg$parse_();
              }
              s14 = peg$parseType();
              if (s14 !== peg$FAILED) {
                s10 = s14;
              } else {
                peg$currPos = s10;
                s10 = peg$FAILED;
              }
            } else {
              peg$currPos = s10;
              s10 = peg$FAILED;
            }
            if (s10 === peg$FAILED) {
              s10 = null;
            }
            s11 = [];
            s12 = peg$parse_();
            while (s12 !== peg$FAILED) {
              s11.push(s12);
              s12 = peg$parse_();
            }
            if (input.charCodeAt(peg$currPos) === 123) {
              s12 = peg$c6;
              peg$currPos++;
            } else {
              s12 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$e7);
              }
            }
            if (s12 !== peg$FAILED) {
              s13 = [];
              s14 = peg$parse_();
              while (s14 !== peg$FAILED) {
                s13.push(s14);
                s14 = peg$parse_();
              }
              s14 = peg$parseStatements();
              if (s14 === peg$FAILED) {
                s14 = null;
              }
              s15 = [];
              s16 = peg$parse_();
              while (s16 !== peg$FAILED) {
                s15.push(s16);
                s16 = peg$parse_();
              }
              if (input.charCodeAt(peg$currPos) === 125) {
                s16 = peg$c7;
                peg$currPos++;
              } else {
                s16 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e8);
                }
              }
              if (s16 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f76(s2, s3, s4, s7, s10, s14);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseFn() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
    var key = peg$currPos * 75 + 60;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c61) {
      s1 = peg$c61;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e67);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = peg$parseArgs();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s4 = [];
      s5 = peg$parse_();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 41) {
        s5 = peg$c4;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e5);
        }
      }
      if (s5 !== peg$FAILED) {
        s6 = peg$currPos;
        s7 = [];
        s8 = peg$parse_();
        while (s8 !== peg$FAILED) {
          s7.push(s8);
          s8 = peg$parse_();
        }
        if (input.charCodeAt(peg$currPos) === 58) {
          s8 = peg$c10;
          peg$currPos++;
        } else {
          s8 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e11);
          }
        }
        if (s8 !== peg$FAILED) {
          s9 = [];
          s10 = peg$parse_();
          while (s10 !== peg$FAILED) {
            s9.push(s10);
            s10 = peg$parse_();
          }
          s10 = peg$parseType();
          if (s10 !== peg$FAILED) {
            s6 = s10;
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
        if (s6 === peg$FAILED) {
          s6 = null;
        }
        s7 = [];
        s8 = peg$parse_();
        while (s8 !== peg$FAILED) {
          s7.push(s8);
          s8 = peg$parse_();
        }
        if (input.charCodeAt(peg$currPos) === 123) {
          s8 = peg$c6;
          peg$currPos++;
        } else {
          s8 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e7);
          }
        }
        if (s8 !== peg$FAILED) {
          s9 = [];
          s10 = peg$parse_();
          while (s10 !== peg$FAILED) {
            s9.push(s10);
            s10 = peg$parse_();
          }
          s10 = peg$parseStatements();
          if (s10 === peg$FAILED) {
            s10 = null;
          }
          s11 = [];
          s12 = peg$parse_();
          while (s12 !== peg$FAILED) {
            s11.push(s12);
            s12 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 125) {
            s12 = peg$c7;
            peg$currPos++;
          } else {
            s12 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e8);
            }
          }
          if (s12 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f77(s3, s6, s10);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseStaticArr() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    var key = peg$currPos * 75 + 61;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 91) {
      s1 = peg$c40;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e43);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = [];
      s4 = peg$currPos;
      s5 = peg$parseStaticLiteral();
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parse_();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parse_();
        }
        if (input.charCodeAt(peg$currPos) === 44) {
          s7 = peg$c17;
          peg$currPos++;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e18);
          }
        }
        if (s7 === peg$FAILED) {
          s7 = null;
        }
        s8 = [];
        s9 = peg$parse_();
        while (s9 !== peg$FAILED) {
          s8.push(s9);
          s9 = peg$parse_();
        }
        peg$savedPos = s4;
        s4 = peg$f78(s5);
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$currPos;
        s5 = peg$parseStaticLiteral();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 44) {
            s7 = peg$c17;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e18);
            }
          }
          if (s7 === peg$FAILED) {
            s7 = null;
          }
          s8 = [];
          s9 = peg$parse_();
          while (s9 !== peg$FAILED) {
            s8.push(s9);
            s9 = peg$parse_();
          }
          peg$savedPos = s4;
          s4 = peg$f78(s5);
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      }
      s4 = [];
      s5 = peg$parse_();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 93) {
        s5 = peg$c15;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e16);
        }
      }
      if (s5 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f79(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseStaticObj() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    var key = peg$currPos * 75 + 62;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e7);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = [];
      s4 = peg$currPos;
      s5 = peg$parseNAME();
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parse_();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parse_();
        }
        if (input.charCodeAt(peg$currPos) === 58) {
          s7 = peg$c10;
          peg$currPos++;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e11);
          }
        }
        if (s7 !== peg$FAILED) {
          s8 = [];
          s9 = peg$parse_();
          if (s9 !== peg$FAILED) {
            while (s9 !== peg$FAILED) {
              s8.push(s9);
              s9 = peg$parse_();
            }
          } else {
            s8 = peg$FAILED;
          }
          if (s8 !== peg$FAILED) {
            s9 = peg$parseStaticLiteral();
            if (s9 !== peg$FAILED) {
              s10 = [];
              s11 = peg$parse_();
              while (s11 !== peg$FAILED) {
                s10.push(s11);
                s11 = peg$parse_();
              }
              if (input.charCodeAt(peg$currPos) === 44) {
                s11 = peg$c17;
                peg$currPos++;
              } else {
                s11 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$e18);
                }
              }
              if (s11 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 59) {
                  s11 = peg$c59;
                  peg$currPos++;
                } else {
                  s11 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e65);
                  }
                }
              }
              if (s11 === peg$FAILED) {
                s11 = null;
              }
              s12 = [];
              s13 = peg$parse_();
              while (s13 !== peg$FAILED) {
                s12.push(s13);
                s13 = peg$parse_();
              }
              peg$savedPos = s4;
              s4 = peg$f80(s5, s9);
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$currPos;
        s5 = peg$parseNAME();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse_();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse_();
          }
          if (input.charCodeAt(peg$currPos) === 58) {
            s7 = peg$c10;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e11);
            }
          }
          if (s7 !== peg$FAILED) {
            s8 = [];
            s9 = peg$parse_();
            if (s9 !== peg$FAILED) {
              while (s9 !== peg$FAILED) {
                s8.push(s9);
                s9 = peg$parse_();
              }
            } else {
              s8 = peg$FAILED;
            }
            if (s8 !== peg$FAILED) {
              s9 = peg$parseStaticLiteral();
              if (s9 !== peg$FAILED) {
                s10 = [];
                s11 = peg$parse_();
                while (s11 !== peg$FAILED) {
                  s10.push(s11);
                  s11 = peg$parse_();
                }
                if (input.charCodeAt(peg$currPos) === 44) {
                  s11 = peg$c17;
                  peg$currPos++;
                } else {
                  s11 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$e18);
                  }
                }
                if (s11 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 59) {
                    s11 = peg$c59;
                    peg$currPos++;
                  } else {
                    s11 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$e65);
                    }
                  }
                }
                if (s11 === peg$FAILED) {
                  s11 = null;
                }
                s12 = [];
                s13 = peg$parse_();
                while (s13 !== peg$FAILED) {
                  s12.push(s13);
                  s13 = peg$parse_();
                }
                peg$savedPos = s4;
                s4 = peg$f80(s5, s9);
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
      }
      if (input.charCodeAt(peg$currPos) === 125) {
        s4 = peg$c7;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e8);
        }
      }
      if (s4 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f81(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseType() {
    var s0;
    var key = peg$currPos * 75 + 63;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$parseFnType();
    if (s0 === peg$FAILED) {
      s0 = peg$parseNamedType();
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseFnType() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;
    var key = peg$currPos * 75 + 64;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c61) {
      s1 = peg$c61;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e67);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = peg$parseArgTypes();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s4 = [];
      s5 = peg$parse_();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 41) {
        s5 = peg$c4;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e5);
        }
      }
      if (s5 !== peg$FAILED) {
        s6 = [];
        s7 = peg$parse_();
        while (s7 !== peg$FAILED) {
          s6.push(s7);
          s7 = peg$parse_();
        }
        if (input.substr(peg$currPos, 2) === peg$c46) {
          s7 = peg$c46;
          peg$currPos += 2;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e49);
          }
        }
        if (s7 !== peg$FAILED) {
          s8 = [];
          s9 = peg$parse_();
          while (s9 !== peg$FAILED) {
            s8.push(s9);
            s9 = peg$parse_();
          }
          s9 = peg$parseType();
          if (s9 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f82(s3, s9);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseArgTypes() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 65;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseType();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parseSEP();
      if (s4 !== peg$FAILED) {
        s5 = peg$parseType();
        if (s5 !== peg$FAILED) {
          s3 = s5;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parseSEP();
        if (s4 !== peg$FAILED) {
          s5 = peg$parseType();
          if (s5 !== peg$FAILED) {
            s3 = s5;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f83(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNamedType() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    var key = peg$currPos * 75 + 66;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseNAME();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse__();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse__();
      }
      if (input.charCodeAt(peg$currPos) === 60) {
        s3 = peg$c32;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e34);
        }
      }
      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parse__();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse__();
        }
        s5 = peg$parseType();
        if (s5 !== peg$FAILED) {
          s6 = [];
          s7 = peg$parse__();
          while (s7 !== peg$FAILED) {
            s6.push(s7);
            s7 = peg$parse__();
          }
          if (input.charCodeAt(peg$currPos) === 62) {
            s7 = peg$c33;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$e35);
            }
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f84(s1, s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseNAME();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f85(s1);
      }
      s0 = s1;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNAME() {
    var s0, s1, s2, s3;
    var key = peg$currPos * 75 + 67;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (peg$r5.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e68);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$r6.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e69);
        }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$r6.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e69);
          }
        }
      }
      peg$savedPos = s0;
      s0 = peg$f86();
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseNAME_WITH_NAMESPACE() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 68;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = peg$parseNAME();
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s4 = peg$c10;
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e11);
        }
      }
      if (s4 !== peg$FAILED) {
        s5 = peg$parseNAME();
        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 58) {
          s4 = peg$c10;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$e11);
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseNAME();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f87();
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseSEP() {
    var s0, s1, s2, s3, s4;
    var key = peg$currPos * 75 + 69;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parse_();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parse_();
    }
    if (input.charCodeAt(peg$currPos) === 44) {
      s2 = peg$c17;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e18);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = [];
      s4 = peg$parse_();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parse_();
      }
      s1 = [s1, s2, s3];
      s0 = s1;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = [];
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$parse_();
        }
      } else {
        s0 = peg$FAILED;
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseBlockOrStatement() {
    var s0, s1, s2, s3, s4, s5;
    var key = peg$currPos * 75 + 70;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e7);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parse_();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parse_();
      }
      s3 = peg$parseStatements();
      if (s3 === peg$FAILED) {
        s3 = null;
      }
      s4 = [];
      s5 = peg$parse_();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parse_();
      }
      if (input.charCodeAt(peg$currPos) === 125) {
        s5 = peg$c7;
        peg$currPos++;
      } else {
        s5 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e8);
        }
      }
      if (s5 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f88(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseStatement();
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseLF() {
    var s0;
    var key = peg$currPos * 75 + 71;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    if (input.substr(peg$currPos, 2) === peg$c62) {
      s0 = peg$c62;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e70);
      }
    }
    if (s0 === peg$FAILED) {
      if (peg$r7.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$e71);
        }
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parseEOL() {
    var s0, s1;
    var key = peg$currPos * 75 + 72;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    s0 = peg$currPos;
    peg$silentFails++;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e0);
      }
    }
    peg$silentFails--;
    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseLF();
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parse_() {
    var s0;
    var key = peg$currPos * 75 + 73;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    if (peg$r8.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e72);
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function peg$parse__() {
    var s0;
    var key = peg$currPos * 75 + 74;
    var cached = peg$resultsCache[key];
    if (cached) {
      peg$currPos = cached.nextPos;
      return cached.result;
    }
    if (peg$r9.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$e73);
      }
    }
    peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };
    return s0;
  }
  function group(arr, predicate) {
    const dest = [];
    for (let i = 0; i < arr.length; i++) {
      if (i != 0 && predicate(arr[i - 1], arr[i])) {
        dest[dest.length - 1].push(arr[i]);
      } else {
        dest.push([arr[i]]);
      }
    }
    return dest;
  }
  function ungroup(groupes) {
    return groupes.reduce((acc, val) => acc.concat(val), []);
  }
  function concatTemplate(arr) {
    let groupes = group(arr, (prev, current) => typeof current == typeof prev);
    groupes = groupes.map((g) => {
      if (typeof g[0] == "string") {
        return [g.join("")];
      }
      return g;
    });
    return ungroup(groupes);
  }
  function createNode(type, params, children) {
    const node = { type };
    params.children = children;
    for (const key of Object.keys(params)) {
      if (params[key] !== void 0) {
        node[key] = params[key];
      }
    }
    const loc = location();
    node.loc = { start: loc.start.offset, end: loc.end.offset - 1 };
    return node;
  }
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/node.js
var expressionTypes = [
  "infix",
  "if",
  "fn",
  "match",
  "block",
  "tmpl",
  "str",
  "num",
  "bool",
  "null",
  "obj",
  "arr",
  "identifier",
  "call",
  "index",
  "prop"
];
function isExpression(x) {
  return expressionTypes.includes(x.type);
}
function hasChainProp(x) {
  return x.chain != null;
}
function CALL(target, args, loc) {
  return { type: "call", target, args, loc };
}
function INDEX(target, index, loc) {
  return { type: "index", target, index, loc };
}
function PROP(target, name, loc) {
  return { type: "prop", target, name, loc };
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/visit.js
function visitNode(node, fn) {
  const result = fn(node);
  switch (result.type) {
    case "def": {
      result.expr = visitNode(result.expr, fn);
      break;
    }
    case "return": {
      result.expr = visitNode(result.expr, fn);
      break;
    }
    case "each": {
      result.items = visitNode(result.items, fn);
      result.for = visitNode(result.for, fn);
      break;
    }
    case "for": {
      if (result.from != null) {
        result.from = visitNode(result.from, fn);
      }
      if (result.to != null) {
        result.to = visitNode(result.to, fn);
      }
      if (result.times != null) {
        result.times = visitNode(result.times, fn);
      }
      result.for = visitNode(result.for, fn);
      break;
    }
    case "loop": {
      for (let i = 0; i < result.statements.length; i++) {
        result.statements[i] = visitNode(result.statements[i], fn);
      }
      break;
    }
    case "addAssign":
    case "subAssign":
    case "assign": {
      result.expr = visitNode(result.expr, fn);
      result.dest = visitNode(result.dest, fn);
      break;
    }
    case "infix": {
      for (let i = 0; i < result.operands.length; i++) {
        result.operands[i] = visitNode(result.operands[i], fn);
      }
      break;
    }
    case "not": {
      result.expr = visitNode(result.expr, fn);
      break;
    }
    case "if": {
      result.cond = visitNode(result.cond, fn);
      result.then = visitNode(result.then, fn);
      for (const prop of result.elseif) {
        prop.cond = visitNode(prop.cond, fn);
        prop.then = visitNode(prop.then, fn);
      }
      if (result.else != null) {
        result.else = visitNode(result.else, fn);
      }
      break;
    }
    case "fn": {
      for (let i = 0; i < result.children.length; i++) {
        result.children[i] = visitNode(result.children[i], fn);
      }
      break;
    }
    case "match": {
      result.about = visitNode(result.about, fn);
      for (const prop of result.qs) {
        prop.q = visitNode(prop.q, fn);
        prop.a = visitNode(prop.a, fn);
      }
      if (result.default != null) {
        result.default = visitNode(result.default, fn);
      }
      break;
    }
    case "block": {
      for (let i = 0; i < result.statements.length; i++) {
        result.statements[i] = visitNode(result.statements[i], fn);
      }
      break;
    }
    case "tmpl": {
      for (let i = 0; i < result.tmpl.length; i++) {
        const item = result.tmpl[i];
        if (typeof item !== "string") {
          result.tmpl[i] = visitNode(item, fn);
        }
      }
      break;
    }
    case "obj": {
      for (const item of result.value) {
        result.value.set(item[0], visitNode(item[1], fn));
      }
      break;
    }
    case "arr": {
      for (let i = 0; i < result.value.length; i++) {
        result.value[i] = visitNode(result.value[i], fn);
      }
      break;
    }
    case "callChain": {
      for (let i = 0; i < result.args.length; i++) {
        result.args[i] = visitNode(result.args[i], fn);
      }
      break;
    }
    case "indexChain": {
      result.index = visitNode(result.index, fn);
      break;
    }
    case "call": {
      result.target = visitNode(result.target, fn);
      for (let i = 0; i < result.args.length; i++) {
        result.args[i] = visitNode(result.args[i], fn);
      }
      break;
    }
    case "index": {
      result.target = visitNode(result.target, fn);
      result.index = visitNode(result.index, fn);
      break;
    }
    case "prop": {
      result.target = visitNode(result.target, fn);
      break;
    }
  }
  if (hasChainProp(result)) {
    if (result.chain != null) {
      for (let i = 0; i < result.chain.length; i++) {
        result.chain[i] = visitNode(result.chain[i], fn);
      }
    }
  }
  return result;
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/plugins/validate-keyword.js
var reservedWord = [
  "null",
  "true",
  "false",
  "each",
  "for",
  "loop",
  "break",
  "continue",
  "match",
  "if",
  "elif",
  "else",
  "return",
  "eval",
  "var",
  "let",
  // future
  "fn",
  "namespace",
  "meta",
  "attr",
  "attribute",
  "static",
  "class",
  "struct",
  "module",
  "while",
  "import",
  "export"
  // 'const',
  // 'def',
  // 'func',
  // 'function',
  // 'ref',
  // 'out',
];
function throwReservedWordError(name) {
  throw new SyntaxError(`Reserved word "${name}" cannot be used as variable name.`);
}
function validateNode(node) {
  switch (node.type) {
    case "def":
    case "attr":
    case "ns":
    case "identifier":
    case "propChain": {
      if (reservedWord.includes(node.name)) {
        throwReservedWordError(node.name);
      }
      break;
    }
    case "meta": {
      if (node.name != null && reservedWord.includes(node.name)) {
        throwReservedWordError(node.name);
      }
      break;
    }
    case "fn": {
      for (const arg of node.args) {
        if (reservedWord.includes(arg.name)) {
          throwReservedWordError(arg.name);
        }
      }
      break;
    }
  }
  return node;
}
function validateKeyword(nodes) {
  for (const inner of nodes) {
    visitNode(inner, validateNode);
  }
  return nodes;
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/type.js
function T_SIMPLE(name) {
  return {
    type: "simple",
    name
  };
}
function T_GENERIC(name, inners) {
  return {
    type: "generic",
    name,
    inners
  };
}
function T_FN(args, result) {
  return {
    type: "fn",
    args,
    result
  };
}
function getTypeNameBySource(typeSource) {
  switch (typeSource.type) {
    case "namedTypeSource": {
      if (typeSource.inner) {
        const inner = getTypeNameBySource(typeSource.inner);
        return `${typeSource.name}<${inner}>`;
      } else {
        return typeSource.name;
      }
    }
    case "fnTypeSource": {
      const args = typeSource.args.map((arg) => getTypeNameBySource(arg)).join(", ");
      const result = getTypeNameBySource(typeSource.result);
      return `@(${args}) { ${result} }`;
    }
  }
}
function getTypeBySource(typeSource) {
  if (typeSource.type === "namedTypeSource") {
    switch (typeSource.name) {
      case "null":
      case "bool":
      case "num":
      case "str":
      case "any":
      case "void": {
        if (typeSource.inner == null) {
          return T_SIMPLE(typeSource.name);
        }
        break;
      }
      case "arr":
      case "obj": {
        let innerType;
        if (typeSource.inner != null) {
          innerType = getTypeBySource(typeSource.inner);
        } else {
          innerType = T_SIMPLE("any");
        }
        return T_GENERIC(typeSource.name, [innerType]);
      }
    }
    throw new SyntaxError(`Unknown type: '${getTypeNameBySource(typeSource)}'`);
  } else {
    const argTypes = typeSource.args.map((arg) => getTypeBySource(arg));
    return T_FN(argTypes, getTypeBySource(typeSource.result));
  }
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/plugins/validate-type.js
function validateNode2(node) {
  switch (node.type) {
    case "def": {
      if (node.varType != null) {
        getTypeBySource(node.varType);
      }
      break;
    }
    case "fn": {
      for (const arg of node.args) {
        if (arg.argType != null) {
          getTypeBySource(arg.argType);
        }
      }
      if (node.retType != null) {
        getTypeBySource(node.retType);
      }
      break;
    }
  }
  return node;
}
function validateType(nodes) {
  for (const node of nodes) {
    visitNode(node, validateNode2);
  }
  return nodes;
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/plugins/set-attribute.js
function setAttribute(nodes) {
  const result = [];
  const stockedAttrs = [];
  for (const node of nodes) {
    if (node.type === "attr") {
      stockedAttrs.push(node);
    } else if (node.type === "def") {
      if (node.attr == null) {
        node.attr = [];
      }
      node.attr.push(...stockedAttrs);
      stockedAttrs.splice(0, stockedAttrs.length);
      if (node.expr.type === "fn") {
        node.expr.children = setAttribute(node.expr.children);
      }
      result.push(node);
    } else {
      if (stockedAttrs.length > 0) {
        throw new SyntaxError("invalid attribute.");
      }
      switch (node.type) {
        case "fn": {
          node.children = setAttribute(node.children);
          break;
        }
        case "block": {
          node.statements = setAttribute(node.statements);
          break;
        }
      }
      result.push(node);
    }
  }
  if (stockedAttrs.length > 0) {
    throw new SyntaxError("invalid attribute.");
  }
  return result;
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/plugins/transform-chain.js
function transformNode(node) {
  if (isExpression(node) && hasChainProp(node) && node.chain != null) {
    const { chain, ...hostNode } = node;
    let parent = hostNode;
    for (const item of chain) {
      switch (item.type) {
        case "callChain": {
          parent = CALL(parent, item.args, item.loc);
          break;
        }
        case "indexChain": {
          parent = INDEX(parent, item.index, item.loc);
          break;
        }
        case "propChain": {
          parent = PROP(parent, item.name, item.loc);
          break;
        }
        default: {
          break;
        }
      }
    }
    return parent;
  }
  return node;
}
function transformChain(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    nodes[i] = visitNode(nodes[i], transformNode);
  }
  return nodes;
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/plugins/infix-to-fncall.js
function INFIX_TREE(left, right, info) {
  return { type: "infixTree", left, right, info };
}
function insertTree(currTree, nextTree, nextOpInfo) {
  if (currTree.type !== "infixTree") {
    return INFIX_TREE(currTree, nextTree, nextOpInfo);
  }
  if (nextOpInfo.priority <= currTree.info.priority) {
    return INFIX_TREE(currTree, nextTree, nextOpInfo);
  } else {
    const { left, right, info: currInfo } = currTree;
    return INFIX_TREE(left, insertTree(right, nextTree, nextOpInfo), currInfo);
  }
}
function treeToNode(tree) {
  if (tree.type !== "infixTree") {
    return tree;
  }
  return {
    type: "call",
    target: { type: "identifier", name: tree.info.func },
    args: [treeToNode(tree.left), treeToNode(tree.right)]
  };
}
var infoTable = {
  "*": { func: "Core:mul", priority: 7 },
  "/": { func: "Core:div", priority: 7 },
  "%": { func: "Core:mod", priority: 7 },
  "+": { func: "Core:add", priority: 6 },
  "-": { func: "Core:sub", priority: 6 },
  "==": { func: "Core:eq", priority: 4 },
  "!=": { func: "Core:neq", priority: 4 },
  "<": { func: "Core:lt", priority: 4 },
  ">": { func: "Core:gt", priority: 4 },
  "<=": { func: "Core:lteq", priority: 4 },
  ">=": { func: "Core:gteq", priority: 4 },
  "&&": { func: "Core:and", priority: 3 },
  "||": { func: "Core:or", priority: 2 }
};
function transform(node) {
  const infos = node.operators.map((op) => {
    const info = infoTable[op];
    if (info == null) {
      throw new SyntaxError(`No such operator: ${op}.`);
    }
    return info;
  });
  let currTree = INFIX_TREE(node.operands[0], node.operands[1], infos[0]);
  for (let i = 0; i < infos.length - 1; i++) {
    currTree = insertTree(currTree, node.operands[2 + i], infos[1 + i]);
  }
  return treeToNode(currTree);
}
function infixToFnCall(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    nodes[i] = visitNode(nodes[i], (node) => {
      if (node.type === "infix") {
        return transform(node);
      }
      return node;
    });
  }
  return nodes;
}

// node_modules/.pnpm/@syuilo+aiscript@0.12.4/node_modules/@syuilo/aiscript/built/parser/index.js
var _Parser = class {
  plugins;
  constructor() {
    this.plugins = {
      validate: [
        validateKeyword,
        validateType
      ],
      transform: [
        setAttribute,
        transformChain,
        infixToFnCall
      ]
    };
  }
  static parse(input) {
    if (_Parser.instance == null) {
      _Parser.instance = new _Parser();
    }
    return _Parser.instance.parse(input);
  }
  addPlugin(type, plugin) {
    switch (type) {
      case "validate":
        this.plugins.validate.push(plugin);
        break;
      case "transform":
        this.plugins.transform.push(plugin);
        break;
      default:
        throw new Error("unknown plugin type");
    }
  }
  parse(input) {
    let nodes;
    try {
      const code = peg$parse(input, { startRule: "Preprocess" });
      nodes = peg$parse(code, { startRule: "Main" });
    } catch (e) {
      if (e.location) {
        if (e.expected) {
          throw new SyntaxError(`Parsing error. (Line ${e.location.start.line}:${e.location.start.column})`);
        } else {
          throw new SyntaxError(`${e.message} (Line ${e.location.start.line}:${e.location.start.column})`);
        }
      }
      throw e;
    }
    for (const plugin of this.plugins.validate) {
      nodes = plugin(nodes);
    }
    for (const plugin of this.plugins.transform) {
      nodes = plugin(nodes);
    }
    return nodes;
  }
};
var Parser = _Parser;
__publicField(Parser, "instance");

// src/index.ts
var parse = (s) => {
  try {
    return { type: "ok", value: Parser.parse(s) };
  } catch (e) {
    const m = e instanceof Error ? e.message.match(/Line ([0-9]+):([0-9]+)/) : null;
    if (!m)
      return { type: "err", value: null, message: "" };
    return { type: "err", value: m.slice(1).map((x) => parseInt(x) - 1), message: e.message };
  }
};

// src/lsp-server.ts
var stream = await fs.createWriteStream("./log.txt", { flags: "w" });
var con = new console.Console(stream);
function main(output, input) {
  const waitingRequestList = /* @__PURE__ */ new Map();
  const server = new import_json_rpc_2.JSONRPCServer();
  const client = new import_json_rpc_2.JSONRPCClient((value) => {
    return new Promise((resolve) => {
      const body = JSON.stringify(value);
      if (value.id != null) {
        waitingRequestList.set(value.id, resolve);
      }
      const res = Buffer.concat(
        [
          Buffer.from(
            toStringMapAsHeader(/* @__PURE__ */ new Map([
              ["Content-Length", Buffer.byteLength(body, "utf-8").toString()],
              ["Content-Type", "application/vscode-jsonrpc; charset=utf-8"]
            ])) + "\r\n\r\n",
            "utf-8"
          ),
          Buffer.from(body, "utf-8")
        ]
      );
      con.log(res.toString("utf-8"));
      output.write(
        res.toString("utf-8")
      );
    });
  });
  server.addMethod("initialize", (body) => {
    return {
      capabilities: {
        textDocumentSync: 1,
        workspace: {}
      },
      serverInfo: {
        name: "aiscript-lsp",
        version: "0.1.0"
      }
    };
  });
  server.addMethod("initialized", async () => {
    return null;
  });
  server.addMethod("shutdown", () => {
    stream.close();
    return null;
  });
  server.addMethod("exit", () => {
    process.exit();
  });
  server.addMethod("textDocument/didOpen", (value) => {
    con.log(value);
  });
  server.addMethod("textDocument/didChange", async (value) => {
    const src = value.contentChanges[0].text.replace(/\r\n|\r/, "\n");
    const res = parse(src);
    client.requestAdvanced({
      jsonrpc: import_json_rpc_2.JSONRPC,
      method: "textDocument/publishDiagnostics",
      params: {
        uri: value.textDocument.uri,
        diagnostics: []
      }
    });
    if (res.type == "err") {
      con.log(res);
      client.requestAdvanced({
        jsonrpc: import_json_rpc_2.JSONRPC,
        method: "textDocument/publishDiagnostics",
        params: {
          uri: value.textDocument.uri,
          diagnostics: [
            {
              range: {
                start: { line: res.value?.[0] ?? 0, character: res.value?.[1] ?? 0 },
                end: { line: res.value?.[0] ?? 0, character: res.value?.[1] ?? 0 }
              },
              message: res.message
            }
          ]
        }
      });
    }
  });
  let buf = "";
  input.setEncoding("utf8");
  input.on("data", async (data) => {
    buf += data;
    const rawRequest = parseLspMessage(buf);
    con.log(rawRequest);
    if (!rawRequest.body)
      return;
    con.log(buf);
    buf = "";
    const req = JSON.parse(rawRequest.body);
    if ((0, import_json_rpc_2.isJSONRPCResponse)(req)) {
      con.log("is Response");
      if (req.id == null)
        return;
      const resolve = waitingRequestList.get(req.id);
      if (resolve) {
        resolve(req);
      }
      return;
    }
    const jsonrpcResponse = JSON.stringify(await server.receive(req));
    const res = Buffer.concat(
      [
        Buffer.from(
          toStringMapAsHeader(/* @__PURE__ */ new Map([
            ["Content-Length", Buffer.byteLength(jsonrpcResponse, "utf-8").toString()]
          ])) + "\r\n\r\n",
          "utf-8"
        ),
        Buffer.from(jsonrpcResponse, "utf-8")
      ]
    );
    if (req.id == null)
      return;
    con.log(res.toString("utf-8"));
    output.write(
      res.toString("utf-8")
    );
  });
}
main(process.stdout, process.stdin);
export {
  main
};

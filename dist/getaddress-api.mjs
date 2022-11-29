/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Result = /** @class */ (function () {
    function Result(isSuccess) {
        this.isSuccess = isSuccess;
    }
    return Result;
}());
var Success = /** @class */ (function (_super) {
    __extends(Success, _super);
    function Success() {
        return _super.call(this, true) || this;
    }
    return Success;
}(Result));
var AutocompleteSuccess = /** @class */ (function (_super) {
    __extends(AutocompleteSuccess, _super);
    function AutocompleteSuccess(suggestions) {
        var _this = _super.call(this) || this;
        _this.suggestions = suggestions;
        return _this;
    }
    AutocompleteSuccess.prototype.toSuccess = function () {
        return this;
    };
    AutocompleteSuccess.prototype.toFailed = function () {
        throw new Error('Did not fail');
    };
    return AutocompleteSuccess;
}(Success));
var LocationSuccess = /** @class */ (function (_super) {
    __extends(LocationSuccess, _super);
    function LocationSuccess(suggestions) {
        var _this = _super.call(this) || this;
        _this.suggestions = suggestions;
        return _this;
    }
    LocationSuccess.prototype.toSuccess = function () {
        return this;
    };
    LocationSuccess.prototype.toFailed = function () {
        throw new Error('Did not fail');
    };
    return LocationSuccess;
}(Success));
var GetSuccess = /** @class */ (function (_super) {
    __extends(GetSuccess, _super);
    function GetSuccess(address) {
        var _this = _super.call(this) || this;
        _this.address = address;
        return _this;
    }
    GetSuccess.prototype.toSuccess = function () {
        return this;
    };
    GetSuccess.prototype.toFailed = function () {
        throw new Error('Did not fail');
    };
    return GetSuccess;
}(Success));
var GetLocationSuccess = /** @class */ (function (_super) {
    __extends(GetLocationSuccess, _super);
    function GetLocationSuccess(location) {
        var _this = _super.call(this) || this;
        _this.location = location;
        return _this;
    }
    GetLocationSuccess.prototype.toSuccess = function () {
        return this;
    };
    GetLocationSuccess.prototype.toFailed = function () {
        throw new Error('Did not fail');
    };
    return GetLocationSuccess;
}(Success));
var GetLocationFailed = /** @class */ (function (_super) {
    __extends(GetLocationFailed, _super);
    function GetLocationFailed(status, message) {
        var _this = _super.call(this, false) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    GetLocationFailed.prototype.toSuccess = function () {
        throw new Error('Not a success');
    };
    GetLocationFailed.prototype.toFailed = function () {
        return this;
    };
    return GetLocationFailed;
}(Result));
var AutocompleteFailed = /** @class */ (function (_super) {
    __extends(AutocompleteFailed, _super);
    function AutocompleteFailed(status, message) {
        var _this = _super.call(this, false) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    AutocompleteFailed.prototype.toSuccess = function () {
        throw new Error('Not a success');
    };
    AutocompleteFailed.prototype.toFailed = function () {
        return this;
    };
    return AutocompleteFailed;
}(Result));
var LocationFailed = /** @class */ (function (_super) {
    __extends(LocationFailed, _super);
    function LocationFailed(status, message) {
        var _this = _super.call(this, false) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    LocationFailed.prototype.toSuccess = function () {
        throw new Error('Not a success');
    };
    LocationFailed.prototype.toFailed = function () {
        return this;
    };
    return LocationFailed;
}(Result));
var GetFailed = /** @class */ (function (_super) {
    __extends(GetFailed, _super);
    function GetFailed(status, message) {
        var _this = _super.call(this, false) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    GetFailed.prototype.toSuccess = function () {
        throw new Error('Not a success');
    };
    GetFailed.prototype.toFailed = function () {
        return this;
    };
    return GetFailed;
}(Result));
var FindSuccess = /** @class */ (function (_super) {
    __extends(FindSuccess, _super);
    function FindSuccess(addresses) {
        var _this = _super.call(this) || this;
        _this.addresses = addresses;
        return _this;
    }
    FindSuccess.prototype.toSuccess = function () {
        return this;
    };
    FindSuccess.prototype.toFailed = function () {
        throw new Error('failed');
    };
    return FindSuccess;
}(Success));
var FindFailed = /** @class */ (function (_super) {
    __extends(FindFailed, _super);
    function FindFailed(status, message) {
        var _this = _super.call(this, false) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    FindFailed.prototype.toSuccess = function () {
        throw new Error('failed');
    };
    FindFailed.prototype.toFailed = function () {
        return this;
    };
    return FindFailed;
}(Result));
var TypeaheadSuccess = /** @class */ (function (_super) {
    __extends(TypeaheadSuccess, _super);
    function TypeaheadSuccess(results) {
        var _this = _super.call(this) || this;
        _this.results = results;
        return _this;
    }
    TypeaheadSuccess.prototype.toSuccess = function () {
        return this;
    };
    TypeaheadSuccess.prototype.toFailed = function () {
        throw new Error('failed');
    };
    return TypeaheadSuccess;
}(Success));
var TypeaheadFailed = /** @class */ (function (_super) {
    __extends(TypeaheadFailed, _super);
    function TypeaheadFailed(status, message) {
        var _this = _super.call(this, false) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    TypeaheadFailed.prototype.toSuccess = function () {
        throw new Error('failed');
    };
    TypeaheadFailed.prototype.toFailed = function () {
        return this;
    };
    return TypeaheadFailed;
}(Result));

var Client = /** @class */ (function () {
    function Client(api_key, autocomplete_url, get_url, location_url, get_location_url, typeahead_url) {
        if (autocomplete_url === void 0) { autocomplete_url = 'https://api.getaddress.io/autocomplete/{query}'; }
        if (get_url === void 0) { get_url = 'https://api.getaddress.io/get/{id}'; }
        if (location_url === void 0) { location_url = 'https://api.getaddress.io/location/{query}'; }
        if (get_location_url === void 0) { get_location_url = 'https://api.getaddress.io/get-location/{id}'; }
        if (typeahead_url === void 0) { typeahead_url = 'https://api.getaddress.io/typeahead/{term}'; }
        this.api_key = api_key;
        this.autocomplete_url = autocomplete_url;
        this.get_url = get_url;
        this.location_url = location_url;
        this.get_location_url = get_location_url;
        this.typeahead_url = typeahead_url;
        this.autocompleteResponse = undefined;
        this.getResponse = undefined;
        this.locationResponse = undefined;
        this.getLocationResponse = undefined;
        this.typeaheadResponse = undefined;
        this.autocompleteAbortController = new AbortController();
        this.getAbortController = new AbortController();
        this.typeaheadAbortController = new AbortController();
        this.locationAbortController = new AbortController();
        this.getLocationAbortController = new AbortController();
    }
    Client.prototype.location = function (query, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var combinedOptions, url, _a, json_1, suggestions, json, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        combinedOptions = __assign({ all: true }, options);
                        url = this.location_url.replace(/{query}/i, query);
                        if (this.api_key) {
                            if (url.includes('?')) {
                                url = "".concat(url, "&api-key=").concat(this.api_key);
                            }
                            else {
                                url = "".concat(url, "?api-key=").concat(this.api_key);
                            }
                        }
                        if (this.locationResponse !== undefined) {
                            this.locationResponse = undefined;
                            this.locationAbortController.abort();
                            this.locationAbortController = new AbortController();
                        }
                        _a = this;
                        return [4 /*yield*/, fetch(url, {
                                method: 'post',
                                signal: this.locationAbortController.signal,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(combinedOptions),
                            })];
                    case 1:
                        _a.locationResponse = _b.sent();
                        if (!(this.locationResponse.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.locationResponse.json()];
                    case 2:
                        json_1 = _b.sent();
                        suggestions = json_1.suggestions;
                        return [2 /*return*/, new LocationSuccess(suggestions)];
                    case 3: return [4 /*yield*/, this.locationResponse.json()];
                    case 4:
                        json = _b.sent();
                        return [2 /*return*/, new LocationFailed(this.locationResponse.status, json.Message)];
                    case 5:
                        err_1 = _b.sent();
                        if (err_1 instanceof Error) {
                            if (err_1.name === 'AbortError') {
                                return [2 /*return*/, new LocationSuccess([])];
                            }
                            return [2 /*return*/, new LocationFailed(401, err_1.message)];
                        }
                        return [2 /*return*/, new LocationFailed(401, 'Unauthorised')];
                    case 6:
                        this.locationResponse = undefined;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.getLocation = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _a, json_2, loaction, json, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        url = this.get_location_url.replace(/{id}/i, id);
                        if (this.api_key) {
                            if (url.includes('?')) {
                                url = "".concat(url, "&api-key=").concat(this.api_key);
                            }
                            else {
                                url = "".concat(url, "?api-key=").concat(this.api_key);
                            }
                        }
                        if (this.getLocationResponse !== undefined) {
                            this.getResponse = undefined;
                            this.getAbortController.abort();
                            this.getAbortController = new AbortController();
                        }
                        _a = this;
                        return [4 /*yield*/, fetch(url, {
                                method: 'get',
                                signal: this.getAbortController.signal,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })];
                    case 1:
                        _a.getResponse = _b.sent();
                        if (!(this.getResponse.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getResponse.json()];
                    case 2:
                        json_2 = _b.sent();
                        loaction = json_2;
                        return [2 /*return*/, new GetLocationSuccess(loaction)];
                    case 3: return [4 /*yield*/, this.getResponse.json()];
                    case 4:
                        json = _b.sent();
                        return [2 /*return*/, new GetLocationFailed(this.getResponse.status, json.Message)];
                    case 5:
                        err_2 = _b.sent();
                        if (err_2 instanceof Error) {
                            return [2 /*return*/, new GetLocationFailed(401, err_2.message)];
                        }
                        return [2 /*return*/, new GetLocationFailed(401, 'Unauthorised')];
                    case 6:
                        this.getResponse = undefined;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.autocomplete = function (query, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var combinedOptions, url, _a, json_3, suggestions, json, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        combinedOptions = __assign({ all: true }, options);
                        url = this.autocomplete_url.replace(/{query}/i, query);
                        if (this.api_key) {
                            if (url.includes('?')) {
                                url = "".concat(url, "&api-key=").concat(this.api_key);
                            }
                            else {
                                url = "".concat(url, "?api-key=").concat(this.api_key);
                            }
                        }
                        if (this.autocompleteResponse !== undefined) {
                            this.autocompleteResponse = undefined;
                            this.autocompleteAbortController.abort();
                            this.autocompleteAbortController = new AbortController();
                        }
                        _a = this;
                        return [4 /*yield*/, fetch(url, {
                                method: 'post',
                                signal: this.autocompleteAbortController.signal,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(combinedOptions),
                            })];
                    case 1:
                        _a.autocompleteResponse = _b.sent();
                        if (!(this.autocompleteResponse.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.autocompleteResponse.json()];
                    case 2:
                        json_3 = _b.sent();
                        suggestions = json_3.suggestions;
                        return [2 /*return*/, new AutocompleteSuccess(suggestions)];
                    case 3: return [4 /*yield*/, this.autocompleteResponse.json()];
                    case 4:
                        json = _b.sent();
                        return [2 /*return*/, new AutocompleteFailed(this.autocompleteResponse.status, json.Message)];
                    case 5:
                        err_3 = _b.sent();
                        if (err_3 instanceof Error) {
                            if (err_3.name === 'AbortError') {
                                return [2 /*return*/, new AutocompleteSuccess([])];
                            }
                            return [2 /*return*/, new AutocompleteFailed(401, err_3.message)];
                        }
                        return [2 /*return*/, new AutocompleteFailed(401, 'Unauthorised')];
                    case 6:
                        this.autocompleteResponse = undefined;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _a, json_4, address, json, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        url = this.get_url.replace(/{id}/i, id);
                        if (this.api_key) {
                            if (url.includes('?')) {
                                url = "".concat(url, "&api-key=").concat(this.api_key);
                            }
                            else {
                                url = "".concat(url, "?api-key=").concat(this.api_key);
                            }
                        }
                        if (this.getResponse !== undefined) {
                            this.getResponse = undefined;
                            this.getAbortController.abort();
                            this.getAbortController = new AbortController();
                        }
                        _a = this;
                        return [4 /*yield*/, fetch(url, {
                                method: 'get',
                                signal: this.getAbortController.signal,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })];
                    case 1:
                        _a.getResponse = _b.sent();
                        if (!(this.getResponse.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getResponse.json()];
                    case 2:
                        json_4 = _b.sent();
                        address = json_4;
                        return [2 /*return*/, new GetSuccess(address)];
                    case 3: return [4 /*yield*/, this.getResponse.json()];
                    case 4:
                        json = _b.sent();
                        return [2 /*return*/, new GetFailed(this.getResponse.status, json.Message)];
                    case 5:
                        err_4 = _b.sent();
                        if (err_4 instanceof Error) {
                            return [2 /*return*/, new GetFailed(401, err_4.message)];
                        }
                        return [2 /*return*/, new GetFailed(401, 'Unauthorised')];
                    case 6:
                        this.getResponse = undefined;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.find = function (postcode) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json_5, addresses, json, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("https://api.getaddress.io/find/".concat(postcode, "?api-key=").concat(this.api_key, "&expand=true"))];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json_5 = _a.sent();
                        addresses = json_5;
                        return [2 /*return*/, new FindSuccess(addresses)];
                    case 3: return [4 /*yield*/, response.json()];
                    case 4:
                        json = _a.sent();
                        return [2 /*return*/, new FindFailed(response.status, json.Message)];
                    case 5:
                        err_5 = _a.sent();
                        if (err_5 instanceof Error) {
                            return [2 /*return*/, new FindFailed(401, err_5.message)];
                        }
                        return [2 /*return*/, new FindFailed(401, 'Unauthorised')];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.typeahead = function (term, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, _a, json_6, results, json, err_6;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        url = this.typeahead_url.replace(/{term}/i, term);
                        if (this.api_key) {
                            if (url.includes('?')) {
                                url = "".concat(url, "&api-key=").concat(this.api_key);
                            }
                            else {
                                url = "".concat(url, "?api-key=").concat(this.api_key);
                            }
                        }
                        if (this.typeaheadResponse !== undefined) {
                            this.typeaheadResponse = undefined;
                            this.typeaheadAbortController.abort();
                            this.typeaheadAbortController = new AbortController();
                        }
                        _a = this;
                        return [4 /*yield*/, fetch(url, {
                                method: 'post',
                                signal: this.autocompleteAbortController.signal,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(options),
                            })];
                    case 1:
                        _a.typeaheadResponse = _b.sent();
                        if (!(this.typeaheadResponse.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.typeaheadResponse.json()];
                    case 2:
                        json_6 = _b.sent();
                        results = json_6;
                        return [2 /*return*/, new TypeaheadSuccess(results)];
                    case 3: return [4 /*yield*/, this.typeaheadResponse.json()];
                    case 4:
                        json = _b.sent();
                        return [2 /*return*/, new TypeaheadFailed(this.typeaheadResponse.status, json.Message)];
                    case 5:
                        err_6 = _b.sent();
                        if (err_6 instanceof Error) {
                            if (err_6.name === 'AbortError') {
                                return [2 /*return*/, new TypeaheadSuccess([])];
                            }
                            return [2 /*return*/, new TypeaheadFailed(401, err_6.message)];
                        }
                        return [2 /*return*/, new TypeaheadFailed(401, 'Unauthorised')];
                    case 6:
                        this.typeaheadResponse = undefined;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Client;
}());

export { AutocompleteFailed, AutocompleteSuccess, Client, FindFailed, FindSuccess, GetFailed, GetSuccess, Result, TypeaheadFailed, TypeaheadSuccess, Client as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkubWpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vc3JjL1R5cGVzLnRzIiwiLi4vc3JjL0NsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblN1Z2dlc3Rpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc3VsdDxTLCBGPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaXNTdWNjZXNzOiBib29sZWFuKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgdG9TdWNjZXNzKCk6IFM7XHJcblxyXG4gIGFic3RyYWN0IHRvRmFpbGVkKCk6IEY7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWNjZXNzPFMsIEY+IGV4dGVuZHMgUmVzdWx0PFMsIEY+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgdG9TdWNjZXNzKCk6IFM7XHJcblxyXG4gIGFic3RyYWN0IHRvRmFpbGVkKCk6IEY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdWdnZXN0aW9uczogTG9jYXRpb25TdWdnZXN0aW9uW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogTG9jYXRpb25TdWNjZXNzIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogTG9jYXRpb25GYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxHZXRTdWNjZXNzLCBHZXRGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBhZGRyZXNzOiBBdXRvY29tcGxldGVBZGRyZXNzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldFN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb2NhdGlvblN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEdldExvY2F0aW9uU3VjY2VzcywgR2V0TG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBsb2NhdGlvbjogTG9jYXRpb25BZGRyZXNzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldExvY2F0aW9uU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEdldExvY2F0aW9uRmFpbGVkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRGlkIG5vdCBmYWlsJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0TG9jYXRpb25GYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8R2V0TG9jYXRpb25TdWNjZXNzLCBHZXRMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLCByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBHZXRMb2NhdGlvblN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBHZXRMb2NhdGlvbkZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8QXV0b2NvbXBsZXRlU3VjY2VzcywgQXV0b2NvbXBsZXRlRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uRmFpbGVkIGV4dGVuZHMgUmVzdWx0PExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogTG9jYXRpb25TdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogTG9jYXRpb25GYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RmFpbGVkIGV4dGVuZHMgUmVzdWx0PEdldFN1Y2Nlc3MsIEdldEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLCByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBHZXRTdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogR2V0RmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVPcHRpb25zIHtcclxuICBhbGw6IGJvb2xlYW47XHJcbiAgdGVtcGxhdGU6IHN0cmluZztcclxuICB0b3A6IG51bWJlcjtcclxuICBmaWx0ZXI6IFBhcnRpYWw8QXV0b2NvbXBsZXRlRmlsdGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbk9wdGlvbnMge1xyXG4gIHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgdGVtcGxhdGVfb3V0Y29kZTogc3RyaW5nO1xyXG4gIHRlbXBsYXRlX3Bvc3Rjb2RlOiBzdHJpbmc7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgZmlsdGVyOiBQYXJ0aWFsPExvY2F0aW9uRmlsdGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUeXBlYWhlYWRPcHRpb25zIHtcclxuICB0b3A6IG51bWJlcjtcclxuICBzZWFyY2g6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cyB7XHJcbiAga206IG51bWJlcjtcclxuICBsb25naXR1ZGU6IG51bWJlcjtcclxuICBsYXRpdHVkZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uRmlsdGVyUmFkaXVzIHtcclxuICBrbTogbnVtYmVyO1xyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRmlsdGVyIHtcclxuICBjb3VudHk6IHN0cmluZztcclxuICBsb2NhbGl0eTogc3RyaW5nO1xyXG4gIGRpc3RyaWN0OiBzdHJpbmc7XHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgcG9zdGNvZGU6IHN0cmluZztcclxuICByZXNpZGVudGlhbDogYm9vbGVhbjtcclxuICByYWRpdXM6IEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbkZpbHRlciB7XHJcbiAgY291bnR5OiBzdHJpbmc7XHJcbiAgY291bnRyeTpzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgYXJlYTpzdHJpbmcsXHJcbiAgcG9zdGNvZGU6IHN0cmluZztcclxuICBvdXRjb2RlOiBzdHJpbmcsXHJcbiAgcmFkaXVzOiBMb2NhdGlvbkZpbHRlclJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzIHtcclxuICBmb3JtYXR0ZWRfYWRkcmVzczogc3RyaW5nW10sXHJcbiAgdGhvcm91Z2hmYXJlOiBzdHJpbmcsXHJcbiAgYnVpbGRpbmdfbmFtZTogc3RyaW5nLFxyXG4gIHN1Yl9idWlsZGluZ19uYW1lOiBzdHJpbmcsXHJcbiAgc3ViX2J1aWxkaW5nX251bWJlcjogc3RyaW5nLFxyXG4gIGJ1aWxkaW5nX251bWJlcjogc3RyaW5nLFxyXG4gIGxpbmVfMTogc3RyaW5nLFxyXG4gIGxpbmVfMjogc3RyaW5nLFxyXG4gIGxpbmVfMzogc3RyaW5nLFxyXG4gIGxpbmVfNDogc3RyaW5nLFxyXG4gIGxvY2FsaXR5OiBzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmcsXHJcbiAgY291bnR5OiBzdHJpbmcsXHJcbiAgZGlzdHJpY3Q6IHN0cmluZyxcclxuICBjb3VudHJ5OiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlQWRkcmVzcyBleHRlbmRzIEFkZHJlc3Mge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlcixcclxuICBsb2NhbGl0eTogc3RyaW5nLFxyXG4gIHJlc2lkZW50aWFsOiBib29sZWFuLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uQWRkcmVzcyAge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgb3V0Y29kZTpzdHJpbmcsXHJcbiAgY291bnR5OiBzdHJpbmc7XHJcbiAgY291bnRyeTpzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgYXJlYTpzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRBZGRyZXNzZXMge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlcixcclxuICBhZGRyZXNzZXM6IEFkZHJlc3NbXSxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxGaW5kU3VjY2VzcywgRmluZEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3NlczogRmluZEFkZHJlc3Nlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBGaW5kU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEZpbmRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaW5kRmFpbGVkIGV4dGVuZHMgUmVzdWx0PEZpbmRTdWNjZXNzLCBGaW5kRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEZpbmRTdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBGaW5kRmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPFR5cGVhaGVhZFN1Y2Nlc3MsIFR5cGVhaGVhZEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJlc3VsdHM6IHN0cmluZ1tdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IFR5cGVhaGVhZFN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBUeXBlYWhlYWRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IFR5cGVhaGVhZFN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBHZXRGYWlsZWQsIFJlc3VsdCwgQXV0b2NvbXBsZXRlT3B0aW9ucywgU3VnZ2VzdGlvbixcclxuICBBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVBZGRyZXNzLCBHZXRTdWNjZXNzLFxyXG4gIEF1dG9jb21wbGV0ZUZhaWxlZCwgRmluZEFkZHJlc3NlcywgRmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQsXHJcbiAgQXV0b2NvbXBsZXRlRmlsdGVyLCBBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXMsIFR5cGVhaGVhZFN1Y2Nlc3MsXHJcbiAgVHlwZWFoZWFkRmFpbGVkLCBUeXBlYWhlYWRPcHRpb25zLExvY2F0aW9uT3B0aW9ucyxMb2NhdGlvblN1Y2Nlc3MsXHJcbiAgTG9jYXRpb25GYWlsZWQsTG9jYXRpb25TdWdnZXN0aW9uLEdldExvY2F0aW9uU3VjY2VzcyxHZXRMb2NhdGlvbkZhaWxlZCxcclxuICBMb2NhdGlvbkFkZHJlc3NcclxufSBmcm9tICcuL1R5cGVzJztcclxuXHJcbmNsYXNzIENsaWVudCB7XHJcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSBnZXRBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSB0eXBlYWhlYWRBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSBsb2NhdGlvbkFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIGdldExvY2F0aW9uQWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXI7XHJcblxyXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBnZXRSZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIGxvY2F0aW9uUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBnZXRMb2NhdGlvblJlc3BvbnNlPzogUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgdHlwZWFoZWFkUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZWFkb25seSBhcGlfa2V5OiBzdHJpbmcsXHJcbiAgICByZWFkb25seSBhdXRvY29tcGxldGVfdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9hdXRvY29tcGxldGUve3F1ZXJ5fScsXHJcbiAgICByZWFkb25seSBnZXRfdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9nZXQve2lkfScsXHJcbiAgICByZWFkb25seSBsb2NhdGlvbl91cmw6IHN0cmluZyA9ICdodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2xvY2F0aW9uL3txdWVyeX0nLFxyXG4gICAgcmVhZG9ubHkgZ2V0X2xvY2F0aW9uX3VybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZ2V0LWxvY2F0aW9uL3tpZH0nLFxyXG4gICAgcmVhZG9ubHkgdHlwZWFoZWFkX3VybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vdHlwZWFoZWFkL3t0ZXJtfScsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmxvY2F0aW9uQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5nZXRMb2NhdGlvbkFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvY2F0aW9uKFxyXG4gICAgcXVlcnk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8TG9jYXRpb25PcHRpb25zPiA9IHt9LFxyXG4gICk6IFByb21pc2U8UmVzdWx0PExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21iaW5lZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgYWxsOiB0cnVlLFxyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5sb2NhdGlvbl91cmwucmVwbGFjZSgve3F1ZXJ5fS9pLCBxdWVyeSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvblJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbkFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25BYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9jYXRpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHNpZ25hbDogdGhpcy5sb2NhdGlvbkFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbWJpbmVkT3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMubG9jYXRpb25SZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMubG9jYXRpb25SZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBqc29uLnN1Z2dlc3Rpb25zIGFzIExvY2F0aW9uU3VnZ2VzdGlvbltdO1xyXG4gICAgICAgIHJldHVybiBuZXcgTG9jYXRpb25TdWNjZXNzKHN1Z2dlc3Rpb25zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5sb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbkZhaWxlZCh0aGlzLmxvY2F0aW9uUmVzcG9uc2Uuc3RhdHVzLCBqc29uLk1lc3NhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IExvY2F0aW9uU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgTG9jYXRpb25GYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgTG9jYXRpb25GYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRMb2NhdGlvbihpZDogc3RyaW5nKTogUHJvbWlzZTxSZXN1bHQ8R2V0TG9jYXRpb25TdWNjZXNzLCBHZXRMb2NhdGlvbkZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldF9sb2NhdGlvbl91cmwucmVwbGFjZSgve2lkfS9pLCBpZCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRMb2NhdGlvblJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgIHNpZ25hbDogdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBsb2FjdGlvbiA9IGpzb24gYXMgTG9jYXRpb25BZGRyZXNzO1xyXG4gICAgICAgIHJldHVybiBuZXcgR2V0TG9jYXRpb25TdWNjZXNzKGxvYWN0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBuZXcgR2V0TG9jYXRpb25GYWlsZWQodGhpcy5nZXRSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvbkZhaWxlZCg0MDEsIGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvbkZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgYXN5bmMgYXV0b2NvbXBsZXRlKFxyXG4gICAgcXVlcnk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8QXV0b2NvbXBsZXRlT3B0aW9ucz4gPSB7fSxcclxuICApOiBQcm9taXNlPFJlc3VsdDxBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVGYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21iaW5lZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgYWxsOiB0cnVlLFxyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5hdXRvY29tcGxldGVfdXJsLnJlcGxhY2UoL3txdWVyeX0vaSwgcXVlcnkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXBpX2tleSkge1xyXG4gICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJz8nKSkge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfSZhcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0/YXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHNpZ25hbDogdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21iaW5lZE9wdGlvbnMpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBqc29uLnN1Z2dlc3Rpb25zIGFzIFN1Z2dlc3Rpb25bXTtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZVN1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8UmVzdWx0PEdldFN1Y2Nlc3MsIEdldEZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldF91cmwucmVwbGFjZSgve2lkfS9pLCBpZCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmdldFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICBzaWduYWw6IHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGpzb24gYXMgQXV0b2NvbXBsZXRlQWRkcmVzcztcclxuICAgICAgICByZXR1cm4gbmV3IEdldFN1Y2Nlc3MoYWRkcmVzcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsIGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBHZXRGYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmluZChwb3N0Y29kZTogc3RyaW5nKTogUHJvbWlzZTxSZXN1bHQ8RmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2ZpbmQvJHtwb3N0Y29kZX0/YXBpLWtleT0ke3RoaXMuYXBpX2tleX0mZXhwYW5kPXRydWVgKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBqc29uIGFzIEZpbmRBZGRyZXNzZXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaW5kU3VjY2VzcyhhZGRyZXNzZXMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZChyZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyB0eXBlYWhlYWQoXHJcbiAgICB0ZXJtOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBQYXJ0aWFsPFR5cGVhaGVhZE9wdGlvbnM+ID0ge30sXHJcbiAgKTogUHJvbWlzZTxSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkRmFpbGVkPj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMudHlwZWFoZWFkX3VybC5yZXBsYWNlKC97dGVybX0vaSwgdGVybSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgc2lnbmFsOiB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy50eXBlYWhlYWRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGpzb24gYXMgc3RyaW5nW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKHJlc3VsdHMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQodGhpcy50eXBlYWhlYWRSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XHJcblxyXG5leHBvcnQge1xyXG4gIENsaWVudCwgR2V0RmFpbGVkLCBSZXN1bHQsXHJcbiAgQXV0b2NvbXBsZXRlT3B0aW9ucyxcclxuICBBdXRvY29tcGxldGVGaWx0ZXIsXHJcbiAgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzLFxyXG4gIFN1Z2dlc3Rpb24sXHJcbiAgQXV0b2NvbXBsZXRlU3VjY2VzcyxcclxuICBBdXRvY29tcGxldGVBZGRyZXNzLFxyXG4gIEdldFN1Y2Nlc3MsXHJcbiAgQXV0b2NvbXBsZXRlRmFpbGVkLCBGaW5kQWRkcmVzc2VzLFxyXG4gIEZpbmRTdWNjZXNzLCBGaW5kRmFpbGVkLCBUeXBlYWhlYWRGYWlsZWQsXHJcbiAgVHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkT3B0aW9ucyxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBQ0Q7QUFDTyxJQUFJLFFBQVEsR0FBRyxXQUFXO0FBQ2pDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3JELFFBQVEsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0QsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLFlBQVksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekYsU0FBUztBQUNULFFBQVEsT0FBTyxDQUFDLENBQUM7QUFDakIsTUFBSztBQUNMLElBQUksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUMzQyxFQUFDO0FBNEJEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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

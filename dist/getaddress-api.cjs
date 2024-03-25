'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
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
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(combinedOptions)
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
                                    'Content-Type': 'application/json'
                                }
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
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(combinedOptions)
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
                                    'Content-Type': 'application/json'
                                }
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
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(options)
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

exports.AutocompleteFailed = AutocompleteFailed;
exports.AutocompleteSuccess = AutocompleteSuccess;
exports.Client = Client;
exports.FindFailed = FindFailed;
exports.FindSuccess = FindSuccess;
exports.GetFailed = GetFailed;
exports.GetLocationFailed = GetLocationFailed;
exports.GetLocationSuccess = GetLocationSuccess;
exports.GetSuccess = GetSuccess;
exports.LocationFailed = LocationFailed;
exports.LocationSuccess = LocationSuccess;
exports.Result = Result;
exports.TypeaheadFailed = TypeaheadFailed;
exports.TypeaheadSuccess = TypeaheadSuccess;
exports["default"] = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkuY2pzIiwic291cmNlcyI6WyIuLi9zcmMvVHlwZXMudHMiLCIuLi9zcmMvQ2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblN1Z2dlc3Rpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc3VsdDxTLCBGPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaXNTdWNjZXNzOiBib29sZWFuKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgdG9TdWNjZXNzKCk6IFM7XHJcblxyXG4gIGFic3RyYWN0IHRvRmFpbGVkKCk6IEY7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWNjZXNzPFMsIEY+IGV4dGVuZHMgUmVzdWx0PFMsIEY+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgdG9TdWNjZXNzKCk6IFM7XHJcblxyXG4gIGFic3RyYWN0IHRvRmFpbGVkKCk6IEY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdWdnZXN0aW9uczogTG9jYXRpb25TdWdnZXN0aW9uW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogTG9jYXRpb25TdWNjZXNzIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogTG9jYXRpb25GYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxHZXRTdWNjZXNzLCBHZXRGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBhZGRyZXNzOiBBdXRvY29tcGxldGVBZGRyZXNzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldFN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb2NhdGlvblN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEdldExvY2F0aW9uU3VjY2VzcywgR2V0TG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBsb2NhdGlvbjogTG9jYXRpb25BZGRyZXNzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldExvY2F0aW9uU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEdldExvY2F0aW9uRmFpbGVkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRGlkIG5vdCBmYWlsJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0TG9jYXRpb25GYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8R2V0TG9jYXRpb25TdWNjZXNzLCBHZXRMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLCByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBHZXRMb2NhdGlvblN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBHZXRMb2NhdGlvbkZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8QXV0b2NvbXBsZXRlU3VjY2VzcywgQXV0b2NvbXBsZXRlRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uRmFpbGVkIGV4dGVuZHMgUmVzdWx0PExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogTG9jYXRpb25TdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogTG9jYXRpb25GYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RmFpbGVkIGV4dGVuZHMgUmVzdWx0PEdldFN1Y2Nlc3MsIEdldEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLCByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBHZXRTdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogR2V0RmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVPcHRpb25zIHtcclxuICBhbGw6IGJvb2xlYW47XHJcbiAgdGVtcGxhdGU6IHN0cmluZztcclxuICB0b3A6IG51bWJlcjtcclxuICBmaWx0ZXI6IFBhcnRpYWw8QXV0b2NvbXBsZXRlRmlsdGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbk9wdGlvbnMge1xyXG4gIHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgdGVtcGxhdGVfb3V0Y29kZTogc3RyaW5nO1xyXG4gIHRlbXBsYXRlX3Bvc3Rjb2RlOiBzdHJpbmc7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgZmlsdGVyOiBQYXJ0aWFsPExvY2F0aW9uRmlsdGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUeXBlYWhlYWRPcHRpb25zIHtcclxuICB0b3A6IG51bWJlcjtcclxuICBzZWFyY2g6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cyB7XHJcbiAga206IG51bWJlcjtcclxuICBsb25naXR1ZGU6IG51bWJlcjtcclxuICBsYXRpdHVkZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uRmlsdGVyUmFkaXVzIHtcclxuICBrbTogbnVtYmVyO1xyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRmlsdGVyIHtcclxuICBjb3VudHk6IHN0cmluZztcclxuICBsb2NhbGl0eTogc3RyaW5nO1xyXG4gIGRpc3RyaWN0OiBzdHJpbmc7XHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgcG9zdGNvZGU6IHN0cmluZztcclxuICByZXNpZGVudGlhbDogYm9vbGVhbjtcclxuICByYWRpdXM6IEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbkZpbHRlciB7XHJcbiAgY291bnR5OiBzdHJpbmc7XHJcbiAgY291bnRyeTpzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgYXJlYTpzdHJpbmcsXHJcbiAgcG9zdGNvZGU6IHN0cmluZztcclxuICBvdXRjb2RlOiBzdHJpbmcsXHJcbiAgcmFkaXVzOiBMb2NhdGlvbkZpbHRlclJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzIHtcclxuICBmb3JtYXR0ZWRfYWRkcmVzczogc3RyaW5nW10sXHJcbiAgdGhvcm91Z2hmYXJlOiBzdHJpbmcsXHJcbiAgYnVpbGRpbmdfbmFtZTogc3RyaW5nLFxyXG4gIHN1Yl9idWlsZGluZ19uYW1lOiBzdHJpbmcsXHJcbiAgc3ViX2J1aWxkaW5nX251bWJlcjogc3RyaW5nLFxyXG4gIGJ1aWxkaW5nX251bWJlcjogc3RyaW5nLFxyXG4gIGxpbmVfMTogc3RyaW5nLFxyXG4gIGxpbmVfMjogc3RyaW5nLFxyXG4gIGxpbmVfMzogc3RyaW5nLFxyXG4gIGxpbmVfNDogc3RyaW5nLFxyXG4gIGxvY2FsaXR5OiBzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmcsXHJcbiAgY291bnR5OiBzdHJpbmcsXHJcbiAgZGlzdHJpY3Q6IHN0cmluZyxcclxuICBjb3VudHJ5OiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlQWRkcmVzcyBleHRlbmRzIEFkZHJlc3Mge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlcixcclxuICBsb2NhbGl0eTogc3RyaW5nLFxyXG4gIHJlc2lkZW50aWFsOiBib29sZWFuLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uQWRkcmVzcyAge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgb3V0Y29kZTpzdHJpbmcsXHJcbiAgY291bnR5OiBzdHJpbmc7XHJcbiAgY291bnRyeTpzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgYXJlYTpzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRBZGRyZXNzZXMge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlcixcclxuICBhZGRyZXNzZXM6IEFkZHJlc3NbXSxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxGaW5kU3VjY2VzcywgRmluZEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3NlczogRmluZEFkZHJlc3Nlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBGaW5kU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEZpbmRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaW5kRmFpbGVkIGV4dGVuZHMgUmVzdWx0PEZpbmRTdWNjZXNzLCBGaW5kRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEZpbmRTdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBGaW5kRmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPFR5cGVhaGVhZFN1Y2Nlc3MsIFR5cGVhaGVhZEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJlc3VsdHM6IHN0cmluZ1tdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IFR5cGVhaGVhZFN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBUeXBlYWhlYWRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IFR5cGVhaGVhZFN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBHZXRGYWlsZWQsIFJlc3VsdCwgQXV0b2NvbXBsZXRlT3B0aW9ucywgU3VnZ2VzdGlvbixcclxuICBBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVBZGRyZXNzLCBHZXRTdWNjZXNzLFxyXG4gIEF1dG9jb21wbGV0ZUZhaWxlZCwgRmluZEFkZHJlc3NlcywgRmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQsXHJcbiAgQXV0b2NvbXBsZXRlRmlsdGVyLCBBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXMsIFR5cGVhaGVhZFN1Y2Nlc3MsXHJcbiAgVHlwZWFoZWFkRmFpbGVkLCBUeXBlYWhlYWRPcHRpb25zLExvY2F0aW9uT3B0aW9ucyxMb2NhdGlvblN1Y2Nlc3MsXHJcbiAgTG9jYXRpb25GYWlsZWQsTG9jYXRpb25TdWdnZXN0aW9uLEdldExvY2F0aW9uU3VjY2VzcyxHZXRMb2NhdGlvbkZhaWxlZCxcclxuICBMb2NhdGlvbkFkZHJlc3MsTG9jYXRpb25GaWx0ZXIsTG9jYXRpb25GaWx0ZXJSYWRpdXNcclxufSBmcm9tICcuL1R5cGVzJztcclxuXHJcbmNsYXNzIENsaWVudCB7XHJcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSBnZXRBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSB0eXBlYWhlYWRBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSBsb2NhdGlvbkFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIGdldExvY2F0aW9uQWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXI7XHJcblxyXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBnZXRSZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIGxvY2F0aW9uUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBnZXRMb2NhdGlvblJlc3BvbnNlPzogUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgdHlwZWFoZWFkUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZWFkb25seSBhcGlfa2V5OiBzdHJpbmcsXHJcbiAgICByZWFkb25seSBhdXRvY29tcGxldGVfdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9hdXRvY29tcGxldGUve3F1ZXJ5fScsXHJcbiAgICByZWFkb25seSBnZXRfdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9nZXQve2lkfScsXHJcbiAgICByZWFkb25seSBsb2NhdGlvbl91cmw6IHN0cmluZyA9ICdodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2xvY2F0aW9uL3txdWVyeX0nLFxyXG4gICAgcmVhZG9ubHkgZ2V0X2xvY2F0aW9uX3VybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZ2V0LWxvY2F0aW9uL3tpZH0nLFxyXG4gICAgcmVhZG9ubHkgdHlwZWFoZWFkX3VybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vdHlwZWFoZWFkL3t0ZXJtfScsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmxvY2F0aW9uQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5nZXRMb2NhdGlvbkFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvY2F0aW9uKFxyXG4gICAgcXVlcnk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8TG9jYXRpb25PcHRpb25zPiA9IHt9LFxyXG4gICk6IFByb21pc2U8UmVzdWx0PExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21iaW5lZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgYWxsOiB0cnVlLFxyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5sb2NhdGlvbl91cmwucmVwbGFjZSgve3F1ZXJ5fS9pLCBxdWVyeSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvblJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbkFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25BYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9jYXRpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHNpZ25hbDogdGhpcy5sb2NhdGlvbkFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbWJpbmVkT3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMubG9jYXRpb25SZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMubG9jYXRpb25SZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBqc29uLnN1Z2dlc3Rpb25zIGFzIExvY2F0aW9uU3VnZ2VzdGlvbltdO1xyXG4gICAgICAgIHJldHVybiBuZXcgTG9jYXRpb25TdWNjZXNzKHN1Z2dlc3Rpb25zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5sb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbkZhaWxlZCh0aGlzLmxvY2F0aW9uUmVzcG9uc2Uuc3RhdHVzLCBqc29uLk1lc3NhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IExvY2F0aW9uU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgTG9jYXRpb25GYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgTG9jYXRpb25GYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRMb2NhdGlvbihpZDogc3RyaW5nKTogUHJvbWlzZTxSZXN1bHQ8R2V0TG9jYXRpb25TdWNjZXNzLCBHZXRMb2NhdGlvbkZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldF9sb2NhdGlvbl91cmwucmVwbGFjZSgve2lkfS9pLCBpZCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRMb2NhdGlvblJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgIHNpZ25hbDogdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBsb2FjdGlvbiA9IGpzb24gYXMgTG9jYXRpb25BZGRyZXNzO1xyXG4gICAgICAgIHJldHVybiBuZXcgR2V0TG9jYXRpb25TdWNjZXNzKGxvYWN0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBuZXcgR2V0TG9jYXRpb25GYWlsZWQodGhpcy5nZXRSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvbkZhaWxlZCg0MDEsIGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvbkZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgYXN5bmMgYXV0b2NvbXBsZXRlKFxyXG4gICAgcXVlcnk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8QXV0b2NvbXBsZXRlT3B0aW9ucz4gPSB7fSxcclxuICApOiBQcm9taXNlPFJlc3VsdDxBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVGYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgY29uc3QgY29tYmluZWRPcHRpb25zID0ge1xyXG4gICAgICAgIGFsbDogdHJ1ZSxcclxuICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5hdXRvY29tcGxldGVfdXJsLnJlcGxhY2UoL3txdWVyeX0vaSwgcXVlcnkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXBpX2tleSkge1xyXG4gICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJz8nKSkge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfSZhcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0/YXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHNpZ25hbDogdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21iaW5lZE9wdGlvbnMpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBqc29uLnN1Z2dlc3Rpb25zIGFzIFN1Z2dlc3Rpb25bXTtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZVN1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8UmVzdWx0PEdldFN1Y2Nlc3MsIEdldEZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldF91cmwucmVwbGFjZSgve2lkfS9pLCBpZCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmdldFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICBzaWduYWw6IHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGpzb24gYXMgQXV0b2NvbXBsZXRlQWRkcmVzcztcclxuICAgICAgICByZXR1cm4gbmV3IEdldFN1Y2Nlc3MoYWRkcmVzcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsIGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBHZXRGYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmluZChwb3N0Y29kZTogc3RyaW5nKTogUHJvbWlzZTxSZXN1bHQ8RmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2ZpbmQvJHtwb3N0Y29kZX0/YXBpLWtleT0ke3RoaXMuYXBpX2tleX0mZXhwYW5kPXRydWVgKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBqc29uIGFzIEZpbmRBZGRyZXNzZXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaW5kU3VjY2VzcyhhZGRyZXNzZXMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZChyZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyB0eXBlYWhlYWQoXHJcbiAgICB0ZXJtOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBQYXJ0aWFsPFR5cGVhaGVhZE9wdGlvbnM+ID0ge30sXHJcbiAgKTogUHJvbWlzZTxSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkRmFpbGVkPj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMudHlwZWFoZWFkX3VybC5yZXBsYWNlKC97dGVybX0vaSwgdGVybSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgc2lnbmFsOiB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy50eXBlYWhlYWRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGpzb24gYXMgc3RyaW5nW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKHJlc3VsdHMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQodGhpcy50eXBlYWhlYWRSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XHJcblxyXG5leHBvcnQge1xyXG4gIENsaWVudCwgXHJcbiAgR2V0RmFpbGVkLFxyXG4gIEdldExvY2F0aW9uRmFpbGVkLCBcclxuICBSZXN1bHQsXHJcbiAgQXV0b2NvbXBsZXRlT3B0aW9ucyxcclxuICBMb2NhdGlvbk9wdGlvbnMsXHJcbiAgQXV0b2NvbXBsZXRlRmlsdGVyLFxyXG4gIExvY2F0aW9uRmlsdGVyLFxyXG4gIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cyxcclxuICBMb2NhdGlvbkZpbHRlclJhZGl1cyxcclxuICBTdWdnZXN0aW9uLFxyXG4gIExvY2F0aW9uU3VnZ2VzdGlvbixcclxuICBBdXRvY29tcGxldGVTdWNjZXNzLFxyXG4gIExvY2F0aW9uU3VjY2VzcyxcclxuICBBdXRvY29tcGxldGVBZGRyZXNzLFxyXG4gIExvY2F0aW9uQWRkcmVzcyxcclxuICBHZXRTdWNjZXNzLFxyXG4gIEdldExvY2F0aW9uU3VjY2VzcyxcclxuICBBdXRvY29tcGxldGVGYWlsZWQsIFxyXG4gIExvY2F0aW9uRmFpbGVkLFxyXG4gIEZpbmRBZGRyZXNzZXMsXHJcbiAgRmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQsIFR5cGVhaGVhZEZhaWxlZCxcclxuICBUeXBlYWhlYWRTdWNjZXNzLCBUeXBlYWhlYWRPcHRpb25zLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBQSxNQUFBLGtCQUFBLFlBQUE7QUFDRSxJQUFBLFNBQUEsTUFBQSxDQUFxQixTQUFrQixFQUFBO1FBQWxCLElBQVMsQ0FBQSxTQUFBLEdBQVQsU0FBUyxDQUFTO0tBRXRDO0lBS0gsT0FBQyxNQUFBLENBQUE7QUFBRCxDQUFDLEVBQUEsRUFBQTtBQUVELElB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

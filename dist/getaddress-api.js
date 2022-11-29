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

export { AutocompleteFailed, AutocompleteSuccess, Client, FindFailed, FindSuccess, GetFailed, GetLocationFailed, GetLocationSuccess, GetSuccess, LocationFailed, LocationSuccess, Result, TypeaheadFailed, TypeaheadSuccess, Client as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9zcmMvVHlwZXMudHMiLCIuLi9zcmMvQ2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU3VnZ2VzdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVzdWx0PFMsIEY+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBpc1N1Y2Nlc3M6IGJvb2xlYW4pIHtcclxuXHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCB0b1N1Y2Nlc3MoKTogUztcclxuXHJcbiAgYWJzdHJhY3QgdG9GYWlsZWQoKTogRjtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1Y2Nlc3M8UywgRj4gZXh0ZW5kcyBSZXN1bHQ8UywgRj4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCB0b1N1Y2Nlc3MoKTogUztcclxuXHJcbiAgYWJzdHJhY3QgdG9GYWlsZWQoKTogRjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIEF1dG9jb21wbGV0ZUZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN1Z2dlc3Rpb25zOiBTdWdnZXN0aW9uW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogQXV0b2NvbXBsZXRlU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEF1dG9jb21wbGV0ZUZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8TG9jYXRpb25TdWNjZXNzLCBMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN1Z2dlc3Rpb25zOiBMb2NhdGlvblN1Z2dlc3Rpb25bXSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBMb2NhdGlvblN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBMb2NhdGlvbkZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEdldFN1Y2Nlc3MsIEdldEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3M6IEF1dG9jb21wbGV0ZUFkZHJlc3MpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogR2V0U3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEdldEZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldExvY2F0aW9uU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8R2V0TG9jYXRpb25TdWNjZXNzLCBHZXRMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGxvY2F0aW9uOiBMb2NhdGlvbkFkZHJlc3MpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogR2V0TG9jYXRpb25TdWNjZXNzIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogR2V0TG9jYXRpb25GYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb2NhdGlvbkZhaWxlZCBleHRlbmRzIFJlc3VsdDxHZXRMb2NhdGlvblN1Y2Nlc3MsIEdldExvY2F0aW9uRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldExvY2F0aW9uU3VjY2VzcyB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHN1Y2Nlc3MnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEdldExvY2F0aW9uRmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUZhaWxlZCBleHRlbmRzIFJlc3VsdDxBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogQXV0b2NvbXBsZXRlU3VjY2VzcyB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHN1Y2Nlc3MnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEF1dG9jb21wbGV0ZUZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25GYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8TG9jYXRpb25TdWNjZXNzLCBMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLCByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBMb2NhdGlvblN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBMb2NhdGlvbkZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8R2V0U3VjY2VzcywgR2V0RmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldFN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZU9wdGlvbnMge1xyXG4gIGFsbDogYm9vbGVhbjtcclxuICB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGZpbHRlcjogUGFydGlhbDxBdXRvY29tcGxldGVGaWx0ZXI+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uT3B0aW9ucyB7XHJcbiAgdGVtcGxhdGU6IHN0cmluZztcclxuICB0ZW1wbGF0ZV9vdXRjb2RlOiBzdHJpbmc7XHJcbiAgdGVtcGxhdGVfcG9zdGNvZGU6IHN0cmluZztcclxuICB0b3A6IG51bWJlcjtcclxuICBmaWx0ZXI6IFBhcnRpYWw8TG9jYXRpb25GaWx0ZXI+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFR5cGVhaGVhZE9wdGlvbnMge1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIHNlYXJjaDogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzIHtcclxuICBrbTogbnVtYmVyO1xyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25GaWx0ZXJSYWRpdXMge1xyXG4gIGttOiBudW1iZXI7XHJcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgbGF0aXR1ZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVGaWx0ZXIge1xyXG4gIGNvdW50eTogc3RyaW5nO1xyXG4gIGxvY2FsaXR5OiBzdHJpbmc7XHJcbiAgZGlzdHJpY3Q6IHN0cmluZztcclxuICB0b3duX29yX2NpdHk6IHN0cmluZztcclxuICBwb3N0Y29kZTogc3RyaW5nO1xyXG4gIHJlc2lkZW50aWFsOiBib29sZWFuO1xyXG4gIHJhZGl1czogQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uRmlsdGVyIHtcclxuICBjb3VudHk6IHN0cmluZztcclxuICBjb3VudHJ5OnN0cmluZyxcclxuICB0b3duX29yX2NpdHk6IHN0cmluZztcclxuICBhcmVhOnN0cmluZyxcclxuICBwb3N0Y29kZTogc3RyaW5nO1xyXG4gIG91dGNvZGU6IHN0cmluZyxcclxuICByYWRpdXM6IExvY2F0aW9uRmlsdGVyUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xyXG4gIGZvcm1hdHRlZF9hZGRyZXNzOiBzdHJpbmdbXSxcclxuICB0aG9yb3VnaGZhcmU6IHN0cmluZyxcclxuICBidWlsZGluZ19uYW1lOiBzdHJpbmcsXHJcbiAgc3ViX2J1aWxkaW5nX25hbWU6IHN0cmluZyxcclxuICBzdWJfYnVpbGRpbmdfbnVtYmVyOiBzdHJpbmcsXHJcbiAgYnVpbGRpbmdfbnVtYmVyOiBzdHJpbmcsXHJcbiAgbGluZV8xOiBzdHJpbmcsXHJcbiAgbGluZV8yOiBzdHJpbmcsXHJcbiAgbGluZV8zOiBzdHJpbmcsXHJcbiAgbGluZV80OiBzdHJpbmcsXHJcbiAgbG9jYWxpdHk6IHN0cmluZyxcclxuICB0b3duX29yX2NpdHk6IHN0cmluZyxcclxuICBjb3VudHk6IHN0cmluZyxcclxuICBkaXN0cmljdDogc3RyaW5nLFxyXG4gIGNvdW50cnk6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVBZGRyZXNzIGV4dGVuZHMgQWRkcmVzcyB7XHJcbiAgcG9zdGNvZGU6IHN0cmluZyxcclxuICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gIGxvY2FsaXR5OiBzdHJpbmcsXHJcbiAgcmVzaWRlbnRpYWw6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25BZGRyZXNzICB7XHJcbiAgcG9zdGNvZGU6IHN0cmluZyxcclxuICBvdXRjb2RlOnN0cmluZyxcclxuICBjb3VudHk6IHN0cmluZztcclxuICBjb3VudHJ5OnN0cmluZyxcclxuICB0b3duX29yX2NpdHk6IHN0cmluZztcclxuICBhcmVhOnN0cmluZyxcclxuICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gIGxvbmdpdHVkZTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmluZEFkZHJlc3NlcyB7XHJcbiAgcG9zdGNvZGU6IHN0cmluZyxcclxuICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gIGFkZHJlc3NlczogQWRkcmVzc1tdLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmluZFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEZpbmRTdWNjZXNzLCBGaW5kRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgYWRkcmVzc2VzOiBGaW5kQWRkcmVzc2VzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEZpbmRTdWNjZXNzIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogRmluZEZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8RmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogRmluZFN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEZpbmRGYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8VHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgcmVzdWx0czogc3RyaW5nW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogVHlwZWFoZWFkU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZEZhaWxlZCBleHRlbmRzIFJlc3VsdDxUeXBlYWhlYWRTdWNjZXNzLCBUeXBlYWhlYWRGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogVHlwZWFoZWFkU3VjY2VzcyB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogVHlwZWFoZWFkRmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEdldEZhaWxlZCwgUmVzdWx0LCBBdXRvY29tcGxldGVPcHRpb25zLCBTdWdnZXN0aW9uLFxyXG4gIEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIEF1dG9jb21wbGV0ZUFkZHJlc3MsIEdldFN1Y2Nlc3MsXHJcbiAgQXV0b2NvbXBsZXRlRmFpbGVkLCBGaW5kQWRkcmVzc2VzLCBGaW5kU3VjY2VzcywgRmluZEZhaWxlZCxcclxuICBBdXRvY29tcGxldGVGaWx0ZXIsIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cywgVHlwZWFoZWFkU3VjY2VzcyxcclxuICBUeXBlYWhlYWRGYWlsZWQsIFR5cGVhaGVhZE9wdGlvbnMsTG9jYXRpb25PcHRpb25zLExvY2F0aW9uU3VjY2VzcyxcclxuICBMb2NhdGlvbkZhaWxlZCxMb2NhdGlvblN1Z2dlc3Rpb24sR2V0TG9jYXRpb25TdWNjZXNzLEdldExvY2F0aW9uRmFpbGVkLFxyXG4gIExvY2F0aW9uQWRkcmVzcyxMb2NhdGlvbkZpbHRlcixMb2NhdGlvbkZpbHRlclJhZGl1c1xyXG59IGZyb20gJy4vVHlwZXMnO1xyXG5cclxuY2xhc3MgQ2xpZW50IHtcclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIGdldEFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIHR5cGVhaGVhZEFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIGxvY2F0aW9uQWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXI7XHJcblxyXG4gIHByaXZhdGUgZ2V0TG9jYXRpb25BYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVSZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIGdldFJlc3BvbnNlPzogUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb25SZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIGdldExvY2F0aW9uUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSB0eXBlYWhlYWRSZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlYWRvbmx5IGFwaV9rZXk6IHN0cmluZyxcclxuICAgIHJlYWRvbmx5IGF1dG9jb21wbGV0ZV91cmw6IHN0cmluZyA9ICdodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2F1dG9jb21wbGV0ZS97cXVlcnl9JyxcclxuICAgIHJlYWRvbmx5IGdldF91cmw6IHN0cmluZyA9ICdodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2dldC97aWR9JyxcclxuICAgIHJlYWRvbmx5IGxvY2F0aW9uX3VybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vbG9jYXRpb24ve3F1ZXJ5fScsXHJcbiAgICByZWFkb25seSBnZXRfbG9jYXRpb25fdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9nZXQtbG9jYXRpb24ve2lkfScsXHJcbiAgICByZWFkb25seSB0eXBlYWhlYWRfdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby90eXBlYWhlYWQve3Rlcm19JyxcclxuICApIHtcclxuICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMubG9jYXRpb25BYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmdldExvY2F0aW9uQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9jYXRpb24oXHJcbiAgICBxdWVyeTogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogUGFydGlhbDxMb2NhdGlvbk9wdGlvbnM+ID0ge30sXHJcbiAgKTogUHJvbWlzZTxSZXN1bHQ8TG9jYXRpb25TdWNjZXNzLCBMb2NhdGlvbkZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkT3B0aW9ucyA9IHtcclxuICAgICAgICBhbGw6IHRydWUsXHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmxvY2F0aW9uX3VybC5yZXBsYWNlKC97cXVlcnl9L2ksIHF1ZXJ5KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFwaV9rZXkpIHtcclxuICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0mYXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmxvY2F0aW9uUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25SZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbkFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5sb2NhdGlvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgc2lnbmFsOiB0aGlzLmxvY2F0aW9uQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tYmluZWRPcHRpb25zKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvblJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5sb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IGpzb24uc3VnZ2VzdGlvbnMgYXMgTG9jYXRpb25TdWdnZXN0aW9uW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvblN1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmxvY2F0aW9uUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IExvY2F0aW9uRmFpbGVkKHRoaXMubG9jYXRpb25SZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgTG9jYXRpb25TdWNjZXNzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbkZhaWxlZCg0MDEsIGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbkZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb25SZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldExvY2F0aW9uKGlkOiBzdHJpbmcpOiBQcm9taXNlPFJlc3VsdDxHZXRMb2NhdGlvblN1Y2Nlc3MsIEdldExvY2F0aW9uRmFpbGVkPj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0X2xvY2F0aW9uX3VybC5yZXBsYWNlKC97aWR9L2ksIGlkKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFwaV9rZXkpIHtcclxuICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0mYXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmdldExvY2F0aW9uUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgc2lnbmFsOiB0aGlzLmdldEFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRSZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGxvYWN0aW9uID0ganNvbiBhcyBMb2NhdGlvbkFkZHJlc3M7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvblN1Y2Nlc3MobG9hY3Rpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvbkZhaWxlZCh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdldExvY2F0aW9uRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEdldExvY2F0aW9uRmFpbGVkKDQwMSwgJ1VuYXV0aG9yaXNlZCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBhc3luYyBhdXRvY29tcGxldGUoXHJcbiAgICBxdWVyeTogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogUGFydGlhbDxBdXRvY29tcGxldGVPcHRpb25zPiA9IHt9LFxyXG4gICk6IFByb21pc2U8UmVzdWx0PEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIEF1dG9jb21wbGV0ZUZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkT3B0aW9ucyA9IHtcclxuICAgICAgICBhbGw6IHRydWUsXHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmF1dG9jb21wbGV0ZV91cmwucmVwbGFjZSgve3F1ZXJ5fS9pLCBxdWVyeSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgc2lnbmFsOiB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbWJpbmVkT3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IGpzb24uc3VnZ2VzdGlvbnMgYXMgU3VnZ2VzdGlvbltdO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlU3VjY2VzcyhzdWdnZXN0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCh0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVTdWNjZXNzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSwgJ1VuYXV0aG9yaXNlZCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldChpZDogc3RyaW5nKTogUHJvbWlzZTxSZXN1bHQ8R2V0U3VjY2VzcywgR2V0RmFpbGVkPj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0X3VybC5yZXBsYWNlKC97aWR9L2ksIGlkKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFwaV9rZXkpIHtcclxuICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0mYXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgIHNpZ25hbDogdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0ganNvbiBhcyBBdXRvY29tcGxldGVBZGRyZXNzO1xyXG4gICAgICAgIHJldHVybiBuZXcgR2V0U3VjY2VzcyhhZGRyZXNzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzLCBqc29uLk1lc3NhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmaW5kKHBvc3Rjb2RlOiBzdHJpbmcpOiBQcm9taXNlPFJlc3VsdDxGaW5kU3VjY2VzcywgRmluZEZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZmluZC8ke3Bvc3Rjb2RlfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fSZleHBhbmQ9dHJ1ZWApO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGpzb24gYXMgRmluZEFkZHJlc3NlcztcclxuICAgICAgICByZXR1cm4gbmV3IEZpbmRTdWNjZXNzKGFkZHJlc3Nlcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKHJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHR5cGVhaGVhZChcclxuICAgIHRlcm06IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8VHlwZWFoZWFkT3B0aW9ucz4gPSB7fSxcclxuICApOiBQcm9taXNlPFJlc3VsdDxUeXBlYWhlYWRTdWNjZXNzLCBUeXBlYWhlYWRGYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gdGhpcy50eXBlYWhlYWRfdXJsLnJlcGxhY2UoL3t0ZXJtfS9pLCB0ZXJtKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFwaV9rZXkpIHtcclxuICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0mYXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBzaWduYWw6IHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkUmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0ganNvbiBhcyBzdHJpbmdbXTtcclxuICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZFN1Y2Nlc3MocmVzdWx0cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMudHlwZWFoZWFkUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSwgJ1VuYXV0aG9yaXNlZCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ2xpZW50LCBcclxuICBHZXRGYWlsZWQsXHJcbiAgR2V0TG9jYXRpb25GYWlsZWQsIFxyXG4gIFJlc3VsdCxcclxuICBBdXRvY29tcGxldGVPcHRpb25zLFxyXG4gIExvY2F0aW9uT3B0aW9ucyxcclxuICBBdXRvY29tcGxldGVGaWx0ZXIsXHJcbiAgTG9jYXRpb25GaWx0ZXIsXHJcbiAgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzLFxyXG4gIExvY2F0aW9uRmlsdGVyUmFkaXVzLFxyXG4gIFN1Z2dlc3Rpb24sXHJcbiAgTG9jYXRpb25TdWdnZXN0aW9uLFxyXG4gIEF1dG9jb21wbGV0ZVN1Y2Nlc3MsXHJcbiAgTG9jYXRpb25TdWNjZXNzLFxyXG4gIEF1dG9jb21wbGV0ZUFkZHJlc3MsXHJcbiAgTG9jYXRpb25BZGRyZXNzLFxyXG4gIEdldFN1Y2Nlc3MsXHJcbiAgR2V0TG9jYXRpb25TdWNjZXNzLFxyXG4gIEF1dG9jb21wbGV0ZUZhaWxlZCwgXHJcbiAgTG9jYXRpb25GYWlsZWQsXHJcbiAgRmluZEFkZHJlc3NlcyxcclxuICBGaW5kU3VjY2VzcywgRmluZEZhaWxlZCwgVHlwZWFoZWFkRmFpbGVkLFxyXG4gIFR5cGVhaGVhZFN1Y2Nlc3MsIFR5cGVhaGVhZE9wdGlvbnMsXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUs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Q0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0FBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7QUFDakUsZ0JBQWdCO0FBQ2hCLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO0FBQ2hJLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQzFHLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FB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

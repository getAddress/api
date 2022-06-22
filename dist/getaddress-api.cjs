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

var Suggestion = /** @class */ (function () {
    function Suggestion(address, url, id) {
        this.address = address;
        this.url = url;
        this.id = id;
    }
    return Suggestion;
}());
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
var AutocompleteOptions = /** @class */ (function () {
    function AutocompleteOptions() {
        this.all = undefined;
        this.template = undefined;
        this.top = undefined;
        this.filter = undefined;
    }
    AutocompleteOptions.Default = function () {
        var options = new AutocompleteOptions();
        options.all = true;
        return options;
    };
    return AutocompleteOptions;
}());
var TypeaheadOptions = /** @class */ (function () {
    function TypeaheadOptions() {
        this.top = undefined;
        this.search = undefined;
    }
    TypeaheadOptions.Default = function () {
        var options = new TypeaheadOptions();
        return options;
    };
    return TypeaheadOptions;
}());
var AutocompleteFilter = /** @class */ (function () {
    function AutocompleteFilter() {
        this.county = undefined;
        this.locality = undefined;
        this.district = undefined;
        this.town_or_city = undefined;
        this.postcode = undefined;
        this.residential = undefined;
        this.radius = undefined;
    }
    return AutocompleteFilter;
}());
var AutocompleteFilterRadius = /** @class */ (function () {
    function AutocompleteFilterRadius() {
        this.km = undefined;
        this.longitude = undefined;
        this.latitude = undefined;
    }
    return AutocompleteFilterRadius;
}());
var Address = /** @class */ (function () {
    function Address(formatted_address, thoroughfare, building_name, sub_building_name, sub_building_number, building_number, line_1, line_2, line_3, line_4, locality, town_or_city, county, district, country) {
        this.formatted_address = formatted_address;
        this.thoroughfare = thoroughfare;
        this.building_name = building_name;
        this.sub_building_name = sub_building_name;
        this.sub_building_number = sub_building_number;
        this.building_number = building_number;
        this.line_1 = line_1;
        this.line_2 = line_2;
        this.line_3 = line_3;
        this.line_4 = line_4;
        this.locality = locality;
        this.town_or_city = town_or_city;
        this.county = county;
        this.district = district;
        this.country = country;
    }
    return Address;
}());
var AutocompleteAddress = /** @class */ (function (_super) {
    __extends(AutocompleteAddress, _super);
    function AutocompleteAddress(postcode, latitude, longitude, formatted_address, thoroughfare, building_name, building_number, sub_building_name, sub_building_number, line_1, line_2, line_3, line_4, locality, town_or_city, county, district, country, residential) {
        var _this = _super.call(this, formatted_address, thoroughfare, building_name, building_number, sub_building_name, sub_building_number, line_1, line_2, line_3, line_3, line_4, town_or_city, county, district, country) || this;
        _this.postcode = postcode;
        _this.latitude = latitude;
        _this.longitude = longitude;
        _this.formatted_address = formatted_address;
        _this.thoroughfare = thoroughfare;
        _this.building_name = building_name;
        _this.building_number = building_number;
        _this.sub_building_name = sub_building_name;
        _this.sub_building_number = sub_building_number;
        _this.line_1 = line_1;
        _this.line_2 = line_2;
        _this.line_3 = line_3;
        _this.line_4 = line_4;
        _this.locality = locality;
        _this.town_or_city = town_or_city;
        _this.county = county;
        _this.district = district;
        _this.country = country;
        _this.residential = residential;
        return _this;
    }
    return AutocompleteAddress;
}(Address));
var FindAddresses = /** @class */ (function () {
    function FindAddresses(postcode, latitude, longitude, addresses) {
        this.postcode = postcode;
        this.latitude = latitude;
        this.longitude = longitude;
        this.addresses = addresses;
    }
    return FindAddresses;
}());
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
    function Client(api_key, autocomplete_url, get_url, typeahead_url) {
        if (autocomplete_url === void 0) { autocomplete_url = "https://api.getaddress.io/autocomplete/{query}"; }
        if (get_url === void 0) { get_url = "https://api.getaddress.io/get/{id}"; }
        if (typeahead_url === void 0) { typeahead_url = "https://api.getaddress.io/typeahead/{term}"; }
        this.api_key = api_key;
        this.autocomplete_url = autocomplete_url;
        this.get_url = get_url;
        this.typeahead_url = typeahead_url;
        this.autocompleteResponse = undefined;
        this.getResponse = undefined;
        this.typeaheadResponse = undefined;
        this.autocompleteAbortController = new AbortController();
        this.getAbortController = new AbortController();
        this.typeaheadAbortController = new AbortController();
    }
    Client.prototype.autocomplete = function (query, options) {
        if (options === void 0) { options = AutocompleteOptions.Default(); }
        return __awaiter(this, void 0, void 0, function () {
            var url, _a, json_1, suggestions, json, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        options = Object.assign(AutocompleteOptions.Default(), options);
                        url = this.autocomplete_url.replace(/{query}/i, query);
                        if (this.api_key) {
                            if (url.includes('?')) {
                                url = url + '&api-key=' + this.api_key;
                            }
                            else {
                                url = url + '?api-key=' + this.api_key;
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
                                body: JSON.stringify(options)
                            })];
                    case 1:
                        _a.autocompleteResponse = _b.sent();
                        if (!(this.autocompleteResponse.status == 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.autocompleteResponse.json()];
                    case 2:
                        json_1 = _b.sent();
                        suggestions = json_1.suggestions;
                        return [2 /*return*/, new AutocompleteSuccess(suggestions)];
                    case 3: return [4 /*yield*/, this.autocompleteResponse.json()];
                    case 4:
                        json = _b.sent();
                        return [2 /*return*/, new AutocompleteFailed(this.autocompleteResponse.status, json.Message)];
                    case 5:
                        err_1 = _b.sent();
                        if (err_1 instanceof Error) {
                            if (err_1.name === 'AbortError') {
                                return [2 /*return*/, new AutocompleteSuccess([])];
                            }
                            return [2 /*return*/, new AutocompleteFailed(401, err_1.message)];
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
            var url, _a, json_2, address, json, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        url = this.get_url.replace(/{id}/i, id);
                        if (this.api_key) {
                            if (url.includes('?')) {
                                url = url + '&api-key=' + this.api_key;
                            }
                            else {
                                url = url + '?api-key=' + this.api_key;
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
                        if (!(this.getResponse.status == 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getResponse.json()];
                    case 2:
                        json_2 = _b.sent();
                        address = json_2;
                        return [2 /*return*/, new GetSuccess(address)];
                    case 3: return [4 /*yield*/, this.getResponse.json()];
                    case 4:
                        json = _b.sent();
                        return [2 /*return*/, new GetFailed(this.getResponse.status, json.Message)];
                    case 5:
                        err_2 = _b.sent();
                        if (err_2 instanceof Error) {
                            return [2 /*return*/, new GetFailed(401, err_2.message)];
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
            var response, json_3, addresses, json, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("https://api.getaddress.io/find/".concat(postcode, "?api-key=").concat(this.api_key, "&expand=true"))];
                    case 1:
                        response = _a.sent();
                        if (!(response.status == 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json_3 = _a.sent();
                        addresses = json_3;
                        return [2 /*return*/, new FindSuccess(addresses)];
                    case 3: return [4 /*yield*/, response.json()];
                    case 4:
                        json = _a.sent();
                        return [2 /*return*/, new FindFailed(response.status, json.Message)];
                    case 5:
                        err_3 = _a.sent();
                        if (err_3 instanceof Error) {
                            return [2 /*return*/, new FindFailed(401, err_3.message)];
                        }
                        return [2 /*return*/, new FindFailed(401, 'Unauthorised')];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.typeahead = function (term, options) {
        if (options === void 0) { options = TypeaheadOptions.Default(); }
        return __awaiter(this, void 0, void 0, function () {
            var url, _a, json_4, results, json, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 7]);
                        options = Object.assign(TypeaheadOptions.Default(), options);
                        url = this.typeahead_url.replace(/{term}/i, term);
                        if (this.api_key) {
                            if (url.includes('?')) {
                                url = url + '&api-key=' + this.api_key;
                            }
                            else {
                                url = url + '?api-key=' + this.api_key;
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
                        if (!(this.typeaheadResponse.status == 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.typeaheadResponse.json()];
                    case 2:
                        json_4 = _b.sent();
                        results = json_4;
                        return [2 /*return*/, new TypeaheadSuccess(results)];
                    case 3: return [4 /*yield*/, this.typeaheadResponse.json()];
                    case 4:
                        json = _b.sent();
                        return [2 /*return*/, new TypeaheadFailed(this.typeaheadResponse.status, json.Message)];
                    case 5:
                        err_4 = _b.sent();
                        if (err_4 instanceof Error) {
                            if (err_4.name === 'AbortError') {
                                return [2 /*return*/, new TypeaheadSuccess([])];
                            }
                            return [2 /*return*/, new TypeaheadFailed(401, err_4.message)];
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

exports.AutocompleteAddress = AutocompleteAddress;
exports.AutocompleteFailed = AutocompleteFailed;
exports.AutocompleteFilter = AutocompleteFilter;
exports.AutocompleteFilterRadius = AutocompleteFilterRadius;
exports.AutocompleteOptions = AutocompleteOptions;
exports.AutocompleteSuccess = AutocompleteSuccess;
exports.FindAddresses = FindAddresses;
exports.FindFailed = FindFailed;
exports.FindSuccess = FindSuccess;
exports.GetFailed = GetFailed;
exports.GetSuccess = GetSuccess;
exports.Result = Result;
exports.Suggestion = Suggestion;
exports.TypeaheadFailed = TypeaheadFailed;
exports.TypeaheadOptions = TypeaheadOptions;
exports.TypeaheadSuccess = TypeaheadSuccess;
exports["default"] = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkuY2pzIiwic291cmNlcyI6WyIuLi9zcmMvVHlwZXMudHMiLCIuLi9zcmMvQ2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdWdnZXN0aW9uIFxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3M6c3RyaW5nLCByZWFkb25seSB1cmw6c3RyaW5nLCByZWFkb25seSBpZDpzdHJpbmcpIFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVzdWx0PFMsRj5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBpc1N1Y2Nlc3M6Ym9vbGVhbil7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFic3RyYWN0IHRvU3VjY2VzcygpOlM7XG4gICAgYWJzdHJhY3QgdG9GYWlsZWQoKTpGO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VjY2VzczxTLEY+IGV4dGVuZHMgUmVzdWx0PFMsRj5cbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBzdXBlcih0cnVlKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCB0b1N1Y2Nlc3MoKTpTO1xuICAgIGFic3RyYWN0IHRvRmFpbGVkKCk6Rjtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEF1dG9jb21wbGV0ZVN1Y2Nlc3MsQXV0b2NvbXBsZXRlRmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN1Z2dlc3Rpb25zOlN1Z2dlc3Rpb25bXSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9GYWlsZWQoKTogQXV0b2NvbXBsZXRlRmFpbGVkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxHZXRTdWNjZXNzLCBHZXRGYWlsZWQ+XG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgYWRkcmVzczpBdXRvY29tcGxldGVBZGRyZXNzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogR2V0U3VjY2VzcyB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRmFpbGVkIGV4dGVuZHMgUmVzdWx0PEF1dG9jb21wbGV0ZVN1Y2Nlc3MsQXV0b2NvbXBsZXRlRmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czpudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHRvU3VjY2VzcygpOiBBdXRvY29tcGxldGVTdWNjZXNzIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XG4gICAgfVxuICAgIHRvRmFpbGVkKCk6IEF1dG9jb21wbGV0ZUZhaWxlZCB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldEZhaWxlZCBleHRlbmRzIFJlc3VsdDxHZXRTdWNjZXNzLEdldEZhaWxlZD5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6bnVtYmVyLCByZWFkb25seSBtZXNzYWdlOnN0cmluZylcbiAgICB7XG4gICAgICAgIHN1cGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogR2V0U3VjY2VzcyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPcHRpb25zXG57XG4gICAgYWxsOmJvb2xlYW4gPSB1bmRlZmluZWQ7XG4gICAgdGVtcGxhdGU6c3RyaW5nID0gdW5kZWZpbmVkO1xuICAgIHRvcDpudW1iZXIgPSB1bmRlZmluZWQ7XG4gICAgZmlsdGVyOlBhcnRpYWw8QXV0b2NvbXBsZXRlRmlsdGVyPiA9IHVuZGVmaW5lZDtcbiAgIFxuICAgIHN0YXRpYyBEZWZhdWx0KCk6QXV0b2NvbXBsZXRlT3B0aW9uc1xuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgQXV0b2NvbXBsZXRlT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLmFsbCA9IHRydWU7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE9wdGlvbnNcbntcbiAgICBcbiAgICB0b3A6bnVtYmVyID0gdW5kZWZpbmVkO1xuICAgIHNlYXJjaDpzdHJpbmdbXSA9IHVuZGVmaW5lZDtcbiAgIFxuICAgIHN0YXRpYyBEZWZhdWx0KCk6VHlwZWFoZWFkT3B0aW9uc1xuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgVHlwZWFoZWFkT3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGaWx0ZXJcbntcbiAgICBjb3VudHk6c3RyaW5nID0gdW5kZWZpbmVkO1xuICAgIGxvY2FsaXR5OnN0cmluZz0gdW5kZWZpbmVkO1xuICAgIGRpc3RyaWN0OnN0cmluZz0gdW5kZWZpbmVkO1xuICAgIHRvd25fb3JfY2l0eTpzdHJpbmc9dW5kZWZpbmVkO1xuICAgIHBvc3Rjb2RlOnN0cmluZz11bmRlZmluZWQ7XG4gICAgcmVzaWRlbnRpYWw6Ym9vbGVhbj11bmRlZmluZWQ7XG4gICAgcmFkaXVzOkF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cz11bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXNcbntcbiAgICBrbTpudW1iZXI9dW5kZWZpbmVkO1xuICAgIGxvbmdpdHVkZTpudW1iZXI9dW5kZWZpbmVkO1xuICAgIGxhdGl0dWRlOm51bWJlcj11bmRlZmluZWQ7XG59XG5cblxuZXhwb3J0IGNsYXNzIEFkZHJlc3NcbntcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcmVhZG9ubHkgZm9ybWF0dGVkX2FkZHJlc3M6c3RyaW5nW10sXG4gICAgICAgIHJlYWRvbmx5IHRob3JvdWdoZmFyZTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGJ1aWxkaW5nX25hbWU6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBzdWJfYnVpbGRpbmdfbmFtZTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IHN1Yl9idWlsZGluZ19udW1iZXI6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBidWlsZGluZ19udW1iZXI6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsaW5lXzE6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsaW5lXzI6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsaW5lXzM6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsaW5lXzQ6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsb2NhbGl0eTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IHRvd25fb3JfY2l0eTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGNvdW50eTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGRpc3RyaWN0OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgY291bnRyeTpzdHJpbmcpXG4gICAge1xuXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUFkZHJlc3MgZXh0ZW5kcyBBZGRyZXNze1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWFkb25seSBwb3N0Y29kZTpzdHJpbmcsIFxuICAgICAgICByZWFkb25seSBsYXRpdHVkZTpudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IGxvbmdpdHVkZTpudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IGZvcm1hdHRlZF9hZGRyZXNzOnN0cmluZ1tdLFxuICAgICAgICByZWFkb25seSB0aG9yb3VnaGZhcmU6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBidWlsZGluZ19uYW1lOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgYnVpbGRpbmdfbnVtYmVyOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgc3ViX2J1aWxkaW5nX25hbWU6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBzdWJfYnVpbGRpbmdfbnVtYmVyOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbGluZV8xOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbGluZV8yOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbGluZV8zOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbGluZV80OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbG9jYWxpdHk6c3RyaW5nLFxuICAgICAgICByZWFkb25seSB0b3duX29yX2NpdHk6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBjb3VudHk6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBkaXN0cmljdDpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGNvdW50cnk6c3RyaW5nLFxuICAgICAgICByZWFkb25seSByZXNpZGVudGlhbDpib29sZWFuKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZm9ybWF0dGVkX2FkZHJlc3MsdGhvcm91Z2hmYXJlLFxuICAgICAgICAgICAgYnVpbGRpbmdfbmFtZSxidWlsZGluZ19udW1iZXIsXG4gICAgICAgICAgICBzdWJfYnVpbGRpbmdfbmFtZSxzdWJfYnVpbGRpbmdfbnVtYmVyLFxuICAgICAgICAgICAgbGluZV8xLGxpbmVfMixsaW5lXzMsbGluZV8zLGxpbmVfNCxcbiAgICAgICAgICAgIHRvd25fb3JfY2l0eSxjb3VudHksZGlzdHJpY3QsY291bnRyeSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZEFkZHJlc3Nlc1xue1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWFkb25seSBwb3N0Y29kZTpzdHJpbmcsIFxuICAgICAgICByZWFkb25seSBsYXRpdHVkZTpudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IGxvbmdpdHVkZTpudW1iZXIsXG4gICAgICAgIHJlYWRvbmx5IGFkZHJlc3NlczpBZGRyZXNzW10pe1xuXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEZpbmRTdWNjZXNzLEZpbmRGYWlsZWQ+XG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgYWRkcmVzc2VzOkZpbmRBZGRyZXNzZXMpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHRvU3VjY2VzcygpOiBGaW5kU3VjY2VzcyB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBGaW5kRmFpbGVkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kRmFpbGVkIGV4dGVuZHMgUmVzdWx0PEZpbmRTdWNjZXNzLEZpbmRGYWlsZWQ+XG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOm51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTpzdHJpbmcpXG4gICAge1xuICAgICAgICBzdXBlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgdG9TdWNjZXNzKCk6IEZpbmRTdWNjZXNzIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcbiAgICB9XG4gICAgdG9GYWlsZWQoKTogRmluZEZhaWxlZCB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPFR5cGVhaGVhZFN1Y2Nlc3MsVHlwZWFoZWFkRmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJlc3VsdHM6c3RyaW5nW10pXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHRvU3VjY2VzcygpOiBUeXBlYWhlYWRTdWNjZXNzIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkRmFpbGVkIGV4dGVuZHMgUmVzdWx0PFR5cGVhaGVhZFN1Y2Nlc3MsVHlwZWFoZWFkRmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czpudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHRvU3VjY2VzcygpOiBUeXBlYWhlYWRTdWNjZXNzIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcbiAgICB9XG4gICAgdG9GYWlsZWQoKTogVHlwZWFoZWFkRmFpbGVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCB7R2V0RmFpbGVkLCBSZXN1bHQsQXV0b2NvbXBsZXRlT3B0aW9ucywgU3VnZ2VzdGlvbixcbiAgICBBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVBZGRyZXNzLEdldFN1Y2Nlc3MsIFxuICAgIEF1dG9jb21wbGV0ZUZhaWxlZCxGaW5kQWRkcmVzc2VzLEZpbmRTdWNjZXNzLEZpbmRGYWlsZWQsIFxuICAgIEF1dG9jb21wbGV0ZUZpbHRlciwgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzLCBUeXBlYWhlYWRTdWNjZXNzLCBcbiAgICBUeXBlYWhlYWRGYWlsZWQsVHlwZWFoZWFkT3B0aW9uc30gZnJvbSBcIi4vVHlwZXNcIlxuICAgIFxuY2xhc3MgQ2xpZW50XG57XG4gICAgcHJpdmF0ZSAgYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyOkFib3J0Q29udHJvbGxlcjtcbiAgICBwcml2YXRlICBnZXRBYm9ydENvbnRyb2xsZXI6QWJvcnRDb250cm9sbGVyO1xuICAgIHByaXZhdGUgIHR5cGVhaGVhZEFib3J0Q29udHJvbGxlcjpBYm9ydENvbnRyb2xsZXI7XG4gICAgcHJpdmF0ZSBhdXRvY29tcGxldGVSZXNwb25zZT86UmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBnZXRSZXNwb25zZT86UmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSB0eXBlYWhlYWRSZXNwb25zZT86UmVzcG9uc2UgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBhcGlfa2V5OnN0cmluZywgXG4gICAgICAgIHJlYWRvbmx5IGF1dG9jb21wbGV0ZV91cmw6c3RyaW5nID0gXCJodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2F1dG9jb21wbGV0ZS97cXVlcnl9XCIsXG4gICAgICAgIHJlYWRvbmx5IGdldF91cmw6c3RyaW5nID0gXCJodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2dldC97aWR9XCIsXG4gICAgICAgIHJlYWRvbmx5IHR5cGVhaGVhZF91cmw6c3RyaW5nID0gXCJodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL3R5cGVhaGVhZC97dGVybX1cIilcbiAgICB7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIH1cblxuICAgIGFzeW5jIGF1dG9jb21wbGV0ZShxdWVyeTpzdHJpbmcsIG9wdGlvbnM6UGFydGlhbDxBdXRvY29tcGxldGVPcHRpb25zPiA9IEF1dG9jb21wbGV0ZU9wdGlvbnMuRGVmYXVsdCgpKTpQcm9taXNlPFJlc3VsdDxBdXRvY29tcGxldGVTdWNjZXNzLEF1dG9jb21wbGV0ZUZhaWxlZD4+IFxuICAgIHtcbiAgICAgICAgdHJ5XG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKEF1dG9jb21wbGV0ZU9wdGlvbnMuRGVmYXVsdCgpLG9wdGlvbnMpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5hdXRvY29tcGxldGVfdXJsLnJlcGxhY2UoL3txdWVyeX0vaSxxdWVyeSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYXBpX2tleSl7XG4gICAgICAgICAgICAgICAgaWYodXJsLmluY2x1ZGVzKCc/Jykpe1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICcmYXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJz9hcGkta2V5PScrIHRoaXMuYXBpX2tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JywgXG4gICAgICAgICAgICAgICAgc2lnbmFsOiB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5zdGF0dXMgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSAganNvbi5zdWdnZXN0aW9ucyBhcyBTdWdnZXN0aW9uW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVTdWNjZXNzKHN1Z2dlc3Rpb25zKTtcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCh0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cyxqc29uLk1lc3NhZ2UpO1xuICAgICAgICAgfVxuICAgICAgICAgY2F0Y2goZXJyOnVua25vd24pXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVTdWNjZXNzKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQoNDAxLGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQoNDAxLCdVbmF1dGhvcmlzZWQnKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGZpbmFsbHkgXG4gICAgICAgICB7XG4gICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyBnZXQoaWQ6c3RyaW5nKTpQcm9taXNlPFJlc3VsdDxHZXRTdWNjZXNzLEdldEZhaWxlZD4+IFxuICAgIHtcbiAgICAgICAgdHJ5XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmdldF91cmwucmVwbGFjZSgve2lkfS9pLGlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5hcGlfa2V5KXtcbiAgICAgICAgICAgICAgICBpZih1cmwuaW5jbHVkZXMoJz8nKSl7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJyZhcGkta2V5PScrIHRoaXMuYXBpX2tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnP2FwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5nZXRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXI9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgaWYodGhpcy5nZXRSZXNwb25zZS5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSAganNvbiBhcyBBdXRvY29tcGxldGVBZGRyZXNzO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR2V0U3VjY2VzcyhhZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cyxqc29uLk1lc3NhZ2UpO1xuICAgICAgICAgfVxuICAgICAgICAgY2F0Y2goZXJyOnVua25vd24pXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsJ1VuYXV0aG9yaXNlZCcpO1xuICAgICAgICAgfVxuICAgICAgICAgZmluYWxseXtcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZChwb3N0Y29kZTpzdHJpbmcpOlByb21pc2U8UmVzdWx0PEZpbmRTdWNjZXNzLEZpbmRGYWlsZWQ+PiBcbiAgICB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9maW5kLyR7cG9zdGNvZGV9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9JmV4cGFuZD10cnVlYCk7XG4gICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSAganNvbiBhcyBGaW5kQWRkcmVzc2VzO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmluZFN1Y2Nlc3MoYWRkcmVzc2VzKTtcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKHJlc3BvbnNlLnN0YXR1cyxqc29uLk1lc3NhZ2UpO1xuICAgICAgICAgfVxuICAgICAgICAgY2F0Y2goZXJyOnVua25vd24pXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQoNDAxLGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKDQwMSwnVW5hdXRob3Jpc2VkJyk7XG4gICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyB0eXBlYWhlYWQodGVybTpzdHJpbmcsIG9wdGlvbnM6VHlwZWFoZWFkT3B0aW9ucyA9IFR5cGVhaGVhZE9wdGlvbnMuRGVmYXVsdCgpKTpQcm9taXNlPFJlc3VsdDxUeXBlYWhlYWRTdWNjZXNzLFR5cGVhaGVhZEZhaWxlZD4+IFxuICAgIHtcbiAgICAgICAgdHJ5XG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFR5cGVhaGVhZE9wdGlvbnMuRGVmYXVsdCgpLG9wdGlvbnMpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy50eXBlYWhlYWRfdXJsLnJlcGxhY2UoL3t0ZXJtfS9pLHRlcm0pO1xuXG4gICAgICAgICAgICBpZih0aGlzLmFwaV9rZXkpe1xuICAgICAgICAgICAgICAgIGlmKHVybC5pbmNsdWRlcygnPycpKXtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnJmFwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICc/YXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnR5cGVhaGVhZFJlc3BvbnNlICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsIFxuICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucylcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmKHRoaXMudHlwZWFoZWFkUmVzcG9uc2Uuc3RhdHVzID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMudHlwZWFoZWFkUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSAganNvbiBhcyBzdHJpbmdbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZFN1Y2Nlc3MocmVzdWx0cyk7XG4gICAgICAgICAgICB9XG4gXG4gICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMudHlwZWFoZWFkUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQodGhpcy50eXBlYWhlYWRSZXNwb25zZS5zdGF0dXMsanNvbi5NZXNzYWdlKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGNhdGNoKGVycjp1bmtub3duKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3IpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkU3VjY2VzcyhbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSxlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSwnVW5hdXRob3Jpc2VkJyk7XG4gICAgICAgICB9XG4gICAgICAgICBmaW5hbGx5IFxuICAgICAgICAge1xuICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQge0NsaWVudCBhcyBkZWZhdWx0LEdldEZhaWxlZCwgUmVzdWx0LFxuICAgIEF1dG9jb21wbGV0ZU9wdGlvbnMsIFxuICAgIEF1dG9jb21wbGV0ZUZpbHRlcixcbiAgICBBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXMsXG4gICAgU3VnZ2VzdGlvbixcbiAgICBBdXRvY29tcGxldGVTdWNjZXNzLCBcbiAgICBBdXRvY29tcGxldGVBZGRyZXNzLFxuICAgIEdldFN1Y2Nlc3MsIFxuICAgIEF1dG9jb21wbGV0ZUZhaWxlZCxGaW5kQWRkcmVzc2VzLFxuICAgIEZpbmRTdWNjZXNzLEZpbmRGYWlsZWQsVHlwZWFoZWFkRmFpbGVkLFxuICAgIFR5cGVhaGVhZFN1Y2Nlc3MsVHlwZWFoZWFkT3B0aW9ucyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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

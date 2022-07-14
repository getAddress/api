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

export { AutocompleteAddress, AutocompleteFailed, AutocompleteFilter, AutocompleteFilterRadius, AutocompleteOptions, AutocompleteSuccess, FindAddresses, FindFailed, FindSuccess, GetFailed, GetSuccess, Result, Suggestion, TypeaheadFailed, TypeaheadOptions, TypeaheadSuccess, Client as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9zcmMvVHlwZXMudHMiLCIuLi9zcmMvQ2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFN1Z2dlc3Rpb24gXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3M6c3RyaW5nLCByZWFkb25seSB1cmw6c3RyaW5nLCByZWFkb25seSBpZDpzdHJpbmcpIFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVzdWx0PFMsRj5cclxue1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgaXNTdWNjZXNzOmJvb2xlYW4pe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHRvU3VjY2VzcygpOlM7XHJcbiAgICBhYnN0cmFjdCB0b0ZhaWxlZCgpOkY7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWNjZXNzPFMsRj4gZXh0ZW5kcyBSZXN1bHQ8UyxGPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgdG9TdWNjZXNzKCk6UztcclxuICAgIGFic3RyYWN0IHRvRmFpbGVkKCk6RjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEF1dG9jb21wbGV0ZVN1Y2Nlc3MsQXV0b2NvbXBsZXRlRmFpbGVkPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdWdnZXN0aW9uczpTdWdnZXN0aW9uW10pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N1Y2Nlc3MoKTogQXV0b2NvbXBsZXRlU3VjY2VzcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlkIG5vdCBmYWlsJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxHZXRTdWNjZXNzLCBHZXRGYWlsZWQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3M6QXV0b2NvbXBsZXRlQWRkcmVzcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3VjY2VzcygpOiBHZXRTdWNjZXNzIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRvRmFpbGVkKCk6IEdldEZhaWxlZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8QXV0b2NvbXBsZXRlU3VjY2VzcyxBdXRvY29tcGxldGVGYWlsZWQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czpudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N1Y2Nlc3MoKTogQXV0b2NvbXBsZXRlU3VjY2VzcyB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgICB9XHJcbiAgICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RmFpbGVkIGV4dGVuZHMgUmVzdWx0PEdldFN1Y2Nlc3MsR2V0RmFpbGVkPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6bnVtYmVyLCByZWFkb25seSBtZXNzYWdlOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdWNjZXNzKCk6IEdldFN1Y2Nlc3Mge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xyXG4gICAgfVxyXG4gICAgdG9GYWlsZWQoKTogR2V0RmFpbGVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU9wdGlvbnNcclxue1xyXG4gICAgYWxsOmJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcbiAgICB0ZW1wbGF0ZTpzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgICB0b3A6bnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgZmlsdGVyOlBhcnRpYWw8QXV0b2NvbXBsZXRlRmlsdGVyPiA9IHVuZGVmaW5lZDtcclxuICAgIGZ1enp5OiB0cnVlO1xyXG5cclxuICAgIHN0YXRpYyBEZWZhdWx0KCk6QXV0b2NvbXBsZXRlT3B0aW9uc1xyXG4gICAge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IEF1dG9jb21wbGV0ZU9wdGlvbnMoKTtcclxuICAgICAgICBvcHRpb25zLmFsbCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRPcHRpb25zXHJcbntcclxuICAgIFxyXG4gICAgdG9wOm51bWJlciA9IHVuZGVmaW5lZDtcclxuICAgIHNlYXJjaDpzdHJpbmdbXSA9IHVuZGVmaW5lZDtcclxuICAgXHJcbiAgICBzdGF0aWMgRGVmYXVsdCgpOlR5cGVhaGVhZE9wdGlvbnNcclxuICAgIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBUeXBlYWhlYWRPcHRpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGaWx0ZXJcclxue1xyXG4gICAgY291bnR5OnN0cmluZyA9IHVuZGVmaW5lZDtcclxuICAgIGxvY2FsaXR5OnN0cmluZz0gdW5kZWZpbmVkO1xyXG4gICAgZGlzdHJpY3Q6c3RyaW5nPSB1bmRlZmluZWQ7XHJcbiAgICB0b3duX29yX2NpdHk6c3RyaW5nPXVuZGVmaW5lZDtcclxuICAgIHBvc3Rjb2RlOnN0cmluZz11bmRlZmluZWQ7XHJcbiAgICByZXNpZGVudGlhbDpib29sZWFuPXVuZGVmaW5lZDtcclxuICAgIHJhZGl1czpBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXM9dW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzXHJcbntcclxuICAgIGttOm51bWJlcj11bmRlZmluZWQ7XHJcbiAgICBsb25naXR1ZGU6bnVtYmVyPXVuZGVmaW5lZDtcclxuICAgIGxhdGl0dWRlOm51bWJlcj11bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1xyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSBmb3JtYXR0ZWRfYWRkcmVzczpzdHJpbmdbXSxcclxuICAgICAgICByZWFkb25seSB0aG9yb3VnaGZhcmU6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGJ1aWxkaW5nX25hbWU6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHN1Yl9idWlsZGluZ19uYW1lOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBzdWJfYnVpbGRpbmdfbnVtYmVyOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBidWlsZGluZ19udW1iZXI6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMTpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgbGluZV8yOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBsaW5lXzM6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfNDpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgbG9jYWxpdHk6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHRvd25fb3JfY2l0eTpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgY291bnR5OnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBkaXN0cmljdDpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgY291bnRyeTpzdHJpbmcpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVBZGRyZXNzIGV4dGVuZHMgQWRkcmVzc3tcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgcG9zdGNvZGU6c3RyaW5nLCBcclxuICAgICAgICByZWFkb25seSBsYXRpdHVkZTpudW1iZXIsXHJcbiAgICAgICAgcmVhZG9ubHkgbG9uZ2l0dWRlOm51bWJlcixcclxuICAgICAgICByZWFkb25seSBmb3JtYXR0ZWRfYWRkcmVzczpzdHJpbmdbXSxcclxuICAgICAgICByZWFkb25seSB0aG9yb3VnaGZhcmU6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGJ1aWxkaW5nX25hbWU6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGJ1aWxkaW5nX251bWJlcjpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgc3ViX2J1aWxkaW5nX25hbWU6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHN1Yl9idWlsZGluZ19udW1iZXI6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMTpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgbGluZV8yOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBsaW5lXzM6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfNDpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgbG9jYWxpdHk6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHRvd25fb3JfY2l0eTpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgY291bnR5OnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBkaXN0cmljdDpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgY291bnRyeTpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgcmVzaWRlbnRpYWw6Ym9vbGVhbilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihmb3JtYXR0ZWRfYWRkcmVzcyx0aG9yb3VnaGZhcmUsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nX25hbWUsYnVpbGRpbmdfbnVtYmVyLFxyXG4gICAgICAgICAgICBzdWJfYnVpbGRpbmdfbmFtZSxzdWJfYnVpbGRpbmdfbnVtYmVyLFxyXG4gICAgICAgICAgICBsaW5lXzEsbGluZV8yLGxpbmVfMyxsaW5lXzMsbGluZV80LFxyXG4gICAgICAgICAgICB0b3duX29yX2NpdHksY291bnR5LGRpc3RyaWN0LGNvdW50cnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmluZEFkZHJlc3Nlc1xyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSBwb3N0Y29kZTpzdHJpbmcsIFxyXG4gICAgICAgIHJlYWRvbmx5IGxhdGl0dWRlOm51bWJlcixcclxuICAgICAgICByZWFkb25seSBsb25naXR1ZGU6bnVtYmVyLFxyXG4gICAgICAgIHJlYWRvbmx5IGFkZHJlc3NlczpBZGRyZXNzW10pe1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxGaW5kU3VjY2VzcyxGaW5kRmFpbGVkPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBhZGRyZXNzZXM6RmluZEFkZHJlc3NlcylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3VjY2VzcygpOiBGaW5kU3VjY2VzcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0b0ZhaWxlZCgpOiBGaW5kRmFpbGVkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmluZEZhaWxlZCBleHRlbmRzIFJlc3VsdDxGaW5kU3VjY2VzcyxGaW5kRmFpbGVkPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6bnVtYmVyLCByZWFkb25seSBtZXNzYWdlOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdWNjZXNzKCk6IEZpbmRTdWNjZXNzIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gICAgfVxyXG4gICAgdG9GYWlsZWQoKTogRmluZEZhaWxlZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxUeXBlYWhlYWRTdWNjZXNzLFR5cGVhaGVhZEZhaWxlZD5cclxue1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgcmVzdWx0czpzdHJpbmdbXSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3VjY2VzcygpOiBUeXBlYWhlYWRTdWNjZXNzIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZEZhaWxlZCBleHRlbmRzIFJlc3VsdDxUeXBlYWhlYWRTdWNjZXNzLFR5cGVhaGVhZEZhaWxlZD5cclxue1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOm51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3VjY2VzcygpOiBUeXBlYWhlYWRTdWNjZXNzIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gICAgfVxyXG4gICAgdG9GYWlsZWQoKTogVHlwZWFoZWFkRmFpbGVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSIsImltcG9ydCB7R2V0RmFpbGVkLCBSZXN1bHQsQXV0b2NvbXBsZXRlT3B0aW9ucywgU3VnZ2VzdGlvbixcclxuICAgIEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIEF1dG9jb21wbGV0ZUFkZHJlc3MsR2V0U3VjY2VzcywgXHJcbiAgICBBdXRvY29tcGxldGVGYWlsZWQsRmluZEFkZHJlc3NlcyxGaW5kU3VjY2VzcyxGaW5kRmFpbGVkLCBcclxuICAgIEF1dG9jb21wbGV0ZUZpbHRlciwgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzLCBUeXBlYWhlYWRTdWNjZXNzLCBcclxuICAgIFR5cGVhaGVhZEZhaWxlZCxUeXBlYWhlYWRPcHRpb25zfSBmcm9tIFwiLi9UeXBlc1wiXHJcbiAgICBcclxuY2xhc3MgQ2xpZW50XHJcbntcclxuICAgIHByaXZhdGUgIGF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlcjpBYm9ydENvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlICBnZXRBYm9ydENvbnRyb2xsZXI6QWJvcnRDb250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSAgdHlwZWFoZWFkQWJvcnRDb250cm9sbGVyOkFib3J0Q29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgYXV0b2NvbXBsZXRlUmVzcG9uc2U/OlJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBnZXRSZXNwb25zZT86UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHR5cGVhaGVhZFJlc3BvbnNlPzpSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBhcGlfa2V5OnN0cmluZywgXHJcbiAgICAgICAgcmVhZG9ubHkgYXV0b2NvbXBsZXRlX3VybDpzdHJpbmcgPSBcImh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vYXV0b2NvbXBsZXRlL3txdWVyeX1cIixcclxuICAgICAgICByZWFkb25seSBnZXRfdXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9nZXQve2lkfVwiLFxyXG4gICAgICAgIHJlYWRvbmx5IHR5cGVhaGVhZF91cmw6c3RyaW5nID0gXCJodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL3R5cGVhaGVhZC97dGVybX1cIilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYXV0b2NvbXBsZXRlKHF1ZXJ5OnN0cmluZywgb3B0aW9uczpQYXJ0aWFsPEF1dG9jb21wbGV0ZU9wdGlvbnM+ID0gQXV0b2NvbXBsZXRlT3B0aW9ucy5EZWZhdWx0KCkpOlByb21pc2U8UmVzdWx0PEF1dG9jb21wbGV0ZVN1Y2Nlc3MsQXV0b2NvbXBsZXRlRmFpbGVkPj4gXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihBdXRvY29tcGxldGVPcHRpb25zLkRlZmF1bHQoKSxvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmF1dG9jb21wbGV0ZV91cmwucmVwbGFjZSgve3F1ZXJ5fS9pLHF1ZXJ5KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXBpX2tleSl7XHJcbiAgICAgICAgICAgICAgICBpZih1cmwuaW5jbHVkZXMoJz8nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnJmFwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICc/YXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLCBcclxuICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cyA9PSAyMDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9ICBqc29uLnN1Z2dlc3Rpb25zIGFzIFN1Z2dlc3Rpb25bXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlU3VjY2VzcyhzdWdnZXN0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCh0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cyxqc29uLk1lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNhdGNoKGVycjp1bmtub3duKVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZVN1Y2Nlc3MoW10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQoNDAxLGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQoNDAxLCdVbmF1dGhvcmlzZWQnKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBmaW5hbGx5IFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBhc3luYyBnZXQoaWQ6c3RyaW5nKTpQcm9taXNlPFJlc3VsdDxHZXRTdWNjZXNzLEdldEZhaWxlZD4+IFxyXG4gICAge1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0X3VybC5yZXBsYWNlKC97aWR9L2ksaWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5hcGlfa2V5KXtcclxuICAgICAgICAgICAgICAgIGlmKHVybC5pbmNsdWRlcygnPycpKXtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICcmYXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJz9hcGkta2V5PScrIHRoaXMuYXBpX2tleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5nZXRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXI9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRSZXNwb25zZS5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gIGpzb24gYXMgQXV0b2NvbXBsZXRlQWRkcmVzcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR2V0U3VjY2VzcyhhZGRyZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzLGpzb24uTWVzc2FnZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgY2F0Y2goZXJyOnVua25vd24pXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKDQwMSxlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKDQwMSwnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZmluYWxseXtcclxuICAgICAgICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZpbmQocG9zdGNvZGU6c3RyaW5nKTpQcm9taXNlPFJlc3VsdDxGaW5kU3VjY2VzcyxGaW5kRmFpbGVkPj4gXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9maW5kLyR7cG9zdGNvZGV9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9JmV4cGFuZD10cnVlYCk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9ICBqc29uIGFzIEZpbmRBZGRyZXNzZXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpbmRTdWNjZXNzKGFkZHJlc3Nlcyk7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKHJlc3BvbnNlLnN0YXR1cyxqc29uLk1lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNhdGNoKGVycjp1bmtub3duKVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQoNDAxLGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKDQwMSwnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgdHlwZWFoZWFkKHRlcm06c3RyaW5nLCBvcHRpb25zOlR5cGVhaGVhZE9wdGlvbnMgPSBUeXBlYWhlYWRPcHRpb25zLkRlZmF1bHQoKSk6UHJvbWlzZTxSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcyxUeXBlYWhlYWRGYWlsZWQ+PiBcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFR5cGVhaGVhZE9wdGlvbnMuRGVmYXVsdCgpLG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMudHlwZWFoZWFkX3VybC5yZXBsYWNlKC97dGVybX0vaSx0ZXJtKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXBpX2tleSl7XHJcbiAgICAgICAgICAgICAgICBpZih1cmwuaW5jbHVkZXMoJz8nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnJmFwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICc/YXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLCBcclxuICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cyA9PSAyMDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy50eXBlYWhlYWRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gIGpzb24gYXMgc3RyaW5nW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZFN1Y2Nlc3MocmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMudHlwZWFoZWFkUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cyxqc29uLk1lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNhdGNoKGVycjp1bmtub3duKVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZFN1Y2Nlc3MoW10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQoNDAxLGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQoNDAxLCdVbmF1dGhvcmlzZWQnKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBmaW5hbGx5IFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Q2xpZW50IGFzIGRlZmF1bHQsR2V0RmFpbGVkLCBSZXN1bHQsXHJcbiAgICBBdXRvY29tcGxldGVPcHRpb25zLCBcclxuICAgIEF1dG9jb21wbGV0ZUZpbHRlcixcclxuICAgIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cyxcclxuICAgIFN1Z2dlc3Rpb24sXHJcbiAgICBBdXRvY29tcGxldGVTdWNjZXNzLCBcclxuICAgIEF1dG9jb21wbGV0ZUFkZHJlc3MsXHJcbiAgICBHZXRTdWNjZXNzLCBcclxuICAgIEF1dG9jb21wbGV0ZUZhaWxlZCxGaW5kQWRkcmVzc2VzLFxyXG4gICAgRmluZFN1Y2Nlc3MsRmluZEZhaWxlZCxUeXBlYWhlYWRGYWlsZWQsXHJcbiAgICBUeXBlYWhlYWRTdWNjZXNzLFR5cGVhaGVhZE9wdGlvbnMgfVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMs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QUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxD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

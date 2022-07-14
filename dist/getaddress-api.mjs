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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkubWpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vc3JjL1R5cGVzLnRzIiwiLi4vc3JjL0NsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBTdWdnZXN0aW9uIFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBhZGRyZXNzOnN0cmluZywgcmVhZG9ubHkgdXJsOnN0cmluZywgcmVhZG9ubHkgaWQ6c3RyaW5nKSBcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc3VsdDxTLEY+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGlzU3VjY2Vzczpib29sZWFuKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCB0b1N1Y2Nlc3MoKTpTO1xyXG4gICAgYWJzdHJhY3QgdG9GYWlsZWQoKTpGO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VjY2VzczxTLEY+IGV4dGVuZHMgUmVzdWx0PFMsRj5cclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHRvU3VjY2VzcygpOlM7XHJcbiAgICBhYnN0cmFjdCB0b0ZhaWxlZCgpOkY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxBdXRvY29tcGxldGVTdWNjZXNzLEF1dG9jb21wbGV0ZUZhaWxlZD5cclxue1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3VnZ2VzdGlvbnM6U3VnZ2VzdGlvbltdKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdG9GYWlsZWQoKTogQXV0b2NvbXBsZXRlRmFpbGVkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0U3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8R2V0U3VjY2VzcywgR2V0RmFpbGVkPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBhZGRyZXNzOkF1dG9jb21wbGV0ZUFkZHJlc3MpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N1Y2Nlc3MoKTogR2V0U3VjY2VzcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlkIG5vdCBmYWlsJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRmFpbGVkIGV4dGVuZHMgUmVzdWx0PEF1dG9jb21wbGV0ZVN1Y2Nlc3MsQXV0b2NvbXBsZXRlRmFpbGVkPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6bnVtYmVyLCByZWFkb25seSBtZXNzYWdlOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xyXG4gICAgfVxyXG4gICAgdG9GYWlsZWQoKTogQXV0b2NvbXBsZXRlRmFpbGVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEZhaWxlZCBleHRlbmRzIFJlc3VsdDxHZXRTdWNjZXNzLEdldEZhaWxlZD5cclxue1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOm51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3VjY2VzcygpOiBHZXRTdWNjZXNzIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHN1Y2Nlc3MnKTtcclxuICAgIH1cclxuICAgIHRvRmFpbGVkKCk6IEdldEZhaWxlZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPcHRpb25zXHJcbntcclxuICAgIGFsbDpib29sZWFuID0gdW5kZWZpbmVkO1xyXG4gICAgdGVtcGxhdGU6c3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gICAgdG9wOm51bWJlciA9IHVuZGVmaW5lZDtcclxuICAgIGZpbHRlcjpQYXJ0aWFsPEF1dG9jb21wbGV0ZUZpbHRlcj4gPSB1bmRlZmluZWQ7XHJcbiAgICBmdXp6eTogdHJ1ZTtcclxuXHJcbiAgICBzdGF0aWMgRGVmYXVsdCgpOkF1dG9jb21wbGV0ZU9wdGlvbnNcclxuICAgIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBBdXRvY29tcGxldGVPcHRpb25zKCk7XHJcbiAgICAgICAgb3B0aW9ucy5hbGwgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkT3B0aW9uc1xyXG57XHJcbiAgICBcclxuICAgIHRvcDpudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgICBzZWFyY2g6c3RyaW5nW10gPSB1bmRlZmluZWQ7XHJcbiAgIFxyXG4gICAgc3RhdGljIERlZmF1bHQoKTpUeXBlYWhlYWRPcHRpb25zXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgVHlwZWFoZWFkT3B0aW9ucygpO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRmlsdGVyXHJcbntcclxuICAgIGNvdW50eTpzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgICBsb2NhbGl0eTpzdHJpbmc9IHVuZGVmaW5lZDtcclxuICAgIGRpc3RyaWN0OnN0cmluZz0gdW5kZWZpbmVkO1xyXG4gICAgdG93bl9vcl9jaXR5OnN0cmluZz11bmRlZmluZWQ7XHJcbiAgICBwb3N0Y29kZTpzdHJpbmc9dW5kZWZpbmVkO1xyXG4gICAgcmVzaWRlbnRpYWw6Ym9vbGVhbj11bmRlZmluZWQ7XHJcbiAgICByYWRpdXM6QXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzPXVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1c1xyXG57XHJcbiAgICBrbTpudW1iZXI9dW5kZWZpbmVkO1xyXG4gICAgbG9uZ2l0dWRlOm51bWJlcj11bmRlZmluZWQ7XHJcbiAgICBsYXRpdHVkZTpudW1iZXI9dW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZHJlc3Ncclxue1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgZm9ybWF0dGVkX2FkZHJlc3M6c3RyaW5nW10sXHJcbiAgICAgICAgcmVhZG9ubHkgdGhvcm91Z2hmYXJlOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBidWlsZGluZ19uYW1lOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBzdWJfYnVpbGRpbmdfbmFtZTpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgc3ViX2J1aWxkaW5nX251bWJlcjpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgYnVpbGRpbmdfbnVtYmVyOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBsaW5lXzE6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMjpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgbGluZV8zOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBsaW5lXzQ6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGxvY2FsaXR5OnN0cmluZyxcclxuICAgICAgICByZWFkb25seSB0b3duX29yX2NpdHk6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGNvdW50eTpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgZGlzdHJpY3Q6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGNvdW50cnk6c3RyaW5nKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlQWRkcmVzcyBleHRlbmRzIEFkZHJlc3N7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHJlYWRvbmx5IHBvc3Rjb2RlOnN0cmluZywgXHJcbiAgICAgICAgcmVhZG9ubHkgbGF0aXR1ZGU6bnVtYmVyLFxyXG4gICAgICAgIHJlYWRvbmx5IGxvbmdpdHVkZTpudW1iZXIsXHJcbiAgICAgICAgcmVhZG9ubHkgZm9ybWF0dGVkX2FkZHJlc3M6c3RyaW5nW10sXHJcbiAgICAgICAgcmVhZG9ubHkgdGhvcm91Z2hmYXJlOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBidWlsZGluZ19uYW1lOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBidWlsZGluZ19udW1iZXI6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHN1Yl9idWlsZGluZ19uYW1lOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBzdWJfYnVpbGRpbmdfbnVtYmVyOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBsaW5lXzE6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMjpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgbGluZV8zOnN0cmluZyxcclxuICAgICAgICByZWFkb25seSBsaW5lXzQ6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGxvY2FsaXR5OnN0cmluZyxcclxuICAgICAgICByZWFkb25seSB0b3duX29yX2NpdHk6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGNvdW50eTpzdHJpbmcsXHJcbiAgICAgICAgcmVhZG9ubHkgZGlzdHJpY3Q6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGNvdW50cnk6c3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHJlc2lkZW50aWFsOmJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoZm9ybWF0dGVkX2FkZHJlc3MsdGhvcm91Z2hmYXJlLFxyXG4gICAgICAgICAgICBidWlsZGluZ19uYW1lLGJ1aWxkaW5nX251bWJlcixcclxuICAgICAgICAgICAgc3ViX2J1aWxkaW5nX25hbWUsc3ViX2J1aWxkaW5nX251bWJlcixcclxuICAgICAgICAgICAgbGluZV8xLGxpbmVfMixsaW5lXzMsbGluZV8zLGxpbmVfNCxcclxuICAgICAgICAgICAgdG93bl9vcl9jaXR5LGNvdW50eSxkaXN0cmljdCxjb3VudHJ5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRBZGRyZXNzZXNcclxue1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgcG9zdGNvZGU6c3RyaW5nLCBcclxuICAgICAgICByZWFkb25seSBsYXRpdHVkZTpudW1iZXIsXHJcbiAgICAgICAgcmVhZG9ubHkgbG9uZ2l0dWRlOm51bWJlcixcclxuICAgICAgICByZWFkb25seSBhZGRyZXNzZXM6QWRkcmVzc1tdKXtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaW5kU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8RmluZFN1Y2Nlc3MsRmluZEZhaWxlZD5cclxue1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgYWRkcmVzc2VzOkZpbmRBZGRyZXNzZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N1Y2Nlc3MoKTogRmluZFN1Y2Nlc3Mge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdG9GYWlsZWQoKTogRmluZEZhaWxlZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8RmluZFN1Y2Nlc3MsRmluZEZhaWxlZD5cclxue1xyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOm51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3VjY2VzcygpOiBGaW5kU3VjY2VzcyB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgIH1cclxuICAgIHRvRmFpbGVkKCk6IEZpbmRGYWlsZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8VHlwZWFoZWFkU3VjY2VzcyxUeXBlYWhlYWRGYWlsZWQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJlc3VsdHM6c3RyaW5nW10pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N1Y2Nlc3MoKTogVHlwZWFoZWFkU3VjY2VzcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0b0ZhaWxlZCgpOiBUeXBlYWhlYWRGYWlsZWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcyxUeXBlYWhlYWRGYWlsZWQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czpudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N1Y2Nlc3MoKTogVHlwZWFoZWFkU3VjY2VzcyB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICAgIH1cclxuICAgIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0dldEZhaWxlZCwgUmVzdWx0LEF1dG9jb21wbGV0ZU9wdGlvbnMsIFN1Z2dlc3Rpb24sXHJcbiAgICBBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVBZGRyZXNzLEdldFN1Y2Nlc3MsIFxyXG4gICAgQXV0b2NvbXBsZXRlRmFpbGVkLEZpbmRBZGRyZXNzZXMsRmluZFN1Y2Nlc3MsRmluZEZhaWxlZCwgXHJcbiAgICBBdXRvY29tcGxldGVGaWx0ZXIsIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cywgVHlwZWFoZWFkU3VjY2VzcywgXHJcbiAgICBUeXBlYWhlYWRGYWlsZWQsVHlwZWFoZWFkT3B0aW9uc30gZnJvbSBcIi4vVHlwZXNcIlxyXG4gICAgXHJcbmNsYXNzIENsaWVudFxyXG57XHJcbiAgICBwcml2YXRlICBhdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXI6QWJvcnRDb250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSAgZ2V0QWJvcnRDb250cm9sbGVyOkFib3J0Q29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgIHR5cGVhaGVhZEFib3J0Q29udHJvbGxlcjpBYm9ydENvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIGF1dG9jb21wbGV0ZVJlc3BvbnNlPzpSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgZ2V0UmVzcG9uc2U/OlJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSB0eXBlYWhlYWRSZXNwb25zZT86UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgYXBpX2tleTpzdHJpbmcsIFxyXG4gICAgICAgIHJlYWRvbmx5IGF1dG9jb21wbGV0ZV91cmw6c3RyaW5nID0gXCJodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2F1dG9jb21wbGV0ZS97cXVlcnl9XCIsXHJcbiAgICAgICAgcmVhZG9ubHkgZ2V0X3VybDpzdHJpbmcgPSBcImh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZ2V0L3tpZH1cIixcclxuICAgICAgICByZWFkb25seSB0eXBlYWhlYWRfdXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby90eXBlYWhlYWQve3Rlcm19XCIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXI9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGF1dG9jb21wbGV0ZShxdWVyeTpzdHJpbmcsIG9wdGlvbnM6UGFydGlhbDxBdXRvY29tcGxldGVPcHRpb25zPiA9IEF1dG9jb21wbGV0ZU9wdGlvbnMuRGVmYXVsdCgpKTpQcm9taXNlPFJlc3VsdDxBdXRvY29tcGxldGVTdWNjZXNzLEF1dG9jb21wbGV0ZUZhaWxlZD4+IFxyXG4gICAge1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oQXV0b2NvbXBsZXRlT3B0aW9ucy5EZWZhdWx0KCksb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5hdXRvY29tcGxldGVfdXJsLnJlcGxhY2UoL3txdWVyeX0vaSxxdWVyeSk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmFwaV9rZXkpe1xyXG4gICAgICAgICAgICAgICAgaWYodXJsLmluY2x1ZGVzKCc/Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJyZhcGkta2V5PScrIHRoaXMuYXBpX2tleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnP2FwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JywgXHJcbiAgICAgICAgICAgICAgICBzaWduYWw6IHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucylcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5zdGF0dXMgPT0gMjAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSAganNvbi5zdWdnZXN0aW9ucyBhcyBTdWdnZXN0aW9uW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZVN1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5zdGF0dXMsanNvbi5NZXNzYWdlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjYXRjaChlcnI6dW5rbm93bilcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVTdWNjZXNzKFtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSxlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSwnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZmluYWxseSBcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgYXN5bmMgZ2V0KGlkOnN0cmluZyk6UHJvbWlzZTxSZXN1bHQ8R2V0U3VjY2VzcyxHZXRGYWlsZWQ+PiBcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmdldF91cmwucmVwbGFjZSgve2lkfS9pLGlkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYXBpX2tleSl7XHJcbiAgICAgICAgICAgICAgICBpZih1cmwuaW5jbHVkZXMoJz8nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnJmFwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICc/YXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0UmVzcG9uc2UgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgICAgICBzaWduYWw6IHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9ICBqc29uIGFzIEF1dG9jb21wbGV0ZUFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdldFN1Y2Nlc3MoYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cyxqc29uLk1lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNhdGNoKGVycjp1bmtub3duKVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsJ1VuYXV0aG9yaXNlZCcpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGZpbmFsbHl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmaW5kKHBvc3Rjb2RlOnN0cmluZyk6UHJvbWlzZTxSZXN1bHQ8RmluZFN1Y2Nlc3MsRmluZEZhaWxlZD4+IFxyXG4gICAge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZmluZC8ke3Bvc3Rjb2RlfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fSZleHBhbmQ9dHJ1ZWApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSAganNvbiBhcyBGaW5kQWRkcmVzc2VzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaW5kU3VjY2VzcyhhZGRyZXNzZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZChyZXNwb25zZS5zdGF0dXMsanNvbi5NZXNzYWdlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjYXRjaChlcnI6dW5rbm93bilcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKDQwMSxlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZCg0MDEsJ1VuYXV0aG9yaXNlZCcpO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIHR5cGVhaGVhZCh0ZXJtOnN0cmluZywgb3B0aW9uczpUeXBlYWhlYWRPcHRpb25zID0gVHlwZWFoZWFkT3B0aW9ucy5EZWZhdWx0KCkpOlByb21pc2U8UmVzdWx0PFR5cGVhaGVhZFN1Y2Nlc3MsVHlwZWFoZWFkRmFpbGVkPj4gXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihUeXBlYWhlYWRPcHRpb25zLkRlZmF1bHQoKSxvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnR5cGVhaGVhZF91cmwucmVwbGFjZSgve3Rlcm19L2ksdGVybSk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmFwaV9rZXkpe1xyXG4gICAgICAgICAgICAgICAgaWYodXJsLmluY2x1ZGVzKCc/Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJyZhcGkta2V5PScrIHRoaXMuYXBpX2tleTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnP2FwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnR5cGVhaGVhZFJlc3BvbnNlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JywgXHJcbiAgICAgICAgICAgICAgICBzaWduYWw6IHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucylcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy50eXBlYWhlYWRSZXNwb25zZS5zdGF0dXMgPT0gMjAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMudHlwZWFoZWFkUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9ICBqc29uIGFzIHN0cmluZ1tdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQodGhpcy50eXBlYWhlYWRSZXNwb25zZS5zdGF0dXMsanNvbi5NZXNzYWdlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjYXRjaChlcnI6dW5rbm93bilcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKFtdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSxlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSwnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZmluYWxseSBcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQge0NsaWVudCBhcyBkZWZhdWx0LEdldEZhaWxlZCwgUmVzdWx0LFxyXG4gICAgQXV0b2NvbXBsZXRlT3B0aW9ucywgXHJcbiAgICBBdXRvY29tcGxldGVGaWx0ZXIsXHJcbiAgICBBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXMsXHJcbiAgICBTdWdnZXN0aW9uLFxyXG4gICAgQXV0b2NvbXBsZXRlU3VjY2VzcywgXHJcbiAgICBBdXRvY29tcGxldGVBZGRyZXNzLFxyXG4gICAgR2V0U3VjY2VzcywgXHJcbiAgICBBdXRvY29tcGxldGVGYWlsZWQsRmluZEFkZHJlc3NlcyxcclxuICAgIEZpbmRTdWNjZXNzLEZpbmRGYWlsZWQsVHlwZWFoZWFkRmFpbGVkLFxyXG4gICAgVHlwZWFoZWFkU3VjY2VzcyxUeXBlYWhlYWRPcHRpb25zIH1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMs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

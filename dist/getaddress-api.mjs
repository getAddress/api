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

export { AutocompleteAddress, AutocompleteFailed, AutocompleteFilter, AutocompleteFilterRadius, AutocompleteOptions, AutocompleteSuccess, FindAddresses, FindFailed, FindSuccess, GetFailed, GetSuccess, Result, Suggestion, TypeaheadFailed, TypeaheadOptions, TypeaheadSuccess, Client as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkubWpzIiwic291cmNlcyI6WyIuLi9zcmMvVHlwZXMudHMiLCIuLi9zcmMvQ2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdWdnZXN0aW9uIFxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3M6c3RyaW5nLCByZWFkb25seSB1cmw6c3RyaW5nLCByZWFkb25seSBpZDpzdHJpbmcpIFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVzdWx0PFMsRj5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBpc1N1Y2Nlc3M6Ym9vbGVhbil7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFic3RyYWN0IHRvU3VjY2VzcygpOlM7XG4gICAgYWJzdHJhY3QgdG9GYWlsZWQoKTpGO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3VjY2VzczxTLEY+IGV4dGVuZHMgUmVzdWx0PFMsRj5cbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBzdXBlcih0cnVlKTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCB0b1N1Y2Nlc3MoKTpTO1xuICAgIGFic3RyYWN0IHRvRmFpbGVkKCk6Rjtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEF1dG9jb21wbGV0ZVN1Y2Nlc3MsQXV0b2NvbXBsZXRlRmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN1Z2dlc3Rpb25zOlN1Z2dlc3Rpb25bXSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9GYWlsZWQoKTogQXV0b2NvbXBsZXRlRmFpbGVkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxHZXRTdWNjZXNzLCBHZXRGYWlsZWQ+XG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgYWRkcmVzczpBdXRvY29tcGxldGVBZGRyZXNzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogR2V0U3VjY2VzcyB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRmFpbGVkIGV4dGVuZHMgUmVzdWx0PEF1dG9jb21wbGV0ZVN1Y2Nlc3MsQXV0b2NvbXBsZXRlRmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czpudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHRvU3VjY2VzcygpOiBBdXRvY29tcGxldGVTdWNjZXNzIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XG4gICAgfVxuICAgIHRvRmFpbGVkKCk6IEF1dG9jb21wbGV0ZUZhaWxlZCB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldEZhaWxlZCBleHRlbmRzIFJlc3VsdDxHZXRTdWNjZXNzLEdldEZhaWxlZD5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6bnVtYmVyLCByZWFkb25seSBtZXNzYWdlOnN0cmluZylcbiAgICB7XG4gICAgICAgIHN1cGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogR2V0U3VjY2VzcyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVPcHRpb25zXG57XG4gICAgYWxsPzpib29sZWFuID0gdW5kZWZpbmVkO1xuICAgIHRlbXBsYXRlPzpzdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgdG9wPzpudW1iZXIgPSB1bmRlZmluZWQ7XG4gICAgZmlsdGVyPzpBdXRvY29tcGxldGVGaWx0ZXIgPSB1bmRlZmluZWQ7XG4gICBcbiAgICBzdGF0aWMgRGVmYXVsdCgpOkF1dG9jb21wbGV0ZU9wdGlvbnNcbiAgICB7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IEF1dG9jb21wbGV0ZU9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5hbGwgPSB0cnVlO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRPcHRpb25zXG57XG4gICAgXG4gICAgdG9wOm51bWJlciA9IHVuZGVmaW5lZDtcbiAgICBzZWFyY2g6c3RyaW5nW10gPSB1bmRlZmluZWQ7XG4gICBcbiAgICBzdGF0aWMgRGVmYXVsdCgpOlR5cGVhaGVhZE9wdGlvbnNcbiAgICB7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFR5cGVhaGVhZE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRmlsdGVyXG57XG4gICAgY291bnR5PzpzdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgbG9jYWxpdHk/OnN0cmluZz0gdW5kZWZpbmVkO1xuICAgIGRpc3RyaWN0PzpzdHJpbmc9IHVuZGVmaW5lZDtcbiAgICB0b3duX29yX2NpdHk/OnN0cmluZz11bmRlZmluZWQ7XG4gICAgcG9zdGNvZGU/OnN0cmluZz11bmRlZmluZWQ7XG4gICAgcmVzaWRlbnRpYWw/OmJvb2xlYW49dW5kZWZpbmVkO1xuICAgIHJhZGl1cz86QXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzPXVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1c1xue1xuICAgIGttOm51bWJlcj11bmRlZmluZWQ7XG4gICAgbG9uZ2l0dWRlOm51bWJlcj11bmRlZmluZWQ7XG4gICAgbGF0aXR1ZGU6bnVtYmVyPXVuZGVmaW5lZDtcbn1cblxuXG5leHBvcnQgY2xhc3MgQWRkcmVzc1xue1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWFkb25seSBmb3JtYXR0ZWRfYWRkcmVzczpzdHJpbmdbXSxcbiAgICAgICAgcmVhZG9ubHkgdGhvcm91Z2hmYXJlOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgYnVpbGRpbmdfbmFtZTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IHN1Yl9idWlsZGluZ19uYW1lOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgc3ViX2J1aWxkaW5nX251bWJlcjpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGJ1aWxkaW5nX251bWJlcjpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMjpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMzpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfNDpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxvY2FsaXR5OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgdG93bl9vcl9jaXR5OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgY291bnR5OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgZGlzdHJpY3Q6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBjb3VudHJ5OnN0cmluZylcbiAgICB7XG5cbiAgICB9XG59XG5cblxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlQWRkcmVzcyBleHRlbmRzIEFkZHJlc3N7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IHBvc3Rjb2RlOnN0cmluZywgXG4gICAgICAgIHJlYWRvbmx5IGxhdGl0dWRlOm51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgbG9uZ2l0dWRlOm51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgZm9ybWF0dGVkX2FkZHJlc3M6c3RyaW5nW10sXG4gICAgICAgIHJlYWRvbmx5IHRob3JvdWdoZmFyZTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGJ1aWxkaW5nX25hbWU6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBidWlsZGluZ19udW1iZXI6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBzdWJfYnVpbGRpbmdfbmFtZTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IHN1Yl9idWlsZGluZ19udW1iZXI6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsaW5lXzE6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsaW5lXzI6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsaW5lXzM6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsaW5lXzQ6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBsb2NhbGl0eTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IHRvd25fb3JfY2l0eTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGNvdW50eTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGRpc3RyaWN0OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgY291bnRyeTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IHJlc2lkZW50aWFsOmJvb2xlYW4pXG4gICAge1xuICAgICAgICBzdXBlcihmb3JtYXR0ZWRfYWRkcmVzcyx0aG9yb3VnaGZhcmUsXG4gICAgICAgICAgICBidWlsZGluZ19uYW1lLGJ1aWxkaW5nX251bWJlcixcbiAgICAgICAgICAgIHN1Yl9idWlsZGluZ19uYW1lLHN1Yl9idWlsZGluZ19udW1iZXIsXG4gICAgICAgICAgICBsaW5lXzEsbGluZV8yLGxpbmVfMyxsaW5lXzMsbGluZV80LFxuICAgICAgICAgICAgdG93bl9vcl9jaXR5LGNvdW50eSxkaXN0cmljdCxjb3VudHJ5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kQWRkcmVzc2VzXG57XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IHBvc3Rjb2RlOnN0cmluZywgXG4gICAgICAgIHJlYWRvbmx5IGxhdGl0dWRlOm51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgbG9uZ2l0dWRlOm51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgYWRkcmVzc2VzOkFkZHJlc3NbXSl7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8RmluZFN1Y2Nlc3MsRmluZEZhaWxlZD5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBhZGRyZXNzZXM6RmluZEFkZHJlc3NlcylcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgdG9TdWNjZXNzKCk6IEZpbmRTdWNjZXNzIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvRmFpbGVkKCk6IEZpbmRGYWlsZWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8RmluZFN1Y2Nlc3MsRmluZEZhaWxlZD5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6bnVtYmVyLCByZWFkb25seSBtZXNzYWdlOnN0cmluZylcbiAgICB7XG4gICAgICAgIHN1cGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogRmluZFN1Y2Nlc3Mge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBGaW5kRmFpbGVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8VHlwZWFoZWFkU3VjY2VzcyxUeXBlYWhlYWRGYWlsZWQ+XG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgcmVzdWx0czpzdHJpbmdbXSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgdG9TdWNjZXNzKCk6IFR5cGVhaGVhZFN1Y2Nlc3Mge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9GYWlsZWQoKTogVHlwZWFoZWFkRmFpbGVkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcyxUeXBlYWhlYWRGYWlsZWQ+XG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOm51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTpzdHJpbmcpXG4gICAge1xuICAgICAgICBzdXBlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgdG9TdWNjZXNzKCk6IFR5cGVhaGVhZFN1Y2Nlc3Mge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBUeXBlYWhlYWRGYWlsZWQge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0IHtHZXRGYWlsZWQsIFJlc3VsdCxBdXRvY29tcGxldGVPcHRpb25zLCBTdWdnZXN0aW9uLFxuICAgIEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIEF1dG9jb21wbGV0ZUFkZHJlc3MsR2V0U3VjY2VzcywgXG4gICAgQXV0b2NvbXBsZXRlRmFpbGVkLEZpbmRBZGRyZXNzZXMsRmluZFN1Y2Nlc3MsRmluZEZhaWxlZCwgXG4gICAgQXV0b2NvbXBsZXRlRmlsdGVyLCBBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXMsIFR5cGVhaGVhZFN1Y2Nlc3MsIFxuICAgIFR5cGVhaGVhZEZhaWxlZCxUeXBlYWhlYWRPcHRpb25zfSBmcm9tIFwiLi9UeXBlc1wiXG4gICAgXG5jbGFzcyBDbGllbnRcbntcbiAgICBwcml2YXRlICBhdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXI6QWJvcnRDb250cm9sbGVyO1xuICAgIHByaXZhdGUgIGdldEFib3J0Q29udHJvbGxlcjpBYm9ydENvbnRyb2xsZXI7XG4gICAgcHJpdmF0ZSAgdHlwZWFoZWFkQWJvcnRDb250cm9sbGVyOkFib3J0Q29udHJvbGxlcjtcbiAgICBwcml2YXRlIGF1dG9jb21wbGV0ZVJlc3BvbnNlPzpSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGdldFJlc3BvbnNlPzpSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIHR5cGVhaGVhZFJlc3BvbnNlPzpSZXNwb25zZSA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFwaV9rZXk6c3RyaW5nLCBcbiAgICAgICAgcmVhZG9ubHkgYXV0b2NvbXBsZXRlX3VybDpzdHJpbmcgPSBcImh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vYXV0b2NvbXBsZXRlL3txdWVyeX1cIixcbiAgICAgICAgcmVhZG9ubHkgZ2V0X3VybDpzdHJpbmcgPSBcImh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZ2V0L3tpZH1cIixcbiAgICAgICAgcmVhZG9ubHkgdHlwZWFoZWFkX3VybDpzdHJpbmcgPSBcImh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vdHlwZWFoZWFkL3t0ZXJtfVwiKVxuICAgIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXI9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXI9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgYXV0b2NvbXBsZXRlKHF1ZXJ5OnN0cmluZywgb3B0aW9uczpBdXRvY29tcGxldGVPcHRpb25zID0gQXV0b2NvbXBsZXRlT3B0aW9ucy5EZWZhdWx0KCkpOlByb21pc2U8UmVzdWx0PEF1dG9jb21wbGV0ZVN1Y2Nlc3MsQXV0b2NvbXBsZXRlRmFpbGVkPj4gXG4gICAge1xuICAgICAgICB0cnlcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oQXV0b2NvbXBsZXRlT3B0aW9ucy5EZWZhdWx0KCksb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLmF1dG9jb21wbGV0ZV91cmwucmVwbGFjZSgve3F1ZXJ5fS9pLHF1ZXJ5KTtcblxuICAgICAgICAgICAgaWYodGhpcy5hcGlfa2V5KXtcbiAgICAgICAgICAgICAgICBpZih1cmwuaW5jbHVkZXMoJz8nKSl7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJyZhcGkta2V5PScrIHRoaXMuYXBpX2tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnP2FwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXI9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLCBcbiAgICAgICAgICAgICAgICBzaWduYWw6IHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZih0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cyA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9ICBqc29uLnN1Z2dlc3Rpb25zIGFzIFN1Z2dlc3Rpb25bXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZVN1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xuICAgICAgICAgICAgfVxuIFxuICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2Uuc3RhdHVzLGpzb24uTWVzc2FnZSk7XG4gICAgICAgICB9XG4gICAgICAgICBjYXRjaChlcnI6dW5rbm93bilcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZVN1Y2Nlc3MoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCg0MDEsZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCg0MDEsJ1VuYXV0aG9yaXNlZCcpO1xuICAgICAgICAgfVxuICAgICAgICAgZmluYWxseSBcbiAgICAgICAgIHtcbiAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIGdldChpZDpzdHJpbmcpOlByb21pc2U8UmVzdWx0PEdldFN1Y2Nlc3MsR2V0RmFpbGVkPj4gXG4gICAge1xuICAgICAgICB0cnlcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0X3VybC5yZXBsYWNlKC97aWR9L2ksaWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmFwaV9rZXkpe1xuICAgICAgICAgICAgICAgIGlmKHVybC5pbmNsdWRlcygnPycpKXtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnJmFwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICc/YXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmdldFJlc3BvbnNlICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICAgICAgc2lnbmFsOiB0aGlzLmdldEFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBpZih0aGlzLmdldFJlc3BvbnNlLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9ICBqc29uIGFzIEF1dG9jb21wbGV0ZUFkZHJlc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHZXRTdWNjZXNzKGFkZHJlc3MpO1xuICAgICAgICAgICAgfVxuIFxuICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzLGpzb24uTWVzc2FnZSk7XG4gICAgICAgICB9XG4gICAgICAgICBjYXRjaChlcnI6dW5rbm93bilcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKDQwMSxlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKDQwMSwnVW5hdXRob3Jpc2VkJyk7XG4gICAgICAgICB9XG4gICAgICAgICBmaW5hbGx5e1xuICAgICAgICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmaW5kKHBvc3Rjb2RlOnN0cmluZyk6UHJvbWlzZTxSZXN1bHQ8RmluZFN1Y2Nlc3MsRmluZEZhaWxlZD4+IFxuICAgIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2ZpbmQvJHtwb3N0Y29kZX0/YXBpLWtleT0ke3RoaXMuYXBpX2tleX0mZXhwYW5kPXRydWVgKTtcbiAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9ICBqc29uIGFzIEZpbmRBZGRyZXNzZXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaW5kU3VjY2VzcyhhZGRyZXNzZXMpO1xuICAgICAgICAgICAgfVxuIFxuICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQocmVzcG9uc2Uuc3RhdHVzLGpzb24uTWVzc2FnZSk7XG4gICAgICAgICB9XG4gICAgICAgICBjYXRjaChlcnI6dW5rbm93bilcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZCg0MDEsZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQoNDAxLCdVbmF1dGhvcmlzZWQnKTtcbiAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIHR5cGVhaGVhZCh0ZXJtOnN0cmluZywgb3B0aW9uczpUeXBlYWhlYWRPcHRpb25zID0gVHlwZWFoZWFkT3B0aW9ucy5EZWZhdWx0KCkpOlByb21pc2U8UmVzdWx0PFR5cGVhaGVhZFN1Y2Nlc3MsVHlwZWFoZWFkRmFpbGVkPj4gXG4gICAge1xuICAgICAgICB0cnlcbiAgICAgICAge1xuICAgICAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oVHlwZWFoZWFkT3B0aW9ucy5EZWZhdWx0KCksb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0aGlzLnR5cGVhaGVhZF91cmwucmVwbGFjZSgve3Rlcm19L2ksdGVybSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYXBpX2tleSl7XG4gICAgICAgICAgICAgICAgaWYodXJsLmluY2x1ZGVzKCc/Jykpe1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICcmYXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJz9hcGkta2V5PScrIHRoaXMuYXBpX2tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JywgXG4gICAgICAgICAgICAgICAgc2lnbmFsOiB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5zaWduYWwsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvcHRpb25zKVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYodGhpcy50eXBlYWhlYWRSZXNwb25zZS5zdGF0dXMgPT0gMjAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy50eXBlYWhlYWRSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9ICBqc29uIGFzIHN0cmluZ1tdO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkU3VjY2VzcyhyZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgIGNvbnN0IGpzb246YW55ID0gYXdhaXQgdGhpcy50eXBlYWhlYWRSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cyxqc29uLk1lc3NhZ2UpO1xuICAgICAgICAgfVxuICAgICAgICAgY2F0Y2goZXJyOnVua25vd24pXG4gICAgICAgICB7XG4gICAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQoNDAxLGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQoNDAxLCdVbmF1dGhvcmlzZWQnKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGZpbmFsbHkgXG4gICAgICAgICB7XG4gICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbmV4cG9ydCB7Q2xpZW50IGFzIGRlZmF1bHQsR2V0RmFpbGVkLCBSZXN1bHQsXG4gICAgQXV0b2NvbXBsZXRlT3B0aW9ucywgXG4gICAgQXV0b2NvbXBsZXRlRmlsdGVyLFxuICAgIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cyxcbiAgICBTdWdnZXN0aW9uLFxuICAgIEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIFxuICAgIEF1dG9jb21wbGV0ZUFkZHJlc3MsXG4gICAgR2V0U3VjY2VzcywgXG4gICAgQXV0b2NvbXBsZXRlRmFpbGVkLEZpbmRBZGRyZXNzZXMsXG4gICAgRmluZFN1Y2Nlc3MsRmluZEZhaWxlZCxUeXBlYWhlYWRGYWlsZWQsXG4gICAgVHlwZWFoZWFkU3VjY2VzcyxUeXBlYWhlYWRPcHRpb25zIH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFB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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9UeXBlcy50cyIsIi4uL3NyYy9DbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN1Z2dlc3Rpb24gXG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgYWRkcmVzczpzdHJpbmcsIHJlYWRvbmx5IHVybDpzdHJpbmcsIHJlYWRvbmx5IGlkOnN0cmluZykgXG4gICAge1xuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXN1bHQ8UyxGPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGlzU3VjY2Vzczpib29sZWFuKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWJzdHJhY3QgdG9TdWNjZXNzKCk6UztcbiAgICBhYnN0cmFjdCB0b0ZhaWxlZCgpOkY7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWNjZXNzPFMsRj4gZXh0ZW5kcyBSZXN1bHQ8UyxGPlxue1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHN1cGVyKHRydWUpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IHRvU3VjY2VzcygpOlM7XG4gICAgYWJzdHJhY3QgdG9GYWlsZWQoKTpGO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8QXV0b2NvbXBsZXRlU3VjY2VzcyxBdXRvY29tcGxldGVGYWlsZWQ+XG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3VnZ2VzdGlvbnM6U3VnZ2VzdGlvbltdKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogQXV0b2NvbXBsZXRlU3VjY2VzcyB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdldFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEdldFN1Y2Nlc3MsIEdldEZhaWxlZD5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBhZGRyZXNzOkF1dG9jb21wbGV0ZUFkZHJlc3MpXG4gICAge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHRvU3VjY2VzcygpOiBHZXRTdWNjZXNzIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvRmFpbGVkKCk6IEdldEZhaWxlZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGlkIG5vdCBmYWlsJyk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8QXV0b2NvbXBsZXRlU3VjY2VzcyxBdXRvY29tcGxldGVGYWlsZWQ+XG57XG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOm51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTpzdHJpbmcpXG4gICAge1xuICAgICAgICBzdXBlcihmYWxzZSk7XG4gICAgfVxuXG4gICAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHN1Y2Nlc3MnKTtcbiAgICB9XG4gICAgdG9GYWlsZWQoKTogQXV0b2NvbXBsZXRlRmFpbGVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2V0RmFpbGVkIGV4dGVuZHMgUmVzdWx0PEdldFN1Y2Nlc3MsR2V0RmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czpudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHRvU3VjY2VzcygpOiBHZXRTdWNjZXNzIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XG4gICAgfVxuICAgIHRvRmFpbGVkKCk6IEdldEZhaWxlZCB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU9wdGlvbnNcbntcbiAgICBhbGw/OmJvb2xlYW4gPSB1bmRlZmluZWQ7XG4gICAgdGVtcGxhdGU/OnN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICB0b3A/Om51bWJlciA9IHVuZGVmaW5lZDtcbiAgICBmaWx0ZXI/OkF1dG9jb21wbGV0ZUZpbHRlciA9IHVuZGVmaW5lZDtcbiAgIFxuICAgIHN0YXRpYyBEZWZhdWx0KCk6QXV0b2NvbXBsZXRlT3B0aW9uc1xuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgQXV0b2NvbXBsZXRlT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLmFsbCA9IHRydWU7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE9wdGlvbnNcbntcbiAgICBcbiAgICB0b3A6bnVtYmVyID0gdW5kZWZpbmVkO1xuICAgIHNlYXJjaDpzdHJpbmdbXSA9IHVuZGVmaW5lZDtcbiAgIFxuICAgIHN0YXRpYyBEZWZhdWx0KCk6VHlwZWFoZWFkT3B0aW9uc1xuICAgIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgVHlwZWFoZWFkT3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGaWx0ZXJcbntcbiAgICBjb3VudHk/OnN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICBsb2NhbGl0eT86c3RyaW5nPSB1bmRlZmluZWQ7XG4gICAgZGlzdHJpY3Q/OnN0cmluZz0gdW5kZWZpbmVkO1xuICAgIHRvd25fb3JfY2l0eT86c3RyaW5nPXVuZGVmaW5lZDtcbiAgICBwb3N0Y29kZT86c3RyaW5nPXVuZGVmaW5lZDtcbiAgICByZXNpZGVudGlhbD86Ym9vbGVhbj11bmRlZmluZWQ7XG4gICAgcmFkaXVzPzpBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXM9dW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzXG57XG4gICAga206bnVtYmVyPXVuZGVmaW5lZDtcbiAgICBsb25naXR1ZGU6bnVtYmVyPXVuZGVmaW5lZDtcbiAgICBsYXRpdHVkZTpudW1iZXI9dW5kZWZpbmVkO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBBZGRyZXNzXG57XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlYWRvbmx5IGZvcm1hdHRlZF9hZGRyZXNzOnN0cmluZ1tdLFxuICAgICAgICByZWFkb25seSB0aG9yb3VnaGZhcmU6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBidWlsZGluZ19uYW1lOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgc3ViX2J1aWxkaW5nX25hbWU6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBzdWJfYnVpbGRpbmdfbnVtYmVyOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgYnVpbGRpbmdfbnVtYmVyOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbGluZV8xOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbGluZV8yOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbGluZV8zOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbGluZV80OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgbG9jYWxpdHk6c3RyaW5nLFxuICAgICAgICByZWFkb25seSB0b3duX29yX2NpdHk6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBjb3VudHk6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBkaXN0cmljdDpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGNvdW50cnk6c3RyaW5nKVxuICAgIHtcblxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVBZGRyZXNzIGV4dGVuZHMgQWRkcmVzc3tcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcmVhZG9ubHkgcG9zdGNvZGU6c3RyaW5nLCBcbiAgICAgICAgcmVhZG9ubHkgbGF0aXR1ZGU6bnVtYmVyLFxuICAgICAgICByZWFkb25seSBsb25naXR1ZGU6bnVtYmVyLFxuICAgICAgICByZWFkb25seSBmb3JtYXR0ZWRfYWRkcmVzczpzdHJpbmdbXSxcbiAgICAgICAgcmVhZG9ubHkgdGhvcm91Z2hmYXJlOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgYnVpbGRpbmdfbmFtZTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGJ1aWxkaW5nX251bWJlcjpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IHN1Yl9idWlsZGluZ19uYW1lOnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgc3ViX2J1aWxkaW5nX251bWJlcjpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMTpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMjpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfMzpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxpbmVfNDpzdHJpbmcsXG4gICAgICAgIHJlYWRvbmx5IGxvY2FsaXR5OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgdG93bl9vcl9jaXR5OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgY291bnR5OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgZGlzdHJpY3Q6c3RyaW5nLFxuICAgICAgICByZWFkb25seSBjb3VudHJ5OnN0cmluZyxcbiAgICAgICAgcmVhZG9ubHkgcmVzaWRlbnRpYWw6Ym9vbGVhbilcbiAgICB7XG4gICAgICAgIHN1cGVyKGZvcm1hdHRlZF9hZGRyZXNzLHRob3JvdWdoZmFyZSxcbiAgICAgICAgICAgIGJ1aWxkaW5nX25hbWUsYnVpbGRpbmdfbnVtYmVyLFxuICAgICAgICAgICAgc3ViX2J1aWxkaW5nX25hbWUsc3ViX2J1aWxkaW5nX251bWJlcixcbiAgICAgICAgICAgIGxpbmVfMSxsaW5lXzIsbGluZV8zLGxpbmVfMyxsaW5lXzQsXG4gICAgICAgICAgICB0b3duX29yX2NpdHksY291bnR5LGRpc3RyaWN0LGNvdW50cnkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRBZGRyZXNzZXNcbntcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcmVhZG9ubHkgcG9zdGNvZGU6c3RyaW5nLCBcbiAgICAgICAgcmVhZG9ubHkgbGF0aXR1ZGU6bnVtYmVyLFxuICAgICAgICByZWFkb25seSBsb25naXR1ZGU6bnVtYmVyLFxuICAgICAgICByZWFkb25seSBhZGRyZXNzZXM6QWRkcmVzc1tdKXtcblxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxGaW5kU3VjY2VzcyxGaW5kRmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3NlczpGaW5kQWRkcmVzc2VzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogRmluZFN1Y2Nlc3Mge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9GYWlsZWQoKTogRmluZEZhaWxlZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmluZEZhaWxlZCBleHRlbmRzIFJlc3VsdDxGaW5kU3VjY2VzcyxGaW5kRmFpbGVkPlxue1xuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czpudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIHRvU3VjY2VzcygpOiBGaW5kU3VjY2VzcyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XG4gICAgfVxuICAgIHRvRmFpbGVkKCk6IEZpbmRGYWlsZWQge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxUeXBlYWhlYWRTdWNjZXNzLFR5cGVhaGVhZEZhaWxlZD5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSByZXN1bHRzOnN0cmluZ1tdKVxuICAgIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogVHlwZWFoZWFkU3VjY2VzcyB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b0ZhaWxlZCgpOiBUeXBlYWhlYWRGYWlsZWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZEZhaWxlZCBleHRlbmRzIFJlc3VsdDxUeXBlYWhlYWRTdWNjZXNzLFR5cGVhaGVhZEZhaWxlZD5cbntcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6bnVtYmVyLCByZWFkb25seSBtZXNzYWdlOnN0cmluZylcbiAgICB7XG4gICAgICAgIHN1cGVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0b1N1Y2Nlc3MoKTogVHlwZWFoZWFkU3VjY2VzcyB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XG4gICAgfVxuICAgIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQge0dldEZhaWxlZCwgUmVzdWx0LEF1dG9jb21wbGV0ZU9wdGlvbnMsIFN1Z2dlc3Rpb24sXG4gICAgQXV0b2NvbXBsZXRlU3VjY2VzcywgQXV0b2NvbXBsZXRlQWRkcmVzcyxHZXRTdWNjZXNzLCBcbiAgICBBdXRvY29tcGxldGVGYWlsZWQsRmluZEFkZHJlc3NlcyxGaW5kU3VjY2VzcyxGaW5kRmFpbGVkLCBcbiAgICBBdXRvY29tcGxldGVGaWx0ZXIsIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cywgVHlwZWFoZWFkU3VjY2VzcywgXG4gICAgVHlwZWFoZWFkRmFpbGVkLFR5cGVhaGVhZE9wdGlvbnN9IGZyb20gXCIuL1R5cGVzXCJcbiAgICBcbmNsYXNzIENsaWVudFxue1xuICAgIHByaXZhdGUgIGF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlcjpBYm9ydENvbnRyb2xsZXI7XG4gICAgcHJpdmF0ZSAgZ2V0QWJvcnRDb250cm9sbGVyOkFib3J0Q29udHJvbGxlcjtcbiAgICBwcml2YXRlICB0eXBlYWhlYWRBYm9ydENvbnRyb2xsZXI6QWJvcnRDb250cm9sbGVyO1xuICAgIHByaXZhdGUgYXV0b2NvbXBsZXRlUmVzcG9uc2U/OlJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgZ2V0UmVzcG9uc2U/OlJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgdHlwZWFoZWFkUmVzcG9uc2U/OlJlc3BvbnNlID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgYXBpX2tleTpzdHJpbmcsIFxuICAgICAgICByZWFkb25seSBhdXRvY29tcGxldGVfdXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9hdXRvY29tcGxldGUve3F1ZXJ5fVwiLFxuICAgICAgICByZWFkb25seSBnZXRfdXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9nZXQve2lkfVwiLFxuICAgICAgICByZWFkb25seSB0eXBlYWhlYWRfdXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby90eXBlYWhlYWQve3Rlcm19XCIpXG4gICAge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICB9XG5cbiAgICBhc3luYyBhdXRvY29tcGxldGUocXVlcnk6c3RyaW5nLCBvcHRpb25zOkF1dG9jb21wbGV0ZU9wdGlvbnMgPSBBdXRvY29tcGxldGVPcHRpb25zLkRlZmF1bHQoKSk6UHJvbWlzZTxSZXN1bHQ8QXV0b2NvbXBsZXRlU3VjY2VzcyxBdXRvY29tcGxldGVGYWlsZWQ+PiBcbiAgICB7XG4gICAgICAgIHRyeVxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihBdXRvY29tcGxldGVPcHRpb25zLkRlZmF1bHQoKSxvcHRpb25zKTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuYXV0b2NvbXBsZXRlX3VybC5yZXBsYWNlKC97cXVlcnl9L2kscXVlcnkpO1xuXG4gICAgICAgICAgICBpZih0aGlzLmFwaV9rZXkpe1xuICAgICAgICAgICAgICAgIGlmKHVybC5pbmNsdWRlcygnPycpKXtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnJmFwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICc/YXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlcj0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsIFxuICAgICAgICAgICAgICAgIHNpZ25hbDogdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucylcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2Uuc3RhdHVzID09IDIwMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gIGpzb24uc3VnZ2VzdGlvbnMgYXMgU3VnZ2VzdGlvbltdO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlU3VjY2VzcyhzdWdnZXN0aW9ucyk7XG4gICAgICAgICAgICB9XG4gXG4gICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5zdGF0dXMsanNvbi5NZXNzYWdlKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGNhdGNoKGVycjp1bmtub3duKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3IpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlU3VjY2VzcyhbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSxlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSwnVW5hdXRob3Jpc2VkJyk7XG4gICAgICAgICB9XG4gICAgICAgICBmaW5hbGx5IFxuICAgICAgICAge1xuICAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgYXN5bmMgZ2V0KGlkOnN0cmluZyk6UHJvbWlzZTxSZXN1bHQ8R2V0U3VjY2VzcyxHZXRGYWlsZWQ+PiBcbiAgICB7XG4gICAgICAgIHRyeVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRfdXJsLnJlcGxhY2UoL3tpZH0vaSxpZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuYXBpX2tleSl7XG4gICAgICAgICAgICAgICAgaWYodXJsLmluY2x1ZGVzKCc/Jykpe1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwrICcmYXBpLWtleT0nKyB0aGlzLmFwaV9rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJz9hcGkta2V5PScrIHRoaXMuYXBpX2tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0UmVzcG9uc2UgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICBzaWduYWw6IHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzID09IDIwMCl7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gIGpzb24gYXMgQXV0b2NvbXBsZXRlQWRkcmVzcztcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdldFN1Y2Nlc3MoYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gXG4gICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBHZXRGYWlsZWQodGhpcy5nZXRSZXNwb25zZS5zdGF0dXMsanNvbi5NZXNzYWdlKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGNhdGNoKGVycjp1bmtub3duKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3IpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHZXRGYWlsZWQoNDAxLGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHZXRGYWlsZWQoNDAxLCdVbmF1dGhvcmlzZWQnKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGZpbmFsbHl7XG4gICAgICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZpbmQocG9zdGNvZGU6c3RyaW5nKTpQcm9taXNlPFJlc3VsdDxGaW5kU3VjY2VzcyxGaW5kRmFpbGVkPj4gXG4gICAge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZmluZC8ke3Bvc3Rjb2RlfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fSZleHBhbmQ9dHJ1ZWApO1xuICAgIFxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09IDIwMCl7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gIGpzb24gYXMgRmluZEFkZHJlc3NlcztcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpbmRTdWNjZXNzKGFkZHJlc3Nlcyk7XG4gICAgICAgICAgICB9XG4gXG4gICAgICAgICAgICBjb25zdCBqc29uOmFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZChyZXNwb25zZS5zdGF0dXMsanNvbi5NZXNzYWdlKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGNhdGNoKGVycjp1bmtub3duKVxuICAgICAgICAge1xuICAgICAgICAgICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3IpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKDQwMSxlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZCg0MDEsJ1VuYXV0aG9yaXNlZCcpO1xuICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgdHlwZWFoZWFkKHRlcm06c3RyaW5nLCBvcHRpb25zOlR5cGVhaGVhZE9wdGlvbnMgPSBUeXBlYWhlYWRPcHRpb25zLkRlZmF1bHQoKSk6UHJvbWlzZTxSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcyxUeXBlYWhlYWRGYWlsZWQ+PiBcbiAgICB7XG4gICAgICAgIHRyeVxuICAgICAgICB7XG4gICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihUeXBlYWhlYWRPcHRpb25zLkRlZmF1bHQoKSxvcHRpb25zKTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMudHlwZWFoZWFkX3VybC5yZXBsYWNlKC97dGVybX0vaSx0ZXJtKTtcblxuICAgICAgICAgICAgaWYodGhpcy5hcGlfa2V5KXtcbiAgICAgICAgICAgICAgICBpZih1cmwuaW5jbHVkZXMoJz8nKSl7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybCsgJyZhcGkta2V5PScrIHRoaXMuYXBpX2tleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsKyAnP2FwaS1rZXk9JysgdGhpcy5hcGlfa2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy50eXBlYWhlYWRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXI9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLCBcbiAgICAgICAgICAgICAgICBzaWduYWw6IHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZih0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cyA9PSAyMDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gIGpzb24gYXMgc3RyaW5nW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKHJlc3VsdHMpO1xuICAgICAgICAgICAgfVxuIFxuICAgICAgICAgICAgY29uc3QganNvbjphbnkgPSBhd2FpdCB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKHRoaXMudHlwZWFoZWFkUmVzcG9uc2Uuc3RhdHVzLGpzb24uTWVzc2FnZSk7XG4gICAgICAgICB9XG4gICAgICAgICBjYXRjaChlcnI6dW5rbm93bilcbiAgICAgICAgIHtcbiAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZFN1Y2Nlc3MoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCg0MDEsZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCg0MDEsJ1VuYXV0aG9yaXNlZCcpO1xuICAgICAgICAgfVxuICAgICAgICAgZmluYWxseSBcbiAgICAgICAgIHtcbiAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuZXhwb3J0IHtDbGllbnQgYXMgZGVmYXVsdCxHZXRGYWlsZWQsIFJlc3VsdCxcbiAgICBBdXRvY29tcGxldGVPcHRpb25zLCBcbiAgICBBdXRvY29tcGxldGVGaWx0ZXIsXG4gICAgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzLFxuICAgIFN1Z2dlc3Rpb24sXG4gICAgQXV0b2NvbXBsZXRlU3VjY2VzcywgXG4gICAgQXV0b2NvbXBsZXRlQWRkcmVzcyxcbiAgICBHZXRTdWNjZXNzLCBcbiAgICBBdXRvY29tcGxldGVGYWlsZWQsRmluZEFkZHJlc3NlcyxcbiAgICBGaW5kU3VjY2VzcyxGaW5kRmFpbGVkLFR5cGVhaGVhZEZhaWxlZCxcbiAgICBUeXBlYWhlYWRTdWNjZXNzLFR5cGVhaGVhZE9wdGlvbnMgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsVUFBQSxrQkFBQSxZQUFBO0FBRUksSUFBQSxTQUFBLFVBQUEsQ0FBcUIsT0FBYyxFQUFXLEdBQVUsRUFBVyxFQUFTLEVBQUE7UUFBdkQsSUFBTyxDQUFBLE9BQUEsR0FBUCxPQUFPLENBQU87UUFBVyxJQUFHLENBQUEsR0FBQSxHQUFILEdBQUcsQ0FBTztRQUFXLElBQUUsQ0FBQSxFQUFBLEdBQUYsRUFBRSxDQUFPO0tBRzNFO0lBQ0wsT0FBQyxVQUFBLENBQUE7QUFBRCxDQUFDLEVBQUEsRUFBQTtBQUVELElBQUEsTUFBQSxrQkFBQSxZQUFBO0FBRUksSUFBQSxTQUFBLE1BQUEsQ0FBcUIsU0FBaUIsRUFBQTtRQUFqQixJQUFTLENBQUEsU0FBQSxHQUFULFNBQVMsQ0FBUTtLQUVyQztJQUlMLE9BQUMsTUFBQSxDQUFBO0FBQUQsQ0FBQyxFQUFBLEVBQUE7QUFFRCxJQUFBLE9BQUEsa0JBQUEsVUFBQSxNQUFBLEVBQUE7SUFBMkMsU0FBVyxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtBQUVsRCxJQUFBLFNBQUEsT0FBQSxHQUFBO0FBRUksUUFBQSxPQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFNLElBQUksQ0FBQyxJQUFBLElBQUEsQ0FBQTtLQUNkO0lBSUwsT0FBQyxPQUFBLENBQUE7QUFBRCxDQVRBLENBQTJDLE1BQU0sQ0FTaEQsQ0FBQSxDQUFBO0FBRUQsSUFBQSxtQkFBQSxrQkFBQSxVQUFBLE1BQUEsRUFBQTtJQUF5QyxTQUErQyxDQUFBLG1CQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7QUFFcEYsSUFBQSxTQUFBLG1CQUFBLENBQXFCLFdBQXdCLEVBQUE7QUFBN0MsUUFBQSxJQUFBLEtBQUEsR0FFSSxpQkFBTyxJQUNWLElBQUEsQ0FBQTtRQUhvQixLQUFXLENBQUEsV0FBQSxHQUFYLFdBQVcsQ0FBYTs7S0FHNUM7QUFFRCxJQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLFNBQVMsR0FBVCxZQUFBO0FBQ0ksUUFBQSxPQUFPLElBQUksQ0FBQztLQUNmLENBQUE7QUFDRCxJQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLFFBQVEsR0FBUixZQUFBO0FBQ0ksUUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ25DLENBQUE7SUFDTCxPQUFDLG1CQUFBLENBQUE7QUFBRCxDQWJBLENBQXlDLE9BQU8sQ0FhL0MsRUFBQTtBQUVELElBQUEsVUFBQSxrQkFBQSxVQUFBLE1BQUEsRUFBQTtJQUFnQyxTQUE4QixDQUFBLFVBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtBQUUxRCxJQUFBLFNBQUEsVUFBQSxDQUFxQixPQUEyQixFQUFBO0FBQWhELFFBQUEsSUFBQSxLQUFBLEdBRUksaUJBQU8sSUFDVixJQUFBLENBQUE7UUFIb0IsS0FBTyxDQUFBLE9BQUEsR0FBUCxPQUFPLENBQW9COztLQUcvQztBQUVELElBQUEsVUFBQSxDQUFBLFNBQUEsQ0FBQSxTQUFTLEdBQVQsWUFBQTtBQUNJLFFBQUEsT0FBTyxJQUFJLENBQUM7S0FDZixDQUFBO0FBQ0QsSUFBQSxVQUFBLENBQUEsU0FBQSxDQUFBLFFBQVEsR0FBUixZQUFBO0FBQ0ksUUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ25DLENBQUE7SUFDTCxPQUFDLFVBQUEsQ0FBQTtBQUFELENBYkEsQ0FBZ0MsT0FBTyxDQWF0QyxFQUFBO0FBR0QsSUFBQSxrQkFBQSxrQkFBQSxVQUFBLE1BQUEsRUFBQTtJQUF3QyxTQUE4QyxDQUFBLGtCQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7SUFFbEYsU0FBcUIsa0JBQUEsQ0FBQSxNQUFhLEVBQVcsT0FBYyxFQUFBO1FBQTNELElBRUksS0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFNLEtBQUssQ0FBQyxJQUNmLElBQUEsQ0FBQTtRQUhvQixLQUFNLENBQUEsTUFBQSxHQUFOLE1BQU0sQ0FBTztRQUFXLEtBQU8sQ0FBQSxPQUFBLEdBQVAsT0FBTyxDQUFPOztLQUcxRDtBQUVELElBQUEsa0JBQUEsQ0FBQSxTQUFBLENBQUEsU0FBUyxHQUFULFlBQUE7QUFDSSxRQUFBLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDcEMsQ0FBQTtBQUNELElBQUEsa0JBQUEsQ0FBQSxTQUFBLENBQUEsUUFBUSxHQUFSLFlBQUE7QUFDSSxRQUFBLE9BQU8sSUFBSSxDQUFDO0tBQ2YsQ0FBQTtJQUNMLE9BQUMsa0JBQUEsQ0FBQTtBQUFELENBYkEsQ0FBd0MsTUFBTSxDQWE3QyxFQUFBO0FBRUQsSUFBQSxTQUFBLGtCQUFBLFVBQUEsTUFBQSxFQUFBO0lBQStCLFNBQTRCLENBQUEsU0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBO0lBRXZELFNBQXFCLFNBQUEsQ0FBQSxNQUFhLEVBQVcsT0FBYyxFQUFBO1FBQTNELElBRUksS0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFNLEtBQUssQ0FBQyxJQUNmLElBQUEsQ0FBQTtRQUhvQixLQUFNLENBQUEsTUFBQSxHQUFOLE1BQU0sQ0FBTztRQUFXLEtBQU8sQ0FBQSxPQUFBLEdBQVAsT0FBTyxDQUFPOztLQUcxRDtBQUVELElBQUEsU0FBQSxDQUFBLFNBQUEsQ0FBQSxTQUFTLEdBQVQsWUFBQTtBQUNJLFFBQUEsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNwQyxDQUFBO0FBQ0QsSUFBQSxTQUFBLENBQUEsU0FBQSxDQUFBLFFBQVEsR0FBUixZQUFBO0FBQ0ksUUFBQSxPQUFPLElBQUksQ0FBQztLQUNmLENBQUE7SUFDTCxPQUFDLFNBQUEsQ0FBQTtBQUFELENBYkEsQ0FBK0IsTUFBTSxDQWFwQyxFQUFBO0FBRUQsSUFBQSxtQkFBQSxrQkFBQSxZQUFBO0FBQUEsSUFBQSxTQUFBLG1CQUFBLEdBQUE7UUFFSSxJQUFHLENBQUEsR0FBQSxHQUFZLFNBQVMsQ0FBQztRQUN6QixJQUFRLENBQUEsUUFBQSxHQUFXLFNBQVMsQ0FBQztRQUM3QixJQUFHLENBQUEsR0FBQSxHQUFXLFNBQVMsQ0FBQztRQUN4QixJQUFNLENBQUEsTUFBQSxHQUF1QixTQUFTLENBQUM7S0FRMUM7QUFOVSxJQUFBLG1CQUFBLENBQUEsT0FBTyxHQUFkLFlBQUE7QUFFSSxRQUFBLElBQUksT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUN4QyxRQUFBLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ25CLFFBQUEsT0FBTyxPQUFPLENBQUM7S0FDbEIsQ0FBQTtJQUNMLE9BQUMsbUJBQUEsQ0FBQTtBQUFELENBQUMsRUFBQSxFQUFBO0FBRUQsSUFBQSxnQkFBQSxrQkFBQSxZQUFBO0FBQUEsSUFBQSxTQUFBLGdCQUFBLEdBQUE7UUFHSSxJQUFHLENBQUEsR0FBQSxHQUFVLFNBQVMsQ0FBQztRQUN2QixJQUFNLENBQUEsTUFBQSxHQUFZLFNBQVMsQ0FBQztLQU8vQjtBQUxVLElBQUEsZ0JBQUEsQ0FBQSxPQUFPLEdBQWQsWUFBQTtBQUVJLFFBQUEsSUFBSSxPQUFPLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3JDLFFBQUEsT0FBTyxPQUFPLENBQUM7S0FDbEIsQ0FBQTtJQUNMLE9BQUMsZ0JBQUEsQ0FBQTtBQUFELENBQUMsRUFBQSxFQUFBO0FBRUQsSUFBQSxrQkFBQSxrQkFBQSxZQUFBO0FBQUEsSUFBQSxTQUFBLGtCQUFBLEdBQUE7UUFFSSxJQUFNLENBQUEsTUFBQSxHQUFXLFNBQVMsQ0FBQztRQUMzQixJQUFRLENBQUEsUUFBQSxHQUFVLFNBQVMsQ0FBQztRQUM1QixJQUFRLENBQUEsUUFBQSxHQUFVLFNBQVMsQ0FBQztRQUM1QixJQUFZLENBQUEsWUFBQSxHQUFTLFNBQVMsQ0FBQztRQUMvQixJQUFRLENBQUEsUUFBQSxHQUFTLFNBQVMsQ0FBQztRQUMzQixJQUFXLENBQUEsV0FBQSxHQUFVLFNBQVMsQ0FBQztRQUMvQixJQUFNLENBQUEsTUFBQSxHQUEyQixTQUFTLENBQUM7S0FDOUM7SUFBRCxPQUFDLGtCQUFBLENBQUE7QUFBRCxDQUFDLEVBQUEsRUFBQTtBQUVELElBQUEsd0JBQUEsa0JBQUEsWUFBQTtBQUFBLElBQUEsU0FBQSx3QkFBQSxHQUFBO1FBRUksSUFBRSxDQUFBLEVBQUEsR0FBUSxTQUFTLENBQUM7UUFDcEIsSUFBUyxDQUFBLFNBQUEsR0FBUSxTQUFTLENBQUM7UUFDM0IsSUFBUSxDQUFBLFFBQUEsR0FBUSxTQUFTLENBQUM7S0FDN0I7SUFBRCxPQUFDLHdCQUFBLENBQUE7QUFBRCxDQUFDLEVBQUEsRUFBQTtBQUdELElBQUEsT0FBQSxrQkFBQSxZQUFBO0FBRUksSUFBQSxTQUFBLE9BQUEsQ0FDYSxpQkFBMEIsRUFDMUIsWUFBbUIsRUFDbkIsYUFBb0IsRUFDcEIsaUJBQXdCLEVBQ3hCLG1CQUEwQixFQUMxQixlQUFzQixFQUN0QixNQUFhLEVBQ2IsTUFBYSxFQUNiLE1BQWEsRUFDYixNQUFhLEVBQ2IsUUFBZSxFQUNmLFlBQW1CLEVBQ25CLE1BQWEsRUFDYixRQUFlLEVBQ2YsT0FBYyxFQUFBO1FBZGQsSUFBaUIsQ0FBQSxpQkFBQSxHQUFqQixpQkFBaUIsQ0FBUztRQUMxQixJQUFZLENBQUEsWUFBQSxHQUFaLFlBQVksQ0FBTztRQUNuQixJQUFhLENBQUEsYUFBQSxHQUFiLGFBQWEsQ0FBTztRQUNwQixJQUFpQixDQUFBLGlCQUFBLEdBQWpCLGlCQUFpQixDQUFPO1FBQ3hCLElBQW1CLENBQUEsbUJBQUEsR0FBbkIsbUJBQW1CLENBQU87UUFDMUIsSUFBZSxDQUFBLGVBQUEsR0FBZixlQUFlLENBQU87UUFDdEIsSUFBTSxDQUFBLE1BQUEsR0FBTixNQUFNLENBQU87UUFDYixJQUFNLENBQUEsTUFBQSxHQUFOLE1BQU0sQ0FBTztRQUNiLElBQU0sQ0FBQSxNQUFBLEdBQU4sTUFBTSxDQUFPO1FBQ2IsSUFBTSxDQUFBLE1BQUEsR0FBTixNQUFNLENBQU87UUFDYixJQUFRLENBQUEsUUFBQSxHQUFSLFFBQVEsQ0FBTztRQUNmLElBQVksQ0FBQSxZQUFBLEdBQVosWUFBWSxDQUFPO1FBQ25CLElBQU0sQ0FBQSxNQUFBLEdBQU4sTUFBTSxDQUFPO1FBQ2IsSUFBUSxDQUFBLFFBQUEsR0FBUixRQUFRLENBQU87UUFDZixJQUFPLENBQUEsT0FBQSxHQUFQLE9BQU8sQ0FBTztLQUcxQjtJQUNMLE9BQUMsT0FBQSxDQUFBO0FBQUQsQ0FBQyxFQUFBLENBQUEsQ0FBQTtBQUlELElBQUEsbUJBQUEsa0JBQUEsVUFBQSxNQUFBLEVBQUE7SUFBeUMsU0FBTyxDQUFBLG1CQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7QUFFNUMsSUFBQSxTQUFBLG1CQUFBLENBQ2EsUUFBZSxFQUNmLFFBQWUsRUFDZixTQUFnQixFQUNoQixpQkFBMEIsRUFDMUIsWUFBbUIsRUFDbkIsYUFBb0IsRUFDcEIsZUFBc0IsRUFDdEIsaUJBQXdCLEVBQ3hCLG1CQUEwQixFQUMxQixNQUFhLEVBQ2IsTUFBYSxFQUNiLE1BQWEsRUFDYixNQUFhLEVBQ2IsUUFBZSxFQUNmLFlBQW1CLEVBQ25CLE1BQWEsRUFDYixRQUFlLEVBQ2YsT0FBYyxFQUNkLFdBQW1CLEVBQUE7QUFuQmhDLFFBQUEsSUFBQSxLQUFBLEdBcUJJLE1BQU0sQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFBLGlCQUFpQixFQUFDLFlBQVksRUFDaEMsYUFBYSxFQUFDLGVBQWUsRUFDN0IsaUJBQWlCLEVBQUMsbUJBQW1CLEVBQ3JDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQ2xDLFlBQVksRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxJQUM1QyxJQUFBLENBQUE7UUF6QlksS0FBUSxDQUFBLFFBQUEsR0FBUixRQUFRLENBQU87UUFDZixLQUFRLENBQUEsUUFBQSxHQUFSLFFBQVEsQ0FBTztRQUNmLEtBQVMsQ0FBQSxTQUFBLEdBQVQsU0FBUyxDQUFPO1FBQ2hCLEtBQWlCLENBQUEsaUJBQUEsR0FBakIsaUJBQWlCLENBQVM7UUFDMUIsS0FBWSxDQUFBLFlBQUEsR0FBWixZQUFZLENBQU87UUFDbkIsS0FBYSxDQUFBLGFBQUEsR0FBYixhQUFhLENBQU87UUFDcEIsS0FBZSxDQUFBLGVBQUEsR0FBZixlQUFlLENBQU87UUFDdEIsS0FBaUIsQ0FBQSxpQkFBQSxHQUFqQixpQkFBaUIsQ0FBTztRQUN4QixLQUFtQixDQUFBLG1CQUFBLEdBQW5CLG1CQUFtQixDQUFPO1FBQzFCLEtBQU0sQ0FBQSxNQUFBLEdBQU4sTUFBTSxDQUFPO1FBQ2IsS0FBTSxDQUFBLE1BQUEsR0FBTixNQUFNLENBQU87UUFDYixLQUFNLENBQUEsTUFBQSxHQUFOLE1BQU0sQ0FBTztRQUNiLEtBQU0sQ0FBQSxNQUFBLEdBQU4sTUFBTSxDQUFPO1FBQ2IsS0FBUSxDQUFBLFFBQUEsR0FBUixRQUFRLENBQU87UUFDZixLQUFZLENBQUEsWUFBQSxHQUFaLFlBQVksQ0FBTztRQUNuQixLQUFNLENBQUEsTUFBQSxHQUFOLE1BQU0sQ0FBTztRQUNiLEtBQVEsQ0FBQSxRQUFBLEdBQVIsUUFBUSxDQUFPO1FBQ2YsS0FBTyxDQUFBLE9BQUEsR0FBUCxPQUFPLENBQU87UUFDZCxLQUFXLENBQUEsV0FBQSxHQUFYLFdBQVcsQ0FBUTs7S0FPL0I7SUFDTCxPQUFDLG1CQUFBLENBQUE7QUFBRCxDQTdCQSxDQUF5QyxPQUFPLENBNkIvQyxFQUFBO0FBRUQsSUFBQSxhQUFBLGtCQUFBLFlBQUE7QUFFSSxJQUFBLFNBQUEsYUFBQSxDQUNhLFFBQWUsRUFDZixRQUFlLEVBQ2YsU0FBZ0IsRUFDaEIsU0FBbUIsRUFBQTtRQUhuQixJQUFRLENBQUEsUUFBQSxHQUFSLFFBQVEsQ0FBTztRQUNmLElBQVEsQ0FBQSxRQUFBLEdBQVIsUUFBUSxDQUFPO1FBQ2YsSUFBUyxDQUFBLFNBQUEsR0FBVCxTQUFTLENBQU87UUFDaEIsSUFBUyxDQUFBLFNBQUEsR0FBVCxTQUFTLENBQVU7S0FFL0I7SUFDTCxPQUFDLGFBQUEsQ0FBQTtBQUFELENBQUMsRUFBQSxFQUFBO0FBRUQsSUFBQSxXQUFBLGtCQUFBLFVBQUEsTUFBQSxFQUFBO0lBQWlDLFNBQStCLENBQUEsV0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBO0FBRTVELElBQUEsU0FBQSxXQUFBLENBQXFCLFNBQXVCLEVBQUE7QUFBNUMsUUFBQSxJQUFBLEtBQUEsR0FFSSxpQkFBTyxJQUNWLElBQUEsQ0FBQTtRQUhvQixLQUFTLENBQUEsU0FBQSxHQUFULFNBQVMsQ0FBYzs7S0FHM0M7QUFFRCxJQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsU0FBUyxHQUFULFlBQUE7QUFDSSxRQUFBLE9BQU8sSUFBSSxDQUFDO0tBQ2YsQ0FBQTtBQUNELElBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxRQUFRLEdBQVIsWUFBQTtBQUNJLFFBQUEsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3QixDQUFBO0lBQ0wsT0FBQyxXQUFBLENBQUE7QUFBRCxDQWJBLENBQWlDLE9BQU8sQ0FhdkMsRUFBQTtBQUVELElBQUEsVUFBQSxrQkFBQSxVQUFBLE1BQUEsRUFBQTtJQUFnQyxTQUE4QixDQUFBLFVBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtJQUUxRCxTQUFxQixVQUFBLENBQUEsTUFBYSxFQUFXLE9BQWMsRUFBQTtRQUEzRCxJQUVJLEtBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTSxLQUFLLENBQUMsSUFDZixJQUFBLENBQUE7UUFIb0IsS0FBTSxDQUFBLE1BQUEsR0FBTixNQUFNLENBQU87UUFBVyxLQUFPLENBQUEsT0FBQSxHQUFQLE9BQU8sQ0FBTzs7S0FHMUQ7QUFFRCxJQUFBLFVBQUEsQ0FBQSxTQUFBLENBQUEsU0FBUyxHQUFULFlBQUE7QUFDSSxRQUFBLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDN0IsQ0FBQTtBQUNELElBQUEsVUFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFRLEdBQVIsWUFBQTtBQUNJLFFBQUEsT0FBTyxJQUFJLENBQUM7S0FDZixDQUFBO0lBQ0wsT0FBQyxVQUFBLENBQUE7QUFBRCxDQWJBLENBQWdDLE1BQU0sQ0FhckMsRUFBQTtBQUVELElBQUEsZ0JBQUEsa0JBQUEsVUFBQSxNQUFBLEVBQUE7SUFBc0MsU0FBeUMsQ0FBQSxnQkFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBO0FBRTNFLElBQUEsU0FBQSxnQkFBQSxDQUFxQixPQUFnQixFQUFBO0FBQXJDLFFBQUEsSUFBQSxLQUFBLEdBRUksaUJBQU8sSUFDVixJQUFBLENBQUE7UUFIb0IsS0FBTyxDQUFBLE9BQUEsR0FBUCxPQUFPLENBQVM7O0tBR3BDO0FBRUQsSUFBQSxnQkFBQSxDQUFBLFNBQUEsQ0FBQSxTQUFTLEdBQVQsWUFBQTtBQUNJLFFBQUEsT0FBTyxJQUFJLENBQUM7S0FDZixDQUFBO0FBQ0QsSUFBQSxnQkFBQSxDQUFBLFNBQUEsQ0FBQSxRQUFRLEdBQVIsWUFBQTtBQUNJLFFBQUEsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3QixDQUFBO0lBQ0wsT0FBQyxnQkFBQSxDQUFBO0FBQUQsQ0FiQSxDQUFzQyxPQUFPLENBYTVDLEVBQUE7QUFFRCxJQUFBLGVBQUEsa0JBQUEsVUFBQSxNQUFBLEVBQUE7SUFBcUMsU0FBd0MsQ0FBQSxlQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7SUFFekUsU0FBcUIsZUFBQSxDQUFBLE1BQWEsRUFBVyxPQUFjLEVBQUE7UUFBM0QsSUFFSSxLQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQU0sS0FBSyxDQUFDLElBQ2YsSUFBQSxDQUFBO1FBSG9CLEtBQU0sQ0FBQSxNQUFBLEdBQU4sTUFBTSxDQUFPO1FBQVcsS0FBTyxDQUFBLE9BQUEsR0FBUCxPQUFPLENBQU87O0tBRzFEO0FBRUQsSUFBQSxlQUFBLENBQUEsU0FBQSxDQUFBLFNBQVMsR0FBVCxZQUFBO0FBQ0ksUUFBQSxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzdCLENBQUE7QUFDRCxJQUFBLGVBQUEsQ0FBQSxTQUFBLENBQUEsUUFBUSxHQUFSLFlBQUE7QUFDSSxRQUFBLE9BQU8sSUFBSSxDQUFDO0tBQ2YsQ0FBQTtJQUNMLE9BQUMsZUFBQSxDQUFBO0FBQUQsQ0FiQSxDQUFxQyxNQUFNLENBYTFDOztBQ2hRRCxJQUFBLE1BQUEsa0JBQUEsWUFBQTtBQVNJLElBQUEsU0FBQSxNQUFBLENBQXFCLE9BQWMsRUFDdEIsZ0JBQTBFLEVBQzFFLE9BQXFELEVBQ3JELGFBQW1FLEVBQUE7QUFGbkUsUUFBQSxJQUFBLGdCQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUEsRUFBQSxnQkFBMEUsR0FBQSxnREFBQSxDQUFBLEVBQUE7QUFDMUUsUUFBQSxJQUFBLE9BQUEsS0FBQSxLQUFBLENBQUEsRUFBQSxFQUFBLE9BQXFELEdBQUEsb0NBQUEsQ0FBQSxFQUFBO0FBQ3JELFFBQUEsSUFBQSxhQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUEsRUFBQSxhQUFtRSxHQUFBLDRDQUFBLENBQUEsRUFBQTtRQUgzRCxJQUFPLENBQUEsT0FBQSxHQUFQLE9BQU8sQ0FBTztRQUN0QixJQUFnQixDQUFBLGdCQUFBLEdBQWhCLGdCQUFnQixDQUEwRDtRQUMxRSxJQUFPLENBQUEsT0FBQSxHQUFQLE9BQU8sQ0FBOEM7UUFDckQsSUFBYSxDQUFBLGFBQUEsR0FBYixhQUFhLENBQXNEO1FBUHhFLElBQW9CLENBQUEsb0JBQUEsR0FBYSxTQUFTLENBQUM7UUFDM0MsSUFBVyxDQUFBLFdBQUEsR0FBYSxTQUFTLENBQUM7UUFDbEMsSUFBaUIsQ0FBQSxpQkFBQSxHQUFhLFNBQVMsQ0FBQztBQU81QyxRQUFBLElBQUksQ0FBQywyQkFBMkIsR0FBRSxJQUFJLGVBQWUsRUFBRSxDQUFDO0FBQ3hELFFBQUEsSUFBSSxDQUFDLGtCQUFrQixHQUFFLElBQUksZUFBZSxFQUFFLENBQUM7QUFDL0MsUUFBQSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztLQUN6RDtBQUVLLElBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxZQUFZLEdBQWxCLFVBQW1CLEtBQVksRUFBRSxPQUEyRCxFQUFBO0FBQTNELFFBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUEsRUFBQSxPQUFBLEdBQThCLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFBLEVBQUE7Ozs7Ozs7QUFJcEYsd0JBQUEsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxDQUFDLENBQUM7d0JBRTNELEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQzt3QkFFMUQsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO0FBQ1osNEJBQUEsSUFBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDO2dDQUNqQixHQUFHLEdBQUcsR0FBRyxHQUFFLFdBQVcsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hDLDZCQUFBO0FBQ0csaUNBQUE7Z0NBQ0EsR0FBRyxHQUFHLEdBQUcsR0FBRSxXQUFXLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4Qyw2QkFBQTtBQUNKLHlCQUFBO0FBRUQsd0JBQUEsSUFBRyxJQUFJLENBQUMsb0JBQW9CLEtBQUssU0FBUyxFQUFDO0FBQ3ZDLDRCQUFBLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUM7QUFDdEMsNEJBQUEsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3pDLDRCQUFBLElBQUksQ0FBQywyQkFBMkIsR0FBRSxJQUFJLGVBQWUsRUFBRSxDQUFDO0FBQzNELHlCQUFBO0FBRUQsd0JBQUEsRUFBQSxHQUFBLElBQUksQ0FBQTt3QkFBd0IsT0FBTSxDQUFBLENBQUEsWUFBQSxLQUFLLENBQUMsR0FBRyxFQUFFO0FBQ3pDLGdDQUFBLE1BQU0sRUFBRSxNQUFNO0FBQ2QsZ0NBQUEsTUFBTSxFQUFFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNO0FBQy9DLGdDQUFBLE9BQU8sRUFBRTtBQUNMLG9DQUFBLGNBQWMsRUFBRSxrQkFBa0I7QUFDckMsaUNBQUE7QUFDRCxnQ0FBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFDaEMsNkJBQUEsQ0FBQyxDQUFBLENBQUE7O3dCQVBGLEVBQUssQ0FBQSxvQkFBb0IsR0FBRyxFQUFBLENBQUEsSUFBQSxFQU8xQixDQUFDOzhCQUdBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFBLEVBQXZDLE9BQXVDLENBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQSxDQUFBO0FBRXJCLHdCQUFBLE9BQUEsQ0FBQSxDQUFBLFlBQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFBLENBQUE7O0FBQWpELHdCQUFBLE1BQUEsR0FBVyxFQUFzQyxDQUFBLElBQUEsRUFBQSxDQUFBO0FBQ2pELHdCQUFBLFdBQVcsR0FBSSxNQUFJLENBQUMsV0FBMkIsQ0FBQztBQUN0RCx3QkFBQSxPQUFBLENBQUEsQ0FBQSxhQUFPLElBQUksbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtBQUcvQixvQkFBQSxLQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFBOztBQUFqRCx3QkFBQSxJQUFJLEdBQU8sRUFBc0MsQ0FBQSxJQUFBLEVBQUEsQ0FBQTtBQUN2RCx3QkFBQSxPQUFBLENBQUEsQ0FBQSxhQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTs7O3dCQUk3RSxJQUFHLEtBQUcsWUFBWSxLQUFLLEVBQ3ZCO0FBQ0ksNEJBQUEsSUFBRyxLQUFHLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBQztBQUN6QixnQ0FBQSxPQUFBLENBQUEsQ0FBQSxhQUFPLElBQUksbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN0Qyw2QkFBQTs0QkFDRCxPQUFPLENBQUEsQ0FBQSxhQUFBLElBQUksa0JBQWtCLENBQUMsR0FBRyxFQUFDLEtBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQ2xELHlCQUFBO0FBRUQsd0JBQUEsT0FBQSxDQUFBLENBQUEsYUFBTyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBQyxjQUFjLENBQUMsQ0FBQyxDQUFBOztBQUlqRCx3QkFBQSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDOzs7Ozs7QUFFOUMsS0FBQSxDQUFBO0lBR0ssTUFBRyxDQUFBLFNBQUEsQ0FBQSxHQUFBLEdBQVQsVUFBVSxFQUFTLEVBQUE7Ozs7Ozs7d0JBSVAsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsQ0FBQzt3QkFFM0MsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO0FBQ1osNEJBQUEsSUFBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDO2dDQUNqQixHQUFHLEdBQUcsR0FBRyxHQUFFLFdBQVcsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hDLDZCQUFBO0FBQ0csaUNBQUE7Z0NBQ0EsR0FBRyxHQUFHLEdBQUcsR0FBRSxXQUFXLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4Qyw2QkFBQTtBQUNKLHlCQUFBO0FBRUQsd0JBQUEsSUFBRyxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBQztBQUM5Qiw0QkFBQSxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztBQUM3Qiw0QkFBQSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEMsNEJBQUEsSUFBSSxDQUFDLGtCQUFrQixHQUFFLElBQUksZUFBZSxFQUFFLENBQUM7QUFDbEQseUJBQUE7QUFFRCx3QkFBQSxFQUFBLEdBQUEsSUFBSSxDQUFBO3dCQUFlLE9BQU0sQ0FBQSxDQUFBLFlBQUEsS0FBSyxDQUFDLEdBQUcsRUFDbEM7QUFDSSxnQ0FBQSxNQUFNLEVBQUUsS0FBSztBQUNiLGdDQUFBLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTTtBQUN0QyxnQ0FBQSxPQUFPLEVBQUU7QUFDTCxvQ0FBQSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3JDLGlDQUFBO0FBQ0osNkJBQUEsQ0FBQyxDQUFBLENBQUE7O3dCQVBGLEVBQUssQ0FBQSxXQUFXLEdBQUcsRUFBQSxDQUFBLElBQUEsRUFPakIsQ0FBQzs4QkFFQSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUEsRUFBOUIsT0FBOEIsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBLENBQUE7QUFDWix3QkFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQTs7QUFBeEMsd0JBQUEsTUFBQSxHQUFXLEVBQTZCLENBQUEsSUFBQSxFQUFBLENBQUE7d0JBQ3hDLE9BQU8sR0FBSSxNQUEyQixDQUFDO0FBQzdDLHdCQUFBLE9BQUEsQ0FBQSxDQUFBLGFBQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUdsQixvQkFBQSxLQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQTs7QUFBeEMsd0JBQUEsSUFBSSxHQUFPLEVBQTZCLENBQUEsSUFBQSxFQUFBLENBQUE7QUFDOUMsd0JBQUEsT0FBQSxDQUFBLENBQUEsYUFBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTs7O3dCQUkzRCxJQUFHLEtBQUcsWUFBWSxLQUFLLEVBQ3ZCOzRCQUNJLE9BQU8sQ0FBQSxDQUFBLGFBQUEsSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFDLEtBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQ3pDLHlCQUFBO0FBRUQsd0JBQUEsT0FBQSxDQUFBLENBQUEsYUFBTyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTs7QUFHekMsd0JBQUEsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7Ozs7OztBQUVwQyxLQUFBLENBQUE7SUFFSyxNQUFJLENBQUEsU0FBQSxDQUFBLElBQUEsR0FBVixVQUFXLFFBQWUsRUFBQTs7Ozs7Ozt3QkFJRCxPQUFNLENBQUEsQ0FBQSxZQUFBLEtBQUssQ0FBQyxpQ0FBQSxDQUFBLE1BQUEsQ0FBa0MsUUFBUSxFQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBWSxJQUFJLENBQUMsT0FBTyxFQUFjLGNBQUEsQ0FBQSxDQUFDLENBQUEsQ0FBQTs7QUFBeEcsd0JBQUEsUUFBUSxHQUFHLEVBQTZGLENBQUEsSUFBQSxFQUFBLENBQUE7QUFFM0csd0JBQUEsSUFBQSxFQUFBLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFBLEVBQXRCLE9BQXNCLENBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0osd0JBQUEsT0FBQSxDQUFBLENBQUEsWUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQTs7QUFBaEMsd0JBQUEsTUFBQSxHQUFXLEVBQXFCLENBQUEsSUFBQSxFQUFBLENBQUE7d0JBQ2hDLFNBQVMsR0FBSSxNQUFxQixDQUFDO0FBQ3pDLHdCQUFBLE9BQUEsQ0FBQSxDQUFBLGFBQU8sSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtBQUdyQixvQkFBQSxLQUFBLENBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFBOztBQUFoQyx3QkFBQSxJQUFJLEdBQU8sRUFBcUIsQ0FBQSxJQUFBLEVBQUEsQ0FBQTt3QkFDdEMsT0FBTyxDQUFBLENBQUEsYUFBQSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBOzs7d0JBSXBELElBQUcsS0FBRyxZQUFZLEtBQUssRUFDdkI7NEJBQ0ksT0FBTyxDQUFBLENBQUEsYUFBQSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUMsS0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDMUMseUJBQUE7QUFFRCx3QkFBQSxPQUFBLENBQUEsQ0FBQSxhQUFPLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBQyxjQUFjLENBQUMsQ0FBQyxDQUFBOzs7OztBQUVqRCxLQUFBLENBQUE7QUFHSyxJQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsU0FBUyxHQUFmLFVBQWdCLElBQVcsRUFBRSxPQUFxRCxFQUFBO0FBQXJELFFBQUEsSUFBQSxPQUFBLEtBQUEsS0FBQSxDQUFBLEVBQUEsRUFBQSxPQUFBLEdBQTJCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFBLEVBQUE7Ozs7Ozs7QUFJMUUsd0JBQUEsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxDQUFDLENBQUM7d0JBRXhELEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7d0JBRXJELElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztBQUNaLDRCQUFBLElBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQztnQ0FDakIsR0FBRyxHQUFHLEdBQUcsR0FBRSxXQUFXLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4Qyw2QkFBQTtBQUNHLGlDQUFBO2dDQUNBLEdBQUcsR0FBRyxHQUFHLEdBQUUsV0FBVyxHQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEMsNkJBQUE7QUFDSix5QkFBQTtBQUVELHdCQUFBLElBQUcsSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsRUFBQztBQUNwQyw0QkFBQSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBQ25DLDRCQUFBLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0Qyw0QkFBQSxJQUFJLENBQUMsd0JBQXdCLEdBQUUsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUN4RCx5QkFBQTtBQUVELHdCQUFBLEVBQUEsR0FBQSxJQUFJLENBQUE7d0JBQXFCLE9BQU0sQ0FBQSxDQUFBLFlBQUEsS0FBSyxDQUFDLEdBQUcsRUFBRTtBQUN0QyxnQ0FBQSxNQUFNLEVBQUUsTUFBTTtBQUNkLGdDQUFBLE1BQU0sRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTTtBQUMvQyxnQ0FBQSxPQUFPLEVBQUU7QUFDTCxvQ0FBQSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3JDLGlDQUFBO0FBQ0QsZ0NBQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQ2hDLDZCQUFBLENBQUMsQ0FBQSxDQUFBOzt3QkFQRixFQUFLLENBQUEsaUJBQWlCLEdBQUcsRUFBQSxDQUFBLElBQUEsRUFPdkIsQ0FBQzs4QkFHQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQSxFQUFwQyxPQUFvQyxDQUFBLENBQUEsWUFBQSxDQUFBLENBQUEsQ0FBQTtBQUVsQix3QkFBQSxPQUFBLENBQUEsQ0FBQSxZQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFBOztBQUE5Qyx3QkFBQSxNQUFBLEdBQVcsRUFBbUMsQ0FBQSxJQUFBLEVBQUEsQ0FBQTt3QkFDOUMsT0FBTyxHQUFJLE1BQWdCLENBQUM7QUFDbEMsd0JBQUEsT0FBQSxDQUFBLENBQUEsYUFBTyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFHeEIsb0JBQUEsS0FBQSxDQUFBLEVBQUEsT0FBQSxDQUFBLENBQUEsWUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQTs7QUFBOUMsd0JBQUEsSUFBSSxHQUFPLEVBQW1DLENBQUEsSUFBQSxFQUFBLENBQUE7QUFDcEQsd0JBQUEsT0FBQSxDQUFBLENBQUEsYUFBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBOzs7d0JBSXZFLElBQUcsS0FBRyxZQUFZLEtBQUssRUFDdkI7QUFDSSw0QkFBQSxJQUFHLEtBQUcsQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFDO0FBQ3pCLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLGFBQU8sSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ25DLDZCQUFBOzRCQUNELE9BQU8sQ0FBQSxDQUFBLGFBQUEsSUFBSSxlQUFlLENBQUMsR0FBRyxFQUFDLEtBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQy9DLHlCQUFBO0FBRUQsd0JBQUEsT0FBQSxDQUFBLENBQUEsYUFBTyxJQUFJLGVBQWUsQ0FBQyxHQUFHLEVBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTs7QUFJOUMsd0JBQUEsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQzs7Ozs7O0FBRTNDLEtBQUEsQ0FBQTtJQUVMLE9BQUMsTUFBQSxDQUFBO0FBQUQsQ0FBQyxFQUFBOzs7OyJ9

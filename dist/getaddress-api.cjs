'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fetch = require('node-fetch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

class Suggestion {
    constructor(address, url, id) {
        this.address = address;
        this.url = url;
        this.id = id;
    }
}
class Result {
    constructor(isSuccess) {
        this.isSuccess = isSuccess;
    }
}
class Success extends Result {
    constructor() {
        super(true);
    }
}
class AutocompleteSuccess extends Success {
    constructor(suggestions) {
        super();
        this.suggestions = suggestions;
    }
    toSuccess() {
        return this;
    }
    toFailed() {
        throw new Error('Did not fail');
    }
}
class GetSuccess extends Success {
    constructor(address) {
        super();
        this.address = address;
    }
    toSuccess() {
        return this;
    }
    toFailed() {
        throw new Error('Did not fail');
    }
}
class FindSuccess extends Success {
    constructor(addresses) {
        super();
        this.addresses = addresses;
    }
    toSuccess() {
        return this;
    }
    toFailed() {
        throw new Error('Did not fail');
    }
}
class FindFailed extends Result {
    constructor(status, message) {
        super(false);
        this.status = status;
        this.message = message;
    }
    toSuccess() {
        throw new Error('Not a success');
    }
    toFailed() {
        return this;
    }
}
class AutocompleteFailed extends Result {
    constructor(status, message) {
        super(false);
        this.status = status;
        this.message = message;
    }
    toSuccess() {
        throw new Error('Not a success');
    }
    toFailed() {
        return this;
    }
}
class GetFailed extends Result {
    constructor(status, message) {
        super(false);
        this.status = status;
        this.message = message;
    }
    toSuccess() {
        throw new Error('Not a success');
    }
    toFailed() {
        return this;
    }
}
class AutocompleteOptions {
    constructor() {
        this.all = false;
        this.template = null;
        this.top = null;
    }
    static Default() {
        let options = new AutocompleteOptions();
        options.all = true;
        return options;
    }
}
class Address {
    constructor(formatted_address, thoroughfare, building_name, sub_building_name, sub_building_number, building_number, line_1, line_2, line_3, line_4, locality, town_or_city, county, district, country) {
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
}
class FindAddresses {
    constructor(postcode, latitude, longitude, addresses) {
        this.postcode = postcode;
        this.latitude = latitude;
        this.longitude = longitude;
        this.addresses = addresses;
    }
}
class AutocompleteAddress extends Address {
    constructor(postcode, latitude, longitude, formatted_address, thoroughfare, building_name, building_number, sub_building_name, sub_building_number, line_1, line_2, line_3, line_4, locality, town_or_city, county, district, country, residential) {
        super(formatted_address, thoroughfare, building_name, building_number, sub_building_name, sub_building_number, line_1, line_2, line_3, line_3, line_4, town_or_city, county, district, country);
        this.postcode = postcode;
        this.latitude = latitude;
        this.longitude = longitude;
        this.formatted_address = formatted_address;
        this.thoroughfare = thoroughfare;
        this.building_name = building_name;
        this.building_number = building_number;
        this.sub_building_name = sub_building_name;
        this.sub_building_number = sub_building_number;
        this.line_1 = line_1;
        this.line_2 = line_2;
        this.line_3 = line_3;
        this.line_4 = line_4;
        this.locality = locality;
        this.town_or_city = town_or_city;
        this.county = county;
        this.district = district;
        this.country = country;
        this.residential = residential;
    }
}

class GetAddressClient {
    constructor(api_key) {
        this.api_key = api_key;
    }
    async autocomplete(query, options = AutocompleteOptions.Default()) {
        try {
            const response = await fetch__default["default"](`https://api.getaddress.io/autocomplete/${query}?api-key=${this.api_key}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    all: options.all,
                    template: options.template,
                    top: options.top
                })
            });
            if (response.status == 200) {
                const json = await response.json();
                const suggestions = json.suggestions;
                return new AutocompleteSuccess(suggestions);
            }
            const json = await response.json();
            return new AutocompleteFailed(response.status, json.Message);
        }
        catch (err) {
            if (err instanceof Error) {
                return new AutocompleteFailed(401, err.message);
            }
            return new AutocompleteFailed(401, 'Unauthorised');
        }
    }
    async get(id) {
        try {
            const response = await fetch__default["default"](`https://api.getaddress.io/get/${id}?api-key=${this.api_key}`);
            if (response.status == 200) {
                const json = await response.json();
                const address = json;
                return new GetSuccess(address);
            }
            const json = await response.json();
            return new GetFailed(response.status, json.Message);
        }
        catch (err) {
            if (err instanceof Error) {
                return new GetFailed(401, err.message);
            }
            return new GetFailed(401, 'Unauthorised');
        }
    }
    async find(postcode) {
        try {
            const response = await fetch__default["default"](`https://api.getaddress.io/find/${postcode}?api-key=${this.api_key}&expand=true`);
            if (response.status == 200) {
                const json = await response.json();
                const addresses = json;
                return new FindSuccess(addresses);
            }
            const json = await response.json();
            return new FindFailed(response.status, json.Message);
        }
        catch (err) {
            if (err instanceof Error) {
                return new FindFailed(401, err.message);
            }
            return new FindFailed(401, 'Unauthorised');
        }
    }
}

exports.Address = Address;
exports.AutocompleteAddress = AutocompleteAddress;
exports.AutocompleteFailed = AutocompleteFailed;
exports.AutocompleteOptions = AutocompleteOptions;
exports.AutocompleteSuccess = AutocompleteSuccess;
exports.FindAddresses = FindAddresses;
exports.FindFailed = FindFailed;
exports.FindSuccess = FindSuccess;
exports.GetAddressClient = GetAddressClient;
exports.GetFailed = GetFailed;
exports.GetSuccess = GetSuccess;
exports.Result = Result;
exports.Success = Success;
exports.Suggestion = Suggestion;
exports["default"] = GetAddressClient;

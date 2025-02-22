'use strict';

/* eslint-disable class-methods-use-this */
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
class LocationSuccess extends Success {
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
class GetLocationSuccess extends Success {
    constructor(location) {
        super();
        this.location = location;
    }
    toSuccess() {
        return this;
    }
    toFailed() {
        throw new Error('Did not fail');
    }
}
class GetLocationFailed extends Result {
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
class LocationFailed extends Result {
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
class FindSuccess extends Success {
    constructor(addresses) {
        super();
        this.addresses = addresses;
    }
    toSuccess() {
        return this;
    }
    toFailed() {
        throw new Error('failed');
    }
}
class FindFailed extends Result {
    constructor(status, message) {
        super(false);
        this.status = status;
        this.message = message;
    }
    toSuccess() {
        throw new Error('failed');
    }
    toFailed() {
        return this;
    }
}
class TypeaheadSuccess extends Success {
    constructor(results) {
        super();
        this.results = results;
    }
    toSuccess() {
        return this;
    }
    toFailed() {
        throw new Error('failed');
    }
}
class TypeaheadFailed extends Result {
    constructor(status, message) {
        super(false);
        this.status = status;
        this.message = message;
    }
    toSuccess() {
        throw new Error('failed');
    }
    toFailed() {
        return this;
    }
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Client {
    constructor(api_key, autocomplete_url = 'https://api.getaddress.io/autocomplete/{query}', get_url = 'https://api.getaddress.io/get/{id}', location_url = 'https://api.getaddress.io/location/{query}', get_location_url = 'https://api.getaddress.io/get-location/{id}', typeahead_url = 'https://api.getaddress.io/typeahead/{term}') {
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
    location(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, options = {}) {
            try {
                const combinedOptions = Object.assign({ all: true }, options);
                let url = this.location_url.replace(/{query}/i, query);
                if (this.api_key) {
                    if (url.includes('?')) {
                        url = `${url}&api-key=${this.api_key}`;
                    }
                    else {
                        url = `${url}?api-key=${this.api_key}`;
                    }
                }
                if (this.locationResponse !== undefined) {
                    this.locationResponse = undefined;
                    this.locationAbortController.abort();
                    this.locationAbortController = new AbortController();
                }
                this.locationResponse = yield fetch(url, {
                    method: 'post',
                    signal: this.locationAbortController.signal,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(combinedOptions),
                });
                if (this.locationResponse.status === 200) {
                    const json = yield this.locationResponse.json();
                    const suggestions = json.suggestions;
                    return new LocationSuccess(suggestions);
                }
                const json = yield this.locationResponse.json();
                return new LocationFailed(this.locationResponse.status, json.Message);
            }
            catch (err) {
                if (err instanceof Error) {
                    if (err.name === 'AbortError') {
                        return new LocationSuccess([]);
                    }
                    return new LocationFailed(401, err.message);
                }
                return new LocationFailed(401, 'Unauthorised');
            }
            finally {
                this.locationResponse = undefined;
            }
        });
    }
    getLocation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let url = this.get_location_url.replace(/{id}/i, id);
                if (this.api_key) {
                    if (url.includes('?')) {
                        url = `${url}&api-key=${this.api_key}`;
                    }
                    else {
                        url = `${url}?api-key=${this.api_key}`;
                    }
                }
                if (this.getLocationResponse !== undefined) {
                    this.getLocationResponse = undefined;
                    this.getLocationAbortController.abort();
                    this.getLocationAbortController = new AbortController();
                }
                this.getLocationResponse = yield fetch(url, {
                    method: 'get',
                    signal: this.getLocationAbortController.signal,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (this.getLocationResponse.status === 200) {
                    const json = yield this.getLocationResponse.json();
                    const loaction = json;
                    return new GetLocationSuccess(loaction);
                }
                const json = yield this.getLocationResponse.json();
                return new GetLocationFailed(this.getLocationResponse.status, json.Message);
            }
            catch (err) {
                if (err instanceof Error) {
                    return new GetLocationFailed(401, err.message);
                }
                return new GetLocationFailed(401, 'Unauthorised');
            }
            finally {
                this.getResponse = undefined;
            }
        });
    }
    autocomplete(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, options = {}) {
            try {
                const combinedOptions = Object.assign({ all: true }, options);
                let url = this.autocomplete_url.replace(/{query}/i, query);
                if (this.api_key) {
                    if (url.includes('?')) {
                        url = `${url}&api-key=${this.api_key}`;
                    }
                    else {
                        url = `${url}?api-key=${this.api_key}`;
                    }
                }
                if (this.autocompleteResponse !== undefined) {
                    this.autocompleteResponse = undefined;
                    this.autocompleteAbortController.abort();
                    this.autocompleteAbortController = new AbortController();
                }
                this.autocompleteResponse = yield fetch(url, {
                    method: 'post',
                    signal: this.autocompleteAbortController.signal,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(combinedOptions)
                });
                if (this.autocompleteResponse.status === 200) {
                    const json = yield this.autocompleteResponse.json();
                    const suggestions = json.suggestions;
                    return new AutocompleteSuccess(suggestions);
                }
                const json = yield this.autocompleteResponse.json();
                return new AutocompleteFailed(this.autocompleteResponse.status, json.Message);
            }
            catch (err) {
                if (err instanceof Error) {
                    if (err.name === 'AbortError') {
                        return new AutocompleteSuccess([]);
                    }
                    return new AutocompleteFailed(401, err.message);
                }
                return new AutocompleteFailed(401, 'Unauthorised');
            }
            finally {
                this.autocompleteResponse = undefined;
            }
        });
    }
    get(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, options = {}) {
            try {
                let url = this.get_url.replace(/{id}/i, id);
                if (this.api_key) {
                    if (url.includes('?')) {
                        url = `${url}&api-key=${this.api_key}`;
                    }
                    else {
                        url = `${url}?api-key=${this.api_key}`;
                    }
                }
                if (options.remember === false) {
                    url = `${url}&remember=false`;
                }
                if (this.getResponse !== undefined) {
                    this.getResponse = undefined;
                    this.getAbortController.abort();
                    this.getAbortController = new AbortController();
                }
                this.getResponse = yield fetch(url, {
                    method: 'get',
                    signal: this.getAbortController.signal,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (this.getResponse.status === 200) {
                    const json = yield this.getResponse.json();
                    const address = json;
                    return new GetSuccess(address);
                }
                const json = yield this.getResponse.json();
                return new GetFailed(this.getResponse.status, json.Message);
            }
            catch (err) {
                if (err instanceof Error) {
                    return new GetFailed(401, err.message);
                }
                return new GetFailed(401, 'Unauthorised');
            }
            finally {
                this.getResponse = undefined;
            }
        });
    }
    find(postcode) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`https://api.getaddress.io/find/${postcode}?api-key=${this.api_key}&expand=true`);
                if (response.status === 200) {
                    const json = yield response.json();
                    const addresses = json;
                    return new FindSuccess(addresses);
                }
                const json = yield response.json();
                return new FindFailed(response.status, json.Message);
            }
            catch (err) {
                if (err instanceof Error) {
                    return new FindFailed(401, err.message);
                }
                return new FindFailed(401, 'Unauthorised');
            }
        });
    }
    typeahead(term_1) {
        return __awaiter(this, arguments, void 0, function* (term, options = {}) {
            try {
                let url = this.typeahead_url.replace(/{term}/i, term);
                if (this.api_key) {
                    if (url.includes('?')) {
                        url = `${url}&api-key=${this.api_key}`;
                    }
                    else {
                        url = `${url}?api-key=${this.api_key}`;
                    }
                }
                if (this.typeaheadResponse !== undefined) {
                    this.typeaheadResponse = undefined;
                    this.typeaheadAbortController.abort();
                    this.typeaheadAbortController = new AbortController();
                }
                this.typeaheadResponse = yield fetch(url, {
                    method: 'post',
                    signal: this.typeaheadAbortController.signal,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(options),
                });
                if (this.typeaheadResponse.status === 200) {
                    const json = yield this.typeaheadResponse.json();
                    const results = json;
                    return new TypeaheadSuccess(results);
                }
                const json = yield this.typeaheadResponse.json();
                return new TypeaheadFailed(this.typeaheadResponse.status, json.Message);
            }
            catch (err) {
                if (err instanceof Error) {
                    if (err.name === 'AbortError') {
                        return new TypeaheadSuccess([]);
                    }
                    return new TypeaheadFailed(401, err.message);
                }
                return new TypeaheadFailed(401, 'Unauthorised');
            }
            finally {
                this.typeaheadResponse = undefined;
            }
        });
    }
}

module.exports = Client;

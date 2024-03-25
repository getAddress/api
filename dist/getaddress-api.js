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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
    location(query, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
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
                    const loaction = json;
                    return new GetLocationSuccess(loaction);
                }
                const json = yield this.getResponse.json();
                return new GetLocationFailed(this.getResponse.status, json.Message);
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
    autocomplete(query, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
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
                    body: JSON.stringify(combinedOptions),
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
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
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
    typeahead(term, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
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
                    signal: this.autocompleteAbortController.signal,
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

export { AutocompleteFailed, AutocompleteSuccess, Client, FindFailed, FindSuccess, GetFailed, GetLocationFailed, GetLocationSuccess, GetSuccess, LocationFailed, LocationSuccess, Result, TypeaheadFailed, TypeaheadSuccess, Client as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9UeXBlcy50cyIsIi4uL3NyYy9DbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uU3VnZ2VzdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVzdWx0PFMsIEY+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBpc1N1Y2Nlc3M6IGJvb2xlYW4pIHtcclxuXHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCB0b1N1Y2Nlc3MoKTogUztcclxuXHJcbiAgYWJzdHJhY3QgdG9GYWlsZWQoKTogRjtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1Y2Nlc3M8UywgRj4gZXh0ZW5kcyBSZXN1bHQ8UywgRj4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCB0b1N1Y2Nlc3MoKTogUztcclxuXHJcbiAgYWJzdHJhY3QgdG9GYWlsZWQoKTogRjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIEF1dG9jb21wbGV0ZUZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN1Z2dlc3Rpb25zOiBTdWdnZXN0aW9uW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogQXV0b2NvbXBsZXRlU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEF1dG9jb21wbGV0ZUZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8TG9jYXRpb25TdWNjZXNzLCBMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN1Z2dlc3Rpb25zOiBMb2NhdGlvblN1Z2dlc3Rpb25bXSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBMb2NhdGlvblN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBMb2NhdGlvbkZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEdldFN1Y2Nlc3MsIEdldEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3M6IEF1dG9jb21wbGV0ZUFkZHJlc3MpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogR2V0U3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEdldEZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpZCBub3QgZmFpbCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldExvY2F0aW9uU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8R2V0TG9jYXRpb25TdWNjZXNzLCBHZXRMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGxvY2F0aW9uOiBMb2NhdGlvbkFkZHJlc3MpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogR2V0TG9jYXRpb25TdWNjZXNzIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogR2V0TG9jYXRpb25GYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb2NhdGlvbkZhaWxlZCBleHRlbmRzIFJlc3VsdDxHZXRMb2NhdGlvblN1Y2Nlc3MsIEdldExvY2F0aW9uRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldExvY2F0aW9uU3VjY2VzcyB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHN1Y2Nlc3MnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEdldExvY2F0aW9uRmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUZhaWxlZCBleHRlbmRzIFJlc3VsdDxBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogQXV0b2NvbXBsZXRlU3VjY2VzcyB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHN1Y2Nlc3MnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEF1dG9jb21wbGV0ZUZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25GYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8TG9jYXRpb25TdWNjZXNzLCBMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLCByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBMb2NhdGlvblN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBMb2NhdGlvbkZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8R2V0U3VjY2VzcywgR2V0RmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldFN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZU9wdGlvbnMge1xyXG4gIGFsbDogYm9vbGVhbjtcclxuICB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGZpbHRlcjogUGFydGlhbDxBdXRvY29tcGxldGVGaWx0ZXI+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uT3B0aW9ucyB7XHJcbiAgdGVtcGxhdGU6IHN0cmluZztcclxuICB0ZW1wbGF0ZV9vdXRjb2RlOiBzdHJpbmc7XHJcbiAgdGVtcGxhdGVfcG9zdGNvZGU6IHN0cmluZztcclxuICB0b3A6IG51bWJlcjtcclxuICBmaWx0ZXI6IFBhcnRpYWw8TG9jYXRpb25GaWx0ZXI+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFR5cGVhaGVhZE9wdGlvbnMge1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIHNlYXJjaDogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzIHtcclxuICBrbTogbnVtYmVyO1xyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25GaWx0ZXJSYWRpdXMge1xyXG4gIGttOiBudW1iZXI7XHJcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgbGF0aXR1ZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVGaWx0ZXIge1xyXG4gIGNvdW50eTogc3RyaW5nO1xyXG4gIGxvY2FsaXR5OiBzdHJpbmc7XHJcbiAgZGlzdHJpY3Q6IHN0cmluZztcclxuICB0b3duX29yX2NpdHk6IHN0cmluZztcclxuICBwb3N0Y29kZTogc3RyaW5nO1xyXG4gIHJlc2lkZW50aWFsOiBib29sZWFuO1xyXG4gIHJhZGl1czogQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uRmlsdGVyIHtcclxuICBjb3VudHk6IHN0cmluZztcclxuICBjb3VudHJ5OnN0cmluZyxcclxuICB0b3duX29yX2NpdHk6IHN0cmluZztcclxuICBhcmVhOnN0cmluZyxcclxuICBwb3N0Y29kZTogc3RyaW5nO1xyXG4gIG91dGNvZGU6IHN0cmluZyxcclxuICByYWRpdXM6IExvY2F0aW9uRmlsdGVyUmFkaXVzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xyXG4gIGZvcm1hdHRlZF9hZGRyZXNzOiBzdHJpbmdbXSxcclxuICB0aG9yb3VnaGZhcmU6IHN0cmluZyxcclxuICBidWlsZGluZ19uYW1lOiBzdHJpbmcsXHJcbiAgc3ViX2J1aWxkaW5nX25hbWU6IHN0cmluZyxcclxuICBzdWJfYnVpbGRpbmdfbnVtYmVyOiBzdHJpbmcsXHJcbiAgYnVpbGRpbmdfbnVtYmVyOiBzdHJpbmcsXHJcbiAgbGluZV8xOiBzdHJpbmcsXHJcbiAgbGluZV8yOiBzdHJpbmcsXHJcbiAgbGluZV8zOiBzdHJpbmcsXHJcbiAgbGluZV80OiBzdHJpbmcsXHJcbiAgbG9jYWxpdHk6IHN0cmluZyxcclxuICB0b3duX29yX2NpdHk6IHN0cmluZyxcclxuICBjb3VudHk6IHN0cmluZyxcclxuICBkaXN0cmljdDogc3RyaW5nLFxyXG4gIGNvdW50cnk6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVBZGRyZXNzIGV4dGVuZHMgQWRkcmVzcyB7XHJcbiAgcG9zdGNvZGU6IHN0cmluZyxcclxuICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gIGxvY2FsaXR5OiBzdHJpbmcsXHJcbiAgcmVzaWRlbnRpYWw6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25BZGRyZXNzICB7XHJcbiAgcG9zdGNvZGU6IHN0cmluZyxcclxuICBvdXRjb2RlOnN0cmluZyxcclxuICBjb3VudHk6IHN0cmluZztcclxuICBjb3VudHJ5OnN0cmluZyxcclxuICB0b3duX29yX2NpdHk6IHN0cmluZztcclxuICBhcmVhOnN0cmluZyxcclxuICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gIGxvbmdpdHVkZTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmluZEFkZHJlc3NlcyB7XHJcbiAgcG9zdGNvZGU6IHN0cmluZyxcclxuICBsYXRpdHVkZTogbnVtYmVyLFxyXG4gIGxvbmdpdHVkZTogbnVtYmVyLFxyXG4gIGFkZHJlc3NlczogQWRkcmVzc1tdLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmluZFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEZpbmRTdWNjZXNzLCBGaW5kRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgYWRkcmVzc2VzOiBGaW5kQWRkcmVzc2VzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEZpbmRTdWNjZXNzIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogRmluZEZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8RmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogRmluZFN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEZpbmRGYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHlwZWFoZWFkU3VjY2VzcyBleHRlbmRzIFN1Y2Nlc3M8VHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgcmVzdWx0czogc3RyaW5nW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogVHlwZWFoZWFkU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZEZhaWxlZCBleHRlbmRzIFJlc3VsdDxUeXBlYWhlYWRTdWNjZXNzLCBUeXBlYWhlYWRGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogVHlwZWFoZWFkU3VjY2VzcyB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCcpO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogVHlwZWFoZWFkRmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEdldEZhaWxlZCwgUmVzdWx0LCBBdXRvY29tcGxldGVPcHRpb25zLCBTdWdnZXN0aW9uLFxyXG4gIEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIEF1dG9jb21wbGV0ZUFkZHJlc3MsIEdldFN1Y2Nlc3MsXHJcbiAgQXV0b2NvbXBsZXRlRmFpbGVkLCBGaW5kQWRkcmVzc2VzLCBGaW5kU3VjY2VzcywgRmluZEZhaWxlZCxcclxuICBBdXRvY29tcGxldGVGaWx0ZXIsIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cywgVHlwZWFoZWFkU3VjY2VzcyxcclxuICBUeXBlYWhlYWRGYWlsZWQsIFR5cGVhaGVhZE9wdGlvbnMsTG9jYXRpb25PcHRpb25zLExvY2F0aW9uU3VjY2VzcyxcclxuICBMb2NhdGlvbkZhaWxlZCxMb2NhdGlvblN1Z2dlc3Rpb24sR2V0TG9jYXRpb25TdWNjZXNzLEdldExvY2F0aW9uRmFpbGVkLFxyXG4gIExvY2F0aW9uQWRkcmVzcyxMb2NhdGlvbkZpbHRlcixMb2NhdGlvbkZpbHRlclJhZGl1c1xyXG59IGZyb20gJy4vVHlwZXMnO1xyXG5cclxuY2xhc3MgQ2xpZW50IHtcclxuICBwcml2YXRlIGF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIGdldEFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIHR5cGVhaGVhZEFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIGxvY2F0aW9uQWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXI7XHJcblxyXG4gIHByaXZhdGUgZ2V0TG9jYXRpb25BYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVSZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIGdldFJlc3BvbnNlPzogUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgbG9jYXRpb25SZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIGdldExvY2F0aW9uUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSB0eXBlYWhlYWRSZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlYWRvbmx5IGFwaV9rZXk6IHN0cmluZyxcclxuICAgIHJlYWRvbmx5IGF1dG9jb21wbGV0ZV91cmw6IHN0cmluZyA9ICdodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2F1dG9jb21wbGV0ZS97cXVlcnl9JyxcclxuICAgIHJlYWRvbmx5IGdldF91cmw6IHN0cmluZyA9ICdodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2dldC97aWR9JyxcclxuICAgIHJlYWRvbmx5IGxvY2F0aW9uX3VybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vbG9jYXRpb24ve3F1ZXJ5fScsXHJcbiAgICByZWFkb25seSBnZXRfbG9jYXRpb25fdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9nZXQtbG9jYXRpb24ve2lkfScsXHJcbiAgICByZWFkb25seSB0eXBlYWhlYWRfdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby90eXBlYWhlYWQve3Rlcm19JyxcclxuICApIHtcclxuICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMubG9jYXRpb25BYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmdldExvY2F0aW9uQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9jYXRpb24oXHJcbiAgICBxdWVyeTogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogUGFydGlhbDxMb2NhdGlvbk9wdGlvbnM+ID0ge30sXHJcbiAgKTogUHJvbWlzZTxSZXN1bHQ8TG9jYXRpb25TdWNjZXNzLCBMb2NhdGlvbkZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkT3B0aW9ucyA9IHtcclxuICAgICAgICBhbGw6IHRydWUsXHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmxvY2F0aW9uX3VybC5yZXBsYWNlKC97cXVlcnl9L2ksIHF1ZXJ5KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFwaV9rZXkpIHtcclxuICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0mYXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmxvY2F0aW9uUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25SZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbkFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5sb2NhdGlvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgc2lnbmFsOiB0aGlzLmxvY2F0aW9uQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tYmluZWRPcHRpb25zKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvblJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5sb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IGpzb24uc3VnZ2VzdGlvbnMgYXMgTG9jYXRpb25TdWdnZXN0aW9uW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvblN1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmxvY2F0aW9uUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IExvY2F0aW9uRmFpbGVkKHRoaXMubG9jYXRpb25SZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgTG9jYXRpb25TdWNjZXNzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbkZhaWxlZCg0MDEsIGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbkZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMubG9jYXRpb25SZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldExvY2F0aW9uKGlkOiBzdHJpbmcpOiBQcm9taXNlPFJlc3VsdDxHZXRMb2NhdGlvblN1Y2Nlc3MsIEdldExvY2F0aW9uRmFpbGVkPj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0X2xvY2F0aW9uX3VybC5yZXBsYWNlKC97aWR9L2ksIGlkKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFwaV9rZXkpIHtcclxuICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0mYXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmdldExvY2F0aW9uUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgc2lnbmFsOiB0aGlzLmdldEFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRSZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGxvYWN0aW9uID0ganNvbiBhcyBMb2NhdGlvbkFkZHJlc3M7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvblN1Y2Nlc3MobG9hY3Rpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvbkZhaWxlZCh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdldExvY2F0aW9uRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEdldExvY2F0aW9uRmFpbGVkKDQwMSwgJ1VuYXV0aG9yaXNlZCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBhc3luYyBhdXRvY29tcGxldGUoXHJcbiAgICBxdWVyeTogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogUGFydGlhbDxBdXRvY29tcGxldGVPcHRpb25zPiA9IHt9LFxyXG4gICk6IFByb21pc2U8UmVzdWx0PEF1dG9jb21wbGV0ZVN1Y2Nlc3MsIEF1dG9jb21wbGV0ZUZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCBjb21iaW5lZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgYWxsOiB0cnVlLFxyXG4gICAgICAgIC4uLm9wdGlvbnNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmF1dG9jb21wbGV0ZV91cmwucmVwbGFjZSgve3F1ZXJ5fS9pLCBxdWVyeSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgc2lnbmFsOiB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbWJpbmVkT3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IGpzb24uc3VnZ2VzdGlvbnMgYXMgU3VnZ2VzdGlvbltdO1xyXG4gICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlU3VjY2VzcyhzdWdnZXN0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCh0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVTdWNjZXNzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSwgJ1VuYXV0aG9yaXNlZCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldChpZDogc3RyaW5nKTogUHJvbWlzZTxSZXN1bHQ8R2V0U3VjY2VzcywgR2V0RmFpbGVkPj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0X3VybC5yZXBsYWNlKC97aWR9L2ksIGlkKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFwaV9rZXkpIHtcclxuICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0mYXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgIHNpZ25hbDogdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0ganNvbiBhcyBBdXRvY29tcGxldGVBZGRyZXNzO1xyXG4gICAgICAgIHJldHVybiBuZXcgR2V0U3VjY2VzcyhhZGRyZXNzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzLCBqc29uLk1lc3NhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgR2V0RmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmaW5kKHBvc3Rjb2RlOiBzdHJpbmcpOiBQcm9taXNlPFJlc3VsdDxGaW5kU3VjY2VzcywgRmluZEZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZmluZC8ke3Bvc3Rjb2RlfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fSZleHBhbmQ9dHJ1ZWApO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGpzb24gYXMgRmluZEFkZHJlc3NlcztcclxuICAgICAgICByZXR1cm4gbmV3IEZpbmRTdWNjZXNzKGFkZHJlc3Nlcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKHJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHR5cGVhaGVhZChcclxuICAgIHRlcm06IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8VHlwZWFoZWFkT3B0aW9ucz4gPSB7fSxcclxuICApOiBQcm9taXNlPFJlc3VsdDxUeXBlYWhlYWRTdWNjZXNzLCBUeXBlYWhlYWRGYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgdXJsID0gdGhpcy50eXBlYWhlYWRfdXJsLnJlcGxhY2UoL3t0ZXJtfS9pLCB0ZXJtKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFwaV9rZXkpIHtcclxuICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/JykpIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0mYXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9P2FwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBzaWduYWw6IHRoaXMuYXV0b2NvbXBsZXRlQWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMudHlwZWFoZWFkUmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0ganNvbiBhcyBzdHJpbmdbXTtcclxuICAgICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZFN1Y2Nlc3MocmVzdWx0cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMudHlwZWFoZWFkUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJykge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSwgJ1VuYXV0aG9yaXNlZCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ2xpZW50LCBcclxuICBHZXRGYWlsZWQsXHJcbiAgR2V0TG9jYXRpb25GYWlsZWQsIFxyXG4gIFJlc3VsdCxcclxuICBBdXRvY29tcGxldGVPcHRpb25zLFxyXG4gIExvY2F0aW9uT3B0aW9ucyxcclxuICBBdXRvY29tcGxldGVGaWx0ZXIsXHJcbiAgTG9jYXRpb25GaWx0ZXIsXHJcbiAgQXV0b2NvbXBsZXRlRmlsdGVyUmFkaXVzLFxyXG4gIExvY2F0aW9uRmlsdGVyUmFkaXVzLFxyXG4gIFN1Z2dlc3Rpb24sXHJcbiAgTG9jYXRpb25TdWdnZXN0aW9uLFxyXG4gIEF1dG9jb21wbGV0ZVN1Y2Nlc3MsXHJcbiAgTG9jYXRpb25TdWNjZXNzLFxyXG4gIEF1dG9jb21wbGV0ZUFkZHJlc3MsXHJcbiAgTG9jYXRpb25BZGRyZXNzLFxyXG4gIEdldFN1Y2Nlc3MsXHJcbiAgR2V0TG9jYXRpb25TdWNjZXNzLFxyXG4gIEF1dG9jb21wbGV0ZUZhaWxlZCwgXHJcbiAgTG9jYXRpb25GYWlsZWQsXHJcbiAgRmluZEFkZHJlc3NlcyxcclxuICBGaW5kU3VjY2VzcywgRmluZEZhaWxlZCwgVHlwZWFoZWFkRmFpbGVkLFxyXG4gIFR5cGVhaGVhZFN1Y2Nlc3MsIFR5cGVhaGVhZE9wdGlvbnMsXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BY3NCLE1BQU0sQ0FBQTtBQUMxQixJQUFBLFdBQUEsQ0FBcUIsU0FBa0IsRUFBQTtRQUFsQixJQUFTLENBQUEsU0FBQSxHQUFULFNBQVMsQ0FBUztLQUV0QztBQUtGLENBQUE7QUFFSyxNQUFnQixPQUFjLFNBQVEsTUFBWSxDQUFBO0FBQ3RELElBQUEsV0FBQSxHQUFBO1FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2I7QUFLRixDQUFBO0FBRUssTUFBTyxtQkFB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

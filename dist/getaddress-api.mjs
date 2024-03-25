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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0YWRkcmVzcy1hcGkubWpzIiwic291cmNlcyI6WyIuLi9zcmMvVHlwZXMudHMiLCIuLi9zcmMvQ2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvblN1Z2dlc3Rpb24ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc3VsdDxTLCBGPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaXNTdWNjZXNzOiBib29sZWFuKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgdG9TdWNjZXNzKCk6IFM7XHJcblxyXG4gIGFic3RyYWN0IHRvRmFpbGVkKCk6IEY7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWNjZXNzPFMsIEY+IGV4dGVuZHMgUmVzdWx0PFMsIEY+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgdG9TdWNjZXNzKCk6IFM7XHJcblxyXG4gIGFic3RyYWN0IHRvRmFpbGVkKCk6IEY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdWdnZXN0aW9uczogTG9jYXRpb25TdWdnZXN0aW9uW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogTG9jYXRpb25TdWNjZXNzIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogTG9jYXRpb25GYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB1cmw6IHN0cmluZztcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxHZXRTdWNjZXNzLCBHZXRGYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBhZGRyZXNzOiBBdXRvY29tcGxldGVBZGRyZXNzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldFN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBHZXRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZhaWwnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRMb2NhdGlvblN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPEdldExvY2F0aW9uU3VjY2VzcywgR2V0TG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBsb2NhdGlvbjogTG9jYXRpb25BZGRyZXNzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEdldExvY2F0aW9uU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEdldExvY2F0aW9uRmFpbGVkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRGlkIG5vdCBmYWlsJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0TG9jYXRpb25GYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8R2V0TG9jYXRpb25TdWNjZXNzLCBHZXRMb2NhdGlvbkZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLCByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBHZXRMb2NhdGlvblN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBHZXRMb2NhdGlvbkZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8QXV0b2NvbXBsZXRlU3VjY2VzcywgQXV0b2NvbXBsZXRlRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEF1dG9jb21wbGV0ZVN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSBzdWNjZXNzJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBBdXRvY29tcGxldGVGYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uRmFpbGVkIGV4dGVuZHMgUmVzdWx0PExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+IHtcclxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBzdGF0dXM6IG51bWJlciwgcmVhZG9ubHkgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB0b1N1Y2Nlc3MoKTogTG9jYXRpb25TdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogTG9jYXRpb25GYWlsZWQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RmFpbGVkIGV4dGVuZHMgUmVzdWx0PEdldFN1Y2Nlc3MsIEdldEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLCByZWFkb25seSBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBHZXRTdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgdG9GYWlsZWQoKTogR2V0RmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVPcHRpb25zIHtcclxuICBhbGw6IGJvb2xlYW47XHJcbiAgdGVtcGxhdGU6IHN0cmluZztcclxuICB0b3A6IG51bWJlcjtcclxuICBmaWx0ZXI6IFBhcnRpYWw8QXV0b2NvbXBsZXRlRmlsdGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbk9wdGlvbnMge1xyXG4gIHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgdGVtcGxhdGVfb3V0Y29kZTogc3RyaW5nO1xyXG4gIHRlbXBsYXRlX3Bvc3Rjb2RlOiBzdHJpbmc7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgZmlsdGVyOiBQYXJ0aWFsPExvY2F0aW9uRmlsdGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUeXBlYWhlYWRPcHRpb25zIHtcclxuICB0b3A6IG51bWJlcjtcclxuICBzZWFyY2g6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cyB7XHJcbiAga206IG51bWJlcjtcclxuICBsb25naXR1ZGU6IG51bWJlcjtcclxuICBsYXRpdHVkZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uRmlsdGVyUmFkaXVzIHtcclxuICBrbTogbnVtYmVyO1xyXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRmlsdGVyIHtcclxuICBjb3VudHk6IHN0cmluZztcclxuICBsb2NhbGl0eTogc3RyaW5nO1xyXG4gIGRpc3RyaWN0OiBzdHJpbmc7XHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgcG9zdGNvZGU6IHN0cmluZztcclxuICByZXNpZGVudGlhbDogYm9vbGVhbjtcclxuICByYWRpdXM6IEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbkZpbHRlciB7XHJcbiAgY291bnR5OiBzdHJpbmc7XHJcbiAgY291bnRyeTpzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgYXJlYTpzdHJpbmcsXHJcbiAgcG9zdGNvZGU6IHN0cmluZztcclxuICBvdXRjb2RlOiBzdHJpbmcsXHJcbiAgcmFkaXVzOiBMb2NhdGlvbkZpbHRlclJhZGl1cztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzIHtcclxuICBmb3JtYXR0ZWRfYWRkcmVzczogc3RyaW5nW10sXHJcbiAgdGhvcm91Z2hmYXJlOiBzdHJpbmcsXHJcbiAgYnVpbGRpbmdfbmFtZTogc3RyaW5nLFxyXG4gIHN1Yl9idWlsZGluZ19uYW1lOiBzdHJpbmcsXHJcbiAgc3ViX2J1aWxkaW5nX251bWJlcjogc3RyaW5nLFxyXG4gIGJ1aWxkaW5nX251bWJlcjogc3RyaW5nLFxyXG4gIGxpbmVfMTogc3RyaW5nLFxyXG4gIGxpbmVfMjogc3RyaW5nLFxyXG4gIGxpbmVfMzogc3RyaW5nLFxyXG4gIGxpbmVfNDogc3RyaW5nLFxyXG4gIGxvY2FsaXR5OiBzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmcsXHJcbiAgY291bnR5OiBzdHJpbmcsXHJcbiAgZGlzdHJpY3Q6IHN0cmluZyxcclxuICBjb3VudHJ5OiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlQWRkcmVzcyBleHRlbmRzIEFkZHJlc3Mge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlcixcclxuICBsb2NhbGl0eTogc3RyaW5nLFxyXG4gIHJlc2lkZW50aWFsOiBib29sZWFuLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uQWRkcmVzcyAge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgb3V0Y29kZTpzdHJpbmcsXHJcbiAgY291bnR5OiBzdHJpbmc7XHJcbiAgY291bnRyeTpzdHJpbmcsXHJcbiAgdG93bl9vcl9jaXR5OiBzdHJpbmc7XHJcbiAgYXJlYTpzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRBZGRyZXNzZXMge1xyXG4gIHBvc3Rjb2RlOiBzdHJpbmcsXHJcbiAgbGF0aXR1ZGU6IG51bWJlcixcclxuICBsb25naXR1ZGU6IG51bWJlcixcclxuICBhZGRyZXNzZXM6IEFkZHJlc3NbXSxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbmRTdWNjZXNzIGV4dGVuZHMgU3VjY2VzczxGaW5kU3VjY2VzcywgRmluZEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGFkZHJlc3NlczogRmluZEFkZHJlc3Nlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHRvU3VjY2VzcygpOiBGaW5kU3VjY2VzcyB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IEZpbmRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaW5kRmFpbGVkIGV4dGVuZHMgUmVzdWx0PEZpbmRTdWNjZXNzLCBGaW5kRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IEZpbmRTdWNjZXNzIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignZmFpbGVkJyk7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBGaW5kRmFpbGVkIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZFN1Y2Nlc3MgZXh0ZW5kcyBTdWNjZXNzPFR5cGVhaGVhZFN1Y2Nlc3MsIFR5cGVhaGVhZEZhaWxlZD4ge1xyXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHJlc3VsdHM6IHN0cmluZ1tdKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IFR5cGVhaGVhZFN1Y2Nlc3Mge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB0b0ZhaWxlZCgpOiBUeXBlYWhlYWRGYWlsZWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRGYWlsZWQgZXh0ZW5kcyBSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkRmFpbGVkPiB7XHJcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdG9TdWNjZXNzKCk6IFR5cGVhaGVhZFN1Y2Nlc3Mge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQnKTtcclxuICB9XHJcblxyXG4gIHRvRmFpbGVkKCk6IFR5cGVhaGVhZEZhaWxlZCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBHZXRGYWlsZWQsIFJlc3VsdCwgQXV0b2NvbXBsZXRlT3B0aW9ucywgU3VnZ2VzdGlvbixcclxuICBBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVBZGRyZXNzLCBHZXRTdWNjZXNzLFxyXG4gIEF1dG9jb21wbGV0ZUZhaWxlZCwgRmluZEFkZHJlc3NlcywgRmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQsXHJcbiAgQXV0b2NvbXBsZXRlRmlsdGVyLCBBdXRvY29tcGxldGVGaWx0ZXJSYWRpdXMsIFR5cGVhaGVhZFN1Y2Nlc3MsXHJcbiAgVHlwZWFoZWFkRmFpbGVkLCBUeXBlYWhlYWRPcHRpb25zLExvY2F0aW9uT3B0aW9ucyxMb2NhdGlvblN1Y2Nlc3MsXHJcbiAgTG9jYXRpb25GYWlsZWQsTG9jYXRpb25TdWdnZXN0aW9uLEdldExvY2F0aW9uU3VjY2VzcyxHZXRMb2NhdGlvbkZhaWxlZCxcclxuICBMb2NhdGlvbkFkZHJlc3MsTG9jYXRpb25GaWx0ZXIsTG9jYXRpb25GaWx0ZXJSYWRpdXNcclxufSBmcm9tICcuL1R5cGVzJztcclxuXHJcbmNsYXNzIENsaWVudCB7XHJcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSBnZXRBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSB0eXBlYWhlYWRBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlcjtcclxuXHJcbiAgcHJpdmF0ZSBsb2NhdGlvbkFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyO1xyXG5cclxuICBwcml2YXRlIGdldExvY2F0aW9uQWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXI7XHJcblxyXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBnZXRSZXNwb25zZT86IFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIGxvY2F0aW9uUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBnZXRMb2NhdGlvblJlc3BvbnNlPzogUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHByaXZhdGUgdHlwZWFoZWFkUmVzcG9uc2U/OiBSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZWFkb25seSBhcGlfa2V5OiBzdHJpbmcsXHJcbiAgICByZWFkb25seSBhdXRvY29tcGxldGVfdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9hdXRvY29tcGxldGUve3F1ZXJ5fScsXHJcbiAgICByZWFkb25seSBnZXRfdXJsOiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuZ2V0YWRkcmVzcy5pby9nZXQve2lkfScsXHJcbiAgICByZWFkb25seSBsb2NhdGlvbl91cmw6IHN0cmluZyA9ICdodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2xvY2F0aW9uL3txdWVyeX0nLFxyXG4gICAgcmVhZG9ubHkgZ2V0X2xvY2F0aW9uX3VybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vZ2V0LWxvY2F0aW9uL3tpZH0nLFxyXG4gICAgcmVhZG9ubHkgdHlwZWFoZWFkX3VybDogc3RyaW5nID0gJ2h0dHBzOi8vYXBpLmdldGFkZHJlc3MuaW8vdHlwZWFoZWFkL3t0ZXJtfScsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy50eXBlYWhlYWRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICB0aGlzLmxvY2F0aW9uQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgdGhpcy5nZXRMb2NhdGlvbkFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvY2F0aW9uKFxyXG4gICAgcXVlcnk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8TG9jYXRpb25PcHRpb25zPiA9IHt9LFxyXG4gICk6IFByb21pc2U8UmVzdWx0PExvY2F0aW9uU3VjY2VzcywgTG9jYXRpb25GYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21iaW5lZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgYWxsOiB0cnVlLFxyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5sb2NhdGlvbl91cmwucmVwbGFjZSgve3F1ZXJ5fS9pLCBxdWVyeSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvblJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbkFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25BYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubG9jYXRpb25SZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHNpZ25hbDogdGhpcy5sb2NhdGlvbkFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbWJpbmVkT3B0aW9ucyksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMubG9jYXRpb25SZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMubG9jYXRpb25SZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBqc29uLnN1Z2dlc3Rpb25zIGFzIExvY2F0aW9uU3VnZ2VzdGlvbltdO1xyXG4gICAgICAgIHJldHVybiBuZXcgTG9jYXRpb25TdWNjZXNzKHN1Z2dlc3Rpb25zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5sb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbkZhaWxlZCh0aGlzLmxvY2F0aW9uUmVzcG9uc2Uuc3RhdHVzLCBqc29uLk1lc3NhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XHJcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IExvY2F0aW9uU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgTG9jYXRpb25GYWlsZWQoNDAxLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgTG9jYXRpb25GYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRMb2NhdGlvbihpZDogc3RyaW5nKTogUHJvbWlzZTxSZXN1bHQ8R2V0TG9jYXRpb25TdWNjZXNzLCBHZXRMb2NhdGlvbkZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldF9sb2NhdGlvbl91cmwucmVwbGFjZSgve2lkfS9pLCBpZCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRMb2NhdGlvblJlc3BvbnNlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgIHNpZ25hbDogdGhpcy5nZXRBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZ2V0UmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmdldFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBsb2FjdGlvbiA9IGpzb24gYXMgTG9jYXRpb25BZGRyZXNzO1xyXG4gICAgICAgIHJldHVybiBuZXcgR2V0TG9jYXRpb25TdWNjZXNzKGxvYWN0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBuZXcgR2V0TG9jYXRpb25GYWlsZWQodGhpcy5nZXRSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvbkZhaWxlZCg0MDEsIGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBHZXRMb2NhdGlvbkZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuZ2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgYXN5bmMgYXV0b2NvbXBsZXRlKFxyXG4gICAgcXVlcnk6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFBhcnRpYWw8QXV0b2NvbXBsZXRlT3B0aW9ucz4gPSB7fSxcclxuICApOiBQcm9taXNlPFJlc3VsdDxBdXRvY29tcGxldGVTdWNjZXNzLCBBdXRvY29tcGxldGVGYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgY29uc3QgY29tYmluZWRPcHRpb25zID0ge1xyXG4gICAgICAgIGFsbDogdHJ1ZSxcclxuICAgICAgICAuLi5vcHRpb25zXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgdXJsID0gdGhpcy5hdXRvY29tcGxldGVfdXJsLnJlcGxhY2UoL3txdWVyeX0vaSwgcXVlcnkpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXBpX2tleSkge1xyXG4gICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJz8nKSkge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfSZhcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHVybCA9IGAke3VybH0/YXBpLWtleT0ke3RoaXMuYXBpX2tleX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHNpZ25hbDogdGhpcy5hdXRvY29tcGxldGVBYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21iaW5lZE9wdGlvbnMpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBqc29uLnN1Z2dlc3Rpb25zIGFzIFN1Z2dlc3Rpb25bXTtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZVN1Y2Nlc3Moc3VnZ2VzdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLmF1dG9jb21wbGV0ZVJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBBdXRvY29tcGxldGVGYWlsZWQodGhpcy5hdXRvY29tcGxldGVSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQXV0b2NvbXBsZXRlRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEF1dG9jb21wbGV0ZUZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8UmVzdWx0PEdldFN1Y2Nlc3MsIEdldEZhaWxlZD4+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB1cmwgPSB0aGlzLmdldF91cmwucmVwbGFjZSgve2lkfS9pLCBpZCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5nZXRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmdldEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmdldFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICBzaWduYWw6IHRoaXMuZ2V0QWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy5nZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGpzb24gYXMgQXV0b2NvbXBsZXRlQWRkcmVzcztcclxuICAgICAgICByZXR1cm4gbmV3IEdldFN1Y2Nlc3MoYWRkcmVzcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHRoaXMuZ2V0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCh0aGlzLmdldFJlc3BvbnNlLnN0YXR1cywganNvbi5NZXNzYWdlKTtcclxuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xyXG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdldEZhaWxlZCg0MDEsIGVyci5tZXNzYWdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5ldyBHZXRGYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmdldFJlc3BvbnNlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmluZChwb3N0Y29kZTogc3RyaW5nKTogUHJvbWlzZTxSZXN1bHQ8RmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQ+PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5nZXRhZGRyZXNzLmlvL2ZpbmQvJHtwb3N0Y29kZX0/YXBpLWtleT0ke3RoaXMuYXBpX2tleX0mZXhwYW5kPXRydWVgKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IGpzb246IGFueSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBqc29uIGFzIEZpbmRBZGRyZXNzZXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaW5kU3VjY2VzcyhhZGRyZXNzZXMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBuZXcgRmluZEZhaWxlZChyZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGaW5kRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IEZpbmRGYWlsZWQoNDAxLCAnVW5hdXRob3Jpc2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyB0eXBlYWhlYWQoXHJcbiAgICB0ZXJtOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBQYXJ0aWFsPFR5cGVhaGVhZE9wdGlvbnM+ID0ge30sXHJcbiAgKTogUHJvbWlzZTxSZXN1bHQ8VHlwZWFoZWFkU3VjY2VzcywgVHlwZWFoZWFkRmFpbGVkPj4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHVybCA9IHRoaXMudHlwZWFoZWFkX3VybC5yZXBsYWNlKC97dGVybX0vaSwgdGVybSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5hcGlfa2V5KSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnPycpKSB7XHJcbiAgICAgICAgICB1cmwgPSBgJHt1cmx9JmFwaS1rZXk9JHt0aGlzLmFwaV9rZXl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXJsID0gYCR7dXJsfT9hcGkta2V5PSR7dGhpcy5hcGlfa2V5fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRSZXNwb25zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRSZXNwb25zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZEFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgc2lnbmFsOiB0aGlzLmF1dG9jb21wbGV0ZUFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QganNvbjogYW55ID0gYXdhaXQgdGhpcy50eXBlYWhlYWRSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGpzb24gYXMgc3RyaW5nW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRTdWNjZXNzKHJlc3VsdHMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqc29uOiBhbnkgPSBhd2FpdCB0aGlzLnR5cGVhaGVhZFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIG5ldyBUeXBlYWhlYWRGYWlsZWQodGhpcy50eXBlYWhlYWRSZXNwb25zZS5zdGF0dXMsIGpzb24uTWVzc2FnZSk7XHJcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkU3VjY2VzcyhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHlwZWFoZWFkRmFpbGVkKDQwMSwgZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFR5cGVhaGVhZEZhaWxlZCg0MDEsICdVbmF1dGhvcmlzZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkUmVzcG9uc2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XHJcblxyXG5leHBvcnQge1xyXG4gIENsaWVudCwgXHJcbiAgR2V0RmFpbGVkLFxyXG4gIEdldExvY2F0aW9uRmFpbGVkLCBcclxuICBSZXN1bHQsXHJcbiAgQXV0b2NvbXBsZXRlT3B0aW9ucyxcclxuICBMb2NhdGlvbk9wdGlvbnMsXHJcbiAgQXV0b2NvbXBsZXRlRmlsdGVyLFxyXG4gIExvY2F0aW9uRmlsdGVyLFxyXG4gIEF1dG9jb21wbGV0ZUZpbHRlclJhZGl1cyxcclxuICBMb2NhdGlvbkZpbHRlclJhZGl1cyxcclxuICBTdWdnZXN0aW9uLFxyXG4gIExvY2F0aW9uU3VnZ2VzdGlvbixcclxuICBBdXRvY29tcGxldGVTdWNjZXNzLFxyXG4gIExvY2F0aW9uU3VjY2VzcyxcclxuICBBdXRvY29tcGxldGVBZGRyZXNzLFxyXG4gIExvY2F0aW9uQWRkcmVzcyxcclxuICBHZXRTdWNjZXNzLFxyXG4gIEdldExvY2F0aW9uU3VjY2VzcyxcclxuICBBdXRvY29tcGxldGVGYWlsZWQsIFxyXG4gIExvY2F0aW9uRmFpbGVkLFxyXG4gIEZpbmRBZGRyZXNzZXMsXHJcbiAgRmluZFN1Y2Nlc3MsIEZpbmRGYWlsZWQsIFR5cGVhaGVhZEZhaWxlZCxcclxuICBUeXBlYWhlYWRTdWNjZXNzLCBUeXBlYWhlYWRPcHRpb25zLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWNzQixNQUFNLENBQUE7QUFDMUIsSUFBQSxXQUFBLENBQXFCLFNBQWtCLEVBQUE7UUFBbEIsSUFBUyxDQUFBLFNBQUEsR0FBVCxTQUFTLENBQVM7S0FFdEM7QUFLRixDQUFBO0FBRUssTUFBZ0IsT0FBYyxTQUFRLE1BQVksQ0FBQTtBQUN0RCxJQUFBLFdBQUEsR0FBQTtRQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNiO0FBS0YsQ0FBQTtBQUVLLE1BQU8sbUJB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

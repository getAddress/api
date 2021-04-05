(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.getAddress = {}));
}(this, (function (exports) { 'use strict';

    class Failed {
        constructor(status, message) {
            this.status = status;
            this.message = message;
            this.isSuccess = false;
        }
    }

    class API {
        constructor(api_key) {
            this.api_key = api_key;
        }
        async autocomplete(query) {
            try {
                const response = await fetch(`https://api.getaddress.io/autocomplete/${query}?api-key=${this.api_key}`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        all: true
                    })
                });
                if (response.status == 200) {
                    var json = await response.json();
                    return json;
                }
                var json = await response.json();
                return json;
            }
            catch (err) {
                return new Failed(401, err.message);
            }
        }
        async find(query) {
            try {
                const response = await fetch(`https://api.getaddress.io/find/${query}?api-key=${this.api_key}&expand=true`);
                if (response.status == 200) {
                    var json = await response.json();
                    return json;
                }
                var json = await response.json();
                return new Failed(response.status, json.Message);
            }
            catch (err) {
                return new Failed(401, err.message);
            }
        }
    }

    exports.API = API;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

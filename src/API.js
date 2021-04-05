import Autocomplete from "./Autocomplete";
var API = /** @class */ (function () {
    function API(api_key) {
        this._autocomplete = new Autocomplete(api_key);
    }
    Object.defineProperty(API.prototype, "autocomplete", {
        get: function () {
            return this._autocomplete;
        },
        enumerable: false,
        configurable: true
    });
    return API;
}());
export default API;
//# sourceMappingURL=API.js.map
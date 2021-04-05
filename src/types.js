var Suggestion = /** @class */ (function () {
    function Suggestion(address, url, id) {
        this.address = address;
        this.url = url;
        this.id = id;
        this.isSuccess = true;
    }
    return Suggestion;
}());
export { Suggestion };
var Failed = /** @class */ (function () {
    function Failed(status, message) {
        this.status = status;
        this.message = message;
        this.isSuccess = false;
    }
    return Failed;
}());
export { Failed };
//# sourceMappingURL=types.js.map
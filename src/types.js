export class Suggestion {
    constructor(address, url, id) {
        this.address = address;
        this.url = url;
        this.id = id;
        this.isSuccess = true;
    }
}
export class Failed {
    constructor(status, message) {
        this.status = status;
        this.message = message;
        this.isSuccess = false;
    }
}
//# sourceMappingURL=types.js.map
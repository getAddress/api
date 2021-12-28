import { GetFailed, FindFailed, AutocompleteOptions, AutocompleteSuccess, GetSuccess, FindSuccess, AutocompleteFailed } from "./Types";
import fetch from "node-fetch";
class API {
    constructor(api_key) {
        this.api_key = api_key;
    }
    async autocomplete(query, options = AutocompleteOptions.Default()) {
        try {
            const response = await fetch(`https://api.getaddress.io/autocomplete/${query}?api-key=${this.api_key}`, {
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
            const response = await fetch(`https://api.getaddress.io/get/${id}?api-key=${this.api_key}`);
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
            const response = await fetch(`https://api.getaddress.io/find/${postcode}?api-key=${this.api_key}&expand=true`);
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
export * from './Types';
export { API };
export default API;
//# sourceMappingURL=API.js.map
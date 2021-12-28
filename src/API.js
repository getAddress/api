import { Failed, AutocompleteOptions, AutocompleteSuccess, GetSuccess } from "./Types";
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
            let json = await response.json();
            return json;
        }
        catch (err) {
            if (err instanceof Error) {
                return new Failed(401, err.message);
            }
            return new Failed(401, 'Unauthorised');
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
            let json = await response.json();
            return json;
        }
        catch (err) {
            if (err instanceof Error) {
                return new Failed(401, err.message);
            }
            return new Failed(401, 'Unauthorised');
        }
    }
}
export * from './Types';
export { API };
export default API;
//# sourceMappingURL=API.js.map
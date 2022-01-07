import { GetFailed, Result, AutocompleteOptions, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed } from "./Types";
class Client {
    constructor(api_key, autocomplete_url = "https://api.getaddress.io/autocomplete/", get_url = "https://api.getaddress.io/get/") {
        this.api_key = api_key;
        this.autocomplete_url = autocomplete_url;
        this.get_url = get_url;
    }
    async autocomplete(query, options = AutocompleteOptions.Default()) {
        try {
            let url = this.autocomplete_url + `${query}`;
            if (this.api_key) {
                url = url + `?api-key=${this.api_key}`;
            }
            const response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(options, (key, value) => {
                    if (value)
                        return value;
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
            let url = this.get_url + `${id}`;
            if (this.api_key) {
                url = url + `?api-key=${this.api_key}`;
            }
            const response = await fetch(url);
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
}
export { Client as default, GetFailed, Result, AutocompleteOptions, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed };
//# sourceMappingURL=Client.js.map
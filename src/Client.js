import { GetFailed, Result, AutocompleteOptions, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed, FindAddresses, FindSuccess, FindFailed } from "./Types";
class Client {
    constructor(api_key, autocomplete_url = "https://api.getaddress.io/autocomplete/{query}", get_url = "https://api.getaddress.io/get/{id}") {
        this.api_key = api_key;
        this.autocomplete_url = autocomplete_url;
        this.get_url = get_url;
    }
    async autocomplete(query, options = AutocompleteOptions.Default()) {
        try {
            options = Object.assign(AutocompleteOptions.Default(), options);
            let url = this.autocomplete_url.replace(/{query}/i, query);
            if (this.api_key) {
                if (url.includes('?')) {
                    url = url + '&api-key=' + this.api_key;
                }
                else {
                    url = url + '?api-key=' + this.api_key;
                }
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
            let url = this.get_url.replace(/{id}/i, id);
            if (this.api_key) {
                if (url.includes('?')) {
                    url = url + '&api-key=' + this.api_key;
                }
                else {
                    url = url + '?api-key=' + this.api_key;
                }
            }
            const response = await fetch(url, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
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
export { Client as default, GetFailed, Result, AutocompleteOptions, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed, FindAddresses, FindSuccess, FindFailed };
//# sourceMappingURL=Client.js.map
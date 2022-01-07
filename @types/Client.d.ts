import { GetFailed, Result, AutocompleteOptions, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed } from "./Types";
declare class Client {
    readonly api_key: string;
    readonly autocomplete_url: string;
    readonly get_url: string;
    constructor(api_key: string, autocomplete_url?: string, get_url?: string);
    autocomplete(query: string, options?: AutocompleteOptions): Promise<Result<AutocompleteSuccess, AutocompleteFailed>>;
    get(id: string): Promise<Result<GetSuccess, GetFailed>>;
}
export { Client as default, GetFailed, Result, AutocompleteOptions, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed };

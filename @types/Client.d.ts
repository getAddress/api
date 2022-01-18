import { GetFailed, Result, AutocompleteOptions, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed, FindAddresses, FindSuccess, FindFailed } from "./Types";
declare class Client {
    readonly api_key: string;
    readonly autocomplete_url: string;
    readonly get_url: string;
    private readonly autocompleteAbortController;
    private response?;
    constructor(api_key: string, autocomplete_url?: string, get_url?: string);
    autocomplete(query: string, options?: AutocompleteOptions): Promise<Result<AutocompleteSuccess, AutocompleteFailed>>;
    get(id: string): Promise<Result<GetSuccess, GetFailed>>;
    find(postcode: string): Promise<Result<FindSuccess, FindFailed>>;
}
export { Client as default, GetFailed, Result, AutocompleteOptions, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed, FindAddresses, FindSuccess, FindFailed };

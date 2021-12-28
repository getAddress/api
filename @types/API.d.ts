import { GetFailed, FindFailed, Result, AutocompleteOptions, AutocompleteSuccess, GetSuccess, FindSuccess, AutocompleteFailed } from "./Types";
declare class API {
    readonly api_key: string;
    constructor(api_key: string);
    autocomplete(query: string, options?: AutocompleteOptions): Promise<Result<AutocompleteSuccess, AutocompleteFailed>>;
    get(id: string): Promise<Result<GetSuccess, GetFailed>>;
    find(postcode: string): Promise<Result<FindSuccess, FindFailed>>;
}
export * from './Types';
export { API };
export default API;

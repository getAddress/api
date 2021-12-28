import { Result, AutocompleteOptions, AutocompleteSuccess, GetSuccess, FindSuccess } from "./Types";
declare class API {
    readonly api_key: string;
    constructor(api_key: string);
    autocomplete(query: string, options?: AutocompleteOptions): Promise<Result<AutocompleteSuccess>>;
    get(id: string): Promise<Result<GetSuccess>>;
    find(postcode: string): Promise<Result<FindSuccess>>;
}
export * from './Types';
export { API };
export default API;

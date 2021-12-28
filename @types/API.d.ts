import { Result, AutocompleteOptions } from "./Types";
declare class API {
    readonly api_key: string;
    constructor(api_key: string);
    autocomplete(query: string, options?: AutocompleteOptions): Promise<Result>;
    get(id: string): Promise<Result>;
}
export * from './Types';
export { API };
export default API;

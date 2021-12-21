import { Failed, Suggestion } from "./Types";
export declare class API {
    readonly api_key: string;
    constructor(api_key: string);
    autocomplete(query: string): Promise<Suggestion[] | Failed>;
    find(query: string): Promise<any[] | Failed>;
    get(suggestion: Suggestion): Promise<any | Failed>;
}

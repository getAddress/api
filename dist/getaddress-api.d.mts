/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
interface Suggestion {
    id: string;
    url: string;
    address: string;
}
declare abstract class Result<S, F> {
    readonly isSuccess: boolean;
    constructor(isSuccess: boolean);
    abstract toSuccess(): S;
    abstract toFailed(): F;
}
declare abstract class Success<S, F> extends Result<S, F> {
    constructor();
    abstract toSuccess(): S;
    abstract toFailed(): F;
}
declare class AutocompleteSuccess extends Success<AutocompleteSuccess, AutocompleteFailed> {
    readonly suggestions: Suggestion[];
    constructor(suggestions: Suggestion[]);
    toSuccess(): AutocompleteSuccess;
    toFailed(): AutocompleteFailed;
}
declare class GetSuccess extends Success<GetSuccess, GetFailed> {
    readonly address: AutocompleteAddress;
    constructor(address: AutocompleteAddress);
    toSuccess(): GetSuccess;
    toFailed(): GetFailed;
}
declare class AutocompleteFailed extends Result<AutocompleteSuccess, AutocompleteFailed> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): AutocompleteSuccess;
    toFailed(): AutocompleteFailed;
}
declare class GetFailed extends Result<GetSuccess, GetFailed> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): GetSuccess;
    toFailed(): GetFailed;
}
interface AutocompleteOptions {
    all: boolean;
    template: string;
    top: number;
    filter: Partial<AutocompleteFilter>;
}
interface TypeaheadOptions {
    top: number;
    search: string[];
}
interface AutocompleteFilterRadius {
    km: number;
    longitude: number;
    latitude: number;
}
interface AutocompleteFilter {
    county: string;
    locality: string;
    district: string;
    town_or_city: string;
    postcode: string;
    residential: boolean;
    radius: AutocompleteFilterRadius;
}
interface Address {
    formatted_address: string[];
    thoroughfare: string;
    building_name: string;
    sub_building_name: string;
    sub_building_number: string;
    building_number: string;
    line_1: string;
    line_2: string;
    line_3: string;
    line_4: string;
    locality: string;
    town_or_city: string;
    county: string;
    district: string;
    country: string;
}
interface AutocompleteAddress extends Address {
    postcode: string;
    latitude: number;
    longitude: number;
    locality: string;
    residential: boolean;
}
interface FindAddresses {
    postcode: string;
    latitude: number;
    longitude: number;
    addresses: Address[];
}
declare class FindSuccess extends Success<FindSuccess, FindFailed> {
    readonly addresses: FindAddresses;
    constructor(addresses: FindAddresses);
    toSuccess(): FindSuccess;
    toFailed(): FindFailed;
}
declare class FindFailed extends Result<FindSuccess, FindFailed> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): FindSuccess;
    toFailed(): FindFailed;
}
declare class TypeaheadSuccess extends Success<TypeaheadSuccess, TypeaheadFailed> {
    readonly results: string[];
    constructor(results: string[]);
    toSuccess(): TypeaheadSuccess;
    toFailed(): TypeaheadFailed;
}
declare class TypeaheadFailed extends Result<TypeaheadSuccess, TypeaheadFailed> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): TypeaheadSuccess;
    toFailed(): TypeaheadFailed;
}
declare class Client {
    readonly api_key: string;
    readonly autocomplete_url: string;
    readonly get_url: string;
    readonly typeahead_url: string;
    private autocompleteAbortController;
    private getAbortController;
    private typeaheadAbortController;
    private autocompleteResponse?;
    private getResponse?;
    private typeaheadResponse?;
    constructor(api_key: string, autocomplete_url?: string, get_url?: string, typeahead_url?: string);
    autocomplete(query: string, options?: Partial<AutocompleteOptions>): Promise<Result<AutocompleteSuccess, AutocompleteFailed>>;
    get(id: string): Promise<Result<GetSuccess, GetFailed>>;
    find(postcode: string): Promise<Result<FindSuccess, FindFailed>>;
    typeahead(term: string, options?: Partial<TypeaheadOptions>): Promise<Result<TypeaheadSuccess, TypeaheadFailed>>;
}
export { Client as default, Client, GetFailed, Result, AutocompleteOptions, AutocompleteFilter, AutocompleteFilterRadius, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed, FindAddresses, FindSuccess, FindFailed, TypeaheadFailed, TypeaheadSuccess, TypeaheadOptions };

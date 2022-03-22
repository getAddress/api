declare class Suggestion {
    readonly address: string;
    readonly url: string;
    readonly id: string;
    constructor(address: string, url: string, id: string);
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
declare class AutocompleteOptions {
    all: boolean;
    template: string;
    top: number;
    filter: AutocompleteFilter;
    static Default(): AutocompleteOptions;
}
declare class TypeaheadOptions {
    top: number;
    search: string[];
    static Default(): TypeaheadOptions;
}
declare class AutocompleteFilter {
    county: string;
    locality: string;
    district: string;
    town_or_city: string;
    postcode: string;
    residential: boolean;
    radius: AutocompleteFilterRadius;
}
declare class AutocompleteFilterRadius {
    km: number;
    longitude: number;
    latitude: number;
}
declare class Address {
    readonly formatted_address: string[];
    readonly thoroughfare: string;
    readonly building_name: string;
    readonly sub_building_name: string;
    readonly sub_building_number: string;
    readonly building_number: string;
    readonly line_1: string;
    readonly line_2: string;
    readonly line_3: string;
    readonly line_4: string;
    readonly locality: string;
    readonly town_or_city: string;
    readonly county: string;
    readonly district: string;
    readonly country: string;
    constructor(formatted_address: string[], thoroughfare: string, building_name: string, sub_building_name: string, sub_building_number: string, building_number: string, line_1: string, line_2: string, line_3: string, line_4: string, locality: string, town_or_city: string, county: string, district: string, country: string);
}
declare class AutocompleteAddress extends Address {
    readonly postcode: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly formatted_address: string[];
    readonly thoroughfare: string;
    readonly building_name: string;
    readonly building_number: string;
    readonly sub_building_name: string;
    readonly sub_building_number: string;
    readonly line_1: string;
    readonly line_2: string;
    readonly line_3: string;
    readonly line_4: string;
    readonly locality: string;
    readonly town_or_city: string;
    readonly county: string;
    readonly district: string;
    readonly country: string;
    readonly residential: boolean;
    constructor(postcode: string, latitude: number, longitude: number, formatted_address: string[], thoroughfare: string, building_name: string, building_number: string, sub_building_name: string, sub_building_number: string, line_1: string, line_2: string, line_3: string, line_4: string, locality: string, town_or_city: string, county: string, district: string, country: string, residential: boolean);
}
declare class FindAddresses {
    readonly postcode: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly addresses: Address[];
    constructor(postcode: string, latitude: number, longitude: number, addresses: Address[]);
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
    autocomplete(query: string, options?: AutocompleteOptions): Promise<Result<AutocompleteSuccess, AutocompleteFailed>>;
    get(id: string): Promise<Result<GetSuccess, GetFailed>>;
    find(postcode: string): Promise<Result<FindSuccess, FindFailed>>;
    typeahead(term: string, options?: TypeaheadOptions): Promise<Result<TypeaheadSuccess, TypeaheadFailed>>;
}
export { Client as default, GetFailed, Result, AutocompleteOptions, AutocompleteFilter, AutocompleteFilterRadius, Suggestion, AutocompleteSuccess, AutocompleteAddress, GetSuccess, AutocompleteFailed, FindAddresses, FindSuccess, FindFailed, TypeaheadFailed, TypeaheadSuccess };

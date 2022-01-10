export declare class Suggestion {
    readonly address: string;
    readonly url: string;
    readonly id: string;
    constructor(address: string, url: string, id: string);
}
export declare abstract class Result<S, F> {
    readonly isSuccess: boolean;
    constructor(isSuccess: boolean);
    abstract toSuccess(): S;
    abstract toFailed(): F;
}
export declare abstract class Success<S, F> extends Result<S, F> {
    constructor();
    abstract toSuccess(): S;
    abstract toFailed(): F;
}
export declare class AutocompleteSuccess extends Success<AutocompleteSuccess, AutocompleteFailed> {
    readonly suggestions: Suggestion[];
    constructor(suggestions: Suggestion[]);
    toSuccess(): AutocompleteSuccess;
    toFailed(): AutocompleteFailed;
}
export declare class GetSuccess extends Success<GetSuccess, GetFailed> {
    readonly address: AutocompleteAddress;
    constructor(address: AutocompleteAddress);
    toSuccess(): GetSuccess;
    toFailed(): GetFailed;
}
export declare class AutocompleteFailed extends Result<AutocompleteSuccess, AutocompleteFailed> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): AutocompleteSuccess;
    toFailed(): AutocompleteFailed;
}
export declare class GetFailed extends Result<GetSuccess, GetFailed> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): GetSuccess;
    toFailed(): GetFailed;
}
export declare class AutocompleteOptions {
    all: boolean;
    template: string | null;
    top: number | null;
    url: string;
    static Default(): AutocompleteOptions;
}
export declare class GetOptions {
    url: string;
    static Default(): GetOptions;
}
export declare class Address {
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
export declare class AutocompleteAddress extends Address {
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
export declare class FindAddresses {
    readonly postcode: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly addresses: Address[];
    constructor(postcode: string, latitude: number, longitude: number, addresses: Address[]);
}
export declare class FindSuccess extends Success<FindSuccess, FindFailed> {
    readonly addresses: FindAddresses;
    constructor(addresses: FindAddresses);
    toSuccess(): FindSuccess;
    toFailed(): FindFailed;
}
export declare class FindFailed extends Result<FindSuccess, FindFailed> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): FindSuccess;
    toFailed(): FindFailed;
}

export declare class Suggestion {
    readonly address: string;
    readonly url: string;
    readonly id: string;
    constructor(address: string, url: string, id: string);
}
export declare abstract class Result<T> {
    readonly isSuccess: boolean;
    constructor(isSuccess: boolean);
    abstract toSuccess(): T;
}
export declare abstract class Success<T> extends Result<T> {
    constructor();
    abstract toSuccess(): T;
}
export declare class AutocompleteSuccess extends Success<AutocompleteSuccess> {
    readonly suggestions: Suggestion[];
    constructor(suggestions: Suggestion[]);
    toSuccess(): AutocompleteSuccess;
}
export declare class GetSuccess extends Success<GetSuccess> {
    readonly address: AutocompleteAddress;
    constructor(address: AutocompleteAddress);
    toSuccess(): GetSuccess;
}
export declare class FindSuccess extends Success<FindSuccess> {
    readonly addresses: FindAddresses;
    constructor(addresses: FindAddresses);
    toSuccess(): FindSuccess;
}
export declare class FindFailed extends Result<FindSuccess> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): FindSuccess;
}
export declare class AutocompleteFailed extends Result<AutocompleteSuccess> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): AutocompleteSuccess;
}
export declare class GetFailed extends Result<GetSuccess> {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): GetSuccess;
}
export declare class AutocompleteOptions {
    all: boolean;
    template: string | null;
    top: number | null;
    static Default(): AutocompleteOptions;
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
export declare class FindAddresses {
    readonly postcode: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly addresses: Address[];
    constructor(postcode: string, latitude: number, longitude: number, addresses: Address[]);
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

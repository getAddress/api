export declare class Suggestion {
    readonly address: string;
    readonly url: string;
    readonly id: string;
    constructor(address: string, url: string, id: string);
}
export declare abstract class Result {
    readonly isSuccess: boolean;
    constructor(isSuccess: boolean);
    abstract toSuccess(): Success;
}
export declare abstract class Success extends Result {
    constructor();
    abstract toSuccess(): Success;
}
export declare class AutocompleteSuccess extends Success {
    readonly suggestions: Suggestion[];
    constructor(suggestions: Suggestion[]);
    toSuccess(): AutocompleteSuccess;
}
export declare class GetSuccess extends Success {
    readonly address: AutocompleteAddress;
    constructor(address: AutocompleteAddress);
    toSuccess(): GetSuccess;
}
export declare class Failed extends Result {
    readonly status: number;
    readonly message: string;
    constructor(status: number, message: string);
    toSuccess(): Success;
}
export declare class AutocompleteOptions {
    all: boolean;
    template: string | null;
    top: number | null;
    static Default(): AutocompleteOptions;
}
export declare abstract class Address {
    readonly postcode: string;
    readonly latitude: number;
    readonly longitude: number;
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
    constructor(postcode: string, latitude: number, longitude: number, formatted_address: string[], thoroughfare: string, building_name: string, sub_building_name: string, sub_building_number: string, building_number: string, line_1: string, line_2: string, line_3: string, line_4: string, locality: string, town_or_city: string, county: string, district: string, country: string);
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

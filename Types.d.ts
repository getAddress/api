export declare class Suggestion {
    readonly address: string;
    readonly url: string;
    readonly id: string;
    isSuccess: boolean;
    constructor(address: string, url: string, id: string);
}
export declare class Failed {
    readonly status: number;
    readonly message: string;
    isSuccess: boolean;
    constructor(status: number, message: string);
}

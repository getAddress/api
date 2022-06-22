/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
export interface Suggestion {
  id: string;
  url: string;
  address: string;
}

export abstract class Result<S, F> {
  constructor(readonly isSuccess: boolean) {

  }

  abstract toSuccess(): S;

  abstract toFailed(): F;
}

export abstract class Success<S, F> extends Result<S, F> {
  constructor() {
    super(true);
  }

  abstract toSuccess(): S;

  abstract toFailed(): F;
}

export class AutocompleteSuccess extends Success<AutocompleteSuccess, AutocompleteFailed> {
  constructor(readonly suggestions: Suggestion[]) {
    super();
  }

  toSuccess(): AutocompleteSuccess {
    return this;
  }

  toFailed(): AutocompleteFailed {
    throw new Error('Did not fail');
  }
}

export class GetSuccess extends Success<GetSuccess, GetFailed> {
  constructor(readonly address: AutocompleteAddress) {
    super();
  }

  toSuccess(): GetSuccess {
    return this;
  }

  toFailed(): GetFailed {
    throw new Error('Did not fail');
  }
}

export class AutocompleteFailed extends Result<AutocompleteSuccess, AutocompleteFailed> {
  constructor(readonly status: number, readonly message: string) {
    super(false);
  }

  toSuccess(): AutocompleteSuccess {
    throw new Error('Not a success');
  }

  toFailed(): AutocompleteFailed {
    return this;
  }
}

export class GetFailed extends Result<GetSuccess, GetFailed> {
  constructor(readonly status: number, readonly message: string) {
    super(false);
  }

  toSuccess(): GetSuccess {
    throw new Error('Not a success');
  }

  toFailed(): GetFailed {
    return this;
  }
}

export interface AutocompleteOptions {
  all: boolean;
  template: string;
  top: number;
  filter: Partial<AutocompleteFilter>;
}

export interface TypeaheadOptions {
  top: number;
  search: string[];
}

export interface AutocompleteFilterRadius {
  km: number;
  longitude: number;
  latitude: number;
}

export interface AutocompleteFilter {
  county: string;
  locality: string;
  district: string;
  town_or_city: string;
  postcode: string;
  residential: boolean;
  radius: AutocompleteFilterRadius;
}

export interface Address {
  formatted_address: string[],
  thoroughfare: string,
  building_name: string,
  sub_building_name: string,
  sub_building_number: string,
  building_number: string,
  line_1: string,
  line_2: string,
  line_3: string,
  line_4: string,
  locality: string,
  town_or_city: string,
  county: string,
  district: string,
  country: string,
}

export interface AutocompleteAddress extends Address {
  postcode: string,
  latitude: number,
  longitude: number,
  locality: string,
  residential: boolean,
}

export interface FindAddresses {
  postcode: string,
  latitude: number,
  longitude: number,
  addresses: Address[],
}

export class FindSuccess extends Success<FindSuccess, FindFailed> {
  constructor(readonly addresses: FindAddresses) {
    super();
  }

  toSuccess(): FindSuccess {
    return this;
  }

  toFailed(): FindFailed {
    throw new Error('failed');
  }
}

export class FindFailed extends Result<FindSuccess, FindFailed> {
  constructor(readonly status: number, readonly message: string) {
    super(false);
  }

  toSuccess(): FindSuccess {
    throw new Error('failed');
  }

  toFailed(): FindFailed {
    return this;
  }
}

export class TypeaheadSuccess extends Success<TypeaheadSuccess, TypeaheadFailed> {
  constructor(readonly results: string[]) {
    super();
  }

  toSuccess(): TypeaheadSuccess {
    return this;
  }

  toFailed(): TypeaheadFailed {
    throw new Error('failed');
  }
}

export class TypeaheadFailed extends Result<TypeaheadSuccess, TypeaheadFailed> {
  constructor(readonly status: number, readonly message: string) {
    super(false);
  }

  toSuccess(): TypeaheadSuccess {
    throw new Error('failed');
  }

  toFailed(): TypeaheadFailed {
    return this;
  }
}

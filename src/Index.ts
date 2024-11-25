import {
  GetFailed, Result, AutocompleteOptions, Suggestion,
  AutocompleteSuccess, AutocompleteAddress, GetSuccess,
  AutocompleteFailed, FindAddresses, FindSuccess, FindFailed,
  AutocompleteFilter, AutocompleteFilterRadius, TypeaheadSuccess,
  TypeaheadFailed, TypeaheadOptions,LocationOptions,LocationSuccess,
  LocationFailed,LocationSuggestion,GetLocationSuccess,GetLocationFailed,
  LocationAddress,LocationFilter,LocationFilterRadius
} from './Types.js';

class Client {
  private autocompleteAbortController: AbortController;

  private getAbortController: AbortController;

  private typeaheadAbortController: AbortController;

  private locationAbortController: AbortController;

  private getLocationAbortController: AbortController;

  private autocompleteResponse?: Response = undefined;

  private getResponse?: Response = undefined;

  private locationResponse?: Response = undefined;

  private getLocationResponse?: Response = undefined;

  private typeaheadResponse?: Response = undefined;

  constructor(
    readonly api_key: string,
    readonly autocomplete_url: string = 'https://api.getaddress.io/autocomplete/{query}',
    readonly get_url: string = 'https://api.getaddress.io/get/{id}',
    readonly location_url: string = 'https://api.getaddress.io/location/{query}',
    readonly get_location_url: string = 'https://api.getaddress.io/get-location/{id}',
    readonly typeahead_url: string = 'https://api.getaddress.io/typeahead/{term}',
  ) {
    this.autocompleteAbortController = new AbortController();
    this.getAbortController = new AbortController();
    this.typeaheadAbortController = new AbortController();
    this.locationAbortController = new AbortController();
    this.getLocationAbortController = new AbortController();
  }

  async location(
    query: string,
    options: Partial<LocationOptions> = {},
  ): Promise<Result<LocationSuccess, LocationFailed>> {
    try {
      const combinedOptions = {
        all: true,
        ...options,
      };

      let url = this.location_url.replace(/{query}/i, query);

      if (this.api_key) {
        if (url.includes('?')) {
          url = `${url}&api-key=${this.api_key}`;
        } else {
          url = `${url}?api-key=${this.api_key}`;
        }
      }

      if (this.locationResponse !== undefined) {
        this.locationResponse = undefined;
        this.locationAbortController.abort();
        this.locationAbortController = new AbortController();
      }

      this.locationResponse = await fetch(url, {
        method: 'post',
        signal: this.locationAbortController.signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedOptions),
      });

      if (this.locationResponse.status === 200) {
        const json: any = await this.locationResponse.json();
        const suggestions = json.suggestions as LocationSuggestion[];
        return new LocationSuccess(suggestions);
      }

      const json: any = await this.locationResponse.json();
      return new LocationFailed(this.locationResponse.status, json.Message);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          return new LocationSuccess([]);
        }
        return new LocationFailed(401, err.message);
      }

      return new LocationFailed(401, 'Unauthorised');
    } finally {
      this.locationResponse = undefined;
    }
  }

  async getLocation(id: string): Promise<Result<GetLocationSuccess, GetLocationFailed>> {
    try {
      let url = this.get_location_url.replace(/{id}/i, id);

      if (this.api_key) {
        if (url.includes('?')) {
          url = `${url}&api-key=${this.api_key}`;
        } else {
          url = `${url}?api-key=${this.api_key}`;
        }
      }

      if (this.getLocationResponse !== undefined) {
        this.getResponse = undefined;
        this.getLocationAbortController.abort();
        this.getLocationAbortController = new AbortController();
      }

      this.getResponse = await fetch(
        url,
        {
          method: 'get',
          signal: this.getLocationAbortController.signal,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (this.getResponse.status === 200) {
        const json: any = await this.getResponse.json();
        const loaction = json as LocationAddress;
        return new GetLocationSuccess(loaction);
      }

      const json: any = await this.getResponse.json();
      return new GetLocationFailed(this.getResponse.status, json.Message);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return new GetLocationFailed(401, err.message);
      }

      return new GetLocationFailed(401, 'Unauthorised');
    } finally {
      this.getResponse = undefined;
    }
  }


  async autocomplete(
    query: string,
    options: Partial<AutocompleteOptions> = {},
  ): Promise<Result<AutocompleteSuccess, AutocompleteFailed>> {
    try {

      const combinedOptions = {
        all: true,
        ...options
      };

      let url = this.autocomplete_url.replace(/{query}/i, query);

      if (this.api_key) {
        if (url.includes('?')) {
          url = `${url}&api-key=${this.api_key}`;
        } else {
          url = `${url}?api-key=${this.api_key}`;
        }
      }

      if (this.autocompleteResponse !== undefined) {
        this.autocompleteResponse = undefined;
        this.autocompleteAbortController.abort();
        this.autocompleteAbortController = new AbortController();
      }

      this.autocompleteResponse = await fetch(url, {
        method: 'post',
        signal: this.autocompleteAbortController.signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedOptions),
      });

      if (this.autocompleteResponse.status === 200) {
        const json: any = await this.autocompleteResponse.json();
        const suggestions = json.suggestions as Suggestion[];
        return new AutocompleteSuccess(suggestions);
      }

      const json: any = await this.autocompleteResponse.json();
      return new AutocompleteFailed(this.autocompleteResponse.status, json.Message);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          return new AutocompleteSuccess([]);
        }
        return new AutocompleteFailed(401, err.message);
      }

      return new AutocompleteFailed(401, 'Unauthorised');
    } finally {
      this.autocompleteResponse = undefined;
    }
  }

  async get(id: string, options: Partial<AutocompleteOptions> = {}): Promise<Result<GetSuccess, GetFailed>> {
    try {
      let url = this.get_url.replace(/{id}/i, id);

      if (this.api_key) {
        if (url.includes('?')) {
          url = `${url}&api-key=${this.api_key}`;
        } else {
          url = `${url}?api-key=${this.api_key}`;
        }
      }

      if(options.remember === false)
      {
        url = `${url}&remember=false`;
      }

      if (this.getResponse !== undefined) {
        this.getResponse = undefined;
        this.getAbortController.abort();
        this.getAbortController = new AbortController();
      }

      this.getResponse = await fetch(
        url,
        {
          method: 'get',
          signal: this.getAbortController.signal,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (this.getResponse.status === 200) {
        const json: any = await this.getResponse.json();
        const address = json as AutocompleteAddress;
        return new GetSuccess(address);
      }

      const json: any = await this.getResponse.json();
      return new GetFailed(this.getResponse.status, json.Message);
      
    } catch (err: unknown) {
      if (err instanceof Error) {
        return new GetFailed(401, err.message);
      }

      return new GetFailed(401, 'Unauthorised');
    } finally {
      this.getResponse = undefined;
    }
  }

  async find(postcode: string): Promise<Result<FindSuccess, FindFailed>> {
    try {
      const response = await fetch(`https://api.getaddress.io/find/${postcode}?api-key=${this.api_key}&expand=true`);

      if (response.status === 200) {
        const json: any = await response.json();
        const addresses = json as FindAddresses;
        return new FindSuccess(addresses);
      }

      const json: any = await response.json();
      return new FindFailed(response.status, json.Message);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return new FindFailed(401, err.message);
      }

      return new FindFailed(401, 'Unauthorised');
    }
  }

  async typeahead(
    term: string,
    options: Partial<TypeaheadOptions> = {},
  ): Promise<Result<TypeaheadSuccess, TypeaheadFailed>> {
    try {
      let url = this.typeahead_url.replace(/{term}/i, term);

      if (this.api_key) {
        if (url.includes('?')) {
          url = `${url}&api-key=${this.api_key}`;
        } else {
          url = `${url}?api-key=${this.api_key}`;
        }
      }

      if (this.typeaheadResponse !== undefined) {
        this.typeaheadResponse = undefined;
        this.typeaheadAbortController.abort();
        this.typeaheadAbortController = new AbortController();
      }

      this.typeaheadResponse = await fetch(url, {
        method: 'post',
        signal: this.autocompleteAbortController.signal,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
      });

      if (this.typeaheadResponse.status === 200) {
        const json: any = await this.typeaheadResponse.json();
        const results = json as string[];
        return new TypeaheadSuccess(results);
      }

      const json: any = await this.typeaheadResponse.json();
      return new TypeaheadFailed(this.typeaheadResponse.status, json.Message);
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          return new TypeaheadSuccess([]);
        }
        return new TypeaheadFailed(401, err.message);
      }

      return new TypeaheadFailed(401, 'Unauthorised');
    } finally {
      this.typeaheadResponse = undefined;
    }
  }
}

export default Client;

export {
  Client, 
  GetFailed,
  GetLocationFailed, 
  Result,
  AutocompleteOptions,
  LocationOptions,
  AutocompleteFilter,
  LocationFilter,
  AutocompleteFilterRadius,
  LocationFilterRadius,
  Suggestion,
  LocationSuggestion,
  AutocompleteSuccess,
  LocationSuccess,
  AutocompleteAddress,
  LocationAddress,
  GetSuccess,
  GetLocationSuccess,
  AutocompleteFailed, 
  LocationFailed,
  FindAddresses,
  FindSuccess, FindFailed, TypeaheadFailed,
  TypeaheadSuccess, TypeaheadOptions
};

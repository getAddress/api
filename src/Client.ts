import {GetFailed, Result,AutocompleteOptions, Suggestion,
    AutocompleteSuccess, AutocompleteAddress,GetSuccess, AutocompleteFailed,FindAddresses,FindSuccess,FindFailed} from "./Types"
    


class Client
{
    private readonly autocompleteAbortController:AbortController;
    private readonly getAbortController:AbortController;
    private autocompleteResponse?:Response = undefined;
    private getResponse?:Response = undefined;


    constructor(readonly api_key:string, 
        readonly autocomplete_url:string = "https://api.getaddress.io/autocomplete/{query}",
        readonly get_url:string = "https://api.getaddress.io/get/{id}")
    {
        this.autocompleteAbortController= new AbortController();
        this.getAbortController= new AbortController();
    }

    async autocomplete(query:string, options:AutocompleteOptions = AutocompleteOptions.Default()):Promise<Result<AutocompleteSuccess,AutocompleteFailed>> 
    {
        try
        {
            options = Object.assign(AutocompleteOptions.Default(),options);

            let url = this.autocomplete_url.replace(/{query}/i,query);

            if(this.api_key){
                if(url.includes('?')){
                    url = url+ '&api-key='+ this.api_key;
                }
                else{
                    url = url+ '?api-key='+ this.api_key;
                }
            }

            if(this.autocompleteResponse !== undefined){
                this.autocompleteResponse = undefined;
                this.autocompleteAbortController.abort();
            }

            this.autocompleteResponse = await fetch(url, {
                method: 'post', 
                signal: this.autocompleteAbortController.signal,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(options, (key, value) => {
                    if (value)
                        return value;
                })
            });
    
            if(this.autocompleteResponse.status == 200)
            {
                const json:any = await this.autocompleteResponse.json();
                const suggestions =  json.suggestions as Suggestion[];
                return new AutocompleteSuccess(suggestions);
            }
 
            const json:any = await this.autocompleteResponse.json();
            return new AutocompleteFailed(this.autocompleteResponse.status,json.Message);
         }
         catch(err:unknown)
         {
            if(err instanceof Error)
            {
                if(err.name === 'AbortError'){
                    return new AutocompleteSuccess([]);
                }
                return new AutocompleteFailed(401,err.message);
            }

            return new AutocompleteFailed(401,'Unauthorised');
         }
         finally 
         {
             this.autocompleteResponse = undefined;
         }
    }

    
    async get(id:string):Promise<Result<GetSuccess,GetFailed>> 
    {
        try
        {
            let url = this.get_url.replace(/{id}/i,id);
            
            if(this.api_key){
                if(url.includes('?')){
                    url = url+ '&api-key='+ this.api_key;
                }
                else{
                    url = url+ '?api-key='+ this.api_key;
                }
            }

            if(this.getResponse !== undefined){
                this.getResponse = undefined;
                this.getAbortController.abort();
            }

            this.getResponse = await fetch(url,
            {
                method: 'get',
                signal: this.getAbortController.signal,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if(this.getResponse.status == 200){
                const json:any = await this.getResponse.json();
                const address =  json as AutocompleteAddress;
                return new GetSuccess(address);
            }
 
            const json:any = await this.getResponse.json();
            return new GetFailed(this.getResponse.status,json.Message);
         }
         catch(err:unknown)
         {
            if(err instanceof Error)
            {
                return new GetFailed(401,err.message);
            }

            return new GetFailed(401,'Unauthorised');
         }
         finally{
            this.getResponse = undefined;
         }
    }

    async find(postcode:string):Promise<Result<FindSuccess,FindFailed>> 
    {
        try{
            
            const response = await fetch(`https://api.getaddress.io/find/${postcode}?api-key=${this.api_key}&expand=true`);
    
            if(response.status == 200){
                const json:any = await response.json();
                const addresses =  json as FindAddresses;
                return new FindSuccess(addresses);
            }
 
            const json:any = await response.json();
            return new FindFailed(response.status,json.Message);
         }
         catch(err:unknown)
         {
            if(err instanceof Error)
            {
                return new FindFailed(401,err.message);
            }

            return new FindFailed(401,'Unauthorised');
         }
    }
}



export {Client as default,GetFailed, Result,AutocompleteOptions, Suggestion,
    AutocompleteSuccess, AutocompleteAddress,GetSuccess, AutocompleteFailed,FindAddresses,FindSuccess,FindFailed }

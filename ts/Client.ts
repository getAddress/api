import {GetFailed, Result,AutocompleteOptions, Suggestion,
    AutocompleteSuccess, AutocompleteAddress,GetSuccess, AutocompleteFailed} from "./Types"
    


class Client
{
    
    constructor(readonly api_key:string, 
        readonly autocomplete_url:string = "https://api.getaddress.io/autocomplete/",
        readonly get_url:string = "https://api.getaddress.io/get/")
    {
       

    }

    async autocomplete(query:string, options:AutocompleteOptions = AutocompleteOptions.Default()):Promise<Result<AutocompleteSuccess,AutocompleteFailed>> 
    {
        try{
            
            let url = this.autocomplete_url + `${query}`;
            if(this.api_key){
                url = url+ `?api-key=${this.api_key}`;
            }
            
            const response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(options,(key, value) => {
                    if (value) return value
                  })
            });
    
            if(response.status == 200){
                const json:any = await response.json();
                const suggestions =  json.suggestions as Suggestion[];
                return new AutocompleteSuccess(suggestions);
            }
 
            const json:any = await response.json();
            return new AutocompleteFailed(response.status,json.Message);
         }
         catch(err:unknown)
         {
            if(err instanceof Error)
            {
                return new AutocompleteFailed(401,err.message);
            }

            return new AutocompleteFailed(401,'Unauthorised');
         }
    }

    

    async get(id:string):Promise<Result<GetSuccess,GetFailed>> 
    {
        try{
            
            let url = this.get_url + `${id}`;
            if(this.api_key){
                url = url+ `?api-key=${this.api_key}`;
            }

            const response = await fetch(url);
    
            if(response.status == 200){
                const json:any = await response.json();
                const address =  json as AutocompleteAddress;
                return new GetSuccess(address);
            }
 
            const json:any = await response.json();
            return new GetFailed(response.status,json.Message);
         }
         catch(err:unknown)
         {
            if(err instanceof Error)
            {
                return new GetFailed(401,err.message);
            }

            return new GetFailed(401,'Unauthorised');
         }
    }

    
}


export {Client as default,GetFailed, Result,AutocompleteOptions, Suggestion,
    AutocompleteSuccess, AutocompleteAddress,GetSuccess, AutocompleteFailed }

import {Suggestion, Failed, Result,AutocompleteOptions, 
    AutocompleteSuccess, AutocompleteAddress,GetSuccess} from "./Types"
import fetch from "node-fetch"


class API
{

    constructor(readonly api_key:string)
    {
     
    }

    async autocomplete(query:string, options:AutocompleteOptions = AutocompleteOptions.Default()):Promise<Result> 
    {
        try{
            
            const response = await fetch(`https://api.getaddress.io/autocomplete/${query}?api-key=${this.api_key}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    all: options.all,
                    template:options.template,
                    top:options.top
                })
            });
    
            if(response.status == 200){
                const json:any = await response.json();
                const suggestions =  json.suggestions as Suggestion[];
                return new AutocompleteSuccess(suggestions);
            }
 
            let json = await response.json();
            return json as Failed;
         }
         catch(err:unknown)
         {
            if(err instanceof Error)
            {
                return new Failed(401,err.message);
            }

            return new Failed(401,'Unauthorised');
         }
    }

    async get(id:string):Promise<Result> 
    {
        try{
            
            const response = await fetch(`https://api.getaddress.io/get/${id}?api-key=${this.api_key}`);
    
            if(response.status == 200){
                const json:any = await response.json();
                const address =  json as AutocompleteAddress;
                return new GetSuccess(address);
            }
 
            let json = await response.json();
            return json as Failed;
         }
         catch(err:unknown)
         {
            if(err instanceof Error)
            {
                return new Failed(401,err.message);
            }

            return new Failed(401,'Unauthorised');
         }
    }
}

export * from './Types';
export {API}
export default API


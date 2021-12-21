import {Failed, Suggestion, Result, Success} from "./Types"
import fetch from "node-fetch"

export class API
{

    constructor(readonly api_key:string){
       
    }

    async autocomplete(query:string):Promise<Result> 
    {
        try{
            
            const response = await fetch(`https://api.getaddress.io/autocomplete/${query}?api-key=${this.api_key}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    all: true
                })
            });
    
            if(response.status == 200){
                let json = await response.json();
                const suggestions =  json as Suggestion[];
                return new Success(suggestions);
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
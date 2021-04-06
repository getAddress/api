import {Failed, Suggestion} from "./types";

export class API
{

    constructor(readonly api_key:string){
       
    }

     async autocomplete(query:string):Promise<Suggestion[]|Failed> 
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
             var json = await response.json();
             return json as Suggestion[];
         }
 
         var json = await response.json();
         return json as Failed;
         }
         catch(err){
             return new Failed(401,err.message);
         }
    }

     async find(query:string):Promise<any[]|Failed> 
    {
       try{
        const response = await fetch(`https://api.getaddress.io/find/${query}?api-key=${this.api_key}&expand=true`);

        if(response.status == 200){
            var json = await response.json();
            return json;
        }

        var json = await response.json();
        return new Failed(response.status,json.Message);
        }
        catch(err){
            return new Failed(401,err.message);
        }
    }
}
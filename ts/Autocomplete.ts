import {Failed, Suggestion} from "./types";

export default class Autocomplete{

    constructor(readonly api_key:string){
       
        

    }

   async suggestions(query:string):Promise<Suggestion[]|Failed> 
   {
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
}
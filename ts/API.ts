import Autocomplete from "./Autocomplete";

export default class API{
    
    private readonly _autocomplete: Autocomplete;
    
    constructor(api_key:string){
        this._autocomplete = new Autocomplete(api_key);
    }

    get autocomplete(){
        return this._autocomplete;
    }
}
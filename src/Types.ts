export class Suggestion 
{
    constructor(readonly address:string, readonly url:string, readonly id:string) 
    {
        
    }
}

export abstract class Result<S,F>
{
    constructor(readonly isSuccess:boolean){
        
    }

    abstract toSuccess():S;
    abstract toFailed():F;
}

export abstract class Success<S,F> extends Result<S,F>
{
    constructor()
    {
        super(true);
    }

    abstract toSuccess():S;
    abstract toFailed():F;
}

export class AutocompleteSuccess extends Success<AutocompleteSuccess,AutocompleteFailed>
{
    constructor(readonly suggestions:Suggestion[])
    {
        super();
    }

    toSuccess(): AutocompleteSuccess {
        return this;
    }
    toFailed(): AutocompleteFailed {
        throw new Error('Did not fail');
    }
}

export class GetSuccess extends Success<GetSuccess, GetFailed>
{
    constructor(readonly address:AutocompleteAddress)
    {
        super();
    }

    toSuccess(): GetSuccess {
        return this;
    }
    toFailed(): GetFailed {
        throw new Error('Did not fail');
    }
}


export class AutocompleteFailed extends Result<AutocompleteSuccess,AutocompleteFailed>
{
    constructor(readonly status:number, readonly message:string)
    {
        super(false);
    }

    toSuccess(): AutocompleteSuccess {
        throw new Error('Not a success');
    }
    toFailed(): AutocompleteFailed {
        return this;
    }
}

export class GetFailed extends Result<GetSuccess,GetFailed>
{
    constructor(readonly status:number, readonly message:string)
    {
        super(false);
    }

    toSuccess(): GetSuccess {
        throw new Error('Not a success');
    }
    toFailed(): GetFailed {
        return this;
    }
}

export class AutocompleteOptions
{
    all?:boolean = undefined;
    template?:string = undefined;
    top?:number = undefined;
    filter?:AutocompleteFilter = undefined;
   
    static Default():AutocompleteOptions
    {
        let options = new AutocompleteOptions();
        options.all = true;
        return options;
    }
}

export class TypeaheadOptions
{
    
    top:number = undefined;
    search:string[] = undefined;
   
    static Default():TypeaheadOptions
    {
        let options = new TypeaheadOptions();
        return options;
    }
}

export class AutocompleteFilter
{
    county?:string = undefined;
    locality?:string= undefined;
    district?:string= undefined;
    town_or_city?:string=undefined;
    postcode?:string=undefined;
    residential?:boolean=undefined;
    radius?:AutocompleteFilterRadius=undefined;
}

export class AutocompleteFilterRadius
{
    km:number=undefined;
    longitude:number=undefined;
    latitude:number=undefined;
}


export class Address
{
    constructor(
        readonly formatted_address:string[],
        readonly thoroughfare:string,
        readonly building_name:string,
        readonly sub_building_name:string,
        readonly sub_building_number:string,
        readonly building_number:string,
        readonly line_1:string,
        readonly line_2:string,
        readonly line_3:string,
        readonly line_4:string,
        readonly locality:string,
        readonly town_or_city:string,
        readonly county:string,
        readonly district:string,
        readonly country:string)
    {

    }
}



export class AutocompleteAddress extends Address{
    
    constructor(
        readonly postcode:string, 
        readonly latitude:number,
        readonly longitude:number,
        readonly formatted_address:string[],
        readonly thoroughfare:string,
        readonly building_name:string,
        readonly building_number:string,
        readonly sub_building_name:string,
        readonly sub_building_number:string,
        readonly line_1:string,
        readonly line_2:string,
        readonly line_3:string,
        readonly line_4:string,
        readonly locality:string,
        readonly town_or_city:string,
        readonly county:string,
        readonly district:string,
        readonly country:string,
        readonly residential:boolean)
    {
        super(formatted_address,thoroughfare,
            building_name,building_number,
            sub_building_name,sub_building_number,
            line_1,line_2,line_3,line_3,line_4,
            town_or_city,county,district,country);
    }
}

export class FindAddresses
{
    constructor(
        readonly postcode:string, 
        readonly latitude:number,
        readonly longitude:number,
        readonly addresses:Address[]){

    }
}

export class FindSuccess extends Success<FindSuccess,FindFailed>
{
    constructor(readonly addresses:FindAddresses)
    {
        super();
    }

    toSuccess(): FindSuccess {
        return this;
    }
    toFailed(): FindFailed {
        throw new Error('failed');
    }
}

export class FindFailed extends Result<FindSuccess,FindFailed>
{
    constructor(readonly status:number, readonly message:string)
    {
        super(false);
    }

    toSuccess(): FindSuccess {
        throw new Error('failed');
    }
    toFailed(): FindFailed {
        return this;
    }
}

export class TypeaheadSuccess extends Success<TypeaheadSuccess,TypeaheadFailed>
{
    constructor(readonly results:string[])
    {
        super();
    }

    toSuccess(): TypeaheadSuccess {
        return this;
    }
    toFailed(): TypeaheadFailed {
        throw new Error('failed');
    }
}

export class TypeaheadFailed extends Result<TypeaheadSuccess,TypeaheadFailed>
{
    constructor(readonly status:number, readonly message:string)
    {
        super(false);
    }

    toSuccess(): TypeaheadSuccess {
        throw new Error('failed');
    }
    toFailed(): TypeaheadFailed {
        return this;
    }
}
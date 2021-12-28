export class Suggestion 
{
    constructor(readonly address:string, readonly url:string, readonly id:string) 
    {
        
    }
}

export abstract class Result<T>
{
    constructor(readonly isSuccess:boolean){
        
    }

    abstract toSuccess():T;
}

export abstract class Success<T> extends Result<T>
{
    constructor()
    {
        super(true);
    }

    abstract toSuccess():T;
}

export class AutocompleteSuccess extends Success<AutocompleteSuccess>
{
    constructor(readonly suggestions:Suggestion[])
    {
        super();
    }

    toSuccess(): AutocompleteSuccess {
        return this;
    }
}

export class GetSuccess extends Success<GetSuccess>
{
    constructor(readonly address:AutocompleteAddress)
    {
        super();
    }

    toSuccess(): GetSuccess {
        return this;
    }
}

export class FindSuccess extends Success<FindSuccess>
{
    constructor(readonly addresses:FindAddresses)
    {
        super();
    }

    toSuccess(): FindSuccess {
        return this;
    }
}

export class FindFailed extends Result<FindSuccess>
{
    constructor(readonly status:number, readonly message:string)
    {
        super(false);
    }

    toSuccess(): FindSuccess {
        throw new Error('Not a success');
    }
}

export class AutocompleteFailed extends Result<AutocompleteSuccess>
{
    constructor(readonly status:number, readonly message:string)
    {
        super(false);
    }

    toSuccess(): AutocompleteSuccess {
        throw new Error('Not a success');
    }
}

export class GetFailed extends Result<GetSuccess>
{
    constructor(readonly status:number, readonly message:string)
    {
        super(false);
    }

    toSuccess(): GetSuccess {
        throw new Error('Not a success');
    }
}

export class AutocompleteOptions
{
    all:boolean = false;
    template:string|null = null;
    top:number|null = null;
    
    static Default():AutocompleteOptions
    {
        let options = new AutocompleteOptions();
        options.all = true;
        return options;
    }
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

export class FindAddresses
{
    constructor(
        readonly postcode:string, 
        readonly latitude:number,
        readonly longitude:number,
        readonly addresses:Address[]){

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
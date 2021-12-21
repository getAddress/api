export abstract class Result
{
    constructor(readonly isSuccess:boolean){
        
    }
}

export class Success extends Result
{
    constructor(readonly suggestions:Suggestion[])
    {
        super(true);
    }
}

export class Suggestion 
{
    constructor(readonly address:string, readonly url:string, readonly id:string) 
    {
        
    }
}

export class Failed extends Result
{
    constructor(readonly status:number, readonly message:string)
    {
        super(false);
    }
}
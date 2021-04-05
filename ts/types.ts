export class Suggestion{
    isSuccess: boolean = true;
    constructor(readonly address:string, readonly url:string, readonly id:string) 
    {
        
    }
}

export class Failed{
    isSuccess: boolean = true;
    constructor(readonly status:number, readonly message:string){

    }
}
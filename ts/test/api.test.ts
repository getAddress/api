import GetAddress,{AutocompleteOptions} from "../Client"
import "isomorphic-fetch"; 

const apiKey:string = process.env.getaddress_apikey as string;


 test('autocomplete is success', async () => {
    let getAddress = new GetAddress(apiKey);

    const options = AutocompleteOptions.Default();
    
    let autocompleteResult = await getAddress.autocomplete('TR19 7AA',options);
    
    if(!autocompleteResult.isSuccess)
    {
        let failed = autocompleteResult.toFailed();
        console.log("--------------- "+ failed.message);
    }

    expect(autocompleteResult.isSuccess).toBe(true);

    let success = autocompleteResult.toSuccess();

    expect(success.suggestions.length > 0).toBe(true);

    const id = success.suggestions[0].id;

    let getResult = await getAddress.get(id);

    expect(getResult.isSuccess).toBe(true);
});

test('autocomplete with all is success', async () => {
    let getAddress = new GetAddress(apiKey);

    const options:any = {all:true};
    
    let autocompleteResult = await getAddress.autocomplete('KW1 4YT',options);
    
    if(!autocompleteResult.isSuccess)
    {
        let failed = autocompleteResult.toFailed();
        console.log("--------------- "+ failed.message);
    }

    expect(autocompleteResult.isSuccess).toBe(true);

    let success = autocompleteResult.toSuccess();

    expect(success.suggestions.length > 6).toBe(true);
});

test('find is success', async () => {
    let getAddress = new GetAddress(apiKey);
    let result = await getAddress.find('TR19 7AA');
    
    if(!result.isSuccess){
        let failed = result.toFailed();
        console.log("--------------- "+ failed.message);
    }

    expect(result.isSuccess).toBe(true);
});


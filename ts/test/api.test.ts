import {API} from "../API"

const apiKey:string = process.env.getaddress_apikey as string;

test('autocomplete is success', async () => {
    let api = new API(apiKey);
    let result = await api.autocomplete('TR19 7AA');
    expect(result.isSuccess).toBe(true);
});

test('find is success', async () => {
    let api = new API(apiKey);
    let result = await api.find('TR19 7AA');
    expect(result.isSuccess).toBe(true);
});

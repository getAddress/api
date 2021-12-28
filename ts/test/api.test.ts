import {API} from "../API"
import {getKey} from "./api-key"

test('autocomplete is success', async () => {
    let api = new API(getKey());
    let result = await api.autocomplete('TR19 7AA');
    expect(result.isSuccess).toBe(true);
});

test('find is success', async () => {
    let api = new API(getKey());
    let result = await api.find('TR19 7AA');
    expect(result.isSuccess).toBe(true);
});

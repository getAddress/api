import GetAddress from '../Client';
import 'isomorphic-fetch';

const apiKey: string = process.env.getaddress_apikey as string;

test('autocomplete is success', async () => {
  const getAddress = new GetAddress(apiKey);

  const options = {
    all: true,
  };

  const autocompleteResult = await getAddress.autocomplete('TR19 7AA', options);

  if (!autocompleteResult.isSuccess) {
    const failed = autocompleteResult.toFailed();
    console.log(`--------------- ${failed.message}`);
  }

  expect(autocompleteResult.isSuccess).toBe(true);

  const success = autocompleteResult.toSuccess();

  expect(success.suggestions.length > 0).toBe(true);

  const { id } = success.suggestions[0];

  const getResult = await getAddress.get(id);

  expect(getResult.isSuccess).toBe(true);
});

test('location is success', async () => {
  const getAddress = new GetAddress(apiKey);

  const locationResult = await getAddress.location('TR19 7AA');

  if (!locationResult.isSuccess) {
    const failed = locationResult.toFailed();
    console.log(`--------------- ${failed.message}`);
  }

  expect(locationResult.isSuccess).toBe(true);

  const success = locationResult.toSuccess();

  expect(success.suggestions.length > 0).toBe(true);

  const { id } = success.suggestions[0];

  const getLocationResult = await getAddress.getLocation(id);

  expect(getLocationResult.isSuccess).toBe(true);
});

test('autocomplete with all is success', async () => {
  const getAddress = new GetAddress(apiKey);

  const options = { all: true };

  const autocompleteResult = await getAddress.autocomplete('KW1 4YT', options);

  if (!autocompleteResult.isSuccess) {
    const failed = autocompleteResult.toFailed();
    console.log(`--------------- ${failed.message}`);
  }

  expect(autocompleteResult.isSuccess).toBe(true);

  const success = autocompleteResult.toSuccess();

  expect(success.suggestions.length > 6).toBe(true);
});

test('autocomplete with residentional filter is success', async () => {
  const getAddress = new GetAddress(apiKey);

  const options = {
    all: true,
    filter: {
      residential: true,
    },
  };

  const autocompleteResult = await getAddress.autocomplete('KW1 4YT', options);

  if (!autocompleteResult.isSuccess) {
    const failed = autocompleteResult.toFailed();
    console.log(`--------------- ${failed.message}`);
  }

  expect(autocompleteResult.isSuccess).toBe(true);

  const success = autocompleteResult.toSuccess();

  expect(success.suggestions.length > 0).toBe(true);
});

test('find is success', async () => {
  const getAddress = new GetAddress(apiKey);
  const result = await getAddress.find('TR19 7AA');

  if (!result.isSuccess) {
    const failed = result.toFailed();
    console.log(`--------------- ${failed.message}`);
  }

  expect(result.isSuccess).toBe(true);
});

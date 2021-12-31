GetAddress.io core address look-up functionality.

# Installation
```
npm install getaddress-api
```
# Usage
## Find
```
import Client from 'getaddress-api'

const api = new Client("<your API key>");

const findResult = await api.find("XX4 01X");

if(findResult.isSuccess)
{
    const success = findResult.toSuccess();
    console.log(success.addresses);
}
else
{
    const failed = findResult.toFailed();
    console.log(failed);
}

```
## Autocomplete
```
import Client from 'getaddress-api'

const api = new Client("<your API key>");

const autocompleteResult = await api.autocomplete('TR19 7AA');

if(autocompleteResult.isSuccess)
{
  var success = autocompleteResult.toSuccess();

  for(const suggestion of success.suggestions)
  {
      const address = await api.get(suggestion.id);
      console.log(address);
  }
}
else
{
  const failed = autocompleteResult.toFailed();
  console.log(failed);
}
```



const assert = require('assert');
const API = require('../dist/getaddress-api-cjs');
const apiKey = require('./api-key');

const autocomplete = new API(apiKey.getKey()).autocomplete;

describe('API',()=>{

    
});
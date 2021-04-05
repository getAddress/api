export default [
    {
        input: "src/API.js",
        output: {
            file:"dist/getaddress-api-cjs.js",
            format:"cjs"
        }
    },
    {
        input: "src/API.js",
        output: {
            file:"dist/getaddress-api-es.js",
            format:"es"
        }
    },
    {
        input: "src/API.js",
        output: {
            file:"dist/getaddress-api-umd.js",
            format:"umd",
            name:"getAddress"
        }
    }
];
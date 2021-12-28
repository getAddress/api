import {terser} from 'rollup-plugin-terser';


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
    },
    {
        input: "src/API.js",
        output: {
            file:"dist/getaddress-api-umd.min.js",
            format:"umd",
            name:"getAddress",
            plugins:[terser()]
        },
       
    }
];
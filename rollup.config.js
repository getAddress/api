import {terser} from 'rollup-plugin-terser';
import dts from "rollup-plugin-dts";


export default [
    {
        input: "@types/API.d.ts",
        output: [{ file: "@types/getaddress-api.d.ts", format: "es" }],
        plugins: [dts()],
    },
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
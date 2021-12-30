import {terser} from 'rollup-plugin-terser';
import dts from "rollup-plugin-dts";


export default [
    {
        input: "@types/GetAddressClient.d.ts",
        output: [{ file: "@types/getaddress-api.d.ts", format: "es" }],
        plugins: [dts()],
    },
    {
        input: "src/GetAddressClient.js",
        output: {
            file:"dist/getaddress-api.mjs",
            format:"es"
        }
    },
    {
        input: "src/GetAddressClient.js",
        output: {
            file:"dist/getaddress-api-umd.js",
            format:"umd",
            name:"getAddress"
        }
    },
    {
        input: "src/GetAddressClient.js",
        output: {
            file:"dist/getaddress-api-umd.min.js",
            format:"umd",
            name:"getAddress",
            plugins:[terser()]
        },
       
    }
];
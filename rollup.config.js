import resolve from '@rollup/plugin-node-resolve';
import commonjs  from '@rollup/plugin-commonjs'

export default [
    {
        input: "src/API.js",
        output: {
            file:"dist/getaddress-api-cjs.js",
            format:"cjs"
        },
        plugins: [ commonjs(), resolve() ]
    },
    {
        input: "src/API.js",
        output: {
            file:"dist/getaddress-api-es.js",
            format:"es"
        },
        plugins: [ resolve() ]
    },
    {
        input: "src/API.js",
        output: {
            file:"dist/getaddress-api-umd.js",
            format:"umd",
            name:"getAddress"
        },
        plugins: [ resolve() ]
    }
];
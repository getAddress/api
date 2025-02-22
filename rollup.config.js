
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import {dts} from 'rollup-plugin-dts';


export default [
    {
        input: 'lib/Types.d.ts',
        output: { file: 'dist/types.d.ts', format: 'es' },
        plugins: [dts()]
    },
    {
        input: "lib/ApiClient.js",
        output: {
            file:"dist/getaddress-api-client.js",
            format:"es"
        }
        ,plugins:[nodeResolve()]
    },
    {
        input: "lib/ApiClient.js",
        output: {
            file:"dist/getaddress-api-client.cjs",
            format:"cjs"
        }
        ,plugins:[nodeResolve()]
    },
    {
        input: "src/ApiClient.ts",
        output: {
            file:"test/getaddress-api-client.mjs",
            format:"es",
            sourcemap:  "inline"
        }
        ,plugins:[nodeResolve(),typescript({"outDir": null,"declaration": false})]
    }
   
]
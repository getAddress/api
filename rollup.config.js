import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from "rollup-plugin-ts";

export default [
    {
        input: "src/Client.ts",
        output: {
            file:"dist/getaddress-api.mjs",
            format:"es"
        }
        ,plugins:[nodeResolve(),ts()]
    }
];


import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from "rollup-plugin-ts";

export default [
    {
        input: "src/Client.ts",
        output: {
            file:"dist/getaddress-api.mjs",
            format:"es",
            sourcemap:  "inline"
        }
        ,plugins:[nodeResolve(),ts()]
    },
    {
        input: "src/Client.ts",
        output: {
            file:"dist/getaddress-api.cjs",
            format:"cjs",
            sourcemap:  "inline"
        }
        ,plugins:[nodeResolve(),ts(
            {tsconfig: {
                declaration: false
            }}
        )]
    }
];


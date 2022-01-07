import dts from "rollup-plugin-dts";
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: "@types/Client.d.ts",
        output: [{ file: "@types/getaddress-api.d.ts", format: "es" }],
        plugins: [dts()],
    },
    {
        input: "src/Client.js",
        output: {
            file:"dist/getaddress-api.mjs",
            format:"es"
        },
        plugins:[nodeResolve()]
    }
    
];
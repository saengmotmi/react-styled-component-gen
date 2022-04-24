import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "lib/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    nodeResolve(),
    commonjs({ extensions: [".js", ".ts"] }),
    typescript(),
    json(),
    terser(),
  ],
};

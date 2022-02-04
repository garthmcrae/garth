import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const config = [
  {
    input: "src/garth/index.js",
    plugins: [
      babel({
        babelHelpers: "bundled",
        babelrc: false,
        presets: ["@babel/preset-env", "@babel/preset-react"],
        extensions: ["js"],
        exclude: "node_modules/**",
      }),
      postcss({
        modules: {
          generateScopedName: "[hash:base64:5]",
        },
        plugins: [autoprefixer()],
        extract: false,
      }),
      terser(),
    ],
    output: [{ file: "bundle.esm.js", format: "esm", sourcemap: true }],
    external: ["react", "prop-types"],
  },
];
export default config;

import typescript from "@rollup/plugin-typescript";
import nodeResolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "rollup-plugin-babel"


export default opts => {
  const options = Object.assign(
    {
      css: true,
    },
    opts
  )

  return {
    input: options.input,
    output: [
      { format: "cjs", file: "./dist/index.cjs.js", sourcemap: false },
      { format: "es", file: "./dist/index.es.js", sourcemap: false },
    ],

    external: [
      "react",
      "react-dom",
      "core-js",
    ],

    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ["js", ".ts", ".tsx"],
      }),
      commonjs({
        include: "../../node_modules/**",
      }),
      typescript(),
      babel({
        runtimeHelpers: true,
        exclude: "../../node_modules/**",
        configFile: "../../babel.config.js",
      }),
    ],
  }
}

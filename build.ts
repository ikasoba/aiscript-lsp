import {globby as glob} from "globby"
import {build} from "esbuild"
import { readFile } from "fs/promises"

build({
  bundle: true,
  format: "esm",
  entryPoints: await glob(["src/*"]),
  outdir: ".o/",
  platform: "node",
  target: "es2022"
})
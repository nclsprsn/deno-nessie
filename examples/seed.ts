import { Seed } from "https://github.com/nclsprsn/deno-nessie/raw/master/mod.ts";

export const run: Seed = () => {
  return "INSERT INTO table1 VALUES (1234)";
};

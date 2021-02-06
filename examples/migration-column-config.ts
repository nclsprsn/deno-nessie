import type { Migration } from "https://github.com/nclsprsn/deno-nessie/raw/master/mod.ts";
import type { Schema } from "https://github.com/nclsprsn/deno-nessie/raw/master/qb.ts";

export const up: Migration<Schema> = ({ queryBuilder }) => { // If `exposeQueryBuilder: true` in the config file, schema will be exported
  return queryBuilder.create("column_config", (table) => {
    table.string("name", 100).nullable().default("Deno");
    table.integer("number").default("0").autoIncrement();
    table.boolean("true").custom("default true");
  });
};

export const down: Migration<Schema> = ({ queryBuilder }) => {
  return queryBuilder.drop("column_config");
};

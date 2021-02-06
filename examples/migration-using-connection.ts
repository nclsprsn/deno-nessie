import type { Migration } from "https://github.com/nclsprsn/deno-nessie/raw/master/mod.ts";
import type { Schema } from "https://github.com/nclsprsn/deno-nessie/raw/master/qb.ts";

export const up: Migration<Schema> = async ({ queryBuilder, connection }) => {
  const hasTable = await connection(queryBuilder.hasTable("basics"));
  const hasColumn = await connection(
    queryBuilder.hasColumn("basics", "col_1"),
  );

  // Using Postgres as an example, will differ between clients
  console.log(hasTable.rows[0][0], hasColumn.rows[0][0]);

  if (!hasTable && !hasColumn) {
    queryBuilder.create("basics", (table) => {
      table.boolean("col_1").default("false");
    });
  }

  return queryBuilder.query;
};

export const down: Migration<Schema> = ({ dialect, queryBuilder }) => {
  return queryBuilder.drop("basics");
};

import { AbstractMigration, Info } from "https://github.com/nclsprsn/deno-nessie/raw/master/mod.ts";
// import Dex from "https://deno.land/x/dex/mod.ts";

export default class ExperimentalMigration extends AbstractMigration {
  /** Runs on migrate */
  async up(info: Info): Promise<void> {
  }

  /** Runs on rollback */
  async down(info: Info): Promise<void> {
  }
}

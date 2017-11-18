import should from "should";
import * as babel from "babel-core";
import sourceMapSupport from "source-map-support";
import * as logger from "../isotropy-logger";

sourceMapSupport.install();

describe("Isotropy FS", () => {
  it(`Writes to a log`, async () => {
    logger.log({
      type: "info",
      message: "This test ran."
    });
  });
});

import app from "./app";
import mongoose from "mongoose";
import config from "./config";

async function main() {
  // mongodb url form config file
  const url = config.db_url as string;
  //   mongoose connet to mongodb
  await mongoose.connect(url);
  //   server listen
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${3000}`);
  });
}
main();

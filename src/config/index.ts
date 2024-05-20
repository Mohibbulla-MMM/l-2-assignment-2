import dotenv from "dotenv";
import path from "path";
const configFilePath = path.join(process.cwd(), ".env");

dotenv.config({ path: configFilePath });

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
};

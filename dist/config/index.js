"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const configFilePath = path_1.default.join(process.cwd(), ".env");
dotenv_1.default.config({ path: configFilePath });
exports.default = {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
};

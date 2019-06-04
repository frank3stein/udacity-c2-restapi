const dotenv = require("dotenv");
dotenv.config();
const host = process.env.HOST;
const password = process.env.PASSWORD;

export const config = {
  dev: {
    username: "udacloudevm",
    password: password,
    database: "udacloudevm",
    host: host,
    dialect: "postgres",
    aws_region: "eu-central-1",
    aws_profile: "default",
    aws_media_bucket: "udagram-dev"
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres"
  }
};

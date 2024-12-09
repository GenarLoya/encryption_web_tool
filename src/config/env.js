const dotenv = require("dotenv");
const { z } = require("zod");

const envData = dotenv.config().parsed;

const envSchema = z.object({
  CRYPT_KEY: z.string(),
});

const ENV = envSchema.parse({
  CRYPT_KEY: envData.CRYPT_KEY,
});

module.exports = ENV;

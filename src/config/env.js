const dotenv = require("dotenv");
const { z } = require("zod");

const envData = dotenv.config().parsed;

const envSchema = z.object({
  CRYPT_KEY: z.string(),
  PORT: z.coerce.number().default(3000),
});

const ENV = envSchema.parse({
  CRYPT_KEY: envData.CRYPT_KEY,
  PORT: envData.PORT,
});

module.exports = ENV;

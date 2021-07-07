const { env } = process;

const config = {
  host: env.HOST,
  port: env.PORT,
  jwtSecret: env.jwtSecret
};
module.exports = config;
import * as Joi from 'joi';
import * as process from "process";

export const schema = Joi.object({
  port: Joi.number().integer().default(3000),
  database: Joi.object({
    url: Joi.string()
      .pattern(/postgres:\/\/[a-zA-Z]/)
      .required(),
    port: Joi.number().integer().required(),
    db: Joi.string().required(),
  }),
  jwt: Joi.object({
    secret: Joi.string().required(),
  }),
});

export default () => {
  const {env} = process
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      url: env.POSTGRES_HOST,
      port: parseInt(env.POSTGRES_PORT, 10) || 5432,
      user: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      db: env.POSTGRES_DB,
    },
    jwt: {
      secret: env.JWT_SECRET,
      saltOrRounds: 10,
    },
  }
};

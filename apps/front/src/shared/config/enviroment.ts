import * as process from "process";

const makeConfig =() => {
  const {env} = process

  return {
    apiUrl: env.API_URL
  }
};

export default makeConfig()

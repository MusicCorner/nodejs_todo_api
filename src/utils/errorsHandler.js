import { ENV } from '../common/constants.js';

export const handleError = (error) => {
  if (ENV.IS_DEV_ENV) {
    console.error(error);

    return error;
  }
};

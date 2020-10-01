export const API_CONFIG = {
  get PORT() {
    return process.env.PORT || 9000;
  },
};

export const ENV = {
  PRODUCTION_ENV: 'production',
  DEV_ENV: 'development',
  get IS_DEV_ENV() {
    return process.env.NODE_ENV === this.DEV_ENV;
  },
};

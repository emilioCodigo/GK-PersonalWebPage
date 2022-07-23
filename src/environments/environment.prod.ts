/* eslint-disable @typescript-eslint/no-var-requires */
export const environment = {
  production: true,
  google: {
    GA_TRACKING_ID: 'G-xxxx',
  },
  appVersion: '當前版本' + require('../../package.json').version,
};

/* eslint-disable @typescript-eslint/no-var-requires */
export const environment = {
    production: true,
    google: {
        GA_TRACKING_ID: 'G-N7WBQFP61M',
    },
    appVersion: '公開版本' + require('../../package.json').version,
}

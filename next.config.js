const path = require('path');
const withSourceMaps = require('@zeit/next-source-maps');
// const SentryCliPlugin = require('@sentry/webpack-plugin');

const alias = {
  '~theme': path.join(__dirname, 'theme'),
  '~svg-components': path.join(__dirname, 'public/static/svg-components'),
  '~images': path.join(__dirname, 'public/images'),
  '~components': path.join(__dirname, 'components'),
  '~i18n': path.join(__dirname, 'i18n'),
  '~utils': path.join(__dirname, 'utils'),
  '~graphql': path.join(__dirname, 'graphql'),
};

const withApolloPath = path.join(__dirname, '../..', '/node_modules/next-with-apollo/');

// const staticFilePathPrefix = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return `${process.env.ASSETS_CND_HOST}/web_assets/projectg-fe-student-portal/${process.env.IMAGE_TAG}`;
//   }

//   return '';
// };

const publicFilePathPrefix = () => {
  // if (process.env.NODE_ENV === 'production') {
  //   return `${process.env.ASSETS_CND_HOST}/web_assets/projectg-fe-student-portal/${process.env.IMAGE_TAG}/_next`;
  // }
  return '';
};

// const assetPrefix = staticFilePathPrefix();

module.exports = withSourceMaps({
  publicRuntimeConfig: {
    // NODE_ENV: process.env.NODE_ENV,
    // ENV: process.env.ENV,
    // GA: process.env.GA || 'UA-167846316-4',
    // TOKEN_NAME: process.env.TOKEN_NAME || 'sp-authorization-stage',
    // FILE_SVC_URL: process.env.FILE_SVC_URL || 'https://files.project-g66.com/sp/',
    // IMAGE_SVC_URL: process.env.IMAGE_SVC_URL || 'https://image.project-g66.com',
    // ASSETS_CND_HOST: process.env.ASSETS_CND_HOST || 'https://cdn.project-g66.com',
    PUBLIC_FILE_PATH_PREFIX: publicFilePathPrefix(),
    // GRAPHQL_ENDPOINT:
    //   process.env.GRAPHQL_ENDPOINT || 'https://gateway.project-g66.com/graphql?source=sp',
    // process.env.GRAPHQL_ENDPOINT || 'https://gateway-uat4.project-g66.com/graphql?source=sp',
    // TOP_LANDLORD_ID: process.env.TOP_LANDLORD_ID || 'eyJ0eXBlIjoiTGFuZGxvcmQiLCJpZCI6MX0=',
  },
  //eyJ0eXBlIjoiTGFuZGxvcmQiLCJpZCI6NX0= eyJ0eXBlIjoiTGFuZGxvcmQiLCJpZCI6MX0=
  // assetPrefix,
  webpack: (config, { defaultLoaders }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias = { ...config.resolve.alias, ...alias };
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [withApolloPath],
      use: [defaultLoaders.babel],
    });
    // config.plugins.concat([
    //   new SentryCliPlugin({
    //     include: '.',
    //     ignoreFile: '.sentrycliignore',
    //     ignore: ['node_modules', 'webpack.config.js'],
    //     configFile: 'sentry.properties',
    //     dryRun: true,
    //     release: 'foo',
    //   }),
    // ]);
    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  transpileModules: ['next-with-apollo'],
  distDir: 'build',
});

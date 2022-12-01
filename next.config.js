/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = () => {
  const config = {
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },

    webpack: (configuration, { webpack }) => {
      // Fixes npm packages that depend on fs module
      configuration.resolve.fallback = {
        fs: false,
        crypto: false,
        path: false,
        os: false,
        http: false,
        net: false,
        tls: false,
      };

      configuration.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /icon/, // example.svg?icon
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  icon: true,
                  typescript: true,
                },
              },
            ],
          },
          {
            type: 'asset/resource',
            use: 'svgo-loader',
          },
        ],
      });

      return configuration;
    },
  };

  let result = config;

  if (process.env.ANALYZE === 'true') {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
      enabled: true,
    });

    result = withBundleAnalyzer(result);
  }

  return result;
};

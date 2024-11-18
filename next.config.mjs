import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
export default withNextIntl({
  devIndicators: {
    appIsrStatus: false,
  },
  webpack(config) {
    // Find and modify the existing rule for .svg
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Add @svgr/webpack loader for .svg files
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true, // Optimize SVGs
          },
        },
      ],
    });

    return config;
  },
});

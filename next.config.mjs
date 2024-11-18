import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
export default withNextIntl({
  devIndicators: {
    appIsrStatus: false,
  },
  webpack(config) {
    // Remove the existing rule for SVG files if it exists
    config.module.rules = config.module.rules.filter((rule) => {
      return !rule.test || !rule.test.test(".svg");
    });

    // Add the rule for handling SVG files with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
});

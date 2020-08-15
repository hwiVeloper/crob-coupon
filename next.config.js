const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withCSS(
    withSass({
      enableSvg: true,
      webpack(config, options) {
        return config;
      },
      env: {
        appVersion: "1.1.0",
      },
    })
  )
);

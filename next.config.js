const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = {
  ...withCSS(withSass()),
  assetPrefix: "/react-memo-app",
  devIndicators: {
    autoPrerender: false,
  },
};

const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@locales": path.resolve(__dirname, "src/locales/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
    },
  },
};

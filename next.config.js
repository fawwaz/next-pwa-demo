const withPWA = require("next-pwa");
const runtimeCaching = require("./config/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    mode: "development",
    disable: process.env.NODE_ENV !== "production",
    runtimeCaching,
  },
});

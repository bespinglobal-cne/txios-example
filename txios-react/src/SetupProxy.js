const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/runner", {
        target: "https://dev-runner.msamaker.bespinglobal.com",
        changeOrigin: true,
        secure: false,
        ws: true
      }),
  );
};
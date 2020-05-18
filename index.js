const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = process.env.PORT || 3000;

console.log(`Listening on port ${PORT}`);

app.use(
  '/api',
  createProxyMiddleware({
    target: `https://pixabay.com/api/?key=${process.env.API_KEY}`,
    changeOrigin: true,
    logLevel: 'warn',
  })
);
app.listen(PORT);

const express = require('express');
const cors = require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());
app.options('*', cors());

const PORT = process.env.PORT || 3000;

console.log(`Listening on port ${PORT}`);

app.use(
  '/api',
  createProxyMiddleware({
    target: `https://pixabay.com/api/?key=${process.env.API_KEY}&`,
    changeOrigin: true,
    logLevel: 'debug',
  })
);

app.listen(PORT);

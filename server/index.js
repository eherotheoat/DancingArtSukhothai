const path = require("path");
const express = require("express");
const app = express(); // create express app
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require("dotenv");
dotenv.config()


app.use('/api*', createProxyMiddleware({
  target: 'https://jsonplaceholder.typicode.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  }
}));

if(process.env.NODE_ENV !== "test"){
  app.use("/",express.static(path.join(__dirname, "..", "build")));
  app.use("/",express.static("public"));
  
  app.use("/",(req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
}


app.listen(process.env.PORT || 3000, () => {
  console.log("server started on port " + process.env.PORT || 3000);
});
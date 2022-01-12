const express = require("express");
const app = express();

app.use((req, res, next) => {  //fucking CORS here
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fasdfasdfe123d",
      title: "first server-side post",
      content: "This comes from the server",
    },
    {
      id: "tcrwse1t542df2d",
      title: "second server-side post",
      content: "This comes from the server",
    },
  ];
  res.status(200).json({
    message: "Posts fetched succesfuly",
    posts: posts,
  });
});

module.exports = app; //exporting this shit

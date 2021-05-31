const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const blog = require("./blog");
const app = express();

// Middlewares

app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use("/api/blogs", blog);

// Base Route

app.get("/", (req, res) => {
  res.json({
    message: "🔐",
    user: req.user,
  });
});

// ROUTES

// CREATE BLOG

// Error Handling

const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`Not Found = ${req.originalUrl}`);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

app.use(notFound);
app.use(errorHandler);

// Listener and port

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

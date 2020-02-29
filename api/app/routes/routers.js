const express = require("express");
const todosRouter = require("./todo.router");

function apiRouter() {
  const router = express.Router();

  router.use("/todos", todosRouter());

  return router;
}

module.exports = apiRouter;

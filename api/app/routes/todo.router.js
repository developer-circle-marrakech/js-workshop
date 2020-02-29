const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

function userRouter() {
  router.get("/", controller.getAll);

  router.get("/:id", controller.get);

  router.get("/find/:key/:value", controller.find);

  router.post("/", controller.create);

  router.put("/:id", controller.update);

  router.delete("/:id", controller.delete);

  return router;
}

module.exports = userRouter;

const BromaController = require("../controllers/broma.controllers");

module.exports = (app) => {
  app.get("/api/broma/", BromaController.findAllBromas);
  app.get("/api/broma/:id", BromaController.findOneSingleBroma);
  app.put("/api/broma/update/:id", BromaController.updateExistingBroma);
  app.post("/api/broma/new", BromaController.createNewBroma);
  app.delete("/api/broma/delete/:id", BromaController.deleteAnExistingBroma);
};

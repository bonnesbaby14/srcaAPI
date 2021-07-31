const router = require("express").Router();
const controller = require("../controller/controller");

router.get("/logout", controller.logout);

router.get("/clients", controller.clients);

router.post("/login", controller.login);
router.get("/projects", controller.projects);

module.exports = router;

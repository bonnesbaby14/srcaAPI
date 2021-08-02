const router = require("express").Router();
const controller = require("../controller/controller");

router.get("/logout", controller.logout);

router.get("/clients", controller.clients);

router.post("/login", controller.login);
router.get("/projects", controller.projects);
router.get("/tickets", controller.tickets);

router.post("/upProjects", controller.upProject);
router.post("/upClient", controller.upClient);
router.post("/upTicket", controller.upTicket);
module.exports = router;

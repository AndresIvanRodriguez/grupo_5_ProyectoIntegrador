const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.get('/create', adminController.vista);
router.post("/create", adminController.create);
router.get("/editar", adminController.edit);

module.exports = router;


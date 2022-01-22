const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.get('/admin/create', adminController.vista);
router.post("/admin/create", adminController.create);
router.get("/editar", adminController.edit);

module.exports = router;


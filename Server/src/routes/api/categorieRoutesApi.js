const express = require("express")
const router = express.Router();
const categoriaControllerApi = require("../../controllers/api/categoriasApi.js");

router.get("/", categoriaControllerApi.lista);
router.get("/:id", categoriaControllerApi.detail);

module.exports = router;
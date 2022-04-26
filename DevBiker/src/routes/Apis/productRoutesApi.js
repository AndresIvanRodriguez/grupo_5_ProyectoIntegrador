const express= require ("express");
const router= express.Router();
const productApi = require ("../../controllers/apis/producApi.js")

router.get("/",productApi.lista);
router.get("/:id",productApi.detalil);

module.exports = router;
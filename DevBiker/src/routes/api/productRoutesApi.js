const express= require ("express");
const router= express.Router();
const productApi = require ("../../controllers/api/productApi.js")

router.get("/",productApi.lista);
router.get("/:id",productApi.detail);

module.exports = router;
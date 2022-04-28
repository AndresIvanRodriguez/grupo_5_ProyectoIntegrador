const express = require("express")
const router= express.Router();
const userControllerApi=require("../../controllers/api/userApi.js");
const { route } = require("../mainRoutes");


router.get("/", userControllerApi.lista);
router.get("/:id", userControllerApi.detail);

module.exports = router;
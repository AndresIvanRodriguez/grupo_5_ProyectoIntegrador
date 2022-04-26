const express = require("express")
const router= express.Router();
const userControllerApi=require("../../controllers/apis/usersApi.js");
const { route } = require("../mainRoutes");


router.get("/",userControllerApi.lista);
router.get("/:id",userControllerApi.detalil);

module.exports= router;
const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

<<<<<<< HEAD
router.get('/create',adminController.create);
module.exports = router;




=======
router.get("/",adminController.index);
router.get('/create',adminController.vista);
router.post("/create",adminController.create)
router.get("/editar",adminController.edit)

module.exports = router;
>>>>>>> b81fa4ad063927d18a6d7151bc0f3010f6c5bbcd

const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get('/register', usersController.registerUser);
router.post("/register", usersController.store);

module.exports = router;
const express = require("express");
const router = express.Router();

// Controller
const { register, login } = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const {
  userCreateValidation,
  loginValidation,
} = require("../middlewares/userValidations");

// Middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/UserValidations");

// Routes
router.post("/register", userCreateValidation(), validate, register);
<<<<<<< HEAD
=======
router.post("/login", loginValidation(), validate, login);
>>>>>>> ba0617452148fdc520a1ba06d3d9d530918ce6e3

module.exports = router;

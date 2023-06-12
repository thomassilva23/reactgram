const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// Register user and sign in
const register = async (req, res) => {
  const { name, email, password } = req.body;

<<<<<<< HEAD
  // check if user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro e-mail"] });
=======
  //check if user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro e-mail."] });
>>>>>>> ba0617452148fdc520a1ba06d3d9d530918ce6e3
    return;
  }

  // Generate password hash
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  // Create user
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

<<<<<<< HEAD
  // If user was create successfully, return the token
=======
  // If user was created successfully, return the token
>>>>>>> ba0617452148fdc520a1ba06d3d9d530918ce6e3
  if (!newUser) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, por favor tente mais tarde."] });
<<<<<<< HEAD
=======
    return;
>>>>>>> ba0617452148fdc520a1ba06d3d9d530918ce6e3
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
<<<<<<< HEAD
=======
};

// Login user
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // Check if user exists
  if (!user) {
    res.status(404).json({ errors: ["Usuário não encontrado."] });
    return;
  }

  // Check if password matches
  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ["Senha inválida."] });
    return;
  }

  // Return user with token
  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
>>>>>>> ba0617452148fdc520a1ba06d3d9d530918ce6e3
};

module.exports = {
  register,
  login,
};

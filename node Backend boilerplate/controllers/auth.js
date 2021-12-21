const User = require("../models/user");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signUp = async (req, res) => {
  // const userExist = await User.findOne({ email: req.body.email });
  // if (userExist) {
  // return res.status(400).json({ error: "Email is already taken" });
  // }
  const user = await new User(req.body);
  user.save();
  res.status(200).json(user);
};

exports.signIn = (req, res) => {
  const { email, password } = req.body;
  // find the user based on model
  User.findOne({ email: email }).then((user) => {
    if (!user.authenticatePassword(password)) {
      return res
        .status(401)
        .json({ error: "email and password doesnot match,Try Again" });
    } else {
      // generate token with user id and secret key in env file
      const token = jwt.sign({ _id: User._id }, process.env.JWT_SECRET);

      // persist cookie as t with expiry date 1 month
      res.cookie("t", token, { expire: new Date() + 2.628e6 });

      // sending res to frontend
      const { _id, name, email, role } = user;
      return res.status(200).json({ token, user: { _id, name, email, role } });
    }
  });
};

exports.signOut = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ msg: "Signed Out sucessfully" });
};

exports.requireSignIn = expressJwt({
  // if token is valid express jwt will append the verified userid in an auth key
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

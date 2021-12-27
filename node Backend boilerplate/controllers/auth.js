const User = require("../models/user");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { sendEmail } = require("../helpers/index");
require("dotenv").config();

exports.socialLogin = (req, res) => {
  // try signup by finding user with req.email
  let user = User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) {
      // create a new user and login
      user = new User(req.body);
      req.profile = user;
      user.save();
      // generate a token with user id and secret
      const token = jwt.sign(
        { _id: user._id, iss: "NODEAPI" },
        process.env.JWT_SECRET
      );
      res.cookie("t", token, { expire: new Date() + 2.628e6 });
      // return response with user and token to frontend client
      const { _id, name, email,role } = user;
      return res.json({ token, user: { _id, name, email,role } });
    } else {
      // update existing user with new social info and login
      req.profile = user;
      user = _.extend(user, req.body);
      user.updated = Date.now();
      user.save();
      // generate a token with user id and secret
      const token = jwt.sign(
        { _id: user._id, iss: "NODEAPI" },
        process.env.JWT_SECRET
      );
      res.cookie("t", token, { expire: new Date() + 2.628e6 });
      // return response with user and token to frontend client
      const { _id, name, email,role } = user;
      return res.json({ token, user: { _id, name, email,role } });
    }
  });
};

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
      const token = jwt.sign({ _id: user._id ,role:user.role}, process.env.JWT_SECRET);

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

// allows to modify data by subscriber or admin
exports.hasAuthorization=(req,res,next)=>{
  const isSubscriber=req.profile&& req.auth&&req.profile._id==req.auth._id;
  const isAdmin=req.profile&& req.auth&&req.auth.role=='admin';
   isAuthorized=isSubscriber||isAdmin;
   console.log(isSubscriber);
  console.log(isAdmin);
  console.log("req.auth",req.auth);
   console.log("req.profile",req.profile);
   if(!isAuthorized)
   {
     return res.status(403).json({error:"User is not authorized to perform this action"});
   }
   next();
  };


exports.forgetPassword = (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  User.findOne({ email: email }).then((user) => {
    //  console.log(user);
    if (!user) {
      return res
        .status(401)
        .json({error:{ msg: "user with this email doesnot exist" }});
    }
    // generate token with userid and secret key
    const token = jwt.sign(
      { _id: user._id, iss: "NODEAPI" },
      process.env.JWT_SECRET
    );

    //email data
    const emaildata = {
      from: "noreply@node-react.com",
      to: email,
      subject: "Password Reset Instructions",
      text: `Please use the following link to reset your password: ${process.env.CLIENT_URL}/resetpassword/${token}`,
      html: `<p>Please use the following link to reset your password:</p> <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`,
    };

    user = _.extend(user, { resetPasswordLink: token });
    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      } else {
        sendEmail(emaildata);
      }
      return res.status(200).json({
        msg: `Email has been sent to ${email}. Follow the instructions to reset your password.(Check your spam folder in case you cannot find our mail`,
      });
    });
  });
};

exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newpassword } = req.body;
  //console.log(req.body);

  User.findOne({ resetPasswordLink }, (err, user) => {
    // if err or no user
    if (err || !user)
      return res.status("401").json({
        error: "Invalid Link!",
      });

    const updatedFields = {
      password: newpassword,
      resetPasswordLink: "",
    };

    user = _.extend(user, updatedFields);
    user.updated = Date.now();

    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json({
        msg: `Great! Now you can login with your new password.`,
      });
    });
  });
};

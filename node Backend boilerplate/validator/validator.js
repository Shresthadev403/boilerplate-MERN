const { body, check, validationResult } = require("express-validator");
const User = require("../models/user");

exports.signUpValidator = [
  check("email").isEmail(),
  body("email").custom((value) => {
    //  console.log(value);
    return User.findOne({ email: value }).then((user) => {
      console.log(user);
      if (user) {
        return Promise.reject("E-mail already in use");
      }
    });
  }),
  check("password")
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 32 })
    .withMessage("password must be 8 character long")
    .matches("[1 - 9]")
    .withMessage("password must have atleast one numeric character")
    .matches("[A - Z]")
    .withMessage("password must have atleast one upper case letter"),
  (req, res, next) => {
    const errors = validationResult(req).array();
    if (errors.length) {
      return res.status(422).json({ errors });
    }

    next();
  },
];

exports.signInValidator = [
  check("email").isEmail(),
  body("email").custom((value) => {
    //  console.log(value);
    return User.findOne({ email: value }).then((user) => {
      //  console.log(user);
      if (!user) {
        return Promise.reject("User doesnot exist.Please signUp");
      }
    });
  }),
  check("password")
    .not()
    .isEmpty()
    .isLength({ min: 5 })
    .withMessage("password must be 8 character long"),
  (req, res, next) => {
    const errors = validationResult(req).array();
    if (errors.length) {
      return res.status(422).json({ errors });
    }

    next();
  },
];

exports.forgetPasswordValidator = [
  check("email").isEmail(),
  (req, res, next) => {
    const errors = validationResult(req).array();
    if (errors.length) {
      return res.status(422).json({ errors });
    }

    next();
  },
];

exports.passwordResetValidator = [
  check("newpassword")
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 32 })
    .withMessage("password must be 8 character long")
    .matches("[1 - 9]")
    .withMessage("password must have atleast one numeric character")
    .matches("[A - Z]")
    .withMessage("password must have atleast one upper case letter"),
  (req, res, next) => {
    const errors = validationResult(req).array();
    if (errors.length) {
      return res.status(422).json({ errors });
    }

    next();
  },
];

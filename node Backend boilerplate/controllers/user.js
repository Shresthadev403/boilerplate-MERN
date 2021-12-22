const User = require("../models/user");
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

exports.userById = (req, res, next, id) => {
  // console.log("userby id");
  User.findById(id, "-salt -hash_password -__v").exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "user not found" });
    }
    // add new proprety profile to user
    req.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  res.status(200).json(req.profile);
};

exports.userUpdate = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  // console.log(form);
  form.parse(req, (err, fields, files) => {
    // console.log("creating new post");
    if (err) {
      return res.status(400).json({ error: err });
    }
    let user = req.profile;
    user = _.extend(user, fields);
    //   console.log(user);
    user.updated = Date.now();
    user.save((err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      res.status(200).json(result);
    });
  });
};

exports.deleteUser = (req, res) => {
  const user = req.profile;
  user.delete((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
 res.status(200).json({ msg: "user deleted sucessfully" });
  });
};
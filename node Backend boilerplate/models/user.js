const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
//define a user model with different properties
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "subscriber",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
  resetPasswordLink: {
    Type: String,
    default: "",
  },
});

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password; // generating temp var"this_password to hold passowrd"
    this.salt = uuidv4(); // gwnwrating time stamp

    return (this.hash_password = this.encryptPassword(password));
  })
  .get(function (passowrd) {
    return this._password;
  });

userSchema.methods = {
  // authenticate password for signin
  authenticatePassword: function (password) {
    return this.encryptPassword(password) === this.hash_password;
  },
  // encrypt password
  encryptPassword: function (password) {
    try {
      console.log(password, "fyck");
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      console.log("eemmmmm");
      return err;
    }
  },
};

// export model as User
module.exports = mongoose.model("User", userSchema);

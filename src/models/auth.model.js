const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// hash password before saving to database
userSchema.pre('save', async function (next) {
  const user = this;

  // const salt = await bcrypt.genSalt(10);
  // if (user.isModified('password')) {
  //   user.password = await bcrypt.hash(user.password, salt);
  // }

  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;

  next();
});

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  const user = this;
  const isMatch = await bcrypt.compare(enteredPassword, user.password);
  return isMatch;
};

// create jwt token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  return token;
};

module.exports = mongoose.model('User', userSchema);

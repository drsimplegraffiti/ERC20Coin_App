const User = require('../../models/auth.model');

//get all users
const users = async () => {
  const users = await User.find();
  return users;
};

//get user by id
const user = async (_, { id }) => {
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

module.exports = {
  users,
  user,
};
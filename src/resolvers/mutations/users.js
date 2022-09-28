const User = require('../../models/auth.model');

const userSignUp = async (parent, args, context, info) => {
  try {
    //check if user exists
    const userExists = await User.findOne({ email: args.email });
    if (userExists) {
      throw new Error('User already exists');
    }

    const user = new User({
      username: args.username,
      email: args.email,
      password: args.password,
    });

    await user.save();
    const token = await user.generateAuthToken();
    return { ...user._doc, token };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const userLogin = async (parent, args, context, info) => {
  //parent is the parent object, which in this case is the Query object.
  //args is an object that contains all of the arguments that were passed into the field.
  //context is an object shared by all resolvers in a particular query, and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be taken into account when resolving the query.
  //info contains information about the execution state of the query which should only be used in advanced cases.
  const { email, password } = args;
  try {
    console.log(args);
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new Error('User does not exist');
    }

    //compare password using bcrypt
    const isMatch = await user.comparePassword(password);
    console.log(isMatch);
    if (!isMatch) {
      return new Error('Invalid credentials');
    }

    const token = await user.generateAuthToken();
    return { ...user._doc, token };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  userSignUp,
  userLogin,
};

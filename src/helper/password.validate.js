const bcrypt = require('bcrypt');

// Compare password
const comparePassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

module.exports = comparePassword;

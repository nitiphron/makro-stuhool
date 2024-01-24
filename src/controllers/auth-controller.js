// exports.register = (req, res, next) => {
//   res.json({ message: "Register" });
// };

exports.register = (req, res, next) => {
  const { email, password } = req.body;

  //  logic

  res.json({ email, password });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  res.json({ email, password });
};

exports.forgetPassword = (req, res, next) => {
  const { email } = req.body;
  res.json({ email });
};

// https://api.codecamp.com/auth/forgot-password-abcdefg
exports.verifyForgetPassword = (req, res, next) => {
  const { token} = req.params
  // Logic check token
  // redirect reset password -> ติด token
  res.json({ token });
};

exports.resetPassword = (req, res, next) => {
  const { token } = req.params;
  const { password } = req.body;
  // check token
  // เปลี่ยน Password
  // เก็บ Password ใหม่ ลง db
  res.json({ token, password });
};
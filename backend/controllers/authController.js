exports.login = (req, res) => {
  const { email, password } = req.body;

  // Dummy authentication (Example)
  if (email === "qasimrazamalik1@gmail.com" && password === "123456") {
    return res.json({
      success: true,
      message: "Login Successful",
      token: "fake-jwt-token-123",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Email or Password",
  });
};

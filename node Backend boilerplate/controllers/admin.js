exports.isAdmin = (req, res, next) => {
  const isAdmin = req.auth && req.auth.role == "admin";
  
  console.log(req.auth);
  if (!isAdmin) {
    return res
      .status(403)
      .json({ error: "user is not authorized to perform this action" });
  }
  next();
};

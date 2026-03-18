
let users = [];

exports.getAll = (req, res) => {
  res.json(users);
};

exports.create = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
};

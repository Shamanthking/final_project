
let data = [];

exports.getAll = (req, res) => {
  res.json(data);
};

exports.create = (req, res) => {
  const item = req.body;
  data.push(item);
  res.status(201).json(item);
};

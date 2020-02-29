var Todo = require("../models/todo");

exports.getAll = function(req, res) {
  const options = req.query;

  var page = parseInt(options.page) || 1;
  var limit = parseInt(options.limit) || 100;

  Todo.find({})
    .limit(limit)
    .skip((page - 1) * limit)
    .exec((err, docs) => {
      if (err) {
        res.status(500).json(err);
      }

      res.json(docs);
    });
};

exports.get = function(req, res) {
  let id = req.params.id;

  Todo.findById(id).exec((err, doc) => {
    if (err) {
      res.status(500).json(err);
    }

    res.json(doc);
  });
};

exports.find = function(req, res) {
  let key = req.params.key;
  let value = req.params.value;

  let payload = {};
  payload[key] = value;

  Todo.findOne(payload).exec((err, docs) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(docs);
  });
};

exports.create = function(req, res) {
  const data = req.body;

  console.log(data);

  let todo = new Todo(data);

  todo.save((err, doc) => {
    if (err) {
      return res.status(500).json(err);
    }

    return res.status(201).json(doc);
  });
};

exports.update = function(req, res) {
  const id = req.params.id;
  const data = req.body;

  Todo.findByIdAndUpdate(id, { $set: data }, { new: true }, function(err, doc) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(doc);
  });
};

exports.delete = function(req, res) {
  let id = req.params.id;

  Todo.findByIdAndRemove(id, function(err, doc) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(204).json({});
  });
};

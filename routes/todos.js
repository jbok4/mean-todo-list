var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jackie:jackie@ds155201.mlab.com:55201/meantodos-jbok4', ['todos']);

// Get all Todos
router.get('/todos', function(req, res, next){
  db.todos.find(function(err, todos){
    if(err){
      res.send(err);
    } else {
      res.json(todos);
    }
  });
});

  // Get single Todo
router.get('/todo/:id', function(req, res, next){
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  },function(err, todo){
    if(err){
      res.send(err);
    } else {
      res.json(todo);
    }
  });

});

module.exports = router;
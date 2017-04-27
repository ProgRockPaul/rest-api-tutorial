const express = require('express');
//set up express router
const router = express.Router();

router.get('/ninjas', function(req, res){
  res.send({type:'get'});
});

//add a new ninja to db
router.post('/ninjas', function(req, res){
  console.log(req.body);
  res.send({
    type:'POST',
    name: req.body.name,
    rank: req.body.rank
  });
});

//update a ninja in the DB.
router.put('/ninjas/:id', function(req, res){
  res.send({type:'PUT'});
});

//delete a ninja in the DB.
router.delete('/ninjas/:id', function(req, res){
  res.send({type:'DELETE'});
});

module.exports = router;

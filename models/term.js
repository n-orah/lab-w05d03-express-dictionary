var db = require('../db/config');
var term = {};


terms.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM terms;")  // query the database
      .then(function (result) {   // return the data as a javascript object "result"
        res.locals.terms = result;  // save that javascript object to the response object in res.locals.pokemon
        next();  // move on to the next command
      })
      .catch(function(error){ // if there is an issue when getting all the pokemon
        console.log(error); // log the error
        next(); // move on to the next command
      })
  }

  terms.find = function (req, res, next) {
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM terms WHERE id = $1;", [id])
      .then(function(result){
        res.locals.terms = result;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }
  
  terms.create = function(req, res, next){
    var termData = {
      name: req.body.name,
      defintion: req.body.defintion,
    
    }}
    
module.exports = term;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Notes' });
});

router.get('/load', function(req, res, next) {
  var showMe;
  var MongoClient = require('mongodb');
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb+srv://root:rootboi64!@notebase.lbt2q.mongodb.net/test?retryWrites=true&w=majority";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      var dbo = db.db("NoteBase");
      dbo.collection("Notes").find({}).toArray(function(err, result) {
        if (err) throw err;
        showMe = result;
        console.log(result);
        res.send(result);
        db.close();
      });
  });
});

router.get('/save', function(req, res, next) {
  /*
  "name":"Hur man använder appen",
    "text":" hur man använder appen \nklicka på noteringen du vill läsa\n",
    "id": 0,
    "secret_code": "1605109233479",
    "created": "1970-01-01",
    "edited": "2030-13-32",
    "favorite": true

    ?name='+newNote.name+'&text='+newNote.text+'&id='+newNote.secret_code
    +'&created='+newNote.created+'&edited='+edited+'&favorite='+newNote.favorite
  */
  var name = req.query.name;
  var text = req.query.text;
  var id = req.query.id;
  var created = req.query.created;
  var edited = req.query.edited;
  var favorite = req.query.favorite;
  var MongoClient = require('mongodb');
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb+srv://root:rootboi64!@notebase.lbt2q.mongodb.net/test?retryWrites=true&w=majority";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
      var dbo = db.db("NoteBase");
      dbo.collection("Notes").insertOne({
        "name": name,
        "text": text,
        "globalId": id,
        "created": created,
        "edited": edited,
        "favorite":favorite
      });
        db.close();
      });
      res.send("saker");
});

module.exports = router;

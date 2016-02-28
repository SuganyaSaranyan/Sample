/**
 * Created by srinivasansudarsanam on 2/27/16.
 */

var express = require('express')
var router = express.Router()
var mongodbClient = require('./MongoClient');

router.post('/source',function(req,res){

    if (req.body) {
        var a = function (err, d) {
            var db = mongodbClient.get()
            var collection = db.collection(req.body.doc)
            collection.find(req.body.searchParam?req.body.searchParam:{}).toArray(function (err, docs) {
                err ? res.err(err) : res.render('users',{data:docs})
            })
        }

        mongodbClient.connect(req.body.url, a)
    }
    else{
        res.err("No Body object provided")
    }

});

router.post('/insert',function(req,res){

    if (req.body) {
        var a = function (err, d) {
            var db = mongodbClient.get()
            var collection = db.collection(req.body.doc)
            collection.find(req.body.searchParam?req.body.searchParam:{}).toArray(function (err, docs) {
                err ? res.err(err) : res.send(docs)
            })
        }

        mongodbClient.connect(req.body.url, a)
    }
    else{
        res.err("No Body object provided")
    }

});

module.exports = router;


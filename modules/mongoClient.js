/**
 * Created by srinivasansudarsanam on 2/27/16.
 */

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var dbclient





var myClient = {
    url:"mongodb://localhost:27017/test",
    dbclient : "",
    prepareClient: function(url,dbclient) {
      MongoClient.connect(url? url:this.url, function (err, db) {
          var b=  db.collection('users').find({}).toArray(function(err, result) { return result})
            if(err){
                return err
            }
        });
    },
    listDatabases : function(db){
        var adminDb = db.admin();
        adminDb.listDatabases(function(err, dbs) {
           return dbs.databases
        });
    },

    showCollection: function(){
         return  JSON.stringify(myClient.getCollectionNames())
    },



}

module.exports = myClient;

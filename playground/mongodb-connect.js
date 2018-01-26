const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',
 (err, client)=>{
     if (err) {
         console.log('Unable to connecto to MongoDB server');
     }
     console.log('Connected to MongoDB server');

     var db = client.db('TodoApp');

    //  db.collection('Todos').insertOne({
    //      text: 'Something to one',
    //      completed: false
    //  }, (err, result)=>{
    //      if (err) {
    //          return console.log('Unable to insert');
    //      }
    //      console.log(JSON.stringify(result.ops, undefined, 2));

    //  })

    // db.collection('Users').insertOne({
    //     name: 'Renee',
    //     age: '23',
    //     location: 'Hyuna'
    // },(err, result)=>{
    //     if (err) {
    //         return console.log('Unable to insert')
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();

});
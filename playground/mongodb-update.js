const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',
 (err, client)=>{
     if (err) {
         console.log('Unable to connecto to MongoDB server');
     }
     console.log('Connected to MongoDB server');

     var db = client.db('TodoApp');


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a68d570d386e356d62c8a1b')},
    {
        $set: {
            name: 'Andrew'
        },
    
        $inc: {age:1}
    },{
        returnOriginal:false
    }
)
    .then((result)=>{
        console.log(result);
    })

 
    //client.close();

});



// 5a68d2752653b454d5ce3ad8

// total: 28535936676
// 2017: 6625871643
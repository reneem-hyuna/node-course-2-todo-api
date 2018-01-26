const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',
 (err, client)=>{
     if (err) {
         console.log('Unable to connecto to MongoDB server');
     }
     console.log('Connected to MongoDB server');

     var db = client.db('TodoApp');
// deleteMany
    //  db.collection('Todos').deleteMany({text:'Eat'})
    //  .then((res)=>{
    //     console.log(res);

    //  })

     // deleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'})
// .then((res)=>{
//    console.log(res);

// })


// findOneAndDelete
    db.collection('Todos').findOneAndDelete({complete: false})
    .then((result)=>{
        console.log(result);
    })

 
    //client.close();

});



// 5a68d2752653b454d5ce3ad8

// total: 28535936676
// 2017: 6625871643
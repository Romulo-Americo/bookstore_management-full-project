const db = require('./connection');

let testDatabase = db.authenticate()
.then(() =>{
    console.log('Connection succesfuly');
})
.catch((err) =>{
    console.error(`Error in connection with database ${err}`);
})


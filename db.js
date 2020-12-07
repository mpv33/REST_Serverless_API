
const mysql = require('mysql');
//const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
// mysql.Promise = global.Promise;
let isConnected;

// mongodb connection


// mongo db connectivity 
// module.exports = connectToDatabase = () => {
//   if (isConnected) {
//     console.log('=> using existing database connection');
//     return Promise.resolve();
//   }

//   console.log('=> using new database connection');
//   return mongoose.connect(process.env.DB)
//     .then(db => { 
    
//       isConnected = db.connections[0].readyState;
//       console.log(isConnected)
//       console.log(process.env.DB)
//     }).catch('error')
    
// };



//local mysql db connection
let connectToDatabaseLocl = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_mysql_crud_db"
});

// mysql connectivity 
module.exports.connectToDatabase = (callback) => {
  if (isConnected) {
    console.log('=> using existing database connection');
    callback(null, true);
  }
  console.log('=> using new database connection');
  connectToDatabaseLocl.connect((err) => {
    if (err) {
      console.log(err, "err")
      callback(null, false);
    }
    console.log("Database succesfully  Connected!");
    callback(null, connectToDatabaseLocl);
  });
};



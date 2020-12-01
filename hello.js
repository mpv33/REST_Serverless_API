// index.js

// const serverless = require('serverless-http');
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

module.exports.first = (event, context, callback) => {


  callback(null,{
    statusCode:200,
    body:JSON.stringify({ 
      statusCode:200,
      messge:"Hellow Owordk!!"
    })
  })
  }
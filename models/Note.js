

// const mongoose = require('mongoose');
// const NoteSchema = new mongoose.Schema({  
//   title: String,
//   description: String
// });
// module.exports = mongoose.model('Note', NoteSchema);

const { connectToDatabase } = require("../db.js");

//Employee object create
var Employee = function (employee) {
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.email = employee.email;
};
Employee.create = function (newEmp, result) {
  connectToDatabase((err,res) => {
  res.query("INSERT INTO employees set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
})
};
let a = 6;
Employee.findById = (id, result) => {
  console.log(":::::: findById", id, result, a)
  connectToDatabase((err, resp) => {
    if (!err) {
      resp.query("Select * from employees where id = ? ", id, (err2, res) => {
        resp.end();
        if (err2) {
          console.log("error:::: ", err);
          result(err2, null);
        }
        else {
          result(null, res);
        }
      });
      // })
    } else {
      result(err, null);
    }
  })
};
Employee.findAll = function (result) {
  console.log("::::::", result, a)
  connectToDatabase((err, res) => {
    res.query("Select * from employees", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      else {
        console.log('employees : ', res);
        result(null, res);
      }
    });
  })
};
Employee.findByIdAndUpdate = function (id, employee, result) {
  connectToDatabase((err,res)=> {
  res.query("UPDATE employees SET first_name=?,last_name=?,email=? WHERE id = ?", [employee.first_name, employee.last_name, employee.email, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
})
};
Employee.findByIdAndRemove = function (id, result) {
  connectToDatabase((err,res) => {
  res.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
})
};
module.exports = Employee;
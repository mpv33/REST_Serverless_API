// mongodb crud 
//const connectToDatabase = require('./db');
//const Note = require('./models/Note');
//require('dotenv').config({ path: './variables.env' });




// module.exports.create = (event, context, callback) => {
//     context.callbackWaitsForEmptyEventLoop = false;

//     connectToDatabase()
//         .then(() => {
//             Note.create(JSON.parse(event.body))
//                 .then(note => {
//                     console.log(":::::::", note)
//                     callback(null, {
//                         statusCode: 200,
//                         body: JSON.stringify(note)
//                     })
//                 })
//                 .catch(err => {
//                     console.log(":::::::", err)
//                     callback(null, {
//                         statusCode: err.statusCode || 500,
//                         headers: { 'Content-Type': 'text/plain' },
//                         body: 'Could not create the note.'
//                     })
//                 });
//         });
// };

// module.exports.getOne = (event, context, callback) => {
//     context.callbackWaitsForEmptyEventLoop = false;

//     connectToDatabase()
//         .then(() => {
//             Note.findById(event.pathParameters.id)
//                 .then(note => callback(null, {
//                     statusCode: 200,
//                     body: JSON.stringify(note)
//                 }))
//                 .catch(err => callback(null, {
//                     statusCode: err.statusCode || 500,
//                     headers: { 'Content-Type': 'text/plain' },
//                     body: 'Could not fetch the note.'
//                 }));
//         });
// };

// module.exports.getAll = (event, context, callback) => {
//     context.callbackWaitsForEmptyEventLoop = false;

//     connectToDatabase()
//         .then(() => {
//             Note.find()
//                 .then(notes => callback(null, {
//                     statusCode: 200,
//                     body: JSON.stringify(notes)
//                 }))
//                 .catch(err => callback(null, {
//                     statusCode: err.statusCode || 500,
//                     headers: { 'Content-Type': 'text/plain' },
//                     body: 'Could not fetch the notes.'
//                 }))
//         });


// };

// module.exports.update = (event, context, callback) => {
//     context.callbackWaitsForEmptyEventLoop = false;

//     connectToDatabase()
//         .then(() => {
//             Note.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
//                 .then(note => callback(null, {
//                     statusCode: 200,
//                     body: JSON.stringify(note)
//                 }))
//                 .catch(err => callback(null, {
//                     statusCode: err.statusCode || 500,
//                     headers: { 'Content-Type': 'text/plain' },
//                     body: 'Could not fetch the notes.'
//                 }));
//         });
// };

// module.exports.delete = (event, context, callback) => {
//     context.callbackWaitsForEmptyEventLoop = false;

//     connectToDatabase()
//         .then(() => {
//             Note.findByIdAndRemove(event.pathParameters.id)
//                 .then(note => callback(null, {
//                     statusCode: 200,
//                     body: JSON.stringify({ message: 'Removed note with id: ' + note._id, note: note })
//                 }))
//                 .catch(err => callback(null, {
//                     statusCode: err.statusCode || 500,
//                     headers: { 'Content-Type': 'text/plain' },
//                     body: 'Could not fetch the notes.'
//                 }));
//         });
// };

// mysql crud 

const Note = require('./models/Note');


module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log("from db:::: add new  ")
        Note.create(JSON.parse(event.body), (err, note) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    statusCode: 200,
                    res: note
                })
            })
        })
};

module.exports.getOne = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log("from db:::: ")
    Note.findById(event.pathParameters.id, (err, note) => {

        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,
                res: note
            })
        })
    })
}

module.exports.getAll = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    console.log("from db:::: all ")
    Note.findAll((err, note) => {
    
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,
                res: note
            })
        })
    })
};
module.exports.update = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log("from db::::update ", event)
    Note.findByIdAndUpdate(event.pathParameters.id,JSON.parse(event.body), (err, note) => {
    // .then(note => {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            statusCode: 200,
            res: note
        })
    })
})
 };

module.exports.delete = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    Note.findByIdAndRemove(event.pathParameters.id, (err, note) => {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            statusCode: 200,
            res: note
        })
    })
})
};

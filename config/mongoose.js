const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/todo_dev');

const db= mongoose.connection;
db.on('error',console.error.bind(console,'error connecting'));

db.once('open',function(){
    console.log('connected to databse: MongoDB')
});

module.exports=db;
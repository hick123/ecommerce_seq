var express =require('express');
var Sequelize = require('sequelize');
var app=express();

var bodyParser =require('body-parser');

app.use(bodyParser.json());

const db =require('./config/db.config.js');

//force:true will drop the table if it already exists

db.sequelize.sync().then(()=>{
    console.log('Connected');
});

require('./Routes/customer.route.js')(app);
// create a server

var server=app.listen(8081, function(){
    var host =server.address().address
    var port = server.address().port

    console.log("Server running at http://%s:%s", host,port)
})
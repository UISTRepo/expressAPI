var mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tutorialsIP'
}

var connection = mysql.createConnection(config);
connection.connect(function(err){
    if (err){
        console.log('error connecting:' + err.stack);
    }
});

module.exports ={
    connection : mysql.createConnection(config)
}

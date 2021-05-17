var mysql = require('mysql');

var config = {
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
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

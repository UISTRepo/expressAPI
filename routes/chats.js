var express = require('express');
var router = express.Router();

var chatData = [
    {
        user_id: 2,
        name: 'Mike',
        messages: [
            {
                id: 3,
                user_id: 2,
                text: 'Mike 1st message',
                thumb: 'https://via.placeholder.com/100',
                created_at: '2021-03-29 08:00:03'
            }
        ]
    },
    {
        user_id: 3,
        name: 'Jessica',
        messages: [

        ]
    },
    {
        user_id: 4,
        name: 'Bob',
        messages: [

        ]
    }
];

router.get('/', function(req, res, next) {
    var mysql = require('../connections/mysql');
    var connection = mysql.connection;

    let query = '';

    connection.query (query, function(error, results){
        if (results){
            res.json(results);
        }
        else{
            console.log(error);
        }
    });
});

router.get('/:user_id', function(req, res, next) {

    var myId = 1;
    var user_id = req.params.user_id;

    var mysql = require('../connections/mysql');
    var connection = mysql.connection;

    let query = 'SELECT * FROM chats WHERE (user1 = ' + myId + ' AND user2 = ' + user_id + ') OR (user2 = ' + myId + ' AND user1 = ' + user_id + ')';

    connection.query(query, function(error, messages){
        let userQuery = 'SELECT * FROM users where id = ' + user_id;

        connection.query(userQuery, function (error, users) {

            messages.forEach(function(msg){
                msg.thumb = users[0].thumb;
            });

            var chatItem = {
                user_id: users[0].id,
                name: users[0].name,
                messages: messages
            };

            res.json(chatItem);
        })
    });

});

router.post('/newMessage', function(req, res, next) {

    var mysql = require('../connections/mysql');
    var connection = mysql.connection;

    let query = 'INSERT INTO chats (user1, user2, text) values ('+ req.body.user1 +', '+ req.body.user2 +', \''+ req.body.text +'\')';

    connection.query(query, function(error, result){

        let userQuery = 'SELECT * FROM users where id = ' + req.body.user1;

        connection.query(userQuery, function (error, users) {
            res.json({
                id: result.insertId,
                thumb: users[0].thumb,
                name: users[0].name
            });
        });

    });

});

router.delete('/:id', function (req ,res) {
    // TODO: add the fetch api call on the frontend to delete specific message

    var mysql = require('../connections/mysql');
    var connection = mysql.connection;

    let query = 'DELETE FROM chats WHERE id = '+ req.params.id;

    connection.query(query, function(error, result){
        res.json(result);
    });
})

module.exports = router;

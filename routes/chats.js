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
    res.json(chatData);
});

router.get('/:user_id', function(req, res, next) {

    var user_id = req.params.user_id;

    var chatMessages = chatData.filter(function (item) {
        return item.user_id == user_id;
    })[0];

    res.json(chatMessages);
});

router.post('/', function(req, res, next) {

    // here we are going to save the new message in the chat

});

module.exports = router;

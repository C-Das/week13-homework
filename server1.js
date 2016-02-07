var http = require('http');
var PORT1 = 7000;

var server = http.createServer(function(req, res){
    res.end("Server-1 is running!!!!!!");
});
goodMessages = ["Nice to meet you","Great work Keep it up", "Awesome Coding"];
random1 = Math.floor(Math.random() * (goodMessages.length));


goodMsgToDisplay = goodMessages[random1];
// console.log(goodMsgToDisplay);

server.listen(PORT1, function(){
    console.log(goodMsgToDisplay);
});

var PORT2 = 7500;

var server = http.createServer(function(req, res){
    res.end("Server-2 is running!!!!!!");
});

badMessages = ["Please be prepared before next meeting","Please focus to improve your skill set", "Needs improvememt in CWT"];
random2 = Math.floor(Math.random() * (badMessages.length));

badMsgToDisplay = badMessages[random2];

server.listen(PORT2, function(){
    console.log(badMsgToDisplay);
});
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var gitAPI = require('node-github');

var github = new gitAPI({
    version: "3.0.0"
});

app.get('/dashboard/:user',function(req,res){
  var user = req.params.user;
  github.user.getFrom({
      user: user
  }, function(err, gitResponse){
      res.send(JSON.stringify(gitResponse))
  });
  res.sendFile(process.cwd()+'/views/dashboard.html');
});

app.listen(PORT,function(){
  console.log("Listing on the PORT %s",PORT);
})
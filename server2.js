var http = require('http');
var url = require('url');
var fs = require('fs');
var PORT = 8080;

var handleRequest = function(req,res){
    // res.end("Server is running!!!!!!");
    // debugger;
var urlParts = url.parse(req.url);
// console.log(urlParts.pathname);
switch(urlParts.pathname) {
    case "/" :
      display_root(req,res);
      break;
    case "/favourite_food" :
      res.end("This is my favourite food section");
      break;
    case "/favourite_movies" :
      display_favourite_movies(req,res);
      break;
    case "/favourite_css_frameworks" :
      res.end("This is my favourite CSS Framework Section");
      break;
    default :
      res.end("So such pages found");
  }
};

var display_root = function(req,res){
    fs.readFile("homepage.html","utf8",function(err,data){
    if(err){console.log(err)};

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
    });
  }

var display_favourite_movies = function(req,res) {
  var myMovies = "<html><body>"
  myMovies += "<p>My Movies</p>"
  myMovies += "</body></html>"

  res.end(myMovies);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("I am listening!!");
});
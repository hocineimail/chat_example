var routes = require("./routes");
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);


app.engine('ejs', require('ejs').renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
      console.log(msg);
    });
  });
  
app.use(routes);  
http.listen(3000, function(){
  console.log('listening on *:3000');
});
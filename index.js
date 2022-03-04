const express = require("express");
const socket = require("socket.io");
const port = process.env.PORT || 4000;

var app = express();
var server = app.listen(port, function () {
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function (socket) {
  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
  });

  socket.on("typing",function(data) {
      socket.broadcast.emit("typing",data);
  })
});

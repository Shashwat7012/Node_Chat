const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected', socket.id);

    socket.on('msg_Send',(data)=>{
        // data :- same object that we are sending
        console.log(data);
        // socket.emit('msg_rcvd', data);

        // socket.broadcast.emit('msg_rcvd', data);   socket.broadcast.emit :- It means the sender cannot recieve the message which was sended by him.
        // socket.emit('msg_rcvd', data); :- socket.emit :- It means sender can only recieves his msg no other people can recieve
        io.emit('msg_rcvd', data); // It means all can send and recieve message with each other included themselves
    })

    // socket.on('from_Client', ()=>{
    //     console.log("recieved message from client");
    // })

    // Emit a message from server every 2 seconds
    // setInterval(() => {
    //     socket.emit('from_server', 'Message from server at ' + new Date().toLocaleTimeString());
    // }, 2000);

    // setInterval(()=>{
    //     socket.emit('more_event');
    // },500);
});



app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {
    console.log("Server Started on port 3000");
});

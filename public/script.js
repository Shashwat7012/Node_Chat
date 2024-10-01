// Create a socket connection
var socket = io();

// Get references to HTML elements
let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById('msgList');

// Send message when the "Send" button is clicked
btn.onclick = function exec() {
   
        // Emit the message to the server
        socket.emit('msg_Send', {
            msg: inputMsg.value
    });
}

socket.on('msg_rcvd',(data)=>{
    let listmsg = document.createElement('li');
    listmsg.innerText = data.msg;
    msgList.appendChild(listmsg);
})

// let btn = document.getElementById('btn');
// btn.onclick = function exec(){
//     socket.emit('from_Client');
// }




//         // Listen for 'from_server' event from the server
//         socket.on('from_server', (message) => { 
//             // Create a new div and add the message from the server
//             const div = document.createElement('div');
//             div.textContent = message;  // Use textContent to safely add the message
//             document.body.appendChild(div);
//         })
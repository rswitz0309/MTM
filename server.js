const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.port || 5501;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


// Store user locations
let users = {};
let pingTO = {};

io.on('connection', (socket) => {
    console.log(`${new Date().toLocaleString()}: User ${socket.id} connected`);
    socket.on("dc", () => {
        console.log(`${new Date().toLocaleString()}: User ${socket.id} disconnected`);
    });

    socket.on("ping", (username) => {
        console.log(`${username} is online`);
        const timeout = pingTO[username];
       
        if(timeout) {
            clearTimeout(timeout);
        }

        pingTO[username] = setTimeout(() => {
            console.log(`User ${username} TO'd`);
            delete users[username]
        }, 7500);
    });

    socket.on("location", (username, {lat, long}) => {
        console.log(username, lat, long);
        users[username] = {lat, long};
        console.log(`User ${username}'s position is ${lat} latitude, ${long} longitude`);
    });

});

setInterval(async() => {
    const user = Object.keys(users).map((name) => ({
        id:name,
        location: users[name]
    }));
    io.emit("locations", user);
}, 5000);

http.listen(port, () => {
    console.log('Server is running on http://127.0.0.1:5501');
});
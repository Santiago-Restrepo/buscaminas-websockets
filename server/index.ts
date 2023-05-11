const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

import { Server, Socket } from "socket.io";

const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
} );




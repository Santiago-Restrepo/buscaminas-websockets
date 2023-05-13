import express from "express";
import { Server, Socket } from "socket.io";
import http from "http";
//Types
import { NewUser, User } from "./types";

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

const users: User[] = [];

io.on('connection', (socket: Socket) => {
    socket.on('new-user', ({username}: NewUser) => {
        const newUser = {
            id: socket.id,
            username,
            easyScore: 0,
            mediumScore: 0,
            hardScore: 0,
        }
        users.push(newUser);
        console.log('New client connected:', newUser.id, newUser.username);
        console.log('Users:', users);
        socket.broadcast.emit('new-user', users);
        socket.emit('new-user', users);
    });
    socket.on('update-score', (user: User) => {
        const userIndex = users.findIndex(u => u.id === user.id);
        users[userIndex] = user;
        socket.broadcast.emit('update-score', user);
        socket.emit('update-score', user);
    });
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        users.splice(users.findIndex(user => user.id === socket.id), 1);
    });
});


server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connectToDatabase = require('./config/dbConfig');
const initializeSocket = require('./controllers/socketController');
const chatRouter = require('./routes/chatRouter');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Connect to the database
connectToDatabase();

// Initialize socket.io
initializeSocket(io);

// Welcome message at the root URL
app.get('/', (req, res) => {
  res.send('Welcome to Flupus!');
});

// Use the chatRouter for '/chat' routes
app.use('/chat', chatRouter);

module.exports = {
  app,
  server,
};

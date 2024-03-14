const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connectToDatabase = require('./config/dbConfig');
const initializeSocket = require('./controllers/socketController');
const chatRouter = require('./routes/chatRouter');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


connectToDatabase();


initializeSocket(io);


app.get('/', (req, res) => {
  res.send('Welcome to Flupus!');
});

app.use('/chat', chatRouter);

cron.schedule('*/10 * * * *', () => {
  console.log('Pinging server to keep it alive...');
  https.get('https://flupus-server.onrender.com', (res) => {
    console.log(`Ping response: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error('Ping error:', err.message);
  });
});

module.exports = {
  app,
  server,
};

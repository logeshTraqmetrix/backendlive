// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');

// // Load environment variables from .env file
// require('dotenv').config();

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: ["https://adminclient-9ntm.onrender.com", "https://userclient.onrender.com"],
//     methods: ["GET", "POST"]
//   }
// });

// app.use(cors({
//   origin: ['https://adminclient-9ntm.onrender.com', 'https://userclient.onrender.com']
// }));

// // // Define a route to handle GET requests
// // app.get('/', (req, res) => {
// //   res.send('Hello Logesh');
// // });

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });

//   socket.on('locationUpdate', (data) => {
//     io.emit('locationUpdate', data);
//   });
// });

// // Use process.env.PORT or default to 3000 if PORT is not set
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });






const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: ["https://adminclient-9ntm.onrender.com", "https://userclient.onrender.com"],
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: ['https://adminclient-9ntm.onrender.com', 'https://userclient.onrender.com']
}));

// Define a route to handle GET requests
app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('New client connected', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  });

  socket.on('locationUpdate', (data) => {
    io.emit('locationUpdate', data);
  });
});

// Use process.env.PORT or default to 3000 if PORT is not set
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

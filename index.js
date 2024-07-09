// // Importing required modules
// const express = require('express');

// // Creating an Express application
// const app = express();

// // Define a route to handle GET requests
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Starting the server on port 3000
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });




// // Importing required modules
// const express = require('express');
// const path = require('path');

// // Creating an Express application
// const app = express();

// // Define a route to handle GET requests
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Serve static files (optional)
// app.use(express.static(path.join(__dirname, 'public')));

// // Starting the server on process.env.PORT or port 3000
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// console.log(process.env.PORT)





// const express = require('express');
// const app = express();

// // Load environment variables from .env file
// require('dotenv').config();

// // Define a route to handle GET requests
// app.get('/', (req, res) => {
//   res.send('Hello Logesh');
// });

// // Use process.env.PORT or default to 3000 if PORT is not set
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });






// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');

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

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });

//   socket.on('locationUpdate', (data) => {
//     io.emit('locationUpdate', data);
//   });
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Load environment variables from .env file
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

// // Define a route to handle GET requests
// app.get('/', (req, res) => {
//   res.send('Hello Logesh');
// });

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
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
const express = require('express');
const path = require('path'); // Add this line

// Creating express object
const app = express();

// Serve static files from the 'public' directory where 'index.html' is located.
app.use(express.static('public'));

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));

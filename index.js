const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Cyber Security IA-2!");
});

app.get('/api', (req, res) => {
    res.json({ message: "Hello, World!" });
});

// Export the server for Vercel
module.exports = app;

const express = require('express')
const app = express()
const port = 5000

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
// Handle GET requests to /api route
app.get('/api', (req, res) => {
    res.json({"users":[{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]})
    
})
// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port,() => {
    console.log('server is started on port:${port}')
})
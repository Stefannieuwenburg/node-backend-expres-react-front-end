const express = require('express')
const app = express()
const port = 5000

//************************************************************************************************* */
// let those 2 lines stading at the top of the server
app.get('/', (req, res) => {
  res.send('Hello Node server!')
})
//get info from the server its running on port 5000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
//********************************************************************** */

// Handle GET requests to /api route
app.get('/api', (req, res) => {
    res.json({"users":[{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]})
    
})

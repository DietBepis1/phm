// Server for project back-end
const express = require('express');
const mongoose = require('mongoose');

// Initialize express and express' body parsing middleware
const app = express()
app.use(express.json())

// Connection to MongoDB
const connectDB = require('./config/db.js')
connectDB()


// Import and use our routes
//const loanappdata = require('./routes/loanappdata')
//app.use('/loanappdata', loanappdata)

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'spa', 'index.html')))

// Serving static assets in production
// Not sure of the path for this yet so it may need to be changed :)
app.use(express.static('dist'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/spa', 'index.html'))
})

// Listen on a port
const PORT = process.env.PORT || 5000
const server = app.listen(PORT, ()=> {
  const host = server.address().address
  const port = server.address().port

  console.log(`App is listening on port ${port}.`)
})
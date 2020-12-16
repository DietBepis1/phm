const mongoose = require('mongoose')
const config = require('config')

// Get MongoURI from default.json
const db = config.get('mongoURI')

// Connection Settings
const connectionSettings = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, connectionSettings)
    console.log('Yay! MongoDB has connected ᕙ(▀̿̿Ĺ̯̿̿▀̿ ̿) ᕗ')
  }
  catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB

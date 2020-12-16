// A Model for the loanAppData object to be stored in MongoDB

const mongoose = require('mongoose')
require('mongoose-type-url')

// Define schema for loanAppData object
const Schema = mongoose.Schema

const loanAppData = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  typeOfLoan: {
    type: String,
    required: true
  },
  incomeRange: {
    type: String,
    required: true
  },
  ssn: {
    type: Number,
    required: true
  },
  creditScore: {
    type: Number,
    required: true
  },
  leadTime: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = loanData = mongoose.model('loanAppData', loanAppData)

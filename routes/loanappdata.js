const express = require('express')
const router = express.Router()

const loanData = require('../models/LoanAppData')

// Define CRUD operations and queries
router.get('/', (req, res) => {
  loanData.find().then(item => res.json(item))
})
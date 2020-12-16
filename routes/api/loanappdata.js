const express = require('express')
const router = express.Router()

const loanData = require('../../models/LoanAppData')

// Define CRUD operations and queries

// @route: Get api/items
// This will really only be used for the test page to show a query
router.get('/', (req, res) => {
  loanData.find().then(item => res.json(item))
})

// Post a new object to Mongo. This will be the main function of
// the mockup site.
router.post('/', (req, res) => {
  const newItem = new loanData({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    typeOfLoan: req.body.typeOfLoan,
    incomeRange: req.body.incomeRange,
    ssn: req.body.ssn,
    creditScore: req.body.creditScore,
    leadTime: req.body.leadTime,
    phoneNum: req.body.phoneNum,
    email: req.body.email
  })

  newItem
  .save()
  .then(res.json({ "msg": "Application data has been store successfully" }))
})

module.exports = router
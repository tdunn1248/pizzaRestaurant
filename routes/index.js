const express = require('express')
const router = express.Router()
const http = require('http')
const queries = require('../queries')

const db = require('../queries.js')



// track customer Table
router.get('/api/allCustomers', (req, res) => {
  // console.log(req.query)
  queries.getAllCustomers()
    .then( data => {
      res.json(data)
    })
    .catch( err => next(err))
})

router.get('/api/customerName', (req,res) {
  queries.getCustomerName()
   .then(function(data) {
     res.json(data)
   })
   .catch(function (err){
     return next(err)
   })

})

 router.get('/api/loginDetails', (req,res){
   queries.getLoginDetails()
   .then(function(data) {
     res.json(data)
   })
    .catch(function(data) {
      return next(err)
    })

 })

 router.get('/api/deliveryAddress', getDeliveryAddress(req,res){
   queries.getDeliveryAddress()
   .then(function(data) {
     res.json(data)
   })
    .catch(function(data) {
      return next(err)
    })
 })
 router.get('/api/phoneNumber', getPhoneNumber(req,res){
   queries.getPhoneNumber()
   .then(function(data) {
     res.json(data)
   })
    .catch(function(data) {
      return next(err)
    })
 })
 router.get('/api/paymentMethod', getPaymentMethod(req,res){
   queries.getPaymentMethod()
   .then(function(data) {
     res.json(data)
   })
    .catch(function(data) {
      return next(err)
    })
 })

// // track Pizza Preferences
router.get('/api/paymentMethod', customerOrders(req,res){
  queries.customerOrders()
  .then(function(data) {
    res.json(data)
  })
   .catch(function(data) {
     return next(err)
   })
})
//
// //track ingredients
router.get('/api/paymentMethod', getIngredients(req,res){
  queries.getIngredients()
  .then(function(data) {
    res.json(data)
  })
   .catch(function(data) {
     return next(err)
   })
})

// // track drinks
// router.get('/api/productID', db.getDrinkProductID)
// router.get('/api/drinkName', db.getDrinkName)
// router.get('/api/drinkManufacturer', db.getManufacturer)
// router.get('/api/drinkSupplier', db.getSupplier)
// router.get('/api/drinkPrice', db.getDrinkPrice)
//
// // track pizza data
// router.get('/api/pizzaSize', db.getPizzaSize)
// router.get('/api/pizzaType', db.getPizzaType)
// router.get('/api/pizzaIngredients', db.getpizzaIngredients)
// router.get('/api/priceData', db.getPriceData)
// router.get('/api/happyHourPrice', db.getHappyHourPrice)

module.exports = router;

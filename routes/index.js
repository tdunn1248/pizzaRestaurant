let express = require('express')
let router = express.Router()
let http = require('http')
let queries = require('../queries')

let db = require('../queries.js')



// track customer Table
router.get('/api/allCustomers', function getAllCustomers() {
  queries.getAllCustomers()
    .then(function(data) {
      res.json(data)
    })
    .catch(function (err){
      return next(err)
    })
})

// router.get('/api/customerName', db.getCustomerName)
// router.get('/api/loginDetails', db.getLoginDetails)
// router.get('/api/deliveryAddress', db.getDeliveryAddress)
// router.get('/api/phoneNumber', db.getPhoneNumber)
// router.get('/api/paymentMethod', db.getPaymentMethod)
//
// // track Pizza Preferences
// router.get('/api/customerPreference', db.customerOrderscus)
//
// //track ingredients
// router.get('/api/ingredients', db.getIngredients)
//
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

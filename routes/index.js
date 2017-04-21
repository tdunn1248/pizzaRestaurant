const express = require('express')
const router = express.Router()
const http = require('http')
const queries = require('../queries')

const db = require('../queries.js')



// track customer Table
router.get('/api/allCustomers', (req, res) => {
  queries.getAllCustomers()
    .then( data => {
      res.json(data)
    })
    .catch( err => next(err))
})

router.get('/api/customerName', (req,res) => {
  queries.getCustomerName()
   .then(data => {
     res.json(data)
   })
   .catch( err => next(err))
})

 router.get('/api/loginDetails', (req,res) => {
   queries.getLoginDetails()
    .then(data => {
     res.json(data)
   })
    .catch( err => next(err))
 })

 router.get('/api/deliveryAddress',(req,res) => {
   queries.getDeliveryAddress()
    .then(data => {
     res.json(data)
   })
    .catch( err => next(err))
 })

 router.get('/api/phoneNumber',(req,res) => {
   queries.getPhoneNumber()
    .then(data => {
     res.json(data)
   })
    .catch( err => next(err))
 })

 router.get('/api/paymentMethod',(req,res) => {
   queries.getPaymentMethod()
    .then(data => {
     res.json(data)
   })
    .catch( err => next(err))
 })

// // track Pizza Preferences
router.get('/api/paymentMethod',(req,res) => {
  queries.customerOrders()
    .then(data => {
      res.json(data)
  })
   .catch( err => next(err))
})


// //track ingredients
router.get('/api/paymentMethod',(req,res) => {
  queries.getIngredients()
    .then(data => {
      res.json(data)
  })
   .catch( err => next(err))
})

// track drinks
 router.get('/api/productID',(req,res) => {
   queries.getDrinkProductID()
    .then(data => {
     res.json(data)
   })
    .catch( err => next(err))
 })

 router.get('/api/drinkName',(req,res) => {
   queries.getDrinkDescription()
    .then(data => {
     res.json(data)
   })
    .catch( err => next(err))
 })

 router.get('/api/drinkManufacturer',(req,res) => {
   queries.getDrinkManufacturer()
    .then(data => {
     res.json(data)
   })
    .catch( err => next(err))
 })

router.get('/api/drinkSupplier', (req, res) => {
  queries.getDrinkSupplier()
    .then(data => {
      res.json(data)
  })
   .catch( err => next(err))
})

router.get('/api/drinkPrice', (req, res) => {
  queries.getDrinkPrice()
    .then(data => {
      res.json(data)
  })
   .catch( err => next(err))
})

// track pizza data
router.get('/api/pizzaSize', (req, res) => {
  queries.getPizzaSlice()
    .then(data => {
      res.json(data)
  })
   .catch( err => next(err))
})

router.get('/api/pizzaType', (req, res) => {
  queries.getPizzaSlice()
    .then(data => {
      res.json(data)
  })
   .catch( err => next(err))
})

router.get('/api/priceData', (req, res) => {
   queries.getPizzaPrice()
     .then(data => {
       res.json(data)
   })
    .catch( err => next(err))
 })

 router.get('/api/happyHourPrice', (req, res) => {
   queries.getHappyHourPrice()
     .then(data => {
       res.json(data)
   })
    .catch( err => next(err))
})

//order_items?
// orders?

module.exports = router;

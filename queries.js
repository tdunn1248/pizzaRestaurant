

// customer queries
function getAllCustomers() {
  return db.any('SELECT * FROM Customers')
}


function getCustomerName(req, res) {
  db.any('SELECT customers.name FROM Customers')
    .then(function(data) {
      // res.status(200)
      // res.data
    })
}

function getLoginDetails (req, res) {
  db.any('SELECT customers.user_name FROM Customers')
    .then(function(data) {
      // res.status(200)
      // res.data
    })
}

function getDeliveryAddress (req, res) {
  db.any('SELECT customers.address FROM Customers')
    .then(function(data) {
      // res.status(200)
      // res.data
    })
}

function getPhoneNumber (req, res) {
  db.any('SELECT customers.phone_number FROM Customers')
    .then(function(data) {
      // res.status(200)
      // res.data
    })
}

function getPaymentMethod (req, res) {
  db.any('SELECT customers.payment FROM Customers')
    .then(function(data) {
      // res.status(200)
      // res.data
      console.log(getPaymentMethod)
    })
}

//pizza preferences
function customerOrders (req, res) {
  db.any('SELECT * FROM customer_order')
    .then(function(data) {
      // res.status(200)
      // res.data
    })
}

// track ingredients
function getIngredients (req, res) {
  db.any('SELECT * FROM ingredients')
    .then(function(data) {
      // res.status(200)
      // res.data
    })
}

//track drink data
function getDrinkProductID (req, res) {
  db.any('SELECT * FROM drinks')
    .then(function(data) {
      // res.status(200)
      // res.data
    })
}

module.exports = {getAllCustomers,
  getCustomerName,
  getLoginDetails,
  getDeliveryAddress,
  getPhoneNumber,
  getPaymentMethod,
  customerOrders,
  getIngredients,
  getDrinkProductID
  }

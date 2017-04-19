

// customer queries
function getAllCustomers() {
  return db.any('SELECT * FROM Customers')
}


function getCustomerName() {
  return db.any('SELECT customers.name FROM Customers')
}

function getLoginDetails () {
  return db.any('SELECT customers.login FROM Customers')
}

function getDeliveryAddress () {
  return db.any('SELECT customers.address FROM Customers')
}

function getPhoneNumber () {
  return db.any('SELECT customers.phone_number FROM Customers')
}

function getPaymentMethod () {
  return db.any('SELECT customers.payment FROM Customers')
}

//pizza preferences
function customerOrders () {
  return db.any('SELECT * FROM customer_orders')
}

// track ingredients
function getIngredients () {
  return db.any('SELECT * FROM ingredients')
}

//track drink data
function getDrinkProductID () {
  return db.any('SELECT * FROM drinks')
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

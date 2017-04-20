//import pgp
// const db = pgp(connectionstring)

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
function customerOrders() {
  return db.any('SELECT * FROM customer_orders')
}

// track ingredients
function getIngredients() {
  return db.any('SELECT * FROM ingredients')
}

//track drink data
function getDrinkProductID() {
  return db.any('SELECT * FROM drinks')
}

function getDrinkDescription() {
  return db.any('SELECT drinks.name FROM drinks')
}

function getDrinkManufacturer() {
  return db.any('SELECT drink.manufacturer FROM drinks')
}

function getDrinkSupplier() {
  return db.any('SELECT drink.supplier FROM drinks')
}

function getDrinkPrice() {
  return db.any('SELECT drinks.price FROM drinks')
}

//track pizza data
function getPizzaSize() {
  return db.any('SELECT pizza.size FROM pizzas')
}

function getPizzaCrust() {
  return db.any('SELECT pizza.crust FROM pizzas')
}

// functions for ingredients

function getHappyHourPrice() {
  return db.any('SELECT pizza.happy_hour_pricing FROM pizzas')
}

function getPizzaPrice() {
  return db.any('SELECT pizza.price FROM pizzas')
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

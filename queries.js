
const pgp = require('pg-promise')()
const connectionString = 'postgres://rover@localhost:5432/pizzaDatabase'
const db = pgp(connectionString)

// customer queries
function getAllCustomers() {
  return db.any('SELECT * FROM customers')
}

function getCustomerName() {
  return db.any('SELECT customers.name FROM customers')
}

function getLoginDetails () {
  return db.any('SELECT customers.login FROM customers')
}

function getDeliveryAddress () {
  return db.any('SELECT customers.address FROM customers')
}

function getPhoneNumber () {
  return db.any('SELECT customers.phone_number FROM customers')
}

function getPaymentMethod () {
  return db.any('SELECT customers.payment FROM customers')
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
  return db.any('SELECT drinks.manufacturer FROM drinks')
}

function getDrinkSupplier() {
  return db.any('SELECT drinks.supplier FROM drinks')
}

function getDrinkPrice() {
  return db.any('SELECT drinks.price FROM drinks')
}

//track pizza data
function getPizzaSize() {
  return db.any('SELECT pizzas.size FROM pizzas')
}

function getPizzaCrust() {
  return db.any('SELECT pizzas.crust FROM pizzas')
}

// functions for ingredients
function getHappyHourPrice() {
  return db.any('SELECT pizzas.happy_hour_pricing FROM pizzas')
}

function getPizzaPrice() {
  return db.any('SELECT pizzas.price FROM pizzas')
}

module.exports = {getAllCustomers,
  getCustomerName,
  getLoginDetails,
  getDeliveryAddress,
  getPhoneNumber,
  getPaymentMethod,
  customerOrders,
  getIngredients,
  getDrinkProductID,
  getDrinkDescription,
  getDrinkManufacturer,
  getDrinkSupplier,
  getDrinkPrice,
  getPizzaSize,
  getPizzaCrust,
  getHappyHourPrice,
  getPizzaPrice
}

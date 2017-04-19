CREATE TABLE customers (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  username VARCHAR,
  addresses VARCHAR,
  phone_number INTEGER,
  payment INTEGER
);

CREATE TABLE customer_orders (
 ID SERIAL PRIMARY KEY,
 customer_id INT references customers(id),
  order_id INT references orders(id)
);

CREATE TABLE orders (
  ID SERIAL PRIMARY KEY,
  total DECIMAL,
  time_stamp DATE,
  customer_id INT references customers(id)
);

CREATE TABLE order_items (
 ID SERIAL PRIMARY KEY,
  order_id INT references orders(id),
  pizza_id INT references pizzas(id),
  drink_id INT references drinks(id),
  quantity INT
);

CREATE TABLE pizzas(
  ID SERIAL PRIMARY KEY,
  crust VARCHAR,
  size VARCHAR,
  price DECIMAL,
  happy_hour_pricing DECIMAL,
  qty INT
);

CREATE TABLE drinks (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  manufacturer VARCHAR,
  supplier VARCHAR,
  price DECIMAL
);

CREATE TABLE ingredients(
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

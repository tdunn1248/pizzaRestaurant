--psql database name < schema.sql

DROP TABLE IF EXISTS customers CASCADE;
CREATE TABLE customers (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  username VARCHAR,
  addresses VARCHAR,
  phone_number VARCHAR,
  payment VARCHAR
);

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  ID SERIAL PRIMARY KEY,
  total DECIMAL,
  time_stamp DATE,
  customer_id INT references customers(id)
);

DROP TABLE IF EXISTS customer_orders CASCADE;
CREATE TABLE customer_orders (
 ID SERIAL PRIMARY KEY,
 customer_id INT references customers(id),
 order_id INT references orders(id)
);

DROP TABLE IF EXISTS ingredients CASCADE;
CREATE TABLE ingredients(
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

DROP TABLE IF EXISTS pizzas CASCADE;
CREATE TABLE pizzas(
  ID SERIAL PRIMARY KEY,
  crust VARCHAR,
  size VARCHAR,
  price DECIMAL,
  happy_hour_pricing DECIMAL,
  qty INT,
  ingredients_id INT references ingredients(id)
);


DROP TABLE IF EXISTS drinks CASCADE;
CREATE TABLE drinks (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  manufacturer VARCHAR,
  supplier VARCHAR,
  price DECIMAL
);

DROP TABLE IF EXISTS order_items CASCADE;
CREATE TABLE order_items (
  ID SERIAL PRIMARY KEY,
  order_id INT references orders(id),
  pizza_id INT references pizzas(id),
  drink_id INT references drinks(id),
  quantity INT
);

--load customer tables
INSERT INTO customers VALUES (default, 'Papa John', 'papaJohn@gmail.com', 'papajohn123', '123 Main St', 8749872736, 1375849387482945 );
INSERT INTO customers VALUES (default, 'Tony', 'tony@aol.com', 'theMan247','123 Main St', 8749872736, 0384736275849037 );
INSERT INTO customers VALUES (default , 'Big Bird', 'theRealBigBird@gmail.com', 'theBiggestofBirds', '123 Main St', 8749872736, 987346572837 );
INSERT INTO customers VALUES (default , 'Elmo', '@sesamestreet.com', 'littleRed', '123 Main St', 8749872736, 987346572837 );
INSERT INTO customers VALUES (default , 'Jacob Smith', 'jacobSmith@aol.com', 'smithy', '123 Main St', 8749872736, 987346572837 );
INSERT INTO customers VALUES (default , 'Rick Ross', 'rickRoss@ovo.com', 'ricky Rosie', '123 Main St', 8749872736, 987346572837 );
INSERT INTO customers VALUES (default , 'Dr Dre', 'theDoctorsIn@sesamestreet.com', 'doctorDoctor', '123 Main St', 8749872736, 987346572837 );
INSERT INTO customers VALUES (default , 'Slim Shady', 'slimmestShady@sesamestreet.com', 'em', '123 Main St', 8749872736, 987346572837 );
INSERT INTO customers VALUES (default , 'Peter Jenkins', 'PJenkins@sesamestreet.com', 'big Pete', '123 Main St', 8749872736, 987346572837 );

--load order table
INSERT INTO orders VALUES (default, '23.98', '2016-08-23', 1);
INSERT INTO orders VALUES (default, '78.98', '2016-09-23', 2);
INSERT INTO orders VALUES (default, '34.23', '2016-07-21', 3);
INSERT INTO orders VALUES (default, '43.23', '2016-07-12', 4);
INSERT INTO orders VALUES (default, '24.56', '2016-08-21', 5);
INSERT INTO orders VALUES (default, '76.98', '2016-08-20', 6);
INSERT INTO orders VALUES (default, '17.98', '2016-02-20', 7);
--load customer_orders
INSERT INTO customer_orders VALUES (default, 1, 1);
INSERT INTO customer_orders VALUES (default, 2, 2);
INSERT INTO customer_orders VALUES (default, 3, 3);
INSERT INTO customer_orders VALUES (default, 4, 4);
INSERT INTO customer_orders VALUES (default, 5, 5);
INSERT INTO customer_orders VALUES (default, 6, 6);
--load ingredients table
INSERT INTO ingredients VALUES (default, 'sausage');
INSERT INTO ingredients VALUES (default, 'pepperoni');
INSERT INTO ingredients VALUES (default, 'cheese');
INSERT INTO ingredients VALUES (default, 'mushrooms');
INSERT INTO ingredients VALUES (default, 'bacon');
INSERT INTO ingredients VALUES (default, 'yellow peppers');
INSERT INTO ingredients VALUES (default, 'olives');
INSERT INTO ingredients VALUES (default, 'chicken');
INSERT INTO ingredients VALUES (default, 'spinach');
INSERT INTO ingredients VALUES (default, 'asiago cheese');
INSERT INTO ingredients VALUES (default, 'onions');
INSERT INTO ingredients VALUES (default, 'jalepeño');
INSERT INTO ingredients VALUES (default, 'anchioves');
INSERT INTO ingredients VALUES (default, 'green peppers');
INSERT INTO ingredients VALUES (default, 'beef');
INSERT INTO ingredients VALUES (default, 'ham');

--load pizza table
INSERT INTO pizzas VALUES (default, 'thin', 'L', '34.76', '12.48', 2, 1);
INSERT INTO pizzas VALUES (default, 'thick', 'S', '42.16', '12.48', 1, 2);
INSERT INTO pizzas VALUES (default, 'thick', 'M', '34.61', '12.48', 3, 5);
INSERT INTO pizzas VALUES (default, 'classic', 'S', '12.76', '12.48', 4, 2);
INSERT INTO pizzas VALUES (default, 'thin', 'L', '24.76', '18.48', 6, 2);
INSERT INTO pizzas VALUES (default, 'thick', 'M', '12.76', '11.48', 8, 3);
INSERT INTO pizzas VALUES (default, 'thin', 'L', '15.76', '21.48', 2, 4);

--load drinks table
INSERT INTO drinks VALUES (default, 'Sprite', 'Coca Cola Inc.', 'Generic Soda Supplier Name', '1.99');
INSERT INTO drinks VALUES (default, 'Coke', 'Coca Cola Inc.', 'Generic Soda Supplier Name', '1.99');
INSERT INTO drinks VALUES (default, 'Dr. Pepper', 'Coca Cola Inc.', 'Generic Soda Supplier Name', '1.99');
INSERT INTO drinks VALUES (default, 'Mr. Pibb', 'Coca Cola Inc.', 'Generic Soda Supplier Name', '1.99');
INSERT INTO drinks VALUES (default, 'Root Beer', 'Coca Cola Inc.', 'Generic Soda Supplier Name', '1.99');
INSERT INTO drinks VALUES (default, 'Cherry Coke', 'Coca Cola Inc.', 'Generic Soda Supplier Name', '1.99');
INSERT INTO drinks VALUES (default, 'Fanta', 'Coca Cola Inc.', 'Generic Soda Supplier Name', '1.99');

--load order_items
INSERT INTO order_items VALUES (default, 4, 2, 3, 1);
INSERT INTO order_items VALUES (default, 1, 7, 2, 2);
INSERT INTO order_items VALUES (default, 1, 4, 7, 1);
INSERT INTO order_items VALUES (default, 1, 1, 6, 4);
INSERT INTO order_items VALUES (default, 1, 6, 5, 1);
INSERT INTO order_items VALUES (default, 1, 5, 2, 1);
INSERT INTO order_items VALUES (default, 1, 3, 1, 1);

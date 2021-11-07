CREATE TABLE users(
    ids SERIAL UNIQUE NOT NULL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(500),
    password VARCHAR(500),
    caddress VARCHAR(1000),
    pincode VARCHAR(20),
    phone BIGINT
);

CREATE TABLE product( 
    ids SERIAL UNIQUE NOT NULL PRIMARY KEY, 
    category VARCHAR(255), 
    name VARCHAR(255), 
    color VARCHAR(255),
    price BIGINT
);
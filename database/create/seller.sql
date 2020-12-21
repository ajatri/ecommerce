CREATE TABLE IF NOT EXISTS seller(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the Seller",
    name VARCHAR(30) NOT NULL COMMENT "name of  Seller" ,
      email VARCHAR(20) NOT NULL COMMENT "email Seller",
    phone INT NOT NULL COMMENT "Phone number of Seller",
    address varchar(200) NOT NULL COMMENT "address of the seller"
  );

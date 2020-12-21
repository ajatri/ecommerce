CREATE TABLE IF NOT EXISTS shipper(
   id BIGINT PRIMARY KEY COMMENT "Unique Id for the shipper",
   name VARCHAR(30) NOT NULL  COMMENT "name of  the shipper " ,
      phone INT NOT NULL   COMMENT "Phone number of shipper ",
    address VARCHAR(200) NOT NULL  COMMENT "address of the shipper",
   email VARCHAR(30)  NOT NULL  COMMENT "email of the shipper"
  );
  

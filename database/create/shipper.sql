create table if not exists shipper(
    shipid BIGINT PRIMARY KEY COMMENT "Unique Id for the shipper",
    ship_name VARCHAR(30) NOT NULL ,
      ship_phone INT NOT NULL ,
    ship_address VARCHAR(200) NOT NULL,
    ship_email VARCHAR(30)  NOT NULL
  );

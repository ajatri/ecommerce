create table if not exists shipper(
   id BIGINT PRIMARY KEY COMMENT "Unique Id for the shipper",
   name VARCHAR(30) NOT NULL ,
      phone INT NOT NULL ,
    address VARCHAR(200) NOT NULL,
   email VARCHAR(30)  NOT NULL
  );

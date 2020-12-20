create table if not exists seller(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the Seller",
    name VARCHAR(30) NOT NULL ,
      email VARCHAR NOT NULL ,
    phone INT NOT NULL,
    address varchar(200) NOT NULL
  );

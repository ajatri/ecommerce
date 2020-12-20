create table if not exists seller(
    sid BIGINT PRIMARY KEY COMMENT "Unique Id for the Seller",
    s_name VARCHAR(30) NOT NULL ,
      s_email VARCHAR NOT NULL ,
    s_phone INT NOT NULL,
    s_address varchar(200) NOT NULL
  );

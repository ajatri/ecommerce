create table if not exists seller(
    sid BIGINT PRIMARY KEY COMMENT "Unique Id for the Seller",
    p_name VARCHAR(30) NOT NULL ,
      p_price INT NOT NULL ,
    p_image VARCHAR NOT NULL,
    p-desc varchar(200) NOT NULL
  );

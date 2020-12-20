create table if not exists product(
    pid BIGINT PRIMARY KEY COMMENT "Unique Id for the Product",
    p_name VARCHAR(30) NOT NULL ,
      p_price INT NOT NULL ,
    p_image IMAGE NOT NULL,
    p-desc varchar(200) NOT NULL
  );

create table if not exists product(
    pid BIGINT PRIMARY KEY COMMENT "Unique Id for the Product",
    p_name VARCHAR(30) NOT NULL ,
      p_price INT NOT NULL ,
    p_image VARCHAR(200) NOT NULL,
    p_desc varchar(200) NOT NULL
  );

create table if not exists product(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the Product",
    name VARCHAR(30) NOT NULL  COMMENT "Name of the product " ,
      price INT NOT NULL  COMMENT "price of the products ",
    image VARCHAR(200) NOT NULL  COMMENT "Image of the product ",
    desc varchar(200) NOT NULL  COMMENT "description of the product "
  );

CREATE TABLE IF NOT EXISTS product(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the Product",
    name VARCHAR(30) NOT NULL  COMMENT "Name of the product " ,
      price BIGINT NOT NULL  COMMENT "price of the products ",
    image VARCHAR(200) NOT NULL  COMMENT "Image of the product ",
    des varchar(200) NOT NULL  COMMENT "description of the product "
  );

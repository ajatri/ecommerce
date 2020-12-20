create table if not exists product(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the Product",
    name VARCHAR(30) NOT NULL ,
      price INT NOT NULL ,
    image VARCHAR(200) NOT NULL,
    desc varchar(200) NOT NULL
  );

  create table if not exists address(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the address",
    landmark VARCHAR(100)
    city VARCHAR(30) NOT NULL ,
      state VARCHAR(30) NOT NULL ,
    email VARCHAR(30) NOT NULL,
    phone INT  NOT NULL,
    pin INT  NOT NULL,
    FOREIGN KEY (id) REFERENCES user(id)
  );

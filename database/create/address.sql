  create table if not exists address(
    id BIGINT PRIMARY KEY COMMENT "Unique Id of the user",
    landmark VARCHAR(100) "any object or feature to identify the location "
    city VARCHAR(30) NOT NULL "city/village of the user",
      state VARCHAR(30) NOT NULL "state of the user" ,
    email VARCHAR(30) NOT NULL "email of user",
    phone INT  NOT NULL " Phone number of the user",
    pin INT  NOT NULL "pin code ",
    FOREIGN KEY (id) REFERENCES user(id)
  );

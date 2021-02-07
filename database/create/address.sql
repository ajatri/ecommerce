   CREATE TABLE IF NOT EXISTS address(
  id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT "Unique Id of address",
    uid BIGINT COMMENT "Unique Id of the user",
    landmark VARCHAR(100) COMMENT "any object or feature to identify the location ",
    city VARCHAR(30) NOT NULL COMMENT "city/village of the user",
    state VARCHAR(30) NOT NULL COMMENT "state of the user" ,
    email VARCHAR(30) NOT NULL  COMMENT"email of user",
    phone INT  NOT NULL  COMMENT" Phone number of the user",
    pin INT  NOT NULL  COMMENT"pin code ",
    FOREIGN KEY (uid) REFERENCES user(id)
  );

     CREATE TABLE IF NOT EXISTS address(
  id BIGINT PRIMARY KEY AUTO_INCREMENT COMMENT "Unique Id of address",
    uid BIGINT COMMENT "Unique Id of the user",
     name VARCHAR(30) NOT NULL  COMMENT"email of user",
    houseno VARCHAR(100) NOT NULL COMMENT "hosue no or name of the house ",
   area VARCHAR(100) NOT NULL COMMENT "area or colony ",
    landmark VARCHAR(100) NOT NULL COMMENT "any object or feature to identify the location",
    city VARCHAR(30) NOT NULL COMMENT "city/village of the user",
    state VARCHAR(30) NOT NULL COMMENT "state of the user" ,
    phone INT  NOT NULL  COMMENT" Phone number of the user",
    pin INT  NOT NULL  COMMENT"pin code ",
    FOREIGN KEY (uid) REFERENCES user(id)
  );
 

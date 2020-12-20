create table if not exists user(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the User",
    first_name VARCHAR(30) NOT NULL COMMENT "First name of the User/Customer",
    last_name VARCHAR(30) NOT NULL COMMENT "First name of the User/Customer",
    email VARCHAR(30) NOT NULL COMMENT"email of the User/Customer" ,
    password VARCHAR(30) NOT NULL COMMENT "password of the User/Customer"
  );

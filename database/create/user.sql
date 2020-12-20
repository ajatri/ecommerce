create table if not exists user(
    uid BIGINT PRIMARY KEY COMMENT "Unique Id for the User",
    first_name VARCHAR(30) NOT NULL COMMENT "First name of the User/Customer",
    u_email VARCHAR(30) ,
    password VARCHAR(30)
  );

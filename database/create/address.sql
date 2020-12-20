  create table if not exists address(
    uid BIGINT PRIMARY KEY COMMENT "Unique Id for the Product",
    u_landmark VARCHAR(100)
    u_city VARCHAR(30) NOT NULL ,
      u_state VARCHAR(30) NOT NULL ,
    u_email VARCHAR(30) NOT NULL,
    u_phone INT  NOT NULL,
    FOREIGN KEY (uid) REFERENCES user(uid)
  );

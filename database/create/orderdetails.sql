  create table if not exists orderdetails(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the oder",
    pid VARCHAR(100) NOT NULL  COMMENT " Id of the product ",
    quantity INT  NOT NULL  COMMENT "quantity of the product ",
     FOREIGN KEY (id) REFERENCES order(id)
    FOREIGN KEY (pid) REFERENCES product(id)
  );

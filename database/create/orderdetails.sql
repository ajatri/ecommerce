   CREATE TABLE IF NOT EXISTS  orderdetails(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the oder",
    pid BIGINT NOT NULL  COMMENT " Id of the product ",
    quantity INT  NOT NULL  COMMENT "quantity of the product ",
     FOREIGN KEY (id) REFERENCES orders(id),
    FOREIGN KEY (pid) REFERENCES product(id)
  );

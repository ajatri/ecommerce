  create table if not exists orderdetails(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the oderdetails",
    pid VARCHAR(100) NOT NULL,
    quantity INT  NOT NULL ,
     FOREIGN KEY (id) REFERENCES order(id)
    FOREIGN KEY (pid) REFERENCES product(id)
  );

  create table if not exists orderdetails(
    oid BIGINT PRIMARY KEY COMMENT "Unique Id for the Product",
    pid VARCHAR(100) NOT NULL,
    quantity INT  NOT NULL ,
     FOREIGN KEY (oid) REFERENCES order(oid)
    FOREIGN KEY (pid) REFERENCES product(pid)
  );

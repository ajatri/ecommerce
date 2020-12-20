create table if not exists order(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the order ",
    uid BIGINT NOT NULL ,
    shipid INT NOT NULL ,
    FOREIGN KEY(uid) REFERENCES user(id),
   FOREIGN KEY(shipid) REFERENCES shipper(id)
  );


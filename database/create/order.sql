create table if not exists order(
    oid BIGINT PRIMARY KEY COMMENT "Unique Id for the order ",
    uid BIGINT NOT NULL ,
    shipid INT NOT NULL ,
    FOREIGN KEY(uid) REFERENCES user(uid),
   FOREIGN KEY(shipid) REFERENCES shipper(shipid)
  );
© 2020 GitHub, Inc.

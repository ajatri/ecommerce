  CREATE TABLE IF NOT EXISTS orders(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the order ",
    uid BIGINT NOT NULL  COMMENT " Id of the user ",
    shipid BIGINT NOT NULL  COMMENT " Id for the shipper " ,
    FOREIGN KEY(uid) REFERENCES user(id),
   FOREIGN KEY(shipid) REFERENCES shipper(id)
  );

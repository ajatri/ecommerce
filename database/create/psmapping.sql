CREATE TABLE IF NOT EXISTS psmapping(
   id BIGINT AUTO_INCREMENT PRIMARY KEY COMMENT "Unique Id for the product-sller mapping",
   pid BIGINT NOT NULL COMMENT " Id of the product ",
   sid BIGINT NOT NULL COMMENT " Id of the seller ",
   FOREIGN KEY (pid) REFERENCES product(id),
   FOREIGN KEY (sid) REFERENCES seller(id)
);
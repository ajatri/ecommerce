create table if not exists psmapping(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the product-sller mapping",
    pid BIGINT NOT NULL,
    sid BIGINT NOT NULL ,
    FOREIGN KEY (pid) REFERENCES product(id)
    FOREIGN KEY (sid) REFERENCES seller(id)
    );

create table if not exists psmapping(
    pid BIGINT PRIMARY KEY COMMENT "Unique Id for the product-sller mapping",
    sid BIGINT NOT NULL ,
    FOREIGN KEY (pid) REFERENCES product(pid)
    FOREIGN KEY (sid) REFERENCES seller(sid)
    );

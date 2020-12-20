create table if not exists wishlist(
    cid BIGINT PRIMARY KEY COMMENT "Unique Id for the cart",
    pid BIGINT NOT NULL ,
    uid BIGINT NOT NULL ,
    FOREIGN KEY (pid) REFERENCES product(pid)
    FOREIGN KEY (uid) REFERENCES user(uid)
    );

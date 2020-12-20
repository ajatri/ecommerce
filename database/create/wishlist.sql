create table if not exists wishlist(
    wid BIGINT PRIMARY KEY COMMENT "Unique Id for the wishlist",
    pid BIGINT NOT NULL ,
    uid BIGINT NOT NULL ,
    FOREIGN KEY (pid) REFERENCES product(pid)
    FOREIGN KEY (uid) REFERENCES user(uid)
    );

create table if not exists wishlist(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the cart",
    pid BIGINT NOT NULL ,
    uid BIGINT NOT NULL ,
    FOREIGN KEY (pid) REFERENCES product(id)
    FOREIGN KEY (uid) REFERENCES user(id)
    );

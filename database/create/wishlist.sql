create table if not exists wishlist(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the wishlist",
    pid BIGINT NOT NULL  COMMENT " Id for the product ",
    uid BIGINT NOT NULL  COMMENT " Id for the user" ,
    FOREIGN KEY (pid) REFERENCES product(id)
    FOREIGN KEY (uid) REFERENCES user(id)
    );

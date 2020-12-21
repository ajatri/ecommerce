CREATE TABLE IF NOT EXISTS  wishlist(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the wishlist",
    pid BIGINT NOT NULL COMMENT " Id of the products",
    uid BIGINT NOT NULL COMMENT "Id of the user",
    FOREIGN KEY (pid) REFERENCES product(id),
    FOREIGN KEY (uid) REFERENCES user(id)
    );

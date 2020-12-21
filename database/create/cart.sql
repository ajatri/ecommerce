    CREATE TABLE IF NOT EXISTS  cart(
    id BIGINT PRIMARY KEY COMMENT "Unique Id for the cart",
    pid BIGINT NOT NULL COMMENT " Id of the products",
    uid BIGINT NOT NULL COMMENT "Id of the user",
    FOREIGN KEY (pid) REFERENCES product(id),
    FOREIGN KEY (uid) REFERENCES user(id)
    );

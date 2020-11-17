create table if not exists user(
    uid BIGINT PRIMARY KEY COMMENT "Unique Id for the User",
    first_name VARCHAR(30) NOT NULL COMMENT "First name of the User/Customer",
    middle_name VARCHAR(30),
    last_name VARCHAR(30),
    dob DATETIME,
);
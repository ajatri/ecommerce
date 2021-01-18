module.exports = {
    AddSeller: "insert into seller(name,email,phone,address) values (?,?,?,?);",
    GetAllSellers: "select * from seller;",
    UpdateSeller: "update seller set name=?,email=?,phone=?,address=? where id=?;",
    DeleteSeller: "delete from seller where id=?;",
     AddProduct: "insert into product(name,price,image,des) values (?,?,?,?);",
    GetAllProducts: "select p.*,count(w.uid) as num , count(c.uid) as num2 from product p left outer join (select * from wishlist where uid=?) w on w.pid=p.id left outer join (select * from cart where uid=?) c on c.pid=p.id group by p.id;",
    UpdateProduct: "update product set name=?,price=?,.image=?,des=? where id=?;",
    DeleteProduct: "delete from product where id=?;",
    AddUser: "insert into user(first_name,last_name,email,pass) values (?,?,?,?);",
   UpdateUser: "update user set first_name=?,last_name=?,email=?,pass=? where id=?;",
    DeleteUser: "delete from user where id=?;",
    CheckUser : "select id,first_name,pass from user where first_name= ? and pass= ? ; ",
    AddToWishlist : "insert into wishlist(pid,uid) values (?,?);",
    ShowWishlist : "select p.* from product p right outer join (select * from wishlist where uid=?) w on w.pid=p.id group by p.id;  "
    AddToCart  : "insert into cart(pid,uid) values (?,?);",
    ShowCart : "select p.* from product p right outer join (select * from cart where uid=?) c on c.pid=p.id group by p.id;  "

}

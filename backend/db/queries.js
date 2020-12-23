module.exports = {
    AddSeller: "insert into seller(name,email,phone,address) values (?,?,?,?);",
    GetAllSellers: "select * from seller;",
    UpdateSeller: "update seller set name=?,email=?,phone=?,address=? where id=?;",
    DeleteSeller: "delete from seller where id=?;",
     AddProduct: "insert into product(name,price,image,des) values (?,?,?,?);",
    GetAllProducts: "select * from product;",
    UpdateProduct: "update product set name=?,price=?,image=?,des=? where id=?;",
    DeleteProduct: "delete from product where id=?;"
}

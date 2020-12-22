module.exports = {
    AddSeller: "insert into seller(name,email,phone,address) values (?,?,?,?);",
    GetAllSellers: "select * from seller;",
    UpdateSeller: "update seller set name=?,email=?,phone=?,address=? where id=?",
    DeleteSeller: "delete from seller where id=?"
}
const d_b=require("../config/db")

const getAllProducts=(callback)=>{
  const cmd="SELECT * FROM products";
  d_b.query(cmd,callback);
}


const getProduct=(id,callback)=>{
  const cmd="SELECT * FROM products where id=?";
  d_b.query(cmd,[id],callback);
}



const addProduct =(name, price, description,image,callback)=>{
  const cmd="INSERT INTO products (name , price , description,image ) VALUES (?,?,?,?)"
  d_b.query(cmd,[name,price,description,image],callback);

}

const editProduct = (id,name,price,description,image,callback)=>{
  const cmd="UPDATE products set name = ?,price=?, description = ?,image=? where id=?";
  d_b.query(cmd,[name, price , description, image ,id] ,callback);
}

const removeProduct = (id,callback)=>{
  const cmd="DELETE FROM products where id=?";
  d_b.query(cmd,[id] ,callback);
}


module.exports={
  getAllProducts,
  getProduct,
  addProduct,
  editProduct,
  removeProduct,

};



const Product = require("../model/productModel");

const getAllProducts = (req,res) =>{
  Product.getAllProducts((err,results) =>{
    if(err) {
      return res.status(500).json({
        success : false,
        message:err.message,
      })
    }
     res.status(200).json({
      success: true,
      data: results,
    });
  });
};

const getProduct = (req,res) =>{
  const {id} = req.params;
  Product.getProduct(id,(err,results) =>{
    if(err) {
      return res.status(500).json({
        success : false,
        message:err.message,
      })
    }
    if(results.length===0) {
      return res.status(500).json({
        success : false,
        message:"Product with id = {id}",
      })
    }

     res.status(200).json({
      success: true,
      data: results,
    });
  });
};

const addProduct =(req,res)=>{
  const {name,price,description,image}=req.params;
  Product.addProduct(name,price,description,image,(err,results)=>{
    if(err){
      return res.status(500).json({
        success : false,
        message:err.message,
      })
    }
    res.status(200).json({
      success: true,
      data: results,
    });

  });
};

const editProduct =(req,res)=>{
  const {id,name,price,description,image}=req.params;
  Product.editProduct(id,name,price,description,image,(err,results)=>{
    if(err){
      return res.status(500).json({
        success : false,
        message:err.message,
      })
    }
    res.status(200).json({
      success: true,
      data: results,
    });

  });
};

const removeProduct =(req,res)=>{
  const {id}=req.params;
  Product.removeProduct(id,(err,results)=>{
    if(err){
      return res.status(500).json({
        success : false,
        message:err.message,
      })
    }
    res.status(200).json({
      success: true,
      data: results,
    });

  });
};

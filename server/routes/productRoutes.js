const express=require("express");
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  addProduct,
  editProduct,
  removeProduct,
} = require("../controllers/productController")

router.get("/",getAllProducts);
router.get("/:id",getProduct);
router.post("/",addProduct);
router.put("/:id",editProduct);
router.delete("/:id",removeProduct);

module.exports=router;



const express = require("express");
const cors = require("cors");
const app = express();

const productRoutes=require("./routes/productRoutes")

app.use(cors());
app.use(express.json());
app.use("/products",productRoutes);
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
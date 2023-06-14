const express = require("express");
const products = require("./data");
const app = express();
const PORT = 8000;
app.get("/api/products", (req, res) => {
  console.log(req);
  console.log(products);
  return res.status(200).json(products);
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

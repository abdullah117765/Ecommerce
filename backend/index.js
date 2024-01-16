const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
// const User = require('./models/User');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');


const app = express();
const port = process.env.PORT || 3001;
const dbURI = process.env.ATLAS_URI;




mongoose.connect(dbURI)
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });    

app.use(cors());
app.use(express.json());
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






  

  app.get('/', (req, res) => {
 res.send("welcome")
  });


app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/order', orderRoutes);


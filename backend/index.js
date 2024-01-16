const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
// const User = require('./models/User');



// const transactionRoutes = require('./routes/transactionRoutes');
// const userRoutes = require('./routes/userRoutes');


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



//   app.use('/users' , userRoutes);
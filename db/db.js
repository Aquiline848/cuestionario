const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://mongo:PvsL8bIosivTxkkNxNVJ@containers-us-west-64.railway.app:5938/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(function (connection) {
    console.log("Connected to MongoDB");
  })
  .catch(function (error) {
    console.log("Error connecting to MongoDB: " + error);
  });
const cuestionarySchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    guanahani: String,
    puerto_rico: String,
    cantidad_carabelas: Number,
    from: String,
    liked: Number


})
module.exports.model = mongoose.model("schema", cuestionarySchema);


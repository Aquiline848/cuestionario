const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose
  .connect(
      process.env.MONGO_URL,
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
const questionarySchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    guanahani: String,
    puerto_rico: String,
    cantidad_carabelas: Number,
    first: String,
    from: String,
    liked: Number


})
module.exports.model = mongoose.model("schema", questionarySchema);


const mongoose = require("mongoose");
mongoose
  .connect(
      procces.env.MONGO_URL,
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


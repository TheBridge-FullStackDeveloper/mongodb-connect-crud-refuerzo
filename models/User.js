const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  externalId: { type: Number, unique: true },
  name: String,
  email: String,
  city: String,
})

module.exports = mongoose.model("User", userSchema)

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const form = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
})
var Feedbacks = mongoose.model("form", form)

module.exports = Feedbacks

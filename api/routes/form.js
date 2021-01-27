const express = require("express")
const bodyParser = require("body-parser")
const Forms = require("../models/formmodel")

const formrouter = express.Router()

formrouter.use(bodyParser.json())
formrouter.route("/").post((req, res, next) => {
  Forms.create(req.body)
    .then(
      feed => {
        console.log("Form Created ", feed)
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.json(feed)
      },
      err => next(err)
    )
    .catch(err => next(err))
})
module.exports = formrouter;

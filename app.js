const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
Genre = require("./models/genre")
Book = require("./models/book")

mongoose.connect(
  "mongodb://admin:admin100@ds133627.mlab.com:33627/bookstore",
  { useNewUrlParser: true }
)

var db = mongoose.connection

// Genre.getGenres((err, data) => {
//   console.log(data)
// })

// Book.getBooks((err, data) => {
//   console.log(data)
// })

app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Get Book By Id
app.get("/api/books/:_id", async (req, res) => {
  let book = await Book.getBookById(req.params._id)
  res.send(book)
})

app.get("/api/genres", (req, res) => {
  res.send("Hello World!")
})

app.listen(3000, () => {
  console.log("We are Live on Port 3000")
})

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

app.get("/", (req, res) => {
  res.send("Use /api/books OR /api/genres")
})

// Get All Books

app.get("/api/books", async (req, res) => {
  let books = await Book.getBooks()

  res.send(books)
})

// Get Book By Id
app.get("/api/books/:_id", async (req, res) => {
  let book = await Book.getBookById(req.params._id)
  res.send(book)
})

// Get Book By Title
app.get("/api/books/title/:title", async (req, res) => {
  let book = await Book.getBookByName(req.params.title)
  res.send(book)
})

// Get All Genres

app.get("/api/genres", async (req, res) => {
  let genres = await Genre.getGenres()
  res.send(genres)
})

// Get Genre By Name

app.get("/api/genres/:name", async (req, res) => {
  let genre = await Genre.getGenreByName(req.params.name)
  res.send(genre)
})

app.listen(3000, () => {
  console.log("We are Live on Port 3000")
})

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

app.use(bodyParser.json())

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

// Add Book

app.post("/api/addBook", (req, res) => {
  // req.body.title = "Rohito Bhambhani"
  let book = {
    title: "Rohito Bhambhani",
    genre: "Suspense",
    author: "Rohito Bhambhani",
    pages: "900",
    description:
      "Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and business development.",
    buy_url: "http://www.rohito.com"
  }

  Book.addBook(book)

  res.send({
    Status: 200,
    msg: "Book Added",
    book
  })
})

// Add Genre

app.post("/api/addGenre", async (req, res) => {
  // req.body.title = "Rohito Bhambhani"

  const { name } = req.body
  let genre = {
    name
  }

  genre = await Genre.addGenre(genre)

  res.send({
    Status: 200,
    msg: "Genre Added",
    genre
  })
})

// Update Genre

app.post("/api/updateGenre/:_id", async (req, res) => {
  const { name } = req.body
  let genre = {
    id: req.params._id,
    name
  }

  let updatedGenre = await Genre.updateGenre(genre)

  res.send({
    Status: 200,
    msg: "Genre Updated",
    updatedGenre
  })
})

// Delete Genre

app.delete("/api/deleteGenre/:_id", async (req, res) => {
  let genre = {
    id: req.params._id
  }

  await Genre.deleteGenre(genre)

  res.send({
    Status: 200,
    msg: "Genre Deleted"
  })
})

// Delete Book

app.delete("/api/deleteBook/:_id", async (req, res) => {
  let book = {
    id: req.params._id
  }

  await Book.deleteBook(book)

  res.send({
    Status: 200,
    msg: "Book Deleted"
  })
})

app.listen(3000, () => {
  console.log("We are Live on Port 3000")
})

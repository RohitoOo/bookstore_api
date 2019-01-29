let mongoose = require("mongoose")

// Book Schema

var bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buy_url: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

let Book = (module.exports = mongoose.model("Book", bookSchema))

// Get Genres

module.exports.getBooks = () => {
  return Book.find()
}

module.exports.getBookById = id => {
  return Book.findById(id)
}

module.exports.getBookByName = title => {
  return Book.find({ title })
}

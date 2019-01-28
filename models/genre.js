let mongoose = require("mongoose")

// Genre Schema

var genreSchema = mongoose.Schema({
  name: {
    type: String,
    requires: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

let Genre = (module.exports = mongoose.model("Genre", genreSchema))

// Get Genres

module.exports.getGenres = callback => {
  Genre.find(callback)
}

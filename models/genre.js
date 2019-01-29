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

module.exports.getGenres = () => {
  return Genre.find()
}

module.exports.getGenreByName = name => {
  return Genre.find({ name })
}

module.exports.addGenre = genre => {
  return Genre.create(genre)
}

module.exports.updateGenre = genre => {
  console.log(genre.id, genre.name)

  return Genre.findOneAndUpdate({ _id: genre.id }, { name: genre.name })
}

module.exports.deleteGenre = genre => {
  return Genre.remove({ _id: genre.id })
}

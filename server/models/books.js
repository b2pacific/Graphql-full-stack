const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    gener: String,
    authorId: String
})

module.exports = bookSchema.model("Book", bookSchema);
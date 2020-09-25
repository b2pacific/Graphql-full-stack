const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number
})

module.exports = bookSchema.model("Author", authorSchema);
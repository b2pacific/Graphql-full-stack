const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema/schema");
const app = express();
var mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/graphql", {useNewUrlParser: true});

connect.then(function (db) {
  console.log("Connected correctly to server");
}, (err) => {
  console.log(err);
});

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema: schema
}))

app.listen(4000, () => {
    console.log("Listening on 4000");
    
})
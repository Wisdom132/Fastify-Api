const mongoose = require('mongoose')
const fastifyPlugin = require('fastify-plugin')

// Connect to DB
let db = () => {
    mongoose
        .connect("mongodb://localhost:27017/fastify-blog", {
            useNewUrlParser: true
        })
        .then(() => {
            console.log("Database is connected");
        })
        .catch(err => {
            console.log({
                database_error: err
            });
        })
}

module.exports = fastifyPlugin(db)
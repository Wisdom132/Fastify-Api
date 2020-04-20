const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose')

// Connect to DB
async function dbConnector(fastify, options) {
    const url = "mongodb://localhost:27017/fastify-blog"
    const db = await mongoose
        .connect(url, {
            useNewUrlParser: true
        })
    fastify.decorate('mongo', db)
}
module.exports = fastifyPlugin(dbConnector)
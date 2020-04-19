const fastify = require('fastify');
const PORT = process.env.PORT || 3000;
const db = require("./config/db")
const routes = require("./routes/postRoutes")
const app = fastify({
    logger: true
})

app.register(db)

routes.forEach((route, index) => {
    app.route(route)
})
app.get("/", async () => {
    return {
        Message: "Fastify is On Fire"
    }
})

const start = async () => {
    try {
        await app.listen(PORT)
        app.log.info(`server listening on ${app.server.address().port}`)

    } catch (err) {
        app.log.error(err)
        process.exit(1)

    }
}
start();
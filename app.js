const express = require("express");
const app = express();
const path =require("path")
const PORT = 3000;

app.use(express.static("public"))

const IndexRouter = require("./routers/index.js")

app.use("/", IndexRouter)

app.listen(PORT, () => {
    console.log(`servidor levantado en enlace : http://localhost:${PORT}`)
})
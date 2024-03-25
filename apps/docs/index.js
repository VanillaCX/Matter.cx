const express = require('express')
const app = express()

/* APP LOCAL VARS */
app.locals.title = 'Matter.cx: Docs'

const catch_all_router = require("./routes/catch_all.js");

app.use("/", catch_all_router)



module.exports = {app}
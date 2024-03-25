const express = require('express')
const app = express()

const subdomains = require("./routes/subdomains.js")
const catch_all_router = require("./routes/catch_all.js");

/* APP CONFIG */
app.set("subdomain offset", 2)


/* APP LOCAL VARS */
app.locals.title = 'Matter.cx'

// Routers for Subdomains
app.use(subdomains.router)

// Catch all Router
app.use("/", catch_all_router)


app.listen(3030, () => console.log(`Server listening on port: 3030`));
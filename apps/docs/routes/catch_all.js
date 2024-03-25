const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log(`DOCS REQUEST :${Date.now()}`)
   
    next()
})

router.get("/", (req, res, next) => {
    res.send("DOCS App")
})

// Fallback for un-matched requests
router.use((req, res) => {
    res.send("NOT FOUND - RETURNED BY DOC APP")
})

module.exports = router
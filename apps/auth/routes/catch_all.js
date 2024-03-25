const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log(`AUTH REQUEST :${Date.now()}`)
   
    next()
})

router.get("/", (req, res, next) => {
    res.send("AUTH App")
})

// Fallback for un-matched requests
router.use((req, res) => {
    res.send("NOT FOUND - RETURNED BY AUTH APP")
})

module.exports = router
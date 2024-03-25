const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log(`API REQUEST :${Date.now()}`)
   
    next()
})

router.get("/", (req, res, next) => {
    res.send("API App")
})

// Fallback for un-matched requests
router.use((req, res) => {
    res.send("NOT FOUND - RETURNED BY API APP")
})

module.exports = router
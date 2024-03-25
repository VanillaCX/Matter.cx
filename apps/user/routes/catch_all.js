const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log(`USER REQUEST :${Date.now()}`)
   
    next()
})

router.get("/", (req, res, next) => {
    res.send("USER App")
})

// Fallback for un-matched requests
router.use((req, res) => {
    res.send("NOT FOUND - RETURNED BY USER APP")
})

module.exports = router
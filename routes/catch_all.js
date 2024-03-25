const express = require('express')
const router = express.Router()



router.use((req, res, next) => {
    console.log(`APEX REQUEST :${Date.now()}`)
    // Res locals are available to templates during the cycle of a single request
    res.locals.user = "req.user"
    
    next()
})

router.get("/", (req, res, next) => {
    res.send("APEX App")
})

// Fallback for un-matched requests
router.use((req, res) => {
    res.send("NOT FOUND - RETURNED BY APEX APP")
})

module.exports = router
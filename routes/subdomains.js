const api = require("../apps/api")
const auth = require("../apps/auth")
const docs = require("../apps/docs")
const user = require("../apps/user")
const user_api = require("../apps/user_api")

const router = (req, res, next) => {
    console.log(req.subdomains);

    if (req.subdomains.length === 0) {
        // matter.cx
        next()
    } else {
        // Determine action for sub domain

        switch(req.subdomains[0]) {
            case "api":
                // api.matter.com
                api.app(req, res, next);

                break;
            case "docs":
                // docs.matter.com
                docs.app(req, res, next);

                break;
            case "auth":
                // auth.matter.cx
                auth.app(req, res, next);

                break;
            default:
                // <user>.matter.cx
                // Check the user exists
                
                if(req.subdomains.length === 1){
                    // <user>.matter.cx
                    user.app(req, res, next)
                } else {

                    switch (req.subdomains[1]) {
                        case "api":
                            // api.<user>.matter.cx
                            user_api.app(req, res, next)

                            break;
                        default:
                            // Second sub domain is not recognised. Go to User App
                            user.app(req, res, next)
                            break;
                    }
                }

                break
        }
    }

}

const routerBAK = (req, res, next) => {
    console.log(req.subdomains);

    if (req.subdomains.length === 0) {
        // matter.cx
        next()
    } else {
        // Determine action for sub domain

        switch(req.subdomains[0]) {
            case "api":
                // api.matter.com
                api.app(req, res, next);

                break;
            case "docs":
                // docs.matter.com
                docs.app(req, res, next);

                break;
            case "auth":
                // auth.matter.cx
                auth.app(req, res, next);

                break;
            default:
                // <user>.matter.cx
                // Check the user exists
                
                if(req.subdomains.length === 1){
                    // <user>.matter.cx
                    user.app(req, res, next)
                } else {

                    switch (req.subdomains[1]) {
                        case "api":
                            // api.<user>.matter.cx
                            user_api.app(req, res, next)

                            break;
                        default:
                            // Second sub domain is not recognised. Go to User App
                            user.app(req, res, next)
                            break;
                    }
                }

                break
        }
    }

}

module.exports = {router}
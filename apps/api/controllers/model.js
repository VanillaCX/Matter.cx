//const {Model} = require("@VanillaCX/Model")

class ErrorResourceNotFound extends Error {
    constructor(message, details = {}){
        super(message)

        this.name = "ErrorResourceNotFound"
        this.code = 404
        this.details = details
    }
}

class Model {
    #latest; 
    constructor(){
        this.#latest = {
            title: "Lee"
        }
    }

    get latest(){
        return this.#latest
    }

    static open(){
        //throw new ErrorResourceNotFound()
        return new Model()
    }
}

const get_model = (req, res, next) => {
    // Need to validate before using in code
    const params = {
        model: req.params.model
    }

    try {
        const model = Model.open(params)

        const data = model.latest
        res.send(`model/display ${res.locals.model}`); //, {data});

    } catch(e) {
        if (e.name === "ErrorResourceNotFound") {
            res.send(`Create New ${res.locals.model}`);//, {params});

        } else {
            res.send("common/errors/404");

        }
    }
}

module.exports = {get_model}
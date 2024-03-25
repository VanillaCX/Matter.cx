//const {Model} = require("@VanillaCX/Model")

class ErrorResourceNotFound extends Error {
    constructor(message, details = {}){
        super(message)

        this.name = "ErrorResourceNotFound"
        this.code = 404
        this.details = details
    }
}

class Matter {
    #latest; 
    constructor(){
        this.#latest = {
            title: "Lee"
        }
    }

    get latest(){
        return this.#latest
    }

    get branches(){
        return ["list", "of", "branches"]
    }

    static getMatter({model, matter, branch = "main"}){
        return {model, matter, branch}
    }

    static getBranches({model, matter}){
        return ["list", "of", "branches"]
    }

    static open(){
        //throw new ErrorResourceNotFound()
        return new Matter()
    }
}

const get_branches = (req, res, next) => {
    // Need to validate before using in code
    

    try {
        const branches = Matter.getBranches({
            model: res.locals.model,
            matter: res.locals.matter,
        })

        
        res.send(`matter/display branches for ${res.locals.model} / ${res.locals.matter}, ${branches}`); //, {data});

    } catch(e) {
        if (e.name === "ErrorResourceNotFound") {
            res.send(`Create New Matter ${res.locals.model} / ${res.locals.matter}`);//, {params});

        } else {
            res.send("Unknown Error Opening Matter");

        }
    }
}

const get_matter = (req, res, next) => {
    // Need to validate before using in code
    

    try {
        const matter = Matter.getMatter({
            model: res.locals.model,
            matter: res.locals.matter,
            branch: res.locals.branch
        })

        res.send(`Matter ${matter.model} / ${matter.matter}, ${matter.branch}`); //, {data});

    } catch(e) {
        if (e.name === "ErrorResourceNotFound") {
            res.send(`Create New Matter ${res.locals.model} / ${res.locals.matter}`);//, {params});

        } else {
            res.send("Unknown Error Opening Matter");

        }
    }
}

module.exports = {get_matter, get_branches}
const express = require('express')
const app = express()

const model_controller = require("./controllers/model.js");
const matter_controller = require("./controllers/matter.js");
const catch_all_router = require("./routes/catch_all.js");

const {add_params_to_res_locals} = require("../../modules/sanitise_tools")
app.param(["model", "matter", "branch"], add_params_to_res_locals)


app.get("/:model", model_controller.get_model)
app.get("/:model/:matter", matter_controller.get_matter)

app.get("/:model/:matter/branches", matter_controller.get_branches)

app.get("/:model/:matter/branches/:branch", matter_controller.get_matter)


app.use("/", catch_all_router)



module.exports = {app}
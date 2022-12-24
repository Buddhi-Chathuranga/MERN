const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catogorySchema = new Schema({
    name: {
        type : String,
        required : true
    }
})

const Catogory = mongoose.model("Catogory",catogorySchema);

module.exports = Catogory;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    catogory : {
        type : String,
        required : true
    },
    subcatogory : {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    desc: {
        type : String,
        required : true
    }
})

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;
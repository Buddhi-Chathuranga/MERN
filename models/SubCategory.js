const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    category: {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    }
})

const SubCategory = mongoose.model("SubCategory",subCategorySchema);

module.exports = SubCategory;
const router = require("express").Router();
let Item = require("../models/Item");
let Category = require("../models/Category");
let SubCategory = require("../models/SubCategory");

router.route("/test").get((req,res) => {
    
    return res.json("Pass");

})

router.route("/add").post((req,res) => {
    const category = req.body.category;
    const subcategory = req.body.subcategory;
    const name = req.body.name;
    const desc = req.body.desc;

    const newItem = new Item({
        category,
        subcategory,
        name,
        desc
    })

    newItem.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/").get((req,res) => {
    Item.find().then((Items)=>{
        res.json(Items)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const {category,subcategory,name,desc} = req.body;

    const updateItem = {
        category,
        subcategory,
        name,
        desc
    }

    const update = await Item.findByIdAndUpdate(userId, updateItem)
    .then(() =>{
        res.status(200).send({status: "Item updated" });
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error while updateing", error: err.message()});
    })
})

router.route("/delete/:id").delete(async (req,res) =>{
    let userId = req.params.id;

    await Item.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Item deleted"});
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error while deleting", error: err.message()});
    })
})

router.route("/get/:id").get(async (req,res) =>{
    let id = req.params.id;
    const user = await Item.findById(id,function (err, Item){
        return res.json( Item )
    }).catch((err)=>{
        return res.json( err )
    })
})


router.route("/sort_by_category").get(async (req,res) =>{
    const {category,subcategory} = req.body;
    var arr = [];
    const CategoryID = Item.find({category:category,subcategory:subcategory}).then((Items)=>{
        Items.forEach(function(table) {
            var tableName = table.id;
            arr.push(tableName);
        })
        return res.json( arr )
    }).catch((err)=>{
        console.log(err)
    })

    
})


module.exports = router;
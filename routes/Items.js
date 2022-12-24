const router = require("express").Router();
let Item = require("../models/Item");

router.route("/test").get((req,res) => {
    
    return res.json("Pass");

})

router.route("/add").post((req,res) => {
    const catogory = req.body.catogory;
    const subcatogory = req.body.subcatogory;
    const name = req.body.name;
    const desc = req.body.desc;

    const newItem = new Item({
        catogory,
        subcatogory,
        name,
        desc
    })

    newItem.save().then(()=>{
        res.json("Item Added")
    }).catch((err)=>{
        res.json(err.message);
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
    const {catogory,subcatogory,name,desc} = req.body;

    const updateItem = {
        catogory,
        subcatogory,
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

module.exports = router;
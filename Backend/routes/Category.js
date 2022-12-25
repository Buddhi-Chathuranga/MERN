const router = require("express").Router();
let Category = require("../models/Category");

router.route("/test").get((req,res) => {
    
    return res.json("Pass");

})

router.route("/add").post((req,res) => {
    const name = req.body.name;

    const newCategory = new Category({
        name
    })

    newCategory.save().then(()=>{
        res.json("Category Added")
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/").get((req,res) => {
    Category.find().then((Categories)=>{
        res.json(Categories)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) =>{
    let userId = req.params.id;
    const {category,subcategory,name,desc} = req.body;

    const updateCategory = {
        category,
        subcategory,
        name,
        desc
    }

    const update = await Category.findByIdAndUpdate(userId, updateCategory)
    .then(() =>{
        res.status(200).send({status: "Category updated" });
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error while updateing", error: err.message()});
    })
})

router.route("/delete/:id").delete(async (req,res) =>{
    let userId = req.params.id;

    await Category.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Category deleted"});
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error while deleting", error: err.message()});
    })
})

router.route("/get/:id").get(async (req,res) =>{
    let id = req.params.id;
    const user = await Category.findById(id,function (err, Category){
        return res.json( Category )
    }).catch((err)=>{
        return res.json( err )
    })
})


// router.route("/sort_by_category/:category").get(async (req,res) =>{
//     let category = req.params.category;
//     const sub_category = await Category.(id,function (err, Category){
//         return res.json( Category )
//     }).catch((err)=>{
//         return res.json( err )
//     })
// })


module.exports = router;
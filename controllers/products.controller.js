var productData = require('../models/data/productdetails.json');
var fs = require('fs');
var path = require('path')

module.exports.getAllProducts = (req,res,next)=>{
    console.log(req.url);
    console.log(req.query);
    var offset = 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,10);
    }
    if(req.query && req.query.count){
        count = parseInt(req.query.count,10);
    }

    var products = productData.slice(offset,count);
    console.log(products.length);
    
    res.status(200).set('application/json')
    .json(products);
}

module.exports.getOneProduct = (req,res,next)=>{
    console.log(req.params);
    
    var productId = req.params.productId;

    if(req.params.productId < productData.length){
        var product = productData[parseInt(productId,10)];

        res.status(200).set('application/json')
        .json(product);
    }
    else {
        res.status(404).set('application/json')
        .json({
            error:"NOT FOUND",
            msg:"ProductID not found"
        })
    }
}

module.exports.addOneProduct = (req,res,next)=>{
    console.log("Add one product");
    if(req.body){
        fs.appendFile('./utils/data.json',JSON.stringify(req.body),(error)=>{
            if(error) throw error;
            else console.log("ok")
        })
    }
    // console.log(req.body);
    res.status(200).set('application/json')
    .json(req.body)
    
}

/*remove req.body, body-parser  */
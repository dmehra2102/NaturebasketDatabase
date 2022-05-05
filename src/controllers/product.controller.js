const Product = require('../model/product.model.js');
const express = require('express');
const router = express.Router();

router.get("", async (req,res)=>{
    try {
        const product = await Product.find().lean().exec();
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("", async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        return res.status(201).send(product);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(500).send(product);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(500).send(product);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;

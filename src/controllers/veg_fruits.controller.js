const express = require('express');
const Vegetable = require('../model/veg_fruits.model');
const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const vegetable = await Vegetable.find().lean().exec();
        return res.status(200).send(vegetable);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const vegetable = await Vegetable.findById(req.params.id).lean().exec();
        return res.status(200).send(vegetable);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("", async(req,res)=>{
    try {
        const vegetable = await Vegetable.create(req.body);
        return res.status(201).send(vegetable);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const vegetable = await Vegetable.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec();
        return res.status(200).send(vegetable);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const vegetable = await Vegetable.findByIdAndDelete(req.params.id).lean().exec();
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

module.exports = router;
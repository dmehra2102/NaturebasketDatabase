const Breakfast = require('../model/breakfast.model.js');
const express = require('express');
const router = express.Router();

router.get("", async (req,res)=>{
    try {
        const breakfast = await Breakfast.find().lean().exec();
        return res.status(200).send(breakfast);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async (req,res)=>{
    try {
        const breakfast = await Breakfast.findById(req.params.id).lean().exec();
        return res.status(200).send(breakfast);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("", async(req,res)=>{
    try {
        const breakfast = await Breakfast.create(req.body);
        
        return res.status(201).send(breakfast);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const breakfast = await Breakfast.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(500).send(breakfast);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const breakfast = await Breakfast.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(500).send(breakfast);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;

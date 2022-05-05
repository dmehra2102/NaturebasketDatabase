const express = require('express');
const Cleaner = require('../model/TrendingProduct.model.js');
const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const cleaner = await Cleaner.find().lean().exec();
        return res.status(200).send(cleaner);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const cleaner = await Cleaner.findById(req.params.id).lean().exec();
        return res.status(200).send(cleaner);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("", async(req,res)=>{
    try {
        const cleaner = await Cleaner.create(req.body);
        return res.status(201).send(cleaner);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const cleaner = await Cleaner.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(201).send(cleaner);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const cleaner = await Cleaner.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(cleaner);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;
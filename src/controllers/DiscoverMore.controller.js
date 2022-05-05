const express = require('express');
const Pharama = require('../model/DiscoverMore.model.js');
const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const pharma = await Pharama.find().lean().exec();
        return res.status(200).send(pharma);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const pharma = await Pharama.findById(req.params.id).lean().exec();
        return res.status(200).send(pharma);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("", async(req,res)=>{
    try {
        const pharma = await Pharama.create(req.body);
        return res.status(201).send(pharma);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const pharma = await Pharama.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(201).send(pharma);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const pharma = await Pharama.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(pharma);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;
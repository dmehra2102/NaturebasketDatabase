const express = require('express');
const Atta = require('../model/offersProduct.model.js');
const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const atta = await Atta.find().lean().exec();
        return res.status(200).send(atta);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const atta = await Atta.findById(req.params.id).lean().exec();
        return res.status(200).send(atta);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("", async(req,res)=>{
    try {
        const atta = await Atta.create(req.body);
        return res.status(201).send(atta);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.patch("/:id", async(req,res)=>{
    try {
        const atta = await Atta.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.status(201).send(atta);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const atta = await Atta.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(atta);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;
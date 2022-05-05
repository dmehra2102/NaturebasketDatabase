const express = require('express');
const Personalcare = require('../model/personal_care.model');

const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const personal = await Personalcare.find().lean().exec();

        return res.status(200).send(personal);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.get("/:id", async(req,res)=>{
    try {
        const personal = await Personalcare.findById(req.params.id).lean().exec();
        return res.status(200).send(personal);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("", async(req,res)=>{
    try {
        const personal =  await Personalcare.create(req.body);
        return res.status(201).send(personal);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})

router.patch("/:id", async(req,res)=>{
    try {
        const personal = await Personalcare.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.status(201).send(personal);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const personal = await Personalcare.findByIdAndDelete(req.params.id).lean().exec();
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

module.exports = router;
const mongoose  = require('mongoose');

const pharma_wellnessscehma = new mongoose.Schema({
    mrp : {type:String,required:true},
    img : {required:true , type:String},
    title: {required :true, type:String},
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("DiscoverMore",pharma_wellnessscehma);
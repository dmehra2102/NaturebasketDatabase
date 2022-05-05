const mongoose = require('mongoose');

const cleanerschema = new mongoose.Schema({
    mrp : {type:String,required:true},
    img : {required:true , type:String},
    title: {required :true, type:String},
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("TrendingProduct",cleanerschema);
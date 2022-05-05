const mongoose = require('mongoose');

const breakfastschema = new mongoose.Schema({
    productName : {type:String,required:true},
    img : {required:true , type:String},
    quantity: {required :true, type:String},
    price : {required:true, type:String},
},
{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("breakfast",breakfastschema);
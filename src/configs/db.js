const mongoose = require('mongoose');

const connectmongoDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false");
}

module.exports = connectmongoDB;
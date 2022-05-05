const express = require('express');
const connectmongoDB = require('./configs/db.js');
const app = express();
const productcontroller = require('./controllers/product.controller.js');
const vegetablecontroller = require('./controllers/veg_fruits.controller.js');
const pharmawellnesscontroller = require('./controllers/DiscoverMore.controller.js');
const personalcarecontroller = require('./controllers/personal_care.controller.js');
const breakfastcontroller = require('./controllers/breakfast.controller.js')
const cleanercontroller = require('./controllers/TrendingProduct.controller.js')
const offercontroller = require('./controllers/offersProduct.controller.js')

app.use(express.json());

app.use("/products",productcontroller);
app.use("/vegetables",vegetablecontroller);
app.use("/discover_more",pharmawellnesscontroller);
app.use("/personal_care",personalcarecontroller);
app.use("/breakfast",breakfastcontroller);
app.use("/trendingProduct",cleanercontroller);
app.use('/offers',offercontroller);

app.listen(4000, async()=>{
    try {
        await connectmongoDB();
    } catch (error) {
        console.log(error)
    }
    console.log("listening at port 5000");
})
const mongoose = require('mongoose');

const mogo_url = process.env.MONGO_CONN;
mongoose.connect(mogo_url)
    .then(()=>{
        console.log("mongodb connected..");
    }).catch((err)=>{
        console.log("mognodb connection failed",err);
    })


    
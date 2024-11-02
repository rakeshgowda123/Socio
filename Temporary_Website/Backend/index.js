const express = require('express');
const app = express();
require('dotenv').config();
require('./modules/database')
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require("./routers/AuthRouter")
const userData = require("./routers/userDataRouter");

const PORT = process.env.PORT||8080;


app.use(bodyParser.json());
app.use(cors());
app.use('/user',auth);
app.use('/user',userData);


app.listen(PORT,()=>{
    console.log("Server start");
})
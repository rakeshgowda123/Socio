



const userDataController = require("../controllers/userdataController").userData;
const {userdataValidation} = require("../middleware/userDataMiddleware")


const express = require('express');
const router = express.Router();

router.post('/userdata',userdataValidation,userDataController);



module.exports= router;
const Joi = require('joi');

const signupValidation =(req,res,next)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        number: Joi.number().integer().required(),
    });
    const {error}= schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"bad requist",error})
    }
    next();
}

const loginValidation =(req,res,next)=>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });
    const {error}= schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"bad requist",error})
    }
    next();
}

module.exports={
    signupValidation,
    loginValidation
}
const Joi = require("joi");

const userdataValidation =(req,res,next)=>{
    const schema = Joi.object({
        fullname: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.number().integer().min(1000000000).max(9999999999).required(), // Assuming a 10-digit number
        gender: Joi.string().valid('Male', 'Female', 'Other').required(), // Enum validation for gender
        age: Joi.number().integer().min(1).required(), // Validating age
        collegeName: Joi.string().required(),
        currentEducation: Joi.string().required(),
        stream: Joi.string().required(),
        graduationYear: Joi.number().integer().min(1900).required(), // Ensuring valid graduation year
        internships:  Joi.string(), 
        // internships: Joi.array().items(Joi.string()).default([]), // Array of strings for internships
        certifications: Joi.string() ,
        technicalSkills: Joi.string().required(), // Array of strings for technical skills
        softSkills:  Joi.string(), // Array of strings for soft skills
        languages:  Joi.string(), // Array of strings for languages
        portfolio: Joi.string(),
        linkedInProfile: Joi.string(),
        resume: Joi.string()
   
    });
    const {error} = schema.validate(req.body);
    if(error){
        // return res.status(400).send({message:"bad requist",error})
        return res.status(400).json({message:"bad requist",error})
    }
    next();
}

module.exports={userdataValidation};
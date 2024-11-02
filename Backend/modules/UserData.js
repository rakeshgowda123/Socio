const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserDataSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },  // Dropdown for gender
    age: {type:Number,required:true},
    collegeName: { type: String, required: true },
    currentEducation: { type: String, required: true },
    stream: { type: String, required: true },
    graduationYear: {type:Number,required:true},
    internships: [String],  // List of internships as strings
    // Structured certifications array
    certifications:{ type: String}, 
    technicalSkills: { type: String, required: true },  // Array of skills
    softSkills: { type: String},  // Array of skills
    languages: { type: String},  // Array of languages
    portfolio: { type: String},
    linkedInProfile: { type: String, required: false },
    resume: { type: String },
});
const UserDataModel = mongoose.model('userdatas',UserDataSchema);

module.exports = UserDataModel;